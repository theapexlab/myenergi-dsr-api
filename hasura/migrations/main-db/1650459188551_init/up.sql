CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;

SET check_function_bodies = false;
CREATE TYPE public.command_commandinitiatorservice_enum AS ENUM (
    'appApi',
    'meLinkAppApi',
    'adminApi',
    'hubReceiver',
    'other'
);
CREATE TYPE public.command_commandstate_enum AS ENUM (
    'initial',
    'inProgress',
    'failed',
    'success'
);
CREATE TYPE public.command_commandtype_enum AS ENUM (
    'setModeEddi',
    'setModeZappi',
    'setModeLibbi',
    'setLock',
    'setPriority',
    'setEddiBoost',
    'readConfig',
    'writeConfigSetHeaterPriority',
    'writeConfigSetBoostTime',
    'writeConfigSetMinGreenLevel'
);
CREATE TYPE public.command_destinationdevicename_enum AS ENUM (
    'eddi',
    'zappi1',
    'zappi2',
    'harvi',
    'libbi',
    'hub'
);
CREATE TYPE public.config_reply_boost_timer_heatertype_enum AS ENUM (
    'heater1',
    'heater2',
    'relay1',
    'relay2'
);
CREATE TYPE public.update_box_updateboxicontype_enum AS ENUM (
    'eddi',
    'zappi1',
    'zappi2',
    'harvi',
    'libbi',
    'hub'
);
CREATE TABLE public.aggregation_data (
    id integer NOT NULL,
    admingroup character varying,
    controlgroup character varying,
    groupkey character varying,
    daf smallint,
    ddf smallint,
    uaf smallint,
    udf smallint,
    dsrdaf smallint,
    dsrddf smallint,
    dsruaf smallint,
    dsrudf smallint,
    fra character varying,
    frm character varying,
    frs character varying,
    dds character varying,
    lod smallint,
    csn smallint,
    ttl smallint
);
CREATE SEQUENCE public.aggregation_data_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.aggregation_data_id_seq OWNED BY public.aggregation_data.id;
CREATE TABLE public.alternate_servers (
    id integer NOT NULL,
    serveraid integer,
    serverbid integer,
    CONSTRAINT "CHK_504aa2c030ad291fa1a4375848" CHECK ((id = 1))
);
CREATE TABLE public.command (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    hubport integer NOT NULL,
    hubipaddress character varying,
    hubnetworkid integer NOT NULL,
    destinationdeviceaddressraw integer NOT NULL,
    destinationdeviceserialno bigint NOT NULL,
    destinationdevicename public.command_destinationdevicename_enum,
    commandtries smallint DEFAULT '0'::smallint NOT NULL,
    commandlastsent timestamp with time zone,
    commandinitiated timestamp with time zone NOT NULL,
    commandtype public.command_commandtype_enum,
    commandstate public.command_commandstate_enum,
    commandinitiatorservice public.command_commandinitiatorservice_enum,
    commandparameters jsonb,
    commandinitiatoruserid integer
);
CREATE TABLE public.config_reply (
    id integer NOT NULL,
    serialno bigint NOT NULL,
    structure smallint NOT NULL,
    updatedat timestamp with time zone NOT NULL,
    zappi1configreplydataid integer,
    zappi2configreplydataid integer,
    eddiconfigreplydataid integer,
    zappiserialno bigint,
    eddiserialno bigint,
    libbiconfigreplydataid integer,
    libbiserialno bigint
);
CREATE TABLE public.config_reply_boost_timer (
    id integer NOT NULL,
    heatertype public.config_reply_boost_timer_heatertype_enum,
    slot smallint NOT NULL,
    duration smallint NOT NULL,
    starthour smallint NOT NULL,
    startminute smallint NOT NULL,
    temperature smallint,
    mondayon boolean NOT NULL,
    tuesdayon boolean NOT NULL,
    wednesdayon boolean NOT NULL,
    thursdayon boolean NOT NULL,
    fridayon boolean NOT NULL,
    saturdayon boolean NOT NULL,
    sundayon boolean NOT NULL,
    economy boolean NOT NULL,
    zappi1configreplydataid integer,
    zappi2configreplydataid integer,
    eddiconfigreplydataid integer
);
CREATE SEQUENCE public.config_reply_boost_timer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.config_reply_boost_timer_id_seq OWNED BY public.config_reply_boost_timer.id;
CREATE SEQUENCE public.config_reply_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.config_reply_id_seq OWNED BY public.config_reply.id;
CREATE TABLE public.eddi (
    deviceclass character varying NOT NULL,
    serialno bigint NOT NULL,
    updatedat timestamp with time zone NOT NULL,
    currentversion integer,
    deviceinstance integer,
    deviceaddressraw integer NOT NULL,
    specialversion character varying,
    agggroupno integer,
    serverconfigtime integer,
    productcode smallint,
    voltage smallint,
    frequency smallint,
    maxpower integer,
    minpower integer,
    isaggregated boolean DEFAULT false NOT NULL,
    agglock smallint,
    configbootdone boolean DEFAULT false NOT NULL,
    configappdone boolean DEFAULT false NOT NULL,
    configoffset smallint,
    configlength smallint,
    phase smallint,
    state character varying,
    priority smallint,
    boostmanual boolean,
    boosttimed boolean,
    currentboostremaining smallint,
    configbootdata bytea,
    configappdata bytea,
    configstate smallint,
    configstructure smallint,
    configversion smallint,
    prioritychanges smallint,
    commandseqno smallint DEFAULT '0'::smallint NOT NULL,
    heatertype1 character varying,
    heatertype2 character varying,
    heaterno smallint NOT NULL,
    checkperiod smallint,
    ct2absent smallint,
    ct3absent smallint,
    ct1 jsonb,
    ct2 jsonb,
    ct3 jsonb,
    ct4 jsonb,
    ct5 jsonb,
    ct6 jsonb,
    ct7 jsonb,
    ct8 jsonb,
    ct9 jsonb,
    ct10 jsonb,
    ct11 jsonb,
    ct12 jsonb,
    ct13 jsonb,
    ct14 jsonb,
    ct15 jsonb,
    ct16 jsonb,
    pt1 jsonb,
    pt2 jsonb,
    aggregationdataid integer,
    dsrdataload smallint,
    dsrdataseconds smallint,
    dsrdatacsn smallint,
    dsrdataack smallint,
    dsrdatalce boolean,
    dsrdatalca boolean,
    dsrdatafue boolean,
    dsrdatafde boolean,
    dsrdatafua boolean,
    dsrdatafda boolean,
    dsrdatafun boolean,
    dsrdatafdn boolean,
    relayboarddataboardconnected boolean,
    relayboarddataesenseactive boolean,
    relayboarddatarelay1active boolean,
    relayboarddatarelay1boosttype character varying,
    relayboarddatarelay2active boolean,
    relayboarddatarelay2boosttype character varying,
    boardtype character varying,
    ethernetfitted boolean,
    ethernetspeed character varying,
    ethernetmacaddress macaddr,
    hubserialno bigint,
    deviceconfigtime bigint,
    chargeenergy real,
    highpower boolean,
    melinkversion integer,
    stubloaderversion integer,
    bootloaderversion integer,
    microprocessorti boolean,
    createdat timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    melibversion integer,
    vhub boolean,
    ethernetlink boolean,
    wifilink boolean
);
CREATE TABLE public.eddi_config_reply_data (
    id integer NOT NULL,
    signature bigint NOT NULL,
    gridlimit smallint NOT NULL,
    devicelimit smallint NOT NULL,
    batterymode character varying,
    boosthotcanceldelay smallint NOT NULL,
    minimumexport integer NOT NULL,
    exportmargin integer NOT NULL,
    calibration bytea NOT NULL,
    minimumexporttime smallint NOT NULL,
    hottime smallint NOT NULL,
    heatertype1 character varying,
    heatertype2 character varying,
    passcode smallint NOT NULL,
    maxgridlimit smallint NOT NULL,
    sparewasnetphasemetering smallint NOT NULL,
    heaterpriority smallint NOT NULL,
    prioritycheckperiod smallint NOT NULL,
    timezone character varying,
    dateformat character varying,
    dston boolean NOT NULL,
    updatefromcloud boolean NOT NULL,
    sparewasconfigversion smallint NOT NULL,
    autosettimefromclouddone boolean NOT NULL,
    language character varying,
    icons character varying,
    backlight smallint NOT NULL,
    contrast smallint NOT NULL,
    ct1type character varying,
    ct1subtype character varying,
    ct2type character varying,
    ct2subtype character varying,
    savingskeepversion smallint NOT NULL,
    ct1grouplimit smallint NOT NULL,
    ct2grouplimit smallint NOT NULL,
    ct3grouplimit smallint NOT NULL,
    ct1group smallint NOT NULL,
    ct2group smallint NOT NULL,
    ct3group smallint NOT NULL,
    exprelay1onthreshold integer NOT NULL,
    exprelay1offthreshold integer NOT NULL,
    exprelay1mode character varying,
    exprelay1boosttype smallint NOT NULL,
    exprelay1heating character varying,
    exprelay1includediverted boolean NOT NULL,
    exprelay1minimumofftime smallint NOT NULL,
    exprelay1minimumontime smallint NOT NULL,
    exprelay2onthreshold integer NOT NULL,
    exprelay2offthreshold integer NOT NULL,
    exprelay2mode character varying,
    exprelay2boosttype smallint NOT NULL,
    exprelay2heating character varying,
    exprelay2includediverted boolean NOT NULL,
    exprelay2minimumofftime smallint NOT NULL,
    exprelay2minimumontime smallint NOT NULL,
    esensemode character varying,
    esenseboostmode character varying,
    esenseheaterenablemode character varying,
    esenseboostenablemode character varying,
    esenserelaycontrolmode character varying,
    esensesetpoints1 smallint NOT NULL,
    esensesetpoints2 smallint NOT NULL,
    esensehysteresis1 smallint NOT NULL,
    esensehysteresis2 smallint NOT NULL,
    serverconfigtime integer,
    deviceconfigtime bigint NOT NULL
);
CREATE SEQUENCE public.eddi_config_reply_data_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.eddi_config_reply_data_id_seq OWNED BY public.eddi_config_reply_data.id;
CREATE TABLE public.eddi_minute (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    heatsink real,
    pt1 real,
    pt2 real,
    voltage real,
    divloadpower1 real,
    divloadpower2 real,
    boostloadpower1 real,
    boostloadpower2 real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real
);
CREATE TABLE public.event (
    serialno bigint NOT NULL,
    eventtime timestamp without time zone NOT NULL,
    numberofeventsinthissecond smallint NOT NULL,
    ischangemodechanged boolean NOT NULL,
    ispilotstatechanged boolean NOT NULL,
    iszappistatechanged boolean NOT NULL,
    wcsid smallint NOT NULL,
    pilotstate smallint NOT NULL,
    iscarpluggedin boolean NOT NULL,
    iscarunplugged boolean NOT NULL,
    chargingmode smallint NOT NULL,
    selftest smallint NOT NULL,
    pectfault smallint NOT NULL,
    rcdfault smallint NOT NULL,
    booststate smallint NOT NULL,
    isboosting boolean NOT NULL,
    isfrequencyout boolean NOT NULL,
    isovertemperature boolean NOT NULL,
    isesenceactive boolean NOT NULL,
    isgridlimiting boolean NOT NULL,
    isproximitylimiting boolean NOT NULL,
    isgrouplimiting boolean NOT NULL,
    islostmelinkcommunications boolean NOT NULL,
    isendofcharge boolean NOT NULL,
    isthreephasecharging boolean NOT NULL,
    haschargejuststarted boolean NOT NULL,
    haschargejustended boolean NOT NULL,
    zappistate integer NOT NULL,
    istrapr boolean NOT NULL,
    isiopuwr boolean NOT NULL,
    iscm boolean NOT NULL,
    isextra boolean NOT NULL,
    isswr boolean NOT NULL,
    iswdto boolean NOT NULL,
    isbor boolean NOT NULL,
    ispor boolean NOT NULL,
    chargeenergy integer NOT NULL
);
CREATE TABLE public.foal_session (
    session_id character varying NOT NULL,
    session_content text NOT NULL,
    created_at bigint NOT NULL,
    updated_at bigint NOT NULL
);
CREATE TABLE public.harvi (
    deviceclass character varying NOT NULL,
    serialno bigint NOT NULL,
    updatedat timestamp with time zone NOT NULL,
    currentversion integer,
    ct1 jsonb,
    ct2 jsonb,
    ct3 jsonb,
    ct4 jsonb,
    ct5 jsonb,
    ct6 jsonb,
    ct7 jsonb,
    ct8 jsonb,
    ct9 jsonb,
    ct10 jsonb,
    ct11 jsonb,
    ct12 jsonb,
    ct13 jsonb,
    ct14 jsonb,
    ct15 jsonb,
    ct16 jsonb,
    hubserialno bigint,
    createdat timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE public.hub (
    deviceclass character varying NOT NULL,
    serialno bigint NOT NULL,
    updatedat timestamp with time zone NOT NULL,
    currentversion integer,
    regpassword character varying NOT NULL,
    apppassword character varying,
    uptime integer,
    port integer NOT NULL,
    ipaddress character varying,
    serverlastheard integer,
    lastauth timestamp with time zone,
    registrationdate timestamp with time zone,
    networkid integer NOT NULL,
    nodevices integer,
    masterdeviceclass character varying,
    masterdevicerawaddress integer,
    masterdeviceinstance integer,
    keyvaluestore jsonb,
    isblocked boolean DEFAULT false NOT NULL,
    cloudipoverrideserverid integer,
    loadcontrolgridimportexport integer,
    loadcontrolgeneration integer,
    loadcontrolgridcurrentshundredthsphase1 integer,
    loadcontrolgridcurrentshundredthsphase2 integer,
    loadcontrolgridcurrentshundredthsphase3 integer,
    loadcontrolflagsnetphases boolean,
    loadcontrolflagshubonnetwork boolean,
    loadcontrolflagsgenctonnetwork boolean,
    loadcontrolflagsgridlimits boolean,
    loadcontrolflagsgridvalid boolean,
    loadcontroldevicedata1serialno bigint,
    loadcontroldevicedata1setload integer,
    loadcontroldevicedata2serialno bigint,
    loadcontroldevicedata2setload integer,
    loadcontroldevicedata3serialno bigint,
    loadcontroldevicedata3setload integer,
    loadcontroldevicedata4serialno bigint,
    loadcontroldevicedata4setload integer,
    loadcontroldevicedata5serialno bigint,
    loadcontroldevicedata5setload integer,
    australia boolean DEFAULT false NOT NULL,
    radiochannel smallint,
    microprocessorti boolean,
    createdat timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    vhub boolean,
    hubfirmwareversions jsonb
);
CREATE TABLE public.libbi (
    deviceclass character varying NOT NULL,
    serialno bigint NOT NULL,
    updatedat timestamp with time zone NOT NULL,
    createdat timestamp with time zone,
    currentversion integer,
    deviceinstance integer,
    deviceaddressraw integer NOT NULL,
    specialversion character varying,
    agggroupno integer,
    deviceconfigtime bigint,
    serverconfigtime integer,
    productcode smallint,
    voltage smallint,
    frequency smallint,
    maxpower integer,
    minpower integer,
    isaggregated boolean DEFAULT false NOT NULL,
    agglock smallint,
    configbootdone boolean DEFAULT false NOT NULL,
    configappdone boolean DEFAULT false NOT NULL,
    configoffset smallint,
    configlength smallint,
    chargeenergy real,
    phase smallint,
    state character varying,
    priority smallint,
    boostmanual boolean,
    boosttimed boolean,
    currentboostremaining smallint,
    configbootdata bytea,
    configappdata bytea,
    configstate smallint,
    configstructure smallint,
    configversion smallint,
    prioritychanges smallint,
    commandseqno smallint DEFAULT '0'::smallint NOT NULL,
    ct1 jsonb,
    ct2 jsonb,
    ct3 jsonb,
    ct4 jsonb,
    ct5 jsonb,
    ct6 jsonb,
    ct7 jsonb,
    ct8 jsonb,
    ct9 jsonb,
    ct10 jsonb,
    ct11 jsonb,
    ct12 jsonb,
    ct13 jsonb,
    ct14 jsonb,
    ct15 jsonb,
    ct16 jsonb,
    libbimode character varying,
    stateofcharge real,
    maxcapacityinwatthours integer,
    hubserialno bigint,
    issolarpresent boolean DEFAULT false NOT NULL
);
CREATE TABLE public.libbi_config_reply_data (
    id integer NOT NULL,
    signature bigint NOT NULL,
    timezone character varying,
    dateformat character varying,
    dston boolean NOT NULL,
    language character varying,
    icons character varying
);
CREATE SEQUENCE public.libbi_config_reply_data_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.libbi_config_reply_data_id_seq OWNED BY public.libbi_config_reply_data.id;
CREATE TABLE public.migrations (
    id integer NOT NULL,
    "timestamp" bigint NOT NULL,
    name character varying NOT NULL
);
CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;
CREATE TABLE public.server (
    id integer NOT NULL,
    isactive boolean DEFAULT false NOT NULL,
    name character varying NOT NULL,
    shard character varying,
    ip character varying NOT NULL,
    url character varying NOT NULL,
    isdefault boolean DEFAULT false NOT NULL
);
CREATE SEQUENCE public.server_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.server_id_seq OWNED BY public.server.id;
CREATE TABLE public.update_box (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    updateboxicontype public.update_box_updateboxicontype_enum,
    leftcolor character varying NOT NULL,
    rightcolor character varying NOT NULL,
    title character varying NOT NULL,
    description character varying,
    displaydatetime timestamp with time zone NOT NULL
);
CREATE TABLE public."user" (
    id integer NOT NULL,
    email character varying NOT NULL,
    name character varying NOT NULL,
    lastlogin timestamp with time zone NOT NULL,
    socialtokenexp timestamp with time zone NOT NULL,
    accessid integer NOT NULL
);
CREATE TABLE public.user_access (
    id integer NOT NULL,
    type character varying NOT NULL,
    permissions jsonb DEFAULT '[]'::jsonb NOT NULL
);
CREATE SEQUENCE public.user_access_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.user_access_id_seq OWNED BY public.user_access.id;
CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
CREATE TABLE public.zappi (
    deviceclass character varying NOT NULL,
    serialno bigint NOT NULL,
    updatedat timestamp with time zone NOT NULL,
    currentversion integer,
    deviceinstance integer,
    deviceaddressraw integer NOT NULL,
    specialversion character varying,
    agggroupno integer,
    serverconfigtime integer,
    productcode smallint,
    voltage smallint,
    frequency smallint,
    maxpower integer,
    minpower integer,
    isaggregated boolean DEFAULT false NOT NULL,
    agglock smallint,
    configbootdone boolean DEFAULT false NOT NULL,
    configappdone boolean DEFAULT false NOT NULL,
    configoffset smallint,
    configlength smallint,
    phase smallint,
    state character varying,
    priority smallint,
    boostmanual boolean,
    boosttimed boolean,
    currentboostremaining smallint,
    configbootdata bytea,
    configappdata bytea,
    configstate smallint,
    configstructure smallint,
    configversion smallint,
    prioritychanges smallint,
    commandseqno smallint DEFAULT '0'::smallint NOT NULL,
    voltage2 smallint,
    voltage3 smallint,
    zappi2 boolean DEFAULT false NOT NULL,
    threephase boolean NOT NULL,
    pilotstate character varying,
    boostsmart boolean,
    zappimode character varying,
    normalboostkwh smallint,
    ct1 jsonb,
    ct2 jsonb,
    ct3 jsonb,
    ct4 jsonb,
    ct5 jsonb,
    ct6 jsonb,
    ct7 jsonb,
    ct8 jsonb,
    ct9 jsonb,
    ct10 jsonb,
    ct11 jsonb,
    ct12 jsonb,
    ct13 jsonb,
    ct14 jsonb,
    ct15 jsonb,
    ct16 jsonb,
    aggregationdataid integer,
    lockedstatuslockednow boolean,
    lockedstatuslockwhenpluggedin boolean,
    lockedstatuslockwhenunplugged boolean,
    lockedstatuschargewhenlocked boolean,
    lockedstatuschargesessionallowed boolean,
    dsrdataload smallint,
    dsrdataseconds smallint,
    dsrdatacsn smallint,
    dsrdataack smallint,
    dsrdatalce boolean,
    dsrdatalca boolean,
    dsrdatafue boolean,
    dsrdatafde boolean,
    dsrdatafua boolean,
    dsrdatafda boolean,
    dsrdatafun boolean,
    dsrdatafdn boolean,
    smartboostkwh smallint,
    smartboosthour smallint,
    smartboostminute smallint,
    pwmdatastatecpu smallint,
    pwmdatastatercdboard smallint,
    pwmdatapulsewidthmodulationinpercentage real,
    pwmdatarcddcinnanoamps integer,
    pwmdatarcdacinnanoamps integer,
    pwmdatareturnrcdacinnanoamps integer,
    hubserialno bigint,
    deviceconfigtime bigint,
    chargeenergy real,
    highpower boolean,
    melinkversion integer,
    stubloaderversion integer,
    bootloaderversion integer,
    lockedstatusmicroprocessorti boolean,
    createdat timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    melibversion integer,
    vhub boolean,
    ethernetlink boolean,
    wifilink boolean
);
CREATE TABLE public.zappi1_config_reply_data (
    id integer NOT NULL,
    signature bigint NOT NULL,
    compatibilitymodeminpwm real NOT NULL,
    devicelimit real NOT NULL,
    compatibilitymodepowerfactor real NOT NULL,
    exportmargin integer NOT NULL,
    gridlimit integer NOT NULL,
    password integer NOT NULL,
    chargecompletedelay integer NOT NULL,
    language character varying,
    phaseorphaserotation character varying,
    smartboosthour smallint NOT NULL,
    smartboostminute smallint NOT NULL,
    smartboostenergy smallint NOT NULL,
    esenseinput character varying,
    mingreenlevel smallint NOT NULL,
    startstoptimer smallint NOT NULL,
    ct1type character varying,
    ct1subtype character varying,
    boostingenergy smallint NOT NULL,
    ct2type character varying,
    ct2subtype character varying,
    locktimeout smallint NOT NULL,
    backlightontime smallint NOT NULL,
    contrastlevel smallint NOT NULL,
    gentypeicon character varying,
    lockcode integer NOT NULL,
    compatibilitymodeactive boolean NOT NULL,
    lockevplugged boolean NOT NULL,
    lockevunplugged boolean NOT NULL,
    lockhidereadings boolean NOT NULL,
    buzzeron boolean NOT NULL,
    compatibilitymodeinfinitepwm boolean NOT NULL,
    monitoringstatus boolean NOT NULL,
    dston boolean NOT NULL,
    timezone character varying,
    dateformat character varying,
    batterymode character varying,
    triphaseon boolean NOT NULL,
    preconditioning character varying,
    defaultmode character varying,
    maxgridlimit smallint NOT NULL,
    plugincharge smallint NOT NULL,
    timefromcloud boolean NOT NULL,
    autosettimefromclouddone boolean NOT NULL,
    ct1grouplimit smallint NOT NULL,
    ct2grouplimit smallint NOT NULL,
    ct3grouplimit smallint NOT NULL,
    ct1group smallint NOT NULL,
    ct2group smallint NOT NULL,
    ct3group smallint NOT NULL,
    deviceconfigtime bigint NOT NULL
);
CREATE SEQUENCE public.zappi1_config_reply_data_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.zappi1_config_reply_data_id_seq OWNED BY public.zappi1_config_reply_data.id;
CREATE TABLE public.zappi2_config_reply_data (
    id integer NOT NULL,
    signature bigint NOT NULL,
    compatibilitymodeminpwm real NOT NULL,
    devicelimit real NOT NULL,
    compatibilitymodepowerfactor real NOT NULL,
    exportmargin integer NOT NULL,
    gridlimit integer NOT NULL,
    password integer NOT NULL,
    chargecompletedelay integer NOT NULL,
    language character varying,
    preconon boolean NOT NULL,
    preconenergy smallint NOT NULL,
    smartboosthour smallint NOT NULL,
    smartboostminute smallint NOT NULL,
    smartboostenergy smallint NOT NULL,
    esenseinput character varying,
    mingreenlevel smallint NOT NULL,
    startstoptimer smallint NOT NULL,
    ct1type character varying,
    ct1subtype character varying,
    boostingenergy smallint NOT NULL,
    ct2type character varying,
    ct2subtype character varying,
    locktimeout smallint NOT NULL,
    backlightontime smallint NOT NULL,
    contrastlevel smallint NOT NULL,
    gentypeicon character varying,
    lockcode integer NOT NULL,
    compatibilitymodeactive boolean NOT NULL,
    lockevplugged boolean NOT NULL,
    lockevunplugged boolean NOT NULL,
    lockhidereadings boolean NOT NULL,
    buzzeron boolean NOT NULL,
    compatibilitymodeinfinitepwm boolean NOT NULL,
    monitoringstatus boolean NOT NULL,
    dston boolean NOT NULL,
    timezone character varying,
    dateformat character varying,
    batterymode character varying,
    defaultmode character varying,
    earthing character varying,
    gridpowerlimit integer NOT NULL,
    ct3type character varying,
    ct3subtype character varying,
    relay1pwm integer NOT NULL,
    relay2pwm integer NOT NULL,
    mainswitchpwm integer NOT NULL,
    locksolenoidpwm integer NOT NULL,
    timefromcloud boolean NOT NULL,
    ct1grouplimit smallint NOT NULL,
    ct2grouplimit smallint NOT NULL,
    ct3grouplimit smallint NOT NULL,
    ct4grouplimit smallint NOT NULL,
    ctinternalgroup smallint NOT NULL,
    ct1group smallint NOT NULL,
    ct2group smallint NOT NULL,
    ct3group smallint NOT NULL,
    neutrallimit integer NOT NULL,
    ct1g100 boolean NOT NULL,
    ct2g100 boolean NOT NULL,
    ct3g100 boolean NOT NULL,
    chargewhenpinlocked boolean NOT NULL,
    weldedrelaycheckdelay integer NOT NULL,
    perelaypwm integer NOT NULL,
    plugincharge boolean NOT NULL,
    chargein3phase boolean NOT NULL,
    ledbrightness smallint NOT NULL,
    ledfault jsonb NOT NULL,
    ledgreencharging jsonb NOT NULL,
    ledmixcharging jsonb NOT NULL,
    leddirtycharging jsonb NOT NULL,
    ledchargecomplete jsonb NOT NULL,
    ledstateb jsonb NOT NULL,
    phasereturn character varying,
    serverconfigtime integer,
    esenselimitpwm smallint NOT NULL,
    deviceconfigtime bigint NOT NULL,
    ecopstopdelay smallint DEFAULT 30 NOT NULL,
    ctprimary smallint DEFAULT 0 NOT NULL,
    randomdelaystart smallint DEFAULT 10 NOT NULL
);
CREATE SEQUENCE public.zappi2_config_reply_data_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.zappi2_config_reply_data_id_seq OWNED BY public.zappi2_config_reply_data.id;
CREATE TABLE public.zappi_minute (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    heatsink real,
    voltage1 real,
    voltage2 real,
    voltage3 real,
    divloadpower1 real,
    divloadpower2 real,
    divloadpower3 real,
    boostloadpower1 real,
    boostloadpower2 real,
    boostloadpower3 real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalcttype3 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctpospower3 real,
    externalctnegpower1 real,
    externalctnegpower2 real,
    externalctnegpower3 real
);
ALTER TABLE ONLY public.aggregation_data ALTER COLUMN id SET DEFAULT nextval('public.aggregation_data_id_seq'::regclass);
ALTER TABLE ONLY public.config_reply ALTER COLUMN id SET DEFAULT nextval('public.config_reply_id_seq'::regclass);
ALTER TABLE ONLY public.config_reply_boost_timer ALTER COLUMN id SET DEFAULT nextval('public.config_reply_boost_timer_id_seq'::regclass);
ALTER TABLE ONLY public.eddi_config_reply_data ALTER COLUMN id SET DEFAULT nextval('public.eddi_config_reply_data_id_seq'::regclass);
ALTER TABLE ONLY public.libbi_config_reply_data ALTER COLUMN id SET DEFAULT nextval('public.libbi_config_reply_data_id_seq'::regclass);
ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);
ALTER TABLE ONLY public.server ALTER COLUMN id SET DEFAULT nextval('public.server_id_seq'::regclass);
ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
ALTER TABLE ONLY public.user_access ALTER COLUMN id SET DEFAULT nextval('public.user_access_id_seq'::regclass);
ALTER TABLE ONLY public.zappi1_config_reply_data ALTER COLUMN id SET DEFAULT nextval('public.zappi1_config_reply_data_id_seq'::regclass);
ALTER TABLE ONLY public.zappi2_config_reply_data ALTER COLUMN id SET DEFAULT nextval('public.zappi2_config_reply_data_id_seq'::regclass);
ALTER TABLE ONLY public.zappi1_config_reply_data
    ADD CONSTRAINT "PK_085dc1f7ec451606b70e1765ff6" PRIMARY KEY (id);
