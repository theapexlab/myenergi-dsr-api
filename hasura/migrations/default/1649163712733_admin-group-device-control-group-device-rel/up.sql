
alter table "public"."control_group_device" add column "admin_group_id" integer
 not null;

alter table "public"."admin_group_device" add constraint "admin_group_device_admin_group_id_serialno_key" unique ("admin_group_id", "serialno");

alter table "public"."control_group_device"
  add constraint "control_group_device_serialno_admin_group_id_fkey"
  foreign key ("serialno", "admin_group_id")
  references "public"."admin_group_device"
  ("serialno", "admin_group_id") on update cascade on delete cascade;
