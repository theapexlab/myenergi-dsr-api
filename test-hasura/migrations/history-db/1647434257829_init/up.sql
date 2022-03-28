create role myenergi SUPERUSER;
create role rdsadmin SUPERUSER;

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

create table eddi_minute_template
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
    constraint "PK_EDDI"
        primary key (serialno, timestamp)
);

alter table eddi_minute_template
    owner to myenergi;

create table zappi_minute_template
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
    constraint "PK_ZAPPI"
        primary key (serialno, timestamp)
);

alter table zappi_minute_template
    owner to myenergi;

create table event
(
    serialno  bigint    not null
        constraint "PK_688c15bbc65812f00551be1e22b"
            primary key,
    timestamp timestamp not null,
    somevalue varchar   not null
);

alter table event
    owner to myenergi;

create table libbi_minute_template
(
    serialno              bigint    not null,
    timestamp             timestamp not null,
    noseconds             integer   not null,
    exportpower           real,
    importpower           real,
    genpospw              real,
    gennegpw              real,
    frequency             real,
    externalcttype3       smallint,
    externalctpospower3   real,
    externalctnegpower3   real,
    voltage1              real,
    voltage2              real,
    voltage3              real,
    internalgen           real,
    invertortohousepower  real,
    housetoinverterpower  real,
    batterychargepower    real,
    batterydischargepower real,
    esstemp               real,
    stateofcharge         real,
    externalcttype1       smallint,
    externalcttype2       smallint,
    externalctpospower1   real,
    externalctpospower2   real,
    externalctnegpower1   real,
    externalctnegpower2   real,
    constraint "PK_LIBBI"
        primary key (serialno, timestamp)
);

alter table libbi_minute_template
    owner to myenergi;

create function libbi_minute_template_part_trig_func() returns trigger
    language plpgsql
as
$$
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
        END
$$;

alter function libbi_minute_template_part_trig_func() owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2020_07
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2020-07-01 00:00:00') TO ('2020-08-01 00:00:00');

-- alter table eddi_minute_p2020_07
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2020_08
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2020-08-01 00:00:00') TO ('2020-09-01 00:00:00');

-- alter table eddi_minute_p2020_08
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2020_09
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2020-09-01 00:00:00') TO ('2020-10-01 00:00:00');

-- alter table eddi_minute_p2020_09
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2020_10
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2020-10-01 00:00:00') TO ('2020-11-01 00:00:00');

-- alter table eddi_minute_p2020_10
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2020_11
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2020-11-01 00:00:00') TO ('2020-12-01 00:00:00');

-- alter table eddi_minute_p2020_11
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2020_12
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2020-12-01 00:00:00') TO ('2021-01-01 00:00:00');

-- alter table eddi_minute_p2020_12
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2021_01
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-01-01 00:00:00') TO ('2021-02-01 00:00:00');

-- alter table eddi_minute_p2021_01
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2021_02
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-02-01 00:00:00') TO ('2021-03-01 00:00:00');

-- alter table eddi_minute_p2021_02
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2021_03
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-03-01 00:00:00') TO ('2021-04-01 00:00:00');

-- alter table eddi_minute_p2021_03
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2021_04
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-04-01 00:00:00') TO ('2021-05-01 00:00:00');

-- alter table eddi_minute_p2021_04
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2021_05
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-05-01 00:00:00') TO ('2021-06-01 00:00:00');

-- alter table eddi_minute_p2021_05
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2021_06
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-06-01 00:00:00') TO ('2021-07-01 00:00:00');

-- alter table eddi_minute_p2021_06
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2021_07
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-07-01 00:00:00') TO ('2021-08-01 00:00:00');

-- alter table eddi_minute_p2021_07
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2021_08
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-08-01 00:00:00') TO ('2021-09-01 00:00:00');

-- alter table eddi_minute_p2021_08
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2021_09
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-09-01 00:00:00') TO ('2021-10-01 00:00:00');

-- alter table eddi_minute_p2021_09
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2021_10
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-10-01 00:00:00') TO ('2021-11-01 00:00:00');

-- alter table eddi_minute_p2021_10
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2021_11
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-11-01 00:00:00') TO ('2021-12-01 00:00:00');

-- alter table eddi_minute_p2021_11
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2021_12
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-12-01 00:00:00') TO ('2022-01-01 00:00:00');

