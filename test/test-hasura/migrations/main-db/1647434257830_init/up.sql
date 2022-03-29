-- CREATE ROLE myenergi SUPERUSER;
--
-- PostgreSQL database dump
--
-- Dumped from database version 13.3
-- Dumped by pg_dump version 13.0
SET
    statement_timeout = 0;

SET
    lock_timeout = 0;

SET
    idle_in_transaction_session_timeout = 0;

SET
    client_encoding = 'UTF8';

SET
    standard_conforming_strings = on;

SELECT
    pg_catalog.set_config('search_path', '', false);

SET
    check_function_bodies = false;

SET
    xmloption = content;

SET
    client_min_messages = warning;

SET
    row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;

--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--
COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';

--
-- Name: command_commandinitiatorservice_enum; Type: TYPE; Schema: public; Owner: myenergi
--
CREATE TYPE public.command_commandinitiatorservice_enum AS ENUM (
    'appApi',
    'meLinkAppApi',
    'adminApi',
    'hubReceiver',
    'other'
);

ALTER TYPE public.command_commandinitiatorservice_enum OWNER TO myenergi;

--
-- Name: command_commandstate_enum; Type: TYPE; Schema: public; Owner: myenergi
--
CREATE TYPE public.command_commandstate_enum AS ENUM (
    'initial',
    'inProgress',
    'failed',
    'success'
);

ALTER TYPE public.command_commandstate_enum OWNER TO myenergi;

--
-- Name: command_commandtype_enum; Type: TYPE; Schema: public; Owner: myenergi
--
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

ALTER TYPE public.command_commandtype_enum OWNER TO myenergi;

--
-- Name: command_destinationdevicename_enum; Type: TYPE; Schema: public; Owner: myenergi
--
CREATE TYPE public.command_destinationdevicename_enum AS ENUM (
    'eddi',
    'zappi1',
    'zappi2',
    'harvi',
    'libbi',
    'hub'
);

ALTER TYPE public.command_destinationdevicename_enum OWNER TO myenergi;

--
-- Name: config_reply_boost_timer_heatertype_enum; Type: TYPE; Schema: public; Owner: myenergi
--
CREATE TYPE public.config_reply_boost_timer_heatertype_enum AS ENUM (
    'heater1',
    'heater2',
    'relay1',
    'relay2'
);

ALTER TYPE public.config_reply_boost_timer_heatertype_enum OWNER TO myenergi;

--
-- Name: update_box_updateboxicontype_enum; Type: TYPE; Schema: public; Owner: myenergi
--
CREATE TYPE public.update_box_updateboxicontype_enum AS ENUM (
    'eddi',
    'zappi1',
    'zappi2',
    'harvi',
    'libbi',
    'hub'
);

ALTER TYPE public.update_box_updateboxicontype_enum OWNER TO myenergi;

SET
    default_tablespace = '';

SET
    default_table_access_method = heap;

--
-- Name: aggregation_data; Type: TABLE; Schema: public; Owner: myenergi
--
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

ALTER TABLE
    public.aggregation_data OWNER TO myenergi;

--
-- Name: aggregation_data_id_seq; Type: SEQUENCE; Schema: public; Owner: myenergi
--
CREATE SEQUENCE public.aggregation_data_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER TABLE
    public.aggregation_data_id_seq OWNER TO myenergi;

--
-- Name: aggregation_data_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myenergi
--
ALTER SEQUENCE public.aggregation_data_id_seq OWNED BY public.aggregation_data.id;

--
-- Name: alternate_servers; Type: TABLE; Schema: public; Owner: myenergi
--
CREATE TABLE public.alternate_servers (
    id integer NOT NULL,
    serveraid integer,
    serverbid integer,
    CONSTRAINT "CHK_504aa2c030ad291fa1a4375848" CHECK ((id = 1))
);

ALTER TABLE
    public.alternate_servers OWNER TO myenergi;

--
-- Name: command; Type: TABLE; Schema: public; Owner: myenergi
--
CREATE TABLE public.command (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    hubport integer NOT NULL,
    hubipaddress character varying,
    hubnetworkid integer NOT NULL,
    destinationdeviceaddressraw integer NOT NULL,
    destinationdeviceserialno bigint NOT NULL,
    destinationdevicename public.command_destinationdevicename_enum,
    commandtries smallint DEFAULT '0' :: smallint NOT NULL,
    commandlastsent timestamp with time zone,
    commandinitiated timestamp with time zone NOT NULL,
    commandtype public.command_commandtype_enum,
    commandstate public.command_commandstate_enum,
    commandinitiatorservice public.command_commandinitiatorservice_enum,
    commandparameters jsonb,
    commandinitiatoruserid integer
);

ALTER TABLE
    public.command OWNER TO myenergi;

--
-- Name: config_reply; Type: TABLE; Schema: public; Owner: myenergi
--
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

ALTER TABLE
    public.config_reply OWNER TO myenergi;

--
-- Name: config_reply_boost_timer; Type: TABLE; Schema: public; Owner: myenergi
--
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

ALTER TABLE
    public.config_reply_boost_timer OWNER TO myenergi;

--
-- Name: config_reply_boost_timer_id_seq; Type: SEQUENCE; Schema: public; Owner: myenergi
--
CREATE SEQUENCE public.config_reply_boost_timer_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER TABLE
    public.config_reply_boost_timer_id_seq OWNER TO myenergi;

--
-- Name: config_reply_boost_timer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myenergi
--
ALTER SEQUENCE public.config_reply_boost_timer_id_seq OWNED BY public.config_reply_boost_timer.id;

--
-- Name: config_reply_id_seq; Type: SEQUENCE; Schema: public; Owner: myenergi
--
CREATE SEQUENCE public.config_reply_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER TABLE
    public.config_reply_id_seq OWNER TO myenergi;

--
-- Name: config_reply_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myenergi
--
ALTER SEQUENCE public.config_reply_id_seq OWNED BY public.config_reply.id;

--
-- Name: eddi; Type: TABLE; Schema: public; Owner: myenergi
--
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
    commandseqno smallint DEFAULT '0' :: smallint NOT NULL,
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

ALTER TABLE
    public.eddi OWNER TO myenergi;

--
-- Name: eddi_config_reply_data; Type: TABLE; Schema: public; Owner: myenergi
--
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

ALTER TABLE
    public.eddi_config_reply_data OWNER TO myenergi;

--
-- Name: eddi_config_reply_data_id_seq; Type: SEQUENCE; Schema: public; Owner: myenergi
--
CREATE SEQUENCE public.eddi_config_reply_data_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER TABLE
    public.eddi_config_reply_data_id_seq OWNER TO myenergi;

--
-- Name: eddi_config_reply_data_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myenergi
--
ALTER SEQUENCE public.eddi_config_reply_data_id_seq OWNED BY public.eddi_config_reply_data.id;

--
-- Name: eddi_minute; Type: TABLE; Schema: public; Owner: myenergi
--
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

ALTER TABLE
    public.eddi_minute OWNER TO myenergi;

--
-- Name: event; Type: TABLE; Schema: public; Owner: myenergi
--
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

ALTER TABLE
    public.event OWNER TO myenergi;

--
-- Name: foal_session; Type: TABLE; Schema: public; Owner: myenergi
--
CREATE TABLE public.foal_session (
    session_id character varying NOT NULL,
    session_content text NOT NULL,
    created_at bigint NOT NULL,
    updated_at bigint NOT NULL
);

ALTER TABLE
    public.foal_session OWNER TO myenergi;

--
-- Name: harvi; Type: TABLE; Schema: public; Owner: myenergi
--
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

ALTER TABLE
    public.harvi OWNER TO myenergi;

--
-- Name: hub; Type: TABLE; Schema: public; Owner: myenergi
--
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

ALTER TABLE
    public.hub OWNER TO myenergi;

--
-- Name: libbi; Type: TABLE; Schema: public; Owner: myenergi
--
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
    commandseqno smallint DEFAULT '0' :: smallint NOT NULL,
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

ALTER TABLE
    public.libbi OWNER TO myenergi;

--
-- Name: libbi_config_reply_data; Type: TABLE; Schema: public; Owner: myenergi
--
CREATE TABLE public.libbi_config_reply_data (
    id integer NOT NULL,
    signature bigint NOT NULL,
    timezone character varying,
    dateformat character varying,
    dston boolean NOT NULL,
    language character varying,
    icons character varying
);

ALTER TABLE
    public.libbi_config_reply_data OWNER TO myenergi;

--
-- Name: libbi_config_reply_data_id_seq; Type: SEQUENCE; Schema: public; Owner: myenergi
--
CREATE SEQUENCE public.libbi_config_reply_data_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER TABLE
    public.libbi_config_reply_data_id_seq OWNER TO myenergi;

