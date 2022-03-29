create role myenergi SUPERUSER;
create role rdsadmin SUPERUSER;

-- create function uuid_nil() returns uuid
--     immutable
--     strict
--     parallel safe
--     language c
-- as
-- $$
-- begin
-- -- missing source code
-- end;
-- $$;

-- alter function uuid_nil() owner to rdsadmin;

-- create function uuid_ns_dns() returns uuid
--     immutable
--     strict
--     parallel safe
--     language c
-- as
-- $$
-- begin
-- -- missing source code
-- end;
-- $$;

-- alter function uuid_ns_dns() owner to rdsadmin;

-- create function uuid_ns_url() returns uuid
--     immutable
--     strict
--     parallel safe
--     language c
-- as
-- $$
-- begin
-- -- missing source code
-- end;
-- $$;

-- alter function uuid_ns_url() owner to rdsadmin;

-- create function uuid_ns_oid() returns uuid
--     immutable
--     strict
--     parallel safe
--     language c
-- as
-- $$
-- begin
-- -- missing source code
-- end;
-- $$;

-- alter function uuid_ns_oid() owner to rdsadmin;

-- create function uuid_ns_x500() returns uuid
--     immutable
--     strict
--     parallel safe
--     language c
-- as
-- $$
-- begin
-- -- missing source code
-- end;
-- $$;

-- alter function uuid_ns_x500() owner to rdsadmin;

-- create function uuid_generate_v1() returns uuid
--     strict
--     parallel safe
--     language c
-- as
-- $$
-- begin
-- -- missing source code
-- end;
-- $$;

-- alter function uuid_generate_v1() owner to rdsadmin;

-- create function uuid_generate_v1mc() returns uuid
--     strict
--     parallel safe
--     language c
-- as
-- $$
-- begin
-- -- missing source code
-- end;
-- $$;

-- alter function uuid_generate_v1mc() owner to rdsadmin;

-- create function uuid_generate_v3(namespace uuid, name text) returns uuid
--     immutable
--     strict
--     parallel safe
--     language c
-- as
-- $$
-- begin
-- -- missing source code
-- end;
-- $$;

-- alter function uuid_generate_v3(uuid, text) owner to rdsadmin;

-- create function uuid_generate_v4() returns uuid
--     strict
--     parallel safe
--     language c
-- as
-- $$
-- begin
-- -- missing source code
-- end;
-- $$;

-- alter function uuid_generate_v4() owner to rdsadmin;

-- create function uuid_generate_v5(namespace uuid, name text) returns uuid
--     immutable
--     strict
--     parallel safe
--     language c
-- as
-- $$
-- begin
-- -- missing source code
-- end;
-- $$;

-- alter function uuid_generate_v5(uuid, text) owner to rdsadmin;


CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

create type config_reply_boost_timer_heatertype_enum as enum ('heater1', 'heater2', 'relay1', 'relay2');

alter type config_reply_boost_timer_heatertype_enum owner to myenergi;

create type command_commandstate_enum as enum ('initial', 'inProgress', 'failed', 'success');

alter type command_commandstate_enum owner to myenergi;

create type command_commandinitiatorservice_enum as enum ('appApi', 'meLinkAppApi', 'adminApi', 'hubReceiver', 'other');

alter type command_commandinitiatorservice_enum owner to myenergi;

create type command_destinationdevicename_enum as enum ('eddi', 'zappi1', 'zappi2', 'harvi', 'libbi', 'hub');

alter type command_destinationdevicename_enum owner to myenergi;

create type update_box_updateboxicontype_enum as enum ('eddi', 'zappi1', 'zappi2', 'harvi', 'libbi', 'hub');

alter type update_box_updateboxicontype_enum owner to myenergi;

create type command_commandtype_enum as enum ('setModeEddi', 'setModeZappi', 'setModeLibbi', 'setLock', 'setPriority', 'setEddiBoost', 'readConfig', 'writeConfigSetHeaterPriority', 'writeConfigSetBoostTime', 'writeConfigSetMinGreenLevel');

alter type command_commandtype_enum owner to myenergi;

create table migrations
(
    id        serial
        constraint "PK_8c82d7f526340ab734260ea46be"
            primary key,
    timestamp bigint  not null,
    name      varchar not null
);

alter table migrations
    owner to myenergi;