ALTER TABLE ONLY public.eddi_config_reply_data
    ADD CONSTRAINT "PK_2635a0f6eeef3b81fd097be627f" PRIMARY KEY (id);
ALTER TABLE ONLY public.zappi
    ADD CONSTRAINT "PK_294f9d2575dd264b591f148b32c" PRIMARY KEY (serialno);
ALTER TABLE ONLY public.libbi_config_reply_data
    ADD CONSTRAINT "PK_2dc80a0e00f86b23465c69bd59b" PRIMARY KEY (id);
ALTER TABLE ONLY public.hub
    ADD CONSTRAINT "PK_2debac79742deb56cc3e1ace3a1" PRIMARY KEY (serialno);
ALTER TABLE ONLY public.eddi_minute
    ADD CONSTRAINT "PK_4c94f05e4de575488f4a0c2905d" PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.config_reply_boost_timer
    ADD CONSTRAINT "PK_5a81356ceabecdd7309e8cc2414" PRIMARY KEY (id);
ALTER TABLE ONLY public.command
    ADD CONSTRAINT "PK_5bfa4e1cb54b62f512078f3e7cb" PRIMARY KEY (id);
ALTER TABLE ONLY public.zappi_minute
    ADD CONSTRAINT "PK_5f4400bed8cbe77429781c5f9b3" PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.harvi
    ADD CONSTRAINT "PK_6285c00e48bbf1e23e83d4bb8d3" PRIMARY KEY (serialno);
ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY (id);
ALTER TABLE ONLY public.user_access
    ADD CONSTRAINT "PK_9404e012dec46d1faa719fd9bd7" PRIMARY KEY (id);