-- alter table eddi_minute_p2021_12
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2022_01
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-01-01 00:00:00') TO ('2022-02-01 00:00:00');

-- alter table eddi_minute_p2022_01
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2022_02
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-02-01 00:00:00') TO ('2022-03-01 00:00:00');

-- alter table eddi_minute_p2022_02
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2022_03
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-03-01 00:00:00') TO ('2022-04-01 00:00:00');

-- alter table eddi_minute_p2022_03
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2022_04
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-04-01 00:00:00') TO ('2022-05-01 00:00:00');

-- alter table eddi_minute_p2022_04
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2022_05
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-05-01 00:00:00') TO ('2022-06-01 00:00:00');

-- alter table eddi_minute_p2022_05
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2022_06
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-06-01 00:00:00') TO ('2022-07-01 00:00:00');

-- alter table eddi_minute_p2022_06
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2022_07
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-07-01 00:00:00') TO ('2022-08-01 00:00:00');

-- alter table eddi_minute_p2022_07
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_default
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         DEFAULT;

-- alter table eddi_minute_default
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2022_08
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-08-01 00:00:00') TO ('2022-09-01 00:00:00');

-- alter table eddi_minute_p2022_08
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2022_09
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-09-01 00:00:00') TO ('2022-10-01 00:00:00');

-- alter table eddi_minute_p2022_09
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2022_10
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-10-01 00:00:00') TO ('2022-11-01 00:00:00');

-- alter table eddi_minute_p2022_10
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2022_11
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-11-01 00:00:00') TO ('2022-12-01 00:00:00');

-- alter table eddi_minute_p2022_11
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2022_12
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-12-01 00:00:00') TO ('2023-01-01 00:00:00');

-- alter table eddi_minute_p2022_12
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2023_01
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2023-01-01 00:00:00') TO ('2023-02-01 00:00:00');

-- alter table eddi_minute_p2023_01
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table eddi_minute_p2023_02
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2023-02-01 00:00:00') TO ('2023-03-01 00:00:00');

-- alter table eddi_minute_p2023_02
--     owner to myenergi;

-- -- Cyclic dependencies found

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
)
    partition by RANGE ("timestamp");

alter table eddi_minute
    owner to myenergi;

-- create table eddi_minute_p2023_03
--     partition of eddi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2023-03-01 00:00:00') TO ('2023-04-01 00:00:00');

-- alter table eddi_minute_p2023_03
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table libbi_minute_p2021_03
--     partition of libbi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-03-01 00:00:00') TO ('2021-04-01 00:00:00');

-- alter table libbi_minute_p2021_03
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table libbi_minute_p2021_04
--     partition of libbi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-04-01 00:00:00') TO ('2021-05-01 00:00:00');

-- alter table libbi_minute_p2021_04
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table libbi_minute_p2021_05
--     partition of libbi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-05-01 00:00:00') TO ('2021-06-01 00:00:00');

-- alter table libbi_minute_p2021_05
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table libbi_minute_p2021_06
--     partition of libbi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-06-01 00:00:00') TO ('2021-07-01 00:00:00');

-- alter table libbi_minute_p2021_06
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table libbi_minute_p2021_07
--     partition of libbi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-07-01 00:00:00') TO ('2021-08-01 00:00:00');

-- alter table libbi_minute_p2021_07
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table libbi_minute_p2021_08
--     partition of libbi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-08-01 00:00:00') TO ('2021-09-01 00:00:00');

-- alter table libbi_minute_p2021_08
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table libbi_minute_p2021_09
--     partition of libbi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-09-01 00:00:00') TO ('2021-10-01 00:00:00');

-- alter table libbi_minute_p2021_09
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table libbi_minute_p2021_10
--     partition of libbi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-10-01 00:00:00') TO ('2021-11-01 00:00:00');

-- alter table libbi_minute_p2021_10
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table libbi_minute_p2021_11
--     partition of libbi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-11-01 00:00:00') TO ('2021-12-01 00:00:00');

-- alter table libbi_minute_p2021_11
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table libbi_minute_p2021_12
--     partition of libbi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-12-01 00:00:00') TO ('2022-01-01 00:00:00');

-- alter table libbi_minute_p2021_12
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table libbi_minute_p2022_01
--     partition of libbi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-01-01 00:00:00') TO ('2022-02-01 00:00:00');

-- alter table libbi_minute_p2022_01
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table libbi_minute_p2022_02
--     partition of libbi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-02-01 00:00:00') TO ('2022-03-01 00:00:00');