create table zappi2_config_reply_data
(
    id                           serial
        constraint "PK_f5da991768799f1efbc44fe7daf"
            primary key,
    signature                    bigint              not null,
    compatibilitymodeminpwm      real                not null,
    devicelimit                  real                not null,
    compatibilitymodepowerfactor real                not null,
    exportmargin                 integer             not null,
    gridlimit                    integer             not null,
    password                     integer             not null,
    chargecompletedelay          integer             not null,
    language                     varchar,
    preconon                     boolean             not null,
    preconenergy                 smallint            not null,
    smartboosthour               smallint            not null,
    smartboostminute             smallint            not null,
    smartboostenergy             smallint            not null,
    esenseinput                  varchar,
    mingreenlevel                smallint            not null,
    startstoptimer               smallint            not null,
    ct1type                      varchar,
    ct1subtype                   varchar,
    boostingenergy               smallint            not null,
    ct2type                      varchar,
    ct2subtype                   varchar,
    locktimeout                  smallint            not null,
    backlightontime              smallint            not null,
    contrastlevel                smallint            not null,
    gentypeicon                  varchar,
    lockcode                     integer             not null,
    compatibilitymodeactive      boolean             not null,
    lockevplugged                boolean             not null,
    lockevunplugged              boolean             not null,
    lockhidereadings             boolean             not null,
    buzzeron                     boolean             not null,
    compatibilitymodeinfinitepwm boolean             not null,
    monitoringstatus             boolean             not null,
    dston                        boolean             not null,
    timezone                     varchar,
    dateformat                   varchar,
    batterymode                  varchar,
    defaultmode                  varchar,
    earthing                     varchar,
    gridpowerlimit               integer             not null,
    ct3type                      varchar,
    ct3subtype                   varchar,
    relay1pwm                    integer             not null,
    relay2pwm                    integer             not null,
    mainswitchpwm                integer             not null,
    locksolenoidpwm              integer             not null,
    timefromcloud                boolean             not null,
    ct1grouplimit                smallint            not null,
    ct2grouplimit                smallint            not null,
    ct3grouplimit                smallint            not null,
    ct4grouplimit                smallint            not null,
    ctinternalgroup              smallint            not null,
    ct1group                     smallint            not null,
    ct2group                     smallint            not null,
    ct3group                     smallint            not null,
    neutrallimit                 integer             not null,
    ct1g100                      boolean             not null,
    ct2g100                      boolean             not null,
    ct3g100                      boolean             not null,
    chargewhenpinlocked          boolean             not null,
    weldedrelaycheckdelay        integer             not null,
    perelaypwm                   integer             not null,
    plugincharge                 boolean             not null,
    chargein3phase               boolean             not null,
    ledbrightness                smallint            not null,
    ledfault                     jsonb               not null,
    ledgreencharging             jsonb               not null,
    ledmixcharging               jsonb               not null,
    leddirtycharging             jsonb               not null,
    ledchargecomplete            jsonb               not null,
    ledstateb                    jsonb               not null,
    phasereturn                  varchar,
    serverconfigtime             integer,
    esenselimitpwm               smallint            not null,
    deviceconfigtime             bigint              not null,
    ecopstopdelay                smallint default 30 not null,
    ctprimary                    smallint default 0  not null,
    randomdelaystart             smallint default 10 not null
);

alter table zappi2_config_reply_data
    owner to myenergi;

create table eddi_config_reply_data
(
    id                       serial
        constraint "PK_2635a0f6eeef3b81fd097be627f"
            primary key,
    signature                bigint   not null,
    gridlimit                smallint not null,
    devicelimit              smallint not null,
    batterymode              varchar,
    boosthotcanceldelay      smallint not null,
    minimumexport            integer  not null,
    exportmargin             integer  not null,
    calibration              bytea    not null,
    minimumexporttime        smallint not null,
    hottime                  smallint not null,
    heatertype1              varchar,
    heatertype2              varchar,
    passcode                 smallint not null,
    maxgridlimit             smallint not null,
    sparewasnetphasemetering smallint not null,
    heaterpriority           smallint not null,
    prioritycheckperiod      smallint not null,
    timezone                 varchar,
    dateformat               varchar,
    dston                    boolean  not null,
    updatefromcloud          boolean  not null,
    sparewasconfigversion    smallint not null,
    autosettimefromclouddone boolean  not null,
    language                 varchar,
    icons                    varchar,
    backlight                smallint not null,
    contrast                 smallint not null,
    ct1type                  varchar,
    ct1subtype               varchar,
    ct2type                  varchar,
    ct2subtype               varchar,
    savingskeepversion       smallint not null,
    ct1grouplimit            smallint not null,
    ct2grouplimit            smallint not null,
    ct3grouplimit            smallint not null,
    ct1group                 smallint not null,
    ct2group                 smallint not null,
    ct3group                 smallint not null,
    exprelay1onthreshold     integer  not null,
    exprelay1offthreshold    integer  not null,
    exprelay1mode            varchar,
    exprelay1boosttype       smallint not null,
    exprelay1heating         varchar,
    exprelay1includediverted boolean  not null,
    exprelay1minimumofftime  smallint not null,
    exprelay1minimumontime   smallint not null,
    exprelay2onthreshold     integer  not null,
    exprelay2offthreshold    integer  not null,
    exprelay2mode            varchar,
    exprelay2boosttype       smallint not null,
    exprelay2heating         varchar,
    exprelay2includediverted boolean  not null,
    exprelay2minimumofftime  smallint not null,
    exprelay2minimumontime   smallint not null,
    esensemode               varchar,
    esenseboostmode          varchar,
    esenseheaterenablemode   varchar,
    esenseboostenablemode    varchar,
    esenserelaycontrolmode   varchar,
    esensesetpoints1         smallint not null,
    esensesetpoints2         smallint not null,
    esensehysteresis1        smallint not null,
    esensehysteresis2        smallint not null,
    serverconfigtime         integer,
    deviceconfigtime         bigint   not null
);

