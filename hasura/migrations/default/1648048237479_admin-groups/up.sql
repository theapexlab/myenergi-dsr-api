
CREATE TABLE "public"."admin_group" ("id" serial NOT NULL, "name" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );
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
CREATE TRIGGER "set_public_admin_group_updated_at"
BEFORE UPDATE ON "public"."admin_group"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_admin_group_updated_at" ON "public"."admin_group" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TABLE "public"."device_type" ("value" text NOT NULL, "comment" text, PRIMARY KEY ("value") );

alter table "public"."control_group_device" add column "deviceType" text
 null;

alter table "public"."control_group_device"
  add constraint "control_group_device_deviceType_fkey"
  foreign key ("deviceType")
  references "public"."device_type"
  ("value") on update cascade on delete cascade;

INSERT INTO device_type (value, comment) VALUES
  ('eddi', 'Heater'),
  ('zappi', 'Car charger');

alter table "public"."control_group_device" rename column "deviceType" to "device_type";

CREATE TABLE "public"."adming_group_device" ("id" serial NOT NULL, "device_type" text NOT NULL, "postcode" text NOT NULL, "serialno" integer NOT NULL, "admin_group_id" integer NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("device_type") REFERENCES "public"."device_type"("value") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("admin_group_id") REFERENCES "public"."admin_group"("id") ON UPDATE cascade ON DELETE cascade);
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
CREATE TRIGGER "set_public_adming_group_device_updated_at"
BEFORE UPDATE ON "public"."adming_group_device"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_adming_group_device_updated_at" ON "public"."adming_group_device" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