-- alter table libbi_minute_p2022_02
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table libbi_minute_p2022_03
--     partition of libbi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-03-01 00:00:00') TO ('2022-04-01 00:00:00');

-- alter table libbi_minute_p2022_03
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table libbi_minute_p2022_04
--     partition of libbi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-04-01 00:00:00') TO ('2022-05-01 00:00:00');

-- alter table libbi_minute_p2022_04
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table libbi_minute_p2022_05
--     partition of libbi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-05-01 00:00:00') TO ('2022-06-01 00:00:00');

-- alter table libbi_minute_p2022_05
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table libbi_minute_p2022_06
--     partition of libbi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-06-01 00:00:00') TO ('2022-07-01 00:00:00');

-- alter table libbi_minute_p2022_06
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table libbi_minute_p2022_07
--     partition of libbi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-07-01 00:00:00') TO ('2022-08-01 00:00:00');

-- alter table libbi_minute_p2022_07
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table libbi_minute_p2022_08
--     partition of libbi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-08-01 00:00:00') TO ('2022-09-01 00:00:00');

-- alter table libbi_minute_p2022_08
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table libbi_minute_p2022_09
--     partition of libbi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-09-01 00:00:00') TO ('2022-10-01 00:00:00');

-- alter table libbi_minute_p2022_09
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table libbi_minute_p2022_10
--     partition of libbi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-10-01 00:00:00') TO ('2022-11-01 00:00:00');

-- alter table libbi_minute_p2022_10
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table libbi_minute_p2022_11
--     partition of libbi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-11-01 00:00:00') TO ('2022-12-01 00:00:00');

-- alter table libbi_minute_p2022_11
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table libbi_minute_p2022_12
--     partition of libbi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-12-01 00:00:00') TO ('2023-01-01 00:00:00');

-- alter table libbi_minute_p2022_12
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table libbi_minute_p2023_01
--     partition of libbi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2023-01-01 00:00:00') TO ('2023-02-01 00:00:00');

-- alter table libbi_minute_p2023_01
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table libbi_minute_p2023_02
--     partition of libbi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2023-02-01 00:00:00') TO ('2023-03-01 00:00:00');

-- alter table libbi_minute_p2023_02
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table libbi_minute_p2023_03
--     partition of libbi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2023-03-01 00:00:00') TO ('2023-04-01 00:00:00');

-- alter table libbi_minute_p2023_03
--     owner to myenergi;

-- -- Cyclic dependencies found

create table libbi_minute
(
    serialno              bigint    not null,
    timestamp             timestamp not null,
    noseconds             integer   not null,
    exportpower           real,
    importpower           real,
    genpospw              real,
    gennegpw              real,
    frequency             real,
    externalcttype3       smallint,
    externalctpospower3   real,
    externalctnegpower3   real,
    voltage1              real,
    voltage2              real,
    voltage3              real,
    internalgen           real,
    invertortohousepower  real,
    housetoinverterpower  real,
    batterychargepower    real,
    batterydischargepower real,
    esstemp               real,
    stateofcharge         real,
    externalcttype1       smallint,
    externalcttype2       smallint,
    externalctpospower1   real,
    externalctpospower2   real,
    externalctnegpower1   real,
    externalctnegpower2   real,
    constraint "PK_6e09e5d608e7ae5508be9875bea"
        primary key (serialno, timestamp)
)
    partition by RANGE ("timestamp");

alter table libbi_minute
    owner to myenergi;

-- create table libbi_minute_default
--     partition of libbi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         DEFAULT;

-- alter table libbi_minute_default
--     owner to myenergi;

-- Cyclic dependencies found

-- create table zappi_minute_p2020_07
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2020-07-01 00:00:00') TO ('2020-08-01 00:00:00');

-- alter table zappi_minute_p2020_07
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2020_08
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2020-08-01 00:00:00') TO ('2020-09-01 00:00:00');

-- alter table zappi_minute_p2020_08
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2020_09
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2020-09-01 00:00:00') TO ('2020-10-01 00:00:00');

-- alter table zappi_minute_p2020_09
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2020_10
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2020-10-01 00:00:00') TO ('2020-11-01 00:00:00');

-- alter table zappi_minute_p2020_10
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2020_11
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2020-11-01 00:00:00') TO ('2020-12-01 00:00:00');