alter table eddi_config_reply_data
    owner to myenergi;

create table zappi1_config_reply_data
(
    id                           serial
        constraint "PK_085dc1f7ec451606b70e1765ff6"
            primary key,
    signature                    bigint   not null,
    compatibilitymodeminpwm      real     not null,
    devicelimit                  real     not null,
    compatibilitymodepowerfactor real     not null,
    exportmargin                 integer  not null,
    gridlimit                    integer  not null,
    password                     integer  not null,
    chargecompletedelay          integer  not null,
    language                     varchar,
    phaseorphaserotation         varchar,
    smartboosthour               smallint not null,
    smartboostminute             smallint not null,
    smartboostenergy             smallint not null,
    esenseinput                  varchar,
    mingreenlevel                smallint not null,
    startstoptimer               smallint not null,
    ct1type                      varchar,
    ct1subtype                   varchar,
    boostingenergy               smallint not null,
    ct2type                      varchar,
    ct2subtype                   varchar,
    locktimeout                  smallint not null,
    backlightontime              smallint not null,
    contrastlevel                smallint not null,
    gentypeicon                  varchar,
    lockcode                     integer  not null,
    compatibilitymodeactive      boolean  not null,
    lockevplugged                boolean  not null,
    lockevunplugged              boolean  not null,
    lockhidereadings             boolean  not null,
    buzzeron                     boolean  not null,
    compatibilitymodeinfinitepwm boolean  not null,
    monitoringstatus             boolean  not null,
    dston                        boolean  not null,
    timezone                     varchar,
    dateformat                   varchar,
    batterymode                  varchar,
    triphaseon                   boolean  not null,
    preconditioning              varchar,
    defaultmode                  varchar,
    maxgridlimit                 smallint not null,
    plugincharge                 smallint not null,
    timefromcloud                boolean  not null,
    autosettimefromclouddone     boolean  not null,
    ct1grouplimit                smallint not null,
    ct2grouplimit                smallint not null,
    ct3grouplimit                smallint not null,
    ct1group                     smallint not null,
    ct2group                     smallint not null,
    ct3group                     smallint not null,
    deviceconfigtime             bigint   not null
);

alter table zappi1_config_reply_data
    owner to myenergi;

create table config_reply_boost_timer
(
    id                      serial
        constraint "PK_5a81356ceabecdd7309e8cc2414"
            primary key,
    heatertype              config_reply_boost_timer_heatertype_enum,
    slot                    smallint not null,
    duration                smallint not null,
    starthour               smallint not null,
    startminute             smallint not null,
    temperature             smallint,
    mondayon                boolean  not null,
    tuesdayon               boolean  not null,
    wednesdayon             boolean  not null,
    thursdayon              boolean  not null,
    fridayon                boolean  not null,
    saturdayon              boolean  not null,
    sundayon                boolean  not null,
    economy                 boolean  not null,
    zappi1configreplydataid integer
        constraint "FK_e2cdaf2df2747017221051a35c2"
            references zappi1_config_reply_data,
    zappi2configreplydataid integer
        constraint "FK_15922a19f27430f0b0eabcaf206"
            references zappi2_config_reply_data,
    eddiconfigreplydataid   integer
        constraint "FK_e2602aac09a25d51af32bcbe4c2"
            references eddi_config_reply_data
);

alter table config_reply_boost_timer
    owner to myenergi;

create index "IDX_e2cdaf2df2747017221051a35c"
    on config_reply_boost_timer (zappi1configreplydataid);

create index "IDX_15922a19f27430f0b0eabcaf20"
    on config_reply_boost_timer (zappi2configreplydataid);

create index "IDX_e2602aac09a25d51af32bcbe4c"
    on config_reply_boost_timer (eddiconfigreplydataid);