--
-- Name: libbi_config_reply_data_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myenergi
--
ALTER SEQUENCE public.libbi_config_reply_data_id_seq OWNED BY public.libbi_config_reply_data.id;

--
-- Name: migrations; Type: TABLE; Schema: public; Owner: myenergi
--
CREATE TABLE public.migrations (
    id integer NOT NULL,
    "timestamp" bigint NOT NULL,
    name character varying NOT NULL
);

ALTER TABLE
    public.migrations OWNER TO myenergi;

--
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: myenergi
--
CREATE SEQUENCE public.migrations_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER TABLE
    public.migrations_id_seq OWNER TO myenergi;

--
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myenergi
--
ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;

--
-- Name: server; Type: TABLE; Schema: public; Owner: myenergi
--
CREATE TABLE public.server (
    id integer NOT NULL,
    isactive boolean DEFAULT false NOT NULL,
    name character varying NOT NULL,
    shard character varying,
    ip character varying NOT NULL,
    url character varying NOT NULL,
    isdefault boolean DEFAULT false NOT NULL
);

ALTER TABLE
    public.server OWNER TO myenergi;

--
-- Name: server_id_seq; Type: SEQUENCE; Schema: public; Owner: myenergi
--
CREATE SEQUENCE public.server_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER TABLE
    public.server_id_seq OWNER TO myenergi;

--
-- Name: server_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myenergi
--
ALTER SEQUENCE public.server_id_seq OWNED BY public.server.id;

--
-- Name: update_box; Type: TABLE; Schema: public; Owner: myenergi
--
CREATE TABLE public.update_box (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    updateboxicontype public.update_box_updateboxicontype_enum,
    leftcolor character varying NOT NULL,
    rightcolor character varying NOT NULL,
    title character varying NOT NULL,
    description character varying,
    displaydatetime timestamp with time zone NOT NULL
);

ALTER TABLE
    public.update_box OWNER TO myenergi;

--
-- Name: user; Type: TABLE; Schema: public; Owner: myenergi
--
CREATE TABLE public."user" (
    id integer NOT NULL,
    email character varying NOT NULL,
    name character varying NOT NULL,
    lastlogin timestamp with time zone NOT NULL,
    socialtokenexp timestamp with time zone NOT NULL,
    accessid integer NOT NULL
);

ALTER TABLE
    public."user" OWNER TO myenergi;

--
-- Name: user_access; Type: TABLE; Schema: public; Owner: myenergi
--
CREATE TABLE public.user_access (
    id integer NOT NULL,
    type character varying NOT NULL,
    permissions jsonb DEFAULT '[]' :: jsonb NOT NULL
);

ALTER TABLE
    public.user_access OWNER TO myenergi;

--
-- Name: user_access_id_seq; Type: SEQUENCE; Schema: public; Owner: myenergi
--
CREATE SEQUENCE public.user_access_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER TABLE
    public.user_access_id_seq OWNER TO myenergi;

--
-- Name: user_access_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myenergi
--
ALTER SEQUENCE public.user_access_id_seq OWNED BY public.user_access.id;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: myenergi
--
CREATE SEQUENCE public.user_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER TABLE
    public.user_id_seq OWNER TO myenergi;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myenergi
--
ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;

--
-- Name: zappi; Type: TABLE; Schema: public; Owner: myenergi
--
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
    commandseqno smallint DEFAULT '0' :: smallint NOT NULL,
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

ALTER TABLE
    public.zappi OWNER TO myenergi;

--
-- Name: zappi1_config_reply_data; Type: TABLE; Schema: public; Owner: myenergi
--
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

ALTER TABLE
    public.zappi1_config_reply_data OWNER TO myenergi;

--
-- Name: zappi1_config_reply_data_id_seq; Type: SEQUENCE; Schema: public; Owner: myenergi
--
CREATE SEQUENCE public.zappi1_config_reply_data_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER TABLE
    public.zappi1_config_reply_data_id_seq OWNER TO myenergi;

--
-- Name: zappi1_config_reply_data_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myenergi
--
ALTER SEQUENCE public.zappi1_config_reply_data_id_seq OWNED BY public.zappi1_config_reply_data.id;

--
-- Name: zappi2_config_reply_data; Type: TABLE; Schema: public; Owner: myenergi
--
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

ALTER TABLE
    public.zappi2_config_reply_data OWNER TO myenergi;

--
-- Name: zappi2_config_reply_data_id_seq; Type: SEQUENCE; Schema: public; Owner: myenergi
--
CREATE SEQUENCE public.zappi2_config_reply_data_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER TABLE
    public.zappi2_config_reply_data_id_seq OWNER TO myenergi;

--
-- Name: zappi2_config_reply_data_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myenergi
--
ALTER SEQUENCE public.zappi2_config_reply_data_id_seq OWNED BY public.zappi2_config_reply_data.id;

--
-- Name: zappi_minute; Type: TABLE; Schema: public; Owner: myenergi
--
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

ALTER TABLE
    public.zappi_minute OWNER TO myenergi;

--
-- Name: aggregation_data id; Type: DEFAULT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.aggregation_data
ALTER COLUMN
    id
SET
    DEFAULT nextval('public.aggregation_data_id_seq' :: regclass);

--
-- Name: config_reply id; Type: DEFAULT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.config_reply
ALTER COLUMN
    id
SET
    DEFAULT nextval('public.config_reply_id_seq' :: regclass);

--
-- Name: config_reply_boost_timer id; Type: DEFAULT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.config_reply_boost_timer
ALTER COLUMN
    id
SET
    DEFAULT nextval(
        'public.config_reply_boost_timer_id_seq' :: regclass
    );

--
-- Name: eddi_config_reply_data id; Type: DEFAULT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.eddi_config_reply_data
ALTER COLUMN
    id
SET
    DEFAULT nextval(
        'public.eddi_config_reply_data_id_seq' :: regclass
    );

--
-- Name: libbi_config_reply_data id; Type: DEFAULT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.libbi_config_reply_data
ALTER COLUMN
    id
SET
    DEFAULT nextval(
        'public.libbi_config_reply_data_id_seq' :: regclass
    );

--
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.migrations
ALTER COLUMN
    id
SET
    DEFAULT nextval('public.migrations_id_seq' :: regclass);

--
-- Name: server id; Type: DEFAULT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.server
ALTER COLUMN
    id
SET
    DEFAULT nextval('public.server_id_seq' :: regclass);

--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public."user"
ALTER COLUMN
    id
SET
    DEFAULT nextval('public.user_id_seq' :: regclass);

--
-- Name: user_access id; Type: DEFAULT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.user_access
ALTER COLUMN
    id
SET
    DEFAULT nextval('public.user_access_id_seq' :: regclass);

--
-- Name: zappi1_config_reply_data id; Type: DEFAULT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.zappi1_config_reply_data
ALTER COLUMN
    id
SET
    DEFAULT nextval(
        'public.zappi1_config_reply_data_id_seq' :: regclass
    );

--
-- Name: zappi2_config_reply_data id; Type: DEFAULT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.zappi2_config_reply_data
ALTER COLUMN
    id
SET
    DEFAULT nextval(
        'public.zappi2_config_reply_data_id_seq' :: regclass
    );

--
-- Name: zappi1_config_reply_data PK_085dc1f7ec451606b70e1765ff6; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.zappi1_config_reply_data
ADD
    CONSTRAINT "PK_085dc1f7ec451606b70e1765ff6" PRIMARY KEY (id);

--
-- Name: eddi_config_reply_data PK_2635a0f6eeef3b81fd097be627f; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.eddi_config_reply_data
ADD
    CONSTRAINT "PK_2635a0f6eeef3b81fd097be627f" PRIMARY KEY (id);

--
-- Name: zappi PK_294f9d2575dd264b591f148b32c; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.zappi
ADD
    CONSTRAINT "PK_294f9d2575dd264b591f148b32c" PRIMARY KEY (serialno);

--
-- Name: libbi_config_reply_data PK_2dc80a0e00f86b23465c69bd59b; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.libbi_config_reply_data
ADD
    CONSTRAINT "PK_2dc80a0e00f86b23465c69bd59b" PRIMARY KEY (id);

--
-- Name: hub PK_2debac79742deb56cc3e1ace3a1; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.hub
ADD
    CONSTRAINT "PK_2debac79742deb56cc3e1ace3a1" PRIMARY KEY (serialno);

--
-- Name: eddi_minute PK_4c94f05e4de575488f4a0c2905d; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.eddi_minute
ADD
    CONSTRAINT "PK_4c94f05e4de575488f4a0c2905d" PRIMARY KEY (serialno, "timestamp");

--
-- Name: config_reply_boost_timer PK_5a81356ceabecdd7309e8cc2414; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.config_reply_boost_timer
ADD
    CONSTRAINT "PK_5a81356ceabecdd7309e8cc2414" PRIMARY KEY (id);

