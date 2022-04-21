CREATE SCHEMA IF NOT EXISTS public;
SET check_function_bodies = false;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$ DECLARE _new record;
BEGIN _new := NEW;
_new."updated_at" = NOW();
RETURN _new;
END;
$$;
CREATE TABLE public.admin_group (
    id integer NOT NULL,
    name text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    aggregator_id text NOT NULL
);
CREATE TABLE public.admin_group_device (
    id integer NOT NULL,
    device_type text NOT NULL,
    postcode text,
    serialno integer NOT NULL,
    admin_group_id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public.admin_group_device_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.admin_group_device_id_seq OWNED BY public.admin_group_device.id;
CREATE SEQUENCE public.admin_group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.admin_group_id_seq OWNED BY public.admin_group.id;
CREATE TABLE public.control_group (
    id integer NOT NULL,
    name text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    admin_group_id integer NOT NULL
);
CREATE TABLE public.control_group_device (
    id integer NOT NULL,
    control_group_id integer NOT NULL,
    serialno integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    device_type text NOT NULL,
    admin_group_id integer NOT NULL
);
CREATE SEQUENCE public.control_group_device_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.control_group_device_id_seq OWNED BY public.control_group_device.id;
CREATE SEQUENCE public.control_group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.control_group_id_seq OWNED BY public.control_group.id;
CREATE TABLE public.device_type (
    value text NOT NULL,
    comment text
);
INSERT INTO public.device_type (value, comment) VALUES
  ('eddi', 'Heater'),
  ('zappi', 'Car charger');
ALTER TABLE ONLY public.admin_group ALTER COLUMN id SET DEFAULT nextval('public.admin_group_id_seq'::regclass);
ALTER TABLE ONLY public.admin_group_device ALTER COLUMN id SET DEFAULT nextval('public.admin_group_device_id_seq'::regclass);
ALTER TABLE ONLY public.control_group ALTER COLUMN id SET DEFAULT nextval('public.control_group_id_seq'::regclass);
ALTER TABLE ONLY public.control_group_device ALTER COLUMN id SET DEFAULT nextval('public.control_group_device_id_seq'::regclass);
ALTER TABLE ONLY public.admin_group_device
    ADD CONSTRAINT admin_group_device_admin_group_id_serialno_key UNIQUE (admin_group_id, serialno);
ALTER TABLE ONLY public.admin_group_device
    ADD CONSTRAINT admin_group_device_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.admin_group_device
    ADD CONSTRAINT admin_group_device_serialno_key UNIQUE (serialno);
ALTER TABLE ONLY public.admin_group
    ADD CONSTRAINT admin_group_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.control_group_device
    ADD CONSTRAINT control_group_device_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.control_group_device
    ADD CONSTRAINT control_group_device_serial_no_control_group_id_key UNIQUE (serialno, control_group_id);
ALTER TABLE ONLY public.control_group
    ADD CONSTRAINT control_group_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.device_type
    ADD CONSTRAINT device_type_pkey PRIMARY KEY (value);
CREATE TRIGGER set_public_admin_group_device_updated_at BEFORE UPDATE ON public.admin_group_device FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_admin_group_device_updated_at ON public.admin_group_device IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_admin_group_updated_at BEFORE UPDATE ON public.admin_group FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_admin_group_updated_at ON public.admin_group IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_control_group_device_updated_at BEFORE UPDATE ON public.control_group_device FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_control_group_device_updated_at ON public.control_group_device IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_control_group_updated_at BEFORE UPDATE ON public.control_group FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_control_group_updated_at ON public.control_group IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.admin_group_device
    ADD CONSTRAINT admin_group_device_admin_group_id_fkey FOREIGN KEY (admin_group_id) REFERENCES public.admin_group(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.admin_group_device
    ADD CONSTRAINT admin_group_device_device_type_fkey FOREIGN KEY (device_type) REFERENCES public.device_type(value) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.control_group
    ADD CONSTRAINT control_group_admin_group_id_fkey FOREIGN KEY (admin_group_id) REFERENCES public.admin_group(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.control_group_device
    ADD CONSTRAINT control_group_device_control_group_id_fkey FOREIGN KEY (control_group_id) REFERENCES public.control_group(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.control_group_device
    ADD CONSTRAINT "control_group_device_deviceType_fkey" FOREIGN KEY (device_type) REFERENCES public.device_type(value) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.control_group_device
    ADD CONSTRAINT control_group_device_serialno_admin_group_id_fkey FOREIGN KEY (serialno, admin_group_id) REFERENCES public.admin_group_device(serialno, admin_group_id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.control_group_device
    ADD CONSTRAINT control_group_device_serialno_fkey FOREIGN KEY (serialno) REFERENCES public.admin_group_device(serialno) ON UPDATE CASCADE ON DELETE CASCADE;