ALTER TABLE ONLY public.foal_session
    ADD CONSTRAINT "PK_9e23333fee454aa1884ba8e0af7" PRIMARY KEY (session_id);
ALTER TABLE ONLY public.eddi
    ADD CONSTRAINT "PK_a88101059e2cb82e818376be88b" PRIMARY KEY (serialno);
ALTER TABLE ONLY public.libbi
    ADD CONSTRAINT "PK_be2f100a41e74b061793afbde57" PRIMARY KEY (serialno);
ALTER TABLE ONLY public.config_reply
    ADD CONSTRAINT "PK_c3a4c701c6296e447ec4d22f3f6" PRIMARY KEY (id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);
ALTER TABLE ONLY public.event
    ADD CONSTRAINT "PK_d1714a7ea14845b07ce5e7cb5dc" PRIMARY KEY (serialno, eventtime, numberofeventsinthissecond);
ALTER TABLE ONLY public.aggregation_data
    ADD CONSTRAINT "PK_ddc7a0995733a50dc8df46d9270" PRIMARY KEY (id);
ALTER TABLE ONLY public.update_box
    ADD CONSTRAINT "PK_e310121e9dabb97a8dae3e9e285" PRIMARY KEY (id);
ALTER TABLE ONLY public.alternate_servers
    ADD CONSTRAINT "PK_e61a680a6adf6a3372f5498a5da" PRIMARY KEY (id);
