INSERT INTO
    public.admin_group (name, created_at, updated_at)
VALUES
    (
        'testAdminGroup-1',
        '2022-03-29 10:14:31.614168 +00:00',
        '2022-03-29 10:16:36.348110 +00:00'
    ),
    (
        'testAdminGroup-2',
        '2022-03-29 10:14:31.614168 +00:00',
        '2022-03-29 10:16:36.348110 +00:00'
    );

INSERT INTO
    public.admin_group_device (
        device_type,
        postcode,
        serialno,
        admin_group_id,
        created_at,
        updated_at
    )
VALUES
    (
        'eddi',
        '111222',
        200000001,
        1,
        '2022-03-29 12:19:55.778000 +00:00',
        '2022-03-29 12:19:58.455000 +00:00'
    ),
    (
        'eddi',
        '111222',
        200000002,
        1,
        '2022-03-29 12:19:55.778000 +00:00',
        '2022-03-29 12:19:58.455000 +00:00'
    ),
    (
        'zappi',
        '111222',
        100000001,
        1,
        '2022-03-29 12:19:55.778000 +00:00',
        '2022-03-29 12:19:58.455000 +00:00'
    ),
    (
        'zappi',
        '222333',
        100000002,
        1,
        '2022-03-29 12:20:10.057000 +00:00',
        '2022-03-29 12:20:11.042000 +00:00'
    );

INSERT INTO
    public.control_group (name, created_at, updated_at, admin_group_id)
VALUES
    (
        'testControlGroup',
        '2022-03-29 12:21:01.235000 +00:00',
        '2022-03-29 12:21:02.170000 +00:00',
        1
    );

INSERT INTO
    public.control_group_device (
        control_group_id,
        serialno,
        admin_group_id,
        created_at,
        updated_at,
        device_type
    )
VALUES
    (
        1,
        100000001,
        1,
        '2022-03-29 12:24:42.788000 +00:00',
        '2022-03-29 12:24:43.827000 +00:00',
        'zappi'
    ),
    (
        1,
        200000001,
        1,
        '2022-03-29 12:24:42.788000 +00:00',
        '2022-03-29 12:24:43.827000 +00:00',
        'eddi'
    );