--
-- Name: command PK_5bfa4e1cb54b62f512078f3e7cb; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.command
ADD
    CONSTRAINT "PK_5bfa4e1cb54b62f512078f3e7cb" PRIMARY KEY (id);

--
-- Name: zappi_minute PK_5f4400bed8cbe77429781c5f9b3; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.zappi_minute
ADD
    CONSTRAINT "PK_5f4400bed8cbe77429781c5f9b3" PRIMARY KEY (serialno, "timestamp");

--
-- Name: harvi PK_6285c00e48bbf1e23e83d4bb8d3; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.harvi
ADD
    CONSTRAINT "PK_6285c00e48bbf1e23e83d4bb8d3" PRIMARY KEY (serialno);

--
-- Name: migrations PK_8c82d7f526340ab734260ea46be; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.migrations
ADD
    CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY (id);

--
-- Name: user_access PK_9404e012dec46d1faa719fd9bd7; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.user_access
ADD
    CONSTRAINT "PK_9404e012dec46d1faa719fd9bd7" PRIMARY KEY (id);

--
-- Name: foal_session PK_9e23333fee454aa1884ba8e0af7; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.foal_session
ADD
    CONSTRAINT "PK_9e23333fee454aa1884ba8e0af7" PRIMARY KEY (session_id);

--
-- Name: eddi PK_a88101059e2cb82e818376be88b; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.eddi
ADD
    CONSTRAINT "PK_a88101059e2cb82e818376be88b" PRIMARY KEY (serialno);

--
-- Name: libbi PK_be2f100a41e74b061793afbde57; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.libbi
ADD
    CONSTRAINT "PK_be2f100a41e74b061793afbde57" PRIMARY KEY (serialno);

--
-- Name: config_reply PK_c3a4c701c6296e447ec4d22f3f6; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.config_reply
ADD
    CONSTRAINT "PK_c3a4c701c6296e447ec4d22f3f6" PRIMARY KEY (id);

--
-- Name: user PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public."user"
ADD
    CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);

--
-- Name: event PK_d1714a7ea14845b07ce5e7cb5dc; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.event
ADD
    CONSTRAINT "PK_d1714a7ea14845b07ce5e7cb5dc" PRIMARY KEY (serialno, eventtime, numberofeventsinthissecond);

--
-- Name: aggregation_data PK_ddc7a0995733a50dc8df46d9270; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.aggregation_data
ADD
    CONSTRAINT "PK_ddc7a0995733a50dc8df46d9270" PRIMARY KEY (id);

--
-- Name: update_box PK_e310121e9dabb97a8dae3e9e285; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.update_box
ADD
    CONSTRAINT "PK_e310121e9dabb97a8dae3e9e285" PRIMARY KEY (id);

--
-- Name: alternate_servers PK_e61a680a6adf6a3372f5498a5da; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.alternate_servers
ADD
    CONSTRAINT "PK_e61a680a6adf6a3372f5498a5da" PRIMARY KEY (id);

--
-- Name: zappi2_config_reply_data PK_f5da991768799f1efbc44fe7daf; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.zappi2_config_reply_data
ADD
    CONSTRAINT "PK_f5da991768799f1efbc44fe7daf" PRIMARY KEY (id);

--
-- Name: server PK_f8b8af38bdc23b447c0a57c7937; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.server
ADD
    CONSTRAINT "PK_f8b8af38bdc23b447c0a57c7937" PRIMARY KEY (id);

--
-- Name: config_reply REL_3baf65bb45ce2859ac32735a67; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.config_reply
ADD
    CONSTRAINT "REL_3baf65bb45ce2859ac32735a67" UNIQUE (eddiconfigreplydataid);

--
-- Name: eddi REL_3f5811364dfbfee7013bbf7203; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.eddi
ADD
    CONSTRAINT "REL_3f5811364dfbfee7013bbf7203" UNIQUE (aggregationdataid);

--
-- Name: config_reply REL_6044c3432d62fa5e6e4137a854; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.config_reply
ADD
    CONSTRAINT "REL_6044c3432d62fa5e6e4137a854" UNIQUE (zappi2configreplydataid);

--
-- Name: config_reply REL_73a000c058e740c918ea5671d4; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.config_reply
ADD
    CONSTRAINT "REL_73a000c058e740c918ea5671d4" UNIQUE (zappi1configreplydataid);

--
-- Name: zappi REL_d3be20378772f9b596f1e9b406; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.zappi
ADD
    CONSTRAINT "REL_d3be20378772f9b596f1e9b406" UNIQUE (aggregationdataid);

--
-- Name: alternate_servers REL_d7ddafb47c4de740afe922c38d; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.alternate_servers
ADD
    CONSTRAINT "REL_d7ddafb47c4de740afe922c38d" UNIQUE (serverbid);

--
-- Name: alternate_servers REL_f3f54c7cf1d5dbad68a2b17e78; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.alternate_servers
ADD
    CONSTRAINT "REL_f3f54c7cf1d5dbad68a2b17e78" UNIQUE (serveraid);

--
-- Name: config_reply UQ_8789df7eb80d48db70687c56817; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.config_reply
ADD
    CONSTRAINT "UQ_8789df7eb80d48db70687c56817" UNIQUE (libbiconfigreplydataid);

--
-- Name: config_reply UQ_9d8a1f5e661cd00e338b9186741; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.config_reply
ADD
    CONSTRAINT "UQ_9d8a1f5e661cd00e338b9186741" UNIQUE (eddiserialno);

--
-- Name: config_reply UQ_a1d9b6c8b6ebcadb725553aa5f4; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.config_reply
ADD
    CONSTRAINT "UQ_a1d9b6c8b6ebcadb725553aa5f4" UNIQUE (zappiserialno);

--
-- Name: user_access UQ_ba7e316ff7107fb69ae2659e94e; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.user_access
ADD
    CONSTRAINT "UQ_ba7e316ff7107fb69ae2659e94e" UNIQUE (type);

--
-- Name: config_reply UQ_db3c4d8de9e4e0ded41a8a8d8da; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.config_reply
ADD
    CONSTRAINT "UQ_db3c4d8de9e4e0ded41a8a8d8da" UNIQUE (libbiserialno);

--
-- Name: user UQ_e12875dfb3b1d92d7d7c5377e22; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public."user"
ADD
    CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE (email);

--
-- Name: server UQ_e16254733ff2264f94f856316ee; Type: CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.server
ADD
    CONSTRAINT "UQ_e16254733ff2264f94f856316ee" UNIQUE (name);

--
-- Name: IDX_15922a19f27430f0b0eabcaf20; Type: INDEX; Schema: public; Owner: myenergi
--
CREATE INDEX "IDX_15922a19f27430f0b0eabcaf20" ON public.config_reply_boost_timer USING btree (zappi2configreplydataid);

--
-- Name: IDX_23ef66dd16383a3458b0dd5f8a; Type: INDEX; Schema: public; Owner: myenergi
--
CREATE INDEX "IDX_23ef66dd16383a3458b0dd5f8a" ON public.eddi USING btree (hubserialno);

--
-- Name: IDX_59c842125486053c4ca541a2ff; Type: INDEX; Schema: public; Owner: myenergi
--
CREATE INDEX "IDX_59c842125486053c4ca541a2ff" ON public.command USING btree (destinationdeviceserialno, commandtype);

--
-- Name: IDX_5ecd9dd59b7ce9f54cc8e27346; Type: INDEX; Schema: public; Owner: myenergi
--
CREATE INDEX "IDX_5ecd9dd59b7ce9f54cc8e27346" ON public.command USING btree (commandstate);

--
-- Name: IDX_bbe0c113836616a80ac1b1717f; Type: INDEX; Schema: public; Owner: myenergi
--
CREATE INDEX "IDX_bbe0c113836616a80ac1b1717f" ON public.libbi USING btree (hubserialno);

--
-- Name: IDX_c292d323533d84fe6735164776; Type: INDEX; Schema: public; Owner: myenergi
--
CREATE INDEX "IDX_c292d323533d84fe6735164776" ON public.zappi USING btree (hubserialno);

--
-- Name: IDX_dc3d55a7d5df286caf5178dffe; Type: INDEX; Schema: public; Owner: myenergi
--
CREATE INDEX "IDX_dc3d55a7d5df286caf5178dffe" ON public.harvi USING btree (hubserialno);

--
-- Name: IDX_e2602aac09a25d51af32bcbe4c; Type: INDEX; Schema: public; Owner: myenergi
--
CREATE INDEX "IDX_e2602aac09a25d51af32bcbe4c" ON public.config_reply_boost_timer USING btree (eddiconfigreplydataid);