create table user_access
(
    id          serial
        constraint "PK_9404e012dec46d1faa719fd9bd7"
            primary key,
    type        varchar                   not null
        constraint "UQ_ba7e316ff7107fb69ae2659e94e"
            unique,
    permissions jsonb default '[]'::jsonb not null
);

alter table user_access
    owner to myenergi;

create table "user"
(
    id             serial
        constraint "PK_cace4a159ff9f2512dd42373760"
            primary key,
    email          varchar                  not null
        constraint "UQ_e12875dfb3b1d92d7d7c5377e22"
            unique,
    name           varchar                  not null,
    lastlogin      timestamp with time zone not null,
    socialtokenexp timestamp with time zone not null,
    accessid       integer                  not null
        constraint "FK_6f914d4404b61b1c43c63f1ba85"
            references user_access
);

alter table "user"
    owner to myenergi;

create table command
(
    id                          uuid     default uuid_generate_v4() not null
        constraint "PK_5bfa4e1cb54b62f512078f3e7cb"
            primary key,
    hubport                     integer                             not null,
    hubipaddress                varchar,
    hubnetworkid                integer                             not null,
    destinationdeviceaddressraw integer                             not null,
    destinationdeviceserialno   bigint                              not null,
    destinationdevicename       command_destinationdevicename_enum,
    commandtries                smallint default '0'::smallint      not null,
    commandlastsent             timestamp with time zone,
    commandinitiated            timestamp with time zone            not null,
    commandtype                 command_commandtype_enum,
    commandstate                command_commandstate_enum,
    commandinitiatorservice     command_commandinitiatorservice_enum,
    commandparameters           jsonb,
    commandinitiatoruserid      integer
        constraint "FK_40d8dba932313894c96c76fd26c"
            references "user"
);

alter table command
    owner to myenergi;

create index "IDX_5ecd9dd59b7ce9f54cc8e27346"
    on command (commandstate);

create index command_destinationdeviceserialno_idx
    on command (destinationdeviceserialno, commandstate);

create index "IDX_59c842125486053c4ca541a2ff"
    on command (destinationdeviceserialno, commandtype);

create table update_box
(
    id                uuid default uuid_generate_v4() not null
        constraint "PK_e310121e9dabb97a8dae3e9e285"
            primary key,
    updateboxicontype update_box_updateboxicontype_enum,
    leftcolor         varchar                         not null,
    rightcolor        varchar                         not null,
    title             varchar                         not null,
    description       varchar,
    displaydatetime   timestamp with time zone        not null
);

alter table update_box
    owner to myenergi;

create table server
(
    id        serial
        constraint "PK_f8b8af38bdc23b447c0a57c7937"
            primary key,
    isactive  boolean default false not null,
    name      varchar               not null
        constraint "UQ_e16254733ff2264f94f856316ee"
            unique,
    shard     varchar,
    ip        varchar               not null,
    url       varchar               not null,
    isdefault boolean default false not null
);

alter table server
    owner to myenergi;

create table alternate_servers
(
    id        integer not null
        constraint "PK_e61a680a6adf6a3372f5498a5da"
            primary key
        constraint "CHK_504aa2c030ad291fa1a4375848"
            check (id = 1),
    serveraid integer
        constraint "REL_f3f54c7cf1d5dbad68a2b17e78"
            unique
        constraint "FK_f3f54c7cf1d5dbad68a2b17e78b"
            references server,
    serverbid integer
        constraint "REL_d7ddafb47c4de740afe922c38d"
            unique
        constraint "FK_d7ddafb47c4de740afe922c38dc"
            references server
);

alter table alternate_servers
    owner to myenergi;

