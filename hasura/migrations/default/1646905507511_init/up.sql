SET check_function_bodies = false;

CREATE TABLE "public"."control_group" ("id" serial NOT NULL, "name" text, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , UNIQUE ("id"));
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_control_group_updated_at"
BEFORE UPDATE ON "public"."control_group"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_control_group_updated_at" ON "public"."control_group" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TABLE "public"."control_group_device" ("id" serial NOT NULL, "control_group_id" integer NOT NULL, "serial_no" integer NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("control_group_id") REFERENCES "public"."control_group"("id") ON UPDATE cascade ON DELETE cascade, UNIQUE ("id"), UNIQUE ("serial_no", "control_group_id"));
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_control_group_device_updated_at"
BEFORE UPDATE ON "public"."control_group_device"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_control_group_device_updated_at" ON "public"."control_group_device" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