ALTER TABLE ONLY public.zappi2_config_reply_data
    ADD CONSTRAINT "PK_f5da991768799f1efbc44fe7daf" PRIMARY KEY (id);
ALTER TABLE ONLY public.server
    ADD CONSTRAINT "PK_f8b8af38bdc23b447c0a57c7937" PRIMARY KEY (id);
ALTER TABLE ONLY public.config_reply
    ADD CONSTRAINT "REL_3baf65bb45ce2859ac32735a67" UNIQUE (eddiconfigreplydataid);
ALTER TABLE ONLY public.eddi
    ADD CONSTRAINT "REL_3f5811364dfbfee7013bbf7203" UNIQUE (aggregationdataid);
ALTER TABLE ONLY public.config_reply
    ADD CONSTRAINT "REL_6044c3432d62fa5e6e4137a854" UNIQUE (zappi2configreplydataid);
ALTER TABLE ONLY public.config_reply
    ADD CONSTRAINT "REL_73a000c058e740c918ea5671d4" UNIQUE (zappi1configreplydataid);
ALTER TABLE ONLY public.zappi
    ADD CONSTRAINT "REL_d3be20378772f9b596f1e9b406" UNIQUE (aggregationdataid);
ALTER TABLE ONLY public.alternate_servers
    ADD CONSTRAINT "REL_d7ddafb47c4de740afe922c38d" UNIQUE (serverbid);