-- alter table zappi_minute_p2020_11
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2020_12
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2020-12-01 00:00:00') TO ('2021-01-01 00:00:00');

-- alter table zappi_minute_p2020_12
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2021_01
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-01-01 00:00:00') TO ('2021-02-01 00:00:00');

-- alter table zappi_minute_p2021_01
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2021_02
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-02-01 00:00:00') TO ('2021-03-01 00:00:00');

-- alter table zappi_minute_p2021_02
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2021_03
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-03-01 00:00:00') TO ('2021-04-01 00:00:00');

-- alter table zappi_minute_p2021_03
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2021_04
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-04-01 00:00:00') TO ('2021-05-01 00:00:00');

-- alter table zappi_minute_p2021_04
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2021_05
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-05-01 00:00:00') TO ('2021-06-01 00:00:00');

-- alter table zappi_minute_p2021_05
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2021_06
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-06-01 00:00:00') TO ('2021-07-01 00:00:00');

-- alter table zappi_minute_p2021_06
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2021_07
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-07-01 00:00:00') TO ('2021-08-01 00:00:00');

-- alter table zappi_minute_p2021_07
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2021_08
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-08-01 00:00:00') TO ('2021-09-01 00:00:00');

-- alter table zappi_minute_p2021_08
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2021_09
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-09-01 00:00:00') TO ('2021-10-01 00:00:00');

-- alter table zappi_minute_p2021_09
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2021_10
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-10-01 00:00:00') TO ('2021-11-01 00:00:00');

-- alter table zappi_minute_p2021_10
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2021_11
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-11-01 00:00:00') TO ('2021-12-01 00:00:00');

-- alter table zappi_minute_p2021_11
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2021_12
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2021-12-01 00:00:00') TO ('2022-01-01 00:00:00');

-- alter table zappi_minute_p2021_12
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2022_01
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-01-01 00:00:00') TO ('2022-02-01 00:00:00');

-- alter table zappi_minute_p2022_01
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2022_02
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-02-01 00:00:00') TO ('2022-03-01 00:00:00');

-- alter table zappi_minute_p2022_02
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2022_03
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-03-01 00:00:00') TO ('2022-04-01 00:00:00');

-- alter table zappi_minute_p2022_03
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2022_04
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-04-01 00:00:00') TO ('2022-05-01 00:00:00');

-- alter table zappi_minute_p2022_04
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2022_05
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-05-01 00:00:00') TO ('2022-06-01 00:00:00');

-- alter table zappi_minute_p2022_05
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2022_06
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-06-01 00:00:00') TO ('2022-07-01 00:00:00');

-- alter table zappi_minute_p2022_06
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2022_07
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-07-01 00:00:00') TO ('2022-08-01 00:00:00');

-- alter table zappi_minute_p2022_07
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_default
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         DEFAULT;

-- alter table zappi_minute_default
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2022_08
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-08-01 00:00:00') TO ('2022-09-01 00:00:00');

-- alter table zappi_minute_p2022_08
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2022_09
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-09-01 00:00:00') TO ('2022-10-01 00:00:00');

-- alter table zappi_minute_p2022_09
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2022_10
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-10-01 00:00:00') TO ('2022-11-01 00:00:00');

-- alter table zappi_minute_p2022_10
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2022_11
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-11-01 00:00:00') TO ('2022-12-01 00:00:00');

-- alter table zappi_minute_p2022_11
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2022_12
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2022-12-01 00:00:00') TO ('2023-01-01 00:00:00');

-- alter table zappi_minute_p2022_12
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2023_01
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2023-01-01 00:00:00') TO ('2023-02-01 00:00:00');

-- alter table zappi_minute_p2023_01
--     owner to myenergi;

-- -- Cyclic dependencies found

-- create table zappi_minute_p2023_02
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2023-02-01 00:00:00') TO ('2023-03-01 00:00:00');

-- alter table zappi_minute_p2023_02
--     owner to myenergi;

-- Cyclic dependencies found

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
)
    partition by RANGE ("timestamp");

alter table zappi_minute
    owner to myenergi;

-- create table zappi_minute_p2023_03
--     partition of zappi_minute
--         (
--             primary key (serialno, timestamp)
--             )
--         FOR VALUES FROM ('2023-03-01 00:00:00') TO ('2023-04-01 00:00:00');

-- alter table zappi_minute_p2023_03
--     owner to myenergi;

