

alter table "public"."control_group_device" rename column "serialno" to "serial_no";

alter table "public"."control_group" alter column "name" drop not null;


DROP TABLE "public"."control_group_device";

DROP TABLE "public"."control_group";