ALTER TABLE ONLY public.alternate_servers
    ADD CONSTRAINT "REL_f3f54c7cf1d5dbad68a2b17e78" UNIQUE (serveraid);
ALTER TABLE ONLY public.config_reply
    ADD CONSTRAINT "UQ_8789df7eb80d48db70687c56817" UNIQUE (libbiconfigreplydataid);
ALTER TABLE ONLY public.config_reply
    ADD CONSTRAINT "UQ_9d8a1f5e661cd00e338b9186741" UNIQUE (eddiserialno);
ALTER TABLE ONLY public.config_reply
    ADD CONSTRAINT "UQ_a1d9b6c8b6ebcadb725553aa5f4" UNIQUE (zappiserialno);
ALTER TABLE ONLY public.user_access
    ADD CONSTRAINT "UQ_ba7e316ff7107fb69ae2659e94e" UNIQUE (type);
ALTER TABLE ONLY public.config_reply
    ADD CONSTRAINT "UQ_db3c4d8de9e4e0ded41a8a8d8da" UNIQUE (libbiserialno);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE (email);
ALTER TABLE ONLY public.server
    ADD CONSTRAINT "UQ_e16254733ff2264f94f856316ee" UNIQUE (name);
CREATE INDEX "IDX_15922a19f27430f0b0eabcaf20" ON public.config_reply_boost_timer USING btree (zappi2configreplydataid);
CREATE INDEX "IDX_23ef66dd16383a3458b0dd5f8a" ON public.eddi USING btree (hubserialno);
CREATE INDEX "IDX_59c842125486053c4ca541a2ff" ON public.command USING btree (destinationdeviceserialno, commandtype);
CREATE INDEX "IDX_5ecd9dd59b7ce9f54cc8e27346" ON public.command USING btree (commandstate);
CREATE INDEX "IDX_bbe0c113836616a80ac1b1717f" ON public.libbi USING btree (hubserialno);
CREATE INDEX "IDX_c292d323533d84fe6735164776" ON public.zappi USING btree (hubserialno);
CREATE INDEX "IDX_dc3d55a7d5df286caf5178dffe" ON public.harvi USING btree (hubserialno);
CREATE INDEX "IDX_e2602aac09a25d51af32bcbe4c" ON public.config_reply_boost_timer USING btree (eddiconfigreplydataid);
CREATE INDEX "IDX_e2cdaf2df2747017221051a35c" ON public.config_reply_boost_timer USING btree (zappi1configreplydataid);
CREATE INDEX command_destinationdeviceserialno_idx ON public.command USING btree (destinationdeviceserialno, commandstate);
ALTER TABLE ONLY public.config_reply_boost_timer
    ADD CONSTRAINT "FK_15922a19f27430f0b0eabcaf206" FOREIGN KEY (zappi2configreplydataid) REFERENCES public.zappi2_config_reply_data(id);