create table hub
(
    deviceclass                             varchar                                not null,
    serialno                                bigint                                 not null
        constraint "PK_2debac79742deb56cc3e1ace3a1"
            primary key,
    updatedat                               timestamp with time zone               not null,
    currentversion                          integer,
    regpassword                             varchar                                not null,
    apppassword                             varchar,
    uptime                                  integer,
    port                                    integer                                not null,
    ipaddress                               varchar,
    serverlastheard                         integer,
    lastauth                                timestamp with time zone,
    registrationdate                        timestamp with time zone,
    networkid                               integer                                not null,
    nodevices                               integer,
    masterdeviceclass                       varchar,
    masterdevicerawaddress                  integer,
    masterdeviceinstance                    integer,
    keyvaluestore                           jsonb,
    isblocked                               boolean                  default false not null,
    cloudipoverrideserverid                 integer
        constraint "FK_5f5e7698f128c95ac2417ad91f1"
            references server,
    loadcontrolgridimportexport             integer,
    loadcontrolgeneration                   integer,
    loadcontrolgridcurrentshundredthsphase1 integer,
    loadcontrolgridcurrentshundredthsphase2 integer,
    loadcontrolgridcurrentshundredthsphase3 integer,
    loadcontrolflagsnetphases               boolean,
    loadcontrolflagshubonnetwork            boolean,
    loadcontrolflagsgenctonnetwork          boolean,
    loadcontrolflagsgridlimits              boolean,
    loadcontrolflagsgridvalid               boolean,
    loadcontroldevicedata1serialno          bigint,
    loadcontroldevicedata1setload           integer,
    loadcontroldevicedata2serialno          bigint,
    loadcontroldevicedata2setload           integer,
    loadcontroldevicedata3serialno          bigint,
    loadcontroldevicedata3setload           integer,
    loadcontroldevicedata4serialno          bigint,
    loadcontroldevicedata4setload           integer,
    loadcontroldevicedata5serialno          bigint,
    loadcontroldevicedata5setload           integer,
    australia                               boolean                  default false not null,
    radiochannel                            smallint,
    microprocessorti                        boolean,
    createdat                               timestamp with time zone default CURRENT_TIMESTAMP,
    vhub                                    boolean,
    hubfirmwareversions                     jsonb
);

alter table hub
    owner to myenergi;

create table harvi
(
    deviceclass    varchar                  not null,
    serialno       bigint                   not null
        constraint "PK_6285c00e48bbf1e23e83d4bb8d3"
            primary key,
    updatedat      timestamp with time zone not null,
    currentversion integer,
    ct1            jsonb,
    ct2            jsonb,
    ct3            jsonb,
    ct4            jsonb,
    ct5            jsonb,
    ct6            jsonb,
    ct7            jsonb,
    ct8            jsonb,
    ct9            jsonb,
    ct10           jsonb,
    ct11           jsonb,
    ct12           jsonb,
    ct13           jsonb,
    ct14           jsonb,
    ct15           jsonb,
    ct16           jsonb,
    hubserialno    bigint
        constraint "FK_dc3d55a7d5df286caf5178dffe9"
            references hub,
    createdat      timestamp with time zone default CURRENT_TIMESTAMP
);

alter table harvi
    owner to myenergi;

create index "IDX_dc3d55a7d5df286caf5178dffe"
    on harvi (hubserialno);

create table aggregation_data
(
    id           serial
        constraint "PK_ddc7a0995733a50dc8df46d9270"
            primary key,
    admingroup   varchar,
    controlgroup varchar,
    groupkey     varchar,
    daf          smallint,
    ddf          smallint,
    uaf          smallint,
    udf          smallint,
    dsrdaf       smallint,
    dsrddf       smallint,
    dsruaf       smallint,
    dsrudf       smallint,
    fra          varchar,
    frm          varchar,
    frs          varchar,
    dds          varchar,
    lod          smallint,
    csn          smallint,
    ttl          smallint
);

alter table aggregation_data
    owner to myenergi;