--
-- Name: IDX_e2cdaf2df2747017221051a35c; Type: INDEX; Schema: public; Owner: myenergi
--
CREATE INDEX "IDX_e2cdaf2df2747017221051a35c" ON public.config_reply_boost_timer USING btree (zappi1configreplydataid);

--
-- Name: command_destinationdeviceserialno_idx; Type: INDEX; Schema: public; Owner: myenergi
--
CREATE INDEX command_destinationdeviceserialno_idx ON public.command USING btree (destinationdeviceserialno, commandstate);

--
-- Name: config_reply_boost_timer FK_15922a19f27430f0b0eabcaf206; Type: FK CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.config_reply_boost_timer
ADD
    CONSTRAINT "FK_15922a19f27430f0b0eabcaf206" FOREIGN KEY (zappi2configreplydataid) REFERENCES public.zappi2_config_reply_data(id);

--
-- Name: eddi FK_23ef66dd16383a3458b0dd5f8a5; Type: FK CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.eddi
ADD
    CONSTRAINT "FK_23ef66dd16383a3458b0dd5f8a5" FOREIGN KEY (hubserialno) REFERENCES public.hub(serialno);

--
-- Name: config_reply FK_3baf65bb45ce2859ac32735a672; Type: FK CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.config_reply
ADD
    CONSTRAINT "FK_3baf65bb45ce2859ac32735a672" FOREIGN KEY (eddiconfigreplydataid) REFERENCES public.eddi_config_reply_data(id);

--
-- Name: eddi FK_3f5811364dfbfee7013bbf72035; Type: FK CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.eddi
ADD
    CONSTRAINT "FK_3f5811364dfbfee7013bbf72035" FOREIGN KEY (aggregationdataid) REFERENCES public.aggregation_data(id);

--
-- Name: command FK_40d8dba932313894c96c76fd26c; Type: FK CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.command
ADD
    CONSTRAINT "FK_40d8dba932313894c96c76fd26c" FOREIGN KEY (commandinitiatoruserid) REFERENCES public."user"(id);

--
-- Name: hub FK_5f5e7698f128c95ac2417ad91f1; Type: FK CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.hub
ADD
    CONSTRAINT "FK_5f5e7698f128c95ac2417ad91f1" FOREIGN KEY (cloudipoverrideserverid) REFERENCES public.server(id);

--
-- Name: config_reply FK_6044c3432d62fa5e6e4137a8543; Type: FK CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.config_reply
ADD
    CONSTRAINT "FK_6044c3432d62fa5e6e4137a8543" FOREIGN KEY (zappi2configreplydataid) REFERENCES public.zappi2_config_reply_data(id);

--
-- Name: user FK_6f914d4404b61b1c43c63f1ba85; Type: FK CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public."user"
ADD
    CONSTRAINT "FK_6f914d4404b61b1c43c63f1ba85" FOREIGN KEY (accessid) REFERENCES public.user_access(id);

--
-- Name: config_reply FK_73a000c058e740c918ea5671d4f; Type: FK CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.config_reply
ADD
    CONSTRAINT "FK_73a000c058e740c918ea5671d4f" FOREIGN KEY (zappi1configreplydataid) REFERENCES public.zappi1_config_reply_data(id);

--
-- Name: config_reply FK_8789df7eb80d48db70687c56817; Type: FK CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.config_reply
ADD
    CONSTRAINT "FK_8789df7eb80d48db70687c56817" FOREIGN KEY (libbiconfigreplydataid) REFERENCES public.libbi_config_reply_data(id);

--
-- Name: config_reply FK_9d8a1f5e661cd00e338b9186741; Type: FK CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.config_reply
ADD
    CONSTRAINT "FK_9d8a1f5e661cd00e338b9186741" FOREIGN KEY (eddiserialno) REFERENCES public.eddi(serialno);

--
-- Name: config_reply FK_a1d9b6c8b6ebcadb725553aa5f4; Type: FK CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.config_reply
ADD
    CONSTRAINT "FK_a1d9b6c8b6ebcadb725553aa5f4" FOREIGN KEY (zappiserialno) REFERENCES public.zappi(serialno);

--
-- Name: libbi FK_bbe0c113836616a80ac1b1717f6; Type: FK CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.libbi
ADD
    CONSTRAINT "FK_bbe0c113836616a80ac1b1717f6" FOREIGN KEY (hubserialno) REFERENCES public.hub(serialno);

--
-- Name: zappi FK_c292d323533d84fe67351647763; Type: FK CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.zappi
ADD
    CONSTRAINT "FK_c292d323533d84fe67351647763" FOREIGN KEY (hubserialno) REFERENCES public.hub(serialno);

--
-- Name: zappi FK_d3be20378772f9b596f1e9b406d; Type: FK CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.zappi
ADD
    CONSTRAINT "FK_d3be20378772f9b596f1e9b406d" FOREIGN KEY (aggregationdataid) REFERENCES public.aggregation_data(id);

--
-- Name: alternate_servers FK_d7ddafb47c4de740afe922c38dc; Type: FK CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.alternate_servers
ADD
    CONSTRAINT "FK_d7ddafb47c4de740afe922c38dc" FOREIGN KEY (serverbid) REFERENCES public.server(id);

--
-- Name: config_reply FK_db3c4d8de9e4e0ded41a8a8d8da; Type: FK CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.config_reply
ADD
    CONSTRAINT "FK_db3c4d8de9e4e0ded41a8a8d8da" FOREIGN KEY (libbiserialno) REFERENCES public.libbi(serialno);

--
-- Name: harvi FK_dc3d55a7d5df286caf5178dffe9; Type: FK CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.harvi
ADD
    CONSTRAINT "FK_dc3d55a7d5df286caf5178dffe9" FOREIGN KEY (hubserialno) REFERENCES public.hub(serialno);

--
-- Name: config_reply_boost_timer FK_e2602aac09a25d51af32bcbe4c2; Type: FK CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.config_reply_boost_timer
ADD
    CONSTRAINT "FK_e2602aac09a25d51af32bcbe4c2" FOREIGN KEY (eddiconfigreplydataid) REFERENCES public.eddi_config_reply_data(id);

--
-- Name: config_reply_boost_timer FK_e2cdaf2df2747017221051a35c2; Type: FK CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.config_reply_boost_timer
ADD
    CONSTRAINT "FK_e2cdaf2df2747017221051a35c2" FOREIGN KEY (zappi1configreplydataid) REFERENCES public.zappi1_config_reply_data(id);

--
-- Name: alternate_servers FK_f3f54c7cf1d5dbad68a2b17e78b; Type: FK CONSTRAINT; Schema: public; Owner: myenergi
--
ALTER TABLE
    ONLY public.alternate_servers
ADD
    CONSTRAINT "FK_f3f54c7cf1d5dbad68a2b17e78b" FOREIGN KEY (serveraid) REFERENCES public.server(id);

