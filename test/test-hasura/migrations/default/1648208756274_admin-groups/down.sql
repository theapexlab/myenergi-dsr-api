
alter table "public"."admin_group_device" alter column "postcode" set not null;


alter table "public"."control_group" drop constraint "control_group_admin_group_id_fkey";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."control_group" add column "admin_group_id" integer
--  not null;

alter table "public"."control_group_device" drop constraint "control_group_device_serialno_fkey";

alter table "public"."admin_group_device" drop constraint "admin_group_device_serialno_key";


alter table "public"."control_group_device" rename column "device_type" to "deviceType";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- INSERT INTO device_type (value, comment) VALUES
--   ('eddi', 'Heater'),
--   ('zappi', 'Car charger');

alter table "public"."control_group_device" drop constraint "control_group_device_deviceType_fkey";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."control_group_device" add column "deviceType" text
--  null;

DROP TABLE "public"."device_type";

DROP TABLE "public"."admin_group";