create table zappi
(
    deviceclass                             varchar                                        not null,
    serialno                                bigint                                         not null
        constraint "PK_294f9d2575dd264b591f148b32c"
            primary key,
    updatedat                               timestamp with time zone                       not null,
    currentversion                          integer,
    deviceinstance                          integer,
    deviceaddressraw                        integer                                        not null,
    specialversion                          varchar,
    agggroupno                              integer,
    serverconfigtime                        integer,
    productcode                             smallint,
    voltage                                 smallint,
    frequency                               smallint,
    maxpower                                integer,
    minpower                                integer,
    isaggregated                            boolean                  default false         not null,
    agglock                                 smallint,
    configbootdone                          boolean                  default false         not null,
    configappdone                           boolean                  default false         not null,
    configoffset                            smallint,
    configlength                            smallint,
    phase                                   smallint,
    state                                   varchar,
    priority                                smallint,
    boostmanual                             boolean,
    boosttimed                              boolean,
    currentboostremaining                   smallint,
    configbootdata                          bytea,
    configappdata                           bytea,
    configstate                             smallint,
    configstructure                         smallint,
    configversion                           smallint,
    prioritychanges                         smallint,
    commandseqno                            smallint                 default '0'::smallint not null,
    voltage2                                smallint,
    voltage3                                smallint,
    zappi2                                  boolean                  default false         not null,
    threephase                              boolean                                        not null,
    pilotstate                              varchar,
    boostsmart                              boolean,
    zappimode                               varchar,
    normalboostkwh                          smallint,
    ct1                                     jsonb,
    ct2                                     jsonb,
    ct3                                     jsonb,
    ct4                                     jsonb,
    ct5                                     jsonb,
    ct6                                     jsonb,
    ct7                                     jsonb,
    ct8                                     jsonb,
    ct9                                     jsonb,
    ct10                                    jsonb,
    ct11                                    jsonb,
    ct12                                    jsonb,
    ct13                                    jsonb,
    ct14                                    jsonb,
    ct15                                    jsonb,
    ct16                                    jsonb,
    aggregationdataid                       integer
        constraint "REL_d3be20378772f9b596f1e9b406"
            unique
        constraint "FK_d3be20378772f9b596f1e9b406d"
            references aggregation_data,
    lockedstatuslockednow                   boolean,
    lockedstatuslockwhenpluggedin           boolean,
    lockedstatuslockwhenunplugged           boolean,
    lockedstatuschargewhenlocked            boolean,
    lockedstatuschargesessionallowed        boolean,
    dsrdataload                             smallint,
    dsrdataseconds                          smallint,
    dsrdatacsn                              smallint,
    dsrdataack                              smallint,
    dsrdatalce                              boolean,
    dsrdatalca                              boolean,
    dsrdatafue                              boolean,
    dsrdatafde                              boolean,
    dsrdatafua                              boolean,
    dsrdatafda                              boolean,
    dsrdatafun                              boolean,
    dsrdatafdn                              boolean,
    smartboostkwh                           smallint,
    smartboosthour                          smallint,
    smartboostminute                        smallint,
    pwmdatastatecpu                         smallint,
    pwmdatastatercdboard                    smallint,
    pwmdatapulsewidthmodulationinpercentage real,
    pwmdatarcddcinnanoamps                  integer,
    pwmdatarcdacinnanoamps                  integer,
    pwmdatareturnrcdacinnanoamps            integer,
    hubserialno                             bigint
        constraint "FK_c292d323533d84fe67351647763"
            references hub,
    deviceconfigtime                        bigint,
    chargeenergy                            real,
    highpower                               boolean,
    melinkversion                           integer,
    stubloaderversion                       integer,
    bootloaderversion                       integer,
    lockedstatusmicroprocessorti            boolean,
    createdat                               timestamp with time zone default CURRENT_TIMESTAMP,
    melibversion                            integer,
    vhub                                    boolean,
    ethernetlink                            boolean,
    wifilink                                boolean
);

alter table zappi
    owner to myenergi;

create index "IDX_c292d323533d84fe6735164776"
    on zappi (hubserialno);

create table eddi
(
    deviceclass                   varchar                                        not null,
    serialno                      bigint                                         not null
        constraint "PK_a88101059e2cb82e818376be88b"
            primary key,
    updatedat                     timestamp with time zone                       not null,
    currentversion                integer,
    deviceinstance                integer,
    deviceaddressraw              integer                                        not null,
    specialversion                varchar,
    agggroupno                    integer,
    serverconfigtime              integer,
    productcode                   smallint,
    voltage                       smallint,
    frequency                     smallint,
    maxpower                      integer,
    minpower                      integer,
    isaggregated                  boolean                  default false         not null,
    agglock                       smallint,
    configbootdone                boolean                  default false         not null,
    configappdone                 boolean                  default false         not null,
    configoffset                  smallint,
    configlength                  smallint,
    phase                         smallint,
    state                         varchar,
    priority                      smallint,
    boostmanual                   boolean,
    boosttimed                    boolean,
    currentboostremaining         smallint,
    configbootdata                bytea,
    configappdata                 bytea,
    configstate                   smallint,
    configstructure               smallint,
    configversion                 smallint,
    prioritychanges               smallint,
    commandseqno                  smallint                 default '0'::smallint not null,
    heatertype1                   varchar,
    heatertype2                   varchar,
    heaterno                      smallint                                       not null,
    checkperiod                   smallint,
    ct2absent                     smallint,
    ct3absent                     smallint,
    ct1                           jsonb,
    ct2                           jsonb,
    ct3                           jsonb,
    ct4                           jsonb,
    ct5                           jsonb,
    ct6                           jsonb,
    ct7                           jsonb,
    ct8                           jsonb,
    ct9                           jsonb,
    ct10                          jsonb,
    ct11                          jsonb,
    ct12                          jsonb,
    ct13                          jsonb,
    ct14                          jsonb,
    ct15                          jsonb,
    ct16                          jsonb,
    pt1                           jsonb,
    pt2                           jsonb,
    aggregationdataid             integer
        constraint "REL_3f5811364dfbfee7013bbf7203"
            unique
        constraint "FK_3f5811364dfbfee7013bbf72035"
            references aggregation_data,
    dsrdataload                   smallint,
    dsrdataseconds                smallint,
    dsrdatacsn                    smallint,
    dsrdataack                    smallint,
    dsrdatalce                    boolean,
    dsrdatalca                    boolean,
    dsrdatafue                    boolean,
    dsrdatafde                    boolean,
    dsrdatafua                    boolean,
    dsrdatafda                    boolean,
    dsrdatafun                    boolean,
    dsrdatafdn                    boolean,
    relayboarddataboardconnected  boolean,
    relayboarddataesenseactive    boolean,
    relayboarddatarelay1active    boolean,
    relayboarddatarelay1boosttype varchar,
    relayboarddatarelay2active    boolean,
    relayboarddatarelay2boosttype varchar,
    boardtype                     varchar,
    ethernetfitted                boolean,
    ethernetspeed                 varchar,
    ethernetmacaddress            macaddr,
    hubserialno                   bigint
        constraint "FK_23ef66dd16383a3458b0dd5f8a5"
            references hub,
    deviceconfigtime              bigint,
    chargeenergy                  real,
    highpower                     boolean,
    melinkversion                 integer,
    stubloaderversion             integer,
    bootloaderversion             integer,
    microprocessorti              boolean,
    createdat                     timestamp with time zone default CURRENT_TIMESTAMP,
    melibversion                  integer,
    vhub                          boolean,
    ethernetlink                  boolean,
    wifilink                      boolean
);