--
-- PostgreSQL database dump complete
--
-- TABLE PLUS TABLE STRUCTURE
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- -- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.
-- -- Squences
-- CREATE SEQUENCE IF NOT EXISTS user_id_seq;
-- -- Table Definition
-- CREATE TABLE "public"."user" (
--     "id" int4 NOT NULL DEFAULT nextval('user_id_seq' :: regclass),
--     "email" varchar NOT NULL,
--     "name" varchar NOT NULL,
--     "lastlogin" timestamptz NOT NULL,
--     "socialtokenexp" timestamptz NOT NULL,
--     "accessid" int4 NOT NULL
-- );
-- -- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.
-- -- Squences
-- CREATE SEQUENCE IF NOT EXISTS aggregation_data_id_seq;
-- -- Table Definition
-- CREATE TABLE "public"."aggregation_data" (
--     "id" int4 NOT NULL DEFAULT nextval('aggregation_data_id_seq' :: regclass),
--     "admingroup" varchar,
--     "controlgroup" varchar,
--     "groupkey" varchar,
--     "daf" int2,
--     "ddf" int2,
--     "uaf" int2,
--     "udf" int2,
--     "dsrdaf" int2,
--     "dsrddf" int2,
--     "dsruaf" int2,
--     "dsrudf" int2,
--     "fra" varchar,
--     "frm" varchar,
--     "frs" varchar,
--     "dds" varchar,
--     "lod" int2,
--     "csn" int2,
--     "ttl" int2,
--     PRIMARY KEY ("id")
-- );
-- -- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.
-- -- Table Definition
-- CREATE TABLE "public"."alternate_servers" (
--     "id" int4 NOT NULL,
--     "serveraid" int4,
--     "serverbid" int4
-- );
-- -- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.
-- DROP TYPE IF EXISTS "public"."command_destinationdevicename_enum";
-- CREATE TYPE "public"."command_destinationdevicename_enum" AS ENUM (
--     'eddi',
--     'zappi1',
--     'zappi2',
--     'harvi',
--     'libbi',
--     'hub'
-- );
-- DROP TYPE IF EXISTS "public"."command_commandtype_enum";
-- CREATE TYPE "public"."command_commandtype_enum" AS ENUM (
--     'setModeEddi',
--     'setModeZappi',
--     'setModeLibbi',
--     'setLock',
--     'setPriority',
--     'setEddiBoost',
--     'readConfig',
--     'writeConfigSetHeaterPriority',
--     'writeConfigSetBoostTime',
--     'writeConfigSetMinGreenLevel'
-- );
-- DROP TYPE IF EXISTS "public"."command_commandstate_enum";
-- CREATE TYPE "public"."command_commandstate_enum" AS ENUM ('initial', 'inProgress', 'failed', 'success');
-- DROP TYPE IF EXISTS "public"."command_commandinitiatorservice_enum";
-- CREATE TYPE "public"."command_commandinitiatorservice_enum" AS ENUM (
--     'appApi',
--     'meLinkAppApi',
--     'adminApi',
--     'hubReceiver',
--     'other'
-- );
-- -- Table Definition
-- CREATE TABLE "public"."command" (
--     "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
--     "hubport" int4 NOT NULL,
--     "hubipaddress" varchar,
--     "hubnetworkid" int4 NOT NULL,
--     "destinationdeviceaddressraw" int4 NOT NULL,
--     "destinationdeviceserialno" int8 NOT NULL,
--     "destinationdevicename" "public"."command_destinationdevicename_enum",
--     "commandtries" int2 NOT NULL DEFAULT '0' :: smallint,
--     "commandlastsent" timestamptz,
--     "commandinitiated" timestamptz NOT NULL,
--     "commandtype" "public"."command_commandtype_enum",
--     "commandstate" "public"."command_commandstate_enum",
--     "commandinitiatorservice" "public"."command_commandinitiatorservice_enum",
--     "commandparameters" jsonb,
--     "commandinitiatoruserid" int4,
--     CONSTRAINT "FK_40d8dba932313894c96c76fd26c" FOREIGN KEY ("commandinitiatoruserid") REFERENCES "public"."user"("id"),
--     PRIMARY KEY ("id")
-- );
-- -- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.
-- -- Squences
-- CREATE SEQUENCE IF NOT EXISTS config_reply_id_seq;
-- -- Table Definition
-- CREATE TABLE "public"."config_reply" (
--     "id" int4 NOT NULL DEFAULT nextval('config_reply_id_seq' :: regclass),
--     "serialno" int8 NOT NULL,
--     "structure" int2 NOT NULL,
--     "updatedat" timestamptz NOT NULL,
--     "zappi1configreplydataid" int4,
--     "zappi2configreplydataid" int4,
--     "eddiconfigreplydataid" int4,
--     "zappiserialno" int8,
--     "eddiserialno" int8,
--     "libbiconfigreplydataid" int4,
--     "libbiserialno" int8
-- );
-- -- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.
-- -- Squences
-- CREATE SEQUENCE IF NOT EXISTS config_reply_boost_timer_id_seq;
-- DROP TYPE IF EXISTS "public"."config_reply_boost_timer_heatertype_enum";
-- CREATE TYPE "public"."config_reply_boost_timer_heatertype_enum" AS ENUM ('heater1', 'heater2', 'relay1', 'relay2');
-- -- Table Definition
-- CREATE TABLE "public"."config_reply_boost_timer" (
--     "id" int4 NOT NULL DEFAULT nextval('config_reply_boost_timer_id_seq' :: regclass),
--     "heatertype" "public"."config_reply_boost_timer_heatertype_enum",
--     "slot" int2 NOT NULL,
--     "duration" int2 NOT NULL,
--     "starthour" int2 NOT NULL,
--     "startminute" int2 NOT NULL,
--     "temperature" int2,
--     "mondayon" bool NOT NULL,
--     "tuesdayon" bool NOT NULL,
--     "wednesdayon" bool NOT NULL,
--     "thursdayon" bool NOT NULL,
--     "fridayon" bool NOT NULL,
--     "saturdayon" bool NOT NULL,
--     "sundayon" bool NOT NULL,
--     "economy" bool NOT NULL,
--     "zappi1configreplydataid" int4,
--     "zappi2configreplydataid" int4,
--     "eddiconfigreplydataid" int4
-- );
-- -- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.
-- -- Table Definition
-- CREATE TABLE "public"."eddi" (
--     "deviceclass" varchar NOT NULL,
--     "serialno" int8 NOT NULL,
--     "updatedat" timestamptz NOT NULL,
--     "currentversion" int4,
--     "deviceinstance" int4,
--     "deviceaddressraw" int4 NOT NULL,
--     "specialversion" varchar,
--     "agggroupno" int4,
--     "serverconfigtime" int4,
--     "productcode" int2,
--     "voltage" int2,
--     "frequency" int2,
--     "maxpower" int4,
--     "minpower" int4,
--     "isaggregated" bool NOT NULL DEFAULT false,
--     "agglock" int2,
--     "configbootdone" bool NOT NULL DEFAULT false,
--     "configappdone" bool NOT NULL DEFAULT false,
--     "configoffset" int2,
--     "configlength" int2,
--     "phase" int2,
--     "state" varchar,
--     "priority" int2,
--     "boostmanual" bool,
--     "boosttimed" bool,
--     "currentboostremaining" int2,
--     "configbootdata" bytea,
--     "configappdata" bytea,
--     "configstate" int2,
--     "configstructure" int2,
--     "configversion" int2,
--     "prioritychanges" int2,
--     "commandseqno" int2 NOT NULL DEFAULT '0' :: smallint,
--     "heatertype1" varchar,
--     "heatertype2" varchar,
--     "heaterno" int2 NOT NULL,
--     "checkperiod" int2,
--     "ct2absent" int2,
--     "ct3absent" int2,
--     "ct1" jsonb,
--     "ct2" jsonb,
--     "ct3" jsonb,
--     "ct4" jsonb,
--     "ct5" jsonb,
--     "ct6" jsonb,
--     "ct7" jsonb,
--     "ct8" jsonb,
--     "ct9" jsonb,
--     "ct10" jsonb,
--     "ct11" jsonb,
--     "ct12" jsonb,
--     "ct13" jsonb,
--     "ct14" jsonb,
--     "ct15" jsonb,
--     "ct16" jsonb,
--     "pt1" jsonb,
--     "pt2" jsonb,
--     "aggregationdataid" int4,
--     "dsrdataload" int2,
--     "dsrdataseconds" int2,
--     "dsrdatacsn" int2,
--     "dsrdataack" int2,
--     "dsrdatalce" bool,
--     "dsrdatalca" bool,
--     "dsrdatafue" bool,
--     "dsrdatafde" bool,
--     "dsrdatafua" bool,
--     "dsrdatafda" bool,
--     "dsrdatafun" bool,
--     "dsrdatafdn" bool,
--     "relayboarddataboardconnected" bool,
--     "relayboarddataesenseactive" bool,
--     "relayboarddatarelay1active" bool,
--     "relayboarddatarelay1boosttype" varchar,
--     "relayboarddatarelay2active" bool,
--     "relayboarddatarelay2boosttype" varchar,
--     "boardtype" varchar,
--     "ethernetfitted" bool,
--     "ethernetspeed" varchar,
--     "ethernetmacaddress" macaddr,
--     "hubserialno" int8,
--     "deviceconfigtime" int8,
--     "chargeenergy" float4,
--     "highpower" bool,
--     "melinkversion" int4,
--     "stubloaderversion" int4,
--     "bootloaderversion" int4,
--     "microprocessorti" bool,
--     "createdat" timestamptz DEFAULT CURRENT_TIMESTAMP,
--     "melibversion" int4,
--     "vhub" bool,
--     "ethernetlink" bool,
--     "wifilink" bool,
--     CONSTRAINT "FK_3f5811364dfbfee7013bbf72035" FOREIGN KEY ("aggregationdataid") REFERENCES "public"."aggregation_data"("id"),
--     CONSTRAINT "FK_23ef66dd16383a3458b0dd5f8a5" FOREIGN KEY ("hubserialno") REFERENCES "public"."hub"("serialno"),
--     PRIMARY KEY ("serialno")
-- );
-- -- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.
-- -- Squences
-- CREATE SEQUENCE IF NOT EXISTS eddi_config_reply_data_id_seq;
-- -- Table Definition
-- CREATE TABLE "public"."eddi_config_reply_data" (
--     "id" int4 NOT NULL DEFAULT nextval('eddi_config_reply_data_id_seq' :: regclass),
--     "signature" int8 NOT NULL,
--     "gridlimit" int2 NOT NULL,
--     "devicelimit" int2 NOT NULL,
--     "batterymode" varchar,
--     "boosthotcanceldelay" int2 NOT NULL,
--     "minimumexport" int4 NOT NULL,
--     "exportmargin" int4 NOT NULL,
--     "calibration" bytea NOT NULL,
--     "minimumexporttime" int2 NOT NULL,
--     "hottime" int2 NOT NULL,
--     "heatertype1" varchar,
--     "heatertype2" varchar,
--     "passcode" int2 NOT NULL,
--     "maxgridlimit" int2 NOT NULL,
--     "sparewasnetphasemetering" int2 NOT NULL,
--     "heaterpriority" int2 NOT NULL,
--     "prioritycheckperiod" int2 NOT NULL,
--     "timezone" varchar,
--     "dateformat" varchar,
--     "dston" bool NOT NULL,
--     "updatefromcloud" bool NOT NULL,
--     "sparewasconfigversion" int2 NOT NULL,
--     "autosettimefromclouddone" bool NOT NULL,
--     "language" varchar,
--     "icons" varchar,
--     "backlight" int2 NOT NULL,
--     "contrast" int2 NOT NULL,
--     "ct1type" varchar,
--     "ct1subtype" varchar,
--     "ct2type" varchar,
--     "ct2subtype" varchar,
--     "savingskeepversion" int2 NOT NULL,
--     "ct1grouplimit" int2 NOT NULL,
--     "ct2grouplimit" int2 NOT NULL,
--     "ct3grouplimit" int2 NOT NULL,
--     "ct1group" int2 NOT NULL,
--     "ct2group" int2 NOT NULL,
--     "ct3group" int2 NOT NULL,
--     "exprelay1onthreshold" int4 NOT NULL,
--     "exprelay1offthreshold" int4 NOT NULL,
--     "exprelay1mode" varchar,
--     "exprelay1boosttype" int2 NOT NULL,
--     "exprelay1heating" varchar,
--     "exprelay1includediverted" bool NOT NULL,
--     "exprelay1minimumofftime" int2 NOT NULL,
--     "exprelay1minimumontime" int2 NOT NULL,
--     "exprelay2onthreshold" int4 NOT NULL,
--     "exprelay2offthreshold" int4 NOT NULL,
--     "exprelay2mode" varchar,
--     "exprelay2boosttype" int2 NOT NULL,
--     "exprelay2heating" varchar,
--     "exprelay2includediverted" bool NOT NULL,
--     "exprelay2minimumofftime" int2 NOT NULL,
--     "exprelay2minimumontime" int2 NOT NULL,
--     "esensemode" varchar,
--     "esenseboostmode" varchar,
--     "esenseheaterenablemode" varchar,
--     "esenseboostenablemode" varchar,
--     "esenserelaycontrolmode" varchar,
--     "esensesetpoints1" int2 NOT NULL,
--     "esensesetpoints2" int2 NOT NULL,
--     "esensehysteresis1" int2 NOT NULL,
--     "esensehysteresis2" int2 NOT NULL,
--     "serverconfigtime" int4,
--     "deviceconfigtime" int8 NOT NULL
-- );
-- -- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.
-- -- Table Definition
-- CREATE TABLE "public"."eddi_minute" (
--     "serialno" int8 NOT NULL,
--     "timestamp" timestamp NOT NULL,
--     "noseconds" int4 NOT NULL,
--     "exportpower" float4,
--     "importpower" float4,
--     "genpospw" float4,
--     "gennegpw" float4,
--     "frequency" float4,
--     "heatsink" float4,
--     "pt1" float4,
--     "pt2" float4,
--     "voltage" float4,
--     "divloadpower1" float4,
--     "divloadpower2" float4,
--     "boostloadpower1" float4,
--     "boostloadpower2" float4,
--     "externalcttype1" int2,
--     "externalcttype2" int2,
--     "externalctpospower1" float4,
--     "externalctpospower2" float4,
--     "externalctnegpower1" float4,
--     "externalctnegpower2" float4,
--     PRIMARY KEY ("serialno", "timestamp")
-- );
-- -- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.
-- -- Table Definition
-- CREATE TABLE "public"."event" (
--     "serialno" int8 NOT NULL,
--     "eventtime" timestamp NOT NULL,
--     "numberofeventsinthissecond" int2 NOT NULL,
--     "ischangemodechanged" bool NOT NULL,
--     "ispilotstatechanged" bool NOT NULL,
--     "iszappistatechanged" bool NOT NULL,
--     "wcsid" int2 NOT NULL,
--     "pilotstate" int2 NOT NULL,
--     "iscarpluggedin" bool NOT NULL,
--     "iscarunplugged" bool NOT NULL,
--     "chargingmode" int2 NOT NULL,
--     "selftest" int2 NOT NULL,
--     "pectfault" int2 NOT NULL,
--     "rcdfault" int2 NOT NULL,
--     "booststate" int2 NOT NULL,
--     "isboosting" bool NOT NULL,
--     "isfrequencyout" bool NOT NULL,
--     "isovertemperature" bool NOT NULL,
--     "isesenceactive" bool NOT NULL,
--     "isgridlimiting" bool NOT NULL,
--     "isproximitylimiting" bool NOT NULL,
--     "isgrouplimiting" bool NOT NULL,
--     "islostmelinkcommunications" bool NOT NULL,
--     "isendofcharge" bool NOT NULL,
--     "isthreephasecharging" bool NOT NULL,
--     "haschargejuststarted" bool NOT NULL,
--     "haschargejustended" bool NOT NULL,
--     "zappistate" int4 NOT NULL,
--     "istrapr" bool NOT NULL,
--     "isiopuwr" bool NOT NULL,
--     "iscm" bool NOT NULL,
--     "isextra" bool NOT NULL,
--     "isswr" bool NOT NULL,
--     "iswdto" bool NOT NULL,
--     "isbor" bool NOT NULL,
--     "ispor" bool NOT NULL,
--     "chargeenergy" int4 NOT NULL
-- );
-- -- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.
-- -- Table Definition
-- CREATE TABLE "public"."foal_session" (
--     "session_id" varchar NOT NULL,
--     "session_content" text NOT NULL,
--     "created_at" int8 NOT NULL,
--     "updated_at" int8 NOT NULL
-- );
-- -- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.
-- -- Table Definition
-- CREATE TABLE "public"."harvi" (
--     "deviceclass" varchar NOT NULL,
--     "serialno" int8 NOT NULL,
--     "updatedat" timestamptz NOT NULL,
--     "currentversion" int4,
--     "ct1" jsonb,
--     "ct2" jsonb,
--     "ct3" jsonb,
--     "ct4" jsonb,
--     "ct5" jsonb,
--     "ct6" jsonb,
--     "ct7" jsonb,
--     "ct8" jsonb,
--     "ct9" jsonb,
--     "ct10" jsonb,
--     "ct11" jsonb,
--     "ct12" jsonb,
--     "ct13" jsonb,
--     "ct14" jsonb,
--     "ct15" jsonb,
--     "ct16" jsonb,
--     "hubserialno" int8,
--     "createdat" timestamptz DEFAULT CURRENT_TIMESTAMP
-- );
-- -- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.
-- -- Table Definition
-- CREATE TABLE "public"."hub" (
--     "deviceclass" varchar NOT NULL,
--     "serialno" int8 NOT NULL,
--     "updatedat" timestamptz NOT NULL,
--     "currentversion" int4,
--     "regpassword" varchar NOT NULL,
--     "apppassword" varchar,
--     "uptime" int4,
--     "port" int4 NOT NULL,
--     "ipaddress" varchar,
--     "serverlastheard" int4,
--     "lastauth" timestamptz,
--     "registrationdate" timestamptz,
--     "networkid" int4 NOT NULL,
--     "nodevices" int4,
--     "masterdeviceclass" varchar,
--     "masterdevicerawaddress" int4,
--     "masterdeviceinstance" int4,
--     "keyvaluestore" jsonb,
--     "isblocked" bool NOT NULL DEFAULT false,
--     "cloudipoverrideserverid" int4,
--     "loadcontrolgridimportexport" int4,
--     "loadcontrolgeneration" int4,
--     "loadcontrolgridcurrentshundredthsphase1" int4,
--     "loadcontrolgridcurrentshundredthsphase2" int4,
--     "loadcontrolgridcurrentshundredthsphase3" int4,
--     "loadcontrolflagsnetphases" bool,
--     "loadcontrolflagshubonnetwork" bool,
--     "loadcontrolflagsgenctonnetwork" bool,
--     "loadcontrolflagsgridlimits" bool,
--     "loadcontrolflagsgridvalid" bool,
--     "loadcontroldevicedata1serialno" int8,
--     "loadcontroldevicedata1setload" int4,
--     "loadcontroldevicedata2serialno" int8,
--     "loadcontroldevicedata2setload" int4,
--     "loadcontroldevicedata3serialno" int8,
--     "loadcontroldevicedata3setload" int4,
--     "loadcontroldevicedata4serialno" int8,
--     "loadcontroldevicedata4setload" int4,
--     "loadcontroldevicedata5serialno" int8,
--     "loadcontroldevicedata5setload" int4,
--     "australia" bool NOT NULL DEFAULT false,
--     "radiochannel" int2,
--     "microprocessorti" bool,
--     "createdat" timestamptz DEFAULT CURRENT_TIMESTAMP,
--     "vhub" bool,
--     "hubfirmwareversions" jsonb,
--     CONSTRAINT "FK_5f5e7698f128c95ac2417ad91f1" FOREIGN KEY ("cloudipoverrideserverid") REFERENCES "public"."server"("id"),
--     PRIMARY KEY ("serialno")
-- );
-- -- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.
-- -- Table Definition
-- CREATE TABLE "public"."libbi" (
--     "deviceclass" varchar NOT NULL,
--     "serialno" int8 NOT NULL,
--     "updatedat" timestamptz NOT NULL,
--     "createdat" timestamptz,
--     "currentversion" int4,
--     "deviceinstance" int4,
--     "deviceaddressraw" int4 NOT NULL,
--     "specialversion" varchar,
--     "agggroupno" int4,
--     "deviceconfigtime" int8,
--     "serverconfigtime" int4,
--     "productcode" int2,
--     "voltage" int2,
--     "frequency" int2,
--     "maxpower" int4,
--     "minpower" int4,
--     "isaggregated" bool NOT NULL DEFAULT false,
--     "agglock" int2,
--     "configbootdone" bool NOT NULL DEFAULT false,
--     "configappdone" bool NOT NULL DEFAULT false,
--     "configoffset" int2,
--     "configlength" int2,
--     "chargeenergy" float4,
--     "phase" int2,
--     "state" varchar,
--     "priority" int2,
--     "boostmanual" bool,
--     "boosttimed" bool,
--     "currentboostremaining" int2,
--     "configbootdata" bytea,
--     "configappdata" bytea,
--     "configstate" int2,
--     "configstructure" int2,
--     "configversion" int2,
--     "prioritychanges" int2,
--     "commandseqno" int2 NOT NULL DEFAULT '0' :: smallint,
--     "ct1" jsonb,
--     "ct2" jsonb,
--     "ct3" jsonb,
--     "ct4" jsonb,
--     "ct5" jsonb,
--     "ct6" jsonb,
--     "ct7" jsonb,
--     "ct8" jsonb,
--     "ct9" jsonb,
--     "ct10" jsonb,
--     "ct11" jsonb,
--     "ct12" jsonb,
--     "ct13" jsonb,
--     "ct14" jsonb,
--     "ct15" jsonb,
--     "ct16" jsonb,
--     "libbimode" varchar,
--     "stateofcharge" float4,
--     "maxcapacityinwatthours" int4,
--     "hubserialno" int8,
--     "issolarpresent" bool NOT NULL DEFAULT false
-- );
-- -- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.
-- -- Squences
-- CREATE SEQUENCE IF NOT EXISTS libbi_config_reply_data_id_seq;
-- -- Table Definition
-- CREATE TABLE "public"."libbi_config_reply_data" (
--     "id" int4 NOT NULL DEFAULT nextval('libbi_config_reply_data_id_seq' :: regclass),
--     "signature" int8 NOT NULL,
--     "timezone" varchar,
--     "dateformat" varchar,
--     "dston" bool NOT NULL,
--     "language" varchar,
--     "icons" varchar
-- );
-- -- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.
-- -- Squences
-- CREATE SEQUENCE IF NOT EXISTS migrations_id_seq;
-- -- Table Definition
-- CREATE TABLE "public"."migrations" (
--     "id" int4 NOT NULL DEFAULT nextval('migrations_id_seq' :: regclass),
--     "timestamp" int8 NOT NULL,
--     "name" varchar NOT NULL
-- );
-- -- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.
-- -- Squences
-- CREATE SEQUENCE IF NOT EXISTS server_id_seq;
-- -- Table Definition
-- CREATE TABLE "public"."server" (
--     "id" int4 NOT NULL DEFAULT nextval('server_id_seq' :: regclass),
--     "isactive" bool NOT NULL DEFAULT false,
--     "name" varchar NOT NULL,
--     "shard" varchar,
--     "ip" varchar NOT NULL,
--     "url" varchar NOT NULL,
--     "isdefault" bool NOT NULL DEFAULT false
-- );
-- -- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.
-- DROP TYPE IF EXISTS "public"."update_box_updateboxicontype_enum";
-- CREATE TYPE "public"."update_box_updateboxicontype_enum" AS ENUM (
--     'eddi',
--     'zappi1',
--     'zappi2',
--     'harvi',
--     'libbi',
--     'hub'
-- );
-- -- Table Definition
-- CREATE TABLE "public"."update_box" (
--     "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
--     "updateboxicontype" "public"."update_box_updateboxicontype_enum",
--     "leftcolor" varchar NOT NULL,
--     "rightcolor" varchar NOT NULL,
--     "title" varchar NOT NULL,
--     "description" varchar,
--     "displaydatetime" timestamptz NOT NULL
-- );
-- -- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.
-- -- Squences
-- CREATE SEQUENCE IF NOT EXISTS user_access_id_seq;
-- -- Table Definition
-- CREATE TABLE "public"."user_access" (
--     "id" int4 NOT NULL DEFAULT nextval('user_access_id_seq' :: regclass),
--     "type" varchar NOT NULL,
--     "permissions" jsonb NOT NULL DEFAULT '[]' :: jsonb
-- );
-- -- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.
-- -- Table Definition
-- CREATE TABLE "public"."zappi" (
--     "deviceclass" varchar NOT NULL,
--     "serialno" int8 NOT NULL,
--     "updatedat" timestamptz NOT NULL,
--     "currentversion" int4,
--     "deviceinstance" int4,
--     "deviceaddressraw" int4 NOT NULL,
--     "specialversion" varchar,
--     "agggroupno" int4,
--     "serverconfigtime" int4,
--     "productcode" int2,
--     "voltage" int2,
--     "frequency" int2,
--     "maxpower" int4,
--     "minpower" int4,
--     "isaggregated" bool NOT NULL DEFAULT false,
--     "agglock" int2,
--     "configbootdone" bool NOT NULL DEFAULT false,
--     "configappdone" bool NOT NULL DEFAULT false,
--     "configoffset" int2,
--     "configlength" int2,
--     "phase" int2,
--     "state" varchar,
--     "priority" int2,
--     "boostmanual" bool,
--     "boosttimed" bool,
--     "currentboostremaining" int2,
--     "configbootdata" bytea,
--     "configappdata" bytea,
--     "configstate" int2,
--     "configstructure" int2,
--     "configversion" int2,
--     "prioritychanges" int2,
--     "commandseqno" int2 NOT NULL DEFAULT '0' :: smallint,
--     "voltage2" int2,
--     "voltage3" int2,
--     "zappi2" bool NOT NULL DEFAULT false,
--     "threephase" bool NOT NULL,
--     "pilotstate" varchar,
--     "boostsmart" bool,
--     "zappimode" varchar,
--     "normalboostkwh" int2,
--     "ct1" jsonb,
--     "ct2" jsonb,
--     "ct3" jsonb,
--     "ct4" jsonb,
--     "ct5" jsonb,
--     "ct6" jsonb,
--     "ct7" jsonb,
--     "ct8" jsonb,
--     "ct9" jsonb,
--     "ct10" jsonb,
--     "ct11" jsonb,
--     "ct12" jsonb,
--     "ct13" jsonb,
--     "ct14" jsonb,
--     "ct15" jsonb,
--     "ct16" jsonb,
--     "aggregationdataid" int4,
--     "lockedstatuslockednow" bool,
--     "lockedstatuslockwhenpluggedin" bool,
--     "lockedstatuslockwhenunplugged" bool,
--     "lockedstatuschargewhenlocked" bool,
--     "lockedstatuschargesessionallowed" bool,
--     "dsrdataload" int2,
--     "dsrdataseconds" int2,
--     "dsrdatacsn" int2,
--     "dsrdataack" int2,
--     "dsrdatalce" bool,
--     "dsrdatalca" bool,
--     "dsrdatafue" bool,
--     "dsrdatafde" bool,
--     "dsrdatafua" bool,
--     "dsrdatafda" bool,
--     "dsrdatafun" bool,
--     "dsrdatafdn" bool,
--     "smartboostkwh" int2,
--     "smartboosthour" int2,
--     "smartboostminute" int2,
--     "pwmdatastatecpu" int2,
--     "pwmdatastatercdboard" int2,
--     "pwmdatapulsewidthmodulationinpercentage" float4,
--     "pwmdatarcddcinnanoamps" int4,
--     "pwmdatarcdacinnanoamps" int4,
--     "pwmdatareturnrcdacinnanoamps" int4,
--     "hubserialno" int8,
--     "deviceconfigtime" int8,
--     "chargeenergy" float4,
--     "highpower" bool,
--     "melinkversion" int4,
--     "stubloaderversion" int4,
--     "bootloaderversion" int4,
--     "lockedstatusmicroprocessorti" bool,
--     "createdat" timestamptz DEFAULT CURRENT_TIMESTAMP,
--     "melibversion" int4,
--     "vhub" bool,
--     "ethernetlink" bool,
--     "wifilink" bool
-- );
-- -- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.
-- -- Table Definition
-- CREATE TABLE "public"."zappi_minute" (
--     "serialno" int8 NOT NULL,
--     "timestamp" timestamp NOT NULL,
--     "noseconds" int4 NOT NULL,
--     "exportpower" float4,
--     "importpower" float4,
--     "genpospw" float4,
--     "gennegpw" float4,
--     "frequency" float4,
--     "heatsink" float4,
--     "voltage1" float4,
--     "voltage2" float4,
--     "voltage3" float4,
--     "divloadpower1" float4,
--     "divloadpower2" float4,
--     "divloadpower3" float4,
--     "boostloadpower1" float4,
--     "boostloadpower2" float4,
--     "boostloadpower3" float4,
--     "externalcttype1" int2,
--     "externalcttype2" int2,
--     "externalcttype3" int2,
--     "externalctpospower1" float4,
--     "externalctpospower2" float4,
--     "externalctpospower3" float4,
--     "externalctnegpower1" float4,
--     "externalctnegpower2" float4,
--     "externalctnegpower3" float4,
--     PRIMARY KEY ("serialno", "timestamp")
-- );
-- -- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.
-- -- Squences
-- CREATE SEQUENCE IF NOT EXISTS zappi1_config_reply_data_id_seq;
-- -- Table Definition
-- CREATE TABLE "public"."zappi1_config_reply_data" (
--     "id" int4 NOT NULL DEFAULT nextval('zappi1_config_reply_data_id_seq' :: regclass),
--     "signature" int8 NOT NULL,
--     "compatibilitymodeminpwm" float4 NOT NULL,
--     "devicelimit" float4 NOT NULL,
--     "compatibilitymodepowerfactor" float4 NOT NULL,
--     "exportmargin" int4 NOT NULL,
--     "gridlimit" int4 NOT NULL,
--     "password" int4 NOT NULL,
--     "chargecompletedelay" int4 NOT NULL,
--     "language" varchar,
--     "phaseorphaserotation" varchar,
--     "smartboosthour" int2 NOT NULL,
--     "smartboostminute" int2 NOT NULL,
--     "smartboostenergy" int2 NOT NULL,
--     "esenseinput" varchar,
--     "mingreenlevel" int2 NOT NULL,
--     "startstoptimer" int2 NOT NULL,
--     "ct1type" varchar,
--     "ct1subtype" varchar,
--     "boostingenergy" int2 NOT NULL,
--     "ct2type" varchar,
--     "ct2subtype" varchar,
--     "locktimeout" int2 NOT NULL,
--     "backlightontime" int2 NOT NULL,
--     "contrastlevel" int2 NOT NULL,
--     "gentypeicon" varchar,
--     "lockcode" int4 NOT NULL,
--     "compatibilitymodeactive" bool NOT NULL,
--     "lockevplugged" bool NOT NULL,
--     "lockevunplugged" bool NOT NULL,
--     "lockhidereadings" bool NOT NULL,
--     "buzzeron" bool NOT NULL,
--     "compatibilitymodeinfinitepwm" bool NOT NULL,
--     "monitoringstatus" bool NOT NULL,
--     "dston" bool NOT NULL,
--     "timezone" varchar,
--     "dateformat" varchar,
--     "batterymode" varchar,
--     "triphaseon" bool NOT NULL,
--     "preconditioning" varchar,
--     "defaultmode" varchar,
--     "maxgridlimit" int2 NOT NULL,
--     "plugincharge" int2 NOT NULL,
--     "timefromcloud" bool NOT NULL,
--     "autosettimefromclouddone" bool NOT NULL,
--     "ct1grouplimit" int2 NOT NULL,
--     "ct2grouplimit" int2 NOT NULL,
--     "ct3grouplimit" int2 NOT NULL,
--     "ct1group" int2 NOT NULL,
--     "ct2group" int2 NOT NULL,
--     "ct3group" int2 NOT NULL,
--     "deviceconfigtime" int8 NOT NULL
-- );
-- -- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.
-- -- Squences
-- CREATE SEQUENCE IF NOT EXISTS zappi2_config_reply_data_id_seq;
-- -- Table Definition
-- CREATE TABLE "public"."zappi2_config_reply_data" (
--     "id" int4 NOT NULL DEFAULT nextval('zappi2_config_reply_data_id_seq' :: regclass),
--     "signature" int8 NOT NULL,
--     "compatibilitymodeminpwm" float4 NOT NULL,
--     "devicelimit" float4 NOT NULL,
--     "compatibilitymodepowerfactor" float4 NOT NULL,
--     "exportmargin" int4 NOT NULL,
--     "gridlimit" int4 NOT NULL,
--     "password" int4 NOT NULL,
--     "chargecompletedelay" int4 NOT NULL,
--     "language" varchar,
--     "preconon" bool NOT NULL,
--     "preconenergy" int2 NOT NULL,
--     "smartboosthour" int2 NOT NULL,
--     "smartboostminute" int2 NOT NULL,
--     "smartboostenergy" int2 NOT NULL,
--     "esenseinput" varchar,
--     "mingreenlevel" int2 NOT NULL,
--     "startstoptimer" int2 NOT NULL,
--     "ct1type" varchar,
--     "ct1subtype" varchar,
--     "boostingenergy" int2 NOT NULL,
--     "ct2type" varchar,
--     "ct2subtype" varchar,
--     "locktimeout" int2 NOT NULL,
--     "backlightontime" int2 NOT NULL,
--     "contrastlevel" int2 NOT NULL,
--     "gentypeicon" varchar,
--     "lockcode" int4 NOT NULL,
--     "compatibilitymodeactive" bool NOT NULL,
--     "lockevplugged" bool NOT NULL,
--     "lockevunplugged" bool NOT NULL,
--     "lockhidereadings" bool NOT NULL,
--     "buzzeron" bool NOT NULL,
--     "compatibilitymodeinfinitepwm" bool NOT NULL,
--     "monitoringstatus" bool NOT NULL,
--     "dston" bool NOT NULL,
--     "timezone" varchar,
--     "dateformat" varchar,
--     "batterymode" varchar,
--     "defaultmode" varchar,
--     "earthing" varchar,
--     "gridpowerlimit" int4 NOT NULL,
--     "ct3type" varchar,
--     "ct3subtype" varchar,
--     "relay1pwm" int4 NOT NULL,
--     "relay2pwm" int4 NOT NULL,
--     "mainswitchpwm" int4 NOT NULL,
--     "locksolenoidpwm" int4 NOT NULL,
--     "timefromcloud" bool NOT NULL,
--     "ct1grouplimit" int2 NOT NULL,
--     "ct2grouplimit" int2 NOT NULL,
--     "ct3grouplimit" int2 NOT NULL,
--     "ct4grouplimit" int2 NOT NULL,
--     "ctinternalgroup" int2 NOT NULL,
--     "ct1group" int2 NOT NULL,
--     "ct2group" int2 NOT NULL,
--     "ct3group" int2 NOT NULL,
--     "neutrallimit" int4 NOT NULL,
--     "ct1g100" bool NOT NULL,
--     "ct2g100" bool NOT NULL,
--     "ct3g100" bool NOT NULL,
--     "chargewhenpinlocked" bool NOT NULL,
--     "weldedrelaycheckdelay" int4 NOT NULL,
--     "perelaypwm" int4 NOT NULL,
--     "plugincharge" bool NOT NULL,
--     "chargein3phase" bool NOT NULL,
--     "ledbrightness" int2 NOT NULL,
--     "ledfault" jsonb NOT NULL,
--     "ledgreencharging" jsonb NOT NULL,
--     "ledmixcharging" jsonb NOT NULL,
--     "leddirtycharging" jsonb NOT NULL,
--     "ledchargecomplete" jsonb NOT NULL,
--     "ledstateb" jsonb NOT NULL,
--     "phasereturn" varchar,
--     "serverconfigtime" int4,
--     "esenselimitpwm" int2 NOT NULL,
--     "deviceconfigtime" int8 NOT NULL,
--     "ecopstopdelay" int2 NOT NULL DEFAULT 30,
--     "ctprimary" int2 NOT NULL DEFAULT 0,
--     "randomdelaystart" int2 NOT NULL DEFAULT 10
-- );