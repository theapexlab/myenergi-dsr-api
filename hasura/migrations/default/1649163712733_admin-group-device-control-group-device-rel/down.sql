
alter table "public"."control_group_device" drop constraint "control_group_device_serialno_admin_group_id_fkey";

alter table "public"."admin_group_device" drop constraint "admin_group_device_admin_group_id_serialno_key";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."control_group_device" add column "admin_group_id" integer
--  not null;