alter table eddi
    owner to myenergi;

create index "IDX_23ef66dd16383a3458b0dd5f8a"
    on eddi (hubserialno);

create table foal_session
(
    session_id      varchar not null
        constraint "PK_9e23333fee454aa1884ba8e0af7"
            primary key,
    session_content text    not null,
    created_at      bigint  not null,
    updated_at      bigint  not null
);

alter table foal_session
    owner to myenergi;

create table eddi_minute
(
    serialno            bigint    not null,
    timestamp           timestamp not null,
    noseconds           integer   not null,
    exportpower         real,
    importpower         real,
    genpospw            real,
    gennegpw            real,
    frequency           real,
    heatsink            real,
    pt1                 real,
    pt2                 real,
    voltage             real,
    divloadpower1       real,
    divloadpower2       real,
    boostloadpower1     real,
    boostloadpower2     real,
    externalcttype1     smallint,
    externalcttype2     smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real,
    constraint "PK_4c94f05e4de575488f4a0c2905d"
        primary key (serialno, timestamp)
);

alter table eddi_minute
    owner to myenergi;

create table zappi_minute
(
    serialno            bigint    not null,
    timestamp           timestamp not null,
    noseconds           integer   not null,
    exportpower         real,
    importpower         real,
    genpospw            real,
    gennegpw            real,
    frequency           real,
    heatsink            real,
    voltage1            real,
    voltage2            real,
    voltage3            real,
    divloadpower1       real,
    divloadpower2       real,
    divloadpower3       real,
    boostloadpower1     real,
    boostloadpower2     real,
    boostloadpower3     real,
    externalcttype1     smallint,
    externalcttype2     smallint,
    externalcttype3     smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctpospower3 real,
    externalctnegpower1 real,
    externalctnegpower2 real,
    externalctnegpower3 real,
    constraint "PK_5f4400bed8cbe77429781c5f9b3"
        primary key (serialno, timestamp)
);

alter table zappi_minute
    owner to myenergi;

create table event
(
    serialno                   bigint    not null,
    eventtime                  timestamp not null,
    numberofeventsinthissecond smallint  not null,
    ischangemodechanged        boolean   not null,
    ispilotstatechanged        boolean   not null,
    iszappistatechanged        boolean   not null,
    wcsid                      smallint  not null,
    pilotstate                 smallint  not null,
    iscarpluggedin             boolean   not null,
    iscarunplugged             boolean   not null,
    chargingmode               smallint  not null,
    selftest                   smallint  not null,
    pectfault                  smallint  not null,
    rcdfault                   smallint  not null,
    booststate                 smallint  not null,
    isboosting                 boolean   not null,
    isfrequencyout             boolean   not null,
    isovertemperature          boolean   not null,
    isesenceactive             boolean   not null,
    isgridlimiting             boolean   not null,
    isproximitylimiting        boolean   not null,
    isgrouplimiting            boolean   not null,
    islostmelinkcommunications boolean   not null,
    isendofcharge              boolean   not null,
    isthreephasecharging       boolean   not null,
    haschargejuststarted       boolean   not null,
    haschargejustended         boolean   not null,
    zappistate                 integer   not null,
    istrapr                    boolean   not null,
    isiopuwr                   boolean   not null,
    iscm                       boolean   not null,
    isextra                    boolean   not null,
    isswr                      boolean   not null,
    iswdto                     boolean   not null,
    isbor                      boolean   not null,
    ispor                      boolean   not null,
    chargeenergy               integer   not null,
    constraint "PK_d1714a7ea14845b07ce5e7cb5dc"
        primary key (serialno, eventtime, numberofeventsinthissecond)
);

