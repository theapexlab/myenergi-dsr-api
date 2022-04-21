SET check_function_bodies = false;
CREATE FUNCTION public.libbi_minute_template_part_trig_func() RETURNS trigger
    LANGUAGE plpgsql
    AS $_$
            DECLARE
            v_count                 int;
            v_partition_name        text;
            v_partition_timestamp   timestamptz;
        BEGIN 
        IF TG_OP = 'INSERT' THEN 
            v_partition_timestamp := date_trunc('month', NEW."timestamp");
            IF NEW."timestamp" >= '2022-03-01 00:00:00+01' AND NEW."timestamp" < '2022-04-01 00:00:00+02' THEN 
            INSERT INTO public.libbi_minute_template_p2022_03 VALUES (NEW.*) ; 
            ELSIF NEW."timestamp" >= '2022-02-01 00:00:00+01' AND NEW."timestamp" < '2022-03-01 00:00:00+01' THEN 
                INSERT INTO public.libbi_minute_template_p2022_02 VALUES (NEW.*) ; 
            ELSIF NEW."timestamp" >= '2022-04-01 00:00:00+02' AND NEW."timestamp" < '2022-05-01 00:00:00+02' THEN 
                INSERT INTO public.libbi_minute_template_p2022_04 VALUES (NEW.*) ; 
            ELSIF NEW."timestamp" >= '2022-05-01 00:00:00+02' AND NEW."timestamp" < '2022-06-01 00:00:00+02' THEN 
                INSERT INTO public.libbi_minute_template_p2022_05 VALUES (NEW.*) ; 
            ELSIF NEW."timestamp" >= '2022-06-01 00:00:00+02' AND NEW."timestamp" < '2022-07-01 00:00:00+02' THEN 
                INSERT INTO public.libbi_minute_template_p2022_06 VALUES (NEW.*) ; 
            ELSIF NEW."timestamp" >= '2022-07-01 00:00:00+02' AND NEW."timestamp" < '2022-08-01 00:00:00+02' THEN 
                INSERT INTO public.libbi_minute_template_p2022_07 VALUES (NEW.*) ;
            ELSE
                v_partition_name := partman.check_name_length('libbi_minute_template', to_char(v_partition_timestamp, 'YYYY_MM'), TRUE);
                SELECT count(*) INTO v_count FROM pg_catalog.pg_tables WHERE schemaname = 'public'::name AND tablename = v_partition_name::name;
                IF v_count > 0 THEN 
                    EXECUTE format('INSERT INTO %I.%I VALUES($1.*) ', 'public', v_partition_name) USING NEW;
                ELSE
                    RETURN NEW;
                END IF;
            END IF;
        END IF;
        RETURN NULL;
        END $_$;
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
)
PARTITION BY RANGE ("timestamp");
CREATE TABLE public.eddi_minute_default (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_default DEFAULT;
CREATE TABLE public.eddi_minute_p2020_07 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2020_07 FOR VALUES FROM ('2020-07-01 00:00:00') TO ('2020-08-01 00:00:00');
CREATE TABLE public.eddi_minute_p2020_08 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2020_08 FOR VALUES FROM ('2020-08-01 00:00:00') TO ('2020-09-01 00:00:00');
CREATE TABLE public.eddi_minute_p2020_09 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2020_09 FOR VALUES FROM ('2020-09-01 00:00:00') TO ('2020-10-01 00:00:00');
CREATE TABLE public.eddi_minute_p2020_10 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2020_10 FOR VALUES FROM ('2020-10-01 00:00:00') TO ('2020-11-01 00:00:00');
CREATE TABLE public.eddi_minute_p2020_11 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2020_11 FOR VALUES FROM ('2020-11-01 00:00:00') TO ('2020-12-01 00:00:00');
CREATE TABLE public.eddi_minute_p2020_12 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2020_12 FOR VALUES FROM ('2020-12-01 00:00:00') TO ('2021-01-01 00:00:00');
CREATE TABLE public.eddi_minute_p2021_01 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2021_01 FOR VALUES FROM ('2021-01-01 00:00:00') TO ('2021-02-01 00:00:00');
CREATE TABLE public.eddi_minute_p2021_02 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2021_02 FOR VALUES FROM ('2021-02-01 00:00:00') TO ('2021-03-01 00:00:00');
CREATE TABLE public.eddi_minute_p2021_03 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2021_03 FOR VALUES FROM ('2021-03-01 00:00:00') TO ('2021-04-01 00:00:00');
CREATE TABLE public.eddi_minute_p2021_04 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2021_04 FOR VALUES FROM ('2021-04-01 00:00:00') TO ('2021-05-01 00:00:00');
CREATE TABLE public.eddi_minute_p2021_05 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2021_05 FOR VALUES FROM ('2021-05-01 00:00:00') TO ('2021-06-01 00:00:00');
CREATE TABLE public.eddi_minute_p2021_06 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2021_06 FOR VALUES FROM ('2021-06-01 00:00:00') TO ('2021-07-01 00:00:00');
CREATE TABLE public.eddi_minute_p2021_07 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2021_07 FOR VALUES FROM ('2021-07-01 00:00:00') TO ('2021-08-01 00:00:00');
CREATE TABLE public.eddi_minute_p2021_08 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2021_08 FOR VALUES FROM ('2021-08-01 00:00:00') TO ('2021-09-01 00:00:00');
CREATE TABLE public.eddi_minute_p2021_09 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2021_09 FOR VALUES FROM ('2021-09-01 00:00:00') TO ('2021-10-01 00:00:00');
CREATE TABLE public.eddi_minute_p2021_10 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2021_10 FOR VALUES FROM ('2021-10-01 00:00:00') TO ('2021-11-01 00:00:00');
CREATE TABLE public.eddi_minute_p2021_11 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2021_11 FOR VALUES FROM ('2021-11-01 00:00:00') TO ('2021-12-01 00:00:00');
CREATE TABLE public.eddi_minute_p2021_12 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2021_12 FOR VALUES FROM ('2021-12-01 00:00:00') TO ('2022-01-01 00:00:00');
CREATE TABLE public.eddi_minute_p2022_01 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2022_01 FOR VALUES FROM ('2022-01-01 00:00:00') TO ('2022-02-01 00:00:00');
CREATE TABLE public.eddi_minute_p2022_02 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2022_02 FOR VALUES FROM ('2022-02-01 00:00:00') TO ('2022-03-01 00:00:00');
CREATE TABLE public.eddi_minute_p2022_03 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2022_03 FOR VALUES FROM ('2022-03-01 00:00:00') TO ('2022-04-01 00:00:00');
CREATE TABLE public.eddi_minute_p2022_04 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2022_04 FOR VALUES FROM ('2022-04-01 00:00:00') TO ('2022-05-01 00:00:00');
CREATE TABLE public.eddi_minute_p2022_05 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2022_05 FOR VALUES FROM ('2022-05-01 00:00:00') TO ('2022-06-01 00:00:00');
CREATE TABLE public.eddi_minute_p2022_06 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2022_06 FOR VALUES FROM ('2022-06-01 00:00:00') TO ('2022-07-01 00:00:00');
CREATE TABLE public.eddi_minute_p2022_07 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2022_07 FOR VALUES FROM ('2022-07-01 00:00:00') TO ('2022-08-01 00:00:00');
CREATE TABLE public.eddi_minute_p2022_08 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2022_08 FOR VALUES FROM ('2022-08-01 00:00:00') TO ('2022-09-01 00:00:00');
CREATE TABLE public.eddi_minute_p2022_09 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2022_09 FOR VALUES FROM ('2022-09-01 00:00:00') TO ('2022-10-01 00:00:00');
CREATE TABLE public.eddi_minute_p2022_10 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2022_10 FOR VALUES FROM ('2022-10-01 00:00:00') TO ('2022-11-01 00:00:00');
CREATE TABLE public.eddi_minute_p2022_11 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2022_11 FOR VALUES FROM ('2022-11-01 00:00:00') TO ('2022-12-01 00:00:00');
CREATE TABLE public.eddi_minute_p2022_12 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2022_12 FOR VALUES FROM ('2022-12-01 00:00:00') TO ('2023-01-01 00:00:00');
CREATE TABLE public.eddi_minute_p2023_01 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2023_01 FOR VALUES FROM ('2023-01-01 00:00:00') TO ('2023-02-01 00:00:00');
CREATE TABLE public.eddi_minute_p2023_02 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2023_02 FOR VALUES FROM ('2023-02-01 00:00:00') TO ('2023-03-01 00:00:00');
CREATE TABLE public.eddi_minute_p2023_03 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2023_03 FOR VALUES FROM ('2023-03-01 00:00:00') TO ('2023-04-01 00:00:00');
CREATE TABLE public.eddi_minute_p2023_04 (
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
ALTER TABLE ONLY public.eddi_minute ATTACH PARTITION public.eddi_minute_p2023_04 FOR VALUES FROM ('2023-04-01 00:00:00') TO ('2023-05-01 00:00:00');
CREATE TABLE public.eddi_minute_template (
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
    "timestamp" timestamp without time zone NOT NULL,
    somevalue character varying NOT NULL
);
CREATE TABLE public.libbi_minute (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    externalcttype3 smallint,
    externalctpospower3 real,
    externalctnegpower3 real,
    voltage1 real,
    voltage2 real,
    voltage3 real,
    internalgen real,
    invertortohousepower real,
    housetoinverterpower real,
    batterychargepower real,
    batterydischargepower real,
    esstemp real,
    stateofcharge real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real
)
PARTITION BY RANGE ("timestamp");
CREATE TABLE public.libbi_minute_default (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    externalcttype3 smallint,
    externalctpospower3 real,
    externalctnegpower3 real,
    voltage1 real,
    voltage2 real,
    voltage3 real,
    internalgen real,
    invertortohousepower real,
    housetoinverterpower real,
    batterychargepower real,
    batterydischargepower real,
    esstemp real,
    stateofcharge real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real
);
ALTER TABLE ONLY public.libbi_minute ATTACH PARTITION public.libbi_minute_default DEFAULT;
CREATE TABLE public.libbi_minute_p2021_03 (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    externalcttype3 smallint,
    externalctpospower3 real,
    externalctnegpower3 real,
    voltage1 real,
    voltage2 real,
    voltage3 real,
    internalgen real,
    invertortohousepower real,
    housetoinverterpower real,
    batterychargepower real,
    batterydischargepower real,
    esstemp real,
    stateofcharge real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real
);
ALTER TABLE ONLY public.libbi_minute ATTACH PARTITION public.libbi_minute_p2021_03 FOR VALUES FROM ('2021-03-01 00:00:00') TO ('2021-04-01 00:00:00');
CREATE TABLE public.libbi_minute_p2021_04 (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    externalcttype3 smallint,
    externalctpospower3 real,
    externalctnegpower3 real,
    voltage1 real,
    voltage2 real,
    voltage3 real,
    internalgen real,
    invertortohousepower real,
    housetoinverterpower real,
    batterychargepower real,
    batterydischargepower real,
    esstemp real,
    stateofcharge real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real
);
ALTER TABLE ONLY public.libbi_minute ATTACH PARTITION public.libbi_minute_p2021_04 FOR VALUES FROM ('2021-04-01 00:00:00') TO ('2021-05-01 00:00:00');
CREATE TABLE public.libbi_minute_p2021_05 (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    externalcttype3 smallint,
    externalctpospower3 real,
    externalctnegpower3 real,
    voltage1 real,
    voltage2 real,
    voltage3 real,
    internalgen real,
    invertortohousepower real,
    housetoinverterpower real,
    batterychargepower real,
    batterydischargepower real,
    esstemp real,
    stateofcharge real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real
);
ALTER TABLE ONLY public.libbi_minute ATTACH PARTITION public.libbi_minute_p2021_05 FOR VALUES FROM ('2021-05-01 00:00:00') TO ('2021-06-01 00:00:00');
CREATE TABLE public.libbi_minute_p2021_06 (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    externalcttype3 smallint,
    externalctpospower3 real,
    externalctnegpower3 real,
    voltage1 real,
    voltage2 real,
    voltage3 real,
    internalgen real,
    invertortohousepower real,
    housetoinverterpower real,
    batterychargepower real,
    batterydischargepower real,
    esstemp real,
    stateofcharge real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real
);
ALTER TABLE ONLY public.libbi_minute ATTACH PARTITION public.libbi_minute_p2021_06 FOR VALUES FROM ('2021-06-01 00:00:00') TO ('2021-07-01 00:00:00');
CREATE TABLE public.libbi_minute_p2021_07 (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    externalcttype3 smallint,
    externalctpospower3 real,
    externalctnegpower3 real,
    voltage1 real,
    voltage2 real,
    voltage3 real,
    internalgen real,
    invertortohousepower real,
    housetoinverterpower real,
    batterychargepower real,
    batterydischargepower real,
    esstemp real,
    stateofcharge real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real
);
ALTER TABLE ONLY public.libbi_minute ATTACH PARTITION public.libbi_minute_p2021_07 FOR VALUES FROM ('2021-07-01 00:00:00') TO ('2021-08-01 00:00:00');
CREATE TABLE public.libbi_minute_p2021_08 (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    externalcttype3 smallint,
    externalctpospower3 real,
    externalctnegpower3 real,
    voltage1 real,
    voltage2 real,
    voltage3 real,
    internalgen real,
    invertortohousepower real,
    housetoinverterpower real,
    batterychargepower real,
    batterydischargepower real,
    esstemp real,
    stateofcharge real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real
);
ALTER TABLE ONLY public.libbi_minute ATTACH PARTITION public.libbi_minute_p2021_08 FOR VALUES FROM ('2021-08-01 00:00:00') TO ('2021-09-01 00:00:00');
CREATE TABLE public.libbi_minute_p2021_09 (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    externalcttype3 smallint,
    externalctpospower3 real,
    externalctnegpower3 real,
    voltage1 real,
    voltage2 real,
    voltage3 real,
    internalgen real,
    invertortohousepower real,
    housetoinverterpower real,
    batterychargepower real,
    batterydischargepower real,
    esstemp real,
    stateofcharge real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real
);
ALTER TABLE ONLY public.libbi_minute ATTACH PARTITION public.libbi_minute_p2021_09 FOR VALUES FROM ('2021-09-01 00:00:00') TO ('2021-10-01 00:00:00');
CREATE TABLE public.libbi_minute_p2021_10 (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    externalcttype3 smallint,
    externalctpospower3 real,
    externalctnegpower3 real,
    voltage1 real,
    voltage2 real,
    voltage3 real,
    internalgen real,
    invertortohousepower real,
    housetoinverterpower real,
    batterychargepower real,
    batterydischargepower real,
    esstemp real,
    stateofcharge real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real
);
ALTER TABLE ONLY public.libbi_minute ATTACH PARTITION public.libbi_minute_p2021_10 FOR VALUES FROM ('2021-10-01 00:00:00') TO ('2021-11-01 00:00:00');
CREATE TABLE public.libbi_minute_p2021_11 (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    externalcttype3 smallint,
    externalctpospower3 real,
    externalctnegpower3 real,
    voltage1 real,
    voltage2 real,
    voltage3 real,
    internalgen real,
    invertortohousepower real,
    housetoinverterpower real,
    batterychargepower real,
    batterydischargepower real,
    esstemp real,
    stateofcharge real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real
);
ALTER TABLE ONLY public.libbi_minute ATTACH PARTITION public.libbi_minute_p2021_11 FOR VALUES FROM ('2021-11-01 00:00:00') TO ('2021-12-01 00:00:00');
CREATE TABLE public.libbi_minute_p2021_12 (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    externalcttype3 smallint,
    externalctpospower3 real,
    externalctnegpower3 real,
    voltage1 real,
    voltage2 real,
    voltage3 real,
    internalgen real,
    invertortohousepower real,
    housetoinverterpower real,
    batterychargepower real,
    batterydischargepower real,
    esstemp real,
    stateofcharge real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real
);
ALTER TABLE ONLY public.libbi_minute ATTACH PARTITION public.libbi_minute_p2021_12 FOR VALUES FROM ('2021-12-01 00:00:00') TO ('2022-01-01 00:00:00');
CREATE TABLE public.libbi_minute_p2022_01 (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    externalcttype3 smallint,
    externalctpospower3 real,
    externalctnegpower3 real,
    voltage1 real,
    voltage2 real,
    voltage3 real,
    internalgen real,
    invertortohousepower real,
    housetoinverterpower real,
    batterychargepower real,
    batterydischargepower real,
    esstemp real,
    stateofcharge real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real
);
ALTER TABLE ONLY public.libbi_minute ATTACH PARTITION public.libbi_minute_p2022_01 FOR VALUES FROM ('2022-01-01 00:00:00') TO ('2022-02-01 00:00:00');
CREATE TABLE public.libbi_minute_p2022_02 (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    externalcttype3 smallint,
    externalctpospower3 real,
    externalctnegpower3 real,
    voltage1 real,
    voltage2 real,
    voltage3 real,
    internalgen real,
    invertortohousepower real,
    housetoinverterpower real,
    batterychargepower real,
    batterydischargepower real,
    esstemp real,
    stateofcharge real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real
);
ALTER TABLE ONLY public.libbi_minute ATTACH PARTITION public.libbi_minute_p2022_02 FOR VALUES FROM ('2022-02-01 00:00:00') TO ('2022-03-01 00:00:00');
CREATE TABLE public.libbi_minute_p2022_03 (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    externalcttype3 smallint,
    externalctpospower3 real,
    externalctnegpower3 real,
    voltage1 real,
    voltage2 real,
    voltage3 real,
    internalgen real,
    invertortohousepower real,
    housetoinverterpower real,
    batterychargepower real,
    batterydischargepower real,
    esstemp real,
    stateofcharge real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real
);
ALTER TABLE ONLY public.libbi_minute ATTACH PARTITION public.libbi_minute_p2022_03 FOR VALUES FROM ('2022-03-01 00:00:00') TO ('2022-04-01 00:00:00');
CREATE TABLE public.libbi_minute_p2022_04 (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    externalcttype3 smallint,
    externalctpospower3 real,
    externalctnegpower3 real,
    voltage1 real,
    voltage2 real,
    voltage3 real,
    internalgen real,
    invertortohousepower real,
    housetoinverterpower real,
    batterychargepower real,
    batterydischargepower real,
    esstemp real,
    stateofcharge real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real
);
ALTER TABLE ONLY public.libbi_minute ATTACH PARTITION public.libbi_minute_p2022_04 FOR VALUES FROM ('2022-04-01 00:00:00') TO ('2022-05-01 00:00:00');
CREATE TABLE public.libbi_minute_p2022_05 (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    externalcttype3 smallint,
    externalctpospower3 real,
    externalctnegpower3 real,
    voltage1 real,
    voltage2 real,
    voltage3 real,
    internalgen real,
    invertortohousepower real,
    housetoinverterpower real,
    batterychargepower real,
    batterydischargepower real,
    esstemp real,
    stateofcharge real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real
);
ALTER TABLE ONLY public.libbi_minute ATTACH PARTITION public.libbi_minute_p2022_05 FOR VALUES FROM ('2022-05-01 00:00:00') TO ('2022-06-01 00:00:00');
CREATE TABLE public.libbi_minute_p2022_06 (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    externalcttype3 smallint,
    externalctpospower3 real,
    externalctnegpower3 real,
    voltage1 real,
    voltage2 real,
    voltage3 real,
    internalgen real,
    invertortohousepower real,
    housetoinverterpower real,
    batterychargepower real,
    batterydischargepower real,
    esstemp real,
    stateofcharge real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real
);
ALTER TABLE ONLY public.libbi_minute ATTACH PARTITION public.libbi_minute_p2022_06 FOR VALUES FROM ('2022-06-01 00:00:00') TO ('2022-07-01 00:00:00');
CREATE TABLE public.libbi_minute_p2022_07 (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    externalcttype3 smallint,
    externalctpospower3 real,
    externalctnegpower3 real,
    voltage1 real,
    voltage2 real,
    voltage3 real,
    internalgen real,
    invertortohousepower real,
    housetoinverterpower real,
    batterychargepower real,
    batterydischargepower real,
    esstemp real,
    stateofcharge real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real
);
ALTER TABLE ONLY public.libbi_minute ATTACH PARTITION public.libbi_minute_p2022_07 FOR VALUES FROM ('2022-07-01 00:00:00') TO ('2022-08-01 00:00:00');
CREATE TABLE public.libbi_minute_p2022_08 (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    externalcttype3 smallint,
    externalctpospower3 real,
    externalctnegpower3 real,
    voltage1 real,
    voltage2 real,
    voltage3 real,
    internalgen real,
    invertortohousepower real,
    housetoinverterpower real,
    batterychargepower real,
    batterydischargepower real,
    esstemp real,
    stateofcharge real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real
);
ALTER TABLE ONLY public.libbi_minute ATTACH PARTITION public.libbi_minute_p2022_08 FOR VALUES FROM ('2022-08-01 00:00:00') TO ('2022-09-01 00:00:00');
CREATE TABLE public.libbi_minute_p2022_09 (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    externalcttype3 smallint,
    externalctpospower3 real,
    externalctnegpower3 real,
    voltage1 real,
    voltage2 real,
    voltage3 real,
    internalgen real,
    invertortohousepower real,
    housetoinverterpower real,
    batterychargepower real,
    batterydischargepower real,
    esstemp real,
    stateofcharge real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real
);
ALTER TABLE ONLY public.libbi_minute ATTACH PARTITION public.libbi_minute_p2022_09 FOR VALUES FROM ('2022-09-01 00:00:00') TO ('2022-10-01 00:00:00');
CREATE TABLE public.libbi_minute_p2022_10 (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    externalcttype3 smallint,
    externalctpospower3 real,
    externalctnegpower3 real,
    voltage1 real,
    voltage2 real,
    voltage3 real,
    internalgen real,
    invertortohousepower real,
    housetoinverterpower real,
    batterychargepower real,
    batterydischargepower real,
    esstemp real,
    stateofcharge real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real
);
ALTER TABLE ONLY public.libbi_minute ATTACH PARTITION public.libbi_minute_p2022_10 FOR VALUES FROM ('2022-10-01 00:00:00') TO ('2022-11-01 00:00:00');
CREATE TABLE public.libbi_minute_p2022_11 (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    externalcttype3 smallint,
    externalctpospower3 real,
    externalctnegpower3 real,
    voltage1 real,
    voltage2 real,
    voltage3 real,
    internalgen real,
    invertortohousepower real,
    housetoinverterpower real,
    batterychargepower real,
    batterydischargepower real,
    esstemp real,
    stateofcharge real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real
);
ALTER TABLE ONLY public.libbi_minute ATTACH PARTITION public.libbi_minute_p2022_11 FOR VALUES FROM ('2022-11-01 00:00:00') TO ('2022-12-01 00:00:00');
CREATE TABLE public.libbi_minute_p2022_12 (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    externalcttype3 smallint,
    externalctpospower3 real,
    externalctnegpower3 real,
    voltage1 real,
    voltage2 real,
    voltage3 real,
    internalgen real,
    invertortohousepower real,
    housetoinverterpower real,
    batterychargepower real,
    batterydischargepower real,
    esstemp real,
    stateofcharge real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real
);
ALTER TABLE ONLY public.libbi_minute ATTACH PARTITION public.libbi_minute_p2022_12 FOR VALUES FROM ('2022-12-01 00:00:00') TO ('2023-01-01 00:00:00');
CREATE TABLE public.libbi_minute_p2023_01 (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    externalcttype3 smallint,
    externalctpospower3 real,
    externalctnegpower3 real,
    voltage1 real,
    voltage2 real,
    voltage3 real,
    internalgen real,
    invertortohousepower real,
    housetoinverterpower real,
    batterychargepower real,
    batterydischargepower real,
    esstemp real,
    stateofcharge real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real
);
ALTER TABLE ONLY public.libbi_minute ATTACH PARTITION public.libbi_minute_p2023_01 FOR VALUES FROM ('2023-01-01 00:00:00') TO ('2023-02-01 00:00:00');
CREATE TABLE public.libbi_minute_p2023_02 (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    externalcttype3 smallint,
    externalctpospower3 real,
    externalctnegpower3 real,
    voltage1 real,
    voltage2 real,
    voltage3 real,
    internalgen real,
    invertortohousepower real,
    housetoinverterpower real,
    batterychargepower real,
    batterydischargepower real,
    esstemp real,
    stateofcharge real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real
);
ALTER TABLE ONLY public.libbi_minute ATTACH PARTITION public.libbi_minute_p2023_02 FOR VALUES FROM ('2023-02-01 00:00:00') TO ('2023-03-01 00:00:00');
CREATE TABLE public.libbi_minute_p2023_03 (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    externalcttype3 smallint,
    externalctpospower3 real,
    externalctnegpower3 real,
    voltage1 real,
    voltage2 real,
    voltage3 real,
    internalgen real,
    invertortohousepower real,
    housetoinverterpower real,
    batterychargepower real,
    batterydischargepower real,
    esstemp real,
    stateofcharge real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real
);
ALTER TABLE ONLY public.libbi_minute ATTACH PARTITION public.libbi_minute_p2023_03 FOR VALUES FROM ('2023-03-01 00:00:00') TO ('2023-04-01 00:00:00');
CREATE TABLE public.libbi_minute_template (
    serialno bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    noseconds integer NOT NULL,
    exportpower real,
    importpower real,
    genpospw real,
    gennegpw real,
    frequency real,
    externalcttype3 smallint,
    externalctpospower3 real,
    externalctnegpower3 real,
    voltage1 real,
    voltage2 real,
    voltage3 real,
    internalgen real,
    invertortohousepower real,
    housetoinverterpower real,
    batterychargepower real,
    batterydischargepower real,
    esstemp real,
    stateofcharge real,
    externalcttype1 smallint,
    externalcttype2 smallint,
    externalctpospower1 real,
    externalctpospower2 real,
    externalctnegpower1 real,
    externalctnegpower2 real
);
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
)
PARTITION BY RANGE ("timestamp");
CREATE TABLE public.zappi_minute_default (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_default DEFAULT;
CREATE TABLE public.zappi_minute_p2020_07 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2020_07 FOR VALUES FROM ('2020-07-01 00:00:00') TO ('2020-08-01 00:00:00');
CREATE TABLE public.zappi_minute_p2020_08 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2020_08 FOR VALUES FROM ('2020-08-01 00:00:00') TO ('2020-09-01 00:00:00');
CREATE TABLE public.zappi_minute_p2020_09 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2020_09 FOR VALUES FROM ('2020-09-01 00:00:00') TO ('2020-10-01 00:00:00');
CREATE TABLE public.zappi_minute_p2020_10 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2020_10 FOR VALUES FROM ('2020-10-01 00:00:00') TO ('2020-11-01 00:00:00');
CREATE TABLE public.zappi_minute_p2020_11 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2020_11 FOR VALUES FROM ('2020-11-01 00:00:00') TO ('2020-12-01 00:00:00');
CREATE TABLE public.zappi_minute_p2020_12 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2020_12 FOR VALUES FROM ('2020-12-01 00:00:00') TO ('2021-01-01 00:00:00');
CREATE TABLE public.zappi_minute_p2021_01 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2021_01 FOR VALUES FROM ('2021-01-01 00:00:00') TO ('2021-02-01 00:00:00');
CREATE TABLE public.zappi_minute_p2021_02 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2021_02 FOR VALUES FROM ('2021-02-01 00:00:00') TO ('2021-03-01 00:00:00');
CREATE TABLE public.zappi_minute_p2021_03 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2021_03 FOR VALUES FROM ('2021-03-01 00:00:00') TO ('2021-04-01 00:00:00');
CREATE TABLE public.zappi_minute_p2021_04 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2021_04 FOR VALUES FROM ('2021-04-01 00:00:00') TO ('2021-05-01 00:00:00');
CREATE TABLE public.zappi_minute_p2021_05 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2021_05 FOR VALUES FROM ('2021-05-01 00:00:00') TO ('2021-06-01 00:00:00');
CREATE TABLE public.zappi_minute_p2021_06 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2021_06 FOR VALUES FROM ('2021-06-01 00:00:00') TO ('2021-07-01 00:00:00');
CREATE TABLE public.zappi_minute_p2021_07 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2021_07 FOR VALUES FROM ('2021-07-01 00:00:00') TO ('2021-08-01 00:00:00');
CREATE TABLE public.zappi_minute_p2021_08 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2021_08 FOR VALUES FROM ('2021-08-01 00:00:00') TO ('2021-09-01 00:00:00');
CREATE TABLE public.zappi_minute_p2021_09 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2021_09 FOR VALUES FROM ('2021-09-01 00:00:00') TO ('2021-10-01 00:00:00');
CREATE TABLE public.zappi_minute_p2021_10 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2021_10 FOR VALUES FROM ('2021-10-01 00:00:00') TO ('2021-11-01 00:00:00');
CREATE TABLE public.zappi_minute_p2021_11 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2021_11 FOR VALUES FROM ('2021-11-01 00:00:00') TO ('2021-12-01 00:00:00');
CREATE TABLE public.zappi_minute_p2021_12 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2021_12 FOR VALUES FROM ('2021-12-01 00:00:00') TO ('2022-01-01 00:00:00');
CREATE TABLE public.zappi_minute_p2022_01 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2022_01 FOR VALUES FROM ('2022-01-01 00:00:00') TO ('2022-02-01 00:00:00');
CREATE TABLE public.zappi_minute_p2022_02 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2022_02 FOR VALUES FROM ('2022-02-01 00:00:00') TO ('2022-03-01 00:00:00');
CREATE TABLE public.zappi_minute_p2022_03 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2022_03 FOR VALUES FROM ('2022-03-01 00:00:00') TO ('2022-04-01 00:00:00');
CREATE TABLE public.zappi_minute_p2022_04 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2022_04 FOR VALUES FROM ('2022-04-01 00:00:00') TO ('2022-05-01 00:00:00');
CREATE TABLE public.zappi_minute_p2022_05 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2022_05 FOR VALUES FROM ('2022-05-01 00:00:00') TO ('2022-06-01 00:00:00');
CREATE TABLE public.zappi_minute_p2022_06 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2022_06 FOR VALUES FROM ('2022-06-01 00:00:00') TO ('2022-07-01 00:00:00');
CREATE TABLE public.zappi_minute_p2022_07 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2022_07 FOR VALUES FROM ('2022-07-01 00:00:00') TO ('2022-08-01 00:00:00');
CREATE TABLE public.zappi_minute_p2022_08 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2022_08 FOR VALUES FROM ('2022-08-01 00:00:00') TO ('2022-09-01 00:00:00');
CREATE TABLE public.zappi_minute_p2022_09 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2022_09 FOR VALUES FROM ('2022-09-01 00:00:00') TO ('2022-10-01 00:00:00');
CREATE TABLE public.zappi_minute_p2022_10 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2022_10 FOR VALUES FROM ('2022-10-01 00:00:00') TO ('2022-11-01 00:00:00');
CREATE TABLE public.zappi_minute_p2022_11 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2022_11 FOR VALUES FROM ('2022-11-01 00:00:00') TO ('2022-12-01 00:00:00');
CREATE TABLE public.zappi_minute_p2022_12 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2022_12 FOR VALUES FROM ('2022-12-01 00:00:00') TO ('2023-01-01 00:00:00');
CREATE TABLE public.zappi_minute_p2023_01 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2023_01 FOR VALUES FROM ('2023-01-01 00:00:00') TO ('2023-02-01 00:00:00');
CREATE TABLE public.zappi_minute_p2023_02 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2023_02 FOR VALUES FROM ('2023-02-01 00:00:00') TO ('2023-03-01 00:00:00');
CREATE TABLE public.zappi_minute_p2023_03 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2023_03 FOR VALUES FROM ('2023-03-01 00:00:00') TO ('2023-04-01 00:00:00');
CREATE TABLE public.zappi_minute_p2023_04 (
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
ALTER TABLE ONLY public.zappi_minute ATTACH PARTITION public.zappi_minute_p2023_04 FOR VALUES FROM ('2023-04-01 00:00:00') TO ('2023-05-01 00:00:00');
CREATE TABLE public.zappi_minute_template (
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
ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);
ALTER TABLE ONLY public.eddi_minute
    ADD CONSTRAINT "PK_4c94f05e4de575488f4a0c2905d" PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute
    ADD CONSTRAINT "PK_5f4400bed8cbe77429781c5f9b3" PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.event
    ADD CONSTRAINT "PK_688c15bbc65812f00551be1e22b" PRIMARY KEY (serialno);
ALTER TABLE ONLY public.libbi_minute
    ADD CONSTRAINT "PK_6e09e5d608e7ae5508be9875bea" PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY (id);
ALTER TABLE ONLY public.eddi_minute_template
    ADD CONSTRAINT "PK_EDDI" PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.libbi_minute_template
    ADD CONSTRAINT "PK_LIBBI" PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_template
    ADD CONSTRAINT "PK_ZAPPI" PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_default
    ADD CONSTRAINT eddi_minute_default_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2020_07
    ADD CONSTRAINT eddi_minute_p2020_07_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2020_08
    ADD CONSTRAINT eddi_minute_p2020_08_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2020_09
    ADD CONSTRAINT eddi_minute_p2020_09_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2020_10
    ADD CONSTRAINT eddi_minute_p2020_10_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2020_11
    ADD CONSTRAINT eddi_minute_p2020_11_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2020_12
    ADD CONSTRAINT eddi_minute_p2020_12_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2021_01
    ADD CONSTRAINT eddi_minute_p2021_01_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2021_02
    ADD CONSTRAINT eddi_minute_p2021_02_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2021_03
    ADD CONSTRAINT eddi_minute_p2021_03_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2021_04
    ADD CONSTRAINT eddi_minute_p2021_04_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2021_05
    ADD CONSTRAINT eddi_minute_p2021_05_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2021_06
    ADD CONSTRAINT eddi_minute_p2021_06_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2021_07
    ADD CONSTRAINT eddi_minute_p2021_07_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2021_08
    ADD CONSTRAINT eddi_minute_p2021_08_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2021_09
    ADD CONSTRAINT eddi_minute_p2021_09_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2021_10
    ADD CONSTRAINT eddi_minute_p2021_10_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2021_11
    ADD CONSTRAINT eddi_minute_p2021_11_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2021_12
    ADD CONSTRAINT eddi_minute_p2021_12_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2022_01
    ADD CONSTRAINT eddi_minute_p2022_01_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2022_02
    ADD CONSTRAINT eddi_minute_p2022_02_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2022_03
    ADD CONSTRAINT eddi_minute_p2022_03_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2022_04
    ADD CONSTRAINT eddi_minute_p2022_04_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2022_05
    ADD CONSTRAINT eddi_minute_p2022_05_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2022_06
    ADD CONSTRAINT eddi_minute_p2022_06_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2022_07
    ADD CONSTRAINT eddi_minute_p2022_07_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2022_08
    ADD CONSTRAINT eddi_minute_p2022_08_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2022_09
    ADD CONSTRAINT eddi_minute_p2022_09_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2022_10
    ADD CONSTRAINT eddi_minute_p2022_10_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2022_11
    ADD CONSTRAINT eddi_minute_p2022_11_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2022_12
    ADD CONSTRAINT eddi_minute_p2022_12_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2023_01
    ADD CONSTRAINT eddi_minute_p2023_01_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2023_02
    ADD CONSTRAINT eddi_minute_p2023_02_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2023_03
    ADD CONSTRAINT eddi_minute_p2023_03_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.eddi_minute_p2023_04
    ADD CONSTRAINT eddi_minute_p2023_04_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.libbi_minute_default
    ADD CONSTRAINT libbi_minute_default_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.libbi_minute_p2021_03
    ADD CONSTRAINT libbi_minute_p2021_03_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.libbi_minute_p2021_04
    ADD CONSTRAINT libbi_minute_p2021_04_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.libbi_minute_p2021_05
    ADD CONSTRAINT libbi_minute_p2021_05_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.libbi_minute_p2021_06
    ADD CONSTRAINT libbi_minute_p2021_06_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.libbi_minute_p2021_07
    ADD CONSTRAINT libbi_minute_p2021_07_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.libbi_minute_p2021_08
    ADD CONSTRAINT libbi_minute_p2021_08_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.libbi_minute_p2021_09
    ADD CONSTRAINT libbi_minute_p2021_09_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.libbi_minute_p2021_10
    ADD CONSTRAINT libbi_minute_p2021_10_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.libbi_minute_p2021_11
    ADD CONSTRAINT libbi_minute_p2021_11_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.libbi_minute_p2021_12
    ADD CONSTRAINT libbi_minute_p2021_12_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.libbi_minute_p2022_01
    ADD CONSTRAINT libbi_minute_p2022_01_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.libbi_minute_p2022_02
    ADD CONSTRAINT libbi_minute_p2022_02_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.libbi_minute_p2022_03
    ADD CONSTRAINT libbi_minute_p2022_03_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.libbi_minute_p2022_04
    ADD CONSTRAINT libbi_minute_p2022_04_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.libbi_minute_p2022_05
    ADD CONSTRAINT libbi_minute_p2022_05_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.libbi_minute_p2022_06
    ADD CONSTRAINT libbi_minute_p2022_06_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.libbi_minute_p2022_07
    ADD CONSTRAINT libbi_minute_p2022_07_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.libbi_minute_p2022_08
    ADD CONSTRAINT libbi_minute_p2022_08_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.libbi_minute_p2022_09
    ADD CONSTRAINT libbi_minute_p2022_09_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.libbi_minute_p2022_10
    ADD CONSTRAINT libbi_minute_p2022_10_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.libbi_minute_p2022_11
    ADD CONSTRAINT libbi_minute_p2022_11_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.libbi_minute_p2022_12
    ADD CONSTRAINT libbi_minute_p2022_12_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.libbi_minute_p2023_01
    ADD CONSTRAINT libbi_minute_p2023_01_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.libbi_minute_p2023_02
    ADD CONSTRAINT libbi_minute_p2023_02_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.libbi_minute_p2023_03
    ADD CONSTRAINT libbi_minute_p2023_03_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_default
    ADD CONSTRAINT zappi_minute_default_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2020_07
    ADD CONSTRAINT zappi_minute_p2020_07_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2020_08
    ADD CONSTRAINT zappi_minute_p2020_08_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2020_09
    ADD CONSTRAINT zappi_minute_p2020_09_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2020_10
    ADD CONSTRAINT zappi_minute_p2020_10_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2020_11
    ADD CONSTRAINT zappi_minute_p2020_11_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2020_12
    ADD CONSTRAINT zappi_minute_p2020_12_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2021_01
    ADD CONSTRAINT zappi_minute_p2021_01_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2021_02
    ADD CONSTRAINT zappi_minute_p2021_02_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2021_03
    ADD CONSTRAINT zappi_minute_p2021_03_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2021_04
    ADD CONSTRAINT zappi_minute_p2021_04_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2021_05
    ADD CONSTRAINT zappi_minute_p2021_05_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2021_06
    ADD CONSTRAINT zappi_minute_p2021_06_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2021_07
    ADD CONSTRAINT zappi_minute_p2021_07_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2021_08
    ADD CONSTRAINT zappi_minute_p2021_08_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2021_09
    ADD CONSTRAINT zappi_minute_p2021_09_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2021_10
    ADD CONSTRAINT zappi_minute_p2021_10_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2021_11
    ADD CONSTRAINT zappi_minute_p2021_11_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2021_12
    ADD CONSTRAINT zappi_minute_p2021_12_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2022_01
    ADD CONSTRAINT zappi_minute_p2022_01_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2022_02
    ADD CONSTRAINT zappi_minute_p2022_02_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2022_03
    ADD CONSTRAINT zappi_minute_p2022_03_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2022_04
    ADD CONSTRAINT zappi_minute_p2022_04_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2022_05
    ADD CONSTRAINT zappi_minute_p2022_05_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2022_06
    ADD CONSTRAINT zappi_minute_p2022_06_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2022_07
    ADD CONSTRAINT zappi_minute_p2022_07_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2022_08
    ADD CONSTRAINT zappi_minute_p2022_08_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2022_09
    ADD CONSTRAINT zappi_minute_p2022_09_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2022_10
    ADD CONSTRAINT zappi_minute_p2022_10_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2022_11
    ADD CONSTRAINT zappi_minute_p2022_11_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2022_12
    ADD CONSTRAINT zappi_minute_p2022_12_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2023_01
    ADD CONSTRAINT zappi_minute_p2023_01_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2023_02
    ADD CONSTRAINT zappi_minute_p2023_02_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2023_03
    ADD CONSTRAINT zappi_minute_p2023_03_pkey PRIMARY KEY (serialno, "timestamp");
ALTER TABLE ONLY public.zappi_minute_p2023_04
    ADD CONSTRAINT zappi_minute_p2023_04_pkey PRIMARY KEY (serialno, "timestamp");
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_default_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2020_07_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2020_08_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2020_09_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2020_10_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2020_11_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2020_12_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2021_01_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2021_02_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2021_03_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2021_04_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2021_05_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2021_06_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2021_07_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2021_08_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2021_09_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2021_10_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2021_11_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2021_12_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2022_01_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2022_02_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2022_03_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2022_04_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2022_05_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2022_06_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2022_07_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2022_08_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2022_09_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2022_10_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2022_11_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2022_12_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2023_01_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2023_02_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2023_03_pkey;
ALTER INDEX public."PK_4c94f05e4de575488f4a0c2905d" ATTACH PARTITION public.eddi_minute_p2023_04_pkey;
ALTER INDEX public."PK_6e09e5d608e7ae5508be9875bea" ATTACH PARTITION public.libbi_minute_default_pkey;
ALTER INDEX public."PK_6e09e5d608e7ae5508be9875bea" ATTACH PARTITION public.libbi_minute_p2021_03_pkey;
ALTER INDEX public."PK_6e09e5d608e7ae5508be9875bea" ATTACH PARTITION public.libbi_minute_p2021_04_pkey;
ALTER INDEX public."PK_6e09e5d608e7ae5508be9875bea" ATTACH PARTITION public.libbi_minute_p2021_05_pkey;
ALTER INDEX public."PK_6e09e5d608e7ae5508be9875bea" ATTACH PARTITION public.libbi_minute_p2021_06_pkey;
ALTER INDEX public."PK_6e09e5d608e7ae5508be9875bea" ATTACH PARTITION public.libbi_minute_p2021_07_pkey;
ALTER INDEX public."PK_6e09e5d608e7ae5508be9875bea" ATTACH PARTITION public.libbi_minute_p2021_08_pkey;
ALTER INDEX public."PK_6e09e5d608e7ae5508be9875bea" ATTACH PARTITION public.libbi_minute_p2021_09_pkey;
ALTER INDEX public."PK_6e09e5d608e7ae5508be9875bea" ATTACH PARTITION public.libbi_minute_p2021_10_pkey;
ALTER INDEX public."PK_6e09e5d608e7ae5508be9875bea" ATTACH PARTITION public.libbi_minute_p2021_11_pkey;
ALTER INDEX public."PK_6e09e5d608e7ae5508be9875bea" ATTACH PARTITION public.libbi_minute_p2021_12_pkey;
ALTER INDEX public."PK_6e09e5d608e7ae5508be9875bea" ATTACH PARTITION public.libbi_minute_p2022_01_pkey;
ALTER INDEX public."PK_6e09e5d608e7ae5508be9875bea" ATTACH PARTITION public.libbi_minute_p2022_02_pkey;
ALTER INDEX public."PK_6e09e5d608e7ae5508be9875bea" ATTACH PARTITION public.libbi_minute_p2022_03_pkey;
ALTER INDEX public."PK_6e09e5d608e7ae5508be9875bea" ATTACH PARTITION public.libbi_minute_p2022_04_pkey;
ALTER INDEX public."PK_6e09e5d608e7ae5508be9875bea" ATTACH PARTITION public.libbi_minute_p2022_05_pkey;
ALTER INDEX public."PK_6e09e5d608e7ae5508be9875bea" ATTACH PARTITION public.libbi_minute_p2022_06_pkey;
ALTER INDEX public."PK_6e09e5d608e7ae5508be9875bea" ATTACH PARTITION public.libbi_minute_p2022_07_pkey;
ALTER INDEX public."PK_6e09e5d608e7ae5508be9875bea" ATTACH PARTITION public.libbi_minute_p2022_08_pkey;
ALTER INDEX public."PK_6e09e5d608e7ae5508be9875bea" ATTACH PARTITION public.libbi_minute_p2022_09_pkey;
ALTER INDEX public."PK_6e09e5d608e7ae5508be9875bea" ATTACH PARTITION public.libbi_minute_p2022_10_pkey;
ALTER INDEX public."PK_6e09e5d608e7ae5508be9875bea" ATTACH PARTITION public.libbi_minute_p2022_11_pkey;
ALTER INDEX public."PK_6e09e5d608e7ae5508be9875bea" ATTACH PARTITION public.libbi_minute_p2022_12_pkey;
ALTER INDEX public."PK_6e09e5d608e7ae5508be9875bea" ATTACH PARTITION public.libbi_minute_p2023_01_pkey;
ALTER INDEX public."PK_6e09e5d608e7ae5508be9875bea" ATTACH PARTITION public.libbi_minute_p2023_02_pkey;
ALTER INDEX public."PK_6e09e5d608e7ae5508be9875bea" ATTACH PARTITION public.libbi_minute_p2023_03_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_default_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2020_07_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2020_08_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2020_09_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2020_10_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2020_11_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2020_12_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2021_01_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2021_02_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2021_03_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2021_04_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2021_05_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2021_06_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2021_07_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2021_08_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2021_09_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2021_10_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2021_11_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2021_12_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2022_01_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2022_02_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2022_03_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2022_04_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2022_05_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2022_06_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2022_07_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2022_08_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2022_09_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2022_10_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2022_11_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2022_12_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2023_01_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2023_02_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2023_03_pkey;
ALTER INDEX public."PK_5f4400bed8cbe77429781c5f9b3" ATTACH PARTITION public.zappi_minute_p2023_04_pkey;