ALTER TABLE ONLY public.eddi
    ADD CONSTRAINT "FK_23ef66dd16383a3458b0dd5f8a5" FOREIGN KEY (hubserialno) REFERENCES public.hub(serialno);
ALTER TABLE ONLY public.config_reply
    ADD CONSTRAINT "FK_3baf65bb45ce2859ac32735a672" FOREIGN KEY (eddiconfigreplydataid) REFERENCES public.eddi_config_reply_data(id);
ALTER TABLE ONLY public.eddi
    ADD CONSTRAINT "FK_3f5811364dfbfee7013bbf72035" FOREIGN KEY (aggregationdataid) REFERENCES public.aggregation_data(id);
ALTER TABLE ONLY public.command
    ADD CONSTRAINT "FK_40d8dba932313894c96c76fd26c" FOREIGN KEY (commandinitiatoruserid) REFERENCES public."user"(id);
ALTER TABLE ONLY public.hub
    ADD CONSTRAINT "FK_5f5e7698f128c95ac2417ad91f1" FOREIGN KEY (cloudipoverrideserverid) REFERENCES public.server(id);
ALTER TABLE ONLY public.config_reply
    ADD CONSTRAINT "FK_6044c3432d62fa5e6e4137a8543" FOREIGN KEY (zappi2configreplydataid) REFERENCES public.zappi2_config_reply_data(id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "FK_6f914d4404b61b1c43c63f1ba85" FOREIGN KEY (accessid) REFERENCES public.user_access(id);
ALTER TABLE ONLY public.config_reply
    ADD CONSTRAINT "FK_73a000c058e740c918ea5671d4f" FOREIGN KEY (zappi1configreplydataid) REFERENCES public.zappi1_config_reply_data(id);
ALTER TABLE ONLY public.config_reply
    ADD CONSTRAINT "FK_8789df7eb80d48db70687c56817" FOREIGN KEY (libbiconfigreplydataid) REFERENCES public.libbi_config_reply_data(id);
ALTER TABLE ONLY public.config_reply
    ADD CONSTRAINT "FK_9d8a1f5e661cd00e338b9186741" FOREIGN KEY (eddiserialno) REFERENCES public.eddi(serialno);
ALTER TABLE ONLY public.config_reply
    ADD CONSTRAINT "FK_a1d9b6c8b6ebcadb725553aa5f4" FOREIGN KEY (zappiserialno) REFERENCES public.zappi(serialno);
ALTER TABLE ONLY public.libbi
    ADD CONSTRAINT "FK_bbe0c113836616a80ac1b1717f6" FOREIGN KEY (hubserialno) REFERENCES public.hub(serialno);
ALTER TABLE ONLY public.zappi
    ADD CONSTRAINT "FK_c292d323533d84fe67351647763" FOREIGN KEY (hubserialno) REFERENCES public.hub(serialno);
ALTER TABLE ONLY public.zappi
    ADD CONSTRAINT "FK_d3be20378772f9b596f1e9b406d" FOREIGN KEY (aggregationdataid) REFERENCES public.aggregation_data(id);
ALTER TABLE ONLY public.alternate_servers
    ADD CONSTRAINT "FK_d7ddafb47c4de740afe922c38dc" FOREIGN KEY (serverbid) REFERENCES public.server(id);
ALTER TABLE ONLY public.config_reply
    ADD CONSTRAINT "FK_db3c4d8de9e4e0ded41a8a8d8da" FOREIGN KEY (libbiserialno) REFERENCES public.libbi(serialno);
ALTER TABLE ONLY public.harvi
    ADD CONSTRAINT "FK_dc3d55a7d5df286caf5178dffe9" FOREIGN KEY (hubserialno) REFERENCES public.hub(serialno);
ALTER TABLE ONLY public.config_reply_boost_timer
    ADD CONSTRAINT "FK_e2602aac09a25d51af32bcbe4c2" FOREIGN KEY (eddiconfigreplydataid) REFERENCES public.eddi_config_reply_data(id);
ALTER TABLE ONLY public.config_reply_boost_timer
    ADD CONSTRAINT "FK_e2cdaf2df2747017221051a35c2" FOREIGN KEY (zappi1configreplydataid) REFERENCES public.zappi1_config_reply_data(id);
ALTER TABLE ONLY public.alternate_servers
    ADD CONSTRAINT "FK_f3f54c7cf1d5dbad68a2b17e78b" FOREIGN KEY (serveraid) REFERENCES public.server(id);