alter table event
    owner to myenergi;

create table libbi_config_reply_data
(
    id         serial
        constraint "PK_2dc80a0e00f86b23465c69bd59b"
            primary key,
    signature  bigint  not null,
    timezone   varchar,
    dateformat varchar,
    dston      boolean not null,
    language   varchar,
    icons      varchar
);

alter table libbi_config_reply_data
    owner to myenergi;

create table libbi
(
    deviceclass            varchar                        not null,
    serialno               bigint                         not null
        constraint "PK_be2f100a41e74b061793afbde57"
            primary key,
    updatedat              timestamp with time zone       not null,
    createdat              timestamp with time zone,
    currentversion         integer,
    deviceinstance         integer,
    deviceaddressraw       integer                        not null,
    specialversion         varchar,
    agggroupno             integer,
    deviceconfigtime       bigint,
    serverconfigtime       integer,
    productcode            smallint,
    voltage                smallint,
    frequency              smallint,
    maxpower               integer,
    minpower               integer,
    isaggregated           boolean  default false         not null,
    agglock                smallint,
    configbootdone         boolean  default false         not null,
    configappdone          boolean  default false         not null,
    configoffset           smallint,
    configlength           smallint,
    chargeenergy           real,
    phase                  smallint,
    state                  varchar,
    priority               smallint,
    boostmanual            boolean,
    boosttimed             boolean,
    currentboostremaining  smallint,
    configbootdata         bytea,
    configappdata          bytea,
    configstate            smallint,
    configstructure        smallint,
    configversion          smallint,
    prioritychanges        smallint,
    commandseqno           smallint default '0'::smallint not null,
    ct1                    jsonb,
    ct2                    jsonb,
    ct3                    jsonb,
    ct4                    jsonb,
    ct5                    jsonb,
    ct6                    jsonb,
    ct7                    jsonb,
    ct8                    jsonb,
    ct9                    jsonb,
    ct10                   jsonb,
    ct11                   jsonb,
    ct12                   jsonb,
    ct13                   jsonb,
    ct14                   jsonb,
    ct15                   jsonb,
    ct16                   jsonb,
    libbimode              varchar,
    stateofcharge          real,
    maxcapacityinwatthours integer,
    hubserialno            bigint
        constraint "FK_bbe0c113836616a80ac1b1717f6"
            references hub,
    issolarpresent         boolean  default false         not null
);

alter table libbi
    owner to myenergi;

create table config_reply
(
    id                      serial
        constraint "PK_c3a4c701c6296e447ec4d22f3f6"
            primary key,
    serialno                bigint                   not null,
    structure               smallint                 not null,
    updatedat               timestamp with time zone not null,
    zappi1configreplydataid integer
        constraint "REL_73a000c058e740c918ea5671d4"
            unique
        constraint "FK_73a000c058e740c918ea5671d4f"
            references zappi1_config_reply_data,
    zappi2configreplydataid integer
        constraint "REL_6044c3432d62fa5e6e4137a854"
            unique
        constraint "FK_6044c3432d62fa5e6e4137a8543"
            references zappi2_config_reply_data,
    eddiconfigreplydataid   integer
        constraint "REL_3baf65bb45ce2859ac32735a67"
            unique
        constraint "FK_3baf65bb45ce2859ac32735a672"
            references eddi_config_reply_data,
    zappiserialno           bigint
        constraint "UQ_a1d9b6c8b6ebcadb725553aa5f4"
            unique
        constraint "FK_a1d9b6c8b6ebcadb725553aa5f4"
            references zappi,
    eddiserialno            bigint
        constraint "UQ_9d8a1f5e661cd00e338b9186741"
            unique
        constraint "FK_9d8a1f5e661cd00e338b9186741"
            references eddi,
    libbiconfigreplydataid  integer
        constraint "UQ_8789df7eb80d48db70687c56817"
            unique
        constraint "FK_8789df7eb80d48db70687c56817"
            references libbi_config_reply_data,
    libbiserialno           bigint
        constraint "UQ_db3c4d8de9e4e0ded41a8a8d8da"
            unique
        constraint "FK_db3c4d8de9e4e0ded41a8a8d8da"
            references libbi
);

alter table config_reply
    owner to myenergi;

create index "IDX_bbe0c113836616a80ac1b1717f"
    on libbi (hubserialno);

