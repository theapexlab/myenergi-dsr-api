import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: number;
  bytea: any;
  command_commandinitiatorservice_enum: any;
  command_commandstate_enum: any;
  command_commandtype_enum: any;
  command_destinationdevicename_enum: any;
  jsonb: any;
  macaddr: any;
  smallint: number;
  timestamp: string;
  timestamptz: string;
  uuid: string;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Float". All fields are combined with logical 'AND'. */
export type Float_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Float']>;
  _gt?: InputMaybe<Scalars['Float']>;
  _gte?: InputMaybe<Scalars['Float']>;
  _in?: InputMaybe<Array<Scalars['Float']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Float']>;
  _lte?: InputMaybe<Scalars['Float']>;
  _neq?: InputMaybe<Scalars['Float']>;
  _nin?: InputMaybe<Array<Scalars['Float']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "admin_group" */
export type Admin_Group = {
  __typename?: 'admin_group';
  /** An array relationship */
  admin_group_devices: Array<Admin_Group_Device>;
  /** An aggregate relationship */
  admin_group_devices_aggregate: Admin_Group_Device_Aggregate;
  aggregator_id: Scalars['String'];
  /** An array relationship */
  control_groups: Array<Control_Group>;
  /** An aggregate relationship */
  control_groups_aggregate: Control_Group_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "admin_group" */
export type Admin_GroupAdmin_Group_DevicesArgs = {
  distinct_on?: InputMaybe<Array<Admin_Group_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Group_Device_Order_By>>;
  where?: InputMaybe<Admin_Group_Device_Bool_Exp>;
};

/** columns and relationships of "admin_group" */
export type Admin_GroupAdmin_Group_Devices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Group_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Group_Device_Order_By>>;
  where?: InputMaybe<Admin_Group_Device_Bool_Exp>;
};

/** columns and relationships of "admin_group" */
export type Admin_GroupControl_GroupsArgs = {
  distinct_on?: InputMaybe<Array<Control_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Control_Group_Order_By>>;
  where?: InputMaybe<Control_Group_Bool_Exp>;
};

/** columns and relationships of "admin_group" */
export type Admin_GroupControl_Groups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Control_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Control_Group_Order_By>>;
  where?: InputMaybe<Control_Group_Bool_Exp>;
};

/** aggregated selection of "admin_group" */
export type Admin_Group_Aggregate = {
  __typename?: 'admin_group_aggregate';
  aggregate?: Maybe<Admin_Group_Aggregate_Fields>;
  nodes: Array<Admin_Group>;
};

/** aggregate fields of "admin_group" */
export type Admin_Group_Aggregate_Fields = {
  __typename?: 'admin_group_aggregate_fields';
  avg?: Maybe<Admin_Group_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Admin_Group_Max_Fields>;
  min?: Maybe<Admin_Group_Min_Fields>;
  stddev?: Maybe<Admin_Group_Stddev_Fields>;
  stddev_pop?: Maybe<Admin_Group_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Admin_Group_Stddev_Samp_Fields>;
  sum?: Maybe<Admin_Group_Sum_Fields>;
  var_pop?: Maybe<Admin_Group_Var_Pop_Fields>;
  var_samp?: Maybe<Admin_Group_Var_Samp_Fields>;
  variance?: Maybe<Admin_Group_Variance_Fields>;
};

/** aggregate fields of "admin_group" */
export type Admin_Group_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Admin_Group_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Admin_Group_Avg_Fields = {
  __typename?: 'admin_group_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "admin_group". All fields are combined with a logical 'AND'. */
export type Admin_Group_Bool_Exp = {
  _and?: InputMaybe<Array<Admin_Group_Bool_Exp>>;
  _not?: InputMaybe<Admin_Group_Bool_Exp>;
  _or?: InputMaybe<Array<Admin_Group_Bool_Exp>>;
  admin_group_devices?: InputMaybe<Admin_Group_Device_Bool_Exp>;
  aggregator_id?: InputMaybe<String_Comparison_Exp>;
  control_groups?: InputMaybe<Control_Group_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "admin_group" */
export enum Admin_Group_Constraint {
  /** unique or primary key constraint */
  AdminGroupPkey = 'admin_group_pkey',
}

/** columns and relationships of "admin_group_device" */
export type Admin_Group_Device = {
  __typename?: 'admin_group_device';
  /** An object relationship */
  admin_group: Admin_Group;
  admin_group_device_eddi?: Maybe<Eddi>;
  admin_group_device_zappi?: Maybe<Zappi>;
  admin_group_history_eddi: Array<Eddi_Minute>;
  admin_group_history_eddi_aggregate: Eddi_Minute_Aggregate;
  admin_group_history_zappi: Array<Zappi_Minute>;
  admin_group_history_zappi_aggregate: Zappi_Minute_Aggregate;
  admin_group_id: Scalars['Int'];
  /** An array relationship */
  control_group_devices: Array<Control_Group_Device>;
  /** An aggregate relationship */
  control_group_devices_aggregate: Control_Group_Device_Aggregate;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  deviceTypeByDeviceType: Device_Type;
  device_type: Device_Type_Enum;
  id: Scalars['Int'];
  postcode?: Maybe<Scalars['String']>;
  serialno: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "admin_group_device" */
export type Admin_Group_DeviceAdmin_Group_History_EddiArgs = {
  distinct_on?: InputMaybe<Array<Eddi_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Eddi_Minute_Order_By>>;
  where?: InputMaybe<Eddi_Minute_Bool_Exp>;
};

/** columns and relationships of "admin_group_device" */
export type Admin_Group_DeviceAdmin_Group_History_Eddi_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Eddi_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Eddi_Minute_Order_By>>;
  where?: InputMaybe<Eddi_Minute_Bool_Exp>;
};

/** columns and relationships of "admin_group_device" */
export type Admin_Group_DeviceAdmin_Group_History_ZappiArgs = {
  distinct_on?: InputMaybe<Array<Zappi_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zappi_Minute_Order_By>>;
  where?: InputMaybe<Zappi_Minute_Bool_Exp>;
};

/** columns and relationships of "admin_group_device" */
export type Admin_Group_DeviceAdmin_Group_History_Zappi_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Zappi_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zappi_Minute_Order_By>>;
  where?: InputMaybe<Zappi_Minute_Bool_Exp>;
};

/** columns and relationships of "admin_group_device" */
export type Admin_Group_DeviceControl_Group_DevicesArgs = {
  distinct_on?: InputMaybe<Array<Control_Group_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Control_Group_Device_Order_By>>;
  where?: InputMaybe<Control_Group_Device_Bool_Exp>;
};

/** columns and relationships of "admin_group_device" */
export type Admin_Group_DeviceControl_Group_Devices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Control_Group_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Control_Group_Device_Order_By>>;
  where?: InputMaybe<Control_Group_Device_Bool_Exp>;
};

/** aggregated selection of "admin_group_device" */
export type Admin_Group_Device_Aggregate = {
  __typename?: 'admin_group_device_aggregate';
  aggregate?: Maybe<Admin_Group_Device_Aggregate_Fields>;
  nodes: Array<Admin_Group_Device>;
};

/** aggregate fields of "admin_group_device" */
export type Admin_Group_Device_Aggregate_Fields = {
  __typename?: 'admin_group_device_aggregate_fields';
  avg?: Maybe<Admin_Group_Device_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Admin_Group_Device_Max_Fields>;
  min?: Maybe<Admin_Group_Device_Min_Fields>;
  stddev?: Maybe<Admin_Group_Device_Stddev_Fields>;
  stddev_pop?: Maybe<Admin_Group_Device_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Admin_Group_Device_Stddev_Samp_Fields>;
  sum?: Maybe<Admin_Group_Device_Sum_Fields>;
  var_pop?: Maybe<Admin_Group_Device_Var_Pop_Fields>;
  var_samp?: Maybe<Admin_Group_Device_Var_Samp_Fields>;
  variance?: Maybe<Admin_Group_Device_Variance_Fields>;
};

/** aggregate fields of "admin_group_device" */
export type Admin_Group_Device_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Admin_Group_Device_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "admin_group_device" */
export type Admin_Group_Device_Aggregate_Order_By = {
  avg?: InputMaybe<Admin_Group_Device_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Admin_Group_Device_Max_Order_By>;
  min?: InputMaybe<Admin_Group_Device_Min_Order_By>;
  stddev?: InputMaybe<Admin_Group_Device_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Admin_Group_Device_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Admin_Group_Device_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Admin_Group_Device_Sum_Order_By>;
  var_pop?: InputMaybe<Admin_Group_Device_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Admin_Group_Device_Var_Samp_Order_By>;
  variance?: InputMaybe<Admin_Group_Device_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "admin_group_device" */
export type Admin_Group_Device_Arr_Rel_Insert_Input = {
  data: Array<Admin_Group_Device_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Admin_Group_Device_On_Conflict>;
};

/** aggregate avg on columns */
export type Admin_Group_Device_Avg_Fields = {
  __typename?: 'admin_group_device_avg_fields';
  admin_group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "admin_group_device" */
export type Admin_Group_Device_Avg_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "admin_group_device". All fields are combined with a logical 'AND'. */
export type Admin_Group_Device_Bool_Exp = {
  _and?: InputMaybe<Array<Admin_Group_Device_Bool_Exp>>;
  _not?: InputMaybe<Admin_Group_Device_Bool_Exp>;
  _or?: InputMaybe<Array<Admin_Group_Device_Bool_Exp>>;
  admin_group?: InputMaybe<Admin_Group_Bool_Exp>;
  admin_group_id?: InputMaybe<Int_Comparison_Exp>;
  control_group_devices?: InputMaybe<Control_Group_Device_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deviceTypeByDeviceType?: InputMaybe<Device_Type_Bool_Exp>;
  device_type?: InputMaybe<Device_Type_Enum_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  postcode?: InputMaybe<String_Comparison_Exp>;
  serialno?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "admin_group_device" */
export enum Admin_Group_Device_Constraint {
  /** unique or primary key constraint */
  AdminGroupDeviceAdminGroupIdSerialnoKey = 'admin_group_device_admin_group_id_serialno_key',
  /** unique or primary key constraint */
  AdminGroupDevicePkey = 'admin_group_device_pkey',
  /** unique or primary key constraint */
  AdminGroupDeviceSerialnoKey = 'admin_group_device_serialno_key',
}

/** input type for incrementing numeric columns in table "admin_group_device" */
export type Admin_Group_Device_Inc_Input = {
  admin_group_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  serialno?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "admin_group_device" */
export type Admin_Group_Device_Insert_Input = {
  admin_group?: InputMaybe<Admin_Group_Obj_Rel_Insert_Input>;
  admin_group_id?: InputMaybe<Scalars['Int']>;
  control_group_devices?: InputMaybe<Control_Group_Device_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  deviceTypeByDeviceType?: InputMaybe<Device_Type_Obj_Rel_Insert_Input>;
  device_type?: InputMaybe<Device_Type_Enum>;
  id?: InputMaybe<Scalars['Int']>;
  postcode?: InputMaybe<Scalars['String']>;
  serialno?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Admin_Group_Device_Max_Fields = {
  __typename?: 'admin_group_device_max_fields';
  admin_group_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  postcode?: Maybe<Scalars['String']>;
  serialno?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "admin_group_device" */
export type Admin_Group_Device_Max_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  postcode?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Admin_Group_Device_Min_Fields = {
  __typename?: 'admin_group_device_min_fields';
  admin_group_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  postcode?: Maybe<Scalars['String']>;
  serialno?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "admin_group_device" */
export type Admin_Group_Device_Min_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  postcode?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "admin_group_device" */
export type Admin_Group_Device_Mutation_Response = {
  __typename?: 'admin_group_device_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Admin_Group_Device>;
};

/** input type for inserting object relation for remote table "admin_group_device" */
export type Admin_Group_Device_Obj_Rel_Insert_Input = {
  data: Admin_Group_Device_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Admin_Group_Device_On_Conflict>;
};

/** on_conflict condition type for table "admin_group_device" */
export type Admin_Group_Device_On_Conflict = {
  constraint: Admin_Group_Device_Constraint;
  update_columns?: Array<Admin_Group_Device_Update_Column>;
  where?: InputMaybe<Admin_Group_Device_Bool_Exp>;
};

/** Ordering options when selecting data from "admin_group_device". */
export type Admin_Group_Device_Order_By = {
  admin_group?: InputMaybe<Admin_Group_Order_By>;
  admin_group_id?: InputMaybe<Order_By>;
  control_group_devices_aggregate?: InputMaybe<Control_Group_Device_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  deviceTypeByDeviceType?: InputMaybe<Device_Type_Order_By>;
  device_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  postcode?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: admin_group_device */
export type Admin_Group_Device_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "admin_group_device" */
export enum Admin_Group_Device_Select_Column {
  /** column name */
  AdminGroupId = 'admin_group_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeviceType = 'device_type',
  /** column name */
  Id = 'id',
  /** column name */
  Postcode = 'postcode',
  /** column name */
  Serialno = 'serialno',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "admin_group_device" */
export type Admin_Group_Device_Set_Input = {
  admin_group_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  device_type?: InputMaybe<Device_Type_Enum>;
  id?: InputMaybe<Scalars['Int']>;
  postcode?: InputMaybe<Scalars['String']>;
  serialno?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Admin_Group_Device_Stddev_Fields = {
  __typename?: 'admin_group_device_stddev_fields';
  admin_group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "admin_group_device" */
export type Admin_Group_Device_Stddev_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Admin_Group_Device_Stddev_Pop_Fields = {
  __typename?: 'admin_group_device_stddev_pop_fields';
  admin_group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "admin_group_device" */
export type Admin_Group_Device_Stddev_Pop_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Admin_Group_Device_Stddev_Samp_Fields = {
  __typename?: 'admin_group_device_stddev_samp_fields';
  admin_group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "admin_group_device" */
export type Admin_Group_Device_Stddev_Samp_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Admin_Group_Device_Sum_Fields = {
  __typename?: 'admin_group_device_sum_fields';
  admin_group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  serialno?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "admin_group_device" */
export type Admin_Group_Device_Sum_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
};

/** update columns of table "admin_group_device" */
export enum Admin_Group_Device_Update_Column {
  /** column name */
  AdminGroupId = 'admin_group_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeviceType = 'device_type',
  /** column name */
  Id = 'id',
  /** column name */
  Postcode = 'postcode',
  /** column name */
  Serialno = 'serialno',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Admin_Group_Device_Var_Pop_Fields = {
  __typename?: 'admin_group_device_var_pop_fields';
  admin_group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "admin_group_device" */
export type Admin_Group_Device_Var_Pop_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Admin_Group_Device_Var_Samp_Fields = {
  __typename?: 'admin_group_device_var_samp_fields';
  admin_group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "admin_group_device" */
export type Admin_Group_Device_Var_Samp_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Admin_Group_Device_Variance_Fields = {
  __typename?: 'admin_group_device_variance_fields';
  admin_group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "admin_group_device" */
export type Admin_Group_Device_Variance_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
};

/** input type for incrementing numeric columns in table "admin_group" */
export type Admin_Group_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "admin_group" */
export type Admin_Group_Insert_Input = {
  admin_group_devices?: InputMaybe<Admin_Group_Device_Arr_Rel_Insert_Input>;
  aggregator_id?: InputMaybe<Scalars['String']>;
  control_groups?: InputMaybe<Control_Group_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Admin_Group_Max_Fields = {
  __typename?: 'admin_group_max_fields';
  aggregator_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Admin_Group_Min_Fields = {
  __typename?: 'admin_group_min_fields';
  aggregator_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "admin_group" */
export type Admin_Group_Mutation_Response = {
  __typename?: 'admin_group_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Admin_Group>;
};

/** input type for inserting object relation for remote table "admin_group" */
export type Admin_Group_Obj_Rel_Insert_Input = {
  data: Admin_Group_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Admin_Group_On_Conflict>;
};

/** on_conflict condition type for table "admin_group" */
export type Admin_Group_On_Conflict = {
  constraint: Admin_Group_Constraint;
  update_columns?: Array<Admin_Group_Update_Column>;
  where?: InputMaybe<Admin_Group_Bool_Exp>;
};

/** Ordering options when selecting data from "admin_group". */
export type Admin_Group_Order_By = {
  admin_group_devices_aggregate?: InputMaybe<Admin_Group_Device_Aggregate_Order_By>;
  aggregator_id?: InputMaybe<Order_By>;
  control_groups_aggregate?: InputMaybe<Control_Group_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: admin_group */
export type Admin_Group_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "admin_group" */
export enum Admin_Group_Select_Column {
  /** column name */
  AggregatorId = 'aggregator_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "admin_group" */
export type Admin_Group_Set_Input = {
  aggregator_id?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Admin_Group_Stddev_Fields = {
  __typename?: 'admin_group_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Admin_Group_Stddev_Pop_Fields = {
  __typename?: 'admin_group_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Admin_Group_Stddev_Samp_Fields = {
  __typename?: 'admin_group_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Admin_Group_Sum_Fields = {
  __typename?: 'admin_group_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "admin_group" */
export enum Admin_Group_Update_Column {
  /** column name */
  AggregatorId = 'aggregator_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Admin_Group_Var_Pop_Fields = {
  __typename?: 'admin_group_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Admin_Group_Var_Samp_Fields = {
  __typename?: 'admin_group_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Admin_Group_Variance_Fields = {
  __typename?: 'admin_group_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "aggregation_data" */
export type Aggregation_Data = {
  __typename?: 'aggregation_data';
  admingroup?: Maybe<Scalars['String']>;
  controlgroup?: Maybe<Scalars['String']>;
  csn?: Maybe<Scalars['smallint']>;
  daf?: Maybe<Scalars['smallint']>;
  ddf?: Maybe<Scalars['smallint']>;
  dds?: Maybe<Scalars['String']>;
  dsrdaf?: Maybe<Scalars['smallint']>;
  dsrddf?: Maybe<Scalars['smallint']>;
  dsruaf?: Maybe<Scalars['smallint']>;
  dsrudf?: Maybe<Scalars['smallint']>;
  /** An object relationship */
  eddi?: Maybe<Eddi>;
  fra?: Maybe<Scalars['String']>;
  frm?: Maybe<Scalars['String']>;
  frs?: Maybe<Scalars['String']>;
  groupkey?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  lod?: Maybe<Scalars['smallint']>;
  ttl?: Maybe<Scalars['smallint']>;
  uaf?: Maybe<Scalars['smallint']>;
  udf?: Maybe<Scalars['smallint']>;
  /** An object relationship */
  zappi?: Maybe<Zappi>;
};

/** aggregated selection of "aggregation_data" */
export type Aggregation_Data_Aggregate = {
  __typename?: 'aggregation_data_aggregate';
  aggregate?: Maybe<Aggregation_Data_Aggregate_Fields>;
  nodes: Array<Aggregation_Data>;
};

/** aggregate fields of "aggregation_data" */
export type Aggregation_Data_Aggregate_Fields = {
  __typename?: 'aggregation_data_aggregate_fields';
  avg?: Maybe<Aggregation_Data_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Aggregation_Data_Max_Fields>;
  min?: Maybe<Aggregation_Data_Min_Fields>;
  stddev?: Maybe<Aggregation_Data_Stddev_Fields>;
  stddev_pop?: Maybe<Aggregation_Data_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Aggregation_Data_Stddev_Samp_Fields>;
  sum?: Maybe<Aggregation_Data_Sum_Fields>;
  var_pop?: Maybe<Aggregation_Data_Var_Pop_Fields>;
  var_samp?: Maybe<Aggregation_Data_Var_Samp_Fields>;
  variance?: Maybe<Aggregation_Data_Variance_Fields>;
};

/** aggregate fields of "aggregation_data" */
export type Aggregation_Data_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Aggregation_Data_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Aggregation_Data_Avg_Fields = {
  __typename?: 'aggregation_data_avg_fields';
  csn?: Maybe<Scalars['Float']>;
  daf?: Maybe<Scalars['Float']>;
  ddf?: Maybe<Scalars['Float']>;
  dsrdaf?: Maybe<Scalars['Float']>;
  dsrddf?: Maybe<Scalars['Float']>;
  dsruaf?: Maybe<Scalars['Float']>;
  dsrudf?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lod?: Maybe<Scalars['Float']>;
  ttl?: Maybe<Scalars['Float']>;
  uaf?: Maybe<Scalars['Float']>;
  udf?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "aggregation_data". All fields are combined with a logical 'AND'. */
export type Aggregation_Data_Bool_Exp = {
  _and?: InputMaybe<Array<Aggregation_Data_Bool_Exp>>;
  _not?: InputMaybe<Aggregation_Data_Bool_Exp>;
  _or?: InputMaybe<Array<Aggregation_Data_Bool_Exp>>;
  admingroup?: InputMaybe<String_Comparison_Exp>;
  controlgroup?: InputMaybe<String_Comparison_Exp>;
  csn?: InputMaybe<Smallint_Comparison_Exp>;
  daf?: InputMaybe<Smallint_Comparison_Exp>;
  ddf?: InputMaybe<Smallint_Comparison_Exp>;
  dds?: InputMaybe<String_Comparison_Exp>;
  dsrdaf?: InputMaybe<Smallint_Comparison_Exp>;
  dsrddf?: InputMaybe<Smallint_Comparison_Exp>;
  dsruaf?: InputMaybe<Smallint_Comparison_Exp>;
  dsrudf?: InputMaybe<Smallint_Comparison_Exp>;
  eddi?: InputMaybe<Eddi_Bool_Exp>;
  fra?: InputMaybe<String_Comparison_Exp>;
  frm?: InputMaybe<String_Comparison_Exp>;
  frs?: InputMaybe<String_Comparison_Exp>;
  groupkey?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  lod?: InputMaybe<Smallint_Comparison_Exp>;
  ttl?: InputMaybe<Smallint_Comparison_Exp>;
  uaf?: InputMaybe<Smallint_Comparison_Exp>;
  udf?: InputMaybe<Smallint_Comparison_Exp>;
  zappi?: InputMaybe<Zappi_Bool_Exp>;
};

/** unique or primary key constraints on table "aggregation_data" */
export enum Aggregation_Data_Constraint {
  /** unique or primary key constraint */
  PkDdc7a0995733a50dc8df46d9270 = 'PK_ddc7a0995733a50dc8df46d9270',
}

/** input type for incrementing numeric columns in table "aggregation_data" */
export type Aggregation_Data_Inc_Input = {
  csn?: InputMaybe<Scalars['smallint']>;
  daf?: InputMaybe<Scalars['smallint']>;
  ddf?: InputMaybe<Scalars['smallint']>;
  dsrdaf?: InputMaybe<Scalars['smallint']>;
  dsrddf?: InputMaybe<Scalars['smallint']>;
  dsruaf?: InputMaybe<Scalars['smallint']>;
  dsrudf?: InputMaybe<Scalars['smallint']>;
  id?: InputMaybe<Scalars['Int']>;
  lod?: InputMaybe<Scalars['smallint']>;
  ttl?: InputMaybe<Scalars['smallint']>;
  uaf?: InputMaybe<Scalars['smallint']>;
  udf?: InputMaybe<Scalars['smallint']>;
};

/** input type for inserting data into table "aggregation_data" */
export type Aggregation_Data_Insert_Input = {
  admingroup?: InputMaybe<Scalars['String']>;
  controlgroup?: InputMaybe<Scalars['String']>;
  csn?: InputMaybe<Scalars['smallint']>;
  daf?: InputMaybe<Scalars['smallint']>;
  ddf?: InputMaybe<Scalars['smallint']>;
  dds?: InputMaybe<Scalars['String']>;
  dsrdaf?: InputMaybe<Scalars['smallint']>;
  dsrddf?: InputMaybe<Scalars['smallint']>;
  dsruaf?: InputMaybe<Scalars['smallint']>;
  dsrudf?: InputMaybe<Scalars['smallint']>;
  eddi?: InputMaybe<Eddi_Obj_Rel_Insert_Input>;
  fra?: InputMaybe<Scalars['String']>;
  frm?: InputMaybe<Scalars['String']>;
  frs?: InputMaybe<Scalars['String']>;
  groupkey?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  lod?: InputMaybe<Scalars['smallint']>;
  ttl?: InputMaybe<Scalars['smallint']>;
  uaf?: InputMaybe<Scalars['smallint']>;
  udf?: InputMaybe<Scalars['smallint']>;
  zappi?: InputMaybe<Zappi_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Aggregation_Data_Max_Fields = {
  __typename?: 'aggregation_data_max_fields';
  admingroup?: Maybe<Scalars['String']>;
  controlgroup?: Maybe<Scalars['String']>;
  csn?: Maybe<Scalars['smallint']>;
  daf?: Maybe<Scalars['smallint']>;
  ddf?: Maybe<Scalars['smallint']>;
  dds?: Maybe<Scalars['String']>;
  dsrdaf?: Maybe<Scalars['smallint']>;
  dsrddf?: Maybe<Scalars['smallint']>;
  dsruaf?: Maybe<Scalars['smallint']>;
  dsrudf?: Maybe<Scalars['smallint']>;
  fra?: Maybe<Scalars['String']>;
  frm?: Maybe<Scalars['String']>;
  frs?: Maybe<Scalars['String']>;
  groupkey?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lod?: Maybe<Scalars['smallint']>;
  ttl?: Maybe<Scalars['smallint']>;
  uaf?: Maybe<Scalars['smallint']>;
  udf?: Maybe<Scalars['smallint']>;
};

/** aggregate min on columns */
export type Aggregation_Data_Min_Fields = {
  __typename?: 'aggregation_data_min_fields';
  admingroup?: Maybe<Scalars['String']>;
  controlgroup?: Maybe<Scalars['String']>;
  csn?: Maybe<Scalars['smallint']>;
  daf?: Maybe<Scalars['smallint']>;
  ddf?: Maybe<Scalars['smallint']>;
  dds?: Maybe<Scalars['String']>;
  dsrdaf?: Maybe<Scalars['smallint']>;
  dsrddf?: Maybe<Scalars['smallint']>;
  dsruaf?: Maybe<Scalars['smallint']>;
  dsrudf?: Maybe<Scalars['smallint']>;
  fra?: Maybe<Scalars['String']>;
  frm?: Maybe<Scalars['String']>;
  frs?: Maybe<Scalars['String']>;
  groupkey?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lod?: Maybe<Scalars['smallint']>;
  ttl?: Maybe<Scalars['smallint']>;
  uaf?: Maybe<Scalars['smallint']>;
  udf?: Maybe<Scalars['smallint']>;
};

/** response of any mutation on the table "aggregation_data" */
export type Aggregation_Data_Mutation_Response = {
  __typename?: 'aggregation_data_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Aggregation_Data>;
};

/** input type for inserting object relation for remote table "aggregation_data" */
export type Aggregation_Data_Obj_Rel_Insert_Input = {
  data: Aggregation_Data_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Aggregation_Data_On_Conflict>;
};

/** on_conflict condition type for table "aggregation_data" */
export type Aggregation_Data_On_Conflict = {
  constraint: Aggregation_Data_Constraint;
  update_columns?: Array<Aggregation_Data_Update_Column>;
  where?: InputMaybe<Aggregation_Data_Bool_Exp>;
};

/** Ordering options when selecting data from "aggregation_data". */
export type Aggregation_Data_Order_By = {
  admingroup?: InputMaybe<Order_By>;
  controlgroup?: InputMaybe<Order_By>;
  csn?: InputMaybe<Order_By>;
  daf?: InputMaybe<Order_By>;
  ddf?: InputMaybe<Order_By>;
  dds?: InputMaybe<Order_By>;
  dsrdaf?: InputMaybe<Order_By>;
  dsrddf?: InputMaybe<Order_By>;
  dsruaf?: InputMaybe<Order_By>;
  dsrudf?: InputMaybe<Order_By>;
  eddi?: InputMaybe<Eddi_Order_By>;
  fra?: InputMaybe<Order_By>;
  frm?: InputMaybe<Order_By>;
  frs?: InputMaybe<Order_By>;
  groupkey?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lod?: InputMaybe<Order_By>;
  ttl?: InputMaybe<Order_By>;
  uaf?: InputMaybe<Order_By>;
  udf?: InputMaybe<Order_By>;
  zappi?: InputMaybe<Zappi_Order_By>;
};

/** primary key columns input for table: aggregation_data */
export type Aggregation_Data_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "aggregation_data" */
export enum Aggregation_Data_Select_Column {
  /** column name */
  Admingroup = 'admingroup',
  /** column name */
  Controlgroup = 'controlgroup',
  /** column name */
  Csn = 'csn',
  /** column name */
  Daf = 'daf',
  /** column name */
  Ddf = 'ddf',
  /** column name */
  Dds = 'dds',
  /** column name */
  Dsrdaf = 'dsrdaf',
  /** column name */
  Dsrddf = 'dsrddf',
  /** column name */
  Dsruaf = 'dsruaf',
  /** column name */
  Dsrudf = 'dsrudf',
  /** column name */
  Fra = 'fra',
  /** column name */
  Frm = 'frm',
  /** column name */
  Frs = 'frs',
  /** column name */
  Groupkey = 'groupkey',
  /** column name */
  Id = 'id',
  /** column name */
  Lod = 'lod',
  /** column name */
  Ttl = 'ttl',
  /** column name */
  Uaf = 'uaf',
  /** column name */
  Udf = 'udf',
}

/** input type for updating data in table "aggregation_data" */
export type Aggregation_Data_Set_Input = {
  admingroup?: InputMaybe<Scalars['String']>;
  controlgroup?: InputMaybe<Scalars['String']>;
  csn?: InputMaybe<Scalars['smallint']>;
  daf?: InputMaybe<Scalars['smallint']>;
  ddf?: InputMaybe<Scalars['smallint']>;
  dds?: InputMaybe<Scalars['String']>;
  dsrdaf?: InputMaybe<Scalars['smallint']>;
  dsrddf?: InputMaybe<Scalars['smallint']>;
  dsruaf?: InputMaybe<Scalars['smallint']>;
  dsrudf?: InputMaybe<Scalars['smallint']>;
  fra?: InputMaybe<Scalars['String']>;
  frm?: InputMaybe<Scalars['String']>;
  frs?: InputMaybe<Scalars['String']>;
  groupkey?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  lod?: InputMaybe<Scalars['smallint']>;
  ttl?: InputMaybe<Scalars['smallint']>;
  uaf?: InputMaybe<Scalars['smallint']>;
  udf?: InputMaybe<Scalars['smallint']>;
};

/** aggregate stddev on columns */
export type Aggregation_Data_Stddev_Fields = {
  __typename?: 'aggregation_data_stddev_fields';
  csn?: Maybe<Scalars['Float']>;
  daf?: Maybe<Scalars['Float']>;
  ddf?: Maybe<Scalars['Float']>;
  dsrdaf?: Maybe<Scalars['Float']>;
  dsrddf?: Maybe<Scalars['Float']>;
  dsruaf?: Maybe<Scalars['Float']>;
  dsrudf?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lod?: Maybe<Scalars['Float']>;
  ttl?: Maybe<Scalars['Float']>;
  uaf?: Maybe<Scalars['Float']>;
  udf?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Aggregation_Data_Stddev_Pop_Fields = {
  __typename?: 'aggregation_data_stddev_pop_fields';
  csn?: Maybe<Scalars['Float']>;
  daf?: Maybe<Scalars['Float']>;
  ddf?: Maybe<Scalars['Float']>;
  dsrdaf?: Maybe<Scalars['Float']>;
  dsrddf?: Maybe<Scalars['Float']>;
  dsruaf?: Maybe<Scalars['Float']>;
  dsrudf?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lod?: Maybe<Scalars['Float']>;
  ttl?: Maybe<Scalars['Float']>;
  uaf?: Maybe<Scalars['Float']>;
  udf?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Aggregation_Data_Stddev_Samp_Fields = {
  __typename?: 'aggregation_data_stddev_samp_fields';
  csn?: Maybe<Scalars['Float']>;
  daf?: Maybe<Scalars['Float']>;
  ddf?: Maybe<Scalars['Float']>;
  dsrdaf?: Maybe<Scalars['Float']>;
  dsrddf?: Maybe<Scalars['Float']>;
  dsruaf?: Maybe<Scalars['Float']>;
  dsrudf?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lod?: Maybe<Scalars['Float']>;
  ttl?: Maybe<Scalars['Float']>;
  uaf?: Maybe<Scalars['Float']>;
  udf?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Aggregation_Data_Sum_Fields = {
  __typename?: 'aggregation_data_sum_fields';
  csn?: Maybe<Scalars['smallint']>;
  daf?: Maybe<Scalars['smallint']>;
  ddf?: Maybe<Scalars['smallint']>;
  dsrdaf?: Maybe<Scalars['smallint']>;
  dsrddf?: Maybe<Scalars['smallint']>;
  dsruaf?: Maybe<Scalars['smallint']>;
  dsrudf?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['Int']>;
  lod?: Maybe<Scalars['smallint']>;
  ttl?: Maybe<Scalars['smallint']>;
  uaf?: Maybe<Scalars['smallint']>;
  udf?: Maybe<Scalars['smallint']>;
};

/** update columns of table "aggregation_data" */
export enum Aggregation_Data_Update_Column {
  /** column name */
  Admingroup = 'admingroup',
  /** column name */
  Controlgroup = 'controlgroup',
  /** column name */
  Csn = 'csn',
  /** column name */
  Daf = 'daf',
  /** column name */
  Ddf = 'ddf',
  /** column name */
  Dds = 'dds',
  /** column name */
  Dsrdaf = 'dsrdaf',
  /** column name */
  Dsrddf = 'dsrddf',
  /** column name */
  Dsruaf = 'dsruaf',
  /** column name */
  Dsrudf = 'dsrudf',
  /** column name */
  Fra = 'fra',
  /** column name */
  Frm = 'frm',
  /** column name */
  Frs = 'frs',
  /** column name */
  Groupkey = 'groupkey',
  /** column name */
  Id = 'id',
  /** column name */
  Lod = 'lod',
  /** column name */
  Ttl = 'ttl',
  /** column name */
  Uaf = 'uaf',
  /** column name */
  Udf = 'udf',
}

/** aggregate var_pop on columns */
export type Aggregation_Data_Var_Pop_Fields = {
  __typename?: 'aggregation_data_var_pop_fields';
  csn?: Maybe<Scalars['Float']>;
  daf?: Maybe<Scalars['Float']>;
  ddf?: Maybe<Scalars['Float']>;
  dsrdaf?: Maybe<Scalars['Float']>;
  dsrddf?: Maybe<Scalars['Float']>;
  dsruaf?: Maybe<Scalars['Float']>;
  dsrudf?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lod?: Maybe<Scalars['Float']>;
  ttl?: Maybe<Scalars['Float']>;
  uaf?: Maybe<Scalars['Float']>;
  udf?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Aggregation_Data_Var_Samp_Fields = {
  __typename?: 'aggregation_data_var_samp_fields';
  csn?: Maybe<Scalars['Float']>;
  daf?: Maybe<Scalars['Float']>;
  ddf?: Maybe<Scalars['Float']>;
  dsrdaf?: Maybe<Scalars['Float']>;
  dsrddf?: Maybe<Scalars['Float']>;
  dsruaf?: Maybe<Scalars['Float']>;
  dsrudf?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lod?: Maybe<Scalars['Float']>;
  ttl?: Maybe<Scalars['Float']>;
  uaf?: Maybe<Scalars['Float']>;
  udf?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Aggregation_Data_Variance_Fields = {
  __typename?: 'aggregation_data_variance_fields';
  csn?: Maybe<Scalars['Float']>;
  daf?: Maybe<Scalars['Float']>;
  ddf?: Maybe<Scalars['Float']>;
  dsrdaf?: Maybe<Scalars['Float']>;
  dsrddf?: Maybe<Scalars['Float']>;
  dsruaf?: Maybe<Scalars['Float']>;
  dsrudf?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lod?: Maybe<Scalars['Float']>;
  ttl?: Maybe<Scalars['Float']>;
  uaf?: Maybe<Scalars['Float']>;
  udf?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bytea']>;
  _gt?: InputMaybe<Scalars['bytea']>;
  _gte?: InputMaybe<Scalars['bytea']>;
  _in?: InputMaybe<Array<Scalars['bytea']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bytea']>;
  _lte?: InputMaybe<Scalars['bytea']>;
  _neq?: InputMaybe<Scalars['bytea']>;
  _nin?: InputMaybe<Array<Scalars['bytea']>>;
};

/** columns and relationships of "command" */
export type Command = {
  __typename?: 'command';
  commandinitiated: Scalars['timestamptz'];
  commandinitiatorservice?: Maybe<Scalars['command_commandinitiatorservice_enum']>;
  commandinitiatoruserid?: Maybe<Scalars['Int']>;
  commandlastsent?: Maybe<Scalars['timestamptz']>;
  commandparameters?: Maybe<Scalars['jsonb']>;
  commandstate?: Maybe<Scalars['command_commandstate_enum']>;
  commandtries: Scalars['smallint'];
  commandtype?: Maybe<Scalars['command_commandtype_enum']>;
  destinationdeviceaddressraw: Scalars['Int'];
  destinationdevicename?: Maybe<Scalars['command_destinationdevicename_enum']>;
  destinationdeviceserialno: Scalars['bigint'];
  hubipaddress?: Maybe<Scalars['String']>;
  hubnetworkid: Scalars['Int'];
  hubport: Scalars['Int'];
  id: Scalars['uuid'];
  /** An object relationship */
  user?: Maybe<User>;
};

/** columns and relationships of "command" */
export type CommandCommandparametersArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "command" */
export type Command_Aggregate = {
  __typename?: 'command_aggregate';
  aggregate?: Maybe<Command_Aggregate_Fields>;
  nodes: Array<Command>;
};

/** aggregate fields of "command" */
export type Command_Aggregate_Fields = {
  __typename?: 'command_aggregate_fields';
  avg?: Maybe<Command_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Command_Max_Fields>;
  min?: Maybe<Command_Min_Fields>;
  stddev?: Maybe<Command_Stddev_Fields>;
  stddev_pop?: Maybe<Command_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Command_Stddev_Samp_Fields>;
  sum?: Maybe<Command_Sum_Fields>;
  var_pop?: Maybe<Command_Var_Pop_Fields>;
  var_samp?: Maybe<Command_Var_Samp_Fields>;
  variance?: Maybe<Command_Variance_Fields>;
};

/** aggregate fields of "command" */
export type Command_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Command_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "command" */
export type Command_Aggregate_Order_By = {
  avg?: InputMaybe<Command_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Command_Max_Order_By>;
  min?: InputMaybe<Command_Min_Order_By>;
  stddev?: InputMaybe<Command_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Command_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Command_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Command_Sum_Order_By>;
  var_pop?: InputMaybe<Command_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Command_Var_Samp_Order_By>;
  variance?: InputMaybe<Command_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Command_Append_Input = {
  commandparameters?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "command" */
export type Command_Arr_Rel_Insert_Input = {
  data: Array<Command_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Command_On_Conflict>;
};

/** aggregate avg on columns */
export type Command_Avg_Fields = {
  __typename?: 'command_avg_fields';
  commandinitiatoruserid?: Maybe<Scalars['Float']>;
  commandtries?: Maybe<Scalars['Float']>;
  destinationdeviceaddressraw?: Maybe<Scalars['Float']>;
  destinationdeviceserialno?: Maybe<Scalars['Float']>;
  hubnetworkid?: Maybe<Scalars['Float']>;
  hubport?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "command" */
export type Command_Avg_Order_By = {
  commandinitiatoruserid?: InputMaybe<Order_By>;
  commandtries?: InputMaybe<Order_By>;
  destinationdeviceaddressraw?: InputMaybe<Order_By>;
  destinationdeviceserialno?: InputMaybe<Order_By>;
  hubnetworkid?: InputMaybe<Order_By>;
  hubport?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "command". All fields are combined with a logical 'AND'. */
export type Command_Bool_Exp = {
  _and?: InputMaybe<Array<Command_Bool_Exp>>;
  _not?: InputMaybe<Command_Bool_Exp>;
  _or?: InputMaybe<Array<Command_Bool_Exp>>;
  commandinitiated?: InputMaybe<Timestamptz_Comparison_Exp>;
  commandinitiatorservice?: InputMaybe<Command_Commandinitiatorservice_Enum_Comparison_Exp>;
  commandinitiatoruserid?: InputMaybe<Int_Comparison_Exp>;
  commandlastsent?: InputMaybe<Timestamptz_Comparison_Exp>;
  commandparameters?: InputMaybe<Jsonb_Comparison_Exp>;
  commandstate?: InputMaybe<Command_Commandstate_Enum_Comparison_Exp>;
  commandtries?: InputMaybe<Smallint_Comparison_Exp>;
  commandtype?: InputMaybe<Command_Commandtype_Enum_Comparison_Exp>;
  destinationdeviceaddressraw?: InputMaybe<Int_Comparison_Exp>;
  destinationdevicename?: InputMaybe<Command_Destinationdevicename_Enum_Comparison_Exp>;
  destinationdeviceserialno?: InputMaybe<Bigint_Comparison_Exp>;
  hubipaddress?: InputMaybe<String_Comparison_Exp>;
  hubnetworkid?: InputMaybe<Int_Comparison_Exp>;
  hubport?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
};

/** Boolean expression to compare columns of type "command_commandinitiatorservice_enum". All fields are combined with logical 'AND'. */
export type Command_Commandinitiatorservice_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['command_commandinitiatorservice_enum']>;
  _gt?: InputMaybe<Scalars['command_commandinitiatorservice_enum']>;
  _gte?: InputMaybe<Scalars['command_commandinitiatorservice_enum']>;
  _in?: InputMaybe<Array<Scalars['command_commandinitiatorservice_enum']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['command_commandinitiatorservice_enum']>;
  _lte?: InputMaybe<Scalars['command_commandinitiatorservice_enum']>;
  _neq?: InputMaybe<Scalars['command_commandinitiatorservice_enum']>;
  _nin?: InputMaybe<Array<Scalars['command_commandinitiatorservice_enum']>>;
};

/** Boolean expression to compare columns of type "command_commandstate_enum". All fields are combined with logical 'AND'. */
export type Command_Commandstate_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['command_commandstate_enum']>;
  _gt?: InputMaybe<Scalars['command_commandstate_enum']>;
  _gte?: InputMaybe<Scalars['command_commandstate_enum']>;
  _in?: InputMaybe<Array<Scalars['command_commandstate_enum']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['command_commandstate_enum']>;
  _lte?: InputMaybe<Scalars['command_commandstate_enum']>;
  _neq?: InputMaybe<Scalars['command_commandstate_enum']>;
  _nin?: InputMaybe<Array<Scalars['command_commandstate_enum']>>;
};

/** Boolean expression to compare columns of type "command_commandtype_enum". All fields are combined with logical 'AND'. */
export type Command_Commandtype_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['command_commandtype_enum']>;
  _gt?: InputMaybe<Scalars['command_commandtype_enum']>;
  _gte?: InputMaybe<Scalars['command_commandtype_enum']>;
  _in?: InputMaybe<Array<Scalars['command_commandtype_enum']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['command_commandtype_enum']>;
  _lte?: InputMaybe<Scalars['command_commandtype_enum']>;
  _neq?: InputMaybe<Scalars['command_commandtype_enum']>;
  _nin?: InputMaybe<Array<Scalars['command_commandtype_enum']>>;
};

/** unique or primary key constraints on table "command" */
export enum Command_Constraint {
  /** unique or primary key constraint */
  Pk_5bfa4e1cb54b62f512078f3e7cb = 'PK_5bfa4e1cb54b62f512078f3e7cb',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Command_Delete_At_Path_Input = {
  commandparameters?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Command_Delete_Elem_Input = {
  commandparameters?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Command_Delete_Key_Input = {
  commandparameters?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "command_destinationdevicename_enum". All fields are combined with logical 'AND'. */
export type Command_Destinationdevicename_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['command_destinationdevicename_enum']>;
  _gt?: InputMaybe<Scalars['command_destinationdevicename_enum']>;
  _gte?: InputMaybe<Scalars['command_destinationdevicename_enum']>;
  _in?: InputMaybe<Array<Scalars['command_destinationdevicename_enum']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['command_destinationdevicename_enum']>;
  _lte?: InputMaybe<Scalars['command_destinationdevicename_enum']>;
  _neq?: InputMaybe<Scalars['command_destinationdevicename_enum']>;
  _nin?: InputMaybe<Array<Scalars['command_destinationdevicename_enum']>>;
};

/** input type for incrementing numeric columns in table "command" */
export type Command_Inc_Input = {
  commandinitiatoruserid?: InputMaybe<Scalars['Int']>;
  commandtries?: InputMaybe<Scalars['smallint']>;
  destinationdeviceaddressraw?: InputMaybe<Scalars['Int']>;
  destinationdeviceserialno?: InputMaybe<Scalars['bigint']>;
  hubnetworkid?: InputMaybe<Scalars['Int']>;
  hubport?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "command" */
export type Command_Insert_Input = {
  commandinitiated?: InputMaybe<Scalars['timestamptz']>;
  commandinitiatorservice?: InputMaybe<Scalars['command_commandinitiatorservice_enum']>;
  commandinitiatoruserid?: InputMaybe<Scalars['Int']>;
  commandlastsent?: InputMaybe<Scalars['timestamptz']>;
  commandparameters?: InputMaybe<Scalars['jsonb']>;
  commandstate?: InputMaybe<Scalars['command_commandstate_enum']>;
  commandtries?: InputMaybe<Scalars['smallint']>;
  commandtype?: InputMaybe<Scalars['command_commandtype_enum']>;
  destinationdeviceaddressraw?: InputMaybe<Scalars['Int']>;
  destinationdevicename?: InputMaybe<Scalars['command_destinationdevicename_enum']>;
  destinationdeviceserialno?: InputMaybe<Scalars['bigint']>;
  hubipaddress?: InputMaybe<Scalars['String']>;
  hubnetworkid?: InputMaybe<Scalars['Int']>;
  hubport?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Command_Max_Fields = {
  __typename?: 'command_max_fields';
  commandinitiated?: Maybe<Scalars['timestamptz']>;
  commandinitiatoruserid?: Maybe<Scalars['Int']>;
  commandlastsent?: Maybe<Scalars['timestamptz']>;
  commandtries?: Maybe<Scalars['smallint']>;
  destinationdeviceaddressraw?: Maybe<Scalars['Int']>;
  destinationdeviceserialno?: Maybe<Scalars['bigint']>;
  hubipaddress?: Maybe<Scalars['String']>;
  hubnetworkid?: Maybe<Scalars['Int']>;
  hubport?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "command" */
export type Command_Max_Order_By = {
  commandinitiated?: InputMaybe<Order_By>;
  commandinitiatoruserid?: InputMaybe<Order_By>;
  commandlastsent?: InputMaybe<Order_By>;
  commandtries?: InputMaybe<Order_By>;
  destinationdeviceaddressraw?: InputMaybe<Order_By>;
  destinationdeviceserialno?: InputMaybe<Order_By>;
  hubipaddress?: InputMaybe<Order_By>;
  hubnetworkid?: InputMaybe<Order_By>;
  hubport?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Command_Min_Fields = {
  __typename?: 'command_min_fields';
  commandinitiated?: Maybe<Scalars['timestamptz']>;
  commandinitiatoruserid?: Maybe<Scalars['Int']>;
  commandlastsent?: Maybe<Scalars['timestamptz']>;
  commandtries?: Maybe<Scalars['smallint']>;
  destinationdeviceaddressraw?: Maybe<Scalars['Int']>;
  destinationdeviceserialno?: Maybe<Scalars['bigint']>;
  hubipaddress?: Maybe<Scalars['String']>;
  hubnetworkid?: Maybe<Scalars['Int']>;
  hubport?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "command" */
export type Command_Min_Order_By = {
  commandinitiated?: InputMaybe<Order_By>;
  commandinitiatoruserid?: InputMaybe<Order_By>;
  commandlastsent?: InputMaybe<Order_By>;
  commandtries?: InputMaybe<Order_By>;
  destinationdeviceaddressraw?: InputMaybe<Order_By>;
  destinationdeviceserialno?: InputMaybe<Order_By>;
  hubipaddress?: InputMaybe<Order_By>;
  hubnetworkid?: InputMaybe<Order_By>;
  hubport?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "command" */
export type Command_Mutation_Response = {
  __typename?: 'command_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Command>;
};

/** on_conflict condition type for table "command" */
export type Command_On_Conflict = {
  constraint: Command_Constraint;
  update_columns?: Array<Command_Update_Column>;
  where?: InputMaybe<Command_Bool_Exp>;
};

/** Ordering options when selecting data from "command". */
export type Command_Order_By = {
  commandinitiated?: InputMaybe<Order_By>;
  commandinitiatorservice?: InputMaybe<Order_By>;
  commandinitiatoruserid?: InputMaybe<Order_By>;
  commandlastsent?: InputMaybe<Order_By>;
  commandparameters?: InputMaybe<Order_By>;
  commandstate?: InputMaybe<Order_By>;
  commandtries?: InputMaybe<Order_By>;
  commandtype?: InputMaybe<Order_By>;
  destinationdeviceaddressraw?: InputMaybe<Order_By>;
  destinationdevicename?: InputMaybe<Order_By>;
  destinationdeviceserialno?: InputMaybe<Order_By>;
  hubipaddress?: InputMaybe<Order_By>;
  hubnetworkid?: InputMaybe<Order_By>;
  hubport?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
};

/** primary key columns input for table: command */
export type Command_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Command_Prepend_Input = {
  commandparameters?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "command" */
export enum Command_Select_Column {
  /** column name */
  Commandinitiated = 'commandinitiated',
  /** column name */
  Commandinitiatorservice = 'commandinitiatorservice',
  /** column name */
  Commandinitiatoruserid = 'commandinitiatoruserid',
  /** column name */
  Commandlastsent = 'commandlastsent',
  /** column name */
  Commandparameters = 'commandparameters',
  /** column name */
  Commandstate = 'commandstate',
  /** column name */
  Commandtries = 'commandtries',
  /** column name */
  Commandtype = 'commandtype',
  /** column name */
  Destinationdeviceaddressraw = 'destinationdeviceaddressraw',
  /** column name */
  Destinationdevicename = 'destinationdevicename',
  /** column name */
  Destinationdeviceserialno = 'destinationdeviceserialno',
  /** column name */
  Hubipaddress = 'hubipaddress',
  /** column name */
  Hubnetworkid = 'hubnetworkid',
  /** column name */
  Hubport = 'hubport',
  /** column name */
  Id = 'id',
}

/** input type for updating data in table "command" */
export type Command_Set_Input = {
  commandinitiated?: InputMaybe<Scalars['timestamptz']>;
  commandinitiatorservice?: InputMaybe<Scalars['command_commandinitiatorservice_enum']>;
  commandinitiatoruserid?: InputMaybe<Scalars['Int']>;
  commandlastsent?: InputMaybe<Scalars['timestamptz']>;
  commandparameters?: InputMaybe<Scalars['jsonb']>;
  commandstate?: InputMaybe<Scalars['command_commandstate_enum']>;
  commandtries?: InputMaybe<Scalars['smallint']>;
  commandtype?: InputMaybe<Scalars['command_commandtype_enum']>;
  destinationdeviceaddressraw?: InputMaybe<Scalars['Int']>;
  destinationdevicename?: InputMaybe<Scalars['command_destinationdevicename_enum']>;
  destinationdeviceserialno?: InputMaybe<Scalars['bigint']>;
  hubipaddress?: InputMaybe<Scalars['String']>;
  hubnetworkid?: InputMaybe<Scalars['Int']>;
  hubport?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Command_Stddev_Fields = {
  __typename?: 'command_stddev_fields';
  commandinitiatoruserid?: Maybe<Scalars['Float']>;
  commandtries?: Maybe<Scalars['Float']>;
  destinationdeviceaddressraw?: Maybe<Scalars['Float']>;
  destinationdeviceserialno?: Maybe<Scalars['Float']>;
  hubnetworkid?: Maybe<Scalars['Float']>;
  hubport?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "command" */
export type Command_Stddev_Order_By = {
  commandinitiatoruserid?: InputMaybe<Order_By>;
  commandtries?: InputMaybe<Order_By>;
  destinationdeviceaddressraw?: InputMaybe<Order_By>;
  destinationdeviceserialno?: InputMaybe<Order_By>;
  hubnetworkid?: InputMaybe<Order_By>;
  hubport?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Command_Stddev_Pop_Fields = {
  __typename?: 'command_stddev_pop_fields';
  commandinitiatoruserid?: Maybe<Scalars['Float']>;
  commandtries?: Maybe<Scalars['Float']>;
  destinationdeviceaddressraw?: Maybe<Scalars['Float']>;
  destinationdeviceserialno?: Maybe<Scalars['Float']>;
  hubnetworkid?: Maybe<Scalars['Float']>;
  hubport?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "command" */
export type Command_Stddev_Pop_Order_By = {
  commandinitiatoruserid?: InputMaybe<Order_By>;
  commandtries?: InputMaybe<Order_By>;
  destinationdeviceaddressraw?: InputMaybe<Order_By>;
  destinationdeviceserialno?: InputMaybe<Order_By>;
  hubnetworkid?: InputMaybe<Order_By>;
  hubport?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Command_Stddev_Samp_Fields = {
  __typename?: 'command_stddev_samp_fields';
  commandinitiatoruserid?: Maybe<Scalars['Float']>;
  commandtries?: Maybe<Scalars['Float']>;
  destinationdeviceaddressraw?: Maybe<Scalars['Float']>;
  destinationdeviceserialno?: Maybe<Scalars['Float']>;
  hubnetworkid?: Maybe<Scalars['Float']>;
  hubport?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "command" */
export type Command_Stddev_Samp_Order_By = {
  commandinitiatoruserid?: InputMaybe<Order_By>;
  commandtries?: InputMaybe<Order_By>;
  destinationdeviceaddressraw?: InputMaybe<Order_By>;
  destinationdeviceserialno?: InputMaybe<Order_By>;
  hubnetworkid?: InputMaybe<Order_By>;
  hubport?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Command_Sum_Fields = {
  __typename?: 'command_sum_fields';
  commandinitiatoruserid?: Maybe<Scalars['Int']>;
  commandtries?: Maybe<Scalars['smallint']>;
  destinationdeviceaddressraw?: Maybe<Scalars['Int']>;
  destinationdeviceserialno?: Maybe<Scalars['bigint']>;
  hubnetworkid?: Maybe<Scalars['Int']>;
  hubport?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "command" */
export type Command_Sum_Order_By = {
  commandinitiatoruserid?: InputMaybe<Order_By>;
  commandtries?: InputMaybe<Order_By>;
  destinationdeviceaddressraw?: InputMaybe<Order_By>;
  destinationdeviceserialno?: InputMaybe<Order_By>;
  hubnetworkid?: InputMaybe<Order_By>;
  hubport?: InputMaybe<Order_By>;
};

/** update columns of table "command" */
export enum Command_Update_Column {
  /** column name */
  Commandinitiated = 'commandinitiated',
  /** column name */
  Commandinitiatorservice = 'commandinitiatorservice',
  /** column name */
  Commandinitiatoruserid = 'commandinitiatoruserid',
  /** column name */
  Commandlastsent = 'commandlastsent',
  /** column name */
  Commandparameters = 'commandparameters',
  /** column name */
  Commandstate = 'commandstate',
  /** column name */
  Commandtries = 'commandtries',
  /** column name */
  Commandtype = 'commandtype',
  /** column name */
  Destinationdeviceaddressraw = 'destinationdeviceaddressraw',
  /** column name */
  Destinationdevicename = 'destinationdevicename',
  /** column name */
  Destinationdeviceserialno = 'destinationdeviceserialno',
  /** column name */
  Hubipaddress = 'hubipaddress',
  /** column name */
  Hubnetworkid = 'hubnetworkid',
  /** column name */
  Hubport = 'hubport',
  /** column name */
  Id = 'id',
}

/** aggregate var_pop on columns */
export type Command_Var_Pop_Fields = {
  __typename?: 'command_var_pop_fields';
  commandinitiatoruserid?: Maybe<Scalars['Float']>;
  commandtries?: Maybe<Scalars['Float']>;
  destinationdeviceaddressraw?: Maybe<Scalars['Float']>;
  destinationdeviceserialno?: Maybe<Scalars['Float']>;
  hubnetworkid?: Maybe<Scalars['Float']>;
  hubport?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "command" */
export type Command_Var_Pop_Order_By = {
  commandinitiatoruserid?: InputMaybe<Order_By>;
  commandtries?: InputMaybe<Order_By>;
  destinationdeviceaddressraw?: InputMaybe<Order_By>;
  destinationdeviceserialno?: InputMaybe<Order_By>;
  hubnetworkid?: InputMaybe<Order_By>;
  hubport?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Command_Var_Samp_Fields = {
  __typename?: 'command_var_samp_fields';
  commandinitiatoruserid?: Maybe<Scalars['Float']>;
  commandtries?: Maybe<Scalars['Float']>;
  destinationdeviceaddressraw?: Maybe<Scalars['Float']>;
  destinationdeviceserialno?: Maybe<Scalars['Float']>;
  hubnetworkid?: Maybe<Scalars['Float']>;
  hubport?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "command" */
export type Command_Var_Samp_Order_By = {
  commandinitiatoruserid?: InputMaybe<Order_By>;
  commandtries?: InputMaybe<Order_By>;
  destinationdeviceaddressraw?: InputMaybe<Order_By>;
  destinationdeviceserialno?: InputMaybe<Order_By>;
  hubnetworkid?: InputMaybe<Order_By>;
  hubport?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Command_Variance_Fields = {
  __typename?: 'command_variance_fields';
  commandinitiatoruserid?: Maybe<Scalars['Float']>;
  commandtries?: Maybe<Scalars['Float']>;
  destinationdeviceaddressraw?: Maybe<Scalars['Float']>;
  destinationdeviceserialno?: Maybe<Scalars['Float']>;
  hubnetworkid?: Maybe<Scalars['Float']>;
  hubport?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "command" */
export type Command_Variance_Order_By = {
  commandinitiatoruserid?: InputMaybe<Order_By>;
  commandtries?: InputMaybe<Order_By>;
  destinationdeviceaddressraw?: InputMaybe<Order_By>;
  destinationdeviceserialno?: InputMaybe<Order_By>;
  hubnetworkid?: InputMaybe<Order_By>;
  hubport?: InputMaybe<Order_By>;
};

/** columns and relationships of "control_group" */
export type Control_Group = {
  __typename?: 'control_group';
  /** An object relationship */
  admin_group: Admin_Group;
  admin_group_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  devices: Array<Control_Group_Device>;
  /** An aggregate relationship */
  devices_aggregate: Control_Group_Device_Aggregate;
  id: Scalars['Int'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "control_group" */
export type Control_GroupDevicesArgs = {
  distinct_on?: InputMaybe<Array<Control_Group_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Control_Group_Device_Order_By>>;
  where?: InputMaybe<Control_Group_Device_Bool_Exp>;
};

/** columns and relationships of "control_group" */
export type Control_GroupDevices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Control_Group_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Control_Group_Device_Order_By>>;
  where?: InputMaybe<Control_Group_Device_Bool_Exp>;
};

/** aggregated selection of "control_group" */
export type Control_Group_Aggregate = {
  __typename?: 'control_group_aggregate';
  aggregate?: Maybe<Control_Group_Aggregate_Fields>;
  nodes: Array<Control_Group>;
};

/** aggregate fields of "control_group" */
export type Control_Group_Aggregate_Fields = {
  __typename?: 'control_group_aggregate_fields';
  avg?: Maybe<Control_Group_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Control_Group_Max_Fields>;
  min?: Maybe<Control_Group_Min_Fields>;
  stddev?: Maybe<Control_Group_Stddev_Fields>;
  stddev_pop?: Maybe<Control_Group_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Control_Group_Stddev_Samp_Fields>;
  sum?: Maybe<Control_Group_Sum_Fields>;
  var_pop?: Maybe<Control_Group_Var_Pop_Fields>;
  var_samp?: Maybe<Control_Group_Var_Samp_Fields>;
  variance?: Maybe<Control_Group_Variance_Fields>;
};

/** aggregate fields of "control_group" */
export type Control_Group_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Control_Group_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "control_group" */
export type Control_Group_Aggregate_Order_By = {
  avg?: InputMaybe<Control_Group_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Control_Group_Max_Order_By>;
  min?: InputMaybe<Control_Group_Min_Order_By>;
  stddev?: InputMaybe<Control_Group_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Control_Group_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Control_Group_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Control_Group_Sum_Order_By>;
  var_pop?: InputMaybe<Control_Group_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Control_Group_Var_Samp_Order_By>;
  variance?: InputMaybe<Control_Group_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "control_group" */
export type Control_Group_Arr_Rel_Insert_Input = {
  data: Array<Control_Group_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Control_Group_On_Conflict>;
};

/** aggregate avg on columns */
export type Control_Group_Avg_Fields = {
  __typename?: 'control_group_avg_fields';
  admin_group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "control_group" */
export type Control_Group_Avg_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "control_group". All fields are combined with a logical 'AND'. */
export type Control_Group_Bool_Exp = {
  _and?: InputMaybe<Array<Control_Group_Bool_Exp>>;
  _not?: InputMaybe<Control_Group_Bool_Exp>;
  _or?: InputMaybe<Array<Control_Group_Bool_Exp>>;
  admin_group?: InputMaybe<Admin_Group_Bool_Exp>;
  admin_group_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  devices?: InputMaybe<Control_Group_Device_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "control_group" */
export enum Control_Group_Constraint {
  /** unique or primary key constraint */
  ControlGroupPkey = 'control_group_pkey',
}

/** columns and relationships of "control_group_device" */
export type Control_Group_Device = {
  __typename?: 'control_group_device';
  /** An object relationship */
  admin_group_device: Admin_Group_Device;
  admin_group_id: Scalars['Int'];
  /** An object relationship */
  control_group: Control_Group;
  control_group_device_eddi?: Maybe<Eddi>;
  control_group_device_zappi?: Maybe<Zappi>;
  control_group_history_eddi?: Maybe<Eddi_Minute>;
  control_group_history_zappi?: Maybe<Zappi_Minute>;
  control_group_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  deviceTypeByDeviceType: Device_Type;
  device_type: Device_Type_Enum;
  id: Scalars['Int'];
  serialno: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "control_group_device" */
export type Control_Group_Device_Aggregate = {
  __typename?: 'control_group_device_aggregate';
  aggregate?: Maybe<Control_Group_Device_Aggregate_Fields>;
  nodes: Array<Control_Group_Device>;
};

/** aggregate fields of "control_group_device" */
export type Control_Group_Device_Aggregate_Fields = {
  __typename?: 'control_group_device_aggregate_fields';
  avg?: Maybe<Control_Group_Device_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Control_Group_Device_Max_Fields>;
  min?: Maybe<Control_Group_Device_Min_Fields>;
  stddev?: Maybe<Control_Group_Device_Stddev_Fields>;
  stddev_pop?: Maybe<Control_Group_Device_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Control_Group_Device_Stddev_Samp_Fields>;
  sum?: Maybe<Control_Group_Device_Sum_Fields>;
  var_pop?: Maybe<Control_Group_Device_Var_Pop_Fields>;
  var_samp?: Maybe<Control_Group_Device_Var_Samp_Fields>;
  variance?: Maybe<Control_Group_Device_Variance_Fields>;
};

/** aggregate fields of "control_group_device" */
export type Control_Group_Device_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Control_Group_Device_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "control_group_device" */
export type Control_Group_Device_Aggregate_Order_By = {
  avg?: InputMaybe<Control_Group_Device_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Control_Group_Device_Max_Order_By>;
  min?: InputMaybe<Control_Group_Device_Min_Order_By>;
  stddev?: InputMaybe<Control_Group_Device_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Control_Group_Device_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Control_Group_Device_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Control_Group_Device_Sum_Order_By>;
  var_pop?: InputMaybe<Control_Group_Device_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Control_Group_Device_Var_Samp_Order_By>;
  variance?: InputMaybe<Control_Group_Device_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "control_group_device" */
export type Control_Group_Device_Arr_Rel_Insert_Input = {
  data: Array<Control_Group_Device_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Control_Group_Device_On_Conflict>;
};

/** aggregate avg on columns */
export type Control_Group_Device_Avg_Fields = {
  __typename?: 'control_group_device_avg_fields';
  admin_group_id?: Maybe<Scalars['Float']>;
  control_group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "control_group_device" */
export type Control_Group_Device_Avg_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  control_group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "control_group_device". All fields are combined with a logical 'AND'. */
export type Control_Group_Device_Bool_Exp = {
  _and?: InputMaybe<Array<Control_Group_Device_Bool_Exp>>;
  _not?: InputMaybe<Control_Group_Device_Bool_Exp>;
  _or?: InputMaybe<Array<Control_Group_Device_Bool_Exp>>;
  admin_group_device?: InputMaybe<Admin_Group_Device_Bool_Exp>;
  admin_group_id?: InputMaybe<Int_Comparison_Exp>;
  control_group?: InputMaybe<Control_Group_Bool_Exp>;
  control_group_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deviceTypeByDeviceType?: InputMaybe<Device_Type_Bool_Exp>;
  device_type?: InputMaybe<Device_Type_Enum_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  serialno?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "control_group_device" */
export enum Control_Group_Device_Constraint {
  /** unique or primary key constraint */
  ControlGroupDevicePkey = 'control_group_device_pkey',
  /** unique or primary key constraint */
  ControlGroupDeviceSerialNoControlGroupIdKey = 'control_group_device_serial_no_control_group_id_key',
}

/** input type for incrementing numeric columns in table "control_group_device" */
export type Control_Group_Device_Inc_Input = {
  admin_group_id?: InputMaybe<Scalars['Int']>;
  control_group_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  serialno?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "control_group_device" */
export type Control_Group_Device_Insert_Input = {
  admin_group_device?: InputMaybe<Admin_Group_Device_Obj_Rel_Insert_Input>;
  admin_group_id?: InputMaybe<Scalars['Int']>;
  control_group?: InputMaybe<Control_Group_Obj_Rel_Insert_Input>;
  control_group_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  deviceTypeByDeviceType?: InputMaybe<Device_Type_Obj_Rel_Insert_Input>;
  device_type?: InputMaybe<Device_Type_Enum>;
  id?: InputMaybe<Scalars['Int']>;
  serialno?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Control_Group_Device_Max_Fields = {
  __typename?: 'control_group_device_max_fields';
  admin_group_id?: Maybe<Scalars['Int']>;
  control_group_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  serialno?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "control_group_device" */
export type Control_Group_Device_Max_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  control_group_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Control_Group_Device_Min_Fields = {
  __typename?: 'control_group_device_min_fields';
  admin_group_id?: Maybe<Scalars['Int']>;
  control_group_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  serialno?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "control_group_device" */
export type Control_Group_Device_Min_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  control_group_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "control_group_device" */
export type Control_Group_Device_Mutation_Response = {
  __typename?: 'control_group_device_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Control_Group_Device>;
};

/** on_conflict condition type for table "control_group_device" */
export type Control_Group_Device_On_Conflict = {
  constraint: Control_Group_Device_Constraint;
  update_columns?: Array<Control_Group_Device_Update_Column>;
  where?: InputMaybe<Control_Group_Device_Bool_Exp>;
};

/** Ordering options when selecting data from "control_group_device". */
export type Control_Group_Device_Order_By = {
  admin_group_device?: InputMaybe<Admin_Group_Device_Order_By>;
  admin_group_id?: InputMaybe<Order_By>;
  control_group?: InputMaybe<Control_Group_Order_By>;
  control_group_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deviceTypeByDeviceType?: InputMaybe<Device_Type_Order_By>;
  device_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: control_group_device */
export type Control_Group_Device_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "control_group_device" */
export enum Control_Group_Device_Select_Column {
  /** column name */
  AdminGroupId = 'admin_group_id',
  /** column name */
  ControlGroupId = 'control_group_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeviceType = 'device_type',
  /** column name */
  Id = 'id',
  /** column name */
  Serialno = 'serialno',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "control_group_device" */
export type Control_Group_Device_Set_Input = {
  admin_group_id?: InputMaybe<Scalars['Int']>;
  control_group_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  device_type?: InputMaybe<Device_Type_Enum>;
  id?: InputMaybe<Scalars['Int']>;
  serialno?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Control_Group_Device_Stddev_Fields = {
  __typename?: 'control_group_device_stddev_fields';
  admin_group_id?: Maybe<Scalars['Float']>;
  control_group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "control_group_device" */
export type Control_Group_Device_Stddev_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  control_group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Control_Group_Device_Stddev_Pop_Fields = {
  __typename?: 'control_group_device_stddev_pop_fields';
  admin_group_id?: Maybe<Scalars['Float']>;
  control_group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "control_group_device" */
export type Control_Group_Device_Stddev_Pop_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  control_group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Control_Group_Device_Stddev_Samp_Fields = {
  __typename?: 'control_group_device_stddev_samp_fields';
  admin_group_id?: Maybe<Scalars['Float']>;
  control_group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "control_group_device" */
export type Control_Group_Device_Stddev_Samp_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  control_group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Control_Group_Device_Sum_Fields = {
  __typename?: 'control_group_device_sum_fields';
  admin_group_id?: Maybe<Scalars['Int']>;
  control_group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  serialno?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "control_group_device" */
export type Control_Group_Device_Sum_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  control_group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
};

/** update columns of table "control_group_device" */
export enum Control_Group_Device_Update_Column {
  /** column name */
  AdminGroupId = 'admin_group_id',
  /** column name */
  ControlGroupId = 'control_group_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeviceType = 'device_type',
  /** column name */
  Id = 'id',
  /** column name */
  Serialno = 'serialno',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Control_Group_Device_Var_Pop_Fields = {
  __typename?: 'control_group_device_var_pop_fields';
  admin_group_id?: Maybe<Scalars['Float']>;
  control_group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "control_group_device" */
export type Control_Group_Device_Var_Pop_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  control_group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Control_Group_Device_Var_Samp_Fields = {
  __typename?: 'control_group_device_var_samp_fields';
  admin_group_id?: Maybe<Scalars['Float']>;
  control_group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "control_group_device" */
export type Control_Group_Device_Var_Samp_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  control_group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Control_Group_Device_Variance_Fields = {
  __typename?: 'control_group_device_variance_fields';
  admin_group_id?: Maybe<Scalars['Float']>;
  control_group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "control_group_device" */
export type Control_Group_Device_Variance_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  control_group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
};

/** input type for incrementing numeric columns in table "control_group" */
export type Control_Group_Inc_Input = {
  admin_group_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "control_group" */
export type Control_Group_Insert_Input = {
  admin_group?: InputMaybe<Admin_Group_Obj_Rel_Insert_Input>;
  admin_group_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  devices?: InputMaybe<Control_Group_Device_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Control_Group_Max_Fields = {
  __typename?: 'control_group_max_fields';
  admin_group_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "control_group" */
export type Control_Group_Max_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Control_Group_Min_Fields = {
  __typename?: 'control_group_min_fields';
  admin_group_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "control_group" */
export type Control_Group_Min_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "control_group" */
export type Control_Group_Mutation_Response = {
  __typename?: 'control_group_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Control_Group>;
};

/** input type for inserting object relation for remote table "control_group" */
export type Control_Group_Obj_Rel_Insert_Input = {
  data: Control_Group_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Control_Group_On_Conflict>;
};

/** on_conflict condition type for table "control_group" */
export type Control_Group_On_Conflict = {
  constraint: Control_Group_Constraint;
  update_columns?: Array<Control_Group_Update_Column>;
  where?: InputMaybe<Control_Group_Bool_Exp>;
};

/** Ordering options when selecting data from "control_group". */
export type Control_Group_Order_By = {
  admin_group?: InputMaybe<Admin_Group_Order_By>;
  admin_group_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  devices_aggregate?: InputMaybe<Control_Group_Device_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: control_group */
export type Control_Group_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "control_group" */
export enum Control_Group_Select_Column {
  /** column name */
  AdminGroupId = 'admin_group_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "control_group" */
export type Control_Group_Set_Input = {
  admin_group_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Control_Group_Stddev_Fields = {
  __typename?: 'control_group_stddev_fields';
  admin_group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "control_group" */
export type Control_Group_Stddev_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Control_Group_Stddev_Pop_Fields = {
  __typename?: 'control_group_stddev_pop_fields';
  admin_group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "control_group" */
export type Control_Group_Stddev_Pop_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Control_Group_Stddev_Samp_Fields = {
  __typename?: 'control_group_stddev_samp_fields';
  admin_group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "control_group" */
export type Control_Group_Stddev_Samp_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Control_Group_Sum_Fields = {
  __typename?: 'control_group_sum_fields';
  admin_group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "control_group" */
export type Control_Group_Sum_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "control_group" */
export enum Control_Group_Update_Column {
  /** column name */
  AdminGroupId = 'admin_group_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Control_Group_Var_Pop_Fields = {
  __typename?: 'control_group_var_pop_fields';
  admin_group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "control_group" */
export type Control_Group_Var_Pop_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Control_Group_Var_Samp_Fields = {
  __typename?: 'control_group_var_samp_fields';
  admin_group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "control_group" */
export type Control_Group_Var_Samp_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Control_Group_Variance_Fields = {
  __typename?: 'control_group_variance_fields';
  admin_group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "control_group" */
export type Control_Group_Variance_Order_By = {
  admin_group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "device_type" */
export type Device_Type = {
  __typename?: 'device_type';
  /** An array relationship */
  admin_group_devices: Array<Admin_Group_Device>;
  /** An aggregate relationship */
  admin_group_devices_aggregate: Admin_Group_Device_Aggregate;
  comment?: Maybe<Scalars['String']>;
  /** An array relationship */
  control_group_devices: Array<Control_Group_Device>;
  /** An aggregate relationship */
  control_group_devices_aggregate: Control_Group_Device_Aggregate;
  value: Scalars['String'];
};

/** columns and relationships of "device_type" */
export type Device_TypeAdmin_Group_DevicesArgs = {
  distinct_on?: InputMaybe<Array<Admin_Group_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Group_Device_Order_By>>;
  where?: InputMaybe<Admin_Group_Device_Bool_Exp>;
};

/** columns and relationships of "device_type" */
export type Device_TypeAdmin_Group_Devices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Group_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Group_Device_Order_By>>;
  where?: InputMaybe<Admin_Group_Device_Bool_Exp>;
};

/** columns and relationships of "device_type" */
export type Device_TypeControl_Group_DevicesArgs = {
  distinct_on?: InputMaybe<Array<Control_Group_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Control_Group_Device_Order_By>>;
  where?: InputMaybe<Control_Group_Device_Bool_Exp>;
};

/** columns and relationships of "device_type" */
export type Device_TypeControl_Group_Devices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Control_Group_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Control_Group_Device_Order_By>>;
  where?: InputMaybe<Control_Group_Device_Bool_Exp>;
};

/** aggregated selection of "device_type" */
export type Device_Type_Aggregate = {
  __typename?: 'device_type_aggregate';
  aggregate?: Maybe<Device_Type_Aggregate_Fields>;
  nodes: Array<Device_Type>;
};

/** aggregate fields of "device_type" */
export type Device_Type_Aggregate_Fields = {
  __typename?: 'device_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Device_Type_Max_Fields>;
  min?: Maybe<Device_Type_Min_Fields>;
};

/** aggregate fields of "device_type" */
export type Device_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Device_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "device_type". All fields are combined with a logical 'AND'. */
export type Device_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Device_Type_Bool_Exp>>;
  _not?: InputMaybe<Device_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Device_Type_Bool_Exp>>;
  admin_group_devices?: InputMaybe<Admin_Group_Device_Bool_Exp>;
  comment?: InputMaybe<String_Comparison_Exp>;
  control_group_devices?: InputMaybe<Control_Group_Device_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "device_type" */
export enum Device_Type_Constraint {
  /** unique or primary key constraint */
  DeviceTypePkey = 'device_type_pkey',
}

export enum Device_Type_Enum {
  /** Heater */
  Eddi = 'eddi',
  /** Car charger */
  Zappi = 'zappi',
}

/** Boolean expression to compare columns of type "device_type_enum". All fields are combined with logical 'AND'. */
export type Device_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Device_Type_Enum>;
  _in?: InputMaybe<Array<Device_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Device_Type_Enum>;
  _nin?: InputMaybe<Array<Device_Type_Enum>>;
};

/** input type for inserting data into table "device_type" */
export type Device_Type_Insert_Input = {
  admin_group_devices?: InputMaybe<Admin_Group_Device_Arr_Rel_Insert_Input>;
  comment?: InputMaybe<Scalars['String']>;
  control_group_devices?: InputMaybe<Control_Group_Device_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Device_Type_Max_Fields = {
  __typename?: 'device_type_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Device_Type_Min_Fields = {
  __typename?: 'device_type_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "device_type" */
export type Device_Type_Mutation_Response = {
  __typename?: 'device_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Device_Type>;
};

/** input type for inserting object relation for remote table "device_type" */
export type Device_Type_Obj_Rel_Insert_Input = {
  data: Device_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Device_Type_On_Conflict>;
};

/** on_conflict condition type for table "device_type" */
export type Device_Type_On_Conflict = {
  constraint: Device_Type_Constraint;
  update_columns?: Array<Device_Type_Update_Column>;
  where?: InputMaybe<Device_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "device_type". */
export type Device_Type_Order_By = {
  admin_group_devices_aggregate?: InputMaybe<Admin_Group_Device_Aggregate_Order_By>;
  comment?: InputMaybe<Order_By>;
  control_group_devices_aggregate?: InputMaybe<Control_Group_Device_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: device_type */
export type Device_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "device_type" */
export enum Device_Type_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "device_type" */
export type Device_Type_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "device_type" */
export enum Device_Type_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value',
}

/** columns and relationships of "eddi" */
export type Eddi = {
  __typename?: 'eddi';
  agggroupno?: Maybe<Scalars['Int']>;
  agglock?: Maybe<Scalars['smallint']>;
  /** An object relationship */
  aggregation_datum?: Maybe<Aggregation_Data>;
  aggregationdataid?: Maybe<Scalars['Int']>;
  boardtype?: Maybe<Scalars['String']>;
  boostmanual?: Maybe<Scalars['Boolean']>;
  boosttimed?: Maybe<Scalars['Boolean']>;
  bootloaderversion?: Maybe<Scalars['Int']>;
  chargeenergy?: Maybe<Scalars['Float']>;
  checkperiod?: Maybe<Scalars['smallint']>;
  commandseqno: Scalars['smallint'];
  configappdata?: Maybe<Scalars['bytea']>;
  configappdone: Scalars['Boolean'];
  configbootdata?: Maybe<Scalars['bytea']>;
  configbootdone: Scalars['Boolean'];
  configlength?: Maybe<Scalars['smallint']>;
  configoffset?: Maybe<Scalars['smallint']>;
  configstate?: Maybe<Scalars['smallint']>;
  configstructure?: Maybe<Scalars['smallint']>;
  configversion?: Maybe<Scalars['smallint']>;
  createdat?: Maybe<Scalars['timestamptz']>;
  ct1?: Maybe<Scalars['jsonb']>;
  ct2?: Maybe<Scalars['jsonb']>;
  ct2absent?: Maybe<Scalars['smallint']>;
  ct3?: Maybe<Scalars['jsonb']>;
  ct3absent?: Maybe<Scalars['smallint']>;
  ct4?: Maybe<Scalars['jsonb']>;
  ct5?: Maybe<Scalars['jsonb']>;
  ct6?: Maybe<Scalars['jsonb']>;
  ct7?: Maybe<Scalars['jsonb']>;
  ct8?: Maybe<Scalars['jsonb']>;
  ct9?: Maybe<Scalars['jsonb']>;
  ct10?: Maybe<Scalars['jsonb']>;
  ct11?: Maybe<Scalars['jsonb']>;
  ct12?: Maybe<Scalars['jsonb']>;
  ct13?: Maybe<Scalars['jsonb']>;
  ct14?: Maybe<Scalars['jsonb']>;
  ct15?: Maybe<Scalars['jsonb']>;
  ct16?: Maybe<Scalars['jsonb']>;
  currentboostremaining?: Maybe<Scalars['smallint']>;
  currentversion?: Maybe<Scalars['Int']>;
  deviceaddressraw: Scalars['Int'];
  deviceclass: Scalars['String'];
  deviceconfigtime?: Maybe<Scalars['bigint']>;
  deviceinstance?: Maybe<Scalars['Int']>;
  dsrdataack?: Maybe<Scalars['smallint']>;
  dsrdatacsn?: Maybe<Scalars['smallint']>;
  dsrdatafda?: Maybe<Scalars['Boolean']>;
  dsrdatafde?: Maybe<Scalars['Boolean']>;
  dsrdatafdn?: Maybe<Scalars['Boolean']>;
  dsrdatafua?: Maybe<Scalars['Boolean']>;
  dsrdatafue?: Maybe<Scalars['Boolean']>;
  dsrdatafun?: Maybe<Scalars['Boolean']>;
  dsrdatalca?: Maybe<Scalars['Boolean']>;
  dsrdatalce?: Maybe<Scalars['Boolean']>;
  dsrdataload?: Maybe<Scalars['smallint']>;
  dsrdataseconds?: Maybe<Scalars['smallint']>;
  eddi_control_group_device?: Maybe<Control_Group_Device>;
  ethernetfitted?: Maybe<Scalars['Boolean']>;
  ethernetlink?: Maybe<Scalars['Boolean']>;
  ethernetmacaddress?: Maybe<Scalars['macaddr']>;
  ethernetspeed?: Maybe<Scalars['String']>;
  frequency?: Maybe<Scalars['smallint']>;
  heaterno: Scalars['smallint'];
  heatertype1?: Maybe<Scalars['String']>;
  heatertype2?: Maybe<Scalars['String']>;
  highpower?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  hub?: Maybe<Hub>;
  hubserialno?: Maybe<Scalars['bigint']>;
  isaggregated: Scalars['Boolean'];
  maxpower?: Maybe<Scalars['Int']>;
  melibversion?: Maybe<Scalars['Int']>;
  melinkversion?: Maybe<Scalars['Int']>;
  microprocessorti?: Maybe<Scalars['Boolean']>;
  minpower?: Maybe<Scalars['Int']>;
  phase?: Maybe<Scalars['smallint']>;
  priority?: Maybe<Scalars['smallint']>;
  prioritychanges?: Maybe<Scalars['smallint']>;
  productcode?: Maybe<Scalars['smallint']>;
  pt1?: Maybe<Scalars['jsonb']>;
  pt2?: Maybe<Scalars['jsonb']>;
  relayboarddataboardconnected?: Maybe<Scalars['Boolean']>;
  relayboarddataesenseactive?: Maybe<Scalars['Boolean']>;
  relayboarddatarelay1active?: Maybe<Scalars['Boolean']>;
  relayboarddatarelay1boosttype?: Maybe<Scalars['String']>;
  relayboarddatarelay2active?: Maybe<Scalars['Boolean']>;
  relayboarddatarelay2boosttype?: Maybe<Scalars['String']>;
  serialno: Scalars['bigint'];
  serverconfigtime?: Maybe<Scalars['Int']>;
  specialversion?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  stubloaderversion?: Maybe<Scalars['Int']>;
  updatedat: Scalars['timestamptz'];
  vhub?: Maybe<Scalars['Boolean']>;
  voltage?: Maybe<Scalars['smallint']>;
  wifilink?: Maybe<Scalars['Boolean']>;
};

/** columns and relationships of "eddi" */
export type EddiCt1Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "eddi" */
export type EddiCt2Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "eddi" */
export type EddiCt3Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "eddi" */
export type EddiCt4Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "eddi" */
export type EddiCt5Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "eddi" */
export type EddiCt6Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "eddi" */
export type EddiCt7Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "eddi" */
export type EddiCt8Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "eddi" */
export type EddiCt9Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "eddi" */
export type EddiCt10Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "eddi" */
export type EddiCt11Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "eddi" */
export type EddiCt12Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "eddi" */
export type EddiCt13Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "eddi" */
export type EddiCt14Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "eddi" */
export type EddiCt15Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "eddi" */
export type EddiCt16Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "eddi" */
export type EddiPt1Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "eddi" */
export type EddiPt2Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "eddi" */
export type Eddi_Aggregate = {
  __typename?: 'eddi_aggregate';
  aggregate?: Maybe<Eddi_Aggregate_Fields>;
  nodes: Array<Eddi>;
};

/** aggregate fields of "eddi" */
export type Eddi_Aggregate_Fields = {
  __typename?: 'eddi_aggregate_fields';
  avg?: Maybe<Eddi_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Eddi_Max_Fields>;
  min?: Maybe<Eddi_Min_Fields>;
  stddev?: Maybe<Eddi_Stddev_Fields>;
  stddev_pop?: Maybe<Eddi_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Eddi_Stddev_Samp_Fields>;
  sum?: Maybe<Eddi_Sum_Fields>;
  var_pop?: Maybe<Eddi_Var_Pop_Fields>;
  var_samp?: Maybe<Eddi_Var_Samp_Fields>;
  variance?: Maybe<Eddi_Variance_Fields>;
};

/** aggregate fields of "eddi" */
export type Eddi_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Eddi_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "eddi" */
export type Eddi_Aggregate_Order_By = {
  avg?: InputMaybe<Eddi_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Eddi_Max_Order_By>;
  min?: InputMaybe<Eddi_Min_Order_By>;
  stddev?: InputMaybe<Eddi_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Eddi_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Eddi_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Eddi_Sum_Order_By>;
  var_pop?: InputMaybe<Eddi_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Eddi_Var_Samp_Order_By>;
  variance?: InputMaybe<Eddi_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Eddi_Append_Input = {
  ct1?: InputMaybe<Scalars['jsonb']>;
  ct2?: InputMaybe<Scalars['jsonb']>;
  ct3?: InputMaybe<Scalars['jsonb']>;
  ct4?: InputMaybe<Scalars['jsonb']>;
  ct5?: InputMaybe<Scalars['jsonb']>;
  ct6?: InputMaybe<Scalars['jsonb']>;
  ct7?: InputMaybe<Scalars['jsonb']>;
  ct8?: InputMaybe<Scalars['jsonb']>;
  ct9?: InputMaybe<Scalars['jsonb']>;
  ct10?: InputMaybe<Scalars['jsonb']>;
  ct11?: InputMaybe<Scalars['jsonb']>;
  ct12?: InputMaybe<Scalars['jsonb']>;
  ct13?: InputMaybe<Scalars['jsonb']>;
  ct14?: InputMaybe<Scalars['jsonb']>;
  ct15?: InputMaybe<Scalars['jsonb']>;
  ct16?: InputMaybe<Scalars['jsonb']>;
  pt1?: InputMaybe<Scalars['jsonb']>;
  pt2?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "eddi" */
export type Eddi_Arr_Rel_Insert_Input = {
  data: Array<Eddi_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Eddi_On_Conflict>;
};

/** aggregate avg on columns */
export type Eddi_Avg_Fields = {
  __typename?: 'eddi_avg_fields';
  agggroupno?: Maybe<Scalars['Float']>;
  agglock?: Maybe<Scalars['Float']>;
  aggregationdataid?: Maybe<Scalars['Float']>;
  bootloaderversion?: Maybe<Scalars['Float']>;
  chargeenergy?: Maybe<Scalars['Float']>;
  checkperiod?: Maybe<Scalars['Float']>;
  commandseqno?: Maybe<Scalars['Float']>;
  configlength?: Maybe<Scalars['Float']>;
  configoffset?: Maybe<Scalars['Float']>;
  configstate?: Maybe<Scalars['Float']>;
  configstructure?: Maybe<Scalars['Float']>;
  configversion?: Maybe<Scalars['Float']>;
  ct2absent?: Maybe<Scalars['Float']>;
  ct3absent?: Maybe<Scalars['Float']>;
  currentboostremaining?: Maybe<Scalars['Float']>;
  currentversion?: Maybe<Scalars['Float']>;
  deviceaddressraw?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  deviceinstance?: Maybe<Scalars['Float']>;
  dsrdataack?: Maybe<Scalars['Float']>;
  dsrdatacsn?: Maybe<Scalars['Float']>;
  dsrdataload?: Maybe<Scalars['Float']>;
  dsrdataseconds?: Maybe<Scalars['Float']>;
  frequency?: Maybe<Scalars['Float']>;
  heaterno?: Maybe<Scalars['Float']>;
  hubserialno?: Maybe<Scalars['Float']>;
  maxpower?: Maybe<Scalars['Float']>;
  melibversion?: Maybe<Scalars['Float']>;
  melinkversion?: Maybe<Scalars['Float']>;
  minpower?: Maybe<Scalars['Float']>;
  phase?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
  prioritychanges?: Maybe<Scalars['Float']>;
  productcode?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  serverconfigtime?: Maybe<Scalars['Float']>;
  stubloaderversion?: Maybe<Scalars['Float']>;
  voltage?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "eddi" */
export type Eddi_Avg_Order_By = {
  agggroupno?: InputMaybe<Order_By>;
  agglock?: InputMaybe<Order_By>;
  aggregationdataid?: InputMaybe<Order_By>;
  bootloaderversion?: InputMaybe<Order_By>;
  chargeenergy?: InputMaybe<Order_By>;
  checkperiod?: InputMaybe<Order_By>;
  commandseqno?: InputMaybe<Order_By>;
  configlength?: InputMaybe<Order_By>;
  configoffset?: InputMaybe<Order_By>;
  configstate?: InputMaybe<Order_By>;
  configstructure?: InputMaybe<Order_By>;
  configversion?: InputMaybe<Order_By>;
  ct2absent?: InputMaybe<Order_By>;
  ct3absent?: InputMaybe<Order_By>;
  currentboostremaining?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
  deviceaddressraw?: InputMaybe<Order_By>;
  deviceconfigtime?: InputMaybe<Order_By>;
  deviceinstance?: InputMaybe<Order_By>;
  dsrdataack?: InputMaybe<Order_By>;
  dsrdatacsn?: InputMaybe<Order_By>;
  dsrdataload?: InputMaybe<Order_By>;
  dsrdataseconds?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  heaterno?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  maxpower?: InputMaybe<Order_By>;
  melibversion?: InputMaybe<Order_By>;
  melinkversion?: InputMaybe<Order_By>;
  minpower?: InputMaybe<Order_By>;
  phase?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  prioritychanges?: InputMaybe<Order_By>;
  productcode?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverconfigtime?: InputMaybe<Order_By>;
  stubloaderversion?: InputMaybe<Order_By>;
  voltage?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "eddi". All fields are combined with a logical 'AND'. */
export type Eddi_Bool_Exp = {
  _and?: InputMaybe<Array<Eddi_Bool_Exp>>;
  _not?: InputMaybe<Eddi_Bool_Exp>;
  _or?: InputMaybe<Array<Eddi_Bool_Exp>>;
  agggroupno?: InputMaybe<Int_Comparison_Exp>;
  agglock?: InputMaybe<Smallint_Comparison_Exp>;
  aggregation_datum?: InputMaybe<Aggregation_Data_Bool_Exp>;
  aggregationdataid?: InputMaybe<Int_Comparison_Exp>;
  boardtype?: InputMaybe<String_Comparison_Exp>;
  boostmanual?: InputMaybe<Boolean_Comparison_Exp>;
  boosttimed?: InputMaybe<Boolean_Comparison_Exp>;
  bootloaderversion?: InputMaybe<Int_Comparison_Exp>;
  chargeenergy?: InputMaybe<Float_Comparison_Exp>;
  checkperiod?: InputMaybe<Smallint_Comparison_Exp>;
  commandseqno?: InputMaybe<Smallint_Comparison_Exp>;
  configappdata?: InputMaybe<Bytea_Comparison_Exp>;
  configappdone?: InputMaybe<Boolean_Comparison_Exp>;
  configbootdata?: InputMaybe<Bytea_Comparison_Exp>;
  configbootdone?: InputMaybe<Boolean_Comparison_Exp>;
  configlength?: InputMaybe<Smallint_Comparison_Exp>;
  configoffset?: InputMaybe<Smallint_Comparison_Exp>;
  configstate?: InputMaybe<Smallint_Comparison_Exp>;
  configstructure?: InputMaybe<Smallint_Comparison_Exp>;
  configversion?: InputMaybe<Smallint_Comparison_Exp>;
  createdat?: InputMaybe<Timestamptz_Comparison_Exp>;
  ct1?: InputMaybe<Jsonb_Comparison_Exp>;
  ct2?: InputMaybe<Jsonb_Comparison_Exp>;
  ct2absent?: InputMaybe<Smallint_Comparison_Exp>;
  ct3?: InputMaybe<Jsonb_Comparison_Exp>;
  ct3absent?: InputMaybe<Smallint_Comparison_Exp>;
  ct4?: InputMaybe<Jsonb_Comparison_Exp>;
  ct5?: InputMaybe<Jsonb_Comparison_Exp>;
  ct6?: InputMaybe<Jsonb_Comparison_Exp>;
  ct7?: InputMaybe<Jsonb_Comparison_Exp>;
  ct8?: InputMaybe<Jsonb_Comparison_Exp>;
  ct9?: InputMaybe<Jsonb_Comparison_Exp>;
  ct10?: InputMaybe<Jsonb_Comparison_Exp>;
  ct11?: InputMaybe<Jsonb_Comparison_Exp>;
  ct12?: InputMaybe<Jsonb_Comparison_Exp>;
  ct13?: InputMaybe<Jsonb_Comparison_Exp>;
  ct14?: InputMaybe<Jsonb_Comparison_Exp>;
  ct15?: InputMaybe<Jsonb_Comparison_Exp>;
  ct16?: InputMaybe<Jsonb_Comparison_Exp>;
  currentboostremaining?: InputMaybe<Smallint_Comparison_Exp>;
  currentversion?: InputMaybe<Int_Comparison_Exp>;
  deviceaddressraw?: InputMaybe<Int_Comparison_Exp>;
  deviceclass?: InputMaybe<String_Comparison_Exp>;
  deviceconfigtime?: InputMaybe<Bigint_Comparison_Exp>;
  deviceinstance?: InputMaybe<Int_Comparison_Exp>;
  dsrdataack?: InputMaybe<Smallint_Comparison_Exp>;
  dsrdatacsn?: InputMaybe<Smallint_Comparison_Exp>;
  dsrdatafda?: InputMaybe<Boolean_Comparison_Exp>;
  dsrdatafde?: InputMaybe<Boolean_Comparison_Exp>;
  dsrdatafdn?: InputMaybe<Boolean_Comparison_Exp>;
  dsrdatafua?: InputMaybe<Boolean_Comparison_Exp>;
  dsrdatafue?: InputMaybe<Boolean_Comparison_Exp>;
  dsrdatafun?: InputMaybe<Boolean_Comparison_Exp>;
  dsrdatalca?: InputMaybe<Boolean_Comparison_Exp>;
  dsrdatalce?: InputMaybe<Boolean_Comparison_Exp>;
  dsrdataload?: InputMaybe<Smallint_Comparison_Exp>;
  dsrdataseconds?: InputMaybe<Smallint_Comparison_Exp>;
  ethernetfitted?: InputMaybe<Boolean_Comparison_Exp>;
  ethernetlink?: InputMaybe<Boolean_Comparison_Exp>;
  ethernetmacaddress?: InputMaybe<Macaddr_Comparison_Exp>;
  ethernetspeed?: InputMaybe<String_Comparison_Exp>;
  frequency?: InputMaybe<Smallint_Comparison_Exp>;
  heaterno?: InputMaybe<Smallint_Comparison_Exp>;
  heatertype1?: InputMaybe<String_Comparison_Exp>;
  heatertype2?: InputMaybe<String_Comparison_Exp>;
  highpower?: InputMaybe<Boolean_Comparison_Exp>;
  hub?: InputMaybe<Hub_Bool_Exp>;
  hubserialno?: InputMaybe<Bigint_Comparison_Exp>;
  isaggregated?: InputMaybe<Boolean_Comparison_Exp>;
  maxpower?: InputMaybe<Int_Comparison_Exp>;
  melibversion?: InputMaybe<Int_Comparison_Exp>;
  melinkversion?: InputMaybe<Int_Comparison_Exp>;
  microprocessorti?: InputMaybe<Boolean_Comparison_Exp>;
  minpower?: InputMaybe<Int_Comparison_Exp>;
  phase?: InputMaybe<Smallint_Comparison_Exp>;
  priority?: InputMaybe<Smallint_Comparison_Exp>;
  prioritychanges?: InputMaybe<Smallint_Comparison_Exp>;
  productcode?: InputMaybe<Smallint_Comparison_Exp>;
  pt1?: InputMaybe<Jsonb_Comparison_Exp>;
  pt2?: InputMaybe<Jsonb_Comparison_Exp>;
  relayboarddataboardconnected?: InputMaybe<Boolean_Comparison_Exp>;
  relayboarddataesenseactive?: InputMaybe<Boolean_Comparison_Exp>;
  relayboarddatarelay1active?: InputMaybe<Boolean_Comparison_Exp>;
  relayboarddatarelay1boosttype?: InputMaybe<String_Comparison_Exp>;
  relayboarddatarelay2active?: InputMaybe<Boolean_Comparison_Exp>;
  relayboarddatarelay2boosttype?: InputMaybe<String_Comparison_Exp>;
  serialno?: InputMaybe<Bigint_Comparison_Exp>;
  serverconfigtime?: InputMaybe<Int_Comparison_Exp>;
  specialversion?: InputMaybe<String_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  stubloaderversion?: InputMaybe<Int_Comparison_Exp>;
  updatedat?: InputMaybe<Timestamptz_Comparison_Exp>;
  vhub?: InputMaybe<Boolean_Comparison_Exp>;
  voltage?: InputMaybe<Smallint_Comparison_Exp>;
  wifilink?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "eddi" */
export enum Eddi_Constraint {
  /** unique or primary key constraint */
  PkA88101059e2cb82e818376be88b = 'PK_a88101059e2cb82e818376be88b',
  /** unique or primary key constraint */
  Rel_3f5811364dfbfee7013bbf7203 = 'REL_3f5811364dfbfee7013bbf7203',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Eddi_Delete_At_Path_Input = {
  ct1?: InputMaybe<Array<Scalars['String']>>;
  ct2?: InputMaybe<Array<Scalars['String']>>;
  ct3?: InputMaybe<Array<Scalars['String']>>;
  ct4?: InputMaybe<Array<Scalars['String']>>;
  ct5?: InputMaybe<Array<Scalars['String']>>;
  ct6?: InputMaybe<Array<Scalars['String']>>;
  ct7?: InputMaybe<Array<Scalars['String']>>;
  ct8?: InputMaybe<Array<Scalars['String']>>;
  ct9?: InputMaybe<Array<Scalars['String']>>;
  ct10?: InputMaybe<Array<Scalars['String']>>;
  ct11?: InputMaybe<Array<Scalars['String']>>;
  ct12?: InputMaybe<Array<Scalars['String']>>;
  ct13?: InputMaybe<Array<Scalars['String']>>;
  ct14?: InputMaybe<Array<Scalars['String']>>;
  ct15?: InputMaybe<Array<Scalars['String']>>;
  ct16?: InputMaybe<Array<Scalars['String']>>;
  pt1?: InputMaybe<Array<Scalars['String']>>;
  pt2?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Eddi_Delete_Elem_Input = {
  ct1?: InputMaybe<Scalars['Int']>;
  ct2?: InputMaybe<Scalars['Int']>;
  ct3?: InputMaybe<Scalars['Int']>;
  ct4?: InputMaybe<Scalars['Int']>;
  ct5?: InputMaybe<Scalars['Int']>;
  ct6?: InputMaybe<Scalars['Int']>;
  ct7?: InputMaybe<Scalars['Int']>;
  ct8?: InputMaybe<Scalars['Int']>;
  ct9?: InputMaybe<Scalars['Int']>;
  ct10?: InputMaybe<Scalars['Int']>;
  ct11?: InputMaybe<Scalars['Int']>;
  ct12?: InputMaybe<Scalars['Int']>;
  ct13?: InputMaybe<Scalars['Int']>;
  ct14?: InputMaybe<Scalars['Int']>;
  ct15?: InputMaybe<Scalars['Int']>;
  ct16?: InputMaybe<Scalars['Int']>;
  pt1?: InputMaybe<Scalars['Int']>;
  pt2?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Eddi_Delete_Key_Input = {
  ct1?: InputMaybe<Scalars['String']>;
  ct2?: InputMaybe<Scalars['String']>;
  ct3?: InputMaybe<Scalars['String']>;
  ct4?: InputMaybe<Scalars['String']>;
  ct5?: InputMaybe<Scalars['String']>;
  ct6?: InputMaybe<Scalars['String']>;
  ct7?: InputMaybe<Scalars['String']>;
  ct8?: InputMaybe<Scalars['String']>;
  ct9?: InputMaybe<Scalars['String']>;
  ct10?: InputMaybe<Scalars['String']>;
  ct11?: InputMaybe<Scalars['String']>;
  ct12?: InputMaybe<Scalars['String']>;
  ct13?: InputMaybe<Scalars['String']>;
  ct14?: InputMaybe<Scalars['String']>;
  ct15?: InputMaybe<Scalars['String']>;
  ct16?: InputMaybe<Scalars['String']>;
  pt1?: InputMaybe<Scalars['String']>;
  pt2?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "eddi" */
export type Eddi_Inc_Input = {
  agggroupno?: InputMaybe<Scalars['Int']>;
  agglock?: InputMaybe<Scalars['smallint']>;
  aggregationdataid?: InputMaybe<Scalars['Int']>;
  bootloaderversion?: InputMaybe<Scalars['Int']>;
  chargeenergy?: InputMaybe<Scalars['Float']>;
  checkperiod?: InputMaybe<Scalars['smallint']>;
  commandseqno?: InputMaybe<Scalars['smallint']>;
  configlength?: InputMaybe<Scalars['smallint']>;
  configoffset?: InputMaybe<Scalars['smallint']>;
  configstate?: InputMaybe<Scalars['smallint']>;
  configstructure?: InputMaybe<Scalars['smallint']>;
  configversion?: InputMaybe<Scalars['smallint']>;
  ct2absent?: InputMaybe<Scalars['smallint']>;
  ct3absent?: InputMaybe<Scalars['smallint']>;
  currentboostremaining?: InputMaybe<Scalars['smallint']>;
  currentversion?: InputMaybe<Scalars['Int']>;
  deviceaddressraw?: InputMaybe<Scalars['Int']>;
  deviceconfigtime?: InputMaybe<Scalars['bigint']>;
  deviceinstance?: InputMaybe<Scalars['Int']>;
  dsrdataack?: InputMaybe<Scalars['smallint']>;
  dsrdatacsn?: InputMaybe<Scalars['smallint']>;
  dsrdataload?: InputMaybe<Scalars['smallint']>;
  dsrdataseconds?: InputMaybe<Scalars['smallint']>;
  frequency?: InputMaybe<Scalars['smallint']>;
  heaterno?: InputMaybe<Scalars['smallint']>;
  hubserialno?: InputMaybe<Scalars['bigint']>;
  maxpower?: InputMaybe<Scalars['Int']>;
  melibversion?: InputMaybe<Scalars['Int']>;
  melinkversion?: InputMaybe<Scalars['Int']>;
  minpower?: InputMaybe<Scalars['Int']>;
  phase?: InputMaybe<Scalars['smallint']>;
  priority?: InputMaybe<Scalars['smallint']>;
  prioritychanges?: InputMaybe<Scalars['smallint']>;
  productcode?: InputMaybe<Scalars['smallint']>;
  serialno?: InputMaybe<Scalars['bigint']>;
  serverconfigtime?: InputMaybe<Scalars['Int']>;
  stubloaderversion?: InputMaybe<Scalars['Int']>;
  voltage?: InputMaybe<Scalars['smallint']>;
};

/** input type for inserting data into table "eddi" */
export type Eddi_Insert_Input = {
  agggroupno?: InputMaybe<Scalars['Int']>;
  agglock?: InputMaybe<Scalars['smallint']>;
  aggregation_datum?: InputMaybe<Aggregation_Data_Obj_Rel_Insert_Input>;
  aggregationdataid?: InputMaybe<Scalars['Int']>;
  boardtype?: InputMaybe<Scalars['String']>;
  boostmanual?: InputMaybe<Scalars['Boolean']>;
  boosttimed?: InputMaybe<Scalars['Boolean']>;
  bootloaderversion?: InputMaybe<Scalars['Int']>;
  chargeenergy?: InputMaybe<Scalars['Float']>;
  checkperiod?: InputMaybe<Scalars['smallint']>;
  commandseqno?: InputMaybe<Scalars['smallint']>;
  configappdata?: InputMaybe<Scalars['bytea']>;
  configappdone?: InputMaybe<Scalars['Boolean']>;
  configbootdata?: InputMaybe<Scalars['bytea']>;
  configbootdone?: InputMaybe<Scalars['Boolean']>;
  configlength?: InputMaybe<Scalars['smallint']>;
  configoffset?: InputMaybe<Scalars['smallint']>;
  configstate?: InputMaybe<Scalars['smallint']>;
  configstructure?: InputMaybe<Scalars['smallint']>;
  configversion?: InputMaybe<Scalars['smallint']>;
  createdat?: InputMaybe<Scalars['timestamptz']>;
  ct1?: InputMaybe<Scalars['jsonb']>;
  ct2?: InputMaybe<Scalars['jsonb']>;
  ct2absent?: InputMaybe<Scalars['smallint']>;
  ct3?: InputMaybe<Scalars['jsonb']>;
  ct3absent?: InputMaybe<Scalars['smallint']>;
  ct4?: InputMaybe<Scalars['jsonb']>;
  ct5?: InputMaybe<Scalars['jsonb']>;
  ct6?: InputMaybe<Scalars['jsonb']>;
  ct7?: InputMaybe<Scalars['jsonb']>;
  ct8?: InputMaybe<Scalars['jsonb']>;
  ct9?: InputMaybe<Scalars['jsonb']>;
  ct10?: InputMaybe<Scalars['jsonb']>;
  ct11?: InputMaybe<Scalars['jsonb']>;
  ct12?: InputMaybe<Scalars['jsonb']>;
  ct13?: InputMaybe<Scalars['jsonb']>;
  ct14?: InputMaybe<Scalars['jsonb']>;
  ct15?: InputMaybe<Scalars['jsonb']>;
  ct16?: InputMaybe<Scalars['jsonb']>;
  currentboostremaining?: InputMaybe<Scalars['smallint']>;
  currentversion?: InputMaybe<Scalars['Int']>;
  deviceaddressraw?: InputMaybe<Scalars['Int']>;
  deviceclass?: InputMaybe<Scalars['String']>;
  deviceconfigtime?: InputMaybe<Scalars['bigint']>;
  deviceinstance?: InputMaybe<Scalars['Int']>;
  dsrdataack?: InputMaybe<Scalars['smallint']>;
  dsrdatacsn?: InputMaybe<Scalars['smallint']>;
  dsrdatafda?: InputMaybe<Scalars['Boolean']>;
  dsrdatafde?: InputMaybe<Scalars['Boolean']>;
  dsrdatafdn?: InputMaybe<Scalars['Boolean']>;
  dsrdatafua?: InputMaybe<Scalars['Boolean']>;
  dsrdatafue?: InputMaybe<Scalars['Boolean']>;
  dsrdatafun?: InputMaybe<Scalars['Boolean']>;
  dsrdatalca?: InputMaybe<Scalars['Boolean']>;
  dsrdatalce?: InputMaybe<Scalars['Boolean']>;
  dsrdataload?: InputMaybe<Scalars['smallint']>;
  dsrdataseconds?: InputMaybe<Scalars['smallint']>;
  ethernetfitted?: InputMaybe<Scalars['Boolean']>;
  ethernetlink?: InputMaybe<Scalars['Boolean']>;
  ethernetmacaddress?: InputMaybe<Scalars['macaddr']>;
  ethernetspeed?: InputMaybe<Scalars['String']>;
  frequency?: InputMaybe<Scalars['smallint']>;
  heaterno?: InputMaybe<Scalars['smallint']>;
  heatertype1?: InputMaybe<Scalars['String']>;
  heatertype2?: InputMaybe<Scalars['String']>;
  highpower?: InputMaybe<Scalars['Boolean']>;
  hub?: InputMaybe<Hub_Obj_Rel_Insert_Input>;
  hubserialno?: InputMaybe<Scalars['bigint']>;
  isaggregated?: InputMaybe<Scalars['Boolean']>;
  maxpower?: InputMaybe<Scalars['Int']>;
  melibversion?: InputMaybe<Scalars['Int']>;
  melinkversion?: InputMaybe<Scalars['Int']>;
  microprocessorti?: InputMaybe<Scalars['Boolean']>;
  minpower?: InputMaybe<Scalars['Int']>;
  phase?: InputMaybe<Scalars['smallint']>;
  priority?: InputMaybe<Scalars['smallint']>;
  prioritychanges?: InputMaybe<Scalars['smallint']>;
  productcode?: InputMaybe<Scalars['smallint']>;
  pt1?: InputMaybe<Scalars['jsonb']>;
  pt2?: InputMaybe<Scalars['jsonb']>;
  relayboarddataboardconnected?: InputMaybe<Scalars['Boolean']>;
  relayboarddataesenseactive?: InputMaybe<Scalars['Boolean']>;
  relayboarddatarelay1active?: InputMaybe<Scalars['Boolean']>;
  relayboarddatarelay1boosttype?: InputMaybe<Scalars['String']>;
  relayboarddatarelay2active?: InputMaybe<Scalars['Boolean']>;
  relayboarddatarelay2boosttype?: InputMaybe<Scalars['String']>;
  serialno?: InputMaybe<Scalars['bigint']>;
  serverconfigtime?: InputMaybe<Scalars['Int']>;
  specialversion?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  stubloaderversion?: InputMaybe<Scalars['Int']>;
  updatedat?: InputMaybe<Scalars['timestamptz']>;
  vhub?: InputMaybe<Scalars['Boolean']>;
  voltage?: InputMaybe<Scalars['smallint']>;
  wifilink?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Eddi_Max_Fields = {
  __typename?: 'eddi_max_fields';
  agggroupno?: Maybe<Scalars['Int']>;
  agglock?: Maybe<Scalars['smallint']>;
  aggregationdataid?: Maybe<Scalars['Int']>;
  boardtype?: Maybe<Scalars['String']>;
  bootloaderversion?: Maybe<Scalars['Int']>;
  chargeenergy?: Maybe<Scalars['Float']>;
  checkperiod?: Maybe<Scalars['smallint']>;
  commandseqno?: Maybe<Scalars['smallint']>;
  configlength?: Maybe<Scalars['smallint']>;
  configoffset?: Maybe<Scalars['smallint']>;
  configstate?: Maybe<Scalars['smallint']>;
  configstructure?: Maybe<Scalars['smallint']>;
  configversion?: Maybe<Scalars['smallint']>;
  createdat?: Maybe<Scalars['timestamptz']>;
  ct2absent?: Maybe<Scalars['smallint']>;
  ct3absent?: Maybe<Scalars['smallint']>;
  currentboostremaining?: Maybe<Scalars['smallint']>;
  currentversion?: Maybe<Scalars['Int']>;
  deviceaddressraw?: Maybe<Scalars['Int']>;
  deviceclass?: Maybe<Scalars['String']>;
  deviceconfigtime?: Maybe<Scalars['bigint']>;
  deviceinstance?: Maybe<Scalars['Int']>;
  dsrdataack?: Maybe<Scalars['smallint']>;
  dsrdatacsn?: Maybe<Scalars['smallint']>;
  dsrdataload?: Maybe<Scalars['smallint']>;
  dsrdataseconds?: Maybe<Scalars['smallint']>;
  ethernetspeed?: Maybe<Scalars['String']>;
  frequency?: Maybe<Scalars['smallint']>;
  heaterno?: Maybe<Scalars['smallint']>;
  heatertype1?: Maybe<Scalars['String']>;
  heatertype2?: Maybe<Scalars['String']>;
  hubserialno?: Maybe<Scalars['bigint']>;
  maxpower?: Maybe<Scalars['Int']>;
  melibversion?: Maybe<Scalars['Int']>;
  melinkversion?: Maybe<Scalars['Int']>;
  minpower?: Maybe<Scalars['Int']>;
  phase?: Maybe<Scalars['smallint']>;
  priority?: Maybe<Scalars['smallint']>;
  prioritychanges?: Maybe<Scalars['smallint']>;
  productcode?: Maybe<Scalars['smallint']>;
  relayboarddatarelay1boosttype?: Maybe<Scalars['String']>;
  relayboarddatarelay2boosttype?: Maybe<Scalars['String']>;
  serialno?: Maybe<Scalars['bigint']>;
  serverconfigtime?: Maybe<Scalars['Int']>;
  specialversion?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  stubloaderversion?: Maybe<Scalars['Int']>;
  updatedat?: Maybe<Scalars['timestamptz']>;
  voltage?: Maybe<Scalars['smallint']>;
};

/** order by max() on columns of table "eddi" */
export type Eddi_Max_Order_By = {
  agggroupno?: InputMaybe<Order_By>;
  agglock?: InputMaybe<Order_By>;
  aggregationdataid?: InputMaybe<Order_By>;
  boardtype?: InputMaybe<Order_By>;
  bootloaderversion?: InputMaybe<Order_By>;
  chargeenergy?: InputMaybe<Order_By>;
  checkperiod?: InputMaybe<Order_By>;
  commandseqno?: InputMaybe<Order_By>;
  configlength?: InputMaybe<Order_By>;
  configoffset?: InputMaybe<Order_By>;
  configstate?: InputMaybe<Order_By>;
  configstructure?: InputMaybe<Order_By>;
  configversion?: InputMaybe<Order_By>;
  createdat?: InputMaybe<Order_By>;
  ct2absent?: InputMaybe<Order_By>;
  ct3absent?: InputMaybe<Order_By>;
  currentboostremaining?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
  deviceaddressraw?: InputMaybe<Order_By>;
  deviceclass?: InputMaybe<Order_By>;
  deviceconfigtime?: InputMaybe<Order_By>;
  deviceinstance?: InputMaybe<Order_By>;
  dsrdataack?: InputMaybe<Order_By>;
  dsrdatacsn?: InputMaybe<Order_By>;
  dsrdataload?: InputMaybe<Order_By>;
  dsrdataseconds?: InputMaybe<Order_By>;
  ethernetspeed?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  heaterno?: InputMaybe<Order_By>;
  heatertype1?: InputMaybe<Order_By>;
  heatertype2?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  maxpower?: InputMaybe<Order_By>;
  melibversion?: InputMaybe<Order_By>;
  melinkversion?: InputMaybe<Order_By>;
  minpower?: InputMaybe<Order_By>;
  phase?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  prioritychanges?: InputMaybe<Order_By>;
  productcode?: InputMaybe<Order_By>;
  relayboarddatarelay1boosttype?: InputMaybe<Order_By>;
  relayboarddatarelay2boosttype?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverconfigtime?: InputMaybe<Order_By>;
  specialversion?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  stubloaderversion?: InputMaybe<Order_By>;
  updatedat?: InputMaybe<Order_By>;
  voltage?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Eddi_Min_Fields = {
  __typename?: 'eddi_min_fields';
  agggroupno?: Maybe<Scalars['Int']>;
  agglock?: Maybe<Scalars['smallint']>;
  aggregationdataid?: Maybe<Scalars['Int']>;
  boardtype?: Maybe<Scalars['String']>;
  bootloaderversion?: Maybe<Scalars['Int']>;
  chargeenergy?: Maybe<Scalars['Float']>;
  checkperiod?: Maybe<Scalars['smallint']>;
  commandseqno?: Maybe<Scalars['smallint']>;
  configlength?: Maybe<Scalars['smallint']>;
  configoffset?: Maybe<Scalars['smallint']>;
  configstate?: Maybe<Scalars['smallint']>;
  configstructure?: Maybe<Scalars['smallint']>;
  configversion?: Maybe<Scalars['smallint']>;
  createdat?: Maybe<Scalars['timestamptz']>;
  ct2absent?: Maybe<Scalars['smallint']>;
  ct3absent?: Maybe<Scalars['smallint']>;
  currentboostremaining?: Maybe<Scalars['smallint']>;
  currentversion?: Maybe<Scalars['Int']>;
  deviceaddressraw?: Maybe<Scalars['Int']>;
  deviceclass?: Maybe<Scalars['String']>;
  deviceconfigtime?: Maybe<Scalars['bigint']>;
  deviceinstance?: Maybe<Scalars['Int']>;
  dsrdataack?: Maybe<Scalars['smallint']>;
  dsrdatacsn?: Maybe<Scalars['smallint']>;
  dsrdataload?: Maybe<Scalars['smallint']>;
  dsrdataseconds?: Maybe<Scalars['smallint']>;
  ethernetspeed?: Maybe<Scalars['String']>;
  frequency?: Maybe<Scalars['smallint']>;
  heaterno?: Maybe<Scalars['smallint']>;
  heatertype1?: Maybe<Scalars['String']>;
  heatertype2?: Maybe<Scalars['String']>;
  hubserialno?: Maybe<Scalars['bigint']>;
  maxpower?: Maybe<Scalars['Int']>;
  melibversion?: Maybe<Scalars['Int']>;
  melinkversion?: Maybe<Scalars['Int']>;
  minpower?: Maybe<Scalars['Int']>;
  phase?: Maybe<Scalars['smallint']>;
  priority?: Maybe<Scalars['smallint']>;
  prioritychanges?: Maybe<Scalars['smallint']>;
  productcode?: Maybe<Scalars['smallint']>;
  relayboarddatarelay1boosttype?: Maybe<Scalars['String']>;
  relayboarddatarelay2boosttype?: Maybe<Scalars['String']>;
  serialno?: Maybe<Scalars['bigint']>;
  serverconfigtime?: Maybe<Scalars['Int']>;
  specialversion?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  stubloaderversion?: Maybe<Scalars['Int']>;
  updatedat?: Maybe<Scalars['timestamptz']>;
  voltage?: Maybe<Scalars['smallint']>;
};

/** order by min() on columns of table "eddi" */
export type Eddi_Min_Order_By = {
  agggroupno?: InputMaybe<Order_By>;
  agglock?: InputMaybe<Order_By>;
  aggregationdataid?: InputMaybe<Order_By>;
  boardtype?: InputMaybe<Order_By>;
  bootloaderversion?: InputMaybe<Order_By>;
  chargeenergy?: InputMaybe<Order_By>;
  checkperiod?: InputMaybe<Order_By>;
  commandseqno?: InputMaybe<Order_By>;
  configlength?: InputMaybe<Order_By>;
  configoffset?: InputMaybe<Order_By>;
  configstate?: InputMaybe<Order_By>;
  configstructure?: InputMaybe<Order_By>;
  configversion?: InputMaybe<Order_By>;
  createdat?: InputMaybe<Order_By>;
  ct2absent?: InputMaybe<Order_By>;
  ct3absent?: InputMaybe<Order_By>;
  currentboostremaining?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
  deviceaddressraw?: InputMaybe<Order_By>;
  deviceclass?: InputMaybe<Order_By>;
  deviceconfigtime?: InputMaybe<Order_By>;
  deviceinstance?: InputMaybe<Order_By>;
  dsrdataack?: InputMaybe<Order_By>;
  dsrdatacsn?: InputMaybe<Order_By>;
  dsrdataload?: InputMaybe<Order_By>;
  dsrdataseconds?: InputMaybe<Order_By>;
  ethernetspeed?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  heaterno?: InputMaybe<Order_By>;
  heatertype1?: InputMaybe<Order_By>;
  heatertype2?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  maxpower?: InputMaybe<Order_By>;
  melibversion?: InputMaybe<Order_By>;
  melinkversion?: InputMaybe<Order_By>;
  minpower?: InputMaybe<Order_By>;
  phase?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  prioritychanges?: InputMaybe<Order_By>;
  productcode?: InputMaybe<Order_By>;
  relayboarddatarelay1boosttype?: InputMaybe<Order_By>;
  relayboarddatarelay2boosttype?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverconfigtime?: InputMaybe<Order_By>;
  specialversion?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  stubloaderversion?: InputMaybe<Order_By>;
  updatedat?: InputMaybe<Order_By>;
  voltage?: InputMaybe<Order_By>;
};

/** columns and relationships of "eddi_minute" */
export type Eddi_Minute = {
  __typename?: 'eddi_minute';
  boostloadpower1?: Maybe<Scalars['Float']>;
  boostloadpower2?: Maybe<Scalars['Float']>;
  divloadpower1?: Maybe<Scalars['Float']>;
  divloadpower2?: Maybe<Scalars['Float']>;
  exportpower?: Maybe<Scalars['Float']>;
  externalctnegpower1?: Maybe<Scalars['Float']>;
  externalctnegpower2?: Maybe<Scalars['Float']>;
  externalctpospower1?: Maybe<Scalars['Float']>;
  externalctpospower2?: Maybe<Scalars['Float']>;
  externalcttype1?: Maybe<Scalars['smallint']>;
  externalcttype2?: Maybe<Scalars['smallint']>;
  frequency?: Maybe<Scalars['Float']>;
  gennegpw?: Maybe<Scalars['Float']>;
  genpospw?: Maybe<Scalars['Float']>;
  heatsink?: Maybe<Scalars['Float']>;
  importpower?: Maybe<Scalars['Float']>;
  noseconds: Scalars['Int'];
  pt1?: Maybe<Scalars['Float']>;
  pt2?: Maybe<Scalars['Float']>;
  serialno: Scalars['bigint'];
  timestamp: Scalars['timestamp'];
  voltage?: Maybe<Scalars['Float']>;
};

/** aggregated selection of "eddi_minute" */
export type Eddi_Minute_Aggregate = {
  __typename?: 'eddi_minute_aggregate';
  aggregate?: Maybe<Eddi_Minute_Aggregate_Fields>;
  nodes: Array<Eddi_Minute>;
};

/** aggregate fields of "eddi_minute" */
export type Eddi_Minute_Aggregate_Fields = {
  __typename?: 'eddi_minute_aggregate_fields';
  avg?: Maybe<Eddi_Minute_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Eddi_Minute_Max_Fields>;
  min?: Maybe<Eddi_Minute_Min_Fields>;
  stddev?: Maybe<Eddi_Minute_Stddev_Fields>;
  stddev_pop?: Maybe<Eddi_Minute_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Eddi_Minute_Stddev_Samp_Fields>;
  sum?: Maybe<Eddi_Minute_Sum_Fields>;
  var_pop?: Maybe<Eddi_Minute_Var_Pop_Fields>;
  var_samp?: Maybe<Eddi_Minute_Var_Samp_Fields>;
  variance?: Maybe<Eddi_Minute_Variance_Fields>;
};

/** aggregate fields of "eddi_minute" */
export type Eddi_Minute_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Eddi_Minute_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Eddi_Minute_Avg_Fields = {
  __typename?: 'eddi_minute_avg_fields';
  boostloadpower1?: Maybe<Scalars['Float']>;
  boostloadpower2?: Maybe<Scalars['Float']>;
  divloadpower1?: Maybe<Scalars['Float']>;
  divloadpower2?: Maybe<Scalars['Float']>;
  exportpower?: Maybe<Scalars['Float']>;
  externalctnegpower1?: Maybe<Scalars['Float']>;
  externalctnegpower2?: Maybe<Scalars['Float']>;
  externalctpospower1?: Maybe<Scalars['Float']>;
  externalctpospower2?: Maybe<Scalars['Float']>;
  externalcttype1?: Maybe<Scalars['Float']>;
  externalcttype2?: Maybe<Scalars['Float']>;
  frequency?: Maybe<Scalars['Float']>;
  gennegpw?: Maybe<Scalars['Float']>;
  genpospw?: Maybe<Scalars['Float']>;
  heatsink?: Maybe<Scalars['Float']>;
  importpower?: Maybe<Scalars['Float']>;
  noseconds?: Maybe<Scalars['Float']>;
  pt1?: Maybe<Scalars['Float']>;
  pt2?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  voltage?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "eddi_minute". All fields are combined with a logical 'AND'. */
export type Eddi_Minute_Bool_Exp = {
  _and?: InputMaybe<Array<Eddi_Minute_Bool_Exp>>;
  _not?: InputMaybe<Eddi_Minute_Bool_Exp>;
  _or?: InputMaybe<Array<Eddi_Minute_Bool_Exp>>;
  boostloadpower1?: InputMaybe<Float_Comparison_Exp>;
  boostloadpower2?: InputMaybe<Float_Comparison_Exp>;
  divloadpower1?: InputMaybe<Float_Comparison_Exp>;
  divloadpower2?: InputMaybe<Float_Comparison_Exp>;
  exportpower?: InputMaybe<Float_Comparison_Exp>;
  externalctnegpower1?: InputMaybe<Float_Comparison_Exp>;
  externalctnegpower2?: InputMaybe<Float_Comparison_Exp>;
  externalctpospower1?: InputMaybe<Float_Comparison_Exp>;
  externalctpospower2?: InputMaybe<Float_Comparison_Exp>;
  externalcttype1?: InputMaybe<Smallint_Comparison_Exp>;
  externalcttype2?: InputMaybe<Smallint_Comparison_Exp>;
  frequency?: InputMaybe<Float_Comparison_Exp>;
  gennegpw?: InputMaybe<Float_Comparison_Exp>;
  genpospw?: InputMaybe<Float_Comparison_Exp>;
  heatsink?: InputMaybe<Float_Comparison_Exp>;
  importpower?: InputMaybe<Float_Comparison_Exp>;
  noseconds?: InputMaybe<Int_Comparison_Exp>;
  pt1?: InputMaybe<Float_Comparison_Exp>;
  pt2?: InputMaybe<Float_Comparison_Exp>;
  serialno?: InputMaybe<Bigint_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  voltage?: InputMaybe<Float_Comparison_Exp>;
};

/** unique or primary key constraints on table "eddi_minute" */
export enum Eddi_Minute_Constraint {
  /** unique or primary key constraint */
  EddiMinutePkey = 'eddi_minute_pkey',
}

/** input type for incrementing numeric columns in table "eddi_minute" */
export type Eddi_Minute_Inc_Input = {
  boostloadpower1?: InputMaybe<Scalars['Float']>;
  boostloadpower2?: InputMaybe<Scalars['Float']>;
  divloadpower1?: InputMaybe<Scalars['Float']>;
  divloadpower2?: InputMaybe<Scalars['Float']>;
  exportpower?: InputMaybe<Scalars['Float']>;
  externalctnegpower1?: InputMaybe<Scalars['Float']>;
  externalctnegpower2?: InputMaybe<Scalars['Float']>;
  externalctpospower1?: InputMaybe<Scalars['Float']>;
  externalctpospower2?: InputMaybe<Scalars['Float']>;
  externalcttype1?: InputMaybe<Scalars['smallint']>;
  externalcttype2?: InputMaybe<Scalars['smallint']>;
  frequency?: InputMaybe<Scalars['Float']>;
  gennegpw?: InputMaybe<Scalars['Float']>;
  genpospw?: InputMaybe<Scalars['Float']>;
  heatsink?: InputMaybe<Scalars['Float']>;
  importpower?: InputMaybe<Scalars['Float']>;
  noseconds?: InputMaybe<Scalars['Int']>;
  pt1?: InputMaybe<Scalars['Float']>;
  pt2?: InputMaybe<Scalars['Float']>;
  serialno?: InputMaybe<Scalars['bigint']>;
  voltage?: InputMaybe<Scalars['Float']>;
};

/** input type for inserting data into table "eddi_minute" */
export type Eddi_Minute_Insert_Input = {
  boostloadpower1?: InputMaybe<Scalars['Float']>;
  boostloadpower2?: InputMaybe<Scalars['Float']>;
  divloadpower1?: InputMaybe<Scalars['Float']>;
  divloadpower2?: InputMaybe<Scalars['Float']>;
  exportpower?: InputMaybe<Scalars['Float']>;
  externalctnegpower1?: InputMaybe<Scalars['Float']>;
  externalctnegpower2?: InputMaybe<Scalars['Float']>;
  externalctpospower1?: InputMaybe<Scalars['Float']>;
  externalctpospower2?: InputMaybe<Scalars['Float']>;
  externalcttype1?: InputMaybe<Scalars['smallint']>;
  externalcttype2?: InputMaybe<Scalars['smallint']>;
  frequency?: InputMaybe<Scalars['Float']>;
  gennegpw?: InputMaybe<Scalars['Float']>;
  genpospw?: InputMaybe<Scalars['Float']>;
  heatsink?: InputMaybe<Scalars['Float']>;
  importpower?: InputMaybe<Scalars['Float']>;
  noseconds?: InputMaybe<Scalars['Int']>;
  pt1?: InputMaybe<Scalars['Float']>;
  pt2?: InputMaybe<Scalars['Float']>;
  serialno?: InputMaybe<Scalars['bigint']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  voltage?: InputMaybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Eddi_Minute_Max_Fields = {
  __typename?: 'eddi_minute_max_fields';
  boostloadpower1?: Maybe<Scalars['Float']>;
  boostloadpower2?: Maybe<Scalars['Float']>;
  divloadpower1?: Maybe<Scalars['Float']>;
  divloadpower2?: Maybe<Scalars['Float']>;
  exportpower?: Maybe<Scalars['Float']>;
  externalctnegpower1?: Maybe<Scalars['Float']>;
  externalctnegpower2?: Maybe<Scalars['Float']>;
  externalctpospower1?: Maybe<Scalars['Float']>;
  externalctpospower2?: Maybe<Scalars['Float']>;
  externalcttype1?: Maybe<Scalars['smallint']>;
  externalcttype2?: Maybe<Scalars['smallint']>;
  frequency?: Maybe<Scalars['Float']>;
  gennegpw?: Maybe<Scalars['Float']>;
  genpospw?: Maybe<Scalars['Float']>;
  heatsink?: Maybe<Scalars['Float']>;
  importpower?: Maybe<Scalars['Float']>;
  noseconds?: Maybe<Scalars['Int']>;
  pt1?: Maybe<Scalars['Float']>;
  pt2?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['bigint']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  voltage?: Maybe<Scalars['Float']>;
};

/** aggregate min on columns */
export type Eddi_Minute_Min_Fields = {
  __typename?: 'eddi_minute_min_fields';
  boostloadpower1?: Maybe<Scalars['Float']>;
  boostloadpower2?: Maybe<Scalars['Float']>;
  divloadpower1?: Maybe<Scalars['Float']>;
  divloadpower2?: Maybe<Scalars['Float']>;
  exportpower?: Maybe<Scalars['Float']>;
  externalctnegpower1?: Maybe<Scalars['Float']>;
  externalctnegpower2?: Maybe<Scalars['Float']>;
  externalctpospower1?: Maybe<Scalars['Float']>;
  externalctpospower2?: Maybe<Scalars['Float']>;
  externalcttype1?: Maybe<Scalars['smallint']>;
  externalcttype2?: Maybe<Scalars['smallint']>;
  frequency?: Maybe<Scalars['Float']>;
  gennegpw?: Maybe<Scalars['Float']>;
  genpospw?: Maybe<Scalars['Float']>;
  heatsink?: Maybe<Scalars['Float']>;
  importpower?: Maybe<Scalars['Float']>;
  noseconds?: Maybe<Scalars['Int']>;
  pt1?: Maybe<Scalars['Float']>;
  pt2?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['bigint']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  voltage?: Maybe<Scalars['Float']>;
};

/** response of any mutation on the table "eddi_minute" */
export type Eddi_Minute_Mutation_Response = {
  __typename?: 'eddi_minute_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Eddi_Minute>;
};

/** on_conflict condition type for table "eddi_minute" */
export type Eddi_Minute_On_Conflict = {
  constraint: Eddi_Minute_Constraint;
  update_columns?: Array<Eddi_Minute_Update_Column>;
  where?: InputMaybe<Eddi_Minute_Bool_Exp>;
};

/** Ordering options when selecting data from "eddi_minute". */
export type Eddi_Minute_Order_By = {
  boostloadpower1?: InputMaybe<Order_By>;
  boostloadpower2?: InputMaybe<Order_By>;
  divloadpower1?: InputMaybe<Order_By>;
  divloadpower2?: InputMaybe<Order_By>;
  exportpower?: InputMaybe<Order_By>;
  externalctnegpower1?: InputMaybe<Order_By>;
  externalctnegpower2?: InputMaybe<Order_By>;
  externalctpospower1?: InputMaybe<Order_By>;
  externalctpospower2?: InputMaybe<Order_By>;
  externalcttype1?: InputMaybe<Order_By>;
  externalcttype2?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  gennegpw?: InputMaybe<Order_By>;
  genpospw?: InputMaybe<Order_By>;
  heatsink?: InputMaybe<Order_By>;
  importpower?: InputMaybe<Order_By>;
  noseconds?: InputMaybe<Order_By>;
  pt1?: InputMaybe<Order_By>;
  pt2?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  voltage?: InputMaybe<Order_By>;
};

/** primary key columns input for table: eddi_minute */
export type Eddi_Minute_Pk_Columns_Input = {
  serialno: Scalars['bigint'];
  timestamp: Scalars['timestamp'];
};

/** select columns of table "eddi_minute" */
export enum Eddi_Minute_Select_Column {
  /** column name */
  Boostloadpower1 = 'boostloadpower1',
  /** column name */
  Boostloadpower2 = 'boostloadpower2',
  /** column name */
  Divloadpower1 = 'divloadpower1',
  /** column name */
  Divloadpower2 = 'divloadpower2',
  /** column name */
  Exportpower = 'exportpower',
  /** column name */
  Externalctnegpower1 = 'externalctnegpower1',
  /** column name */
  Externalctnegpower2 = 'externalctnegpower2',
  /** column name */
  Externalctpospower1 = 'externalctpospower1',
  /** column name */
  Externalctpospower2 = 'externalctpospower2',
  /** column name */
  Externalcttype1 = 'externalcttype1',
  /** column name */
  Externalcttype2 = 'externalcttype2',
  /** column name */
  Frequency = 'frequency',
  /** column name */
  Gennegpw = 'gennegpw',
  /** column name */
  Genpospw = 'genpospw',
  /** column name */
  Heatsink = 'heatsink',
  /** column name */
  Importpower = 'importpower',
  /** column name */
  Noseconds = 'noseconds',
  /** column name */
  Pt1 = 'pt1',
  /** column name */
  Pt2 = 'pt2',
  /** column name */
  Serialno = 'serialno',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Voltage = 'voltage',
}

/** input type for updating data in table "eddi_minute" */
export type Eddi_Minute_Set_Input = {
  boostloadpower1?: InputMaybe<Scalars['Float']>;
  boostloadpower2?: InputMaybe<Scalars['Float']>;
  divloadpower1?: InputMaybe<Scalars['Float']>;
  divloadpower2?: InputMaybe<Scalars['Float']>;
  exportpower?: InputMaybe<Scalars['Float']>;
  externalctnegpower1?: InputMaybe<Scalars['Float']>;
  externalctnegpower2?: InputMaybe<Scalars['Float']>;
  externalctpospower1?: InputMaybe<Scalars['Float']>;
  externalctpospower2?: InputMaybe<Scalars['Float']>;
  externalcttype1?: InputMaybe<Scalars['smallint']>;
  externalcttype2?: InputMaybe<Scalars['smallint']>;
  frequency?: InputMaybe<Scalars['Float']>;
  gennegpw?: InputMaybe<Scalars['Float']>;
  genpospw?: InputMaybe<Scalars['Float']>;
  heatsink?: InputMaybe<Scalars['Float']>;
  importpower?: InputMaybe<Scalars['Float']>;
  noseconds?: InputMaybe<Scalars['Int']>;
  pt1?: InputMaybe<Scalars['Float']>;
  pt2?: InputMaybe<Scalars['Float']>;
  serialno?: InputMaybe<Scalars['bigint']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  voltage?: InputMaybe<Scalars['Float']>;
};

/** aggregate stddev on columns */
export type Eddi_Minute_Stddev_Fields = {
  __typename?: 'eddi_minute_stddev_fields';
  boostloadpower1?: Maybe<Scalars['Float']>;
  boostloadpower2?: Maybe<Scalars['Float']>;
  divloadpower1?: Maybe<Scalars['Float']>;
  divloadpower2?: Maybe<Scalars['Float']>;
  exportpower?: Maybe<Scalars['Float']>;
  externalctnegpower1?: Maybe<Scalars['Float']>;
  externalctnegpower2?: Maybe<Scalars['Float']>;
  externalctpospower1?: Maybe<Scalars['Float']>;
  externalctpospower2?: Maybe<Scalars['Float']>;
  externalcttype1?: Maybe<Scalars['Float']>;
  externalcttype2?: Maybe<Scalars['Float']>;
  frequency?: Maybe<Scalars['Float']>;
  gennegpw?: Maybe<Scalars['Float']>;
  genpospw?: Maybe<Scalars['Float']>;
  heatsink?: Maybe<Scalars['Float']>;
  importpower?: Maybe<Scalars['Float']>;
  noseconds?: Maybe<Scalars['Float']>;
  pt1?: Maybe<Scalars['Float']>;
  pt2?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  voltage?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Eddi_Minute_Stddev_Pop_Fields = {
  __typename?: 'eddi_minute_stddev_pop_fields';
  boostloadpower1?: Maybe<Scalars['Float']>;
  boostloadpower2?: Maybe<Scalars['Float']>;
  divloadpower1?: Maybe<Scalars['Float']>;
  divloadpower2?: Maybe<Scalars['Float']>;
  exportpower?: Maybe<Scalars['Float']>;
  externalctnegpower1?: Maybe<Scalars['Float']>;
  externalctnegpower2?: Maybe<Scalars['Float']>;
  externalctpospower1?: Maybe<Scalars['Float']>;
  externalctpospower2?: Maybe<Scalars['Float']>;
  externalcttype1?: Maybe<Scalars['Float']>;
  externalcttype2?: Maybe<Scalars['Float']>;
  frequency?: Maybe<Scalars['Float']>;
  gennegpw?: Maybe<Scalars['Float']>;
  genpospw?: Maybe<Scalars['Float']>;
  heatsink?: Maybe<Scalars['Float']>;
  importpower?: Maybe<Scalars['Float']>;
  noseconds?: Maybe<Scalars['Float']>;
  pt1?: Maybe<Scalars['Float']>;
  pt2?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  voltage?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Eddi_Minute_Stddev_Samp_Fields = {
  __typename?: 'eddi_minute_stddev_samp_fields';
  boostloadpower1?: Maybe<Scalars['Float']>;
  boostloadpower2?: Maybe<Scalars['Float']>;
  divloadpower1?: Maybe<Scalars['Float']>;
  divloadpower2?: Maybe<Scalars['Float']>;
  exportpower?: Maybe<Scalars['Float']>;
  externalctnegpower1?: Maybe<Scalars['Float']>;
  externalctnegpower2?: Maybe<Scalars['Float']>;
  externalctpospower1?: Maybe<Scalars['Float']>;
  externalctpospower2?: Maybe<Scalars['Float']>;
  externalcttype1?: Maybe<Scalars['Float']>;
  externalcttype2?: Maybe<Scalars['Float']>;
  frequency?: Maybe<Scalars['Float']>;
  gennegpw?: Maybe<Scalars['Float']>;
  genpospw?: Maybe<Scalars['Float']>;
  heatsink?: Maybe<Scalars['Float']>;
  importpower?: Maybe<Scalars['Float']>;
  noseconds?: Maybe<Scalars['Float']>;
  pt1?: Maybe<Scalars['Float']>;
  pt2?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  voltage?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Eddi_Minute_Sum_Fields = {
  __typename?: 'eddi_minute_sum_fields';
  boostloadpower1?: Maybe<Scalars['Float']>;
  boostloadpower2?: Maybe<Scalars['Float']>;
  divloadpower1?: Maybe<Scalars['Float']>;
  divloadpower2?: Maybe<Scalars['Float']>;
  exportpower?: Maybe<Scalars['Float']>;
  externalctnegpower1?: Maybe<Scalars['Float']>;
  externalctnegpower2?: Maybe<Scalars['Float']>;
  externalctpospower1?: Maybe<Scalars['Float']>;
  externalctpospower2?: Maybe<Scalars['Float']>;
  externalcttype1?: Maybe<Scalars['smallint']>;
  externalcttype2?: Maybe<Scalars['smallint']>;
  frequency?: Maybe<Scalars['Float']>;
  gennegpw?: Maybe<Scalars['Float']>;
  genpospw?: Maybe<Scalars['Float']>;
  heatsink?: Maybe<Scalars['Float']>;
  importpower?: Maybe<Scalars['Float']>;
  noseconds?: Maybe<Scalars['Int']>;
  pt1?: Maybe<Scalars['Float']>;
  pt2?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['bigint']>;
  voltage?: Maybe<Scalars['Float']>;
};

/** update columns of table "eddi_minute" */
export enum Eddi_Minute_Update_Column {
  /** column name */
  Boostloadpower1 = 'boostloadpower1',
  /** column name */
  Boostloadpower2 = 'boostloadpower2',
  /** column name */
  Divloadpower1 = 'divloadpower1',
  /** column name */
  Divloadpower2 = 'divloadpower2',
  /** column name */
  Exportpower = 'exportpower',
  /** column name */
  Externalctnegpower1 = 'externalctnegpower1',
  /** column name */
  Externalctnegpower2 = 'externalctnegpower2',
  /** column name */
  Externalctpospower1 = 'externalctpospower1',
  /** column name */
  Externalctpospower2 = 'externalctpospower2',
  /** column name */
  Externalcttype1 = 'externalcttype1',
  /** column name */
  Externalcttype2 = 'externalcttype2',
  /** column name */
  Frequency = 'frequency',
  /** column name */
  Gennegpw = 'gennegpw',
  /** column name */
  Genpospw = 'genpospw',
  /** column name */
  Heatsink = 'heatsink',
  /** column name */
  Importpower = 'importpower',
  /** column name */
  Noseconds = 'noseconds',
  /** column name */
  Pt1 = 'pt1',
  /** column name */
  Pt2 = 'pt2',
  /** column name */
  Serialno = 'serialno',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Voltage = 'voltage',
}

/** aggregate var_pop on columns */
export type Eddi_Minute_Var_Pop_Fields = {
  __typename?: 'eddi_minute_var_pop_fields';
  boostloadpower1?: Maybe<Scalars['Float']>;
  boostloadpower2?: Maybe<Scalars['Float']>;
  divloadpower1?: Maybe<Scalars['Float']>;
  divloadpower2?: Maybe<Scalars['Float']>;
  exportpower?: Maybe<Scalars['Float']>;
  externalctnegpower1?: Maybe<Scalars['Float']>;
  externalctnegpower2?: Maybe<Scalars['Float']>;
  externalctpospower1?: Maybe<Scalars['Float']>;
  externalctpospower2?: Maybe<Scalars['Float']>;
  externalcttype1?: Maybe<Scalars['Float']>;
  externalcttype2?: Maybe<Scalars['Float']>;
  frequency?: Maybe<Scalars['Float']>;
  gennegpw?: Maybe<Scalars['Float']>;
  genpospw?: Maybe<Scalars['Float']>;
  heatsink?: Maybe<Scalars['Float']>;
  importpower?: Maybe<Scalars['Float']>;
  noseconds?: Maybe<Scalars['Float']>;
  pt1?: Maybe<Scalars['Float']>;
  pt2?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  voltage?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Eddi_Minute_Var_Samp_Fields = {
  __typename?: 'eddi_minute_var_samp_fields';
  boostloadpower1?: Maybe<Scalars['Float']>;
  boostloadpower2?: Maybe<Scalars['Float']>;
  divloadpower1?: Maybe<Scalars['Float']>;
  divloadpower2?: Maybe<Scalars['Float']>;
  exportpower?: Maybe<Scalars['Float']>;
  externalctnegpower1?: Maybe<Scalars['Float']>;
  externalctnegpower2?: Maybe<Scalars['Float']>;
  externalctpospower1?: Maybe<Scalars['Float']>;
  externalctpospower2?: Maybe<Scalars['Float']>;
  externalcttype1?: Maybe<Scalars['Float']>;
  externalcttype2?: Maybe<Scalars['Float']>;
  frequency?: Maybe<Scalars['Float']>;
  gennegpw?: Maybe<Scalars['Float']>;
  genpospw?: Maybe<Scalars['Float']>;
  heatsink?: Maybe<Scalars['Float']>;
  importpower?: Maybe<Scalars['Float']>;
  noseconds?: Maybe<Scalars['Float']>;
  pt1?: Maybe<Scalars['Float']>;
  pt2?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  voltage?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Eddi_Minute_Variance_Fields = {
  __typename?: 'eddi_minute_variance_fields';
  boostloadpower1?: Maybe<Scalars['Float']>;
  boostloadpower2?: Maybe<Scalars['Float']>;
  divloadpower1?: Maybe<Scalars['Float']>;
  divloadpower2?: Maybe<Scalars['Float']>;
  exportpower?: Maybe<Scalars['Float']>;
  externalctnegpower1?: Maybe<Scalars['Float']>;
  externalctnegpower2?: Maybe<Scalars['Float']>;
  externalctpospower1?: Maybe<Scalars['Float']>;
  externalctpospower2?: Maybe<Scalars['Float']>;
  externalcttype1?: Maybe<Scalars['Float']>;
  externalcttype2?: Maybe<Scalars['Float']>;
  frequency?: Maybe<Scalars['Float']>;
  gennegpw?: Maybe<Scalars['Float']>;
  genpospw?: Maybe<Scalars['Float']>;
  heatsink?: Maybe<Scalars['Float']>;
  importpower?: Maybe<Scalars['Float']>;
  noseconds?: Maybe<Scalars['Float']>;
  pt1?: Maybe<Scalars['Float']>;
  pt2?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  voltage?: Maybe<Scalars['Float']>;
};

/** response of any mutation on the table "eddi" */
export type Eddi_Mutation_Response = {
  __typename?: 'eddi_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Eddi>;
};

/** input type for inserting object relation for remote table "eddi" */
export type Eddi_Obj_Rel_Insert_Input = {
  data: Eddi_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Eddi_On_Conflict>;
};

/** on_conflict condition type for table "eddi" */
export type Eddi_On_Conflict = {
  constraint: Eddi_Constraint;
  update_columns?: Array<Eddi_Update_Column>;
  where?: InputMaybe<Eddi_Bool_Exp>;
};

/** Ordering options when selecting data from "eddi". */
export type Eddi_Order_By = {
  agggroupno?: InputMaybe<Order_By>;
  agglock?: InputMaybe<Order_By>;
  aggregation_datum?: InputMaybe<Aggregation_Data_Order_By>;
  aggregationdataid?: InputMaybe<Order_By>;
  boardtype?: InputMaybe<Order_By>;
  boostmanual?: InputMaybe<Order_By>;
  boosttimed?: InputMaybe<Order_By>;
  bootloaderversion?: InputMaybe<Order_By>;
  chargeenergy?: InputMaybe<Order_By>;
  checkperiod?: InputMaybe<Order_By>;
  commandseqno?: InputMaybe<Order_By>;
  configappdata?: InputMaybe<Order_By>;
  configappdone?: InputMaybe<Order_By>;
  configbootdata?: InputMaybe<Order_By>;
  configbootdone?: InputMaybe<Order_By>;
  configlength?: InputMaybe<Order_By>;
  configoffset?: InputMaybe<Order_By>;
  configstate?: InputMaybe<Order_By>;
  configstructure?: InputMaybe<Order_By>;
  configversion?: InputMaybe<Order_By>;
  createdat?: InputMaybe<Order_By>;
  ct1?: InputMaybe<Order_By>;
  ct2?: InputMaybe<Order_By>;
  ct2absent?: InputMaybe<Order_By>;
  ct3?: InputMaybe<Order_By>;
  ct3absent?: InputMaybe<Order_By>;
  ct4?: InputMaybe<Order_By>;
  ct5?: InputMaybe<Order_By>;
  ct6?: InputMaybe<Order_By>;
  ct7?: InputMaybe<Order_By>;
  ct8?: InputMaybe<Order_By>;
  ct9?: InputMaybe<Order_By>;
  ct10?: InputMaybe<Order_By>;
  ct11?: InputMaybe<Order_By>;
  ct12?: InputMaybe<Order_By>;
  ct13?: InputMaybe<Order_By>;
  ct14?: InputMaybe<Order_By>;
  ct15?: InputMaybe<Order_By>;
  ct16?: InputMaybe<Order_By>;
  currentboostremaining?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
  deviceaddressraw?: InputMaybe<Order_By>;
  deviceclass?: InputMaybe<Order_By>;
  deviceconfigtime?: InputMaybe<Order_By>;
  deviceinstance?: InputMaybe<Order_By>;
  dsrdataack?: InputMaybe<Order_By>;
  dsrdatacsn?: InputMaybe<Order_By>;
  dsrdatafda?: InputMaybe<Order_By>;
  dsrdatafde?: InputMaybe<Order_By>;
  dsrdatafdn?: InputMaybe<Order_By>;
  dsrdatafua?: InputMaybe<Order_By>;
  dsrdatafue?: InputMaybe<Order_By>;
  dsrdatafun?: InputMaybe<Order_By>;
  dsrdatalca?: InputMaybe<Order_By>;
  dsrdatalce?: InputMaybe<Order_By>;
  dsrdataload?: InputMaybe<Order_By>;
  dsrdataseconds?: InputMaybe<Order_By>;
  ethernetfitted?: InputMaybe<Order_By>;
  ethernetlink?: InputMaybe<Order_By>;
  ethernetmacaddress?: InputMaybe<Order_By>;
  ethernetspeed?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  heaterno?: InputMaybe<Order_By>;
  heatertype1?: InputMaybe<Order_By>;
  heatertype2?: InputMaybe<Order_By>;
  highpower?: InputMaybe<Order_By>;
  hub?: InputMaybe<Hub_Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  isaggregated?: InputMaybe<Order_By>;
  maxpower?: InputMaybe<Order_By>;
  melibversion?: InputMaybe<Order_By>;
  melinkversion?: InputMaybe<Order_By>;
  microprocessorti?: InputMaybe<Order_By>;
  minpower?: InputMaybe<Order_By>;
  phase?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  prioritychanges?: InputMaybe<Order_By>;
  productcode?: InputMaybe<Order_By>;
  pt1?: InputMaybe<Order_By>;
  pt2?: InputMaybe<Order_By>;
  relayboarddataboardconnected?: InputMaybe<Order_By>;
  relayboarddataesenseactive?: InputMaybe<Order_By>;
  relayboarddatarelay1active?: InputMaybe<Order_By>;
  relayboarddatarelay1boosttype?: InputMaybe<Order_By>;
  relayboarddatarelay2active?: InputMaybe<Order_By>;
  relayboarddatarelay2boosttype?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverconfigtime?: InputMaybe<Order_By>;
  specialversion?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  stubloaderversion?: InputMaybe<Order_By>;
  updatedat?: InputMaybe<Order_By>;
  vhub?: InputMaybe<Order_By>;
  voltage?: InputMaybe<Order_By>;
  wifilink?: InputMaybe<Order_By>;
};

/** primary key columns input for table: eddi */
export type Eddi_Pk_Columns_Input = {
  serialno: Scalars['bigint'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Eddi_Prepend_Input = {
  ct1?: InputMaybe<Scalars['jsonb']>;
  ct2?: InputMaybe<Scalars['jsonb']>;
  ct3?: InputMaybe<Scalars['jsonb']>;
  ct4?: InputMaybe<Scalars['jsonb']>;
  ct5?: InputMaybe<Scalars['jsonb']>;
  ct6?: InputMaybe<Scalars['jsonb']>;
  ct7?: InputMaybe<Scalars['jsonb']>;
  ct8?: InputMaybe<Scalars['jsonb']>;
  ct9?: InputMaybe<Scalars['jsonb']>;
  ct10?: InputMaybe<Scalars['jsonb']>;
  ct11?: InputMaybe<Scalars['jsonb']>;
  ct12?: InputMaybe<Scalars['jsonb']>;
  ct13?: InputMaybe<Scalars['jsonb']>;
  ct14?: InputMaybe<Scalars['jsonb']>;
  ct15?: InputMaybe<Scalars['jsonb']>;
  ct16?: InputMaybe<Scalars['jsonb']>;
  pt1?: InputMaybe<Scalars['jsonb']>;
  pt2?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "eddi" */
export enum Eddi_Select_Column {
  /** column name */
  Agggroupno = 'agggroupno',
  /** column name */
  Agglock = 'agglock',
  /** column name */
  Aggregationdataid = 'aggregationdataid',
  /** column name */
  Boardtype = 'boardtype',
  /** column name */
  Boostmanual = 'boostmanual',
  /** column name */
  Boosttimed = 'boosttimed',
  /** column name */
  Bootloaderversion = 'bootloaderversion',
  /** column name */
  Chargeenergy = 'chargeenergy',
  /** column name */
  Checkperiod = 'checkperiod',
  /** column name */
  Commandseqno = 'commandseqno',
  /** column name */
  Configappdata = 'configappdata',
  /** column name */
  Configappdone = 'configappdone',
  /** column name */
  Configbootdata = 'configbootdata',
  /** column name */
  Configbootdone = 'configbootdone',
  /** column name */
  Configlength = 'configlength',
  /** column name */
  Configoffset = 'configoffset',
  /** column name */
  Configstate = 'configstate',
  /** column name */
  Configstructure = 'configstructure',
  /** column name */
  Configversion = 'configversion',
  /** column name */
  Createdat = 'createdat',
  /** column name */
  Ct1 = 'ct1',
  /** column name */
  Ct2 = 'ct2',
  /** column name */
  Ct2absent = 'ct2absent',
  /** column name */
  Ct3 = 'ct3',
  /** column name */
  Ct3absent = 'ct3absent',
  /** column name */
  Ct4 = 'ct4',
  /** column name */
  Ct5 = 'ct5',
  /** column name */
  Ct6 = 'ct6',
  /** column name */
  Ct7 = 'ct7',
  /** column name */
  Ct8 = 'ct8',
  /** column name */
  Ct9 = 'ct9',
  /** column name */
  Ct10 = 'ct10',
  /** column name */
  Ct11 = 'ct11',
  /** column name */
  Ct12 = 'ct12',
  /** column name */
  Ct13 = 'ct13',
  /** column name */
  Ct14 = 'ct14',
  /** column name */
  Ct15 = 'ct15',
  /** column name */
  Ct16 = 'ct16',
  /** column name */
  Currentboostremaining = 'currentboostremaining',
  /** column name */
  Currentversion = 'currentversion',
  /** column name */
  Deviceaddressraw = 'deviceaddressraw',
  /** column name */
  Deviceclass = 'deviceclass',
  /** column name */
  Deviceconfigtime = 'deviceconfigtime',
  /** column name */
  Deviceinstance = 'deviceinstance',
  /** column name */
  Dsrdataack = 'dsrdataack',
  /** column name */
  Dsrdatacsn = 'dsrdatacsn',
  /** column name */
  Dsrdatafda = 'dsrdatafda',
  /** column name */
  Dsrdatafde = 'dsrdatafde',
  /** column name */
  Dsrdatafdn = 'dsrdatafdn',
  /** column name */
  Dsrdatafua = 'dsrdatafua',
  /** column name */
  Dsrdatafue = 'dsrdatafue',
  /** column name */
  Dsrdatafun = 'dsrdatafun',
  /** column name */
  Dsrdatalca = 'dsrdatalca',
  /** column name */
  Dsrdatalce = 'dsrdatalce',
  /** column name */
  Dsrdataload = 'dsrdataload',
  /** column name */
  Dsrdataseconds = 'dsrdataseconds',
  /** column name */
  Ethernetfitted = 'ethernetfitted',
  /** column name */
  Ethernetlink = 'ethernetlink',
  /** column name */
  Ethernetmacaddress = 'ethernetmacaddress',
  /** column name */
  Ethernetspeed = 'ethernetspeed',
  /** column name */
  Frequency = 'frequency',
  /** column name */
  Heaterno = 'heaterno',
  /** column name */
  Heatertype1 = 'heatertype1',
  /** column name */
  Heatertype2 = 'heatertype2',
  /** column name */
  Highpower = 'highpower',
  /** column name */
  Hubserialno = 'hubserialno',
  /** column name */
  Isaggregated = 'isaggregated',
  /** column name */
  Maxpower = 'maxpower',
  /** column name */
  Melibversion = 'melibversion',
  /** column name */
  Melinkversion = 'melinkversion',
  /** column name */
  Microprocessorti = 'microprocessorti',
  /** column name */
  Minpower = 'minpower',
  /** column name */
  Phase = 'phase',
  /** column name */
  Priority = 'priority',
  /** column name */
  Prioritychanges = 'prioritychanges',
  /** column name */
  Productcode = 'productcode',
  /** column name */
  Pt1 = 'pt1',
  /** column name */
  Pt2 = 'pt2',
  /** column name */
  Relayboarddataboardconnected = 'relayboarddataboardconnected',
  /** column name */
  Relayboarddataesenseactive = 'relayboarddataesenseactive',
  /** column name */
  Relayboarddatarelay1active = 'relayboarddatarelay1active',
  /** column name */
  Relayboarddatarelay1boosttype = 'relayboarddatarelay1boosttype',
  /** column name */
  Relayboarddatarelay2active = 'relayboarddatarelay2active',
  /** column name */
  Relayboarddatarelay2boosttype = 'relayboarddatarelay2boosttype',
  /** column name */
  Serialno = 'serialno',
  /** column name */
  Serverconfigtime = 'serverconfigtime',
  /** column name */
  Specialversion = 'specialversion',
  /** column name */
  State = 'state',
  /** column name */
  Stubloaderversion = 'stubloaderversion',
  /** column name */
  Updatedat = 'updatedat',
  /** column name */
  Vhub = 'vhub',
  /** column name */
  Voltage = 'voltage',
  /** column name */
  Wifilink = 'wifilink',
}

/** input type for updating data in table "eddi" */
export type Eddi_Set_Input = {
  agggroupno?: InputMaybe<Scalars['Int']>;
  agglock?: InputMaybe<Scalars['smallint']>;
  aggregationdataid?: InputMaybe<Scalars['Int']>;
  boardtype?: InputMaybe<Scalars['String']>;
  boostmanual?: InputMaybe<Scalars['Boolean']>;
  boosttimed?: InputMaybe<Scalars['Boolean']>;
  bootloaderversion?: InputMaybe<Scalars['Int']>;
  chargeenergy?: InputMaybe<Scalars['Float']>;
  checkperiod?: InputMaybe<Scalars['smallint']>;
  commandseqno?: InputMaybe<Scalars['smallint']>;
  configappdata?: InputMaybe<Scalars['bytea']>;
  configappdone?: InputMaybe<Scalars['Boolean']>;
  configbootdata?: InputMaybe<Scalars['bytea']>;
  configbootdone?: InputMaybe<Scalars['Boolean']>;
  configlength?: InputMaybe<Scalars['smallint']>;
  configoffset?: InputMaybe<Scalars['smallint']>;
  configstate?: InputMaybe<Scalars['smallint']>;
  configstructure?: InputMaybe<Scalars['smallint']>;
  configversion?: InputMaybe<Scalars['smallint']>;
  createdat?: InputMaybe<Scalars['timestamptz']>;
  ct1?: InputMaybe<Scalars['jsonb']>;
  ct2?: InputMaybe<Scalars['jsonb']>;
  ct2absent?: InputMaybe<Scalars['smallint']>;
  ct3?: InputMaybe<Scalars['jsonb']>;
  ct3absent?: InputMaybe<Scalars['smallint']>;
  ct4?: InputMaybe<Scalars['jsonb']>;
  ct5?: InputMaybe<Scalars['jsonb']>;
  ct6?: InputMaybe<Scalars['jsonb']>;
  ct7?: InputMaybe<Scalars['jsonb']>;
  ct8?: InputMaybe<Scalars['jsonb']>;
  ct9?: InputMaybe<Scalars['jsonb']>;
  ct10?: InputMaybe<Scalars['jsonb']>;
  ct11?: InputMaybe<Scalars['jsonb']>;
  ct12?: InputMaybe<Scalars['jsonb']>;
  ct13?: InputMaybe<Scalars['jsonb']>;
  ct14?: InputMaybe<Scalars['jsonb']>;
  ct15?: InputMaybe<Scalars['jsonb']>;
  ct16?: InputMaybe<Scalars['jsonb']>;
  currentboostremaining?: InputMaybe<Scalars['smallint']>;
  currentversion?: InputMaybe<Scalars['Int']>;
  deviceaddressraw?: InputMaybe<Scalars['Int']>;
  deviceclass?: InputMaybe<Scalars['String']>;
  deviceconfigtime?: InputMaybe<Scalars['bigint']>;
  deviceinstance?: InputMaybe<Scalars['Int']>;
  dsrdataack?: InputMaybe<Scalars['smallint']>;
  dsrdatacsn?: InputMaybe<Scalars['smallint']>;
  dsrdatafda?: InputMaybe<Scalars['Boolean']>;
  dsrdatafde?: InputMaybe<Scalars['Boolean']>;
  dsrdatafdn?: InputMaybe<Scalars['Boolean']>;
  dsrdatafua?: InputMaybe<Scalars['Boolean']>;
  dsrdatafue?: InputMaybe<Scalars['Boolean']>;
  dsrdatafun?: InputMaybe<Scalars['Boolean']>;
  dsrdatalca?: InputMaybe<Scalars['Boolean']>;
  dsrdatalce?: InputMaybe<Scalars['Boolean']>;
  dsrdataload?: InputMaybe<Scalars['smallint']>;
  dsrdataseconds?: InputMaybe<Scalars['smallint']>;
  ethernetfitted?: InputMaybe<Scalars['Boolean']>;
  ethernetlink?: InputMaybe<Scalars['Boolean']>;
  ethernetmacaddress?: InputMaybe<Scalars['macaddr']>;
  ethernetspeed?: InputMaybe<Scalars['String']>;
  frequency?: InputMaybe<Scalars['smallint']>;
  heaterno?: InputMaybe<Scalars['smallint']>;
  heatertype1?: InputMaybe<Scalars['String']>;
  heatertype2?: InputMaybe<Scalars['String']>;
  highpower?: InputMaybe<Scalars['Boolean']>;
  hubserialno?: InputMaybe<Scalars['bigint']>;
  isaggregated?: InputMaybe<Scalars['Boolean']>;
  maxpower?: InputMaybe<Scalars['Int']>;
  melibversion?: InputMaybe<Scalars['Int']>;
  melinkversion?: InputMaybe<Scalars['Int']>;
  microprocessorti?: InputMaybe<Scalars['Boolean']>;
  minpower?: InputMaybe<Scalars['Int']>;
  phase?: InputMaybe<Scalars['smallint']>;
  priority?: InputMaybe<Scalars['smallint']>;
  prioritychanges?: InputMaybe<Scalars['smallint']>;
  productcode?: InputMaybe<Scalars['smallint']>;
  pt1?: InputMaybe<Scalars['jsonb']>;
  pt2?: InputMaybe<Scalars['jsonb']>;
  relayboarddataboardconnected?: InputMaybe<Scalars['Boolean']>;
  relayboarddataesenseactive?: InputMaybe<Scalars['Boolean']>;
  relayboarddatarelay1active?: InputMaybe<Scalars['Boolean']>;
  relayboarddatarelay1boosttype?: InputMaybe<Scalars['String']>;
  relayboarddatarelay2active?: InputMaybe<Scalars['Boolean']>;
  relayboarddatarelay2boosttype?: InputMaybe<Scalars['String']>;
  serialno?: InputMaybe<Scalars['bigint']>;
  serverconfigtime?: InputMaybe<Scalars['Int']>;
  specialversion?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  stubloaderversion?: InputMaybe<Scalars['Int']>;
  updatedat?: InputMaybe<Scalars['timestamptz']>;
  vhub?: InputMaybe<Scalars['Boolean']>;
  voltage?: InputMaybe<Scalars['smallint']>;
  wifilink?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Eddi_Stddev_Fields = {
  __typename?: 'eddi_stddev_fields';
  agggroupno?: Maybe<Scalars['Float']>;
  agglock?: Maybe<Scalars['Float']>;
  aggregationdataid?: Maybe<Scalars['Float']>;
  bootloaderversion?: Maybe<Scalars['Float']>;
  chargeenergy?: Maybe<Scalars['Float']>;
  checkperiod?: Maybe<Scalars['Float']>;
  commandseqno?: Maybe<Scalars['Float']>;
  configlength?: Maybe<Scalars['Float']>;
  configoffset?: Maybe<Scalars['Float']>;
  configstate?: Maybe<Scalars['Float']>;
  configstructure?: Maybe<Scalars['Float']>;
  configversion?: Maybe<Scalars['Float']>;
  ct2absent?: Maybe<Scalars['Float']>;
  ct3absent?: Maybe<Scalars['Float']>;
  currentboostremaining?: Maybe<Scalars['Float']>;
  currentversion?: Maybe<Scalars['Float']>;
  deviceaddressraw?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  deviceinstance?: Maybe<Scalars['Float']>;
  dsrdataack?: Maybe<Scalars['Float']>;
  dsrdatacsn?: Maybe<Scalars['Float']>;
  dsrdataload?: Maybe<Scalars['Float']>;
  dsrdataseconds?: Maybe<Scalars['Float']>;
  frequency?: Maybe<Scalars['Float']>;
  heaterno?: Maybe<Scalars['Float']>;
  hubserialno?: Maybe<Scalars['Float']>;
  maxpower?: Maybe<Scalars['Float']>;
  melibversion?: Maybe<Scalars['Float']>;
  melinkversion?: Maybe<Scalars['Float']>;
  minpower?: Maybe<Scalars['Float']>;
  phase?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
  prioritychanges?: Maybe<Scalars['Float']>;
  productcode?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  serverconfigtime?: Maybe<Scalars['Float']>;
  stubloaderversion?: Maybe<Scalars['Float']>;
  voltage?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "eddi" */
export type Eddi_Stddev_Order_By = {
  agggroupno?: InputMaybe<Order_By>;
  agglock?: InputMaybe<Order_By>;
  aggregationdataid?: InputMaybe<Order_By>;
  bootloaderversion?: InputMaybe<Order_By>;
  chargeenergy?: InputMaybe<Order_By>;
  checkperiod?: InputMaybe<Order_By>;
  commandseqno?: InputMaybe<Order_By>;
  configlength?: InputMaybe<Order_By>;
  configoffset?: InputMaybe<Order_By>;
  configstate?: InputMaybe<Order_By>;
  configstructure?: InputMaybe<Order_By>;
  configversion?: InputMaybe<Order_By>;
  ct2absent?: InputMaybe<Order_By>;
  ct3absent?: InputMaybe<Order_By>;
  currentboostremaining?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
  deviceaddressraw?: InputMaybe<Order_By>;
  deviceconfigtime?: InputMaybe<Order_By>;
  deviceinstance?: InputMaybe<Order_By>;
  dsrdataack?: InputMaybe<Order_By>;
  dsrdatacsn?: InputMaybe<Order_By>;
  dsrdataload?: InputMaybe<Order_By>;
  dsrdataseconds?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  heaterno?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  maxpower?: InputMaybe<Order_By>;
  melibversion?: InputMaybe<Order_By>;
  melinkversion?: InputMaybe<Order_By>;
  minpower?: InputMaybe<Order_By>;
  phase?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  prioritychanges?: InputMaybe<Order_By>;
  productcode?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverconfigtime?: InputMaybe<Order_By>;
  stubloaderversion?: InputMaybe<Order_By>;
  voltage?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Eddi_Stddev_Pop_Fields = {
  __typename?: 'eddi_stddev_pop_fields';
  agggroupno?: Maybe<Scalars['Float']>;
  agglock?: Maybe<Scalars['Float']>;
  aggregationdataid?: Maybe<Scalars['Float']>;
  bootloaderversion?: Maybe<Scalars['Float']>;
  chargeenergy?: Maybe<Scalars['Float']>;
  checkperiod?: Maybe<Scalars['Float']>;
  commandseqno?: Maybe<Scalars['Float']>;
  configlength?: Maybe<Scalars['Float']>;
  configoffset?: Maybe<Scalars['Float']>;
  configstate?: Maybe<Scalars['Float']>;
  configstructure?: Maybe<Scalars['Float']>;
  configversion?: Maybe<Scalars['Float']>;
  ct2absent?: Maybe<Scalars['Float']>;
  ct3absent?: Maybe<Scalars['Float']>;
  currentboostremaining?: Maybe<Scalars['Float']>;
  currentversion?: Maybe<Scalars['Float']>;
  deviceaddressraw?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  deviceinstance?: Maybe<Scalars['Float']>;
  dsrdataack?: Maybe<Scalars['Float']>;
  dsrdatacsn?: Maybe<Scalars['Float']>;
  dsrdataload?: Maybe<Scalars['Float']>;
  dsrdataseconds?: Maybe<Scalars['Float']>;
  frequency?: Maybe<Scalars['Float']>;
  heaterno?: Maybe<Scalars['Float']>;
  hubserialno?: Maybe<Scalars['Float']>;
  maxpower?: Maybe<Scalars['Float']>;
  melibversion?: Maybe<Scalars['Float']>;
  melinkversion?: Maybe<Scalars['Float']>;
  minpower?: Maybe<Scalars['Float']>;
  phase?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
  prioritychanges?: Maybe<Scalars['Float']>;
  productcode?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  serverconfigtime?: Maybe<Scalars['Float']>;
  stubloaderversion?: Maybe<Scalars['Float']>;
  voltage?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "eddi" */
export type Eddi_Stddev_Pop_Order_By = {
  agggroupno?: InputMaybe<Order_By>;
  agglock?: InputMaybe<Order_By>;
  aggregationdataid?: InputMaybe<Order_By>;
  bootloaderversion?: InputMaybe<Order_By>;
  chargeenergy?: InputMaybe<Order_By>;
  checkperiod?: InputMaybe<Order_By>;
  commandseqno?: InputMaybe<Order_By>;
  configlength?: InputMaybe<Order_By>;
  configoffset?: InputMaybe<Order_By>;
  configstate?: InputMaybe<Order_By>;
  configstructure?: InputMaybe<Order_By>;
  configversion?: InputMaybe<Order_By>;
  ct2absent?: InputMaybe<Order_By>;
  ct3absent?: InputMaybe<Order_By>;
  currentboostremaining?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
  deviceaddressraw?: InputMaybe<Order_By>;
  deviceconfigtime?: InputMaybe<Order_By>;
  deviceinstance?: InputMaybe<Order_By>;
  dsrdataack?: InputMaybe<Order_By>;
  dsrdatacsn?: InputMaybe<Order_By>;
  dsrdataload?: InputMaybe<Order_By>;
  dsrdataseconds?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  heaterno?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  maxpower?: InputMaybe<Order_By>;
  melibversion?: InputMaybe<Order_By>;
  melinkversion?: InputMaybe<Order_By>;
  minpower?: InputMaybe<Order_By>;
  phase?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  prioritychanges?: InputMaybe<Order_By>;
  productcode?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverconfigtime?: InputMaybe<Order_By>;
  stubloaderversion?: InputMaybe<Order_By>;
  voltage?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Eddi_Stddev_Samp_Fields = {
  __typename?: 'eddi_stddev_samp_fields';
  agggroupno?: Maybe<Scalars['Float']>;
  agglock?: Maybe<Scalars['Float']>;
  aggregationdataid?: Maybe<Scalars['Float']>;
  bootloaderversion?: Maybe<Scalars['Float']>;
  chargeenergy?: Maybe<Scalars['Float']>;
  checkperiod?: Maybe<Scalars['Float']>;
  commandseqno?: Maybe<Scalars['Float']>;
  configlength?: Maybe<Scalars['Float']>;
  configoffset?: Maybe<Scalars['Float']>;
  configstate?: Maybe<Scalars['Float']>;
  configstructure?: Maybe<Scalars['Float']>;
  configversion?: Maybe<Scalars['Float']>;
  ct2absent?: Maybe<Scalars['Float']>;
  ct3absent?: Maybe<Scalars['Float']>;
  currentboostremaining?: Maybe<Scalars['Float']>;
  currentversion?: Maybe<Scalars['Float']>;
  deviceaddressraw?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  deviceinstance?: Maybe<Scalars['Float']>;
  dsrdataack?: Maybe<Scalars['Float']>;
  dsrdatacsn?: Maybe<Scalars['Float']>;
  dsrdataload?: Maybe<Scalars['Float']>;
  dsrdataseconds?: Maybe<Scalars['Float']>;
  frequency?: Maybe<Scalars['Float']>;
  heaterno?: Maybe<Scalars['Float']>;
  hubserialno?: Maybe<Scalars['Float']>;
  maxpower?: Maybe<Scalars['Float']>;
  melibversion?: Maybe<Scalars['Float']>;
  melinkversion?: Maybe<Scalars['Float']>;
  minpower?: Maybe<Scalars['Float']>;
  phase?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
  prioritychanges?: Maybe<Scalars['Float']>;
  productcode?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  serverconfigtime?: Maybe<Scalars['Float']>;
  stubloaderversion?: Maybe<Scalars['Float']>;
  voltage?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "eddi" */
export type Eddi_Stddev_Samp_Order_By = {
  agggroupno?: InputMaybe<Order_By>;
  agglock?: InputMaybe<Order_By>;
  aggregationdataid?: InputMaybe<Order_By>;
  bootloaderversion?: InputMaybe<Order_By>;
  chargeenergy?: InputMaybe<Order_By>;
  checkperiod?: InputMaybe<Order_By>;
  commandseqno?: InputMaybe<Order_By>;
  configlength?: InputMaybe<Order_By>;
  configoffset?: InputMaybe<Order_By>;
  configstate?: InputMaybe<Order_By>;
  configstructure?: InputMaybe<Order_By>;
  configversion?: InputMaybe<Order_By>;
  ct2absent?: InputMaybe<Order_By>;
  ct3absent?: InputMaybe<Order_By>;
  currentboostremaining?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
  deviceaddressraw?: InputMaybe<Order_By>;
  deviceconfigtime?: InputMaybe<Order_By>;
  deviceinstance?: InputMaybe<Order_By>;
  dsrdataack?: InputMaybe<Order_By>;
  dsrdatacsn?: InputMaybe<Order_By>;
  dsrdataload?: InputMaybe<Order_By>;
  dsrdataseconds?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  heaterno?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  maxpower?: InputMaybe<Order_By>;
  melibversion?: InputMaybe<Order_By>;
  melinkversion?: InputMaybe<Order_By>;
  minpower?: InputMaybe<Order_By>;
  phase?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  prioritychanges?: InputMaybe<Order_By>;
  productcode?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverconfigtime?: InputMaybe<Order_By>;
  stubloaderversion?: InputMaybe<Order_By>;
  voltage?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Eddi_Sum_Fields = {
  __typename?: 'eddi_sum_fields';
  agggroupno?: Maybe<Scalars['Int']>;
  agglock?: Maybe<Scalars['smallint']>;
  aggregationdataid?: Maybe<Scalars['Int']>;
  bootloaderversion?: Maybe<Scalars['Int']>;
  chargeenergy?: Maybe<Scalars['Float']>;
  checkperiod?: Maybe<Scalars['smallint']>;
  commandseqno?: Maybe<Scalars['smallint']>;
  configlength?: Maybe<Scalars['smallint']>;
  configoffset?: Maybe<Scalars['smallint']>;
  configstate?: Maybe<Scalars['smallint']>;
  configstructure?: Maybe<Scalars['smallint']>;
  configversion?: Maybe<Scalars['smallint']>;
  ct2absent?: Maybe<Scalars['smallint']>;
  ct3absent?: Maybe<Scalars['smallint']>;
  currentboostremaining?: Maybe<Scalars['smallint']>;
  currentversion?: Maybe<Scalars['Int']>;
  deviceaddressraw?: Maybe<Scalars['Int']>;
  deviceconfigtime?: Maybe<Scalars['bigint']>;
  deviceinstance?: Maybe<Scalars['Int']>;
  dsrdataack?: Maybe<Scalars['smallint']>;
  dsrdatacsn?: Maybe<Scalars['smallint']>;
  dsrdataload?: Maybe<Scalars['smallint']>;
  dsrdataseconds?: Maybe<Scalars['smallint']>;
  frequency?: Maybe<Scalars['smallint']>;
  heaterno?: Maybe<Scalars['smallint']>;
  hubserialno?: Maybe<Scalars['bigint']>;
  maxpower?: Maybe<Scalars['Int']>;
  melibversion?: Maybe<Scalars['Int']>;
  melinkversion?: Maybe<Scalars['Int']>;
  minpower?: Maybe<Scalars['Int']>;
  phase?: Maybe<Scalars['smallint']>;
  priority?: Maybe<Scalars['smallint']>;
  prioritychanges?: Maybe<Scalars['smallint']>;
  productcode?: Maybe<Scalars['smallint']>;
  serialno?: Maybe<Scalars['bigint']>;
  serverconfigtime?: Maybe<Scalars['Int']>;
  stubloaderversion?: Maybe<Scalars['Int']>;
  voltage?: Maybe<Scalars['smallint']>;
};

/** order by sum() on columns of table "eddi" */
export type Eddi_Sum_Order_By = {
  agggroupno?: InputMaybe<Order_By>;
  agglock?: InputMaybe<Order_By>;
  aggregationdataid?: InputMaybe<Order_By>;
  bootloaderversion?: InputMaybe<Order_By>;
  chargeenergy?: InputMaybe<Order_By>;
  checkperiod?: InputMaybe<Order_By>;
  commandseqno?: InputMaybe<Order_By>;
  configlength?: InputMaybe<Order_By>;
  configoffset?: InputMaybe<Order_By>;
  configstate?: InputMaybe<Order_By>;
  configstructure?: InputMaybe<Order_By>;
  configversion?: InputMaybe<Order_By>;
  ct2absent?: InputMaybe<Order_By>;
  ct3absent?: InputMaybe<Order_By>;
  currentboostremaining?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
  deviceaddressraw?: InputMaybe<Order_By>;
  deviceconfigtime?: InputMaybe<Order_By>;
  deviceinstance?: InputMaybe<Order_By>;
  dsrdataack?: InputMaybe<Order_By>;
  dsrdatacsn?: InputMaybe<Order_By>;
  dsrdataload?: InputMaybe<Order_By>;
  dsrdataseconds?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  heaterno?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  maxpower?: InputMaybe<Order_By>;
  melibversion?: InputMaybe<Order_By>;
  melinkversion?: InputMaybe<Order_By>;
  minpower?: InputMaybe<Order_By>;
  phase?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  prioritychanges?: InputMaybe<Order_By>;
  productcode?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverconfigtime?: InputMaybe<Order_By>;
  stubloaderversion?: InputMaybe<Order_By>;
  voltage?: InputMaybe<Order_By>;
};

/** update columns of table "eddi" */
export enum Eddi_Update_Column {
  /** column name */
  Agggroupno = 'agggroupno',
  /** column name */
  Agglock = 'agglock',
  /** column name */
  Aggregationdataid = 'aggregationdataid',
  /** column name */
  Boardtype = 'boardtype',
  /** column name */
  Boostmanual = 'boostmanual',
  /** column name */
  Boosttimed = 'boosttimed',
  /** column name */
  Bootloaderversion = 'bootloaderversion',
  /** column name */
  Chargeenergy = 'chargeenergy',
  /** column name */
  Checkperiod = 'checkperiod',
  /** column name */
  Commandseqno = 'commandseqno',
  /** column name */
  Configappdata = 'configappdata',
  /** column name */
  Configappdone = 'configappdone',
  /** column name */
  Configbootdata = 'configbootdata',
  /** column name */
  Configbootdone = 'configbootdone',
  /** column name */
  Configlength = 'configlength',
  /** column name */
  Configoffset = 'configoffset',
  /** column name */
  Configstate = 'configstate',
  /** column name */
  Configstructure = 'configstructure',
  /** column name */
  Configversion = 'configversion',
  /** column name */
  Createdat = 'createdat',
  /** column name */
  Ct1 = 'ct1',
  /** column name */
  Ct2 = 'ct2',
  /** column name */
  Ct2absent = 'ct2absent',
  /** column name */
  Ct3 = 'ct3',
  /** column name */
  Ct3absent = 'ct3absent',
  /** column name */
  Ct4 = 'ct4',
  /** column name */
  Ct5 = 'ct5',
  /** column name */
  Ct6 = 'ct6',
  /** column name */
  Ct7 = 'ct7',
  /** column name */
  Ct8 = 'ct8',
  /** column name */
  Ct9 = 'ct9',
  /** column name */
  Ct10 = 'ct10',
  /** column name */
  Ct11 = 'ct11',
  /** column name */
  Ct12 = 'ct12',
  /** column name */
  Ct13 = 'ct13',
  /** column name */
  Ct14 = 'ct14',
  /** column name */
  Ct15 = 'ct15',
  /** column name */
  Ct16 = 'ct16',
  /** column name */
  Currentboostremaining = 'currentboostremaining',
  /** column name */
  Currentversion = 'currentversion',
  /** column name */
  Deviceaddressraw = 'deviceaddressraw',
  /** column name */
  Deviceclass = 'deviceclass',
  /** column name */
  Deviceconfigtime = 'deviceconfigtime',
  /** column name */
  Deviceinstance = 'deviceinstance',
  /** column name */
  Dsrdataack = 'dsrdataack',
  /** column name */
  Dsrdatacsn = 'dsrdatacsn',
  /** column name */
  Dsrdatafda = 'dsrdatafda',
  /** column name */
  Dsrdatafde = 'dsrdatafde',
  /** column name */
  Dsrdatafdn = 'dsrdatafdn',
  /** column name */
  Dsrdatafua = 'dsrdatafua',
  /** column name */
  Dsrdatafue = 'dsrdatafue',
  /** column name */
  Dsrdatafun = 'dsrdatafun',
  /** column name */
  Dsrdatalca = 'dsrdatalca',
  /** column name */
  Dsrdatalce = 'dsrdatalce',
  /** column name */
  Dsrdataload = 'dsrdataload',
  /** column name */
  Dsrdataseconds = 'dsrdataseconds',
  /** column name */
  Ethernetfitted = 'ethernetfitted',
  /** column name */
  Ethernetlink = 'ethernetlink',
  /** column name */
  Ethernetmacaddress = 'ethernetmacaddress',
  /** column name */
  Ethernetspeed = 'ethernetspeed',
  /** column name */
  Frequency = 'frequency',
  /** column name */
  Heaterno = 'heaterno',
  /** column name */
  Heatertype1 = 'heatertype1',
  /** column name */
  Heatertype2 = 'heatertype2',
  /** column name */
  Highpower = 'highpower',
  /** column name */
  Hubserialno = 'hubserialno',
  /** column name */
  Isaggregated = 'isaggregated',
  /** column name */
  Maxpower = 'maxpower',
  /** column name */
  Melibversion = 'melibversion',
  /** column name */
  Melinkversion = 'melinkversion',
  /** column name */
  Microprocessorti = 'microprocessorti',
  /** column name */
  Minpower = 'minpower',
  /** column name */
  Phase = 'phase',
  /** column name */
  Priority = 'priority',
  /** column name */
  Prioritychanges = 'prioritychanges',
  /** column name */
  Productcode = 'productcode',
  /** column name */
  Pt1 = 'pt1',
  /** column name */
  Pt2 = 'pt2',
  /** column name */
  Relayboarddataboardconnected = 'relayboarddataboardconnected',
  /** column name */
  Relayboarddataesenseactive = 'relayboarddataesenseactive',
  /** column name */
  Relayboarddatarelay1active = 'relayboarddatarelay1active',
  /** column name */
  Relayboarddatarelay1boosttype = 'relayboarddatarelay1boosttype',
  /** column name */
  Relayboarddatarelay2active = 'relayboarddatarelay2active',
  /** column name */
  Relayboarddatarelay2boosttype = 'relayboarddatarelay2boosttype',
  /** column name */
  Serialno = 'serialno',
  /** column name */
  Serverconfigtime = 'serverconfigtime',
  /** column name */
  Specialversion = 'specialversion',
  /** column name */
  State = 'state',
  /** column name */
  Stubloaderversion = 'stubloaderversion',
  /** column name */
  Updatedat = 'updatedat',
  /** column name */
  Vhub = 'vhub',
  /** column name */
  Voltage = 'voltage',
  /** column name */
  Wifilink = 'wifilink',
}

/** aggregate var_pop on columns */
export type Eddi_Var_Pop_Fields = {
  __typename?: 'eddi_var_pop_fields';
  agggroupno?: Maybe<Scalars['Float']>;
  agglock?: Maybe<Scalars['Float']>;
  aggregationdataid?: Maybe<Scalars['Float']>;
  bootloaderversion?: Maybe<Scalars['Float']>;
  chargeenergy?: Maybe<Scalars['Float']>;
  checkperiod?: Maybe<Scalars['Float']>;
  commandseqno?: Maybe<Scalars['Float']>;
  configlength?: Maybe<Scalars['Float']>;
  configoffset?: Maybe<Scalars['Float']>;
  configstate?: Maybe<Scalars['Float']>;
  configstructure?: Maybe<Scalars['Float']>;
  configversion?: Maybe<Scalars['Float']>;
  ct2absent?: Maybe<Scalars['Float']>;
  ct3absent?: Maybe<Scalars['Float']>;
  currentboostremaining?: Maybe<Scalars['Float']>;
  currentversion?: Maybe<Scalars['Float']>;
  deviceaddressraw?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  deviceinstance?: Maybe<Scalars['Float']>;
  dsrdataack?: Maybe<Scalars['Float']>;
  dsrdatacsn?: Maybe<Scalars['Float']>;
  dsrdataload?: Maybe<Scalars['Float']>;
  dsrdataseconds?: Maybe<Scalars['Float']>;
  frequency?: Maybe<Scalars['Float']>;
  heaterno?: Maybe<Scalars['Float']>;
  hubserialno?: Maybe<Scalars['Float']>;
  maxpower?: Maybe<Scalars['Float']>;
  melibversion?: Maybe<Scalars['Float']>;
  melinkversion?: Maybe<Scalars['Float']>;
  minpower?: Maybe<Scalars['Float']>;
  phase?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
  prioritychanges?: Maybe<Scalars['Float']>;
  productcode?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  serverconfigtime?: Maybe<Scalars['Float']>;
  stubloaderversion?: Maybe<Scalars['Float']>;
  voltage?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "eddi" */
export type Eddi_Var_Pop_Order_By = {
  agggroupno?: InputMaybe<Order_By>;
  agglock?: InputMaybe<Order_By>;
  aggregationdataid?: InputMaybe<Order_By>;
  bootloaderversion?: InputMaybe<Order_By>;
  chargeenergy?: InputMaybe<Order_By>;
  checkperiod?: InputMaybe<Order_By>;
  commandseqno?: InputMaybe<Order_By>;
  configlength?: InputMaybe<Order_By>;
  configoffset?: InputMaybe<Order_By>;
  configstate?: InputMaybe<Order_By>;
  configstructure?: InputMaybe<Order_By>;
  configversion?: InputMaybe<Order_By>;
  ct2absent?: InputMaybe<Order_By>;
  ct3absent?: InputMaybe<Order_By>;
  currentboostremaining?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
  deviceaddressraw?: InputMaybe<Order_By>;
  deviceconfigtime?: InputMaybe<Order_By>;
  deviceinstance?: InputMaybe<Order_By>;
  dsrdataack?: InputMaybe<Order_By>;
  dsrdatacsn?: InputMaybe<Order_By>;
  dsrdataload?: InputMaybe<Order_By>;
  dsrdataseconds?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  heaterno?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  maxpower?: InputMaybe<Order_By>;
  melibversion?: InputMaybe<Order_By>;
  melinkversion?: InputMaybe<Order_By>;
  minpower?: InputMaybe<Order_By>;
  phase?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  prioritychanges?: InputMaybe<Order_By>;
  productcode?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverconfigtime?: InputMaybe<Order_By>;
  stubloaderversion?: InputMaybe<Order_By>;
  voltage?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Eddi_Var_Samp_Fields = {
  __typename?: 'eddi_var_samp_fields';
  agggroupno?: Maybe<Scalars['Float']>;
  agglock?: Maybe<Scalars['Float']>;
  aggregationdataid?: Maybe<Scalars['Float']>;
  bootloaderversion?: Maybe<Scalars['Float']>;
  chargeenergy?: Maybe<Scalars['Float']>;
  checkperiod?: Maybe<Scalars['Float']>;
  commandseqno?: Maybe<Scalars['Float']>;
  configlength?: Maybe<Scalars['Float']>;
  configoffset?: Maybe<Scalars['Float']>;
  configstate?: Maybe<Scalars['Float']>;
  configstructure?: Maybe<Scalars['Float']>;
  configversion?: Maybe<Scalars['Float']>;
  ct2absent?: Maybe<Scalars['Float']>;
  ct3absent?: Maybe<Scalars['Float']>;
  currentboostremaining?: Maybe<Scalars['Float']>;
  currentversion?: Maybe<Scalars['Float']>;
  deviceaddressraw?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  deviceinstance?: Maybe<Scalars['Float']>;
  dsrdataack?: Maybe<Scalars['Float']>;
  dsrdatacsn?: Maybe<Scalars['Float']>;
  dsrdataload?: Maybe<Scalars['Float']>;
  dsrdataseconds?: Maybe<Scalars['Float']>;
  frequency?: Maybe<Scalars['Float']>;
  heaterno?: Maybe<Scalars['Float']>;
  hubserialno?: Maybe<Scalars['Float']>;
  maxpower?: Maybe<Scalars['Float']>;
  melibversion?: Maybe<Scalars['Float']>;
  melinkversion?: Maybe<Scalars['Float']>;
  minpower?: Maybe<Scalars['Float']>;
  phase?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
  prioritychanges?: Maybe<Scalars['Float']>;
  productcode?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  serverconfigtime?: Maybe<Scalars['Float']>;
  stubloaderversion?: Maybe<Scalars['Float']>;
  voltage?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "eddi" */
export type Eddi_Var_Samp_Order_By = {
  agggroupno?: InputMaybe<Order_By>;
  agglock?: InputMaybe<Order_By>;
  aggregationdataid?: InputMaybe<Order_By>;
  bootloaderversion?: InputMaybe<Order_By>;
  chargeenergy?: InputMaybe<Order_By>;
  checkperiod?: InputMaybe<Order_By>;
  commandseqno?: InputMaybe<Order_By>;
  configlength?: InputMaybe<Order_By>;
  configoffset?: InputMaybe<Order_By>;
  configstate?: InputMaybe<Order_By>;
  configstructure?: InputMaybe<Order_By>;
  configversion?: InputMaybe<Order_By>;
  ct2absent?: InputMaybe<Order_By>;
  ct3absent?: InputMaybe<Order_By>;
  currentboostremaining?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
  deviceaddressraw?: InputMaybe<Order_By>;
  deviceconfigtime?: InputMaybe<Order_By>;
  deviceinstance?: InputMaybe<Order_By>;
  dsrdataack?: InputMaybe<Order_By>;
  dsrdatacsn?: InputMaybe<Order_By>;
  dsrdataload?: InputMaybe<Order_By>;
  dsrdataseconds?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  heaterno?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  maxpower?: InputMaybe<Order_By>;
  melibversion?: InputMaybe<Order_By>;
  melinkversion?: InputMaybe<Order_By>;
  minpower?: InputMaybe<Order_By>;
  phase?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  prioritychanges?: InputMaybe<Order_By>;
  productcode?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverconfigtime?: InputMaybe<Order_By>;
  stubloaderversion?: InputMaybe<Order_By>;
  voltage?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Eddi_Variance_Fields = {
  __typename?: 'eddi_variance_fields';
  agggroupno?: Maybe<Scalars['Float']>;
  agglock?: Maybe<Scalars['Float']>;
  aggregationdataid?: Maybe<Scalars['Float']>;
  bootloaderversion?: Maybe<Scalars['Float']>;
  chargeenergy?: Maybe<Scalars['Float']>;
  checkperiod?: Maybe<Scalars['Float']>;
  commandseqno?: Maybe<Scalars['Float']>;
  configlength?: Maybe<Scalars['Float']>;
  configoffset?: Maybe<Scalars['Float']>;
  configstate?: Maybe<Scalars['Float']>;
  configstructure?: Maybe<Scalars['Float']>;
  configversion?: Maybe<Scalars['Float']>;
  ct2absent?: Maybe<Scalars['Float']>;
  ct3absent?: Maybe<Scalars['Float']>;
  currentboostremaining?: Maybe<Scalars['Float']>;
  currentversion?: Maybe<Scalars['Float']>;
  deviceaddressraw?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  deviceinstance?: Maybe<Scalars['Float']>;
  dsrdataack?: Maybe<Scalars['Float']>;
  dsrdatacsn?: Maybe<Scalars['Float']>;
  dsrdataload?: Maybe<Scalars['Float']>;
  dsrdataseconds?: Maybe<Scalars['Float']>;
  frequency?: Maybe<Scalars['Float']>;
  heaterno?: Maybe<Scalars['Float']>;
  hubserialno?: Maybe<Scalars['Float']>;
  maxpower?: Maybe<Scalars['Float']>;
  melibversion?: Maybe<Scalars['Float']>;
  melinkversion?: Maybe<Scalars['Float']>;
  minpower?: Maybe<Scalars['Float']>;
  phase?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
  prioritychanges?: Maybe<Scalars['Float']>;
  productcode?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  serverconfigtime?: Maybe<Scalars['Float']>;
  stubloaderversion?: Maybe<Scalars['Float']>;
  voltage?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "eddi" */
export type Eddi_Variance_Order_By = {
  agggroupno?: InputMaybe<Order_By>;
  agglock?: InputMaybe<Order_By>;
  aggregationdataid?: InputMaybe<Order_By>;
  bootloaderversion?: InputMaybe<Order_By>;
  chargeenergy?: InputMaybe<Order_By>;
  checkperiod?: InputMaybe<Order_By>;
  commandseqno?: InputMaybe<Order_By>;
  configlength?: InputMaybe<Order_By>;
  configoffset?: InputMaybe<Order_By>;
  configstate?: InputMaybe<Order_By>;
  configstructure?: InputMaybe<Order_By>;
  configversion?: InputMaybe<Order_By>;
  ct2absent?: InputMaybe<Order_By>;
  ct3absent?: InputMaybe<Order_By>;
  currentboostremaining?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
  deviceaddressraw?: InputMaybe<Order_By>;
  deviceconfigtime?: InputMaybe<Order_By>;
  deviceinstance?: InputMaybe<Order_By>;
  dsrdataack?: InputMaybe<Order_By>;
  dsrdatacsn?: InputMaybe<Order_By>;
  dsrdataload?: InputMaybe<Order_By>;
  dsrdataseconds?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  heaterno?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  maxpower?: InputMaybe<Order_By>;
  melibversion?: InputMaybe<Order_By>;
  melinkversion?: InputMaybe<Order_By>;
  minpower?: InputMaybe<Order_By>;
  phase?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  prioritychanges?: InputMaybe<Order_By>;
  productcode?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverconfigtime?: InputMaybe<Order_By>;
  stubloaderversion?: InputMaybe<Order_By>;
  voltage?: InputMaybe<Order_By>;
};

/** columns and relationships of "event" */
export type Event = {
  __typename?: 'event';
  booststate: Scalars['smallint'];
  chargeenergy: Scalars['Int'];
  chargingmode: Scalars['smallint'];
  eventtime: Scalars['timestamp'];
  haschargejustended: Scalars['Boolean'];
  haschargejuststarted: Scalars['Boolean'];
  isboosting: Scalars['Boolean'];
  isbor: Scalars['Boolean'];
  iscarpluggedin: Scalars['Boolean'];
  iscarunplugged: Scalars['Boolean'];
  ischangemodechanged: Scalars['Boolean'];
  iscm: Scalars['Boolean'];
  isendofcharge: Scalars['Boolean'];
  isesenceactive: Scalars['Boolean'];
  isextra: Scalars['Boolean'];
  isfrequencyout: Scalars['Boolean'];
  isgridlimiting: Scalars['Boolean'];
  isgrouplimiting: Scalars['Boolean'];
  isiopuwr: Scalars['Boolean'];
  islostmelinkcommunications: Scalars['Boolean'];
  isovertemperature: Scalars['Boolean'];
  ispilotstatechanged: Scalars['Boolean'];
  ispor: Scalars['Boolean'];
  isproximitylimiting: Scalars['Boolean'];
  isswr: Scalars['Boolean'];
  isthreephasecharging: Scalars['Boolean'];
  istrapr: Scalars['Boolean'];
  iswdto: Scalars['Boolean'];
  iszappistatechanged: Scalars['Boolean'];
  numberofeventsinthissecond: Scalars['smallint'];
  pectfault: Scalars['smallint'];
  pilotstate: Scalars['smallint'];
  rcdfault: Scalars['smallint'];
  selftest: Scalars['smallint'];
  serialno: Scalars['bigint'];
  wcsid: Scalars['smallint'];
  zappistate: Scalars['Int'];
};

/** aggregated selection of "event" */
export type Event_Aggregate = {
  __typename?: 'event_aggregate';
  aggregate?: Maybe<Event_Aggregate_Fields>;
  nodes: Array<Event>;
};

/** aggregate fields of "event" */
export type Event_Aggregate_Fields = {
  __typename?: 'event_aggregate_fields';
  avg?: Maybe<Event_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Event_Max_Fields>;
  min?: Maybe<Event_Min_Fields>;
  stddev?: Maybe<Event_Stddev_Fields>;
  stddev_pop?: Maybe<Event_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Event_Stddev_Samp_Fields>;
  sum?: Maybe<Event_Sum_Fields>;
  var_pop?: Maybe<Event_Var_Pop_Fields>;
  var_samp?: Maybe<Event_Var_Samp_Fields>;
  variance?: Maybe<Event_Variance_Fields>;
};

/** aggregate fields of "event" */
export type Event_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Event_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Event_Avg_Fields = {
  __typename?: 'event_avg_fields';
  booststate?: Maybe<Scalars['Float']>;
  chargeenergy?: Maybe<Scalars['Float']>;
  chargingmode?: Maybe<Scalars['Float']>;
  numberofeventsinthissecond?: Maybe<Scalars['Float']>;
  pectfault?: Maybe<Scalars['Float']>;
  pilotstate?: Maybe<Scalars['Float']>;
  rcdfault?: Maybe<Scalars['Float']>;
  selftest?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  wcsid?: Maybe<Scalars['Float']>;
  zappistate?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "event". All fields are combined with a logical 'AND'. */
export type Event_Bool_Exp = {
  _and?: InputMaybe<Array<Event_Bool_Exp>>;
  _not?: InputMaybe<Event_Bool_Exp>;
  _or?: InputMaybe<Array<Event_Bool_Exp>>;
  booststate?: InputMaybe<Smallint_Comparison_Exp>;
  chargeenergy?: InputMaybe<Int_Comparison_Exp>;
  chargingmode?: InputMaybe<Smallint_Comparison_Exp>;
  eventtime?: InputMaybe<Timestamp_Comparison_Exp>;
  haschargejustended?: InputMaybe<Boolean_Comparison_Exp>;
  haschargejuststarted?: InputMaybe<Boolean_Comparison_Exp>;
  isboosting?: InputMaybe<Boolean_Comparison_Exp>;
  isbor?: InputMaybe<Boolean_Comparison_Exp>;
  iscarpluggedin?: InputMaybe<Boolean_Comparison_Exp>;
  iscarunplugged?: InputMaybe<Boolean_Comparison_Exp>;
  ischangemodechanged?: InputMaybe<Boolean_Comparison_Exp>;
  iscm?: InputMaybe<Boolean_Comparison_Exp>;
  isendofcharge?: InputMaybe<Boolean_Comparison_Exp>;
  isesenceactive?: InputMaybe<Boolean_Comparison_Exp>;
  isextra?: InputMaybe<Boolean_Comparison_Exp>;
  isfrequencyout?: InputMaybe<Boolean_Comparison_Exp>;
  isgridlimiting?: InputMaybe<Boolean_Comparison_Exp>;
  isgrouplimiting?: InputMaybe<Boolean_Comparison_Exp>;
  isiopuwr?: InputMaybe<Boolean_Comparison_Exp>;
  islostmelinkcommunications?: InputMaybe<Boolean_Comparison_Exp>;
  isovertemperature?: InputMaybe<Boolean_Comparison_Exp>;
  ispilotstatechanged?: InputMaybe<Boolean_Comparison_Exp>;
  ispor?: InputMaybe<Boolean_Comparison_Exp>;
  isproximitylimiting?: InputMaybe<Boolean_Comparison_Exp>;
  isswr?: InputMaybe<Boolean_Comparison_Exp>;
  isthreephasecharging?: InputMaybe<Boolean_Comparison_Exp>;
  istrapr?: InputMaybe<Boolean_Comparison_Exp>;
  iswdto?: InputMaybe<Boolean_Comparison_Exp>;
  iszappistatechanged?: InputMaybe<Boolean_Comparison_Exp>;
  numberofeventsinthissecond?: InputMaybe<Smallint_Comparison_Exp>;
  pectfault?: InputMaybe<Smallint_Comparison_Exp>;
  pilotstate?: InputMaybe<Smallint_Comparison_Exp>;
  rcdfault?: InputMaybe<Smallint_Comparison_Exp>;
  selftest?: InputMaybe<Smallint_Comparison_Exp>;
  serialno?: InputMaybe<Bigint_Comparison_Exp>;
  wcsid?: InputMaybe<Smallint_Comparison_Exp>;
  zappistate?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "event" */
export enum Event_Constraint {
  /** unique or primary key constraint */
  PkD1714a7ea14845b07ce5e7cb5dc = 'PK_d1714a7ea14845b07ce5e7cb5dc',
}

/** input type for incrementing numeric columns in table "event" */
export type Event_Inc_Input = {
  booststate?: InputMaybe<Scalars['smallint']>;
  chargeenergy?: InputMaybe<Scalars['Int']>;
  chargingmode?: InputMaybe<Scalars['smallint']>;
  numberofeventsinthissecond?: InputMaybe<Scalars['smallint']>;
  pectfault?: InputMaybe<Scalars['smallint']>;
  pilotstate?: InputMaybe<Scalars['smallint']>;
  rcdfault?: InputMaybe<Scalars['smallint']>;
  selftest?: InputMaybe<Scalars['smallint']>;
  serialno?: InputMaybe<Scalars['bigint']>;
  wcsid?: InputMaybe<Scalars['smallint']>;
  zappistate?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "event" */
export type Event_Insert_Input = {
  booststate?: InputMaybe<Scalars['smallint']>;
  chargeenergy?: InputMaybe<Scalars['Int']>;
  chargingmode?: InputMaybe<Scalars['smallint']>;
  eventtime?: InputMaybe<Scalars['timestamp']>;
  haschargejustended?: InputMaybe<Scalars['Boolean']>;
  haschargejuststarted?: InputMaybe<Scalars['Boolean']>;
  isboosting?: InputMaybe<Scalars['Boolean']>;
  isbor?: InputMaybe<Scalars['Boolean']>;
  iscarpluggedin?: InputMaybe<Scalars['Boolean']>;
  iscarunplugged?: InputMaybe<Scalars['Boolean']>;
  ischangemodechanged?: InputMaybe<Scalars['Boolean']>;
  iscm?: InputMaybe<Scalars['Boolean']>;
  isendofcharge?: InputMaybe<Scalars['Boolean']>;
  isesenceactive?: InputMaybe<Scalars['Boolean']>;
  isextra?: InputMaybe<Scalars['Boolean']>;
  isfrequencyout?: InputMaybe<Scalars['Boolean']>;
  isgridlimiting?: InputMaybe<Scalars['Boolean']>;
  isgrouplimiting?: InputMaybe<Scalars['Boolean']>;
  isiopuwr?: InputMaybe<Scalars['Boolean']>;
  islostmelinkcommunications?: InputMaybe<Scalars['Boolean']>;
  isovertemperature?: InputMaybe<Scalars['Boolean']>;
  ispilotstatechanged?: InputMaybe<Scalars['Boolean']>;
  ispor?: InputMaybe<Scalars['Boolean']>;
  isproximitylimiting?: InputMaybe<Scalars['Boolean']>;
  isswr?: InputMaybe<Scalars['Boolean']>;
  isthreephasecharging?: InputMaybe<Scalars['Boolean']>;
  istrapr?: InputMaybe<Scalars['Boolean']>;
  iswdto?: InputMaybe<Scalars['Boolean']>;
  iszappistatechanged?: InputMaybe<Scalars['Boolean']>;
  numberofeventsinthissecond?: InputMaybe<Scalars['smallint']>;
  pectfault?: InputMaybe<Scalars['smallint']>;
  pilotstate?: InputMaybe<Scalars['smallint']>;
  rcdfault?: InputMaybe<Scalars['smallint']>;
  selftest?: InputMaybe<Scalars['smallint']>;
  serialno?: InputMaybe<Scalars['bigint']>;
  wcsid?: InputMaybe<Scalars['smallint']>;
  zappistate?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Event_Max_Fields = {
  __typename?: 'event_max_fields';
  booststate?: Maybe<Scalars['smallint']>;
  chargeenergy?: Maybe<Scalars['Int']>;
  chargingmode?: Maybe<Scalars['smallint']>;
  eventtime?: Maybe<Scalars['timestamp']>;
  numberofeventsinthissecond?: Maybe<Scalars['smallint']>;
  pectfault?: Maybe<Scalars['smallint']>;
  pilotstate?: Maybe<Scalars['smallint']>;
  rcdfault?: Maybe<Scalars['smallint']>;
  selftest?: Maybe<Scalars['smallint']>;
  serialno?: Maybe<Scalars['bigint']>;
  wcsid?: Maybe<Scalars['smallint']>;
  zappistate?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Event_Min_Fields = {
  __typename?: 'event_min_fields';
  booststate?: Maybe<Scalars['smallint']>;
  chargeenergy?: Maybe<Scalars['Int']>;
  chargingmode?: Maybe<Scalars['smallint']>;
  eventtime?: Maybe<Scalars['timestamp']>;
  numberofeventsinthissecond?: Maybe<Scalars['smallint']>;
  pectfault?: Maybe<Scalars['smallint']>;
  pilotstate?: Maybe<Scalars['smallint']>;
  rcdfault?: Maybe<Scalars['smallint']>;
  selftest?: Maybe<Scalars['smallint']>;
  serialno?: Maybe<Scalars['bigint']>;
  wcsid?: Maybe<Scalars['smallint']>;
  zappistate?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "event" */
export type Event_Mutation_Response = {
  __typename?: 'event_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Event>;
};

/** on_conflict condition type for table "event" */
export type Event_On_Conflict = {
  constraint: Event_Constraint;
  update_columns?: Array<Event_Update_Column>;
  where?: InputMaybe<Event_Bool_Exp>;
};

/** Ordering options when selecting data from "event". */
export type Event_Order_By = {
  booststate?: InputMaybe<Order_By>;
  chargeenergy?: InputMaybe<Order_By>;
  chargingmode?: InputMaybe<Order_By>;
  eventtime?: InputMaybe<Order_By>;
  haschargejustended?: InputMaybe<Order_By>;
  haschargejuststarted?: InputMaybe<Order_By>;
  isboosting?: InputMaybe<Order_By>;
  isbor?: InputMaybe<Order_By>;
  iscarpluggedin?: InputMaybe<Order_By>;
  iscarunplugged?: InputMaybe<Order_By>;
  ischangemodechanged?: InputMaybe<Order_By>;
  iscm?: InputMaybe<Order_By>;
  isendofcharge?: InputMaybe<Order_By>;
  isesenceactive?: InputMaybe<Order_By>;
  isextra?: InputMaybe<Order_By>;
  isfrequencyout?: InputMaybe<Order_By>;
  isgridlimiting?: InputMaybe<Order_By>;
  isgrouplimiting?: InputMaybe<Order_By>;
  isiopuwr?: InputMaybe<Order_By>;
  islostmelinkcommunications?: InputMaybe<Order_By>;
  isovertemperature?: InputMaybe<Order_By>;
  ispilotstatechanged?: InputMaybe<Order_By>;
  ispor?: InputMaybe<Order_By>;
  isproximitylimiting?: InputMaybe<Order_By>;
  isswr?: InputMaybe<Order_By>;
  isthreephasecharging?: InputMaybe<Order_By>;
  istrapr?: InputMaybe<Order_By>;
  iswdto?: InputMaybe<Order_By>;
  iszappistatechanged?: InputMaybe<Order_By>;
  numberofeventsinthissecond?: InputMaybe<Order_By>;
  pectfault?: InputMaybe<Order_By>;
  pilotstate?: InputMaybe<Order_By>;
  rcdfault?: InputMaybe<Order_By>;
  selftest?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  wcsid?: InputMaybe<Order_By>;
  zappistate?: InputMaybe<Order_By>;
};

/** primary key columns input for table: event */
export type Event_Pk_Columns_Input = {
  eventtime: Scalars['timestamp'];
  numberofeventsinthissecond: Scalars['smallint'];
  serialno: Scalars['bigint'];
};

/** select columns of table "event" */
export enum Event_Select_Column {
  /** column name */
  Booststate = 'booststate',
  /** column name */
  Chargeenergy = 'chargeenergy',
  /** column name */
  Chargingmode = 'chargingmode',
  /** column name */
  Eventtime = 'eventtime',
  /** column name */
  Haschargejustended = 'haschargejustended',
  /** column name */
  Haschargejuststarted = 'haschargejuststarted',
  /** column name */
  Isboosting = 'isboosting',
  /** column name */
  Isbor = 'isbor',
  /** column name */
  Iscarpluggedin = 'iscarpluggedin',
  /** column name */
  Iscarunplugged = 'iscarunplugged',
  /** column name */
  Ischangemodechanged = 'ischangemodechanged',
  /** column name */
  Iscm = 'iscm',
  /** column name */
  Isendofcharge = 'isendofcharge',
  /** column name */
  Isesenceactive = 'isesenceactive',
  /** column name */
  Isextra = 'isextra',
  /** column name */
  Isfrequencyout = 'isfrequencyout',
  /** column name */
  Isgridlimiting = 'isgridlimiting',
  /** column name */
  Isgrouplimiting = 'isgrouplimiting',
  /** column name */
  Isiopuwr = 'isiopuwr',
  /** column name */
  Islostmelinkcommunications = 'islostmelinkcommunications',
  /** column name */
  Isovertemperature = 'isovertemperature',
  /** column name */
  Ispilotstatechanged = 'ispilotstatechanged',
  /** column name */
  Ispor = 'ispor',
  /** column name */
  Isproximitylimiting = 'isproximitylimiting',
  /** column name */
  Isswr = 'isswr',
  /** column name */
  Isthreephasecharging = 'isthreephasecharging',
  /** column name */
  Istrapr = 'istrapr',
  /** column name */
  Iswdto = 'iswdto',
  /** column name */
  Iszappistatechanged = 'iszappistatechanged',
  /** column name */
  Numberofeventsinthissecond = 'numberofeventsinthissecond',
  /** column name */
  Pectfault = 'pectfault',
  /** column name */
  Pilotstate = 'pilotstate',
  /** column name */
  Rcdfault = 'rcdfault',
  /** column name */
  Selftest = 'selftest',
  /** column name */
  Serialno = 'serialno',
  /** column name */
  Wcsid = 'wcsid',
  /** column name */
  Zappistate = 'zappistate',
}

/** input type for updating data in table "event" */
export type Event_Set_Input = {
  booststate?: InputMaybe<Scalars['smallint']>;
  chargeenergy?: InputMaybe<Scalars['Int']>;
  chargingmode?: InputMaybe<Scalars['smallint']>;
  eventtime?: InputMaybe<Scalars['timestamp']>;
  haschargejustended?: InputMaybe<Scalars['Boolean']>;
  haschargejuststarted?: InputMaybe<Scalars['Boolean']>;
  isboosting?: InputMaybe<Scalars['Boolean']>;
  isbor?: InputMaybe<Scalars['Boolean']>;
  iscarpluggedin?: InputMaybe<Scalars['Boolean']>;
  iscarunplugged?: InputMaybe<Scalars['Boolean']>;
  ischangemodechanged?: InputMaybe<Scalars['Boolean']>;
  iscm?: InputMaybe<Scalars['Boolean']>;
  isendofcharge?: InputMaybe<Scalars['Boolean']>;
  isesenceactive?: InputMaybe<Scalars['Boolean']>;
  isextra?: InputMaybe<Scalars['Boolean']>;
  isfrequencyout?: InputMaybe<Scalars['Boolean']>;
  isgridlimiting?: InputMaybe<Scalars['Boolean']>;
  isgrouplimiting?: InputMaybe<Scalars['Boolean']>;
  isiopuwr?: InputMaybe<Scalars['Boolean']>;
  islostmelinkcommunications?: InputMaybe<Scalars['Boolean']>;
  isovertemperature?: InputMaybe<Scalars['Boolean']>;
  ispilotstatechanged?: InputMaybe<Scalars['Boolean']>;
  ispor?: InputMaybe<Scalars['Boolean']>;
  isproximitylimiting?: InputMaybe<Scalars['Boolean']>;
  isswr?: InputMaybe<Scalars['Boolean']>;
  isthreephasecharging?: InputMaybe<Scalars['Boolean']>;
  istrapr?: InputMaybe<Scalars['Boolean']>;
  iswdto?: InputMaybe<Scalars['Boolean']>;
  iszappistatechanged?: InputMaybe<Scalars['Boolean']>;
  numberofeventsinthissecond?: InputMaybe<Scalars['smallint']>;
  pectfault?: InputMaybe<Scalars['smallint']>;
  pilotstate?: InputMaybe<Scalars['smallint']>;
  rcdfault?: InputMaybe<Scalars['smallint']>;
  selftest?: InputMaybe<Scalars['smallint']>;
  serialno?: InputMaybe<Scalars['bigint']>;
  wcsid?: InputMaybe<Scalars['smallint']>;
  zappistate?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Event_Stddev_Fields = {
  __typename?: 'event_stddev_fields';
  booststate?: Maybe<Scalars['Float']>;
  chargeenergy?: Maybe<Scalars['Float']>;
  chargingmode?: Maybe<Scalars['Float']>;
  numberofeventsinthissecond?: Maybe<Scalars['Float']>;
  pectfault?: Maybe<Scalars['Float']>;
  pilotstate?: Maybe<Scalars['Float']>;
  rcdfault?: Maybe<Scalars['Float']>;
  selftest?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  wcsid?: Maybe<Scalars['Float']>;
  zappistate?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Event_Stddev_Pop_Fields = {
  __typename?: 'event_stddev_pop_fields';
  booststate?: Maybe<Scalars['Float']>;
  chargeenergy?: Maybe<Scalars['Float']>;
  chargingmode?: Maybe<Scalars['Float']>;
  numberofeventsinthissecond?: Maybe<Scalars['Float']>;
  pectfault?: Maybe<Scalars['Float']>;
  pilotstate?: Maybe<Scalars['Float']>;
  rcdfault?: Maybe<Scalars['Float']>;
  selftest?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  wcsid?: Maybe<Scalars['Float']>;
  zappistate?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Event_Stddev_Samp_Fields = {
  __typename?: 'event_stddev_samp_fields';
  booststate?: Maybe<Scalars['Float']>;
  chargeenergy?: Maybe<Scalars['Float']>;
  chargingmode?: Maybe<Scalars['Float']>;
  numberofeventsinthissecond?: Maybe<Scalars['Float']>;
  pectfault?: Maybe<Scalars['Float']>;
  pilotstate?: Maybe<Scalars['Float']>;
  rcdfault?: Maybe<Scalars['Float']>;
  selftest?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  wcsid?: Maybe<Scalars['Float']>;
  zappistate?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Event_Sum_Fields = {
  __typename?: 'event_sum_fields';
  booststate?: Maybe<Scalars['smallint']>;
  chargeenergy?: Maybe<Scalars['Int']>;
  chargingmode?: Maybe<Scalars['smallint']>;
  numberofeventsinthissecond?: Maybe<Scalars['smallint']>;
  pectfault?: Maybe<Scalars['smallint']>;
  pilotstate?: Maybe<Scalars['smallint']>;
  rcdfault?: Maybe<Scalars['smallint']>;
  selftest?: Maybe<Scalars['smallint']>;
  serialno?: Maybe<Scalars['bigint']>;
  wcsid?: Maybe<Scalars['smallint']>;
  zappistate?: Maybe<Scalars['Int']>;
};

/** update columns of table "event" */
export enum Event_Update_Column {
  /** column name */
  Booststate = 'booststate',
  /** column name */
  Chargeenergy = 'chargeenergy',
  /** column name */
  Chargingmode = 'chargingmode',
  /** column name */
  Eventtime = 'eventtime',
  /** column name */
  Haschargejustended = 'haschargejustended',
  /** column name */
  Haschargejuststarted = 'haschargejuststarted',
  /** column name */
  Isboosting = 'isboosting',
  /** column name */
  Isbor = 'isbor',
  /** column name */
  Iscarpluggedin = 'iscarpluggedin',
  /** column name */
  Iscarunplugged = 'iscarunplugged',
  /** column name */
  Ischangemodechanged = 'ischangemodechanged',
  /** column name */
  Iscm = 'iscm',
  /** column name */
  Isendofcharge = 'isendofcharge',
  /** column name */
  Isesenceactive = 'isesenceactive',
  /** column name */
  Isextra = 'isextra',
  /** column name */
  Isfrequencyout = 'isfrequencyout',
  /** column name */
  Isgridlimiting = 'isgridlimiting',
  /** column name */
  Isgrouplimiting = 'isgrouplimiting',
  /** column name */
  Isiopuwr = 'isiopuwr',
  /** column name */
  Islostmelinkcommunications = 'islostmelinkcommunications',
  /** column name */
  Isovertemperature = 'isovertemperature',
  /** column name */
  Ispilotstatechanged = 'ispilotstatechanged',
  /** column name */
  Ispor = 'ispor',
  /** column name */
  Isproximitylimiting = 'isproximitylimiting',
  /** column name */
  Isswr = 'isswr',
  /** column name */
  Isthreephasecharging = 'isthreephasecharging',
  /** column name */
  Istrapr = 'istrapr',
  /** column name */
  Iswdto = 'iswdto',
  /** column name */
  Iszappistatechanged = 'iszappistatechanged',
  /** column name */
  Numberofeventsinthissecond = 'numberofeventsinthissecond',
  /** column name */
  Pectfault = 'pectfault',
  /** column name */
  Pilotstate = 'pilotstate',
  /** column name */
  Rcdfault = 'rcdfault',
  /** column name */
  Selftest = 'selftest',
  /** column name */
  Serialno = 'serialno',
  /** column name */
  Wcsid = 'wcsid',
  /** column name */
  Zappistate = 'zappistate',
}

/** aggregate var_pop on columns */
export type Event_Var_Pop_Fields = {
  __typename?: 'event_var_pop_fields';
  booststate?: Maybe<Scalars['Float']>;
  chargeenergy?: Maybe<Scalars['Float']>;
  chargingmode?: Maybe<Scalars['Float']>;
  numberofeventsinthissecond?: Maybe<Scalars['Float']>;
  pectfault?: Maybe<Scalars['Float']>;
  pilotstate?: Maybe<Scalars['Float']>;
  rcdfault?: Maybe<Scalars['Float']>;
  selftest?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  wcsid?: Maybe<Scalars['Float']>;
  zappistate?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Event_Var_Samp_Fields = {
  __typename?: 'event_var_samp_fields';
  booststate?: Maybe<Scalars['Float']>;
  chargeenergy?: Maybe<Scalars['Float']>;
  chargingmode?: Maybe<Scalars['Float']>;
  numberofeventsinthissecond?: Maybe<Scalars['Float']>;
  pectfault?: Maybe<Scalars['Float']>;
  pilotstate?: Maybe<Scalars['Float']>;
  rcdfault?: Maybe<Scalars['Float']>;
  selftest?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  wcsid?: Maybe<Scalars['Float']>;
  zappistate?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Event_Variance_Fields = {
  __typename?: 'event_variance_fields';
  booststate?: Maybe<Scalars['Float']>;
  chargeenergy?: Maybe<Scalars['Float']>;
  chargingmode?: Maybe<Scalars['Float']>;
  numberofeventsinthissecond?: Maybe<Scalars['Float']>;
  pectfault?: Maybe<Scalars['Float']>;
  pilotstate?: Maybe<Scalars['Float']>;
  rcdfault?: Maybe<Scalars['Float']>;
  selftest?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  wcsid?: Maybe<Scalars['Float']>;
  zappistate?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "harvi" */
export type Harvi = {
  __typename?: 'harvi';
  createdat?: Maybe<Scalars['timestamptz']>;
  ct1?: Maybe<Scalars['jsonb']>;
  ct2?: Maybe<Scalars['jsonb']>;
  ct3?: Maybe<Scalars['jsonb']>;
  ct4?: Maybe<Scalars['jsonb']>;
  ct5?: Maybe<Scalars['jsonb']>;
  ct6?: Maybe<Scalars['jsonb']>;
  ct7?: Maybe<Scalars['jsonb']>;
  ct8?: Maybe<Scalars['jsonb']>;
  ct9?: Maybe<Scalars['jsonb']>;
  ct10?: Maybe<Scalars['jsonb']>;
  ct11?: Maybe<Scalars['jsonb']>;
  ct12?: Maybe<Scalars['jsonb']>;
  ct13?: Maybe<Scalars['jsonb']>;
  ct14?: Maybe<Scalars['jsonb']>;
  ct15?: Maybe<Scalars['jsonb']>;
  ct16?: Maybe<Scalars['jsonb']>;
  currentversion?: Maybe<Scalars['Int']>;
  deviceclass: Scalars['String'];
  /** An object relationship */
  hub?: Maybe<Hub>;
  hubserialno?: Maybe<Scalars['bigint']>;
  serialno: Scalars['bigint'];
  updatedat: Scalars['timestamptz'];
};

/** columns and relationships of "harvi" */
export type HarviCt1Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "harvi" */
export type HarviCt2Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "harvi" */
export type HarviCt3Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "harvi" */
export type HarviCt4Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "harvi" */
export type HarviCt5Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "harvi" */
export type HarviCt6Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "harvi" */
export type HarviCt7Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "harvi" */
export type HarviCt8Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "harvi" */
export type HarviCt9Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "harvi" */
export type HarviCt10Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "harvi" */
export type HarviCt11Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "harvi" */
export type HarviCt12Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "harvi" */
export type HarviCt13Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "harvi" */
export type HarviCt14Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "harvi" */
export type HarviCt15Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "harvi" */
export type HarviCt16Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "harvi" */
export type Harvi_Aggregate = {
  __typename?: 'harvi_aggregate';
  aggregate?: Maybe<Harvi_Aggregate_Fields>;
  nodes: Array<Harvi>;
};

/** aggregate fields of "harvi" */
export type Harvi_Aggregate_Fields = {
  __typename?: 'harvi_aggregate_fields';
  avg?: Maybe<Harvi_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Harvi_Max_Fields>;
  min?: Maybe<Harvi_Min_Fields>;
  stddev?: Maybe<Harvi_Stddev_Fields>;
  stddev_pop?: Maybe<Harvi_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Harvi_Stddev_Samp_Fields>;
  sum?: Maybe<Harvi_Sum_Fields>;
  var_pop?: Maybe<Harvi_Var_Pop_Fields>;
  var_samp?: Maybe<Harvi_Var_Samp_Fields>;
  variance?: Maybe<Harvi_Variance_Fields>;
};

/** aggregate fields of "harvi" */
export type Harvi_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Harvi_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "harvi" */
export type Harvi_Aggregate_Order_By = {
  avg?: InputMaybe<Harvi_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Harvi_Max_Order_By>;
  min?: InputMaybe<Harvi_Min_Order_By>;
  stddev?: InputMaybe<Harvi_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Harvi_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Harvi_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Harvi_Sum_Order_By>;
  var_pop?: InputMaybe<Harvi_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Harvi_Var_Samp_Order_By>;
  variance?: InputMaybe<Harvi_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Harvi_Append_Input = {
  ct1?: InputMaybe<Scalars['jsonb']>;
  ct2?: InputMaybe<Scalars['jsonb']>;
  ct3?: InputMaybe<Scalars['jsonb']>;
  ct4?: InputMaybe<Scalars['jsonb']>;
  ct5?: InputMaybe<Scalars['jsonb']>;
  ct6?: InputMaybe<Scalars['jsonb']>;
  ct7?: InputMaybe<Scalars['jsonb']>;
  ct8?: InputMaybe<Scalars['jsonb']>;
  ct9?: InputMaybe<Scalars['jsonb']>;
  ct10?: InputMaybe<Scalars['jsonb']>;
  ct11?: InputMaybe<Scalars['jsonb']>;
  ct12?: InputMaybe<Scalars['jsonb']>;
  ct13?: InputMaybe<Scalars['jsonb']>;
  ct14?: InputMaybe<Scalars['jsonb']>;
  ct15?: InputMaybe<Scalars['jsonb']>;
  ct16?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "harvi" */
export type Harvi_Arr_Rel_Insert_Input = {
  data: Array<Harvi_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Harvi_On_Conflict>;
};

/** aggregate avg on columns */
export type Harvi_Avg_Fields = {
  __typename?: 'harvi_avg_fields';
  currentversion?: Maybe<Scalars['Float']>;
  hubserialno?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "harvi" */
export type Harvi_Avg_Order_By = {
  currentversion?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "harvi". All fields are combined with a logical 'AND'. */
export type Harvi_Bool_Exp = {
  _and?: InputMaybe<Array<Harvi_Bool_Exp>>;
  _not?: InputMaybe<Harvi_Bool_Exp>;
  _or?: InputMaybe<Array<Harvi_Bool_Exp>>;
  createdat?: InputMaybe<Timestamptz_Comparison_Exp>;
  ct1?: InputMaybe<Jsonb_Comparison_Exp>;
  ct2?: InputMaybe<Jsonb_Comparison_Exp>;
  ct3?: InputMaybe<Jsonb_Comparison_Exp>;
  ct4?: InputMaybe<Jsonb_Comparison_Exp>;
  ct5?: InputMaybe<Jsonb_Comparison_Exp>;
  ct6?: InputMaybe<Jsonb_Comparison_Exp>;
  ct7?: InputMaybe<Jsonb_Comparison_Exp>;
  ct8?: InputMaybe<Jsonb_Comparison_Exp>;
  ct9?: InputMaybe<Jsonb_Comparison_Exp>;
  ct10?: InputMaybe<Jsonb_Comparison_Exp>;
  ct11?: InputMaybe<Jsonb_Comparison_Exp>;
  ct12?: InputMaybe<Jsonb_Comparison_Exp>;
  ct13?: InputMaybe<Jsonb_Comparison_Exp>;
  ct14?: InputMaybe<Jsonb_Comparison_Exp>;
  ct15?: InputMaybe<Jsonb_Comparison_Exp>;
  ct16?: InputMaybe<Jsonb_Comparison_Exp>;
  currentversion?: InputMaybe<Int_Comparison_Exp>;
  deviceclass?: InputMaybe<String_Comparison_Exp>;
  hub?: InputMaybe<Hub_Bool_Exp>;
  hubserialno?: InputMaybe<Bigint_Comparison_Exp>;
  serialno?: InputMaybe<Bigint_Comparison_Exp>;
  updatedat?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "harvi" */
export enum Harvi_Constraint {
  /** unique or primary key constraint */
  Pk_6285c00e48bbf1e23e83d4bb8d3 = 'PK_6285c00e48bbf1e23e83d4bb8d3',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Harvi_Delete_At_Path_Input = {
  ct1?: InputMaybe<Array<Scalars['String']>>;
  ct2?: InputMaybe<Array<Scalars['String']>>;
  ct3?: InputMaybe<Array<Scalars['String']>>;
  ct4?: InputMaybe<Array<Scalars['String']>>;
  ct5?: InputMaybe<Array<Scalars['String']>>;
  ct6?: InputMaybe<Array<Scalars['String']>>;
  ct7?: InputMaybe<Array<Scalars['String']>>;
  ct8?: InputMaybe<Array<Scalars['String']>>;
  ct9?: InputMaybe<Array<Scalars['String']>>;
  ct10?: InputMaybe<Array<Scalars['String']>>;
  ct11?: InputMaybe<Array<Scalars['String']>>;
  ct12?: InputMaybe<Array<Scalars['String']>>;
  ct13?: InputMaybe<Array<Scalars['String']>>;
  ct14?: InputMaybe<Array<Scalars['String']>>;
  ct15?: InputMaybe<Array<Scalars['String']>>;
  ct16?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Harvi_Delete_Elem_Input = {
  ct1?: InputMaybe<Scalars['Int']>;
  ct2?: InputMaybe<Scalars['Int']>;
  ct3?: InputMaybe<Scalars['Int']>;
  ct4?: InputMaybe<Scalars['Int']>;
  ct5?: InputMaybe<Scalars['Int']>;
  ct6?: InputMaybe<Scalars['Int']>;
  ct7?: InputMaybe<Scalars['Int']>;
  ct8?: InputMaybe<Scalars['Int']>;
  ct9?: InputMaybe<Scalars['Int']>;
  ct10?: InputMaybe<Scalars['Int']>;
  ct11?: InputMaybe<Scalars['Int']>;
  ct12?: InputMaybe<Scalars['Int']>;
  ct13?: InputMaybe<Scalars['Int']>;
  ct14?: InputMaybe<Scalars['Int']>;
  ct15?: InputMaybe<Scalars['Int']>;
  ct16?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Harvi_Delete_Key_Input = {
  ct1?: InputMaybe<Scalars['String']>;
  ct2?: InputMaybe<Scalars['String']>;
  ct3?: InputMaybe<Scalars['String']>;
  ct4?: InputMaybe<Scalars['String']>;
  ct5?: InputMaybe<Scalars['String']>;
  ct6?: InputMaybe<Scalars['String']>;
  ct7?: InputMaybe<Scalars['String']>;
  ct8?: InputMaybe<Scalars['String']>;
  ct9?: InputMaybe<Scalars['String']>;
  ct10?: InputMaybe<Scalars['String']>;
  ct11?: InputMaybe<Scalars['String']>;
  ct12?: InputMaybe<Scalars['String']>;
  ct13?: InputMaybe<Scalars['String']>;
  ct14?: InputMaybe<Scalars['String']>;
  ct15?: InputMaybe<Scalars['String']>;
  ct16?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "harvi" */
export type Harvi_Inc_Input = {
  currentversion?: InputMaybe<Scalars['Int']>;
  hubserialno?: InputMaybe<Scalars['bigint']>;
  serialno?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "harvi" */
export type Harvi_Insert_Input = {
  createdat?: InputMaybe<Scalars['timestamptz']>;
  ct1?: InputMaybe<Scalars['jsonb']>;
  ct2?: InputMaybe<Scalars['jsonb']>;
  ct3?: InputMaybe<Scalars['jsonb']>;
  ct4?: InputMaybe<Scalars['jsonb']>;
  ct5?: InputMaybe<Scalars['jsonb']>;
  ct6?: InputMaybe<Scalars['jsonb']>;
  ct7?: InputMaybe<Scalars['jsonb']>;
  ct8?: InputMaybe<Scalars['jsonb']>;
  ct9?: InputMaybe<Scalars['jsonb']>;
  ct10?: InputMaybe<Scalars['jsonb']>;
  ct11?: InputMaybe<Scalars['jsonb']>;
  ct12?: InputMaybe<Scalars['jsonb']>;
  ct13?: InputMaybe<Scalars['jsonb']>;
  ct14?: InputMaybe<Scalars['jsonb']>;
  ct15?: InputMaybe<Scalars['jsonb']>;
  ct16?: InputMaybe<Scalars['jsonb']>;
  currentversion?: InputMaybe<Scalars['Int']>;
  deviceclass?: InputMaybe<Scalars['String']>;
  hub?: InputMaybe<Hub_Obj_Rel_Insert_Input>;
  hubserialno?: InputMaybe<Scalars['bigint']>;
  serialno?: InputMaybe<Scalars['bigint']>;
  updatedat?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Harvi_Max_Fields = {
  __typename?: 'harvi_max_fields';
  createdat?: Maybe<Scalars['timestamptz']>;
  currentversion?: Maybe<Scalars['Int']>;
  deviceclass?: Maybe<Scalars['String']>;
  hubserialno?: Maybe<Scalars['bigint']>;
  serialno?: Maybe<Scalars['bigint']>;
  updatedat?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "harvi" */
export type Harvi_Max_Order_By = {
  createdat?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
  deviceclass?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  updatedat?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Harvi_Min_Fields = {
  __typename?: 'harvi_min_fields';
  createdat?: Maybe<Scalars['timestamptz']>;
  currentversion?: Maybe<Scalars['Int']>;
  deviceclass?: Maybe<Scalars['String']>;
  hubserialno?: Maybe<Scalars['bigint']>;
  serialno?: Maybe<Scalars['bigint']>;
  updatedat?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "harvi" */
export type Harvi_Min_Order_By = {
  createdat?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
  deviceclass?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  updatedat?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "harvi" */
export type Harvi_Mutation_Response = {
  __typename?: 'harvi_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Harvi>;
};

/** on_conflict condition type for table "harvi" */
export type Harvi_On_Conflict = {
  constraint: Harvi_Constraint;
  update_columns?: Array<Harvi_Update_Column>;
  where?: InputMaybe<Harvi_Bool_Exp>;
};

/** Ordering options when selecting data from "harvi". */
export type Harvi_Order_By = {
  createdat?: InputMaybe<Order_By>;
  ct1?: InputMaybe<Order_By>;
  ct2?: InputMaybe<Order_By>;
  ct3?: InputMaybe<Order_By>;
  ct4?: InputMaybe<Order_By>;
  ct5?: InputMaybe<Order_By>;
  ct6?: InputMaybe<Order_By>;
  ct7?: InputMaybe<Order_By>;
  ct8?: InputMaybe<Order_By>;
  ct9?: InputMaybe<Order_By>;
  ct10?: InputMaybe<Order_By>;
  ct11?: InputMaybe<Order_By>;
  ct12?: InputMaybe<Order_By>;
  ct13?: InputMaybe<Order_By>;
  ct14?: InputMaybe<Order_By>;
  ct15?: InputMaybe<Order_By>;
  ct16?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
  deviceclass?: InputMaybe<Order_By>;
  hub?: InputMaybe<Hub_Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  updatedat?: InputMaybe<Order_By>;
};

/** primary key columns input for table: harvi */
export type Harvi_Pk_Columns_Input = {
  serialno: Scalars['bigint'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Harvi_Prepend_Input = {
  ct1?: InputMaybe<Scalars['jsonb']>;
  ct2?: InputMaybe<Scalars['jsonb']>;
  ct3?: InputMaybe<Scalars['jsonb']>;
  ct4?: InputMaybe<Scalars['jsonb']>;
  ct5?: InputMaybe<Scalars['jsonb']>;
  ct6?: InputMaybe<Scalars['jsonb']>;
  ct7?: InputMaybe<Scalars['jsonb']>;
  ct8?: InputMaybe<Scalars['jsonb']>;
  ct9?: InputMaybe<Scalars['jsonb']>;
  ct10?: InputMaybe<Scalars['jsonb']>;
  ct11?: InputMaybe<Scalars['jsonb']>;
  ct12?: InputMaybe<Scalars['jsonb']>;
  ct13?: InputMaybe<Scalars['jsonb']>;
  ct14?: InputMaybe<Scalars['jsonb']>;
  ct15?: InputMaybe<Scalars['jsonb']>;
  ct16?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "harvi" */
export enum Harvi_Select_Column {
  /** column name */
  Createdat = 'createdat',
  /** column name */
  Ct1 = 'ct1',
  /** column name */
  Ct2 = 'ct2',
  /** column name */
  Ct3 = 'ct3',
  /** column name */
  Ct4 = 'ct4',
  /** column name */
  Ct5 = 'ct5',
  /** column name */
  Ct6 = 'ct6',
  /** column name */
  Ct7 = 'ct7',
  /** column name */
  Ct8 = 'ct8',
  /** column name */
  Ct9 = 'ct9',
  /** column name */
  Ct10 = 'ct10',
  /** column name */
  Ct11 = 'ct11',
  /** column name */
  Ct12 = 'ct12',
  /** column name */
  Ct13 = 'ct13',
  /** column name */
  Ct14 = 'ct14',
  /** column name */
  Ct15 = 'ct15',
  /** column name */
  Ct16 = 'ct16',
  /** column name */
  Currentversion = 'currentversion',
  /** column name */
  Deviceclass = 'deviceclass',
  /** column name */
  Hubserialno = 'hubserialno',
  /** column name */
  Serialno = 'serialno',
  /** column name */
  Updatedat = 'updatedat',
}

/** input type for updating data in table "harvi" */
export type Harvi_Set_Input = {
  createdat?: InputMaybe<Scalars['timestamptz']>;
  ct1?: InputMaybe<Scalars['jsonb']>;
  ct2?: InputMaybe<Scalars['jsonb']>;
  ct3?: InputMaybe<Scalars['jsonb']>;
  ct4?: InputMaybe<Scalars['jsonb']>;
  ct5?: InputMaybe<Scalars['jsonb']>;
  ct6?: InputMaybe<Scalars['jsonb']>;
  ct7?: InputMaybe<Scalars['jsonb']>;
  ct8?: InputMaybe<Scalars['jsonb']>;
  ct9?: InputMaybe<Scalars['jsonb']>;
  ct10?: InputMaybe<Scalars['jsonb']>;
  ct11?: InputMaybe<Scalars['jsonb']>;
  ct12?: InputMaybe<Scalars['jsonb']>;
  ct13?: InputMaybe<Scalars['jsonb']>;
  ct14?: InputMaybe<Scalars['jsonb']>;
  ct15?: InputMaybe<Scalars['jsonb']>;
  ct16?: InputMaybe<Scalars['jsonb']>;
  currentversion?: InputMaybe<Scalars['Int']>;
  deviceclass?: InputMaybe<Scalars['String']>;
  hubserialno?: InputMaybe<Scalars['bigint']>;
  serialno?: InputMaybe<Scalars['bigint']>;
  updatedat?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Harvi_Stddev_Fields = {
  __typename?: 'harvi_stddev_fields';
  currentversion?: Maybe<Scalars['Float']>;
  hubserialno?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "harvi" */
export type Harvi_Stddev_Order_By = {
  currentversion?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Harvi_Stddev_Pop_Fields = {
  __typename?: 'harvi_stddev_pop_fields';
  currentversion?: Maybe<Scalars['Float']>;
  hubserialno?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "harvi" */
export type Harvi_Stddev_Pop_Order_By = {
  currentversion?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Harvi_Stddev_Samp_Fields = {
  __typename?: 'harvi_stddev_samp_fields';
  currentversion?: Maybe<Scalars['Float']>;
  hubserialno?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "harvi" */
export type Harvi_Stddev_Samp_Order_By = {
  currentversion?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Harvi_Sum_Fields = {
  __typename?: 'harvi_sum_fields';
  currentversion?: Maybe<Scalars['Int']>;
  hubserialno?: Maybe<Scalars['bigint']>;
  serialno?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "harvi" */
export type Harvi_Sum_Order_By = {
  currentversion?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
};

/** update columns of table "harvi" */
export enum Harvi_Update_Column {
  /** column name */
  Createdat = 'createdat',
  /** column name */
  Ct1 = 'ct1',
  /** column name */
  Ct2 = 'ct2',
  /** column name */
  Ct3 = 'ct3',
  /** column name */
  Ct4 = 'ct4',
  /** column name */
  Ct5 = 'ct5',
  /** column name */
  Ct6 = 'ct6',
  /** column name */
  Ct7 = 'ct7',
  /** column name */
  Ct8 = 'ct8',
  /** column name */
  Ct9 = 'ct9',
  /** column name */
  Ct10 = 'ct10',
  /** column name */
  Ct11 = 'ct11',
  /** column name */
  Ct12 = 'ct12',
  /** column name */
  Ct13 = 'ct13',
  /** column name */
  Ct14 = 'ct14',
  /** column name */
  Ct15 = 'ct15',
  /** column name */
  Ct16 = 'ct16',
  /** column name */
  Currentversion = 'currentversion',
  /** column name */
  Deviceclass = 'deviceclass',
  /** column name */
  Hubserialno = 'hubserialno',
  /** column name */
  Serialno = 'serialno',
  /** column name */
  Updatedat = 'updatedat',
}

/** aggregate var_pop on columns */
export type Harvi_Var_Pop_Fields = {
  __typename?: 'harvi_var_pop_fields';
  currentversion?: Maybe<Scalars['Float']>;
  hubserialno?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "harvi" */
export type Harvi_Var_Pop_Order_By = {
  currentversion?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Harvi_Var_Samp_Fields = {
  __typename?: 'harvi_var_samp_fields';
  currentversion?: Maybe<Scalars['Float']>;
  hubserialno?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "harvi" */
export type Harvi_Var_Samp_Order_By = {
  currentversion?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Harvi_Variance_Fields = {
  __typename?: 'harvi_variance_fields';
  currentversion?: Maybe<Scalars['Float']>;
  hubserialno?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "harvi" */
export type Harvi_Variance_Order_By = {
  currentversion?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
};

/** columns and relationships of "hub" */
export type Hub = {
  __typename?: 'hub';
  apppassword?: Maybe<Scalars['String']>;
  australia: Scalars['Boolean'];
  cloudipoverrideserverid?: Maybe<Scalars['Int']>;
  createdat?: Maybe<Scalars['timestamptz']>;
  currentversion?: Maybe<Scalars['Int']>;
  deviceclass: Scalars['String'];
  /** An array relationship */
  eddis: Array<Eddi>;
  /** An aggregate relationship */
  eddis_aggregate: Eddi_Aggregate;
  /** An array relationship */
  harvis: Array<Harvi>;
  /** An aggregate relationship */
  harvis_aggregate: Harvi_Aggregate;
  hubfirmwareversions?: Maybe<Scalars['jsonb']>;
  ipaddress?: Maybe<Scalars['String']>;
  isblocked: Scalars['Boolean'];
  keyvaluestore?: Maybe<Scalars['jsonb']>;
  lastauth?: Maybe<Scalars['timestamptz']>;
  loadcontroldevicedata1serialno?: Maybe<Scalars['bigint']>;
  loadcontroldevicedata1setload?: Maybe<Scalars['Int']>;
  loadcontroldevicedata2serialno?: Maybe<Scalars['bigint']>;
  loadcontroldevicedata2setload?: Maybe<Scalars['Int']>;
  loadcontroldevicedata3serialno?: Maybe<Scalars['bigint']>;
  loadcontroldevicedata3setload?: Maybe<Scalars['Int']>;
  loadcontroldevicedata4serialno?: Maybe<Scalars['bigint']>;
  loadcontroldevicedata4setload?: Maybe<Scalars['Int']>;
  loadcontroldevicedata5serialno?: Maybe<Scalars['bigint']>;
  loadcontroldevicedata5setload?: Maybe<Scalars['Int']>;
  loadcontrolflagsgenctonnetwork?: Maybe<Scalars['Boolean']>;
  loadcontrolflagsgridlimits?: Maybe<Scalars['Boolean']>;
  loadcontrolflagsgridvalid?: Maybe<Scalars['Boolean']>;
  loadcontrolflagshubonnetwork?: Maybe<Scalars['Boolean']>;
  loadcontrolflagsnetphases?: Maybe<Scalars['Boolean']>;
  loadcontrolgeneration?: Maybe<Scalars['Int']>;
  loadcontrolgridcurrentshundredthsphase1?: Maybe<Scalars['Int']>;
  loadcontrolgridcurrentshundredthsphase2?: Maybe<Scalars['Int']>;
  loadcontrolgridcurrentshundredthsphase3?: Maybe<Scalars['Int']>;
  loadcontrolgridimportexport?: Maybe<Scalars['Int']>;
  masterdeviceclass?: Maybe<Scalars['String']>;
  masterdeviceinstance?: Maybe<Scalars['Int']>;
  masterdevicerawaddress?: Maybe<Scalars['Int']>;
  microprocessorti?: Maybe<Scalars['Boolean']>;
  networkid: Scalars['Int'];
  nodevices?: Maybe<Scalars['Int']>;
  port: Scalars['Int'];
  radiochannel?: Maybe<Scalars['smallint']>;
  registrationdate?: Maybe<Scalars['timestamptz']>;
  regpassword: Scalars['String'];
  serialno: Scalars['bigint'];
  serverlastheard?: Maybe<Scalars['Int']>;
  updatedat: Scalars['timestamptz'];
  uptime?: Maybe<Scalars['Int']>;
  vhub?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  zappis: Array<Zappi>;
  /** An aggregate relationship */
  zappis_aggregate: Zappi_Aggregate;
};

/** columns and relationships of "hub" */
export type HubEddisArgs = {
  distinct_on?: InputMaybe<Array<Eddi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Eddi_Order_By>>;
  where?: InputMaybe<Eddi_Bool_Exp>;
};

/** columns and relationships of "hub" */
export type HubEddis_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Eddi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Eddi_Order_By>>;
  where?: InputMaybe<Eddi_Bool_Exp>;
};

/** columns and relationships of "hub" */
export type HubHarvisArgs = {
  distinct_on?: InputMaybe<Array<Harvi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Harvi_Order_By>>;
  where?: InputMaybe<Harvi_Bool_Exp>;
};

/** columns and relationships of "hub" */
export type HubHarvis_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Harvi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Harvi_Order_By>>;
  where?: InputMaybe<Harvi_Bool_Exp>;
};

/** columns and relationships of "hub" */
export type HubHubfirmwareversionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "hub" */
export type HubKeyvaluestoreArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "hub" */
export type HubZappisArgs = {
  distinct_on?: InputMaybe<Array<Zappi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zappi_Order_By>>;
  where?: InputMaybe<Zappi_Bool_Exp>;
};

/** columns and relationships of "hub" */
export type HubZappis_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Zappi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zappi_Order_By>>;
  where?: InputMaybe<Zappi_Bool_Exp>;
};

/** aggregated selection of "hub" */
export type Hub_Aggregate = {
  __typename?: 'hub_aggregate';
  aggregate?: Maybe<Hub_Aggregate_Fields>;
  nodes: Array<Hub>;
};

/** aggregate fields of "hub" */
export type Hub_Aggregate_Fields = {
  __typename?: 'hub_aggregate_fields';
  avg?: Maybe<Hub_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Hub_Max_Fields>;
  min?: Maybe<Hub_Min_Fields>;
  stddev?: Maybe<Hub_Stddev_Fields>;
  stddev_pop?: Maybe<Hub_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Hub_Stddev_Samp_Fields>;
  sum?: Maybe<Hub_Sum_Fields>;
  var_pop?: Maybe<Hub_Var_Pop_Fields>;
  var_samp?: Maybe<Hub_Var_Samp_Fields>;
  variance?: Maybe<Hub_Variance_Fields>;
};

/** aggregate fields of "hub" */
export type Hub_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Hub_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Hub_Append_Input = {
  hubfirmwareversions?: InputMaybe<Scalars['jsonb']>;
  keyvaluestore?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Hub_Avg_Fields = {
  __typename?: 'hub_avg_fields';
  cloudipoverrideserverid?: Maybe<Scalars['Float']>;
  currentversion?: Maybe<Scalars['Float']>;
  loadcontroldevicedata1serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata1setload?: Maybe<Scalars['Float']>;
  loadcontroldevicedata2serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata2setload?: Maybe<Scalars['Float']>;
  loadcontroldevicedata3serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata3setload?: Maybe<Scalars['Float']>;
  loadcontroldevicedata4serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata4setload?: Maybe<Scalars['Float']>;
  loadcontroldevicedata5serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata5setload?: Maybe<Scalars['Float']>;
  loadcontrolgeneration?: Maybe<Scalars['Float']>;
  loadcontrolgridcurrentshundredthsphase1?: Maybe<Scalars['Float']>;
  loadcontrolgridcurrentshundredthsphase2?: Maybe<Scalars['Float']>;
  loadcontrolgridcurrentshundredthsphase3?: Maybe<Scalars['Float']>;
  loadcontrolgridimportexport?: Maybe<Scalars['Float']>;
  masterdeviceinstance?: Maybe<Scalars['Float']>;
  masterdevicerawaddress?: Maybe<Scalars['Float']>;
  networkid?: Maybe<Scalars['Float']>;
  nodevices?: Maybe<Scalars['Float']>;
  port?: Maybe<Scalars['Float']>;
  radiochannel?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  serverlastheard?: Maybe<Scalars['Float']>;
  uptime?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "hub". All fields are combined with a logical 'AND'. */
export type Hub_Bool_Exp = {
  _and?: InputMaybe<Array<Hub_Bool_Exp>>;
  _not?: InputMaybe<Hub_Bool_Exp>;
  _or?: InputMaybe<Array<Hub_Bool_Exp>>;
  apppassword?: InputMaybe<String_Comparison_Exp>;
  australia?: InputMaybe<Boolean_Comparison_Exp>;
  cloudipoverrideserverid?: InputMaybe<Int_Comparison_Exp>;
  createdat?: InputMaybe<Timestamptz_Comparison_Exp>;
  currentversion?: InputMaybe<Int_Comparison_Exp>;
  deviceclass?: InputMaybe<String_Comparison_Exp>;
  eddis?: InputMaybe<Eddi_Bool_Exp>;
  harvis?: InputMaybe<Harvi_Bool_Exp>;
  hubfirmwareversions?: InputMaybe<Jsonb_Comparison_Exp>;
  ipaddress?: InputMaybe<String_Comparison_Exp>;
  isblocked?: InputMaybe<Boolean_Comparison_Exp>;
  keyvaluestore?: InputMaybe<Jsonb_Comparison_Exp>;
  lastauth?: InputMaybe<Timestamptz_Comparison_Exp>;
  loadcontroldevicedata1serialno?: InputMaybe<Bigint_Comparison_Exp>;
  loadcontroldevicedata1setload?: InputMaybe<Int_Comparison_Exp>;
  loadcontroldevicedata2serialno?: InputMaybe<Bigint_Comparison_Exp>;
  loadcontroldevicedata2setload?: InputMaybe<Int_Comparison_Exp>;
  loadcontroldevicedata3serialno?: InputMaybe<Bigint_Comparison_Exp>;
  loadcontroldevicedata3setload?: InputMaybe<Int_Comparison_Exp>;
  loadcontroldevicedata4serialno?: InputMaybe<Bigint_Comparison_Exp>;
  loadcontroldevicedata4setload?: InputMaybe<Int_Comparison_Exp>;
  loadcontroldevicedata5serialno?: InputMaybe<Bigint_Comparison_Exp>;
  loadcontroldevicedata5setload?: InputMaybe<Int_Comparison_Exp>;
  loadcontrolflagsgenctonnetwork?: InputMaybe<Boolean_Comparison_Exp>;
  loadcontrolflagsgridlimits?: InputMaybe<Boolean_Comparison_Exp>;
  loadcontrolflagsgridvalid?: InputMaybe<Boolean_Comparison_Exp>;
  loadcontrolflagshubonnetwork?: InputMaybe<Boolean_Comparison_Exp>;
  loadcontrolflagsnetphases?: InputMaybe<Boolean_Comparison_Exp>;
  loadcontrolgeneration?: InputMaybe<Int_Comparison_Exp>;
  loadcontrolgridcurrentshundredthsphase1?: InputMaybe<Int_Comparison_Exp>;
  loadcontrolgridcurrentshundredthsphase2?: InputMaybe<Int_Comparison_Exp>;
  loadcontrolgridcurrentshundredthsphase3?: InputMaybe<Int_Comparison_Exp>;
  loadcontrolgridimportexport?: InputMaybe<Int_Comparison_Exp>;
  masterdeviceclass?: InputMaybe<String_Comparison_Exp>;
  masterdeviceinstance?: InputMaybe<Int_Comparison_Exp>;
  masterdevicerawaddress?: InputMaybe<Int_Comparison_Exp>;
  microprocessorti?: InputMaybe<Boolean_Comparison_Exp>;
  networkid?: InputMaybe<Int_Comparison_Exp>;
  nodevices?: InputMaybe<Int_Comparison_Exp>;
  port?: InputMaybe<Int_Comparison_Exp>;
  radiochannel?: InputMaybe<Smallint_Comparison_Exp>;
  registrationdate?: InputMaybe<Timestamptz_Comparison_Exp>;
  regpassword?: InputMaybe<String_Comparison_Exp>;
  serialno?: InputMaybe<Bigint_Comparison_Exp>;
  serverlastheard?: InputMaybe<Int_Comparison_Exp>;
  updatedat?: InputMaybe<Timestamptz_Comparison_Exp>;
  uptime?: InputMaybe<Int_Comparison_Exp>;
  vhub?: InputMaybe<Boolean_Comparison_Exp>;
  zappis?: InputMaybe<Zappi_Bool_Exp>;
};

/** unique or primary key constraints on table "hub" */
export enum Hub_Constraint {
  /** unique or primary key constraint */
  Pk_2debac79742deb56cc3e1ace3a1 = 'PK_2debac79742deb56cc3e1ace3a1',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Hub_Delete_At_Path_Input = {
  hubfirmwareversions?: InputMaybe<Array<Scalars['String']>>;
  keyvaluestore?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Hub_Delete_Elem_Input = {
  hubfirmwareversions?: InputMaybe<Scalars['Int']>;
  keyvaluestore?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Hub_Delete_Key_Input = {
  hubfirmwareversions?: InputMaybe<Scalars['String']>;
  keyvaluestore?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "hub" */
export type Hub_Inc_Input = {
  cloudipoverrideserverid?: InputMaybe<Scalars['Int']>;
  currentversion?: InputMaybe<Scalars['Int']>;
  loadcontroldevicedata1serialno?: InputMaybe<Scalars['bigint']>;
  loadcontroldevicedata1setload?: InputMaybe<Scalars['Int']>;
  loadcontroldevicedata2serialno?: InputMaybe<Scalars['bigint']>;
  loadcontroldevicedata2setload?: InputMaybe<Scalars['Int']>;
  loadcontroldevicedata3serialno?: InputMaybe<Scalars['bigint']>;
  loadcontroldevicedata3setload?: InputMaybe<Scalars['Int']>;
  loadcontroldevicedata4serialno?: InputMaybe<Scalars['bigint']>;
  loadcontroldevicedata4setload?: InputMaybe<Scalars['Int']>;
  loadcontroldevicedata5serialno?: InputMaybe<Scalars['bigint']>;
  loadcontroldevicedata5setload?: InputMaybe<Scalars['Int']>;
  loadcontrolgeneration?: InputMaybe<Scalars['Int']>;
  loadcontrolgridcurrentshundredthsphase1?: InputMaybe<Scalars['Int']>;
  loadcontrolgridcurrentshundredthsphase2?: InputMaybe<Scalars['Int']>;
  loadcontrolgridcurrentshundredthsphase3?: InputMaybe<Scalars['Int']>;
  loadcontrolgridimportexport?: InputMaybe<Scalars['Int']>;
  masterdeviceinstance?: InputMaybe<Scalars['Int']>;
  masterdevicerawaddress?: InputMaybe<Scalars['Int']>;
  networkid?: InputMaybe<Scalars['Int']>;
  nodevices?: InputMaybe<Scalars['Int']>;
  port?: InputMaybe<Scalars['Int']>;
  radiochannel?: InputMaybe<Scalars['smallint']>;
  serialno?: InputMaybe<Scalars['bigint']>;
  serverlastheard?: InputMaybe<Scalars['Int']>;
  uptime?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "hub" */
export type Hub_Insert_Input = {
  apppassword?: InputMaybe<Scalars['String']>;
  australia?: InputMaybe<Scalars['Boolean']>;
  cloudipoverrideserverid?: InputMaybe<Scalars['Int']>;
  createdat?: InputMaybe<Scalars['timestamptz']>;
  currentversion?: InputMaybe<Scalars['Int']>;
  deviceclass?: InputMaybe<Scalars['String']>;
  eddis?: InputMaybe<Eddi_Arr_Rel_Insert_Input>;
  harvis?: InputMaybe<Harvi_Arr_Rel_Insert_Input>;
  hubfirmwareversions?: InputMaybe<Scalars['jsonb']>;
  ipaddress?: InputMaybe<Scalars['String']>;
  isblocked?: InputMaybe<Scalars['Boolean']>;
  keyvaluestore?: InputMaybe<Scalars['jsonb']>;
  lastauth?: InputMaybe<Scalars['timestamptz']>;
  loadcontroldevicedata1serialno?: InputMaybe<Scalars['bigint']>;
  loadcontroldevicedata1setload?: InputMaybe<Scalars['Int']>;
  loadcontroldevicedata2serialno?: InputMaybe<Scalars['bigint']>;
  loadcontroldevicedata2setload?: InputMaybe<Scalars['Int']>;
  loadcontroldevicedata3serialno?: InputMaybe<Scalars['bigint']>;
  loadcontroldevicedata3setload?: InputMaybe<Scalars['Int']>;
  loadcontroldevicedata4serialno?: InputMaybe<Scalars['bigint']>;
  loadcontroldevicedata4setload?: InputMaybe<Scalars['Int']>;
  loadcontroldevicedata5serialno?: InputMaybe<Scalars['bigint']>;
  loadcontroldevicedata5setload?: InputMaybe<Scalars['Int']>;
  loadcontrolflagsgenctonnetwork?: InputMaybe<Scalars['Boolean']>;
  loadcontrolflagsgridlimits?: InputMaybe<Scalars['Boolean']>;
  loadcontrolflagsgridvalid?: InputMaybe<Scalars['Boolean']>;
  loadcontrolflagshubonnetwork?: InputMaybe<Scalars['Boolean']>;
  loadcontrolflagsnetphases?: InputMaybe<Scalars['Boolean']>;
  loadcontrolgeneration?: InputMaybe<Scalars['Int']>;
  loadcontrolgridcurrentshundredthsphase1?: InputMaybe<Scalars['Int']>;
  loadcontrolgridcurrentshundredthsphase2?: InputMaybe<Scalars['Int']>;
  loadcontrolgridcurrentshundredthsphase3?: InputMaybe<Scalars['Int']>;
  loadcontrolgridimportexport?: InputMaybe<Scalars['Int']>;
  masterdeviceclass?: InputMaybe<Scalars['String']>;
  masterdeviceinstance?: InputMaybe<Scalars['Int']>;
  masterdevicerawaddress?: InputMaybe<Scalars['Int']>;
  microprocessorti?: InputMaybe<Scalars['Boolean']>;
  networkid?: InputMaybe<Scalars['Int']>;
  nodevices?: InputMaybe<Scalars['Int']>;
  port?: InputMaybe<Scalars['Int']>;
  radiochannel?: InputMaybe<Scalars['smallint']>;
  registrationdate?: InputMaybe<Scalars['timestamptz']>;
  regpassword?: InputMaybe<Scalars['String']>;
  serialno?: InputMaybe<Scalars['bigint']>;
  serverlastheard?: InputMaybe<Scalars['Int']>;
  updatedat?: InputMaybe<Scalars['timestamptz']>;
  uptime?: InputMaybe<Scalars['Int']>;
  vhub?: InputMaybe<Scalars['Boolean']>;
  zappis?: InputMaybe<Zappi_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Hub_Max_Fields = {
  __typename?: 'hub_max_fields';
  apppassword?: Maybe<Scalars['String']>;
  cloudipoverrideserverid?: Maybe<Scalars['Int']>;
  createdat?: Maybe<Scalars['timestamptz']>;
  currentversion?: Maybe<Scalars['Int']>;
  deviceclass?: Maybe<Scalars['String']>;
  ipaddress?: Maybe<Scalars['String']>;
  lastauth?: Maybe<Scalars['timestamptz']>;
  loadcontroldevicedata1serialno?: Maybe<Scalars['bigint']>;
  loadcontroldevicedata1setload?: Maybe<Scalars['Int']>;
  loadcontroldevicedata2serialno?: Maybe<Scalars['bigint']>;
  loadcontroldevicedata2setload?: Maybe<Scalars['Int']>;
  loadcontroldevicedata3serialno?: Maybe<Scalars['bigint']>;
  loadcontroldevicedata3setload?: Maybe<Scalars['Int']>;
  loadcontroldevicedata4serialno?: Maybe<Scalars['bigint']>;
  loadcontroldevicedata4setload?: Maybe<Scalars['Int']>;
  loadcontroldevicedata5serialno?: Maybe<Scalars['bigint']>;
  loadcontroldevicedata5setload?: Maybe<Scalars['Int']>;
  loadcontrolgeneration?: Maybe<Scalars['Int']>;
  loadcontrolgridcurrentshundredthsphase1?: Maybe<Scalars['Int']>;
  loadcontrolgridcurrentshundredthsphase2?: Maybe<Scalars['Int']>;
  loadcontrolgridcurrentshundredthsphase3?: Maybe<Scalars['Int']>;
  loadcontrolgridimportexport?: Maybe<Scalars['Int']>;
  masterdeviceclass?: Maybe<Scalars['String']>;
  masterdeviceinstance?: Maybe<Scalars['Int']>;
  masterdevicerawaddress?: Maybe<Scalars['Int']>;
  networkid?: Maybe<Scalars['Int']>;
  nodevices?: Maybe<Scalars['Int']>;
  port?: Maybe<Scalars['Int']>;
  radiochannel?: Maybe<Scalars['smallint']>;
  registrationdate?: Maybe<Scalars['timestamptz']>;
  regpassword?: Maybe<Scalars['String']>;
  serialno?: Maybe<Scalars['bigint']>;
  serverlastheard?: Maybe<Scalars['Int']>;
  updatedat?: Maybe<Scalars['timestamptz']>;
  uptime?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Hub_Min_Fields = {
  __typename?: 'hub_min_fields';
  apppassword?: Maybe<Scalars['String']>;
  cloudipoverrideserverid?: Maybe<Scalars['Int']>;
  createdat?: Maybe<Scalars['timestamptz']>;
  currentversion?: Maybe<Scalars['Int']>;
  deviceclass?: Maybe<Scalars['String']>;
  ipaddress?: Maybe<Scalars['String']>;
  lastauth?: Maybe<Scalars['timestamptz']>;
  loadcontroldevicedata1serialno?: Maybe<Scalars['bigint']>;
  loadcontroldevicedata1setload?: Maybe<Scalars['Int']>;
  loadcontroldevicedata2serialno?: Maybe<Scalars['bigint']>;
  loadcontroldevicedata2setload?: Maybe<Scalars['Int']>;
  loadcontroldevicedata3serialno?: Maybe<Scalars['bigint']>;
  loadcontroldevicedata3setload?: Maybe<Scalars['Int']>;
  loadcontroldevicedata4serialno?: Maybe<Scalars['bigint']>;
  loadcontroldevicedata4setload?: Maybe<Scalars['Int']>;
  loadcontroldevicedata5serialno?: Maybe<Scalars['bigint']>;
  loadcontroldevicedata5setload?: Maybe<Scalars['Int']>;
  loadcontrolgeneration?: Maybe<Scalars['Int']>;
  loadcontrolgridcurrentshundredthsphase1?: Maybe<Scalars['Int']>;
  loadcontrolgridcurrentshundredthsphase2?: Maybe<Scalars['Int']>;
  loadcontrolgridcurrentshundredthsphase3?: Maybe<Scalars['Int']>;
  loadcontrolgridimportexport?: Maybe<Scalars['Int']>;
  masterdeviceclass?: Maybe<Scalars['String']>;
  masterdeviceinstance?: Maybe<Scalars['Int']>;
  masterdevicerawaddress?: Maybe<Scalars['Int']>;
  networkid?: Maybe<Scalars['Int']>;
  nodevices?: Maybe<Scalars['Int']>;
  port?: Maybe<Scalars['Int']>;
  radiochannel?: Maybe<Scalars['smallint']>;
  registrationdate?: Maybe<Scalars['timestamptz']>;
  regpassword?: Maybe<Scalars['String']>;
  serialno?: Maybe<Scalars['bigint']>;
  serverlastheard?: Maybe<Scalars['Int']>;
  updatedat?: Maybe<Scalars['timestamptz']>;
  uptime?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "hub" */
export type Hub_Mutation_Response = {
  __typename?: 'hub_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Hub>;
};

/** input type for inserting object relation for remote table "hub" */
export type Hub_Obj_Rel_Insert_Input = {
  data: Hub_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Hub_On_Conflict>;
};

/** on_conflict condition type for table "hub" */
export type Hub_On_Conflict = {
  constraint: Hub_Constraint;
  update_columns?: Array<Hub_Update_Column>;
  where?: InputMaybe<Hub_Bool_Exp>;
};

/** Ordering options when selecting data from "hub". */
export type Hub_Order_By = {
  apppassword?: InputMaybe<Order_By>;
  australia?: InputMaybe<Order_By>;
  cloudipoverrideserverid?: InputMaybe<Order_By>;
  createdat?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
  deviceclass?: InputMaybe<Order_By>;
  eddis_aggregate?: InputMaybe<Eddi_Aggregate_Order_By>;
  harvis_aggregate?: InputMaybe<Harvi_Aggregate_Order_By>;
  hubfirmwareversions?: InputMaybe<Order_By>;
  ipaddress?: InputMaybe<Order_By>;
  isblocked?: InputMaybe<Order_By>;
  keyvaluestore?: InputMaybe<Order_By>;
  lastauth?: InputMaybe<Order_By>;
  loadcontroldevicedata1serialno?: InputMaybe<Order_By>;
  loadcontroldevicedata1setload?: InputMaybe<Order_By>;
  loadcontroldevicedata2serialno?: InputMaybe<Order_By>;
  loadcontroldevicedata2setload?: InputMaybe<Order_By>;
  loadcontroldevicedata3serialno?: InputMaybe<Order_By>;
  loadcontroldevicedata3setload?: InputMaybe<Order_By>;
  loadcontroldevicedata4serialno?: InputMaybe<Order_By>;
  loadcontroldevicedata4setload?: InputMaybe<Order_By>;
  loadcontroldevicedata5serialno?: InputMaybe<Order_By>;
  loadcontroldevicedata5setload?: InputMaybe<Order_By>;
  loadcontrolflagsgenctonnetwork?: InputMaybe<Order_By>;
  loadcontrolflagsgridlimits?: InputMaybe<Order_By>;
  loadcontrolflagsgridvalid?: InputMaybe<Order_By>;
  loadcontrolflagshubonnetwork?: InputMaybe<Order_By>;
  loadcontrolflagsnetphases?: InputMaybe<Order_By>;
  loadcontrolgeneration?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase1?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase2?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase3?: InputMaybe<Order_By>;
  loadcontrolgridimportexport?: InputMaybe<Order_By>;
  masterdeviceclass?: InputMaybe<Order_By>;
  masterdeviceinstance?: InputMaybe<Order_By>;
  masterdevicerawaddress?: InputMaybe<Order_By>;
  microprocessorti?: InputMaybe<Order_By>;
  networkid?: InputMaybe<Order_By>;
  nodevices?: InputMaybe<Order_By>;
  port?: InputMaybe<Order_By>;
  radiochannel?: InputMaybe<Order_By>;
  registrationdate?: InputMaybe<Order_By>;
  regpassword?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverlastheard?: InputMaybe<Order_By>;
  updatedat?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
  vhub?: InputMaybe<Order_By>;
  zappis_aggregate?: InputMaybe<Zappi_Aggregate_Order_By>;
};

/** primary key columns input for table: hub */
export type Hub_Pk_Columns_Input = {
  serialno: Scalars['bigint'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Hub_Prepend_Input = {
  hubfirmwareversions?: InputMaybe<Scalars['jsonb']>;
  keyvaluestore?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "hub" */
export enum Hub_Select_Column {
  /** column name */
  Apppassword = 'apppassword',
  /** column name */
  Australia = 'australia',
  /** column name */
  Cloudipoverrideserverid = 'cloudipoverrideserverid',
  /** column name */
  Createdat = 'createdat',
  /** column name */
  Currentversion = 'currentversion',
  /** column name */
  Deviceclass = 'deviceclass',
  /** column name */
  Hubfirmwareversions = 'hubfirmwareversions',
  /** column name */
  Ipaddress = 'ipaddress',
  /** column name */
  Isblocked = 'isblocked',
  /** column name */
  Keyvaluestore = 'keyvaluestore',
  /** column name */
  Lastauth = 'lastauth',
  /** column name */
  Loadcontroldevicedata1serialno = 'loadcontroldevicedata1serialno',
  /** column name */
  Loadcontroldevicedata1setload = 'loadcontroldevicedata1setload',
  /** column name */
  Loadcontroldevicedata2serialno = 'loadcontroldevicedata2serialno',
  /** column name */
  Loadcontroldevicedata2setload = 'loadcontroldevicedata2setload',
  /** column name */
  Loadcontroldevicedata3serialno = 'loadcontroldevicedata3serialno',
  /** column name */
  Loadcontroldevicedata3setload = 'loadcontroldevicedata3setload',
  /** column name */
  Loadcontroldevicedata4serialno = 'loadcontroldevicedata4serialno',
  /** column name */
  Loadcontroldevicedata4setload = 'loadcontroldevicedata4setload',
  /** column name */
  Loadcontroldevicedata5serialno = 'loadcontroldevicedata5serialno',
  /** column name */
  Loadcontroldevicedata5setload = 'loadcontroldevicedata5setload',
  /** column name */
  Loadcontrolflagsgenctonnetwork = 'loadcontrolflagsgenctonnetwork',
  /** column name */
  Loadcontrolflagsgridlimits = 'loadcontrolflagsgridlimits',
  /** column name */
  Loadcontrolflagsgridvalid = 'loadcontrolflagsgridvalid',
  /** column name */
  Loadcontrolflagshubonnetwork = 'loadcontrolflagshubonnetwork',
  /** column name */
  Loadcontrolflagsnetphases = 'loadcontrolflagsnetphases',
  /** column name */
  Loadcontrolgeneration = 'loadcontrolgeneration',
  /** column name */
  Loadcontrolgridcurrentshundredthsphase1 = 'loadcontrolgridcurrentshundredthsphase1',
  /** column name */
  Loadcontrolgridcurrentshundredthsphase2 = 'loadcontrolgridcurrentshundredthsphase2',
  /** column name */
  Loadcontrolgridcurrentshundredthsphase3 = 'loadcontrolgridcurrentshundredthsphase3',
  /** column name */
  Loadcontrolgridimportexport = 'loadcontrolgridimportexport',
  /** column name */
  Masterdeviceclass = 'masterdeviceclass',
  /** column name */
  Masterdeviceinstance = 'masterdeviceinstance',
  /** column name */
  Masterdevicerawaddress = 'masterdevicerawaddress',
  /** column name */
  Microprocessorti = 'microprocessorti',
  /** column name */
  Networkid = 'networkid',
  /** column name */
  Nodevices = 'nodevices',
  /** column name */
  Port = 'port',
  /** column name */
  Radiochannel = 'radiochannel',
  /** column name */
  Registrationdate = 'registrationdate',
  /** column name */
  Regpassword = 'regpassword',
  /** column name */
  Serialno = 'serialno',
  /** column name */
  Serverlastheard = 'serverlastheard',
  /** column name */
  Updatedat = 'updatedat',
  /** column name */
  Uptime = 'uptime',
  /** column name */
  Vhub = 'vhub',
}

/** input type for updating data in table "hub" */
export type Hub_Set_Input = {
  apppassword?: InputMaybe<Scalars['String']>;
  australia?: InputMaybe<Scalars['Boolean']>;
  cloudipoverrideserverid?: InputMaybe<Scalars['Int']>;
  createdat?: InputMaybe<Scalars['timestamptz']>;
  currentversion?: InputMaybe<Scalars['Int']>;
  deviceclass?: InputMaybe<Scalars['String']>;
  hubfirmwareversions?: InputMaybe<Scalars['jsonb']>;
  ipaddress?: InputMaybe<Scalars['String']>;
  isblocked?: InputMaybe<Scalars['Boolean']>;
  keyvaluestore?: InputMaybe<Scalars['jsonb']>;
  lastauth?: InputMaybe<Scalars['timestamptz']>;
  loadcontroldevicedata1serialno?: InputMaybe<Scalars['bigint']>;
  loadcontroldevicedata1setload?: InputMaybe<Scalars['Int']>;
  loadcontroldevicedata2serialno?: InputMaybe<Scalars['bigint']>;
  loadcontroldevicedata2setload?: InputMaybe<Scalars['Int']>;
  loadcontroldevicedata3serialno?: InputMaybe<Scalars['bigint']>;
  loadcontroldevicedata3setload?: InputMaybe<Scalars['Int']>;
  loadcontroldevicedata4serialno?: InputMaybe<Scalars['bigint']>;
  loadcontroldevicedata4setload?: InputMaybe<Scalars['Int']>;
  loadcontroldevicedata5serialno?: InputMaybe<Scalars['bigint']>;
  loadcontroldevicedata5setload?: InputMaybe<Scalars['Int']>;
  loadcontrolflagsgenctonnetwork?: InputMaybe<Scalars['Boolean']>;
  loadcontrolflagsgridlimits?: InputMaybe<Scalars['Boolean']>;
  loadcontrolflagsgridvalid?: InputMaybe<Scalars['Boolean']>;
  loadcontrolflagshubonnetwork?: InputMaybe<Scalars['Boolean']>;
  loadcontrolflagsnetphases?: InputMaybe<Scalars['Boolean']>;
  loadcontrolgeneration?: InputMaybe<Scalars['Int']>;
  loadcontrolgridcurrentshundredthsphase1?: InputMaybe<Scalars['Int']>;
  loadcontrolgridcurrentshundredthsphase2?: InputMaybe<Scalars['Int']>;
  loadcontrolgridcurrentshundredthsphase3?: InputMaybe<Scalars['Int']>;
  loadcontrolgridimportexport?: InputMaybe<Scalars['Int']>;
  masterdeviceclass?: InputMaybe<Scalars['String']>;
  masterdeviceinstance?: InputMaybe<Scalars['Int']>;
  masterdevicerawaddress?: InputMaybe<Scalars['Int']>;
  microprocessorti?: InputMaybe<Scalars['Boolean']>;
  networkid?: InputMaybe<Scalars['Int']>;
  nodevices?: InputMaybe<Scalars['Int']>;
  port?: InputMaybe<Scalars['Int']>;
  radiochannel?: InputMaybe<Scalars['smallint']>;
  registrationdate?: InputMaybe<Scalars['timestamptz']>;
  regpassword?: InputMaybe<Scalars['String']>;
  serialno?: InputMaybe<Scalars['bigint']>;
  serverlastheard?: InputMaybe<Scalars['Int']>;
  updatedat?: InputMaybe<Scalars['timestamptz']>;
  uptime?: InputMaybe<Scalars['Int']>;
  vhub?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Hub_Stddev_Fields = {
  __typename?: 'hub_stddev_fields';
  cloudipoverrideserverid?: Maybe<Scalars['Float']>;
  currentversion?: Maybe<Scalars['Float']>;
  loadcontroldevicedata1serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata1setload?: Maybe<Scalars['Float']>;
  loadcontroldevicedata2serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata2setload?: Maybe<Scalars['Float']>;
  loadcontroldevicedata3serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata3setload?: Maybe<Scalars['Float']>;
  loadcontroldevicedata4serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata4setload?: Maybe<Scalars['Float']>;
  loadcontroldevicedata5serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata5setload?: Maybe<Scalars['Float']>;
  loadcontrolgeneration?: Maybe<Scalars['Float']>;
  loadcontrolgridcurrentshundredthsphase1?: Maybe<Scalars['Float']>;
  loadcontrolgridcurrentshundredthsphase2?: Maybe<Scalars['Float']>;
  loadcontrolgridcurrentshundredthsphase3?: Maybe<Scalars['Float']>;
  loadcontrolgridimportexport?: Maybe<Scalars['Float']>;
  masterdeviceinstance?: Maybe<Scalars['Float']>;
  masterdevicerawaddress?: Maybe<Scalars['Float']>;
  networkid?: Maybe<Scalars['Float']>;
  nodevices?: Maybe<Scalars['Float']>;
  port?: Maybe<Scalars['Float']>;
  radiochannel?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  serverlastheard?: Maybe<Scalars['Float']>;
  uptime?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Hub_Stddev_Pop_Fields = {
  __typename?: 'hub_stddev_pop_fields';
  cloudipoverrideserverid?: Maybe<Scalars['Float']>;
  currentversion?: Maybe<Scalars['Float']>;
  loadcontroldevicedata1serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata1setload?: Maybe<Scalars['Float']>;
  loadcontroldevicedata2serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata2setload?: Maybe<Scalars['Float']>;
  loadcontroldevicedata3serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata3setload?: Maybe<Scalars['Float']>;
  loadcontroldevicedata4serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata4setload?: Maybe<Scalars['Float']>;
  loadcontroldevicedata5serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata5setload?: Maybe<Scalars['Float']>;
  loadcontrolgeneration?: Maybe<Scalars['Float']>;
  loadcontrolgridcurrentshundredthsphase1?: Maybe<Scalars['Float']>;
  loadcontrolgridcurrentshundredthsphase2?: Maybe<Scalars['Float']>;
  loadcontrolgridcurrentshundredthsphase3?: Maybe<Scalars['Float']>;
  loadcontrolgridimportexport?: Maybe<Scalars['Float']>;
  masterdeviceinstance?: Maybe<Scalars['Float']>;
  masterdevicerawaddress?: Maybe<Scalars['Float']>;
  networkid?: Maybe<Scalars['Float']>;
  nodevices?: Maybe<Scalars['Float']>;
  port?: Maybe<Scalars['Float']>;
  radiochannel?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  serverlastheard?: Maybe<Scalars['Float']>;
  uptime?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Hub_Stddev_Samp_Fields = {
  __typename?: 'hub_stddev_samp_fields';
  cloudipoverrideserverid?: Maybe<Scalars['Float']>;
  currentversion?: Maybe<Scalars['Float']>;
  loadcontroldevicedata1serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata1setload?: Maybe<Scalars['Float']>;
  loadcontroldevicedata2serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata2setload?: Maybe<Scalars['Float']>;
  loadcontroldevicedata3serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata3setload?: Maybe<Scalars['Float']>;
  loadcontroldevicedata4serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata4setload?: Maybe<Scalars['Float']>;
  loadcontroldevicedata5serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata5setload?: Maybe<Scalars['Float']>;
  loadcontrolgeneration?: Maybe<Scalars['Float']>;
  loadcontrolgridcurrentshundredthsphase1?: Maybe<Scalars['Float']>;
  loadcontrolgridcurrentshundredthsphase2?: Maybe<Scalars['Float']>;
  loadcontrolgridcurrentshundredthsphase3?: Maybe<Scalars['Float']>;
  loadcontrolgridimportexport?: Maybe<Scalars['Float']>;
  masterdeviceinstance?: Maybe<Scalars['Float']>;
  masterdevicerawaddress?: Maybe<Scalars['Float']>;
  networkid?: Maybe<Scalars['Float']>;
  nodevices?: Maybe<Scalars['Float']>;
  port?: Maybe<Scalars['Float']>;
  radiochannel?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  serverlastheard?: Maybe<Scalars['Float']>;
  uptime?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Hub_Sum_Fields = {
  __typename?: 'hub_sum_fields';
  cloudipoverrideserverid?: Maybe<Scalars['Int']>;
  currentversion?: Maybe<Scalars['Int']>;
  loadcontroldevicedata1serialno?: Maybe<Scalars['bigint']>;
  loadcontroldevicedata1setload?: Maybe<Scalars['Int']>;
  loadcontroldevicedata2serialno?: Maybe<Scalars['bigint']>;
  loadcontroldevicedata2setload?: Maybe<Scalars['Int']>;
  loadcontroldevicedata3serialno?: Maybe<Scalars['bigint']>;
  loadcontroldevicedata3setload?: Maybe<Scalars['Int']>;
  loadcontroldevicedata4serialno?: Maybe<Scalars['bigint']>;
  loadcontroldevicedata4setload?: Maybe<Scalars['Int']>;
  loadcontroldevicedata5serialno?: Maybe<Scalars['bigint']>;
  loadcontroldevicedata5setload?: Maybe<Scalars['Int']>;
  loadcontrolgeneration?: Maybe<Scalars['Int']>;
  loadcontrolgridcurrentshundredthsphase1?: Maybe<Scalars['Int']>;
  loadcontrolgridcurrentshundredthsphase2?: Maybe<Scalars['Int']>;
  loadcontrolgridcurrentshundredthsphase3?: Maybe<Scalars['Int']>;
  loadcontrolgridimportexport?: Maybe<Scalars['Int']>;
  masterdeviceinstance?: Maybe<Scalars['Int']>;
  masterdevicerawaddress?: Maybe<Scalars['Int']>;
  networkid?: Maybe<Scalars['Int']>;
  nodevices?: Maybe<Scalars['Int']>;
  port?: Maybe<Scalars['Int']>;
  radiochannel?: Maybe<Scalars['smallint']>;
  serialno?: Maybe<Scalars['bigint']>;
  serverlastheard?: Maybe<Scalars['Int']>;
  uptime?: Maybe<Scalars['Int']>;
};

/** update columns of table "hub" */
export enum Hub_Update_Column {
  /** column name */
  Apppassword = 'apppassword',
  /** column name */
  Australia = 'australia',
  /** column name */
  Cloudipoverrideserverid = 'cloudipoverrideserverid',
  /** column name */
  Createdat = 'createdat',
  /** column name */
  Currentversion = 'currentversion',
  /** column name */
  Deviceclass = 'deviceclass',
  /** column name */
  Hubfirmwareversions = 'hubfirmwareversions',
  /** column name */
  Ipaddress = 'ipaddress',
  /** column name */
  Isblocked = 'isblocked',
  /** column name */
  Keyvaluestore = 'keyvaluestore',
  /** column name */
  Lastauth = 'lastauth',
  /** column name */
  Loadcontroldevicedata1serialno = 'loadcontroldevicedata1serialno',
  /** column name */
  Loadcontroldevicedata1setload = 'loadcontroldevicedata1setload',
  /** column name */
  Loadcontroldevicedata2serialno = 'loadcontroldevicedata2serialno',
  /** column name */
  Loadcontroldevicedata2setload = 'loadcontroldevicedata2setload',
  /** column name */
  Loadcontroldevicedata3serialno = 'loadcontroldevicedata3serialno',
  /** column name */
  Loadcontroldevicedata3setload = 'loadcontroldevicedata3setload',
  /** column name */
  Loadcontroldevicedata4serialno = 'loadcontroldevicedata4serialno',
  /** column name */
  Loadcontroldevicedata4setload = 'loadcontroldevicedata4setload',
  /** column name */
  Loadcontroldevicedata5serialno = 'loadcontroldevicedata5serialno',
  /** column name */
  Loadcontroldevicedata5setload = 'loadcontroldevicedata5setload',
  /** column name */
  Loadcontrolflagsgenctonnetwork = 'loadcontrolflagsgenctonnetwork',
  /** column name */
  Loadcontrolflagsgridlimits = 'loadcontrolflagsgridlimits',
  /** column name */
  Loadcontrolflagsgridvalid = 'loadcontrolflagsgridvalid',
  /** column name */
  Loadcontrolflagshubonnetwork = 'loadcontrolflagshubonnetwork',
  /** column name */
  Loadcontrolflagsnetphases = 'loadcontrolflagsnetphases',
  /** column name */
  Loadcontrolgeneration = 'loadcontrolgeneration',
  /** column name */
  Loadcontrolgridcurrentshundredthsphase1 = 'loadcontrolgridcurrentshundredthsphase1',
  /** column name */
  Loadcontrolgridcurrentshundredthsphase2 = 'loadcontrolgridcurrentshundredthsphase2',
  /** column name */
  Loadcontrolgridcurrentshundredthsphase3 = 'loadcontrolgridcurrentshundredthsphase3',
  /** column name */
  Loadcontrolgridimportexport = 'loadcontrolgridimportexport',
  /** column name */
  Masterdeviceclass = 'masterdeviceclass',
  /** column name */
  Masterdeviceinstance = 'masterdeviceinstance',
  /** column name */
  Masterdevicerawaddress = 'masterdevicerawaddress',
  /** column name */
  Microprocessorti = 'microprocessorti',
  /** column name */
  Networkid = 'networkid',
  /** column name */
  Nodevices = 'nodevices',
  /** column name */
  Port = 'port',
  /** column name */
  Radiochannel = 'radiochannel',
  /** column name */
  Registrationdate = 'registrationdate',
  /** column name */
  Regpassword = 'regpassword',
  /** column name */
  Serialno = 'serialno',
  /** column name */
  Serverlastheard = 'serverlastheard',
  /** column name */
  Updatedat = 'updatedat',
  /** column name */
  Uptime = 'uptime',
  /** column name */
  Vhub = 'vhub',
}

/** aggregate var_pop on columns */
export type Hub_Var_Pop_Fields = {
  __typename?: 'hub_var_pop_fields';
  cloudipoverrideserverid?: Maybe<Scalars['Float']>;
  currentversion?: Maybe<Scalars['Float']>;
  loadcontroldevicedata1serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata1setload?: Maybe<Scalars['Float']>;
  loadcontroldevicedata2serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata2setload?: Maybe<Scalars['Float']>;
  loadcontroldevicedata3serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata3setload?: Maybe<Scalars['Float']>;
  loadcontroldevicedata4serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata4setload?: Maybe<Scalars['Float']>;
  loadcontroldevicedata5serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata5setload?: Maybe<Scalars['Float']>;
  loadcontrolgeneration?: Maybe<Scalars['Float']>;
  loadcontrolgridcurrentshundredthsphase1?: Maybe<Scalars['Float']>;
  loadcontrolgridcurrentshundredthsphase2?: Maybe<Scalars['Float']>;
  loadcontrolgridcurrentshundredthsphase3?: Maybe<Scalars['Float']>;
  loadcontrolgridimportexport?: Maybe<Scalars['Float']>;
  masterdeviceinstance?: Maybe<Scalars['Float']>;
  masterdevicerawaddress?: Maybe<Scalars['Float']>;
  networkid?: Maybe<Scalars['Float']>;
  nodevices?: Maybe<Scalars['Float']>;
  port?: Maybe<Scalars['Float']>;
  radiochannel?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  serverlastheard?: Maybe<Scalars['Float']>;
  uptime?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Hub_Var_Samp_Fields = {
  __typename?: 'hub_var_samp_fields';
  cloudipoverrideserverid?: Maybe<Scalars['Float']>;
  currentversion?: Maybe<Scalars['Float']>;
  loadcontroldevicedata1serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata1setload?: Maybe<Scalars['Float']>;
  loadcontroldevicedata2serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata2setload?: Maybe<Scalars['Float']>;
  loadcontroldevicedata3serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata3setload?: Maybe<Scalars['Float']>;
  loadcontroldevicedata4serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata4setload?: Maybe<Scalars['Float']>;
  loadcontroldevicedata5serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata5setload?: Maybe<Scalars['Float']>;
  loadcontrolgeneration?: Maybe<Scalars['Float']>;
  loadcontrolgridcurrentshundredthsphase1?: Maybe<Scalars['Float']>;
  loadcontrolgridcurrentshundredthsphase2?: Maybe<Scalars['Float']>;
  loadcontrolgridcurrentshundredthsphase3?: Maybe<Scalars['Float']>;
  loadcontrolgridimportexport?: Maybe<Scalars['Float']>;
  masterdeviceinstance?: Maybe<Scalars['Float']>;
  masterdevicerawaddress?: Maybe<Scalars['Float']>;
  networkid?: Maybe<Scalars['Float']>;
  nodevices?: Maybe<Scalars['Float']>;
  port?: Maybe<Scalars['Float']>;
  radiochannel?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  serverlastheard?: Maybe<Scalars['Float']>;
  uptime?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Hub_Variance_Fields = {
  __typename?: 'hub_variance_fields';
  cloudipoverrideserverid?: Maybe<Scalars['Float']>;
  currentversion?: Maybe<Scalars['Float']>;
  loadcontroldevicedata1serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata1setload?: Maybe<Scalars['Float']>;
  loadcontroldevicedata2serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata2setload?: Maybe<Scalars['Float']>;
  loadcontroldevicedata3serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata3setload?: Maybe<Scalars['Float']>;
  loadcontroldevicedata4serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata4setload?: Maybe<Scalars['Float']>;
  loadcontroldevicedata5serialno?: Maybe<Scalars['Float']>;
  loadcontroldevicedata5setload?: Maybe<Scalars['Float']>;
  loadcontrolgeneration?: Maybe<Scalars['Float']>;
  loadcontrolgridcurrentshundredthsphase1?: Maybe<Scalars['Float']>;
  loadcontrolgridcurrentshundredthsphase2?: Maybe<Scalars['Float']>;
  loadcontrolgridcurrentshundredthsphase3?: Maybe<Scalars['Float']>;
  loadcontrolgridimportexport?: Maybe<Scalars['Float']>;
  masterdeviceinstance?: Maybe<Scalars['Float']>;
  masterdevicerawaddress?: Maybe<Scalars['Float']>;
  networkid?: Maybe<Scalars['Float']>;
  nodevices?: Maybe<Scalars['Float']>;
  port?: Maybe<Scalars['Float']>;
  radiochannel?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  serverlastheard?: Maybe<Scalars['Float']>;
  uptime?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** Boolean expression to compare columns of type "macaddr". All fields are combined with logical 'AND'. */
export type Macaddr_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['macaddr']>;
  _gt?: InputMaybe<Scalars['macaddr']>;
  _gte?: InputMaybe<Scalars['macaddr']>;
  _in?: InputMaybe<Array<Scalars['macaddr']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['macaddr']>;
  _lte?: InputMaybe<Scalars['macaddr']>;
  _neq?: InputMaybe<Scalars['macaddr']>;
  _nin?: InputMaybe<Array<Scalars['macaddr']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "admin_group" */
  delete_admin_group?: Maybe<Admin_Group_Mutation_Response>;
  /** delete single row from the table: "admin_group" */
  delete_admin_group_by_pk?: Maybe<Admin_Group>;
  /** delete data from the table: "admin_group_device" */
  delete_admin_group_device?: Maybe<Admin_Group_Device_Mutation_Response>;
  /** delete single row from the table: "admin_group_device" */
  delete_admin_group_device_by_pk?: Maybe<Admin_Group_Device>;
  /** delete data from the table: "aggregation_data" */
  delete_aggregation_data?: Maybe<Aggregation_Data_Mutation_Response>;
  /** delete single row from the table: "aggregation_data" */
  delete_aggregation_data_by_pk?: Maybe<Aggregation_Data>;
  /** delete data from the table: "command" */
  delete_command?: Maybe<Command_Mutation_Response>;
  /** delete single row from the table: "command" */
  delete_command_by_pk?: Maybe<Command>;
  /** delete data from the table: "control_group" */
  delete_control_group?: Maybe<Control_Group_Mutation_Response>;
  /** delete single row from the table: "control_group" */
  delete_control_group_by_pk?: Maybe<Control_Group>;
  /** delete data from the table: "control_group_device" */
  delete_control_group_device?: Maybe<Control_Group_Device_Mutation_Response>;
  /** delete single row from the table: "control_group_device" */
  delete_control_group_device_by_pk?: Maybe<Control_Group_Device>;
  /** delete data from the table: "device_type" */
  delete_device_type?: Maybe<Device_Type_Mutation_Response>;
  /** delete single row from the table: "device_type" */
  delete_device_type_by_pk?: Maybe<Device_Type>;
  /** delete data from the table: "eddi" */
  delete_eddi?: Maybe<Eddi_Mutation_Response>;
  /** delete single row from the table: "eddi" */
  delete_eddi_by_pk?: Maybe<Eddi>;
  /** delete data from the table: "eddi_minute" */
  delete_eddi_minute?: Maybe<Eddi_Minute_Mutation_Response>;
  /** delete single row from the table: "eddi_minute" */
  delete_eddi_minute_by_pk?: Maybe<Eddi_Minute>;
  /** delete data from the table: "event" */
  delete_event?: Maybe<Event_Mutation_Response>;
  /** delete single row from the table: "event" */
  delete_event_by_pk?: Maybe<Event>;
  /** delete data from the table: "harvi" */
  delete_harvi?: Maybe<Harvi_Mutation_Response>;
  /** delete single row from the table: "harvi" */
  delete_harvi_by_pk?: Maybe<Harvi>;
  /** delete data from the table: "hub" */
  delete_hub?: Maybe<Hub_Mutation_Response>;
  /** delete single row from the table: "hub" */
  delete_hub_by_pk?: Maybe<Hub>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete data from the table: "user_access" */
  delete_user_access?: Maybe<User_Access_Mutation_Response>;
  /** delete single row from the table: "user_access" */
  delete_user_access_by_pk?: Maybe<User_Access>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "zappi" */
  delete_zappi?: Maybe<Zappi_Mutation_Response>;
  /** delete single row from the table: "zappi" */
  delete_zappi_by_pk?: Maybe<Zappi>;
  /** delete data from the table: "zappi_minute" */
  delete_zappi_minute?: Maybe<Zappi_Minute_Mutation_Response>;
  /** delete single row from the table: "zappi_minute" */
  delete_zappi_minute_by_pk?: Maybe<Zappi_Minute>;
  /** insert data into the table: "admin_group" */
  insert_admin_group?: Maybe<Admin_Group_Mutation_Response>;
  /** insert data into the table: "admin_group_device" */
  insert_admin_group_device?: Maybe<Admin_Group_Device_Mutation_Response>;
  /** insert a single row into the table: "admin_group_device" */
  insert_admin_group_device_one?: Maybe<Admin_Group_Device>;
  /** insert a single row into the table: "admin_group" */
  insert_admin_group_one?: Maybe<Admin_Group>;
  /** insert data into the table: "aggregation_data" */
  insert_aggregation_data?: Maybe<Aggregation_Data_Mutation_Response>;
  /** insert a single row into the table: "aggregation_data" */
  insert_aggregation_data_one?: Maybe<Aggregation_Data>;
  /** insert data into the table: "command" */
  insert_command?: Maybe<Command_Mutation_Response>;
  /** insert a single row into the table: "command" */
  insert_command_one?: Maybe<Command>;
  /** insert data into the table: "control_group" */
  insert_control_group?: Maybe<Control_Group_Mutation_Response>;
  /** insert data into the table: "control_group_device" */
  insert_control_group_device?: Maybe<Control_Group_Device_Mutation_Response>;
  /** insert a single row into the table: "control_group_device" */
  insert_control_group_device_one?: Maybe<Control_Group_Device>;
  /** insert a single row into the table: "control_group" */
  insert_control_group_one?: Maybe<Control_Group>;
  /** insert data into the table: "device_type" */
  insert_device_type?: Maybe<Device_Type_Mutation_Response>;
  /** insert a single row into the table: "device_type" */
  insert_device_type_one?: Maybe<Device_Type>;
  /** insert data into the table: "eddi" */
  insert_eddi?: Maybe<Eddi_Mutation_Response>;
  /** insert data into the table: "eddi_minute" */
  insert_eddi_minute?: Maybe<Eddi_Minute_Mutation_Response>;
  /** insert a single row into the table: "eddi_minute" */
  insert_eddi_minute_one?: Maybe<Eddi_Minute>;
  /** insert a single row into the table: "eddi" */
  insert_eddi_one?: Maybe<Eddi>;
  /** insert data into the table: "event" */
  insert_event?: Maybe<Event_Mutation_Response>;
  /** insert a single row into the table: "event" */
  insert_event_one?: Maybe<Event>;
  /** insert data into the table: "harvi" */
  insert_harvi?: Maybe<Harvi_Mutation_Response>;
  /** insert a single row into the table: "harvi" */
  insert_harvi_one?: Maybe<Harvi>;
  /** insert data into the table: "hub" */
  insert_hub?: Maybe<Hub_Mutation_Response>;
  /** insert a single row into the table: "hub" */
  insert_hub_one?: Maybe<Hub>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert data into the table: "user_access" */
  insert_user_access?: Maybe<User_Access_Mutation_Response>;
  /** insert a single row into the table: "user_access" */
  insert_user_access_one?: Maybe<User_Access>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "zappi" */
  insert_zappi?: Maybe<Zappi_Mutation_Response>;
  /** insert data into the table: "zappi_minute" */
  insert_zappi_minute?: Maybe<Zappi_Minute_Mutation_Response>;
  /** insert a single row into the table: "zappi_minute" */
  insert_zappi_minute_one?: Maybe<Zappi_Minute>;
  /** insert a single row into the table: "zappi" */
  insert_zappi_one?: Maybe<Zappi>;
  /** update data of the table: "admin_group" */
  update_admin_group?: Maybe<Admin_Group_Mutation_Response>;
  /** update single row of the table: "admin_group" */
  update_admin_group_by_pk?: Maybe<Admin_Group>;
  /** update data of the table: "admin_group_device" */
  update_admin_group_device?: Maybe<Admin_Group_Device_Mutation_Response>;
  /** update single row of the table: "admin_group_device" */
  update_admin_group_device_by_pk?: Maybe<Admin_Group_Device>;
  /** update data of the table: "aggregation_data" */
  update_aggregation_data?: Maybe<Aggregation_Data_Mutation_Response>;
  /** update single row of the table: "aggregation_data" */
  update_aggregation_data_by_pk?: Maybe<Aggregation_Data>;
  /** update data of the table: "command" */
  update_command?: Maybe<Command_Mutation_Response>;
  /** update single row of the table: "command" */
  update_command_by_pk?: Maybe<Command>;
  /** update data of the table: "control_group" */
  update_control_group?: Maybe<Control_Group_Mutation_Response>;
  /** update single row of the table: "control_group" */
  update_control_group_by_pk?: Maybe<Control_Group>;
  /** update data of the table: "control_group_device" */
  update_control_group_device?: Maybe<Control_Group_Device_Mutation_Response>;
  /** update single row of the table: "control_group_device" */
  update_control_group_device_by_pk?: Maybe<Control_Group_Device>;
  /** update data of the table: "device_type" */
  update_device_type?: Maybe<Device_Type_Mutation_Response>;
  /** update single row of the table: "device_type" */
  update_device_type_by_pk?: Maybe<Device_Type>;
  /** update data of the table: "eddi" */
  update_eddi?: Maybe<Eddi_Mutation_Response>;
  /** update single row of the table: "eddi" */
  update_eddi_by_pk?: Maybe<Eddi>;
  /** update data of the table: "eddi_minute" */
  update_eddi_minute?: Maybe<Eddi_Minute_Mutation_Response>;
  /** update single row of the table: "eddi_minute" */
  update_eddi_minute_by_pk?: Maybe<Eddi_Minute>;
  /** update data of the table: "event" */
  update_event?: Maybe<Event_Mutation_Response>;
  /** update single row of the table: "event" */
  update_event_by_pk?: Maybe<Event>;
  /** update data of the table: "harvi" */
  update_harvi?: Maybe<Harvi_Mutation_Response>;
  /** update single row of the table: "harvi" */
  update_harvi_by_pk?: Maybe<Harvi>;
  /** update data of the table: "hub" */
  update_hub?: Maybe<Hub_Mutation_Response>;
  /** update single row of the table: "hub" */
  update_hub_by_pk?: Maybe<Hub>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update data of the table: "user_access" */
  update_user_access?: Maybe<User_Access_Mutation_Response>;
  /** update single row of the table: "user_access" */
  update_user_access_by_pk?: Maybe<User_Access>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update data of the table: "zappi" */
  update_zappi?: Maybe<Zappi_Mutation_Response>;
  /** update single row of the table: "zappi" */
  update_zappi_by_pk?: Maybe<Zappi>;
  /** update data of the table: "zappi_minute" */
  update_zappi_minute?: Maybe<Zappi_Minute_Mutation_Response>;
  /** update single row of the table: "zappi_minute" */
  update_zappi_minute_by_pk?: Maybe<Zappi_Minute>;
};

/** mutation root */
export type Mutation_RootDelete_Admin_GroupArgs = {
  where: Admin_Group_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Admin_Group_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Admin_Group_DeviceArgs = {
  where: Admin_Group_Device_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Admin_Group_Device_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Aggregation_DataArgs = {
  where: Aggregation_Data_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Aggregation_Data_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_CommandArgs = {
  where: Command_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Command_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Control_GroupArgs = {
  where: Control_Group_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Control_Group_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Control_Group_DeviceArgs = {
  where: Control_Group_Device_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Control_Group_Device_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Device_TypeArgs = {
  where: Device_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Device_Type_By_PkArgs = {
  value: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_EddiArgs = {
  where: Eddi_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Eddi_By_PkArgs = {
  serialno: Scalars['bigint'];
};

/** mutation root */
export type Mutation_RootDelete_Eddi_MinuteArgs = {
  where: Eddi_Minute_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Eddi_Minute_By_PkArgs = {
  serialno: Scalars['bigint'];
  timestamp: Scalars['timestamp'];
};

/** mutation root */
export type Mutation_RootDelete_EventArgs = {
  where: Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Event_By_PkArgs = {
  eventtime: Scalars['timestamp'];
  numberofeventsinthissecond: Scalars['smallint'];
  serialno: Scalars['bigint'];
};

/** mutation root */
export type Mutation_RootDelete_HarviArgs = {
  where: Harvi_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Harvi_By_PkArgs = {
  serialno: Scalars['bigint'];
};

/** mutation root */
export type Mutation_RootDelete_HubArgs = {
  where: Hub_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Hub_By_PkArgs = {
  serialno: Scalars['bigint'];
};

/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_AccessArgs = {
  where: User_Access_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_Access_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_ZappiArgs = {
  where: Zappi_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Zappi_By_PkArgs = {
  serialno: Scalars['bigint'];
};

/** mutation root */
export type Mutation_RootDelete_Zappi_MinuteArgs = {
  where: Zappi_Minute_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Zappi_Minute_By_PkArgs = {
  serialno: Scalars['bigint'];
  timestamp: Scalars['timestamp'];
};

/** mutation root */
export type Mutation_RootInsert_Admin_GroupArgs = {
  objects: Array<Admin_Group_Insert_Input>;
  on_conflict?: InputMaybe<Admin_Group_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Admin_Group_DeviceArgs = {
  objects: Array<Admin_Group_Device_Insert_Input>;
  on_conflict?: InputMaybe<Admin_Group_Device_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Admin_Group_Device_OneArgs = {
  object: Admin_Group_Device_Insert_Input;
  on_conflict?: InputMaybe<Admin_Group_Device_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Admin_Group_OneArgs = {
  object: Admin_Group_Insert_Input;
  on_conflict?: InputMaybe<Admin_Group_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Aggregation_DataArgs = {
  objects: Array<Aggregation_Data_Insert_Input>;
  on_conflict?: InputMaybe<Aggregation_Data_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Aggregation_Data_OneArgs = {
  object: Aggregation_Data_Insert_Input;
  on_conflict?: InputMaybe<Aggregation_Data_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_CommandArgs = {
  objects: Array<Command_Insert_Input>;
  on_conflict?: InputMaybe<Command_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Command_OneArgs = {
  object: Command_Insert_Input;
  on_conflict?: InputMaybe<Command_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Control_GroupArgs = {
  objects: Array<Control_Group_Insert_Input>;
  on_conflict?: InputMaybe<Control_Group_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Control_Group_DeviceArgs = {
  objects: Array<Control_Group_Device_Insert_Input>;
  on_conflict?: InputMaybe<Control_Group_Device_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Control_Group_Device_OneArgs = {
  object: Control_Group_Device_Insert_Input;
  on_conflict?: InputMaybe<Control_Group_Device_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Control_Group_OneArgs = {
  object: Control_Group_Insert_Input;
  on_conflict?: InputMaybe<Control_Group_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Device_TypeArgs = {
  objects: Array<Device_Type_Insert_Input>;
  on_conflict?: InputMaybe<Device_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Device_Type_OneArgs = {
  object: Device_Type_Insert_Input;
  on_conflict?: InputMaybe<Device_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_EddiArgs = {
  objects: Array<Eddi_Insert_Input>;
  on_conflict?: InputMaybe<Eddi_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Eddi_MinuteArgs = {
  objects: Array<Eddi_Minute_Insert_Input>;
  on_conflict?: InputMaybe<Eddi_Minute_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Eddi_Minute_OneArgs = {
  object: Eddi_Minute_Insert_Input;
  on_conflict?: InputMaybe<Eddi_Minute_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Eddi_OneArgs = {
  object: Eddi_Insert_Input;
  on_conflict?: InputMaybe<Eddi_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_EventArgs = {
  objects: Array<Event_Insert_Input>;
  on_conflict?: InputMaybe<Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Event_OneArgs = {
  object: Event_Insert_Input;
  on_conflict?: InputMaybe<Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_HarviArgs = {
  objects: Array<Harvi_Insert_Input>;
  on_conflict?: InputMaybe<Harvi_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Harvi_OneArgs = {
  object: Harvi_Insert_Input;
  on_conflict?: InputMaybe<Harvi_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_HubArgs = {
  objects: Array<Hub_Insert_Input>;
  on_conflict?: InputMaybe<Hub_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Hub_OneArgs = {
  object: Hub_Insert_Input;
  on_conflict?: InputMaybe<Hub_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_AccessArgs = {
  objects: Array<User_Access_Insert_Input>;
  on_conflict?: InputMaybe<User_Access_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_Access_OneArgs = {
  object: User_Access_Insert_Input;
  on_conflict?: InputMaybe<User_Access_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ZappiArgs = {
  objects: Array<Zappi_Insert_Input>;
  on_conflict?: InputMaybe<Zappi_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Zappi_MinuteArgs = {
  objects: Array<Zappi_Minute_Insert_Input>;
  on_conflict?: InputMaybe<Zappi_Minute_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Zappi_Minute_OneArgs = {
  object: Zappi_Minute_Insert_Input;
  on_conflict?: InputMaybe<Zappi_Minute_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Zappi_OneArgs = {
  object: Zappi_Insert_Input;
  on_conflict?: InputMaybe<Zappi_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_Admin_GroupArgs = {
  _inc?: InputMaybe<Admin_Group_Inc_Input>;
  _set?: InputMaybe<Admin_Group_Set_Input>;
  where: Admin_Group_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Admin_Group_By_PkArgs = {
  _inc?: InputMaybe<Admin_Group_Inc_Input>;
  _set?: InputMaybe<Admin_Group_Set_Input>;
  pk_columns: Admin_Group_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Admin_Group_DeviceArgs = {
  _inc?: InputMaybe<Admin_Group_Device_Inc_Input>;
  _set?: InputMaybe<Admin_Group_Device_Set_Input>;
  where: Admin_Group_Device_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Admin_Group_Device_By_PkArgs = {
  _inc?: InputMaybe<Admin_Group_Device_Inc_Input>;
  _set?: InputMaybe<Admin_Group_Device_Set_Input>;
  pk_columns: Admin_Group_Device_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Aggregation_DataArgs = {
  _inc?: InputMaybe<Aggregation_Data_Inc_Input>;
  _set?: InputMaybe<Aggregation_Data_Set_Input>;
  where: Aggregation_Data_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Aggregation_Data_By_PkArgs = {
  _inc?: InputMaybe<Aggregation_Data_Inc_Input>;
  _set?: InputMaybe<Aggregation_Data_Set_Input>;
  pk_columns: Aggregation_Data_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_CommandArgs = {
  _append?: InputMaybe<Command_Append_Input>;
  _delete_at_path?: InputMaybe<Command_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Command_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Command_Delete_Key_Input>;
  _inc?: InputMaybe<Command_Inc_Input>;
  _prepend?: InputMaybe<Command_Prepend_Input>;
  _set?: InputMaybe<Command_Set_Input>;
  where: Command_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Command_By_PkArgs = {
  _append?: InputMaybe<Command_Append_Input>;
  _delete_at_path?: InputMaybe<Command_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Command_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Command_Delete_Key_Input>;
  _inc?: InputMaybe<Command_Inc_Input>;
  _prepend?: InputMaybe<Command_Prepend_Input>;
  _set?: InputMaybe<Command_Set_Input>;
  pk_columns: Command_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Control_GroupArgs = {
  _inc?: InputMaybe<Control_Group_Inc_Input>;
  _set?: InputMaybe<Control_Group_Set_Input>;
  where: Control_Group_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Control_Group_By_PkArgs = {
  _inc?: InputMaybe<Control_Group_Inc_Input>;
  _set?: InputMaybe<Control_Group_Set_Input>;
  pk_columns: Control_Group_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Control_Group_DeviceArgs = {
  _inc?: InputMaybe<Control_Group_Device_Inc_Input>;
  _set?: InputMaybe<Control_Group_Device_Set_Input>;
  where: Control_Group_Device_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Control_Group_Device_By_PkArgs = {
  _inc?: InputMaybe<Control_Group_Device_Inc_Input>;
  _set?: InputMaybe<Control_Group_Device_Set_Input>;
  pk_columns: Control_Group_Device_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Device_TypeArgs = {
  _set?: InputMaybe<Device_Type_Set_Input>;
  where: Device_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Device_Type_By_PkArgs = {
  _set?: InputMaybe<Device_Type_Set_Input>;
  pk_columns: Device_Type_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_EddiArgs = {
  _append?: InputMaybe<Eddi_Append_Input>;
  _delete_at_path?: InputMaybe<Eddi_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Eddi_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Eddi_Delete_Key_Input>;
  _inc?: InputMaybe<Eddi_Inc_Input>;
  _prepend?: InputMaybe<Eddi_Prepend_Input>;
  _set?: InputMaybe<Eddi_Set_Input>;
  where: Eddi_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Eddi_By_PkArgs = {
  _append?: InputMaybe<Eddi_Append_Input>;
  _delete_at_path?: InputMaybe<Eddi_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Eddi_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Eddi_Delete_Key_Input>;
  _inc?: InputMaybe<Eddi_Inc_Input>;
  _prepend?: InputMaybe<Eddi_Prepend_Input>;
  _set?: InputMaybe<Eddi_Set_Input>;
  pk_columns: Eddi_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Eddi_MinuteArgs = {
  _inc?: InputMaybe<Eddi_Minute_Inc_Input>;
  _set?: InputMaybe<Eddi_Minute_Set_Input>;
  where: Eddi_Minute_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Eddi_Minute_By_PkArgs = {
  _inc?: InputMaybe<Eddi_Minute_Inc_Input>;
  _set?: InputMaybe<Eddi_Minute_Set_Input>;
  pk_columns: Eddi_Minute_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_EventArgs = {
  _inc?: InputMaybe<Event_Inc_Input>;
  _set?: InputMaybe<Event_Set_Input>;
  where: Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Event_By_PkArgs = {
  _inc?: InputMaybe<Event_Inc_Input>;
  _set?: InputMaybe<Event_Set_Input>;
  pk_columns: Event_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_HarviArgs = {
  _append?: InputMaybe<Harvi_Append_Input>;
  _delete_at_path?: InputMaybe<Harvi_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Harvi_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Harvi_Delete_Key_Input>;
  _inc?: InputMaybe<Harvi_Inc_Input>;
  _prepend?: InputMaybe<Harvi_Prepend_Input>;
  _set?: InputMaybe<Harvi_Set_Input>;
  where: Harvi_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Harvi_By_PkArgs = {
  _append?: InputMaybe<Harvi_Append_Input>;
  _delete_at_path?: InputMaybe<Harvi_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Harvi_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Harvi_Delete_Key_Input>;
  _inc?: InputMaybe<Harvi_Inc_Input>;
  _prepend?: InputMaybe<Harvi_Prepend_Input>;
  _set?: InputMaybe<Harvi_Set_Input>;
  pk_columns: Harvi_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_HubArgs = {
  _append?: InputMaybe<Hub_Append_Input>;
  _delete_at_path?: InputMaybe<Hub_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Hub_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Hub_Delete_Key_Input>;
  _inc?: InputMaybe<Hub_Inc_Input>;
  _prepend?: InputMaybe<Hub_Prepend_Input>;
  _set?: InputMaybe<Hub_Set_Input>;
  where: Hub_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Hub_By_PkArgs = {
  _append?: InputMaybe<Hub_Append_Input>;
  _delete_at_path?: InputMaybe<Hub_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Hub_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Hub_Delete_Key_Input>;
  _inc?: InputMaybe<Hub_Inc_Input>;
  _prepend?: InputMaybe<Hub_Prepend_Input>;
  _set?: InputMaybe<Hub_Set_Input>;
  pk_columns: Hub_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_AccessArgs = {
  _append?: InputMaybe<User_Access_Append_Input>;
  _delete_at_path?: InputMaybe<User_Access_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Access_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Access_Delete_Key_Input>;
  _inc?: InputMaybe<User_Access_Inc_Input>;
  _prepend?: InputMaybe<User_Access_Prepend_Input>;
  _set?: InputMaybe<User_Access_Set_Input>;
  where: User_Access_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_Access_By_PkArgs = {
  _append?: InputMaybe<User_Access_Append_Input>;
  _delete_at_path?: InputMaybe<User_Access_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Access_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Access_Delete_Key_Input>;
  _inc?: InputMaybe<User_Access_Inc_Input>;
  _prepend?: InputMaybe<User_Access_Prepend_Input>;
  _set?: InputMaybe<User_Access_Set_Input>;
  pk_columns: User_Access_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_ZappiArgs = {
  _append?: InputMaybe<Zappi_Append_Input>;
  _delete_at_path?: InputMaybe<Zappi_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Zappi_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Zappi_Delete_Key_Input>;
  _inc?: InputMaybe<Zappi_Inc_Input>;
  _prepend?: InputMaybe<Zappi_Prepend_Input>;
  _set?: InputMaybe<Zappi_Set_Input>;
  where: Zappi_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Zappi_By_PkArgs = {
  _append?: InputMaybe<Zappi_Append_Input>;
  _delete_at_path?: InputMaybe<Zappi_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Zappi_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Zappi_Delete_Key_Input>;
  _inc?: InputMaybe<Zappi_Inc_Input>;
  _prepend?: InputMaybe<Zappi_Prepend_Input>;
  _set?: InputMaybe<Zappi_Set_Input>;
  pk_columns: Zappi_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Zappi_MinuteArgs = {
  _inc?: InputMaybe<Zappi_Minute_Inc_Input>;
  _set?: InputMaybe<Zappi_Minute_Set_Input>;
  where: Zappi_Minute_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Zappi_Minute_By_PkArgs = {
  _inc?: InputMaybe<Zappi_Minute_Inc_Input>;
  _set?: InputMaybe<Zappi_Minute_Set_Input>;
  pk_columns: Zappi_Minute_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "admin_group" */
  admin_group: Array<Admin_Group>;
  /** fetch aggregated fields from the table: "admin_group" */
  admin_group_aggregate: Admin_Group_Aggregate;
  /** fetch data from the table: "admin_group" using primary key columns */
  admin_group_by_pk?: Maybe<Admin_Group>;
  /** fetch data from the table: "admin_group_device" */
  admin_group_device: Array<Admin_Group_Device>;
  /** fetch aggregated fields from the table: "admin_group_device" */
  admin_group_device_aggregate: Admin_Group_Device_Aggregate;
  /** fetch data from the table: "admin_group_device" using primary key columns */
  admin_group_device_by_pk?: Maybe<Admin_Group_Device>;
  /** fetch data from the table: "aggregation_data" */
  aggregation_data: Array<Aggregation_Data>;
  /** fetch aggregated fields from the table: "aggregation_data" */
  aggregation_data_aggregate: Aggregation_Data_Aggregate;
  /** fetch data from the table: "aggregation_data" using primary key columns */
  aggregation_data_by_pk?: Maybe<Aggregation_Data>;
  /** fetch data from the table: "command" */
  command: Array<Command>;
  /** fetch aggregated fields from the table: "command" */
  command_aggregate: Command_Aggregate;
  /** fetch data from the table: "command" using primary key columns */
  command_by_pk?: Maybe<Command>;
  /** fetch data from the table: "control_group" */
  control_group: Array<Control_Group>;
  /** fetch aggregated fields from the table: "control_group" */
  control_group_aggregate: Control_Group_Aggregate;
  /** fetch data from the table: "control_group" using primary key columns */
  control_group_by_pk?: Maybe<Control_Group>;
  /** fetch data from the table: "control_group_device" */
  control_group_device: Array<Control_Group_Device>;
  /** fetch aggregated fields from the table: "control_group_device" */
  control_group_device_aggregate: Control_Group_Device_Aggregate;
  /** fetch data from the table: "control_group_device" using primary key columns */
  control_group_device_by_pk?: Maybe<Control_Group_Device>;
  /** fetch data from the table: "device_type" */
  device_type: Array<Device_Type>;
  /** fetch aggregated fields from the table: "device_type" */
  device_type_aggregate: Device_Type_Aggregate;
  /** fetch data from the table: "device_type" using primary key columns */
  device_type_by_pk?: Maybe<Device_Type>;
  /** fetch data from the table: "eddi" */
  eddi: Array<Eddi>;
  /** fetch aggregated fields from the table: "eddi" */
  eddi_aggregate: Eddi_Aggregate;
  /** fetch data from the table: "eddi" using primary key columns */
  eddi_by_pk?: Maybe<Eddi>;
  /** fetch data from the table: "eddi_minute" */
  eddi_minute: Array<Eddi_Minute>;
  /** fetch aggregated fields from the table: "eddi_minute" */
  eddi_minute_aggregate: Eddi_Minute_Aggregate;
  /** fetch data from the table: "eddi_minute" using primary key columns */
  eddi_minute_by_pk?: Maybe<Eddi_Minute>;
  /** fetch data from the table: "event" */
  event: Array<Event>;
  /** fetch aggregated fields from the table: "event" */
  event_aggregate: Event_Aggregate;
  /** fetch data from the table: "event" using primary key columns */
  event_by_pk?: Maybe<Event>;
  /** fetch data from the table: "harvi" */
  harvi: Array<Harvi>;
  /** fetch aggregated fields from the table: "harvi" */
  harvi_aggregate: Harvi_Aggregate;
  /** fetch data from the table: "harvi" using primary key columns */
  harvi_by_pk?: Maybe<Harvi>;
  /** fetch data from the table: "hub" */
  hub: Array<Hub>;
  /** fetch aggregated fields from the table: "hub" */
  hub_aggregate: Hub_Aggregate;
  /** fetch data from the table: "hub" using primary key columns */
  hub_by_pk?: Maybe<Hub>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch data from the table: "user_access" */
  user_access: Array<User_Access>;
  /** fetch aggregated fields from the table: "user_access" */
  user_access_aggregate: User_Access_Aggregate;
  /** fetch data from the table: "user_access" using primary key columns */
  user_access_by_pk?: Maybe<User_Access>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "zappi" */
  zappi: Array<Zappi>;
  /** fetch aggregated fields from the table: "zappi" */
  zappi_aggregate: Zappi_Aggregate;
  /** fetch data from the table: "zappi" using primary key columns */
  zappi_by_pk?: Maybe<Zappi>;
  /** fetch data from the table: "zappi_minute" */
  zappi_minute: Array<Zappi_Minute>;
  /** fetch aggregated fields from the table: "zappi_minute" */
  zappi_minute_aggregate: Zappi_Minute_Aggregate;
  /** fetch data from the table: "zappi_minute" using primary key columns */
  zappi_minute_by_pk?: Maybe<Zappi_Minute>;
};

export type Query_RootAdmin_GroupArgs = {
  distinct_on?: InputMaybe<Array<Admin_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Group_Order_By>>;
  where?: InputMaybe<Admin_Group_Bool_Exp>;
};

export type Query_RootAdmin_Group_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Group_Order_By>>;
  where?: InputMaybe<Admin_Group_Bool_Exp>;
};

export type Query_RootAdmin_Group_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootAdmin_Group_DeviceArgs = {
  distinct_on?: InputMaybe<Array<Admin_Group_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Group_Device_Order_By>>;
  where?: InputMaybe<Admin_Group_Device_Bool_Exp>;
};

export type Query_RootAdmin_Group_Device_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Group_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Group_Device_Order_By>>;
  where?: InputMaybe<Admin_Group_Device_Bool_Exp>;
};

export type Query_RootAdmin_Group_Device_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootAggregation_DataArgs = {
  distinct_on?: InputMaybe<Array<Aggregation_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregation_Data_Order_By>>;
  where?: InputMaybe<Aggregation_Data_Bool_Exp>;
};

export type Query_RootAggregation_Data_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Aggregation_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregation_Data_Order_By>>;
  where?: InputMaybe<Aggregation_Data_Bool_Exp>;
};

export type Query_RootAggregation_Data_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootCommandArgs = {
  distinct_on?: InputMaybe<Array<Command_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Command_Order_By>>;
  where?: InputMaybe<Command_Bool_Exp>;
};

export type Query_RootCommand_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Command_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Command_Order_By>>;
  where?: InputMaybe<Command_Bool_Exp>;
};

export type Query_RootCommand_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootControl_GroupArgs = {
  distinct_on?: InputMaybe<Array<Control_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Control_Group_Order_By>>;
  where?: InputMaybe<Control_Group_Bool_Exp>;
};

export type Query_RootControl_Group_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Control_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Control_Group_Order_By>>;
  where?: InputMaybe<Control_Group_Bool_Exp>;
};

export type Query_RootControl_Group_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootControl_Group_DeviceArgs = {
  distinct_on?: InputMaybe<Array<Control_Group_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Control_Group_Device_Order_By>>;
  where?: InputMaybe<Control_Group_Device_Bool_Exp>;
};

export type Query_RootControl_Group_Device_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Control_Group_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Control_Group_Device_Order_By>>;
  where?: InputMaybe<Control_Group_Device_Bool_Exp>;
};

export type Query_RootControl_Group_Device_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootDevice_TypeArgs = {
  distinct_on?: InputMaybe<Array<Device_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Type_Order_By>>;
  where?: InputMaybe<Device_Type_Bool_Exp>;
};

export type Query_RootDevice_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Type_Order_By>>;
  where?: InputMaybe<Device_Type_Bool_Exp>;
};

export type Query_RootDevice_Type_By_PkArgs = {
  value: Scalars['String'];
};

export type Query_RootEddiArgs = {
  distinct_on?: InputMaybe<Array<Eddi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Eddi_Order_By>>;
  where?: InputMaybe<Eddi_Bool_Exp>;
};

export type Query_RootEddi_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Eddi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Eddi_Order_By>>;
  where?: InputMaybe<Eddi_Bool_Exp>;
};

export type Query_RootEddi_By_PkArgs = {
  serialno: Scalars['bigint'];
};

export type Query_RootEddi_MinuteArgs = {
  distinct_on?: InputMaybe<Array<Eddi_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Eddi_Minute_Order_By>>;
  where?: InputMaybe<Eddi_Minute_Bool_Exp>;
};

export type Query_RootEddi_Minute_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Eddi_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Eddi_Minute_Order_By>>;
  where?: InputMaybe<Eddi_Minute_Bool_Exp>;
};

export type Query_RootEddi_Minute_By_PkArgs = {
  serialno: Scalars['bigint'];
  timestamp: Scalars['timestamp'];
};

export type Query_RootEventArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};

export type Query_RootEvent_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};

export type Query_RootEvent_By_PkArgs = {
  eventtime: Scalars['timestamp'];
  numberofeventsinthissecond: Scalars['smallint'];
  serialno: Scalars['bigint'];
};

export type Query_RootHarviArgs = {
  distinct_on?: InputMaybe<Array<Harvi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Harvi_Order_By>>;
  where?: InputMaybe<Harvi_Bool_Exp>;
};

export type Query_RootHarvi_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Harvi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Harvi_Order_By>>;
  where?: InputMaybe<Harvi_Bool_Exp>;
};

export type Query_RootHarvi_By_PkArgs = {
  serialno: Scalars['bigint'];
};

export type Query_RootHubArgs = {
  distinct_on?: InputMaybe<Array<Hub_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hub_Order_By>>;
  where?: InputMaybe<Hub_Bool_Exp>;
};

export type Query_RootHub_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hub_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hub_Order_By>>;
  where?: InputMaybe<Hub_Bool_Exp>;
};

export type Query_RootHub_By_PkArgs = {
  serialno: Scalars['bigint'];
};

export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Query_RootUser_AccessArgs = {
  distinct_on?: InputMaybe<Array<User_Access_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Access_Order_By>>;
  where?: InputMaybe<User_Access_Bool_Exp>;
};

export type Query_RootUser_Access_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Access_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Access_Order_By>>;
  where?: InputMaybe<User_Access_Bool_Exp>;
};

export type Query_RootUser_Access_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootZappiArgs = {
  distinct_on?: InputMaybe<Array<Zappi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zappi_Order_By>>;
  where?: InputMaybe<Zappi_Bool_Exp>;
};

export type Query_RootZappi_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Zappi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zappi_Order_By>>;
  where?: InputMaybe<Zappi_Bool_Exp>;
};

export type Query_RootZappi_By_PkArgs = {
  serialno: Scalars['bigint'];
};

export type Query_RootZappi_MinuteArgs = {
  distinct_on?: InputMaybe<Array<Zappi_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zappi_Minute_Order_By>>;
  where?: InputMaybe<Zappi_Minute_Bool_Exp>;
};

export type Query_RootZappi_Minute_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Zappi_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zappi_Minute_Order_By>>;
  where?: InputMaybe<Zappi_Minute_Bool_Exp>;
};

export type Query_RootZappi_Minute_By_PkArgs = {
  serialno: Scalars['bigint'];
  timestamp: Scalars['timestamp'];
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']>;
  _gt?: InputMaybe<Scalars['smallint']>;
  _gte?: InputMaybe<Scalars['smallint']>;
  _in?: InputMaybe<Array<Scalars['smallint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['smallint']>;
  _lte?: InputMaybe<Scalars['smallint']>;
  _neq?: InputMaybe<Scalars['smallint']>;
  _nin?: InputMaybe<Array<Scalars['smallint']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "admin_group" */
  admin_group: Array<Admin_Group>;
  /** fetch aggregated fields from the table: "admin_group" */
  admin_group_aggregate: Admin_Group_Aggregate;
  /** fetch data from the table: "admin_group" using primary key columns */
  admin_group_by_pk?: Maybe<Admin_Group>;
  /** fetch data from the table: "admin_group_device" */
  admin_group_device: Array<Admin_Group_Device>;
  /** fetch aggregated fields from the table: "admin_group_device" */
  admin_group_device_aggregate: Admin_Group_Device_Aggregate;
  /** fetch data from the table: "admin_group_device" using primary key columns */
  admin_group_device_by_pk?: Maybe<Admin_Group_Device>;
  /** fetch data from the table: "aggregation_data" */
  aggregation_data: Array<Aggregation_Data>;
  /** fetch aggregated fields from the table: "aggregation_data" */
  aggregation_data_aggregate: Aggregation_Data_Aggregate;
  /** fetch data from the table: "aggregation_data" using primary key columns */
  aggregation_data_by_pk?: Maybe<Aggregation_Data>;
  /** fetch data from the table: "command" */
  command: Array<Command>;
  /** fetch aggregated fields from the table: "command" */
  command_aggregate: Command_Aggregate;
  /** fetch data from the table: "command" using primary key columns */
  command_by_pk?: Maybe<Command>;
  /** fetch data from the table: "control_group" */
  control_group: Array<Control_Group>;
  /** fetch aggregated fields from the table: "control_group" */
  control_group_aggregate: Control_Group_Aggregate;
  /** fetch data from the table: "control_group" using primary key columns */
  control_group_by_pk?: Maybe<Control_Group>;
  /** fetch data from the table: "control_group_device" */
  control_group_device: Array<Control_Group_Device>;
  /** fetch aggregated fields from the table: "control_group_device" */
  control_group_device_aggregate: Control_Group_Device_Aggregate;
  /** fetch data from the table: "control_group_device" using primary key columns */
  control_group_device_by_pk?: Maybe<Control_Group_Device>;
  /** fetch data from the table: "device_type" */
  device_type: Array<Device_Type>;
  /** fetch aggregated fields from the table: "device_type" */
  device_type_aggregate: Device_Type_Aggregate;
  /** fetch data from the table: "device_type" using primary key columns */
  device_type_by_pk?: Maybe<Device_Type>;
  /** fetch data from the table: "eddi" */
  eddi: Array<Eddi>;
  /** fetch aggregated fields from the table: "eddi" */
  eddi_aggregate: Eddi_Aggregate;
  /** fetch data from the table: "eddi" using primary key columns */
  eddi_by_pk?: Maybe<Eddi>;
  /** fetch data from the table: "eddi_minute" */
  eddi_minute: Array<Eddi_Minute>;
  /** fetch aggregated fields from the table: "eddi_minute" */
  eddi_minute_aggregate: Eddi_Minute_Aggregate;
  /** fetch data from the table: "eddi_minute" using primary key columns */
  eddi_minute_by_pk?: Maybe<Eddi_Minute>;
  /** fetch data from the table: "event" */
  event: Array<Event>;
  /** fetch aggregated fields from the table: "event" */
  event_aggregate: Event_Aggregate;
  /** fetch data from the table: "event" using primary key columns */
  event_by_pk?: Maybe<Event>;
  /** fetch data from the table: "harvi" */
  harvi: Array<Harvi>;
  /** fetch aggregated fields from the table: "harvi" */
  harvi_aggregate: Harvi_Aggregate;
  /** fetch data from the table: "harvi" using primary key columns */
  harvi_by_pk?: Maybe<Harvi>;
  /** fetch data from the table: "hub" */
  hub: Array<Hub>;
  /** fetch aggregated fields from the table: "hub" */
  hub_aggregate: Hub_Aggregate;
  /** fetch data from the table: "hub" using primary key columns */
  hub_by_pk?: Maybe<Hub>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch data from the table: "user_access" */
  user_access: Array<User_Access>;
  /** fetch aggregated fields from the table: "user_access" */
  user_access_aggregate: User_Access_Aggregate;
  /** fetch data from the table: "user_access" using primary key columns */
  user_access_by_pk?: Maybe<User_Access>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "zappi" */
  zappi: Array<Zappi>;
  /** fetch aggregated fields from the table: "zappi" */
  zappi_aggregate: Zappi_Aggregate;
  /** fetch data from the table: "zappi" using primary key columns */
  zappi_by_pk?: Maybe<Zappi>;
  /** fetch data from the table: "zappi_minute" */
  zappi_minute: Array<Zappi_Minute>;
  /** fetch aggregated fields from the table: "zappi_minute" */
  zappi_minute_aggregate: Zappi_Minute_Aggregate;
  /** fetch data from the table: "zappi_minute" using primary key columns */
  zappi_minute_by_pk?: Maybe<Zappi_Minute>;
};

export type Subscription_RootAdmin_GroupArgs = {
  distinct_on?: InputMaybe<Array<Admin_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Group_Order_By>>;
  where?: InputMaybe<Admin_Group_Bool_Exp>;
};

export type Subscription_RootAdmin_Group_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Group_Order_By>>;
  where?: InputMaybe<Admin_Group_Bool_Exp>;
};

export type Subscription_RootAdmin_Group_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootAdmin_Group_DeviceArgs = {
  distinct_on?: InputMaybe<Array<Admin_Group_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Group_Device_Order_By>>;
  where?: InputMaybe<Admin_Group_Device_Bool_Exp>;
};

export type Subscription_RootAdmin_Group_Device_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Group_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Group_Device_Order_By>>;
  where?: InputMaybe<Admin_Group_Device_Bool_Exp>;
};

export type Subscription_RootAdmin_Group_Device_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootAggregation_DataArgs = {
  distinct_on?: InputMaybe<Array<Aggregation_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregation_Data_Order_By>>;
  where?: InputMaybe<Aggregation_Data_Bool_Exp>;
};

export type Subscription_RootAggregation_Data_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Aggregation_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregation_Data_Order_By>>;
  where?: InputMaybe<Aggregation_Data_Bool_Exp>;
};

export type Subscription_RootAggregation_Data_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootCommandArgs = {
  distinct_on?: InputMaybe<Array<Command_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Command_Order_By>>;
  where?: InputMaybe<Command_Bool_Exp>;
};

export type Subscription_RootCommand_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Command_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Command_Order_By>>;
  where?: InputMaybe<Command_Bool_Exp>;
};

export type Subscription_RootCommand_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootControl_GroupArgs = {
  distinct_on?: InputMaybe<Array<Control_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Control_Group_Order_By>>;
  where?: InputMaybe<Control_Group_Bool_Exp>;
};

export type Subscription_RootControl_Group_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Control_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Control_Group_Order_By>>;
  where?: InputMaybe<Control_Group_Bool_Exp>;
};

export type Subscription_RootControl_Group_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootControl_Group_DeviceArgs = {
  distinct_on?: InputMaybe<Array<Control_Group_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Control_Group_Device_Order_By>>;
  where?: InputMaybe<Control_Group_Device_Bool_Exp>;
};

export type Subscription_RootControl_Group_Device_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Control_Group_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Control_Group_Device_Order_By>>;
  where?: InputMaybe<Control_Group_Device_Bool_Exp>;
};

export type Subscription_RootControl_Group_Device_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootDevice_TypeArgs = {
  distinct_on?: InputMaybe<Array<Device_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Type_Order_By>>;
  where?: InputMaybe<Device_Type_Bool_Exp>;
};

export type Subscription_RootDevice_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Type_Order_By>>;
  where?: InputMaybe<Device_Type_Bool_Exp>;
};

export type Subscription_RootDevice_Type_By_PkArgs = {
  value: Scalars['String'];
};

export type Subscription_RootEddiArgs = {
  distinct_on?: InputMaybe<Array<Eddi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Eddi_Order_By>>;
  where?: InputMaybe<Eddi_Bool_Exp>;
};

export type Subscription_RootEddi_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Eddi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Eddi_Order_By>>;
  where?: InputMaybe<Eddi_Bool_Exp>;
};

export type Subscription_RootEddi_By_PkArgs = {
  serialno: Scalars['bigint'];
};

export type Subscription_RootEddi_MinuteArgs = {
  distinct_on?: InputMaybe<Array<Eddi_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Eddi_Minute_Order_By>>;
  where?: InputMaybe<Eddi_Minute_Bool_Exp>;
};

export type Subscription_RootEddi_Minute_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Eddi_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Eddi_Minute_Order_By>>;
  where?: InputMaybe<Eddi_Minute_Bool_Exp>;
};

export type Subscription_RootEddi_Minute_By_PkArgs = {
  serialno: Scalars['bigint'];
  timestamp: Scalars['timestamp'];
};

export type Subscription_RootEventArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};

export type Subscription_RootEvent_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};

export type Subscription_RootEvent_By_PkArgs = {
  eventtime: Scalars['timestamp'];
  numberofeventsinthissecond: Scalars['smallint'];
  serialno: Scalars['bigint'];
};

export type Subscription_RootHarviArgs = {
  distinct_on?: InputMaybe<Array<Harvi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Harvi_Order_By>>;
  where?: InputMaybe<Harvi_Bool_Exp>;
};

export type Subscription_RootHarvi_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Harvi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Harvi_Order_By>>;
  where?: InputMaybe<Harvi_Bool_Exp>;
};

export type Subscription_RootHarvi_By_PkArgs = {
  serialno: Scalars['bigint'];
};

export type Subscription_RootHubArgs = {
  distinct_on?: InputMaybe<Array<Hub_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hub_Order_By>>;
  where?: InputMaybe<Hub_Bool_Exp>;
};

export type Subscription_RootHub_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hub_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hub_Order_By>>;
  where?: InputMaybe<Hub_Bool_Exp>;
};

export type Subscription_RootHub_By_PkArgs = {
  serialno: Scalars['bigint'];
};

export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Subscription_RootUser_AccessArgs = {
  distinct_on?: InputMaybe<Array<User_Access_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Access_Order_By>>;
  where?: InputMaybe<User_Access_Bool_Exp>;
};

export type Subscription_RootUser_Access_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Access_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Access_Order_By>>;
  where?: InputMaybe<User_Access_Bool_Exp>;
};

export type Subscription_RootUser_Access_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootZappiArgs = {
  distinct_on?: InputMaybe<Array<Zappi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zappi_Order_By>>;
  where?: InputMaybe<Zappi_Bool_Exp>;
};

export type Subscription_RootZappi_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Zappi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zappi_Order_By>>;
  where?: InputMaybe<Zappi_Bool_Exp>;
};

export type Subscription_RootZappi_By_PkArgs = {
  serialno: Scalars['bigint'];
};

export type Subscription_RootZappi_MinuteArgs = {
  distinct_on?: InputMaybe<Array<Zappi_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zappi_Minute_Order_By>>;
  where?: InputMaybe<Zappi_Minute_Bool_Exp>;
};

export type Subscription_RootZappi_Minute_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Zappi_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zappi_Minute_Order_By>>;
  where?: InputMaybe<Zappi_Minute_Bool_Exp>;
};

export type Subscription_RootZappi_Minute_By_PkArgs = {
  serialno: Scalars['bigint'];
  timestamp: Scalars['timestamp'];
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  accessid: Scalars['Int'];
  /** An array relationship */
  commands: Array<Command>;
  /** An aggregate relationship */
  commands_aggregate: Command_Aggregate;
  email: Scalars['String'];
  id: Scalars['Int'];
  lastlogin: Scalars['timestamptz'];
  name: Scalars['String'];
  socialtokenexp: Scalars['timestamptz'];
  /** An object relationship */
  user_access: User_Access;
};

/** columns and relationships of "user" */
export type UserCommandsArgs = {
  distinct_on?: InputMaybe<Array<Command_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Command_Order_By>>;
  where?: InputMaybe<Command_Bool_Exp>;
};

/** columns and relationships of "user" */
export type UserCommands_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Command_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Command_Order_By>>;
  where?: InputMaybe<Command_Bool_Exp>;
};

/** columns and relationships of "user_access" */
export type User_Access = {
  __typename?: 'user_access';
  id: Scalars['Int'];
  permissions: Scalars['jsonb'];
  type: Scalars['String'];
  /** An array relationship */
  users: Array<User>;
  /** An aggregate relationship */
  users_aggregate: User_Aggregate;
};

/** columns and relationships of "user_access" */
export type User_AccessPermissionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "user_access" */
export type User_AccessUsersArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** columns and relationships of "user_access" */
export type User_AccessUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** aggregated selection of "user_access" */
export type User_Access_Aggregate = {
  __typename?: 'user_access_aggregate';
  aggregate?: Maybe<User_Access_Aggregate_Fields>;
  nodes: Array<User_Access>;
};

/** aggregate fields of "user_access" */
export type User_Access_Aggregate_Fields = {
  __typename?: 'user_access_aggregate_fields';
  avg?: Maybe<User_Access_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Access_Max_Fields>;
  min?: Maybe<User_Access_Min_Fields>;
  stddev?: Maybe<User_Access_Stddev_Fields>;
  stddev_pop?: Maybe<User_Access_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Access_Stddev_Samp_Fields>;
  sum?: Maybe<User_Access_Sum_Fields>;
  var_pop?: Maybe<User_Access_Var_Pop_Fields>;
  var_samp?: Maybe<User_Access_Var_Samp_Fields>;
  variance?: Maybe<User_Access_Variance_Fields>;
};

/** aggregate fields of "user_access" */
export type User_Access_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Access_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type User_Access_Append_Input = {
  permissions?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type User_Access_Avg_Fields = {
  __typename?: 'user_access_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user_access". All fields are combined with a logical 'AND'. */
export type User_Access_Bool_Exp = {
  _and?: InputMaybe<Array<User_Access_Bool_Exp>>;
  _not?: InputMaybe<User_Access_Bool_Exp>;
  _or?: InputMaybe<Array<User_Access_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  permissions?: InputMaybe<Jsonb_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  users?: InputMaybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "user_access" */
export enum User_Access_Constraint {
  /** unique or primary key constraint */
  Pk_9404e012dec46d1faa719fd9bd7 = 'PK_9404e012dec46d1faa719fd9bd7',
  /** unique or primary key constraint */
  UqBa7e316ff7107fb69ae2659e94e = 'UQ_ba7e316ff7107fb69ae2659e94e',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type User_Access_Delete_At_Path_Input = {
  permissions?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type User_Access_Delete_Elem_Input = {
  permissions?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type User_Access_Delete_Key_Input = {
  permissions?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "user_access" */
export type User_Access_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_access" */
export type User_Access_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  permissions?: InputMaybe<Scalars['jsonb']>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<User_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Access_Max_Fields = {
  __typename?: 'user_access_max_fields';
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Access_Min_Fields = {
  __typename?: 'user_access_min_fields';
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user_access" */
export type User_Access_Mutation_Response = {
  __typename?: 'user_access_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Access>;
};

/** input type for inserting object relation for remote table "user_access" */
export type User_Access_Obj_Rel_Insert_Input = {
  data: User_Access_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Access_On_Conflict>;
};

/** on_conflict condition type for table "user_access" */
export type User_Access_On_Conflict = {
  constraint: User_Access_Constraint;
  update_columns?: Array<User_Access_Update_Column>;
  where?: InputMaybe<User_Access_Bool_Exp>;
};

/** Ordering options when selecting data from "user_access". */
export type User_Access_Order_By = {
  id?: InputMaybe<Order_By>;
  permissions?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<User_Aggregate_Order_By>;
};

/** primary key columns input for table: user_access */
export type User_Access_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type User_Access_Prepend_Input = {
  permissions?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "user_access" */
export enum User_Access_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Permissions = 'permissions',
  /** column name */
  Type = 'type',
}

/** input type for updating data in table "user_access" */
export type User_Access_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  permissions?: InputMaybe<Scalars['jsonb']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type User_Access_Stddev_Fields = {
  __typename?: 'user_access_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Access_Stddev_Pop_Fields = {
  __typename?: 'user_access_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Access_Stddev_Samp_Fields = {
  __typename?: 'user_access_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type User_Access_Sum_Fields = {
  __typename?: 'user_access_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "user_access" */
export enum User_Access_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Permissions = 'permissions',
  /** column name */
  Type = 'type',
}

/** aggregate var_pop on columns */
export type User_Access_Var_Pop_Fields = {
  __typename?: 'user_access_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Access_Var_Samp_Fields = {
  __typename?: 'user_access_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Access_Variance_Fields = {
  __typename?: 'user_access_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};

/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  avg?: InputMaybe<User_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Max_Order_By>;
  min?: InputMaybe<User_Min_Order_By>;
  stddev?: InputMaybe<User_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Sum_Order_By>;
  var_pop?: InputMaybe<User_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  accessid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user" */
export type User_Avg_Order_By = {
  accessid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  accessid?: InputMaybe<Int_Comparison_Exp>;
  commands?: InputMaybe<Command_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  lastlogin?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  socialtokenexp?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_access?: InputMaybe<User_Access_Bool_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  PkCace4a159ff9f2512dd42373760 = 'PK_cace4a159ff9f2512dd42373760',
  /** unique or primary key constraint */
  UqE12875dfb3b1d92d7d7c5377e22 = 'UQ_e12875dfb3b1d92d7d7c5377e22',
}

/** input type for incrementing numeric columns in table "user" */
export type User_Inc_Input = {
  accessid?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  accessid?: InputMaybe<Scalars['Int']>;
  commands?: InputMaybe<Command_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  lastlogin?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  socialtokenexp?: InputMaybe<Scalars['timestamptz']>;
  user_access?: InputMaybe<User_Access_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  accessid?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastlogin?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  socialtokenexp?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  accessid?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastlogin?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  socialtokenexp?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  accessid?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastlogin?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  socialtokenexp?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  accessid?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastlogin?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  socialtokenexp?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  accessid?: InputMaybe<Order_By>;
  commands_aggregate?: InputMaybe<Command_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastlogin?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  socialtokenexp?: InputMaybe<Order_By>;
  user_access?: InputMaybe<User_Access_Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Accessid = 'accessid',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Lastlogin = 'lastlogin',
  /** column name */
  Name = 'name',
  /** column name */
  Socialtokenexp = 'socialtokenexp',
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  accessid?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  lastlogin?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  socialtokenexp?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  accessid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user" */
export type User_Stddev_Order_By = {
  accessid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  accessid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user" */
export type User_Stddev_Pop_Order_By = {
  accessid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  accessid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user" */
export type User_Stddev_Samp_Order_By = {
  accessid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  accessid?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user" */
export type User_Sum_Order_By = {
  accessid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Accessid = 'accessid',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Lastlogin = 'lastlogin',
  /** column name */
  Name = 'name',
  /** column name */
  Socialtokenexp = 'socialtokenexp',
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  accessid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user" */
export type User_Var_Pop_Order_By = {
  accessid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  accessid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user" */
export type User_Var_Samp_Order_By = {
  accessid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  accessid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user" */
export type User_Variance_Order_By = {
  accessid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "zappi" */
export type Zappi = {
  __typename?: 'zappi';
  agggroupno?: Maybe<Scalars['Int']>;
  agglock?: Maybe<Scalars['smallint']>;
  /** An object relationship */
  aggregation_datum?: Maybe<Aggregation_Data>;
  aggregationdataid?: Maybe<Scalars['Int']>;
  boostmanual?: Maybe<Scalars['Boolean']>;
  boostsmart?: Maybe<Scalars['Boolean']>;
  boosttimed?: Maybe<Scalars['Boolean']>;
  bootloaderversion?: Maybe<Scalars['Int']>;
  chargeenergy?: Maybe<Scalars['Float']>;
  commandseqno: Scalars['smallint'];
  configappdata?: Maybe<Scalars['bytea']>;
  configappdone: Scalars['Boolean'];
  configbootdata?: Maybe<Scalars['bytea']>;
  configbootdone: Scalars['Boolean'];
  configlength?: Maybe<Scalars['smallint']>;
  configoffset?: Maybe<Scalars['smallint']>;
  configstate?: Maybe<Scalars['smallint']>;
  configstructure?: Maybe<Scalars['smallint']>;
  configversion?: Maybe<Scalars['smallint']>;
  createdat?: Maybe<Scalars['timestamptz']>;
  ct1?: Maybe<Scalars['jsonb']>;
  ct2?: Maybe<Scalars['jsonb']>;
  ct3?: Maybe<Scalars['jsonb']>;
  ct4?: Maybe<Scalars['jsonb']>;
  ct5?: Maybe<Scalars['jsonb']>;
  ct6?: Maybe<Scalars['jsonb']>;
  ct7?: Maybe<Scalars['jsonb']>;
  ct8?: Maybe<Scalars['jsonb']>;
  ct9?: Maybe<Scalars['jsonb']>;
  ct10?: Maybe<Scalars['jsonb']>;
  ct11?: Maybe<Scalars['jsonb']>;
  ct12?: Maybe<Scalars['jsonb']>;
  ct13?: Maybe<Scalars['jsonb']>;
  ct14?: Maybe<Scalars['jsonb']>;
  ct15?: Maybe<Scalars['jsonb']>;
  ct16?: Maybe<Scalars['jsonb']>;
  currentboostremaining?: Maybe<Scalars['smallint']>;
  currentversion?: Maybe<Scalars['Int']>;
  deviceaddressraw: Scalars['Int'];
  deviceclass: Scalars['String'];
  deviceconfigtime?: Maybe<Scalars['bigint']>;
  deviceinstance?: Maybe<Scalars['Int']>;
  dsrdataack?: Maybe<Scalars['smallint']>;
  dsrdatacsn?: Maybe<Scalars['smallint']>;
  dsrdatafda?: Maybe<Scalars['Boolean']>;
  dsrdatafde?: Maybe<Scalars['Boolean']>;
  dsrdatafdn?: Maybe<Scalars['Boolean']>;
  dsrdatafua?: Maybe<Scalars['Boolean']>;
  dsrdatafue?: Maybe<Scalars['Boolean']>;
  dsrdatafun?: Maybe<Scalars['Boolean']>;
  dsrdatalca?: Maybe<Scalars['Boolean']>;
  dsrdatalce?: Maybe<Scalars['Boolean']>;
  dsrdataload?: Maybe<Scalars['smallint']>;
  dsrdataseconds?: Maybe<Scalars['smallint']>;
  ethernetlink?: Maybe<Scalars['Boolean']>;
  frequency?: Maybe<Scalars['smallint']>;
  highpower?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  hub?: Maybe<Hub>;
  hubserialno?: Maybe<Scalars['bigint']>;
  isaggregated: Scalars['Boolean'];
  lockedstatuschargesessionallowed?: Maybe<Scalars['Boolean']>;
  lockedstatuschargewhenlocked?: Maybe<Scalars['Boolean']>;
  lockedstatuslockednow?: Maybe<Scalars['Boolean']>;
  lockedstatuslockwhenpluggedin?: Maybe<Scalars['Boolean']>;
  lockedstatuslockwhenunplugged?: Maybe<Scalars['Boolean']>;
  lockedstatusmicroprocessorti?: Maybe<Scalars['Boolean']>;
  maxpower?: Maybe<Scalars['Int']>;
  melibversion?: Maybe<Scalars['Int']>;
  melinkversion?: Maybe<Scalars['Int']>;
  minpower?: Maybe<Scalars['Int']>;
  normalboostkwh?: Maybe<Scalars['smallint']>;
  phase?: Maybe<Scalars['smallint']>;
  pilotstate?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['smallint']>;
  prioritychanges?: Maybe<Scalars['smallint']>;
  productcode?: Maybe<Scalars['smallint']>;
  pwmdatapulsewidthmodulationinpercentage?: Maybe<Scalars['Float']>;
  pwmdatarcdacinnanoamps?: Maybe<Scalars['Int']>;
  pwmdatarcddcinnanoamps?: Maybe<Scalars['Int']>;
  pwmdatareturnrcdacinnanoamps?: Maybe<Scalars['Int']>;
  pwmdatastatecpu?: Maybe<Scalars['smallint']>;
  pwmdatastatercdboard?: Maybe<Scalars['smallint']>;
  serialno: Scalars['bigint'];
  serverconfigtime?: Maybe<Scalars['Int']>;
  smartboosthour?: Maybe<Scalars['smallint']>;
  smartboostkwh?: Maybe<Scalars['smallint']>;
  smartboostminute?: Maybe<Scalars['smallint']>;
  specialversion?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  stubloaderversion?: Maybe<Scalars['Int']>;
  threephase: Scalars['Boolean'];
  updatedat: Scalars['timestamptz'];
  vhub?: Maybe<Scalars['Boolean']>;
  voltage?: Maybe<Scalars['smallint']>;
  voltage2?: Maybe<Scalars['smallint']>;
  voltage3?: Maybe<Scalars['smallint']>;
  wifilink?: Maybe<Scalars['Boolean']>;
  zappi2: Scalars['Boolean'];
  zappi_control_group_device?: Maybe<Control_Group_Device>;
  zappimode?: Maybe<Scalars['String']>;
};

/** columns and relationships of "zappi" */
export type ZappiCt1Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "zappi" */
export type ZappiCt2Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "zappi" */
export type ZappiCt3Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "zappi" */
export type ZappiCt4Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "zappi" */
export type ZappiCt5Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "zappi" */
export type ZappiCt6Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "zappi" */
export type ZappiCt7Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "zappi" */
export type ZappiCt8Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "zappi" */
export type ZappiCt9Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "zappi" */
export type ZappiCt10Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "zappi" */
export type ZappiCt11Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "zappi" */
export type ZappiCt12Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "zappi" */
export type ZappiCt13Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "zappi" */
export type ZappiCt14Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "zappi" */
export type ZappiCt15Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "zappi" */
export type ZappiCt16Args = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "zappi" */
export type Zappi_Aggregate = {
  __typename?: 'zappi_aggregate';
  aggregate?: Maybe<Zappi_Aggregate_Fields>;
  nodes: Array<Zappi>;
};

/** aggregate fields of "zappi" */
export type Zappi_Aggregate_Fields = {
  __typename?: 'zappi_aggregate_fields';
  avg?: Maybe<Zappi_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Zappi_Max_Fields>;
  min?: Maybe<Zappi_Min_Fields>;
  stddev?: Maybe<Zappi_Stddev_Fields>;
  stddev_pop?: Maybe<Zappi_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Zappi_Stddev_Samp_Fields>;
  sum?: Maybe<Zappi_Sum_Fields>;
  var_pop?: Maybe<Zappi_Var_Pop_Fields>;
  var_samp?: Maybe<Zappi_Var_Samp_Fields>;
  variance?: Maybe<Zappi_Variance_Fields>;
};

/** aggregate fields of "zappi" */
export type Zappi_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Zappi_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "zappi" */
export type Zappi_Aggregate_Order_By = {
  avg?: InputMaybe<Zappi_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Zappi_Max_Order_By>;
  min?: InputMaybe<Zappi_Min_Order_By>;
  stddev?: InputMaybe<Zappi_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Zappi_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Zappi_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Zappi_Sum_Order_By>;
  var_pop?: InputMaybe<Zappi_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Zappi_Var_Samp_Order_By>;
  variance?: InputMaybe<Zappi_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Zappi_Append_Input = {
  ct1?: InputMaybe<Scalars['jsonb']>;
  ct2?: InputMaybe<Scalars['jsonb']>;
  ct3?: InputMaybe<Scalars['jsonb']>;
  ct4?: InputMaybe<Scalars['jsonb']>;
  ct5?: InputMaybe<Scalars['jsonb']>;
  ct6?: InputMaybe<Scalars['jsonb']>;
  ct7?: InputMaybe<Scalars['jsonb']>;
  ct8?: InputMaybe<Scalars['jsonb']>;
  ct9?: InputMaybe<Scalars['jsonb']>;
  ct10?: InputMaybe<Scalars['jsonb']>;
  ct11?: InputMaybe<Scalars['jsonb']>;
  ct12?: InputMaybe<Scalars['jsonb']>;
  ct13?: InputMaybe<Scalars['jsonb']>;
  ct14?: InputMaybe<Scalars['jsonb']>;
  ct15?: InputMaybe<Scalars['jsonb']>;
  ct16?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "zappi" */
export type Zappi_Arr_Rel_Insert_Input = {
  data: Array<Zappi_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Zappi_On_Conflict>;
};

/** aggregate avg on columns */
export type Zappi_Avg_Fields = {
  __typename?: 'zappi_avg_fields';
  agggroupno?: Maybe<Scalars['Float']>;
  agglock?: Maybe<Scalars['Float']>;
  aggregationdataid?: Maybe<Scalars['Float']>;
  bootloaderversion?: Maybe<Scalars['Float']>;
  chargeenergy?: Maybe<Scalars['Float']>;
  commandseqno?: Maybe<Scalars['Float']>;
  configlength?: Maybe<Scalars['Float']>;
  configoffset?: Maybe<Scalars['Float']>;
  configstate?: Maybe<Scalars['Float']>;
  configstructure?: Maybe<Scalars['Float']>;
  configversion?: Maybe<Scalars['Float']>;
  currentboostremaining?: Maybe<Scalars['Float']>;
  currentversion?: Maybe<Scalars['Float']>;
  deviceaddressraw?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  deviceinstance?: Maybe<Scalars['Float']>;
  dsrdataack?: Maybe<Scalars['Float']>;
  dsrdatacsn?: Maybe<Scalars['Float']>;
  dsrdataload?: Maybe<Scalars['Float']>;
  dsrdataseconds?: Maybe<Scalars['Float']>;
  frequency?: Maybe<Scalars['Float']>;
  hubserialno?: Maybe<Scalars['Float']>;
  maxpower?: Maybe<Scalars['Float']>;
  melibversion?: Maybe<Scalars['Float']>;
  melinkversion?: Maybe<Scalars['Float']>;
  minpower?: Maybe<Scalars['Float']>;
  normalboostkwh?: Maybe<Scalars['Float']>;
  phase?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
  prioritychanges?: Maybe<Scalars['Float']>;
  productcode?: Maybe<Scalars['Float']>;
  pwmdatapulsewidthmodulationinpercentage?: Maybe<Scalars['Float']>;
  pwmdatarcdacinnanoamps?: Maybe<Scalars['Float']>;
  pwmdatarcddcinnanoamps?: Maybe<Scalars['Float']>;
  pwmdatareturnrcdacinnanoamps?: Maybe<Scalars['Float']>;
  pwmdatastatecpu?: Maybe<Scalars['Float']>;
  pwmdatastatercdboard?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  serverconfigtime?: Maybe<Scalars['Float']>;
  smartboosthour?: Maybe<Scalars['Float']>;
  smartboostkwh?: Maybe<Scalars['Float']>;
  smartboostminute?: Maybe<Scalars['Float']>;
  stubloaderversion?: Maybe<Scalars['Float']>;
  voltage?: Maybe<Scalars['Float']>;
  voltage2?: Maybe<Scalars['Float']>;
  voltage3?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "zappi" */
export type Zappi_Avg_Order_By = {
  agggroupno?: InputMaybe<Order_By>;
  agglock?: InputMaybe<Order_By>;
  aggregationdataid?: InputMaybe<Order_By>;
  bootloaderversion?: InputMaybe<Order_By>;
  chargeenergy?: InputMaybe<Order_By>;
  commandseqno?: InputMaybe<Order_By>;
  configlength?: InputMaybe<Order_By>;
  configoffset?: InputMaybe<Order_By>;
  configstate?: InputMaybe<Order_By>;
  configstructure?: InputMaybe<Order_By>;
  configversion?: InputMaybe<Order_By>;
  currentboostremaining?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
  deviceaddressraw?: InputMaybe<Order_By>;
  deviceconfigtime?: InputMaybe<Order_By>;
  deviceinstance?: InputMaybe<Order_By>;
  dsrdataack?: InputMaybe<Order_By>;
  dsrdatacsn?: InputMaybe<Order_By>;
  dsrdataload?: InputMaybe<Order_By>;
  dsrdataseconds?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  maxpower?: InputMaybe<Order_By>;
  melibversion?: InputMaybe<Order_By>;
  melinkversion?: InputMaybe<Order_By>;
  minpower?: InputMaybe<Order_By>;
  normalboostkwh?: InputMaybe<Order_By>;
  phase?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  prioritychanges?: InputMaybe<Order_By>;
  productcode?: InputMaybe<Order_By>;
  pwmdatapulsewidthmodulationinpercentage?: InputMaybe<Order_By>;
  pwmdatarcdacinnanoamps?: InputMaybe<Order_By>;
  pwmdatarcddcinnanoamps?: InputMaybe<Order_By>;
  pwmdatareturnrcdacinnanoamps?: InputMaybe<Order_By>;
  pwmdatastatecpu?: InputMaybe<Order_By>;
  pwmdatastatercdboard?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverconfigtime?: InputMaybe<Order_By>;
  smartboosthour?: InputMaybe<Order_By>;
  smartboostkwh?: InputMaybe<Order_By>;
  smartboostminute?: InputMaybe<Order_By>;
  stubloaderversion?: InputMaybe<Order_By>;
  voltage?: InputMaybe<Order_By>;
  voltage2?: InputMaybe<Order_By>;
  voltage3?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "zappi". All fields are combined with a logical 'AND'. */
export type Zappi_Bool_Exp = {
  _and?: InputMaybe<Array<Zappi_Bool_Exp>>;
  _not?: InputMaybe<Zappi_Bool_Exp>;
  _or?: InputMaybe<Array<Zappi_Bool_Exp>>;
  agggroupno?: InputMaybe<Int_Comparison_Exp>;
  agglock?: InputMaybe<Smallint_Comparison_Exp>;
  aggregation_datum?: InputMaybe<Aggregation_Data_Bool_Exp>;
  aggregationdataid?: InputMaybe<Int_Comparison_Exp>;
  boostmanual?: InputMaybe<Boolean_Comparison_Exp>;
  boostsmart?: InputMaybe<Boolean_Comparison_Exp>;
  boosttimed?: InputMaybe<Boolean_Comparison_Exp>;
  bootloaderversion?: InputMaybe<Int_Comparison_Exp>;
  chargeenergy?: InputMaybe<Float_Comparison_Exp>;
  commandseqno?: InputMaybe<Smallint_Comparison_Exp>;
  configappdata?: InputMaybe<Bytea_Comparison_Exp>;
  configappdone?: InputMaybe<Boolean_Comparison_Exp>;
  configbootdata?: InputMaybe<Bytea_Comparison_Exp>;
  configbootdone?: InputMaybe<Boolean_Comparison_Exp>;
  configlength?: InputMaybe<Smallint_Comparison_Exp>;
  configoffset?: InputMaybe<Smallint_Comparison_Exp>;
  configstate?: InputMaybe<Smallint_Comparison_Exp>;
  configstructure?: InputMaybe<Smallint_Comparison_Exp>;
  configversion?: InputMaybe<Smallint_Comparison_Exp>;
  createdat?: InputMaybe<Timestamptz_Comparison_Exp>;
  ct1?: InputMaybe<Jsonb_Comparison_Exp>;
  ct2?: InputMaybe<Jsonb_Comparison_Exp>;
  ct3?: InputMaybe<Jsonb_Comparison_Exp>;
  ct4?: InputMaybe<Jsonb_Comparison_Exp>;
  ct5?: InputMaybe<Jsonb_Comparison_Exp>;
  ct6?: InputMaybe<Jsonb_Comparison_Exp>;
  ct7?: InputMaybe<Jsonb_Comparison_Exp>;
  ct8?: InputMaybe<Jsonb_Comparison_Exp>;
  ct9?: InputMaybe<Jsonb_Comparison_Exp>;
  ct10?: InputMaybe<Jsonb_Comparison_Exp>;
  ct11?: InputMaybe<Jsonb_Comparison_Exp>;
  ct12?: InputMaybe<Jsonb_Comparison_Exp>;
  ct13?: InputMaybe<Jsonb_Comparison_Exp>;
  ct14?: InputMaybe<Jsonb_Comparison_Exp>;
  ct15?: InputMaybe<Jsonb_Comparison_Exp>;
  ct16?: InputMaybe<Jsonb_Comparison_Exp>;
  currentboostremaining?: InputMaybe<Smallint_Comparison_Exp>;
  currentversion?: InputMaybe<Int_Comparison_Exp>;
  deviceaddressraw?: InputMaybe<Int_Comparison_Exp>;
  deviceclass?: InputMaybe<String_Comparison_Exp>;
  deviceconfigtime?: InputMaybe<Bigint_Comparison_Exp>;
  deviceinstance?: InputMaybe<Int_Comparison_Exp>;
  dsrdataack?: InputMaybe<Smallint_Comparison_Exp>;
  dsrdatacsn?: InputMaybe<Smallint_Comparison_Exp>;
  dsrdatafda?: InputMaybe<Boolean_Comparison_Exp>;
  dsrdatafde?: InputMaybe<Boolean_Comparison_Exp>;
  dsrdatafdn?: InputMaybe<Boolean_Comparison_Exp>;
  dsrdatafua?: InputMaybe<Boolean_Comparison_Exp>;
  dsrdatafue?: InputMaybe<Boolean_Comparison_Exp>;
  dsrdatafun?: InputMaybe<Boolean_Comparison_Exp>;
  dsrdatalca?: InputMaybe<Boolean_Comparison_Exp>;
  dsrdatalce?: InputMaybe<Boolean_Comparison_Exp>;
  dsrdataload?: InputMaybe<Smallint_Comparison_Exp>;
  dsrdataseconds?: InputMaybe<Smallint_Comparison_Exp>;
  ethernetlink?: InputMaybe<Boolean_Comparison_Exp>;
  frequency?: InputMaybe<Smallint_Comparison_Exp>;
  highpower?: InputMaybe<Boolean_Comparison_Exp>;
  hub?: InputMaybe<Hub_Bool_Exp>;
  hubserialno?: InputMaybe<Bigint_Comparison_Exp>;
  isaggregated?: InputMaybe<Boolean_Comparison_Exp>;
  lockedstatuschargesessionallowed?: InputMaybe<Boolean_Comparison_Exp>;
  lockedstatuschargewhenlocked?: InputMaybe<Boolean_Comparison_Exp>;
  lockedstatuslockednow?: InputMaybe<Boolean_Comparison_Exp>;
  lockedstatuslockwhenpluggedin?: InputMaybe<Boolean_Comparison_Exp>;
  lockedstatuslockwhenunplugged?: InputMaybe<Boolean_Comparison_Exp>;
  lockedstatusmicroprocessorti?: InputMaybe<Boolean_Comparison_Exp>;
  maxpower?: InputMaybe<Int_Comparison_Exp>;
  melibversion?: InputMaybe<Int_Comparison_Exp>;
  melinkversion?: InputMaybe<Int_Comparison_Exp>;
  minpower?: InputMaybe<Int_Comparison_Exp>;
  normalboostkwh?: InputMaybe<Smallint_Comparison_Exp>;
  phase?: InputMaybe<Smallint_Comparison_Exp>;
  pilotstate?: InputMaybe<String_Comparison_Exp>;
  priority?: InputMaybe<Smallint_Comparison_Exp>;
  prioritychanges?: InputMaybe<Smallint_Comparison_Exp>;
  productcode?: InputMaybe<Smallint_Comparison_Exp>;
  pwmdatapulsewidthmodulationinpercentage?: InputMaybe<Float_Comparison_Exp>;
  pwmdatarcdacinnanoamps?: InputMaybe<Int_Comparison_Exp>;
  pwmdatarcddcinnanoamps?: InputMaybe<Int_Comparison_Exp>;
  pwmdatareturnrcdacinnanoamps?: InputMaybe<Int_Comparison_Exp>;
  pwmdatastatecpu?: InputMaybe<Smallint_Comparison_Exp>;
  pwmdatastatercdboard?: InputMaybe<Smallint_Comparison_Exp>;
  serialno?: InputMaybe<Bigint_Comparison_Exp>;
  serverconfigtime?: InputMaybe<Int_Comparison_Exp>;
  smartboosthour?: InputMaybe<Smallint_Comparison_Exp>;
  smartboostkwh?: InputMaybe<Smallint_Comparison_Exp>;
  smartboostminute?: InputMaybe<Smallint_Comparison_Exp>;
  specialversion?: InputMaybe<String_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  stubloaderversion?: InputMaybe<Int_Comparison_Exp>;
  threephase?: InputMaybe<Boolean_Comparison_Exp>;
  updatedat?: InputMaybe<Timestamptz_Comparison_Exp>;
  vhub?: InputMaybe<Boolean_Comparison_Exp>;
  voltage?: InputMaybe<Smallint_Comparison_Exp>;
  voltage2?: InputMaybe<Smallint_Comparison_Exp>;
  voltage3?: InputMaybe<Smallint_Comparison_Exp>;
  wifilink?: InputMaybe<Boolean_Comparison_Exp>;
  zappi2?: InputMaybe<Boolean_Comparison_Exp>;
  zappimode?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "zappi" */
export enum Zappi_Constraint {
  /** unique or primary key constraint */
  Pk_294f9d2575dd264b591f148b32c = 'PK_294f9d2575dd264b591f148b32c',
  /** unique or primary key constraint */
  RelD3be20378772f9b596f1e9b406 = 'REL_d3be20378772f9b596f1e9b406',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Zappi_Delete_At_Path_Input = {
  ct1?: InputMaybe<Array<Scalars['String']>>;
  ct2?: InputMaybe<Array<Scalars['String']>>;
  ct3?: InputMaybe<Array<Scalars['String']>>;
  ct4?: InputMaybe<Array<Scalars['String']>>;
  ct5?: InputMaybe<Array<Scalars['String']>>;
  ct6?: InputMaybe<Array<Scalars['String']>>;
  ct7?: InputMaybe<Array<Scalars['String']>>;
  ct8?: InputMaybe<Array<Scalars['String']>>;
  ct9?: InputMaybe<Array<Scalars['String']>>;
  ct10?: InputMaybe<Array<Scalars['String']>>;
  ct11?: InputMaybe<Array<Scalars['String']>>;
  ct12?: InputMaybe<Array<Scalars['String']>>;
  ct13?: InputMaybe<Array<Scalars['String']>>;
  ct14?: InputMaybe<Array<Scalars['String']>>;
  ct15?: InputMaybe<Array<Scalars['String']>>;
  ct16?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Zappi_Delete_Elem_Input = {
  ct1?: InputMaybe<Scalars['Int']>;
  ct2?: InputMaybe<Scalars['Int']>;
  ct3?: InputMaybe<Scalars['Int']>;
  ct4?: InputMaybe<Scalars['Int']>;
  ct5?: InputMaybe<Scalars['Int']>;
  ct6?: InputMaybe<Scalars['Int']>;
  ct7?: InputMaybe<Scalars['Int']>;
  ct8?: InputMaybe<Scalars['Int']>;
  ct9?: InputMaybe<Scalars['Int']>;
  ct10?: InputMaybe<Scalars['Int']>;
  ct11?: InputMaybe<Scalars['Int']>;
  ct12?: InputMaybe<Scalars['Int']>;
  ct13?: InputMaybe<Scalars['Int']>;
  ct14?: InputMaybe<Scalars['Int']>;
  ct15?: InputMaybe<Scalars['Int']>;
  ct16?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Zappi_Delete_Key_Input = {
  ct1?: InputMaybe<Scalars['String']>;
  ct2?: InputMaybe<Scalars['String']>;
  ct3?: InputMaybe<Scalars['String']>;
  ct4?: InputMaybe<Scalars['String']>;
  ct5?: InputMaybe<Scalars['String']>;
  ct6?: InputMaybe<Scalars['String']>;
  ct7?: InputMaybe<Scalars['String']>;
  ct8?: InputMaybe<Scalars['String']>;
  ct9?: InputMaybe<Scalars['String']>;
  ct10?: InputMaybe<Scalars['String']>;
  ct11?: InputMaybe<Scalars['String']>;
  ct12?: InputMaybe<Scalars['String']>;
  ct13?: InputMaybe<Scalars['String']>;
  ct14?: InputMaybe<Scalars['String']>;
  ct15?: InputMaybe<Scalars['String']>;
  ct16?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "zappi" */
export type Zappi_Inc_Input = {
  agggroupno?: InputMaybe<Scalars['Int']>;
  agglock?: InputMaybe<Scalars['smallint']>;
  aggregationdataid?: InputMaybe<Scalars['Int']>;
  bootloaderversion?: InputMaybe<Scalars['Int']>;
  chargeenergy?: InputMaybe<Scalars['Float']>;
  commandseqno?: InputMaybe<Scalars['smallint']>;
  configlength?: InputMaybe<Scalars['smallint']>;
  configoffset?: InputMaybe<Scalars['smallint']>;
  configstate?: InputMaybe<Scalars['smallint']>;
  configstructure?: InputMaybe<Scalars['smallint']>;
  configversion?: InputMaybe<Scalars['smallint']>;
  currentboostremaining?: InputMaybe<Scalars['smallint']>;
  currentversion?: InputMaybe<Scalars['Int']>;
  deviceaddressraw?: InputMaybe<Scalars['Int']>;
  deviceconfigtime?: InputMaybe<Scalars['bigint']>;
  deviceinstance?: InputMaybe<Scalars['Int']>;
  dsrdataack?: InputMaybe<Scalars['smallint']>;
  dsrdatacsn?: InputMaybe<Scalars['smallint']>;
  dsrdataload?: InputMaybe<Scalars['smallint']>;
  dsrdataseconds?: InputMaybe<Scalars['smallint']>;
  frequency?: InputMaybe<Scalars['smallint']>;
  hubserialno?: InputMaybe<Scalars['bigint']>;
  maxpower?: InputMaybe<Scalars['Int']>;
  melibversion?: InputMaybe<Scalars['Int']>;
  melinkversion?: InputMaybe<Scalars['Int']>;
  minpower?: InputMaybe<Scalars['Int']>;
  normalboostkwh?: InputMaybe<Scalars['smallint']>;
  phase?: InputMaybe<Scalars['smallint']>;
  priority?: InputMaybe<Scalars['smallint']>;
  prioritychanges?: InputMaybe<Scalars['smallint']>;
  productcode?: InputMaybe<Scalars['smallint']>;
  pwmdatapulsewidthmodulationinpercentage?: InputMaybe<Scalars['Float']>;
  pwmdatarcdacinnanoamps?: InputMaybe<Scalars['Int']>;
  pwmdatarcddcinnanoamps?: InputMaybe<Scalars['Int']>;
  pwmdatareturnrcdacinnanoamps?: InputMaybe<Scalars['Int']>;
  pwmdatastatecpu?: InputMaybe<Scalars['smallint']>;
  pwmdatastatercdboard?: InputMaybe<Scalars['smallint']>;
  serialno?: InputMaybe<Scalars['bigint']>;
  serverconfigtime?: InputMaybe<Scalars['Int']>;
  smartboosthour?: InputMaybe<Scalars['smallint']>;
  smartboostkwh?: InputMaybe<Scalars['smallint']>;
  smartboostminute?: InputMaybe<Scalars['smallint']>;
  stubloaderversion?: InputMaybe<Scalars['Int']>;
  voltage?: InputMaybe<Scalars['smallint']>;
  voltage2?: InputMaybe<Scalars['smallint']>;
  voltage3?: InputMaybe<Scalars['smallint']>;
};

/** input type for inserting data into table "zappi" */
export type Zappi_Insert_Input = {
  agggroupno?: InputMaybe<Scalars['Int']>;
  agglock?: InputMaybe<Scalars['smallint']>;
  aggregation_datum?: InputMaybe<Aggregation_Data_Obj_Rel_Insert_Input>;
  aggregationdataid?: InputMaybe<Scalars['Int']>;
  boostmanual?: InputMaybe<Scalars['Boolean']>;
  boostsmart?: InputMaybe<Scalars['Boolean']>;
  boosttimed?: InputMaybe<Scalars['Boolean']>;
  bootloaderversion?: InputMaybe<Scalars['Int']>;
  chargeenergy?: InputMaybe<Scalars['Float']>;
  commandseqno?: InputMaybe<Scalars['smallint']>;
  configappdata?: InputMaybe<Scalars['bytea']>;
  configappdone?: InputMaybe<Scalars['Boolean']>;
  configbootdata?: InputMaybe<Scalars['bytea']>;
  configbootdone?: InputMaybe<Scalars['Boolean']>;
  configlength?: InputMaybe<Scalars['smallint']>;
  configoffset?: InputMaybe<Scalars['smallint']>;
  configstate?: InputMaybe<Scalars['smallint']>;
  configstructure?: InputMaybe<Scalars['smallint']>;
  configversion?: InputMaybe<Scalars['smallint']>;
  createdat?: InputMaybe<Scalars['timestamptz']>;
  ct1?: InputMaybe<Scalars['jsonb']>;
  ct2?: InputMaybe<Scalars['jsonb']>;
  ct3?: InputMaybe<Scalars['jsonb']>;
  ct4?: InputMaybe<Scalars['jsonb']>;
  ct5?: InputMaybe<Scalars['jsonb']>;
  ct6?: InputMaybe<Scalars['jsonb']>;
  ct7?: InputMaybe<Scalars['jsonb']>;
  ct8?: InputMaybe<Scalars['jsonb']>;
  ct9?: InputMaybe<Scalars['jsonb']>;
  ct10?: InputMaybe<Scalars['jsonb']>;
  ct11?: InputMaybe<Scalars['jsonb']>;
  ct12?: InputMaybe<Scalars['jsonb']>;
  ct13?: InputMaybe<Scalars['jsonb']>;
  ct14?: InputMaybe<Scalars['jsonb']>;
  ct15?: InputMaybe<Scalars['jsonb']>;
  ct16?: InputMaybe<Scalars['jsonb']>;
  currentboostremaining?: InputMaybe<Scalars['smallint']>;
  currentversion?: InputMaybe<Scalars['Int']>;
  deviceaddressraw?: InputMaybe<Scalars['Int']>;
  deviceclass?: InputMaybe<Scalars['String']>;
  deviceconfigtime?: InputMaybe<Scalars['bigint']>;
  deviceinstance?: InputMaybe<Scalars['Int']>;
  dsrdataack?: InputMaybe<Scalars['smallint']>;
  dsrdatacsn?: InputMaybe<Scalars['smallint']>;
  dsrdatafda?: InputMaybe<Scalars['Boolean']>;
  dsrdatafde?: InputMaybe<Scalars['Boolean']>;
  dsrdatafdn?: InputMaybe<Scalars['Boolean']>;
  dsrdatafua?: InputMaybe<Scalars['Boolean']>;
  dsrdatafue?: InputMaybe<Scalars['Boolean']>;
  dsrdatafun?: InputMaybe<Scalars['Boolean']>;
  dsrdatalca?: InputMaybe<Scalars['Boolean']>;
  dsrdatalce?: InputMaybe<Scalars['Boolean']>;
  dsrdataload?: InputMaybe<Scalars['smallint']>;
  dsrdataseconds?: InputMaybe<Scalars['smallint']>;
  ethernetlink?: InputMaybe<Scalars['Boolean']>;
  frequency?: InputMaybe<Scalars['smallint']>;
  highpower?: InputMaybe<Scalars['Boolean']>;
  hub?: InputMaybe<Hub_Obj_Rel_Insert_Input>;
  hubserialno?: InputMaybe<Scalars['bigint']>;
  isaggregated?: InputMaybe<Scalars['Boolean']>;
  lockedstatuschargesessionallowed?: InputMaybe<Scalars['Boolean']>;
  lockedstatuschargewhenlocked?: InputMaybe<Scalars['Boolean']>;
  lockedstatuslockednow?: InputMaybe<Scalars['Boolean']>;
  lockedstatuslockwhenpluggedin?: InputMaybe<Scalars['Boolean']>;
  lockedstatuslockwhenunplugged?: InputMaybe<Scalars['Boolean']>;
  lockedstatusmicroprocessorti?: InputMaybe<Scalars['Boolean']>;
  maxpower?: InputMaybe<Scalars['Int']>;
  melibversion?: InputMaybe<Scalars['Int']>;
  melinkversion?: InputMaybe<Scalars['Int']>;
  minpower?: InputMaybe<Scalars['Int']>;
  normalboostkwh?: InputMaybe<Scalars['smallint']>;
  phase?: InputMaybe<Scalars['smallint']>;
  pilotstate?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['smallint']>;
  prioritychanges?: InputMaybe<Scalars['smallint']>;
  productcode?: InputMaybe<Scalars['smallint']>;
  pwmdatapulsewidthmodulationinpercentage?: InputMaybe<Scalars['Float']>;
  pwmdatarcdacinnanoamps?: InputMaybe<Scalars['Int']>;
  pwmdatarcddcinnanoamps?: InputMaybe<Scalars['Int']>;
  pwmdatareturnrcdacinnanoamps?: InputMaybe<Scalars['Int']>;
  pwmdatastatecpu?: InputMaybe<Scalars['smallint']>;
  pwmdatastatercdboard?: InputMaybe<Scalars['smallint']>;
  serialno?: InputMaybe<Scalars['bigint']>;
  serverconfigtime?: InputMaybe<Scalars['Int']>;
  smartboosthour?: InputMaybe<Scalars['smallint']>;
  smartboostkwh?: InputMaybe<Scalars['smallint']>;
  smartboostminute?: InputMaybe<Scalars['smallint']>;
  specialversion?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  stubloaderversion?: InputMaybe<Scalars['Int']>;
  threephase?: InputMaybe<Scalars['Boolean']>;
  updatedat?: InputMaybe<Scalars['timestamptz']>;
  vhub?: InputMaybe<Scalars['Boolean']>;
  voltage?: InputMaybe<Scalars['smallint']>;
  voltage2?: InputMaybe<Scalars['smallint']>;
  voltage3?: InputMaybe<Scalars['smallint']>;
  wifilink?: InputMaybe<Scalars['Boolean']>;
  zappi2?: InputMaybe<Scalars['Boolean']>;
  zappimode?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Zappi_Max_Fields = {
  __typename?: 'zappi_max_fields';
  agggroupno?: Maybe<Scalars['Int']>;
  agglock?: Maybe<Scalars['smallint']>;
  aggregationdataid?: Maybe<Scalars['Int']>;
  bootloaderversion?: Maybe<Scalars['Int']>;
  chargeenergy?: Maybe<Scalars['Float']>;
  commandseqno?: Maybe<Scalars['smallint']>;
  configlength?: Maybe<Scalars['smallint']>;
  configoffset?: Maybe<Scalars['smallint']>;
  configstate?: Maybe<Scalars['smallint']>;
  configstructure?: Maybe<Scalars['smallint']>;
  configversion?: Maybe<Scalars['smallint']>;
  createdat?: Maybe<Scalars['timestamptz']>;
  currentboostremaining?: Maybe<Scalars['smallint']>;
  currentversion?: Maybe<Scalars['Int']>;
  deviceaddressraw?: Maybe<Scalars['Int']>;
  deviceclass?: Maybe<Scalars['String']>;
  deviceconfigtime?: Maybe<Scalars['bigint']>;
  deviceinstance?: Maybe<Scalars['Int']>;
  dsrdataack?: Maybe<Scalars['smallint']>;
  dsrdatacsn?: Maybe<Scalars['smallint']>;
  dsrdataload?: Maybe<Scalars['smallint']>;
  dsrdataseconds?: Maybe<Scalars['smallint']>;
  frequency?: Maybe<Scalars['smallint']>;
  hubserialno?: Maybe<Scalars['bigint']>;
  maxpower?: Maybe<Scalars['Int']>;
  melibversion?: Maybe<Scalars['Int']>;
  melinkversion?: Maybe<Scalars['Int']>;
  minpower?: Maybe<Scalars['Int']>;
  normalboostkwh?: Maybe<Scalars['smallint']>;
  phase?: Maybe<Scalars['smallint']>;
  pilotstate?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['smallint']>;
  prioritychanges?: Maybe<Scalars['smallint']>;
  productcode?: Maybe<Scalars['smallint']>;
  pwmdatapulsewidthmodulationinpercentage?: Maybe<Scalars['Float']>;
  pwmdatarcdacinnanoamps?: Maybe<Scalars['Int']>;
  pwmdatarcddcinnanoamps?: Maybe<Scalars['Int']>;
  pwmdatareturnrcdacinnanoamps?: Maybe<Scalars['Int']>;
  pwmdatastatecpu?: Maybe<Scalars['smallint']>;
  pwmdatastatercdboard?: Maybe<Scalars['smallint']>;
  serialno?: Maybe<Scalars['bigint']>;
  serverconfigtime?: Maybe<Scalars['Int']>;
  smartboosthour?: Maybe<Scalars['smallint']>;
  smartboostkwh?: Maybe<Scalars['smallint']>;
  smartboostminute?: Maybe<Scalars['smallint']>;
  specialversion?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  stubloaderversion?: Maybe<Scalars['Int']>;
  updatedat?: Maybe<Scalars['timestamptz']>;
  voltage?: Maybe<Scalars['smallint']>;
  voltage2?: Maybe<Scalars['smallint']>;
  voltage3?: Maybe<Scalars['smallint']>;
  zappimode?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "zappi" */
export type Zappi_Max_Order_By = {
  agggroupno?: InputMaybe<Order_By>;
  agglock?: InputMaybe<Order_By>;
  aggregationdataid?: InputMaybe<Order_By>;
  bootloaderversion?: InputMaybe<Order_By>;
  chargeenergy?: InputMaybe<Order_By>;
  commandseqno?: InputMaybe<Order_By>;
  configlength?: InputMaybe<Order_By>;
  configoffset?: InputMaybe<Order_By>;
  configstate?: InputMaybe<Order_By>;
  configstructure?: InputMaybe<Order_By>;
  configversion?: InputMaybe<Order_By>;
  createdat?: InputMaybe<Order_By>;
  currentboostremaining?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
  deviceaddressraw?: InputMaybe<Order_By>;
  deviceclass?: InputMaybe<Order_By>;
  deviceconfigtime?: InputMaybe<Order_By>;
  deviceinstance?: InputMaybe<Order_By>;
  dsrdataack?: InputMaybe<Order_By>;
  dsrdatacsn?: InputMaybe<Order_By>;
  dsrdataload?: InputMaybe<Order_By>;
  dsrdataseconds?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  maxpower?: InputMaybe<Order_By>;
  melibversion?: InputMaybe<Order_By>;
  melinkversion?: InputMaybe<Order_By>;
  minpower?: InputMaybe<Order_By>;
  normalboostkwh?: InputMaybe<Order_By>;
  phase?: InputMaybe<Order_By>;
  pilotstate?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  prioritychanges?: InputMaybe<Order_By>;
  productcode?: InputMaybe<Order_By>;
  pwmdatapulsewidthmodulationinpercentage?: InputMaybe<Order_By>;
  pwmdatarcdacinnanoamps?: InputMaybe<Order_By>;
  pwmdatarcddcinnanoamps?: InputMaybe<Order_By>;
  pwmdatareturnrcdacinnanoamps?: InputMaybe<Order_By>;
  pwmdatastatecpu?: InputMaybe<Order_By>;
  pwmdatastatercdboard?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverconfigtime?: InputMaybe<Order_By>;
  smartboosthour?: InputMaybe<Order_By>;
  smartboostkwh?: InputMaybe<Order_By>;
  smartboostminute?: InputMaybe<Order_By>;
  specialversion?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  stubloaderversion?: InputMaybe<Order_By>;
  updatedat?: InputMaybe<Order_By>;
  voltage?: InputMaybe<Order_By>;
  voltage2?: InputMaybe<Order_By>;
  voltage3?: InputMaybe<Order_By>;
  zappimode?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Zappi_Min_Fields = {
  __typename?: 'zappi_min_fields';
  agggroupno?: Maybe<Scalars['Int']>;
  agglock?: Maybe<Scalars['smallint']>;
  aggregationdataid?: Maybe<Scalars['Int']>;
  bootloaderversion?: Maybe<Scalars['Int']>;
  chargeenergy?: Maybe<Scalars['Float']>;
  commandseqno?: Maybe<Scalars['smallint']>;
  configlength?: Maybe<Scalars['smallint']>;
  configoffset?: Maybe<Scalars['smallint']>;
  configstate?: Maybe<Scalars['smallint']>;
  configstructure?: Maybe<Scalars['smallint']>;
  configversion?: Maybe<Scalars['smallint']>;
  createdat?: Maybe<Scalars['timestamptz']>;
  currentboostremaining?: Maybe<Scalars['smallint']>;
  currentversion?: Maybe<Scalars['Int']>;
  deviceaddressraw?: Maybe<Scalars['Int']>;
  deviceclass?: Maybe<Scalars['String']>;
  deviceconfigtime?: Maybe<Scalars['bigint']>;
  deviceinstance?: Maybe<Scalars['Int']>;
  dsrdataack?: Maybe<Scalars['smallint']>;
  dsrdatacsn?: Maybe<Scalars['smallint']>;
  dsrdataload?: Maybe<Scalars['smallint']>;
  dsrdataseconds?: Maybe<Scalars['smallint']>;
  frequency?: Maybe<Scalars['smallint']>;
  hubserialno?: Maybe<Scalars['bigint']>;
  maxpower?: Maybe<Scalars['Int']>;
  melibversion?: Maybe<Scalars['Int']>;
  melinkversion?: Maybe<Scalars['Int']>;
  minpower?: Maybe<Scalars['Int']>;
  normalboostkwh?: Maybe<Scalars['smallint']>;
  phase?: Maybe<Scalars['smallint']>;
  pilotstate?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['smallint']>;
  prioritychanges?: Maybe<Scalars['smallint']>;
  productcode?: Maybe<Scalars['smallint']>;
  pwmdatapulsewidthmodulationinpercentage?: Maybe<Scalars['Float']>;
  pwmdatarcdacinnanoamps?: Maybe<Scalars['Int']>;
  pwmdatarcddcinnanoamps?: Maybe<Scalars['Int']>;
  pwmdatareturnrcdacinnanoamps?: Maybe<Scalars['Int']>;
  pwmdatastatecpu?: Maybe<Scalars['smallint']>;
  pwmdatastatercdboard?: Maybe<Scalars['smallint']>;
  serialno?: Maybe<Scalars['bigint']>;
  serverconfigtime?: Maybe<Scalars['Int']>;
  smartboosthour?: Maybe<Scalars['smallint']>;
  smartboostkwh?: Maybe<Scalars['smallint']>;
  smartboostminute?: Maybe<Scalars['smallint']>;
  specialversion?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  stubloaderversion?: Maybe<Scalars['Int']>;
  updatedat?: Maybe<Scalars['timestamptz']>;
  voltage?: Maybe<Scalars['smallint']>;
  voltage2?: Maybe<Scalars['smallint']>;
  voltage3?: Maybe<Scalars['smallint']>;
  zappimode?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "zappi" */
export type Zappi_Min_Order_By = {
  agggroupno?: InputMaybe<Order_By>;
  agglock?: InputMaybe<Order_By>;
  aggregationdataid?: InputMaybe<Order_By>;
  bootloaderversion?: InputMaybe<Order_By>;
  chargeenergy?: InputMaybe<Order_By>;
  commandseqno?: InputMaybe<Order_By>;
  configlength?: InputMaybe<Order_By>;
  configoffset?: InputMaybe<Order_By>;
  configstate?: InputMaybe<Order_By>;
  configstructure?: InputMaybe<Order_By>;
  configversion?: InputMaybe<Order_By>;
  createdat?: InputMaybe<Order_By>;
  currentboostremaining?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
  deviceaddressraw?: InputMaybe<Order_By>;
  deviceclass?: InputMaybe<Order_By>;
  deviceconfigtime?: InputMaybe<Order_By>;
  deviceinstance?: InputMaybe<Order_By>;
  dsrdataack?: InputMaybe<Order_By>;
  dsrdatacsn?: InputMaybe<Order_By>;
  dsrdataload?: InputMaybe<Order_By>;
  dsrdataseconds?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  maxpower?: InputMaybe<Order_By>;
  melibversion?: InputMaybe<Order_By>;
  melinkversion?: InputMaybe<Order_By>;
  minpower?: InputMaybe<Order_By>;
  normalboostkwh?: InputMaybe<Order_By>;
  phase?: InputMaybe<Order_By>;
  pilotstate?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  prioritychanges?: InputMaybe<Order_By>;
  productcode?: InputMaybe<Order_By>;
  pwmdatapulsewidthmodulationinpercentage?: InputMaybe<Order_By>;
  pwmdatarcdacinnanoamps?: InputMaybe<Order_By>;
  pwmdatarcddcinnanoamps?: InputMaybe<Order_By>;
  pwmdatareturnrcdacinnanoamps?: InputMaybe<Order_By>;
  pwmdatastatecpu?: InputMaybe<Order_By>;
  pwmdatastatercdboard?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverconfigtime?: InputMaybe<Order_By>;
  smartboosthour?: InputMaybe<Order_By>;
  smartboostkwh?: InputMaybe<Order_By>;
  smartboostminute?: InputMaybe<Order_By>;
  specialversion?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  stubloaderversion?: InputMaybe<Order_By>;
  updatedat?: InputMaybe<Order_By>;
  voltage?: InputMaybe<Order_By>;
  voltage2?: InputMaybe<Order_By>;
  voltage3?: InputMaybe<Order_By>;
  zappimode?: InputMaybe<Order_By>;
};

/** columns and relationships of "zappi_minute" */
export type Zappi_Minute = {
  __typename?: 'zappi_minute';
  boostloadpower1?: Maybe<Scalars['Float']>;
  boostloadpower2?: Maybe<Scalars['Float']>;
  boostloadpower3?: Maybe<Scalars['Float']>;
  divloadpower1?: Maybe<Scalars['Float']>;
  divloadpower2?: Maybe<Scalars['Float']>;
  divloadpower3?: Maybe<Scalars['Float']>;
  exportpower?: Maybe<Scalars['Float']>;
  externalctnegpower1?: Maybe<Scalars['Float']>;
  externalctnegpower2?: Maybe<Scalars['Float']>;
  externalctnegpower3?: Maybe<Scalars['Float']>;
  externalctpospower1?: Maybe<Scalars['Float']>;
  externalctpospower2?: Maybe<Scalars['Float']>;
  externalctpospower3?: Maybe<Scalars['Float']>;
  externalcttype1?: Maybe<Scalars['smallint']>;
  externalcttype2?: Maybe<Scalars['smallint']>;
  externalcttype3?: Maybe<Scalars['smallint']>;
  frequency?: Maybe<Scalars['Float']>;
  gennegpw?: Maybe<Scalars['Float']>;
  genpospw?: Maybe<Scalars['Float']>;
  heatsink?: Maybe<Scalars['Float']>;
  importpower?: Maybe<Scalars['Float']>;
  noseconds: Scalars['Int'];
  serialno: Scalars['bigint'];
  timestamp: Scalars['timestamp'];
  voltage1?: Maybe<Scalars['Float']>;
  voltage2?: Maybe<Scalars['Float']>;
  voltage3?: Maybe<Scalars['Float']>;
};

/** aggregated selection of "zappi_minute" */
export type Zappi_Minute_Aggregate = {
  __typename?: 'zappi_minute_aggregate';
  aggregate?: Maybe<Zappi_Minute_Aggregate_Fields>;
  nodes: Array<Zappi_Minute>;
};

/** aggregate fields of "zappi_minute" */
export type Zappi_Minute_Aggregate_Fields = {
  __typename?: 'zappi_minute_aggregate_fields';
  avg?: Maybe<Zappi_Minute_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Zappi_Minute_Max_Fields>;
  min?: Maybe<Zappi_Minute_Min_Fields>;
  stddev?: Maybe<Zappi_Minute_Stddev_Fields>;
  stddev_pop?: Maybe<Zappi_Minute_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Zappi_Minute_Stddev_Samp_Fields>;
  sum?: Maybe<Zappi_Minute_Sum_Fields>;
  var_pop?: Maybe<Zappi_Minute_Var_Pop_Fields>;
  var_samp?: Maybe<Zappi_Minute_Var_Samp_Fields>;
  variance?: Maybe<Zappi_Minute_Variance_Fields>;
};

/** aggregate fields of "zappi_minute" */
export type Zappi_Minute_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Zappi_Minute_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Zappi_Minute_Avg_Fields = {
  __typename?: 'zappi_minute_avg_fields';
  boostloadpower1?: Maybe<Scalars['Float']>;
  boostloadpower2?: Maybe<Scalars['Float']>;
  boostloadpower3?: Maybe<Scalars['Float']>;
  divloadpower1?: Maybe<Scalars['Float']>;
  divloadpower2?: Maybe<Scalars['Float']>;
  divloadpower3?: Maybe<Scalars['Float']>;
  exportpower?: Maybe<Scalars['Float']>;
  externalctnegpower1?: Maybe<Scalars['Float']>;
  externalctnegpower2?: Maybe<Scalars['Float']>;
  externalctnegpower3?: Maybe<Scalars['Float']>;
  externalctpospower1?: Maybe<Scalars['Float']>;
  externalctpospower2?: Maybe<Scalars['Float']>;
  externalctpospower3?: Maybe<Scalars['Float']>;
  externalcttype1?: Maybe<Scalars['Float']>;
  externalcttype2?: Maybe<Scalars['Float']>;
  externalcttype3?: Maybe<Scalars['Float']>;
  frequency?: Maybe<Scalars['Float']>;
  gennegpw?: Maybe<Scalars['Float']>;
  genpospw?: Maybe<Scalars['Float']>;
  heatsink?: Maybe<Scalars['Float']>;
  importpower?: Maybe<Scalars['Float']>;
  noseconds?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  voltage1?: Maybe<Scalars['Float']>;
  voltage2?: Maybe<Scalars['Float']>;
  voltage3?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "zappi_minute". All fields are combined with a logical 'AND'. */
export type Zappi_Minute_Bool_Exp = {
  _and?: InputMaybe<Array<Zappi_Minute_Bool_Exp>>;
  _not?: InputMaybe<Zappi_Minute_Bool_Exp>;
  _or?: InputMaybe<Array<Zappi_Minute_Bool_Exp>>;
  boostloadpower1?: InputMaybe<Float_Comparison_Exp>;
  boostloadpower2?: InputMaybe<Float_Comparison_Exp>;
  boostloadpower3?: InputMaybe<Float_Comparison_Exp>;
  divloadpower1?: InputMaybe<Float_Comparison_Exp>;
  divloadpower2?: InputMaybe<Float_Comparison_Exp>;
  divloadpower3?: InputMaybe<Float_Comparison_Exp>;
  exportpower?: InputMaybe<Float_Comparison_Exp>;
  externalctnegpower1?: InputMaybe<Float_Comparison_Exp>;
  externalctnegpower2?: InputMaybe<Float_Comparison_Exp>;
  externalctnegpower3?: InputMaybe<Float_Comparison_Exp>;
  externalctpospower1?: InputMaybe<Float_Comparison_Exp>;
  externalctpospower2?: InputMaybe<Float_Comparison_Exp>;
  externalctpospower3?: InputMaybe<Float_Comparison_Exp>;
  externalcttype1?: InputMaybe<Smallint_Comparison_Exp>;
  externalcttype2?: InputMaybe<Smallint_Comparison_Exp>;
  externalcttype3?: InputMaybe<Smallint_Comparison_Exp>;
  frequency?: InputMaybe<Float_Comparison_Exp>;
  gennegpw?: InputMaybe<Float_Comparison_Exp>;
  genpospw?: InputMaybe<Float_Comparison_Exp>;
  heatsink?: InputMaybe<Float_Comparison_Exp>;
  importpower?: InputMaybe<Float_Comparison_Exp>;
  noseconds?: InputMaybe<Int_Comparison_Exp>;
  serialno?: InputMaybe<Bigint_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  voltage1?: InputMaybe<Float_Comparison_Exp>;
  voltage2?: InputMaybe<Float_Comparison_Exp>;
  voltage3?: InputMaybe<Float_Comparison_Exp>;
};

/** unique or primary key constraints on table "zappi_minute" */
export enum Zappi_Minute_Constraint {
  /** unique or primary key constraint */
  ZappiMinutePkey = 'zappi_minute_pkey',
}

/** input type for incrementing numeric columns in table "zappi_minute" */
export type Zappi_Minute_Inc_Input = {
  boostloadpower1?: InputMaybe<Scalars['Float']>;
  boostloadpower2?: InputMaybe<Scalars['Float']>;
  boostloadpower3?: InputMaybe<Scalars['Float']>;
  divloadpower1?: InputMaybe<Scalars['Float']>;
  divloadpower2?: InputMaybe<Scalars['Float']>;
  divloadpower3?: InputMaybe<Scalars['Float']>;
  exportpower?: InputMaybe<Scalars['Float']>;
  externalctnegpower1?: InputMaybe<Scalars['Float']>;
  externalctnegpower2?: InputMaybe<Scalars['Float']>;
  externalctnegpower3?: InputMaybe<Scalars['Float']>;
  externalctpospower1?: InputMaybe<Scalars['Float']>;
  externalctpospower2?: InputMaybe<Scalars['Float']>;
  externalctpospower3?: InputMaybe<Scalars['Float']>;
  externalcttype1?: InputMaybe<Scalars['smallint']>;
  externalcttype2?: InputMaybe<Scalars['smallint']>;
  externalcttype3?: InputMaybe<Scalars['smallint']>;
  frequency?: InputMaybe<Scalars['Float']>;
  gennegpw?: InputMaybe<Scalars['Float']>;
  genpospw?: InputMaybe<Scalars['Float']>;
  heatsink?: InputMaybe<Scalars['Float']>;
  importpower?: InputMaybe<Scalars['Float']>;
  noseconds?: InputMaybe<Scalars['Int']>;
  serialno?: InputMaybe<Scalars['bigint']>;
  voltage1?: InputMaybe<Scalars['Float']>;
  voltage2?: InputMaybe<Scalars['Float']>;
  voltage3?: InputMaybe<Scalars['Float']>;
};

/** input type for inserting data into table "zappi_minute" */
export type Zappi_Minute_Insert_Input = {
  boostloadpower1?: InputMaybe<Scalars['Float']>;
  boostloadpower2?: InputMaybe<Scalars['Float']>;
  boostloadpower3?: InputMaybe<Scalars['Float']>;
  divloadpower1?: InputMaybe<Scalars['Float']>;
  divloadpower2?: InputMaybe<Scalars['Float']>;
  divloadpower3?: InputMaybe<Scalars['Float']>;
  exportpower?: InputMaybe<Scalars['Float']>;
  externalctnegpower1?: InputMaybe<Scalars['Float']>;
  externalctnegpower2?: InputMaybe<Scalars['Float']>;
  externalctnegpower3?: InputMaybe<Scalars['Float']>;
  externalctpospower1?: InputMaybe<Scalars['Float']>;
  externalctpospower2?: InputMaybe<Scalars['Float']>;
  externalctpospower3?: InputMaybe<Scalars['Float']>;
  externalcttype1?: InputMaybe<Scalars['smallint']>;
  externalcttype2?: InputMaybe<Scalars['smallint']>;
  externalcttype3?: InputMaybe<Scalars['smallint']>;
  frequency?: InputMaybe<Scalars['Float']>;
  gennegpw?: InputMaybe<Scalars['Float']>;
  genpospw?: InputMaybe<Scalars['Float']>;
  heatsink?: InputMaybe<Scalars['Float']>;
  importpower?: InputMaybe<Scalars['Float']>;
  noseconds?: InputMaybe<Scalars['Int']>;
  serialno?: InputMaybe<Scalars['bigint']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  voltage1?: InputMaybe<Scalars['Float']>;
  voltage2?: InputMaybe<Scalars['Float']>;
  voltage3?: InputMaybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Zappi_Minute_Max_Fields = {
  __typename?: 'zappi_minute_max_fields';
  boostloadpower1?: Maybe<Scalars['Float']>;
  boostloadpower2?: Maybe<Scalars['Float']>;
  boostloadpower3?: Maybe<Scalars['Float']>;
  divloadpower1?: Maybe<Scalars['Float']>;
  divloadpower2?: Maybe<Scalars['Float']>;
  divloadpower3?: Maybe<Scalars['Float']>;
  exportpower?: Maybe<Scalars['Float']>;
  externalctnegpower1?: Maybe<Scalars['Float']>;
  externalctnegpower2?: Maybe<Scalars['Float']>;
  externalctnegpower3?: Maybe<Scalars['Float']>;
  externalctpospower1?: Maybe<Scalars['Float']>;
  externalctpospower2?: Maybe<Scalars['Float']>;
  externalctpospower3?: Maybe<Scalars['Float']>;
  externalcttype1?: Maybe<Scalars['smallint']>;
  externalcttype2?: Maybe<Scalars['smallint']>;
  externalcttype3?: Maybe<Scalars['smallint']>;
  frequency?: Maybe<Scalars['Float']>;
  gennegpw?: Maybe<Scalars['Float']>;
  genpospw?: Maybe<Scalars['Float']>;
  heatsink?: Maybe<Scalars['Float']>;
  importpower?: Maybe<Scalars['Float']>;
  noseconds?: Maybe<Scalars['Int']>;
  serialno?: Maybe<Scalars['bigint']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  voltage1?: Maybe<Scalars['Float']>;
  voltage2?: Maybe<Scalars['Float']>;
  voltage3?: Maybe<Scalars['Float']>;
};

/** aggregate min on columns */
export type Zappi_Minute_Min_Fields = {
  __typename?: 'zappi_minute_min_fields';
  boostloadpower1?: Maybe<Scalars['Float']>;
  boostloadpower2?: Maybe<Scalars['Float']>;
  boostloadpower3?: Maybe<Scalars['Float']>;
  divloadpower1?: Maybe<Scalars['Float']>;
  divloadpower2?: Maybe<Scalars['Float']>;
  divloadpower3?: Maybe<Scalars['Float']>;
  exportpower?: Maybe<Scalars['Float']>;
  externalctnegpower1?: Maybe<Scalars['Float']>;
  externalctnegpower2?: Maybe<Scalars['Float']>;
  externalctnegpower3?: Maybe<Scalars['Float']>;
  externalctpospower1?: Maybe<Scalars['Float']>;
  externalctpospower2?: Maybe<Scalars['Float']>;
  externalctpospower3?: Maybe<Scalars['Float']>;
  externalcttype1?: Maybe<Scalars['smallint']>;
  externalcttype2?: Maybe<Scalars['smallint']>;
  externalcttype3?: Maybe<Scalars['smallint']>;
  frequency?: Maybe<Scalars['Float']>;
  gennegpw?: Maybe<Scalars['Float']>;
  genpospw?: Maybe<Scalars['Float']>;
  heatsink?: Maybe<Scalars['Float']>;
  importpower?: Maybe<Scalars['Float']>;
  noseconds?: Maybe<Scalars['Int']>;
  serialno?: Maybe<Scalars['bigint']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  voltage1?: Maybe<Scalars['Float']>;
  voltage2?: Maybe<Scalars['Float']>;
  voltage3?: Maybe<Scalars['Float']>;
};

/** response of any mutation on the table "zappi_minute" */
export type Zappi_Minute_Mutation_Response = {
  __typename?: 'zappi_minute_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Zappi_Minute>;
};

/** on_conflict condition type for table "zappi_minute" */
export type Zappi_Minute_On_Conflict = {
  constraint: Zappi_Minute_Constraint;
  update_columns?: Array<Zappi_Minute_Update_Column>;
  where?: InputMaybe<Zappi_Minute_Bool_Exp>;
};

/** Ordering options when selecting data from "zappi_minute". */
export type Zappi_Minute_Order_By = {
  boostloadpower1?: InputMaybe<Order_By>;
  boostloadpower2?: InputMaybe<Order_By>;
  boostloadpower3?: InputMaybe<Order_By>;
  divloadpower1?: InputMaybe<Order_By>;
  divloadpower2?: InputMaybe<Order_By>;
  divloadpower3?: InputMaybe<Order_By>;
  exportpower?: InputMaybe<Order_By>;
  externalctnegpower1?: InputMaybe<Order_By>;
  externalctnegpower2?: InputMaybe<Order_By>;
  externalctnegpower3?: InputMaybe<Order_By>;
  externalctpospower1?: InputMaybe<Order_By>;
  externalctpospower2?: InputMaybe<Order_By>;
  externalctpospower3?: InputMaybe<Order_By>;
  externalcttype1?: InputMaybe<Order_By>;
  externalcttype2?: InputMaybe<Order_By>;
  externalcttype3?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  gennegpw?: InputMaybe<Order_By>;
  genpospw?: InputMaybe<Order_By>;
  heatsink?: InputMaybe<Order_By>;
  importpower?: InputMaybe<Order_By>;
  noseconds?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  voltage1?: InputMaybe<Order_By>;
  voltage2?: InputMaybe<Order_By>;
  voltage3?: InputMaybe<Order_By>;
};

/** primary key columns input for table: zappi_minute */
export type Zappi_Minute_Pk_Columns_Input = {
  serialno: Scalars['bigint'];
  timestamp: Scalars['timestamp'];
};

/** select columns of table "zappi_minute" */
export enum Zappi_Minute_Select_Column {
  /** column name */
  Boostloadpower1 = 'boostloadpower1',
  /** column name */
  Boostloadpower2 = 'boostloadpower2',
  /** column name */
  Boostloadpower3 = 'boostloadpower3',
  /** column name */
  Divloadpower1 = 'divloadpower1',
  /** column name */
  Divloadpower2 = 'divloadpower2',
  /** column name */
  Divloadpower3 = 'divloadpower3',
  /** column name */
  Exportpower = 'exportpower',
  /** column name */
  Externalctnegpower1 = 'externalctnegpower1',
  /** column name */
  Externalctnegpower2 = 'externalctnegpower2',
  /** column name */
  Externalctnegpower3 = 'externalctnegpower3',
  /** column name */
  Externalctpospower1 = 'externalctpospower1',
  /** column name */
  Externalctpospower2 = 'externalctpospower2',
  /** column name */
  Externalctpospower3 = 'externalctpospower3',
  /** column name */
  Externalcttype1 = 'externalcttype1',
  /** column name */
  Externalcttype2 = 'externalcttype2',
  /** column name */
  Externalcttype3 = 'externalcttype3',
  /** column name */
  Frequency = 'frequency',
  /** column name */
  Gennegpw = 'gennegpw',
  /** column name */
  Genpospw = 'genpospw',
  /** column name */
  Heatsink = 'heatsink',
  /** column name */
  Importpower = 'importpower',
  /** column name */
  Noseconds = 'noseconds',
  /** column name */
  Serialno = 'serialno',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Voltage1 = 'voltage1',
  /** column name */
  Voltage2 = 'voltage2',
  /** column name */
  Voltage3 = 'voltage3',
}

/** input type for updating data in table "zappi_minute" */
export type Zappi_Minute_Set_Input = {
  boostloadpower1?: InputMaybe<Scalars['Float']>;
  boostloadpower2?: InputMaybe<Scalars['Float']>;
  boostloadpower3?: InputMaybe<Scalars['Float']>;
  divloadpower1?: InputMaybe<Scalars['Float']>;
  divloadpower2?: InputMaybe<Scalars['Float']>;
  divloadpower3?: InputMaybe<Scalars['Float']>;
  exportpower?: InputMaybe<Scalars['Float']>;
  externalctnegpower1?: InputMaybe<Scalars['Float']>;
  externalctnegpower2?: InputMaybe<Scalars['Float']>;
  externalctnegpower3?: InputMaybe<Scalars['Float']>;
  externalctpospower1?: InputMaybe<Scalars['Float']>;
  externalctpospower2?: InputMaybe<Scalars['Float']>;
  externalctpospower3?: InputMaybe<Scalars['Float']>;
  externalcttype1?: InputMaybe<Scalars['smallint']>;
  externalcttype2?: InputMaybe<Scalars['smallint']>;
  externalcttype3?: InputMaybe<Scalars['smallint']>;
  frequency?: InputMaybe<Scalars['Float']>;
  gennegpw?: InputMaybe<Scalars['Float']>;
  genpospw?: InputMaybe<Scalars['Float']>;
  heatsink?: InputMaybe<Scalars['Float']>;
  importpower?: InputMaybe<Scalars['Float']>;
  noseconds?: InputMaybe<Scalars['Int']>;
  serialno?: InputMaybe<Scalars['bigint']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  voltage1?: InputMaybe<Scalars['Float']>;
  voltage2?: InputMaybe<Scalars['Float']>;
  voltage3?: InputMaybe<Scalars['Float']>;
};

/** aggregate stddev on columns */
export type Zappi_Minute_Stddev_Fields = {
  __typename?: 'zappi_minute_stddev_fields';
  boostloadpower1?: Maybe<Scalars['Float']>;
  boostloadpower2?: Maybe<Scalars['Float']>;
  boostloadpower3?: Maybe<Scalars['Float']>;
  divloadpower1?: Maybe<Scalars['Float']>;
  divloadpower2?: Maybe<Scalars['Float']>;
  divloadpower3?: Maybe<Scalars['Float']>;
  exportpower?: Maybe<Scalars['Float']>;
  externalctnegpower1?: Maybe<Scalars['Float']>;
  externalctnegpower2?: Maybe<Scalars['Float']>;
  externalctnegpower3?: Maybe<Scalars['Float']>;
  externalctpospower1?: Maybe<Scalars['Float']>;
  externalctpospower2?: Maybe<Scalars['Float']>;
  externalctpospower3?: Maybe<Scalars['Float']>;
  externalcttype1?: Maybe<Scalars['Float']>;
  externalcttype2?: Maybe<Scalars['Float']>;
  externalcttype3?: Maybe<Scalars['Float']>;
  frequency?: Maybe<Scalars['Float']>;
  gennegpw?: Maybe<Scalars['Float']>;
  genpospw?: Maybe<Scalars['Float']>;
  heatsink?: Maybe<Scalars['Float']>;
  importpower?: Maybe<Scalars['Float']>;
  noseconds?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  voltage1?: Maybe<Scalars['Float']>;
  voltage2?: Maybe<Scalars['Float']>;
  voltage3?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Zappi_Minute_Stddev_Pop_Fields = {
  __typename?: 'zappi_minute_stddev_pop_fields';
  boostloadpower1?: Maybe<Scalars['Float']>;
  boostloadpower2?: Maybe<Scalars['Float']>;
  boostloadpower3?: Maybe<Scalars['Float']>;
  divloadpower1?: Maybe<Scalars['Float']>;
  divloadpower2?: Maybe<Scalars['Float']>;
  divloadpower3?: Maybe<Scalars['Float']>;
  exportpower?: Maybe<Scalars['Float']>;
  externalctnegpower1?: Maybe<Scalars['Float']>;
  externalctnegpower2?: Maybe<Scalars['Float']>;
  externalctnegpower3?: Maybe<Scalars['Float']>;
  externalctpospower1?: Maybe<Scalars['Float']>;
  externalctpospower2?: Maybe<Scalars['Float']>;
  externalctpospower3?: Maybe<Scalars['Float']>;
  externalcttype1?: Maybe<Scalars['Float']>;
  externalcttype2?: Maybe<Scalars['Float']>;
  externalcttype3?: Maybe<Scalars['Float']>;
  frequency?: Maybe<Scalars['Float']>;
  gennegpw?: Maybe<Scalars['Float']>;
  genpospw?: Maybe<Scalars['Float']>;
  heatsink?: Maybe<Scalars['Float']>;
  importpower?: Maybe<Scalars['Float']>;
  noseconds?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  voltage1?: Maybe<Scalars['Float']>;
  voltage2?: Maybe<Scalars['Float']>;
  voltage3?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Zappi_Minute_Stddev_Samp_Fields = {
  __typename?: 'zappi_minute_stddev_samp_fields';
  boostloadpower1?: Maybe<Scalars['Float']>;
  boostloadpower2?: Maybe<Scalars['Float']>;
  boostloadpower3?: Maybe<Scalars['Float']>;
  divloadpower1?: Maybe<Scalars['Float']>;
  divloadpower2?: Maybe<Scalars['Float']>;
  divloadpower3?: Maybe<Scalars['Float']>;
  exportpower?: Maybe<Scalars['Float']>;
  externalctnegpower1?: Maybe<Scalars['Float']>;
  externalctnegpower2?: Maybe<Scalars['Float']>;
  externalctnegpower3?: Maybe<Scalars['Float']>;
  externalctpospower1?: Maybe<Scalars['Float']>;
  externalctpospower2?: Maybe<Scalars['Float']>;
  externalctpospower3?: Maybe<Scalars['Float']>;
  externalcttype1?: Maybe<Scalars['Float']>;
  externalcttype2?: Maybe<Scalars['Float']>;
  externalcttype3?: Maybe<Scalars['Float']>;
  frequency?: Maybe<Scalars['Float']>;
  gennegpw?: Maybe<Scalars['Float']>;
  genpospw?: Maybe<Scalars['Float']>;
  heatsink?: Maybe<Scalars['Float']>;
  importpower?: Maybe<Scalars['Float']>;
  noseconds?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  voltage1?: Maybe<Scalars['Float']>;
  voltage2?: Maybe<Scalars['Float']>;
  voltage3?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Zappi_Minute_Sum_Fields = {
  __typename?: 'zappi_minute_sum_fields';
  boostloadpower1?: Maybe<Scalars['Float']>;
  boostloadpower2?: Maybe<Scalars['Float']>;
  boostloadpower3?: Maybe<Scalars['Float']>;
  divloadpower1?: Maybe<Scalars['Float']>;
  divloadpower2?: Maybe<Scalars['Float']>;
  divloadpower3?: Maybe<Scalars['Float']>;
  exportpower?: Maybe<Scalars['Float']>;
  externalctnegpower1?: Maybe<Scalars['Float']>;
  externalctnegpower2?: Maybe<Scalars['Float']>;
  externalctnegpower3?: Maybe<Scalars['Float']>;
  externalctpospower1?: Maybe<Scalars['Float']>;
  externalctpospower2?: Maybe<Scalars['Float']>;
  externalctpospower3?: Maybe<Scalars['Float']>;
  externalcttype1?: Maybe<Scalars['smallint']>;
  externalcttype2?: Maybe<Scalars['smallint']>;
  externalcttype3?: Maybe<Scalars['smallint']>;
  frequency?: Maybe<Scalars['Float']>;
  gennegpw?: Maybe<Scalars['Float']>;
  genpospw?: Maybe<Scalars['Float']>;
  heatsink?: Maybe<Scalars['Float']>;
  importpower?: Maybe<Scalars['Float']>;
  noseconds?: Maybe<Scalars['Int']>;
  serialno?: Maybe<Scalars['bigint']>;
  voltage1?: Maybe<Scalars['Float']>;
  voltage2?: Maybe<Scalars['Float']>;
  voltage3?: Maybe<Scalars['Float']>;
};

/** update columns of table "zappi_minute" */
export enum Zappi_Minute_Update_Column {
  /** column name */
  Boostloadpower1 = 'boostloadpower1',
  /** column name */
  Boostloadpower2 = 'boostloadpower2',
  /** column name */
  Boostloadpower3 = 'boostloadpower3',
  /** column name */
  Divloadpower1 = 'divloadpower1',
  /** column name */
  Divloadpower2 = 'divloadpower2',
  /** column name */
  Divloadpower3 = 'divloadpower3',
  /** column name */
  Exportpower = 'exportpower',
  /** column name */
  Externalctnegpower1 = 'externalctnegpower1',
  /** column name */
  Externalctnegpower2 = 'externalctnegpower2',
  /** column name */
  Externalctnegpower3 = 'externalctnegpower3',
  /** column name */
  Externalctpospower1 = 'externalctpospower1',
  /** column name */
  Externalctpospower2 = 'externalctpospower2',
  /** column name */
  Externalctpospower3 = 'externalctpospower3',
  /** column name */
  Externalcttype1 = 'externalcttype1',
  /** column name */
  Externalcttype2 = 'externalcttype2',
  /** column name */
  Externalcttype3 = 'externalcttype3',
  /** column name */
  Frequency = 'frequency',
  /** column name */
  Gennegpw = 'gennegpw',
  /** column name */
  Genpospw = 'genpospw',
  /** column name */
  Heatsink = 'heatsink',
  /** column name */
  Importpower = 'importpower',
  /** column name */
  Noseconds = 'noseconds',
  /** column name */
  Serialno = 'serialno',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Voltage1 = 'voltage1',
  /** column name */
  Voltage2 = 'voltage2',
  /** column name */
  Voltage3 = 'voltage3',
}

/** aggregate var_pop on columns */
export type Zappi_Minute_Var_Pop_Fields = {
  __typename?: 'zappi_minute_var_pop_fields';
  boostloadpower1?: Maybe<Scalars['Float']>;
  boostloadpower2?: Maybe<Scalars['Float']>;
  boostloadpower3?: Maybe<Scalars['Float']>;
  divloadpower1?: Maybe<Scalars['Float']>;
  divloadpower2?: Maybe<Scalars['Float']>;
  divloadpower3?: Maybe<Scalars['Float']>;
  exportpower?: Maybe<Scalars['Float']>;
  externalctnegpower1?: Maybe<Scalars['Float']>;
  externalctnegpower2?: Maybe<Scalars['Float']>;
  externalctnegpower3?: Maybe<Scalars['Float']>;
  externalctpospower1?: Maybe<Scalars['Float']>;
  externalctpospower2?: Maybe<Scalars['Float']>;
  externalctpospower3?: Maybe<Scalars['Float']>;
  externalcttype1?: Maybe<Scalars['Float']>;
  externalcttype2?: Maybe<Scalars['Float']>;
  externalcttype3?: Maybe<Scalars['Float']>;
  frequency?: Maybe<Scalars['Float']>;
  gennegpw?: Maybe<Scalars['Float']>;
  genpospw?: Maybe<Scalars['Float']>;
  heatsink?: Maybe<Scalars['Float']>;
  importpower?: Maybe<Scalars['Float']>;
  noseconds?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  voltage1?: Maybe<Scalars['Float']>;
  voltage2?: Maybe<Scalars['Float']>;
  voltage3?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Zappi_Minute_Var_Samp_Fields = {
  __typename?: 'zappi_minute_var_samp_fields';
  boostloadpower1?: Maybe<Scalars['Float']>;
  boostloadpower2?: Maybe<Scalars['Float']>;
  boostloadpower3?: Maybe<Scalars['Float']>;
  divloadpower1?: Maybe<Scalars['Float']>;
  divloadpower2?: Maybe<Scalars['Float']>;
  divloadpower3?: Maybe<Scalars['Float']>;
  exportpower?: Maybe<Scalars['Float']>;
  externalctnegpower1?: Maybe<Scalars['Float']>;
  externalctnegpower2?: Maybe<Scalars['Float']>;
  externalctnegpower3?: Maybe<Scalars['Float']>;
  externalctpospower1?: Maybe<Scalars['Float']>;
  externalctpospower2?: Maybe<Scalars['Float']>;
  externalctpospower3?: Maybe<Scalars['Float']>;
  externalcttype1?: Maybe<Scalars['Float']>;
  externalcttype2?: Maybe<Scalars['Float']>;
  externalcttype3?: Maybe<Scalars['Float']>;
  frequency?: Maybe<Scalars['Float']>;
  gennegpw?: Maybe<Scalars['Float']>;
  genpospw?: Maybe<Scalars['Float']>;
  heatsink?: Maybe<Scalars['Float']>;
  importpower?: Maybe<Scalars['Float']>;
  noseconds?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  voltage1?: Maybe<Scalars['Float']>;
  voltage2?: Maybe<Scalars['Float']>;
  voltage3?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Zappi_Minute_Variance_Fields = {
  __typename?: 'zappi_minute_variance_fields';
  boostloadpower1?: Maybe<Scalars['Float']>;
  boostloadpower2?: Maybe<Scalars['Float']>;
  boostloadpower3?: Maybe<Scalars['Float']>;
  divloadpower1?: Maybe<Scalars['Float']>;
  divloadpower2?: Maybe<Scalars['Float']>;
  divloadpower3?: Maybe<Scalars['Float']>;
  exportpower?: Maybe<Scalars['Float']>;
  externalctnegpower1?: Maybe<Scalars['Float']>;
  externalctnegpower2?: Maybe<Scalars['Float']>;
  externalctnegpower3?: Maybe<Scalars['Float']>;
  externalctpospower1?: Maybe<Scalars['Float']>;
  externalctpospower2?: Maybe<Scalars['Float']>;
  externalctpospower3?: Maybe<Scalars['Float']>;
  externalcttype1?: Maybe<Scalars['Float']>;
  externalcttype2?: Maybe<Scalars['Float']>;
  externalcttype3?: Maybe<Scalars['Float']>;
  frequency?: Maybe<Scalars['Float']>;
  gennegpw?: Maybe<Scalars['Float']>;
  genpospw?: Maybe<Scalars['Float']>;
  heatsink?: Maybe<Scalars['Float']>;
  importpower?: Maybe<Scalars['Float']>;
  noseconds?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  voltage1?: Maybe<Scalars['Float']>;
  voltage2?: Maybe<Scalars['Float']>;
  voltage3?: Maybe<Scalars['Float']>;
};

/** response of any mutation on the table "zappi" */
export type Zappi_Mutation_Response = {
  __typename?: 'zappi_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Zappi>;
};

/** input type for inserting object relation for remote table "zappi" */
export type Zappi_Obj_Rel_Insert_Input = {
  data: Zappi_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Zappi_On_Conflict>;
};

/** on_conflict condition type for table "zappi" */
export type Zappi_On_Conflict = {
  constraint: Zappi_Constraint;
  update_columns?: Array<Zappi_Update_Column>;
  where?: InputMaybe<Zappi_Bool_Exp>;
};

/** Ordering options when selecting data from "zappi". */
export type Zappi_Order_By = {
  agggroupno?: InputMaybe<Order_By>;
  agglock?: InputMaybe<Order_By>;
  aggregation_datum?: InputMaybe<Aggregation_Data_Order_By>;
  aggregationdataid?: InputMaybe<Order_By>;
  boostmanual?: InputMaybe<Order_By>;
  boostsmart?: InputMaybe<Order_By>;
  boosttimed?: InputMaybe<Order_By>;
  bootloaderversion?: InputMaybe<Order_By>;
  chargeenergy?: InputMaybe<Order_By>;
  commandseqno?: InputMaybe<Order_By>;
  configappdata?: InputMaybe<Order_By>;
  configappdone?: InputMaybe<Order_By>;
  configbootdata?: InputMaybe<Order_By>;
  configbootdone?: InputMaybe<Order_By>;
  configlength?: InputMaybe<Order_By>;
  configoffset?: InputMaybe<Order_By>;
  configstate?: InputMaybe<Order_By>;
  configstructure?: InputMaybe<Order_By>;
  configversion?: InputMaybe<Order_By>;
  createdat?: InputMaybe<Order_By>;
  ct1?: InputMaybe<Order_By>;
  ct2?: InputMaybe<Order_By>;
  ct3?: InputMaybe<Order_By>;
  ct4?: InputMaybe<Order_By>;
  ct5?: InputMaybe<Order_By>;
  ct6?: InputMaybe<Order_By>;
  ct7?: InputMaybe<Order_By>;
  ct8?: InputMaybe<Order_By>;
  ct9?: InputMaybe<Order_By>;
  ct10?: InputMaybe<Order_By>;
  ct11?: InputMaybe<Order_By>;
  ct12?: InputMaybe<Order_By>;
  ct13?: InputMaybe<Order_By>;
  ct14?: InputMaybe<Order_By>;
  ct15?: InputMaybe<Order_By>;
  ct16?: InputMaybe<Order_By>;
  currentboostremaining?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
  deviceaddressraw?: InputMaybe<Order_By>;
  deviceclass?: InputMaybe<Order_By>;
  deviceconfigtime?: InputMaybe<Order_By>;
  deviceinstance?: InputMaybe<Order_By>;
  dsrdataack?: InputMaybe<Order_By>;
  dsrdatacsn?: InputMaybe<Order_By>;
  dsrdatafda?: InputMaybe<Order_By>;
  dsrdatafde?: InputMaybe<Order_By>;
  dsrdatafdn?: InputMaybe<Order_By>;
  dsrdatafua?: InputMaybe<Order_By>;
  dsrdatafue?: InputMaybe<Order_By>;
  dsrdatafun?: InputMaybe<Order_By>;
  dsrdatalca?: InputMaybe<Order_By>;
  dsrdatalce?: InputMaybe<Order_By>;
  dsrdataload?: InputMaybe<Order_By>;
  dsrdataseconds?: InputMaybe<Order_By>;
  ethernetlink?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  highpower?: InputMaybe<Order_By>;
  hub?: InputMaybe<Hub_Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  isaggregated?: InputMaybe<Order_By>;
  lockedstatuschargesessionallowed?: InputMaybe<Order_By>;
  lockedstatuschargewhenlocked?: InputMaybe<Order_By>;
  lockedstatuslockednow?: InputMaybe<Order_By>;
  lockedstatuslockwhenpluggedin?: InputMaybe<Order_By>;
  lockedstatuslockwhenunplugged?: InputMaybe<Order_By>;
  lockedstatusmicroprocessorti?: InputMaybe<Order_By>;
  maxpower?: InputMaybe<Order_By>;
  melibversion?: InputMaybe<Order_By>;
  melinkversion?: InputMaybe<Order_By>;
  minpower?: InputMaybe<Order_By>;
  normalboostkwh?: InputMaybe<Order_By>;
  phase?: InputMaybe<Order_By>;
  pilotstate?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  prioritychanges?: InputMaybe<Order_By>;
  productcode?: InputMaybe<Order_By>;
  pwmdatapulsewidthmodulationinpercentage?: InputMaybe<Order_By>;
  pwmdatarcdacinnanoamps?: InputMaybe<Order_By>;
  pwmdatarcddcinnanoamps?: InputMaybe<Order_By>;
  pwmdatareturnrcdacinnanoamps?: InputMaybe<Order_By>;
  pwmdatastatecpu?: InputMaybe<Order_By>;
  pwmdatastatercdboard?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverconfigtime?: InputMaybe<Order_By>;
  smartboosthour?: InputMaybe<Order_By>;
  smartboostkwh?: InputMaybe<Order_By>;
  smartboostminute?: InputMaybe<Order_By>;
  specialversion?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  stubloaderversion?: InputMaybe<Order_By>;
  threephase?: InputMaybe<Order_By>;
  updatedat?: InputMaybe<Order_By>;
  vhub?: InputMaybe<Order_By>;
  voltage?: InputMaybe<Order_By>;
  voltage2?: InputMaybe<Order_By>;
  voltage3?: InputMaybe<Order_By>;
  wifilink?: InputMaybe<Order_By>;
  zappi2?: InputMaybe<Order_By>;
  zappimode?: InputMaybe<Order_By>;
};

/** primary key columns input for table: zappi */
export type Zappi_Pk_Columns_Input = {
  serialno: Scalars['bigint'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Zappi_Prepend_Input = {
  ct1?: InputMaybe<Scalars['jsonb']>;
  ct2?: InputMaybe<Scalars['jsonb']>;
  ct3?: InputMaybe<Scalars['jsonb']>;
  ct4?: InputMaybe<Scalars['jsonb']>;
  ct5?: InputMaybe<Scalars['jsonb']>;
  ct6?: InputMaybe<Scalars['jsonb']>;
  ct7?: InputMaybe<Scalars['jsonb']>;
  ct8?: InputMaybe<Scalars['jsonb']>;
  ct9?: InputMaybe<Scalars['jsonb']>;
  ct10?: InputMaybe<Scalars['jsonb']>;
  ct11?: InputMaybe<Scalars['jsonb']>;
  ct12?: InputMaybe<Scalars['jsonb']>;
  ct13?: InputMaybe<Scalars['jsonb']>;
  ct14?: InputMaybe<Scalars['jsonb']>;
  ct15?: InputMaybe<Scalars['jsonb']>;
  ct16?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "zappi" */
export enum Zappi_Select_Column {
  /** column name */
  Agggroupno = 'agggroupno',
  /** column name */
  Agglock = 'agglock',
  /** column name */
  Aggregationdataid = 'aggregationdataid',
  /** column name */
  Boostmanual = 'boostmanual',
  /** column name */
  Boostsmart = 'boostsmart',
  /** column name */
  Boosttimed = 'boosttimed',
  /** column name */
  Bootloaderversion = 'bootloaderversion',
  /** column name */
  Chargeenergy = 'chargeenergy',
  /** column name */
  Commandseqno = 'commandseqno',
  /** column name */
  Configappdata = 'configappdata',
  /** column name */
  Configappdone = 'configappdone',
  /** column name */
  Configbootdata = 'configbootdata',
  /** column name */
  Configbootdone = 'configbootdone',
  /** column name */
  Configlength = 'configlength',
  /** column name */
  Configoffset = 'configoffset',
  /** column name */
  Configstate = 'configstate',
  /** column name */
  Configstructure = 'configstructure',
  /** column name */
  Configversion = 'configversion',
  /** column name */
  Createdat = 'createdat',
  /** column name */
  Ct1 = 'ct1',
  /** column name */
  Ct2 = 'ct2',
  /** column name */
  Ct3 = 'ct3',
  /** column name */
  Ct4 = 'ct4',
  /** column name */
  Ct5 = 'ct5',
  /** column name */
  Ct6 = 'ct6',
  /** column name */
  Ct7 = 'ct7',
  /** column name */
  Ct8 = 'ct8',
  /** column name */
  Ct9 = 'ct9',
  /** column name */
  Ct10 = 'ct10',
  /** column name */
  Ct11 = 'ct11',
  /** column name */
  Ct12 = 'ct12',
  /** column name */
  Ct13 = 'ct13',
  /** column name */
  Ct14 = 'ct14',
  /** column name */
  Ct15 = 'ct15',
  /** column name */
  Ct16 = 'ct16',
  /** column name */
  Currentboostremaining = 'currentboostremaining',
  /** column name */
  Currentversion = 'currentversion',
  /** column name */
  Deviceaddressraw = 'deviceaddressraw',
  /** column name */
  Deviceclass = 'deviceclass',
  /** column name */
  Deviceconfigtime = 'deviceconfigtime',
  /** column name */
  Deviceinstance = 'deviceinstance',
  /** column name */
  Dsrdataack = 'dsrdataack',
  /** column name */
  Dsrdatacsn = 'dsrdatacsn',
  /** column name */
  Dsrdatafda = 'dsrdatafda',
  /** column name */
  Dsrdatafde = 'dsrdatafde',
  /** column name */
  Dsrdatafdn = 'dsrdatafdn',
  /** column name */
  Dsrdatafua = 'dsrdatafua',
  /** column name */
  Dsrdatafue = 'dsrdatafue',
  /** column name */
  Dsrdatafun = 'dsrdatafun',
  /** column name */
  Dsrdatalca = 'dsrdatalca',
  /** column name */
  Dsrdatalce = 'dsrdatalce',
  /** column name */
  Dsrdataload = 'dsrdataload',
  /** column name */
  Dsrdataseconds = 'dsrdataseconds',
  /** column name */
  Ethernetlink = 'ethernetlink',
  /** column name */
  Frequency = 'frequency',
  /** column name */
  Highpower = 'highpower',
  /** column name */
  Hubserialno = 'hubserialno',
  /** column name */
  Isaggregated = 'isaggregated',
  /** column name */
  Lockedstatuschargesessionallowed = 'lockedstatuschargesessionallowed',
  /** column name */
  Lockedstatuschargewhenlocked = 'lockedstatuschargewhenlocked',
  /** column name */
  Lockedstatuslockednow = 'lockedstatuslockednow',
  /** column name */
  Lockedstatuslockwhenpluggedin = 'lockedstatuslockwhenpluggedin',
  /** column name */
  Lockedstatuslockwhenunplugged = 'lockedstatuslockwhenunplugged',
  /** column name */
  Lockedstatusmicroprocessorti = 'lockedstatusmicroprocessorti',
  /** column name */
  Maxpower = 'maxpower',
  /** column name */
  Melibversion = 'melibversion',
  /** column name */
  Melinkversion = 'melinkversion',
  /** column name */
  Minpower = 'minpower',
  /** column name */
  Normalboostkwh = 'normalboostkwh',
  /** column name */
  Phase = 'phase',
  /** column name */
  Pilotstate = 'pilotstate',
  /** column name */
  Priority = 'priority',
  /** column name */
  Prioritychanges = 'prioritychanges',
  /** column name */
  Productcode = 'productcode',
  /** column name */
  Pwmdatapulsewidthmodulationinpercentage = 'pwmdatapulsewidthmodulationinpercentage',
  /** column name */
  Pwmdatarcdacinnanoamps = 'pwmdatarcdacinnanoamps',
  /** column name */
  Pwmdatarcddcinnanoamps = 'pwmdatarcddcinnanoamps',
  /** column name */
  Pwmdatareturnrcdacinnanoamps = 'pwmdatareturnrcdacinnanoamps',
  /** column name */
  Pwmdatastatecpu = 'pwmdatastatecpu',
  /** column name */
  Pwmdatastatercdboard = 'pwmdatastatercdboard',
  /** column name */
  Serialno = 'serialno',
  /** column name */
  Serverconfigtime = 'serverconfigtime',
  /** column name */
  Smartboosthour = 'smartboosthour',
  /** column name */
  Smartboostkwh = 'smartboostkwh',
  /** column name */
  Smartboostminute = 'smartboostminute',
  /** column name */
  Specialversion = 'specialversion',
  /** column name */
  State = 'state',
  /** column name */
  Stubloaderversion = 'stubloaderversion',
  /** column name */
  Threephase = 'threephase',
  /** column name */
  Updatedat = 'updatedat',
  /** column name */
  Vhub = 'vhub',
  /** column name */
  Voltage = 'voltage',
  /** column name */
  Voltage2 = 'voltage2',
  /** column name */
  Voltage3 = 'voltage3',
  /** column name */
  Wifilink = 'wifilink',
  /** column name */
  Zappi2 = 'zappi2',
  /** column name */
  Zappimode = 'zappimode',
}

/** input type for updating data in table "zappi" */
export type Zappi_Set_Input = {
  agggroupno?: InputMaybe<Scalars['Int']>;
  agglock?: InputMaybe<Scalars['smallint']>;
  aggregationdataid?: InputMaybe<Scalars['Int']>;
  boostmanual?: InputMaybe<Scalars['Boolean']>;
  boostsmart?: InputMaybe<Scalars['Boolean']>;
  boosttimed?: InputMaybe<Scalars['Boolean']>;
  bootloaderversion?: InputMaybe<Scalars['Int']>;
  chargeenergy?: InputMaybe<Scalars['Float']>;
  commandseqno?: InputMaybe<Scalars['smallint']>;
  configappdata?: InputMaybe<Scalars['bytea']>;
  configappdone?: InputMaybe<Scalars['Boolean']>;
  configbootdata?: InputMaybe<Scalars['bytea']>;
  configbootdone?: InputMaybe<Scalars['Boolean']>;
  configlength?: InputMaybe<Scalars['smallint']>;
  configoffset?: InputMaybe<Scalars['smallint']>;
  configstate?: InputMaybe<Scalars['smallint']>;
  configstructure?: InputMaybe<Scalars['smallint']>;
  configversion?: InputMaybe<Scalars['smallint']>;
  createdat?: InputMaybe<Scalars['timestamptz']>;
  ct1?: InputMaybe<Scalars['jsonb']>;
  ct2?: InputMaybe<Scalars['jsonb']>;
  ct3?: InputMaybe<Scalars['jsonb']>;
  ct4?: InputMaybe<Scalars['jsonb']>;
  ct5?: InputMaybe<Scalars['jsonb']>;
  ct6?: InputMaybe<Scalars['jsonb']>;
  ct7?: InputMaybe<Scalars['jsonb']>;
  ct8?: InputMaybe<Scalars['jsonb']>;
  ct9?: InputMaybe<Scalars['jsonb']>;
  ct10?: InputMaybe<Scalars['jsonb']>;
  ct11?: InputMaybe<Scalars['jsonb']>;
  ct12?: InputMaybe<Scalars['jsonb']>;
  ct13?: InputMaybe<Scalars['jsonb']>;
  ct14?: InputMaybe<Scalars['jsonb']>;
  ct15?: InputMaybe<Scalars['jsonb']>;
  ct16?: InputMaybe<Scalars['jsonb']>;
  currentboostremaining?: InputMaybe<Scalars['smallint']>;
  currentversion?: InputMaybe<Scalars['Int']>;
  deviceaddressraw?: InputMaybe<Scalars['Int']>;
  deviceclass?: InputMaybe<Scalars['String']>;
  deviceconfigtime?: InputMaybe<Scalars['bigint']>;
  deviceinstance?: InputMaybe<Scalars['Int']>;
  dsrdataack?: InputMaybe<Scalars['smallint']>;
  dsrdatacsn?: InputMaybe<Scalars['smallint']>;
  dsrdatafda?: InputMaybe<Scalars['Boolean']>;
  dsrdatafde?: InputMaybe<Scalars['Boolean']>;
  dsrdatafdn?: InputMaybe<Scalars['Boolean']>;
  dsrdatafua?: InputMaybe<Scalars['Boolean']>;
  dsrdatafue?: InputMaybe<Scalars['Boolean']>;
  dsrdatafun?: InputMaybe<Scalars['Boolean']>;
  dsrdatalca?: InputMaybe<Scalars['Boolean']>;
  dsrdatalce?: InputMaybe<Scalars['Boolean']>;
  dsrdataload?: InputMaybe<Scalars['smallint']>;
  dsrdataseconds?: InputMaybe<Scalars['smallint']>;
  ethernetlink?: InputMaybe<Scalars['Boolean']>;
  frequency?: InputMaybe<Scalars['smallint']>;
  highpower?: InputMaybe<Scalars['Boolean']>;
  hubserialno?: InputMaybe<Scalars['bigint']>;
  isaggregated?: InputMaybe<Scalars['Boolean']>;
  lockedstatuschargesessionallowed?: InputMaybe<Scalars['Boolean']>;
  lockedstatuschargewhenlocked?: InputMaybe<Scalars['Boolean']>;
  lockedstatuslockednow?: InputMaybe<Scalars['Boolean']>;
  lockedstatuslockwhenpluggedin?: InputMaybe<Scalars['Boolean']>;
  lockedstatuslockwhenunplugged?: InputMaybe<Scalars['Boolean']>;
  lockedstatusmicroprocessorti?: InputMaybe<Scalars['Boolean']>;
  maxpower?: InputMaybe<Scalars['Int']>;
  melibversion?: InputMaybe<Scalars['Int']>;
  melinkversion?: InputMaybe<Scalars['Int']>;
  minpower?: InputMaybe<Scalars['Int']>;
  normalboostkwh?: InputMaybe<Scalars['smallint']>;
  phase?: InputMaybe<Scalars['smallint']>;
  pilotstate?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['smallint']>;
  prioritychanges?: InputMaybe<Scalars['smallint']>;
  productcode?: InputMaybe<Scalars['smallint']>;
  pwmdatapulsewidthmodulationinpercentage?: InputMaybe<Scalars['Float']>;
  pwmdatarcdacinnanoamps?: InputMaybe<Scalars['Int']>;
  pwmdatarcddcinnanoamps?: InputMaybe<Scalars['Int']>;
  pwmdatareturnrcdacinnanoamps?: InputMaybe<Scalars['Int']>;
  pwmdatastatecpu?: InputMaybe<Scalars['smallint']>;
  pwmdatastatercdboard?: InputMaybe<Scalars['smallint']>;
  serialno?: InputMaybe<Scalars['bigint']>;
  serverconfigtime?: InputMaybe<Scalars['Int']>;
  smartboosthour?: InputMaybe<Scalars['smallint']>;
  smartboostkwh?: InputMaybe<Scalars['smallint']>;
  smartboostminute?: InputMaybe<Scalars['smallint']>;
  specialversion?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  stubloaderversion?: InputMaybe<Scalars['Int']>;
  threephase?: InputMaybe<Scalars['Boolean']>;
  updatedat?: InputMaybe<Scalars['timestamptz']>;
  vhub?: InputMaybe<Scalars['Boolean']>;
  voltage?: InputMaybe<Scalars['smallint']>;
  voltage2?: InputMaybe<Scalars['smallint']>;
  voltage3?: InputMaybe<Scalars['smallint']>;
  wifilink?: InputMaybe<Scalars['Boolean']>;
  zappi2?: InputMaybe<Scalars['Boolean']>;
  zappimode?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Zappi_Stddev_Fields = {
  __typename?: 'zappi_stddev_fields';
  agggroupno?: Maybe<Scalars['Float']>;
  agglock?: Maybe<Scalars['Float']>;
  aggregationdataid?: Maybe<Scalars['Float']>;
  bootloaderversion?: Maybe<Scalars['Float']>;
  chargeenergy?: Maybe<Scalars['Float']>;
  commandseqno?: Maybe<Scalars['Float']>;
  configlength?: Maybe<Scalars['Float']>;
  configoffset?: Maybe<Scalars['Float']>;
  configstate?: Maybe<Scalars['Float']>;
  configstructure?: Maybe<Scalars['Float']>;
  configversion?: Maybe<Scalars['Float']>;
  currentboostremaining?: Maybe<Scalars['Float']>;
  currentversion?: Maybe<Scalars['Float']>;
  deviceaddressraw?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  deviceinstance?: Maybe<Scalars['Float']>;
  dsrdataack?: Maybe<Scalars['Float']>;
  dsrdatacsn?: Maybe<Scalars['Float']>;
  dsrdataload?: Maybe<Scalars['Float']>;
  dsrdataseconds?: Maybe<Scalars['Float']>;
  frequency?: Maybe<Scalars['Float']>;
  hubserialno?: Maybe<Scalars['Float']>;
  maxpower?: Maybe<Scalars['Float']>;
  melibversion?: Maybe<Scalars['Float']>;
  melinkversion?: Maybe<Scalars['Float']>;
  minpower?: Maybe<Scalars['Float']>;
  normalboostkwh?: Maybe<Scalars['Float']>;
  phase?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
  prioritychanges?: Maybe<Scalars['Float']>;
  productcode?: Maybe<Scalars['Float']>;
  pwmdatapulsewidthmodulationinpercentage?: Maybe<Scalars['Float']>;
  pwmdatarcdacinnanoamps?: Maybe<Scalars['Float']>;
  pwmdatarcddcinnanoamps?: Maybe<Scalars['Float']>;
  pwmdatareturnrcdacinnanoamps?: Maybe<Scalars['Float']>;
  pwmdatastatecpu?: Maybe<Scalars['Float']>;
  pwmdatastatercdboard?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  serverconfigtime?: Maybe<Scalars['Float']>;
  smartboosthour?: Maybe<Scalars['Float']>;
  smartboostkwh?: Maybe<Scalars['Float']>;
  smartboostminute?: Maybe<Scalars['Float']>;
  stubloaderversion?: Maybe<Scalars['Float']>;
  voltage?: Maybe<Scalars['Float']>;
  voltage2?: Maybe<Scalars['Float']>;
  voltage3?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "zappi" */
export type Zappi_Stddev_Order_By = {
  agggroupno?: InputMaybe<Order_By>;
  agglock?: InputMaybe<Order_By>;
  aggregationdataid?: InputMaybe<Order_By>;
  bootloaderversion?: InputMaybe<Order_By>;
  chargeenergy?: InputMaybe<Order_By>;
  commandseqno?: InputMaybe<Order_By>;
  configlength?: InputMaybe<Order_By>;
  configoffset?: InputMaybe<Order_By>;
  configstate?: InputMaybe<Order_By>;
  configstructure?: InputMaybe<Order_By>;
  configversion?: InputMaybe<Order_By>;
  currentboostremaining?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
  deviceaddressraw?: InputMaybe<Order_By>;
  deviceconfigtime?: InputMaybe<Order_By>;
  deviceinstance?: InputMaybe<Order_By>;
  dsrdataack?: InputMaybe<Order_By>;
  dsrdatacsn?: InputMaybe<Order_By>;
  dsrdataload?: InputMaybe<Order_By>;
  dsrdataseconds?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  maxpower?: InputMaybe<Order_By>;
  melibversion?: InputMaybe<Order_By>;
  melinkversion?: InputMaybe<Order_By>;
  minpower?: InputMaybe<Order_By>;
  normalboostkwh?: InputMaybe<Order_By>;
  phase?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  prioritychanges?: InputMaybe<Order_By>;
  productcode?: InputMaybe<Order_By>;
  pwmdatapulsewidthmodulationinpercentage?: InputMaybe<Order_By>;
  pwmdatarcdacinnanoamps?: InputMaybe<Order_By>;
  pwmdatarcddcinnanoamps?: InputMaybe<Order_By>;
  pwmdatareturnrcdacinnanoamps?: InputMaybe<Order_By>;
  pwmdatastatecpu?: InputMaybe<Order_By>;
  pwmdatastatercdboard?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverconfigtime?: InputMaybe<Order_By>;
  smartboosthour?: InputMaybe<Order_By>;
  smartboostkwh?: InputMaybe<Order_By>;
  smartboostminute?: InputMaybe<Order_By>;
  stubloaderversion?: InputMaybe<Order_By>;
  voltage?: InputMaybe<Order_By>;
  voltage2?: InputMaybe<Order_By>;
  voltage3?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Zappi_Stddev_Pop_Fields = {
  __typename?: 'zappi_stddev_pop_fields';
  agggroupno?: Maybe<Scalars['Float']>;
  agglock?: Maybe<Scalars['Float']>;
  aggregationdataid?: Maybe<Scalars['Float']>;
  bootloaderversion?: Maybe<Scalars['Float']>;
  chargeenergy?: Maybe<Scalars['Float']>;
  commandseqno?: Maybe<Scalars['Float']>;
  configlength?: Maybe<Scalars['Float']>;
  configoffset?: Maybe<Scalars['Float']>;
  configstate?: Maybe<Scalars['Float']>;
  configstructure?: Maybe<Scalars['Float']>;
  configversion?: Maybe<Scalars['Float']>;
  currentboostremaining?: Maybe<Scalars['Float']>;
  currentversion?: Maybe<Scalars['Float']>;
  deviceaddressraw?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  deviceinstance?: Maybe<Scalars['Float']>;
  dsrdataack?: Maybe<Scalars['Float']>;
  dsrdatacsn?: Maybe<Scalars['Float']>;
  dsrdataload?: Maybe<Scalars['Float']>;
  dsrdataseconds?: Maybe<Scalars['Float']>;
  frequency?: Maybe<Scalars['Float']>;
  hubserialno?: Maybe<Scalars['Float']>;
  maxpower?: Maybe<Scalars['Float']>;
  melibversion?: Maybe<Scalars['Float']>;
  melinkversion?: Maybe<Scalars['Float']>;
  minpower?: Maybe<Scalars['Float']>;
  normalboostkwh?: Maybe<Scalars['Float']>;
  phase?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
  prioritychanges?: Maybe<Scalars['Float']>;
  productcode?: Maybe<Scalars['Float']>;
  pwmdatapulsewidthmodulationinpercentage?: Maybe<Scalars['Float']>;
  pwmdatarcdacinnanoamps?: Maybe<Scalars['Float']>;
  pwmdatarcddcinnanoamps?: Maybe<Scalars['Float']>;
  pwmdatareturnrcdacinnanoamps?: Maybe<Scalars['Float']>;
  pwmdatastatecpu?: Maybe<Scalars['Float']>;
  pwmdatastatercdboard?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  serverconfigtime?: Maybe<Scalars['Float']>;
  smartboosthour?: Maybe<Scalars['Float']>;
  smartboostkwh?: Maybe<Scalars['Float']>;
  smartboostminute?: Maybe<Scalars['Float']>;
  stubloaderversion?: Maybe<Scalars['Float']>;
  voltage?: Maybe<Scalars['Float']>;
  voltage2?: Maybe<Scalars['Float']>;
  voltage3?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "zappi" */
export type Zappi_Stddev_Pop_Order_By = {
  agggroupno?: InputMaybe<Order_By>;
  agglock?: InputMaybe<Order_By>;
  aggregationdataid?: InputMaybe<Order_By>;
  bootloaderversion?: InputMaybe<Order_By>;
  chargeenergy?: InputMaybe<Order_By>;
  commandseqno?: InputMaybe<Order_By>;
  configlength?: InputMaybe<Order_By>;
  configoffset?: InputMaybe<Order_By>;
  configstate?: InputMaybe<Order_By>;
  configstructure?: InputMaybe<Order_By>;
  configversion?: InputMaybe<Order_By>;
  currentboostremaining?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
  deviceaddressraw?: InputMaybe<Order_By>;
  deviceconfigtime?: InputMaybe<Order_By>;
  deviceinstance?: InputMaybe<Order_By>;
  dsrdataack?: InputMaybe<Order_By>;
  dsrdatacsn?: InputMaybe<Order_By>;
  dsrdataload?: InputMaybe<Order_By>;
  dsrdataseconds?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  maxpower?: InputMaybe<Order_By>;
  melibversion?: InputMaybe<Order_By>;
  melinkversion?: InputMaybe<Order_By>;
  minpower?: InputMaybe<Order_By>;
  normalboostkwh?: InputMaybe<Order_By>;
  phase?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  prioritychanges?: InputMaybe<Order_By>;
  productcode?: InputMaybe<Order_By>;
  pwmdatapulsewidthmodulationinpercentage?: InputMaybe<Order_By>;
  pwmdatarcdacinnanoamps?: InputMaybe<Order_By>;
  pwmdatarcddcinnanoamps?: InputMaybe<Order_By>;
  pwmdatareturnrcdacinnanoamps?: InputMaybe<Order_By>;
  pwmdatastatecpu?: InputMaybe<Order_By>;
  pwmdatastatercdboard?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverconfigtime?: InputMaybe<Order_By>;
  smartboosthour?: InputMaybe<Order_By>;
  smartboostkwh?: InputMaybe<Order_By>;
  smartboostminute?: InputMaybe<Order_By>;
  stubloaderversion?: InputMaybe<Order_By>;
  voltage?: InputMaybe<Order_By>;
  voltage2?: InputMaybe<Order_By>;
  voltage3?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Zappi_Stddev_Samp_Fields = {
  __typename?: 'zappi_stddev_samp_fields';
  agggroupno?: Maybe<Scalars['Float']>;
  agglock?: Maybe<Scalars['Float']>;
  aggregationdataid?: Maybe<Scalars['Float']>;
  bootloaderversion?: Maybe<Scalars['Float']>;
  chargeenergy?: Maybe<Scalars['Float']>;
  commandseqno?: Maybe<Scalars['Float']>;
  configlength?: Maybe<Scalars['Float']>;
  configoffset?: Maybe<Scalars['Float']>;
  configstate?: Maybe<Scalars['Float']>;
  configstructure?: Maybe<Scalars['Float']>;
  configversion?: Maybe<Scalars['Float']>;
  currentboostremaining?: Maybe<Scalars['Float']>;
  currentversion?: Maybe<Scalars['Float']>;
  deviceaddressraw?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  deviceinstance?: Maybe<Scalars['Float']>;
  dsrdataack?: Maybe<Scalars['Float']>;
  dsrdatacsn?: Maybe<Scalars['Float']>;
  dsrdataload?: Maybe<Scalars['Float']>;
  dsrdataseconds?: Maybe<Scalars['Float']>;
  frequency?: Maybe<Scalars['Float']>;
  hubserialno?: Maybe<Scalars['Float']>;
  maxpower?: Maybe<Scalars['Float']>;
  melibversion?: Maybe<Scalars['Float']>;
  melinkversion?: Maybe<Scalars['Float']>;
  minpower?: Maybe<Scalars['Float']>;
  normalboostkwh?: Maybe<Scalars['Float']>;
  phase?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
  prioritychanges?: Maybe<Scalars['Float']>;
  productcode?: Maybe<Scalars['Float']>;
  pwmdatapulsewidthmodulationinpercentage?: Maybe<Scalars['Float']>;
  pwmdatarcdacinnanoamps?: Maybe<Scalars['Float']>;
  pwmdatarcddcinnanoamps?: Maybe<Scalars['Float']>;
  pwmdatareturnrcdacinnanoamps?: Maybe<Scalars['Float']>;
  pwmdatastatecpu?: Maybe<Scalars['Float']>;
  pwmdatastatercdboard?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  serverconfigtime?: Maybe<Scalars['Float']>;
  smartboosthour?: Maybe<Scalars['Float']>;
  smartboostkwh?: Maybe<Scalars['Float']>;
  smartboostminute?: Maybe<Scalars['Float']>;
  stubloaderversion?: Maybe<Scalars['Float']>;
  voltage?: Maybe<Scalars['Float']>;
  voltage2?: Maybe<Scalars['Float']>;
  voltage3?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "zappi" */
export type Zappi_Stddev_Samp_Order_By = {
  agggroupno?: InputMaybe<Order_By>;
  agglock?: InputMaybe<Order_By>;
  aggregationdataid?: InputMaybe<Order_By>;
  bootloaderversion?: InputMaybe<Order_By>;
  chargeenergy?: InputMaybe<Order_By>;
  commandseqno?: InputMaybe<Order_By>;
  configlength?: InputMaybe<Order_By>;
  configoffset?: InputMaybe<Order_By>;
  configstate?: InputMaybe<Order_By>;
  configstructure?: InputMaybe<Order_By>;
  configversion?: InputMaybe<Order_By>;
  currentboostremaining?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
  deviceaddressraw?: InputMaybe<Order_By>;
  deviceconfigtime?: InputMaybe<Order_By>;
  deviceinstance?: InputMaybe<Order_By>;
  dsrdataack?: InputMaybe<Order_By>;
  dsrdatacsn?: InputMaybe<Order_By>;
  dsrdataload?: InputMaybe<Order_By>;
  dsrdataseconds?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  maxpower?: InputMaybe<Order_By>;
  melibversion?: InputMaybe<Order_By>;
  melinkversion?: InputMaybe<Order_By>;
  minpower?: InputMaybe<Order_By>;
  normalboostkwh?: InputMaybe<Order_By>;
  phase?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  prioritychanges?: InputMaybe<Order_By>;
  productcode?: InputMaybe<Order_By>;
  pwmdatapulsewidthmodulationinpercentage?: InputMaybe<Order_By>;
  pwmdatarcdacinnanoamps?: InputMaybe<Order_By>;
  pwmdatarcddcinnanoamps?: InputMaybe<Order_By>;
  pwmdatareturnrcdacinnanoamps?: InputMaybe<Order_By>;
  pwmdatastatecpu?: InputMaybe<Order_By>;
  pwmdatastatercdboard?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverconfigtime?: InputMaybe<Order_By>;
  smartboosthour?: InputMaybe<Order_By>;
  smartboostkwh?: InputMaybe<Order_By>;
  smartboostminute?: InputMaybe<Order_By>;
  stubloaderversion?: InputMaybe<Order_By>;
  voltage?: InputMaybe<Order_By>;
  voltage2?: InputMaybe<Order_By>;
  voltage3?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Zappi_Sum_Fields = {
  __typename?: 'zappi_sum_fields';
  agggroupno?: Maybe<Scalars['Int']>;
  agglock?: Maybe<Scalars['smallint']>;
  aggregationdataid?: Maybe<Scalars['Int']>;
  bootloaderversion?: Maybe<Scalars['Int']>;
  chargeenergy?: Maybe<Scalars['Float']>;
  commandseqno?: Maybe<Scalars['smallint']>;
  configlength?: Maybe<Scalars['smallint']>;
  configoffset?: Maybe<Scalars['smallint']>;
  configstate?: Maybe<Scalars['smallint']>;
  configstructure?: Maybe<Scalars['smallint']>;
  configversion?: Maybe<Scalars['smallint']>;
  currentboostremaining?: Maybe<Scalars['smallint']>;
  currentversion?: Maybe<Scalars['Int']>;
  deviceaddressraw?: Maybe<Scalars['Int']>;
  deviceconfigtime?: Maybe<Scalars['bigint']>;
  deviceinstance?: Maybe<Scalars['Int']>;
  dsrdataack?: Maybe<Scalars['smallint']>;
  dsrdatacsn?: Maybe<Scalars['smallint']>;
  dsrdataload?: Maybe<Scalars['smallint']>;
  dsrdataseconds?: Maybe<Scalars['smallint']>;
  frequency?: Maybe<Scalars['smallint']>;
  hubserialno?: Maybe<Scalars['bigint']>;
  maxpower?: Maybe<Scalars['Int']>;
  melibversion?: Maybe<Scalars['Int']>;
  melinkversion?: Maybe<Scalars['Int']>;
  minpower?: Maybe<Scalars['Int']>;
  normalboostkwh?: Maybe<Scalars['smallint']>;
  phase?: Maybe<Scalars['smallint']>;
  priority?: Maybe<Scalars['smallint']>;
  prioritychanges?: Maybe<Scalars['smallint']>;
  productcode?: Maybe<Scalars['smallint']>;
  pwmdatapulsewidthmodulationinpercentage?: Maybe<Scalars['Float']>;
  pwmdatarcdacinnanoamps?: Maybe<Scalars['Int']>;
  pwmdatarcddcinnanoamps?: Maybe<Scalars['Int']>;
  pwmdatareturnrcdacinnanoamps?: Maybe<Scalars['Int']>;
  pwmdatastatecpu?: Maybe<Scalars['smallint']>;
  pwmdatastatercdboard?: Maybe<Scalars['smallint']>;
  serialno?: Maybe<Scalars['bigint']>;
  serverconfigtime?: Maybe<Scalars['Int']>;
  smartboosthour?: Maybe<Scalars['smallint']>;
  smartboostkwh?: Maybe<Scalars['smallint']>;
  smartboostminute?: Maybe<Scalars['smallint']>;
  stubloaderversion?: Maybe<Scalars['Int']>;
  voltage?: Maybe<Scalars['smallint']>;
  voltage2?: Maybe<Scalars['smallint']>;
  voltage3?: Maybe<Scalars['smallint']>;
};

/** order by sum() on columns of table "zappi" */
export type Zappi_Sum_Order_By = {
  agggroupno?: InputMaybe<Order_By>;
  agglock?: InputMaybe<Order_By>;
  aggregationdataid?: InputMaybe<Order_By>;
  bootloaderversion?: InputMaybe<Order_By>;
  chargeenergy?: InputMaybe<Order_By>;
  commandseqno?: InputMaybe<Order_By>;
  configlength?: InputMaybe<Order_By>;
  configoffset?: InputMaybe<Order_By>;
  configstate?: InputMaybe<Order_By>;
  configstructure?: InputMaybe<Order_By>;
  configversion?: InputMaybe<Order_By>;
  currentboostremaining?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
  deviceaddressraw?: InputMaybe<Order_By>;
  deviceconfigtime?: InputMaybe<Order_By>;
  deviceinstance?: InputMaybe<Order_By>;
  dsrdataack?: InputMaybe<Order_By>;
  dsrdatacsn?: InputMaybe<Order_By>;
  dsrdataload?: InputMaybe<Order_By>;
  dsrdataseconds?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  maxpower?: InputMaybe<Order_By>;
  melibversion?: InputMaybe<Order_By>;
  melinkversion?: InputMaybe<Order_By>;
  minpower?: InputMaybe<Order_By>;
  normalboostkwh?: InputMaybe<Order_By>;
  phase?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  prioritychanges?: InputMaybe<Order_By>;
  productcode?: InputMaybe<Order_By>;
  pwmdatapulsewidthmodulationinpercentage?: InputMaybe<Order_By>;
  pwmdatarcdacinnanoamps?: InputMaybe<Order_By>;
  pwmdatarcddcinnanoamps?: InputMaybe<Order_By>;
  pwmdatareturnrcdacinnanoamps?: InputMaybe<Order_By>;
  pwmdatastatecpu?: InputMaybe<Order_By>;
  pwmdatastatercdboard?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverconfigtime?: InputMaybe<Order_By>;
  smartboosthour?: InputMaybe<Order_By>;
  smartboostkwh?: InputMaybe<Order_By>;
  smartboostminute?: InputMaybe<Order_By>;
  stubloaderversion?: InputMaybe<Order_By>;
  voltage?: InputMaybe<Order_By>;
  voltage2?: InputMaybe<Order_By>;
  voltage3?: InputMaybe<Order_By>;
};

/** update columns of table "zappi" */
export enum Zappi_Update_Column {
  /** column name */
  Agggroupno = 'agggroupno',
  /** column name */
  Agglock = 'agglock',
  /** column name */
  Aggregationdataid = 'aggregationdataid',
  /** column name */
  Boostmanual = 'boostmanual',
  /** column name */
  Boostsmart = 'boostsmart',
  /** column name */
  Boosttimed = 'boosttimed',
  /** column name */
  Bootloaderversion = 'bootloaderversion',
  /** column name */
  Chargeenergy = 'chargeenergy',
  /** column name */
  Commandseqno = 'commandseqno',
  /** column name */
  Configappdata = 'configappdata',
  /** column name */
  Configappdone = 'configappdone',
  /** column name */
  Configbootdata = 'configbootdata',
  /** column name */
  Configbootdone = 'configbootdone',
  /** column name */
  Configlength = 'configlength',
  /** column name */
  Configoffset = 'configoffset',
  /** column name */
  Configstate = 'configstate',
  /** column name */
  Configstructure = 'configstructure',
  /** column name */
  Configversion = 'configversion',
  /** column name */
  Createdat = 'createdat',
  /** column name */
  Ct1 = 'ct1',
  /** column name */
  Ct2 = 'ct2',
  /** column name */
  Ct3 = 'ct3',
  /** column name */
  Ct4 = 'ct4',
  /** column name */
  Ct5 = 'ct5',
  /** column name */
  Ct6 = 'ct6',
  /** column name */
  Ct7 = 'ct7',
  /** column name */
  Ct8 = 'ct8',
  /** column name */
  Ct9 = 'ct9',
  /** column name */
  Ct10 = 'ct10',
  /** column name */
  Ct11 = 'ct11',
  /** column name */
  Ct12 = 'ct12',
  /** column name */
  Ct13 = 'ct13',
  /** column name */
  Ct14 = 'ct14',
  /** column name */
  Ct15 = 'ct15',
  /** column name */
  Ct16 = 'ct16',
  /** column name */
  Currentboostremaining = 'currentboostremaining',
  /** column name */
  Currentversion = 'currentversion',
  /** column name */
  Deviceaddressraw = 'deviceaddressraw',
  /** column name */
  Deviceclass = 'deviceclass',
  /** column name */
  Deviceconfigtime = 'deviceconfigtime',
  /** column name */
  Deviceinstance = 'deviceinstance',
  /** column name */
  Dsrdataack = 'dsrdataack',
  /** column name */
  Dsrdatacsn = 'dsrdatacsn',
  /** column name */
  Dsrdatafda = 'dsrdatafda',
  /** column name */
  Dsrdatafde = 'dsrdatafde',
  /** column name */
  Dsrdatafdn = 'dsrdatafdn',
  /** column name */
  Dsrdatafua = 'dsrdatafua',
  /** column name */
  Dsrdatafue = 'dsrdatafue',
  /** column name */
  Dsrdatafun = 'dsrdatafun',
  /** column name */
  Dsrdatalca = 'dsrdatalca',
  /** column name */
  Dsrdatalce = 'dsrdatalce',
  /** column name */
  Dsrdataload = 'dsrdataload',
  /** column name */
  Dsrdataseconds = 'dsrdataseconds',
  /** column name */
  Ethernetlink = 'ethernetlink',
  /** column name */
  Frequency = 'frequency',
  /** column name */
  Highpower = 'highpower',
  /** column name */
  Hubserialno = 'hubserialno',
  /** column name */
  Isaggregated = 'isaggregated',
  /** column name */
  Lockedstatuschargesessionallowed = 'lockedstatuschargesessionallowed',
  /** column name */
  Lockedstatuschargewhenlocked = 'lockedstatuschargewhenlocked',
  /** column name */
  Lockedstatuslockednow = 'lockedstatuslockednow',
  /** column name */
  Lockedstatuslockwhenpluggedin = 'lockedstatuslockwhenpluggedin',
  /** column name */
  Lockedstatuslockwhenunplugged = 'lockedstatuslockwhenunplugged',
  /** column name */
  Lockedstatusmicroprocessorti = 'lockedstatusmicroprocessorti',
  /** column name */
  Maxpower = 'maxpower',
  /** column name */
  Melibversion = 'melibversion',
  /** column name */
  Melinkversion = 'melinkversion',
  /** column name */
  Minpower = 'minpower',
  /** column name */
  Normalboostkwh = 'normalboostkwh',
  /** column name */
  Phase = 'phase',
  /** column name */
  Pilotstate = 'pilotstate',
  /** column name */
  Priority = 'priority',
  /** column name */
  Prioritychanges = 'prioritychanges',
  /** column name */
  Productcode = 'productcode',
  /** column name */
  Pwmdatapulsewidthmodulationinpercentage = 'pwmdatapulsewidthmodulationinpercentage',
  /** column name */
  Pwmdatarcdacinnanoamps = 'pwmdatarcdacinnanoamps',
  /** column name */
  Pwmdatarcddcinnanoamps = 'pwmdatarcddcinnanoamps',
  /** column name */
  Pwmdatareturnrcdacinnanoamps = 'pwmdatareturnrcdacinnanoamps',
  /** column name */
  Pwmdatastatecpu = 'pwmdatastatecpu',
  /** column name */
  Pwmdatastatercdboard = 'pwmdatastatercdboard',
  /** column name */
  Serialno = 'serialno',
  /** column name */
  Serverconfigtime = 'serverconfigtime',
  /** column name */
  Smartboosthour = 'smartboosthour',
  /** column name */
  Smartboostkwh = 'smartboostkwh',
  /** column name */
  Smartboostminute = 'smartboostminute',
  /** column name */
  Specialversion = 'specialversion',
  /** column name */
  State = 'state',
  /** column name */
  Stubloaderversion = 'stubloaderversion',
  /** column name */
  Threephase = 'threephase',
  /** column name */
  Updatedat = 'updatedat',
  /** column name */
  Vhub = 'vhub',
  /** column name */
  Voltage = 'voltage',
  /** column name */
  Voltage2 = 'voltage2',
  /** column name */
  Voltage3 = 'voltage3',
  /** column name */
  Wifilink = 'wifilink',
  /** column name */
  Zappi2 = 'zappi2',
  /** column name */
  Zappimode = 'zappimode',
}

/** aggregate var_pop on columns */
export type Zappi_Var_Pop_Fields = {
  __typename?: 'zappi_var_pop_fields';
  agggroupno?: Maybe<Scalars['Float']>;
  agglock?: Maybe<Scalars['Float']>;
  aggregationdataid?: Maybe<Scalars['Float']>;
  bootloaderversion?: Maybe<Scalars['Float']>;
  chargeenergy?: Maybe<Scalars['Float']>;
  commandseqno?: Maybe<Scalars['Float']>;
  configlength?: Maybe<Scalars['Float']>;
  configoffset?: Maybe<Scalars['Float']>;
  configstate?: Maybe<Scalars['Float']>;
  configstructure?: Maybe<Scalars['Float']>;
  configversion?: Maybe<Scalars['Float']>;
  currentboostremaining?: Maybe<Scalars['Float']>;
  currentversion?: Maybe<Scalars['Float']>;
  deviceaddressraw?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  deviceinstance?: Maybe<Scalars['Float']>;
  dsrdataack?: Maybe<Scalars['Float']>;
  dsrdatacsn?: Maybe<Scalars['Float']>;
  dsrdataload?: Maybe<Scalars['Float']>;
  dsrdataseconds?: Maybe<Scalars['Float']>;
  frequency?: Maybe<Scalars['Float']>;
  hubserialno?: Maybe<Scalars['Float']>;
  maxpower?: Maybe<Scalars['Float']>;
  melibversion?: Maybe<Scalars['Float']>;
  melinkversion?: Maybe<Scalars['Float']>;
  minpower?: Maybe<Scalars['Float']>;
  normalboostkwh?: Maybe<Scalars['Float']>;
  phase?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
  prioritychanges?: Maybe<Scalars['Float']>;
  productcode?: Maybe<Scalars['Float']>;
  pwmdatapulsewidthmodulationinpercentage?: Maybe<Scalars['Float']>;
  pwmdatarcdacinnanoamps?: Maybe<Scalars['Float']>;
  pwmdatarcddcinnanoamps?: Maybe<Scalars['Float']>;
  pwmdatareturnrcdacinnanoamps?: Maybe<Scalars['Float']>;
  pwmdatastatecpu?: Maybe<Scalars['Float']>;
  pwmdatastatercdboard?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  serverconfigtime?: Maybe<Scalars['Float']>;
  smartboosthour?: Maybe<Scalars['Float']>;
  smartboostkwh?: Maybe<Scalars['Float']>;
  smartboostminute?: Maybe<Scalars['Float']>;
  stubloaderversion?: Maybe<Scalars['Float']>;
  voltage?: Maybe<Scalars['Float']>;
  voltage2?: Maybe<Scalars['Float']>;
  voltage3?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "zappi" */
export type Zappi_Var_Pop_Order_By = {
  agggroupno?: InputMaybe<Order_By>;
  agglock?: InputMaybe<Order_By>;
  aggregationdataid?: InputMaybe<Order_By>;
  bootloaderversion?: InputMaybe<Order_By>;
  chargeenergy?: InputMaybe<Order_By>;
  commandseqno?: InputMaybe<Order_By>;
  configlength?: InputMaybe<Order_By>;
  configoffset?: InputMaybe<Order_By>;
  configstate?: InputMaybe<Order_By>;
  configstructure?: InputMaybe<Order_By>;
  configversion?: InputMaybe<Order_By>;
  currentboostremaining?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
  deviceaddressraw?: InputMaybe<Order_By>;
  deviceconfigtime?: InputMaybe<Order_By>;
  deviceinstance?: InputMaybe<Order_By>;
  dsrdataack?: InputMaybe<Order_By>;
  dsrdatacsn?: InputMaybe<Order_By>;
  dsrdataload?: InputMaybe<Order_By>;
  dsrdataseconds?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  maxpower?: InputMaybe<Order_By>;
  melibversion?: InputMaybe<Order_By>;
  melinkversion?: InputMaybe<Order_By>;
  minpower?: InputMaybe<Order_By>;
  normalboostkwh?: InputMaybe<Order_By>;
  phase?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  prioritychanges?: InputMaybe<Order_By>;
  productcode?: InputMaybe<Order_By>;
  pwmdatapulsewidthmodulationinpercentage?: InputMaybe<Order_By>;
  pwmdatarcdacinnanoamps?: InputMaybe<Order_By>;
  pwmdatarcddcinnanoamps?: InputMaybe<Order_By>;
  pwmdatareturnrcdacinnanoamps?: InputMaybe<Order_By>;
  pwmdatastatecpu?: InputMaybe<Order_By>;
  pwmdatastatercdboard?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverconfigtime?: InputMaybe<Order_By>;
  smartboosthour?: InputMaybe<Order_By>;
  smartboostkwh?: InputMaybe<Order_By>;
  smartboostminute?: InputMaybe<Order_By>;
  stubloaderversion?: InputMaybe<Order_By>;
  voltage?: InputMaybe<Order_By>;
  voltage2?: InputMaybe<Order_By>;
  voltage3?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Zappi_Var_Samp_Fields = {
  __typename?: 'zappi_var_samp_fields';
  agggroupno?: Maybe<Scalars['Float']>;
  agglock?: Maybe<Scalars['Float']>;
  aggregationdataid?: Maybe<Scalars['Float']>;
  bootloaderversion?: Maybe<Scalars['Float']>;
  chargeenergy?: Maybe<Scalars['Float']>;
  commandseqno?: Maybe<Scalars['Float']>;
  configlength?: Maybe<Scalars['Float']>;
  configoffset?: Maybe<Scalars['Float']>;
  configstate?: Maybe<Scalars['Float']>;
  configstructure?: Maybe<Scalars['Float']>;
  configversion?: Maybe<Scalars['Float']>;
  currentboostremaining?: Maybe<Scalars['Float']>;
  currentversion?: Maybe<Scalars['Float']>;
  deviceaddressraw?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  deviceinstance?: Maybe<Scalars['Float']>;
  dsrdataack?: Maybe<Scalars['Float']>;
  dsrdatacsn?: Maybe<Scalars['Float']>;
  dsrdataload?: Maybe<Scalars['Float']>;
  dsrdataseconds?: Maybe<Scalars['Float']>;
  frequency?: Maybe<Scalars['Float']>;
  hubserialno?: Maybe<Scalars['Float']>;
  maxpower?: Maybe<Scalars['Float']>;
  melibversion?: Maybe<Scalars['Float']>;
  melinkversion?: Maybe<Scalars['Float']>;
  minpower?: Maybe<Scalars['Float']>;
  normalboostkwh?: Maybe<Scalars['Float']>;
  phase?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
  prioritychanges?: Maybe<Scalars['Float']>;
  productcode?: Maybe<Scalars['Float']>;
  pwmdatapulsewidthmodulationinpercentage?: Maybe<Scalars['Float']>;
  pwmdatarcdacinnanoamps?: Maybe<Scalars['Float']>;
  pwmdatarcddcinnanoamps?: Maybe<Scalars['Float']>;
  pwmdatareturnrcdacinnanoamps?: Maybe<Scalars['Float']>;
  pwmdatastatecpu?: Maybe<Scalars['Float']>;
  pwmdatastatercdboard?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  serverconfigtime?: Maybe<Scalars['Float']>;
  smartboosthour?: Maybe<Scalars['Float']>;
  smartboostkwh?: Maybe<Scalars['Float']>;
  smartboostminute?: Maybe<Scalars['Float']>;
  stubloaderversion?: Maybe<Scalars['Float']>;
  voltage?: Maybe<Scalars['Float']>;
  voltage2?: Maybe<Scalars['Float']>;
  voltage3?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "zappi" */
export type Zappi_Var_Samp_Order_By = {
  agggroupno?: InputMaybe<Order_By>;
  agglock?: InputMaybe<Order_By>;
  aggregationdataid?: InputMaybe<Order_By>;
  bootloaderversion?: InputMaybe<Order_By>;
  chargeenergy?: InputMaybe<Order_By>;
  commandseqno?: InputMaybe<Order_By>;
  configlength?: InputMaybe<Order_By>;
  configoffset?: InputMaybe<Order_By>;
  configstate?: InputMaybe<Order_By>;
  configstructure?: InputMaybe<Order_By>;
  configversion?: InputMaybe<Order_By>;
  currentboostremaining?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
  deviceaddressraw?: InputMaybe<Order_By>;
  deviceconfigtime?: InputMaybe<Order_By>;
  deviceinstance?: InputMaybe<Order_By>;
  dsrdataack?: InputMaybe<Order_By>;
  dsrdatacsn?: InputMaybe<Order_By>;
  dsrdataload?: InputMaybe<Order_By>;
  dsrdataseconds?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  maxpower?: InputMaybe<Order_By>;
  melibversion?: InputMaybe<Order_By>;
  melinkversion?: InputMaybe<Order_By>;
  minpower?: InputMaybe<Order_By>;
  normalboostkwh?: InputMaybe<Order_By>;
  phase?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  prioritychanges?: InputMaybe<Order_By>;
  productcode?: InputMaybe<Order_By>;
  pwmdatapulsewidthmodulationinpercentage?: InputMaybe<Order_By>;
  pwmdatarcdacinnanoamps?: InputMaybe<Order_By>;
  pwmdatarcddcinnanoamps?: InputMaybe<Order_By>;
  pwmdatareturnrcdacinnanoamps?: InputMaybe<Order_By>;
  pwmdatastatecpu?: InputMaybe<Order_By>;
  pwmdatastatercdboard?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverconfigtime?: InputMaybe<Order_By>;
  smartboosthour?: InputMaybe<Order_By>;
  smartboostkwh?: InputMaybe<Order_By>;
  smartboostminute?: InputMaybe<Order_By>;
  stubloaderversion?: InputMaybe<Order_By>;
  voltage?: InputMaybe<Order_By>;
  voltage2?: InputMaybe<Order_By>;
  voltage3?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Zappi_Variance_Fields = {
  __typename?: 'zappi_variance_fields';
  agggroupno?: Maybe<Scalars['Float']>;
  agglock?: Maybe<Scalars['Float']>;
  aggregationdataid?: Maybe<Scalars['Float']>;
  bootloaderversion?: Maybe<Scalars['Float']>;
  chargeenergy?: Maybe<Scalars['Float']>;
  commandseqno?: Maybe<Scalars['Float']>;
  configlength?: Maybe<Scalars['Float']>;
  configoffset?: Maybe<Scalars['Float']>;
  configstate?: Maybe<Scalars['Float']>;
  configstructure?: Maybe<Scalars['Float']>;
  configversion?: Maybe<Scalars['Float']>;
  currentboostremaining?: Maybe<Scalars['Float']>;
  currentversion?: Maybe<Scalars['Float']>;
  deviceaddressraw?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  deviceinstance?: Maybe<Scalars['Float']>;
  dsrdataack?: Maybe<Scalars['Float']>;
  dsrdatacsn?: Maybe<Scalars['Float']>;
  dsrdataload?: Maybe<Scalars['Float']>;
  dsrdataseconds?: Maybe<Scalars['Float']>;
  frequency?: Maybe<Scalars['Float']>;
  hubserialno?: Maybe<Scalars['Float']>;
  maxpower?: Maybe<Scalars['Float']>;
  melibversion?: Maybe<Scalars['Float']>;
  melinkversion?: Maybe<Scalars['Float']>;
  minpower?: Maybe<Scalars['Float']>;
  normalboostkwh?: Maybe<Scalars['Float']>;
  phase?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
  prioritychanges?: Maybe<Scalars['Float']>;
  productcode?: Maybe<Scalars['Float']>;
  pwmdatapulsewidthmodulationinpercentage?: Maybe<Scalars['Float']>;
  pwmdatarcdacinnanoamps?: Maybe<Scalars['Float']>;
  pwmdatarcddcinnanoamps?: Maybe<Scalars['Float']>;
  pwmdatareturnrcdacinnanoamps?: Maybe<Scalars['Float']>;
  pwmdatastatecpu?: Maybe<Scalars['Float']>;
  pwmdatastatercdboard?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  serverconfigtime?: Maybe<Scalars['Float']>;
  smartboosthour?: Maybe<Scalars['Float']>;
  smartboostkwh?: Maybe<Scalars['Float']>;
  smartboostminute?: Maybe<Scalars['Float']>;
  stubloaderversion?: Maybe<Scalars['Float']>;
  voltage?: Maybe<Scalars['Float']>;
  voltage2?: Maybe<Scalars['Float']>;
  voltage3?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "zappi" */
export type Zappi_Variance_Order_By = {
  agggroupno?: InputMaybe<Order_By>;
  agglock?: InputMaybe<Order_By>;
  aggregationdataid?: InputMaybe<Order_By>;
  bootloaderversion?: InputMaybe<Order_By>;
  chargeenergy?: InputMaybe<Order_By>;
  commandseqno?: InputMaybe<Order_By>;
  configlength?: InputMaybe<Order_By>;
  configoffset?: InputMaybe<Order_By>;
  configstate?: InputMaybe<Order_By>;
  configstructure?: InputMaybe<Order_By>;
  configversion?: InputMaybe<Order_By>;
  currentboostremaining?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
  deviceaddressraw?: InputMaybe<Order_By>;
  deviceconfigtime?: InputMaybe<Order_By>;
  deviceinstance?: InputMaybe<Order_By>;
  dsrdataack?: InputMaybe<Order_By>;
  dsrdatacsn?: InputMaybe<Order_By>;
  dsrdataload?: InputMaybe<Order_By>;
  dsrdataseconds?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  maxpower?: InputMaybe<Order_By>;
  melibversion?: InputMaybe<Order_By>;
  melinkversion?: InputMaybe<Order_By>;
  minpower?: InputMaybe<Order_By>;
  normalboostkwh?: InputMaybe<Order_By>;
  phase?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  prioritychanges?: InputMaybe<Order_By>;
  productcode?: InputMaybe<Order_By>;
  pwmdatapulsewidthmodulationinpercentage?: InputMaybe<Order_By>;
  pwmdatarcdacinnanoamps?: InputMaybe<Order_By>;
  pwmdatarcddcinnanoamps?: InputMaybe<Order_By>;
  pwmdatareturnrcdacinnanoamps?: InputMaybe<Order_By>;
  pwmdatastatecpu?: InputMaybe<Order_By>;
  pwmdatastatercdboard?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverconfigtime?: InputMaybe<Order_By>;
  smartboosthour?: InputMaybe<Order_By>;
  smartboostkwh?: InputMaybe<Order_By>;
  smartboostminute?: InputMaybe<Order_By>;
  stubloaderversion?: InputMaybe<Order_By>;
  voltage?: InputMaybe<Order_By>;
  voltage2?: InputMaybe<Order_By>;
  voltage3?: InputMaybe<Order_By>;
};

export type AdminGroupDevicesNotInControllGroupQueryVariables = Exact<{
  id: Scalars['Int'];
}>;

export type AdminGroupDevicesNotInControllGroupQuery = {
  __typename?: 'query_root';
  admin_group_by_pk?: {
    __typename?: 'admin_group';
    admin_group_devices: Array<{ __typename?: 'admin_group_device'; serialno: number }>;
  } | null;
};

export type AdminGroupsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Admin_Group_Bool_Exp>;
}>;

export type AdminGroupsQuery = {
  __typename?: 'query_root';
  adminGroups: Array<{ __typename?: 'admin_group'; id: number; name: string }>;
};

export type AdminGroupDevicesQueryVariables = Exact<{
  where?: InputMaybe<Admin_Group_Device_Bool_Exp>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;

export type AdminGroupDevicesQuery = {
  __typename?: 'query_root';
  devices: Array<{ __typename?: 'admin_group_device'; serialNo: number; deviceClass: Device_Type_Enum }>;
};

export type AdminGroupStatusQueryVariables = Exact<{
  where?: InputMaybe<Admin_Group_Bool_Exp>;
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;

export type AdminGroupStatusQuery = {
  __typename?: 'query_root';
  adminGroups: Array<{
    __typename?: 'admin_group';
    devices: Array<{
      __typename?: 'admin_group_device';
      zappi?: {
        __typename?: 'zappi';
        voltage?: number | null;
        frequency?: number | null;
        serialNo: number;
        deviceClass: string;
        updateDate: string;
        chargeEnergy?: number | null;
      } | null;
      eddi?: {
        __typename?: 'eddi';
        voltage?: number | null;
        frequency?: number | null;
        serialNo: number;
        deviceClass: string;
        updateDate: string;
        chargeEnergy?: number | null;
      } | null;
    }>;
  }>;
};

export type CreateAdminGroupMutationVariables = Exact<{
  name: Scalars['String'];
  aggregatorId: Scalars['String'];
}>;

export type CreateAdminGroupMutation = {
  __typename?: 'mutation_root';
  adminGroup?: { __typename?: 'admin_group'; id: number; name: string } | null;
};

export type RemoveAdminGroupByAggregatorIdMutationVariables = Exact<{
  aggregatorId: Scalars['String'];
}>;

export type RemoveAdminGroupByAggregatorIdMutation = {
  __typename?: 'mutation_root';
  adminGroup?: {
    __typename?: 'admin_group_mutation_response';
    returning: Array<{ __typename?: 'admin_group'; id: number; name: string }>;
  } | null;
};

export type AddDeviceToAdminGroupMutationVariables = Exact<{
  objects: Array<Admin_Group_Device_Insert_Input> | Admin_Group_Device_Insert_Input;
}>;

export type AddDeviceToAdminGroupMutation = {
  __typename?: 'mutation_root';
  response?: { __typename?: 'admin_group_device_mutation_response'; affectedRows: number } | null;
};

export type RemoveDeviceFromAdminGroupMutationVariables = Exact<{
  adminGroupId: Scalars['Int'];
  serialNos: Array<Scalars['Int']> | Scalars['Int'];
}>;

export type RemoveDeviceFromAdminGroupMutation = {
  __typename?: 'mutation_root';
  response?: { __typename?: 'admin_group_device_mutation_response'; affectedRows: number } | null;
};

export type AdminGroupFieldsFragment = { __typename?: 'admin_group'; id: number; name: string };

export type CreateControlGroupMutationVariables = Exact<{
  object?: Control_Group_Insert_Input;
}>;

export type CreateControlGroupMutation = {
  __typename?: 'mutation_root';
  controlGroup?: { __typename?: 'control_group'; id: number; name: string; adminGroupId: number } | null;
};

export type AddDeviceMutationVariables = Exact<{
  objects: Array<Control_Group_Device_Insert_Input> | Control_Group_Device_Insert_Input;
}>;

export type AddDeviceMutation = {
  __typename?: 'mutation_root';
  response?: { __typename?: 'control_group_device_mutation_response'; affectedRows: number } | null;
};

export type RemoveDeviceFromControlGroupMutationVariables = Exact<{
  where?: InputMaybe<Control_Group_Device_Bool_Exp>;
}>;

export type RemoveDeviceFromControlGroupMutation = {
  __typename?: 'mutation_root';
  response?: { __typename?: 'control_group_device_mutation_response'; affectedRows: number } | null;
};

export type ControlGroupDevicesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Control_Group_Device_Bool_Exp>;
}>;

export type ControlGroupDevicesQuery = {
  __typename?: 'query_root';
  devices: Array<{ __typename?: 'control_group_device'; serialNo: number; deviceClass: Device_Type_Enum }>;
};

export type ControlGroupStatusQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Control_Group_Bool_Exp>;
}>;

export type ControlGroupStatusQuery = {
  __typename?: 'query_root';
  controlGroups: Array<{
    __typename?: 'control_group';
    devices: Array<{
      __typename?: 'control_group_device';
      eddi?: {
        __typename?: 'eddi';
        voltage?: number | null;
        frequency?: number | null;
        serialNo: number;
        deviceClass: string;
        updateDate: string;
        chargeEnergy?: number | null;
      } | null;
      zappi?: {
        __typename?: 'zappi';
        voltage?: number | null;
        frequency?: number | null;
        serialNo: number;
        deviceClass: string;
        updateDate: string;
        chargeEnergy?: number | null;
      } | null;
    }>;
  }>;
};

export type ControlGroupsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Control_Group_Bool_Exp>;
}>;

export type ControlGroupsQuery = {
  __typename?: 'query_root';
  controlGroups: Array<{ __typename?: 'control_group'; id: number; name: string; adminGroupId: number }>;
};

export type ControlGroupFieldsFragment = {
  __typename?: 'control_group';
  id: number;
  name: string;
  adminGroupId: number;
};

export type DeviceStatusQueryVariables = Exact<{
  where?: InputMaybe<Admin_Group_Device_Bool_Exp>;
}>;

export type DeviceStatusQuery = {
  __typename?: 'query_root';
  devices: Array<{
    __typename?: 'admin_group_device';
    eddi?: {
      __typename?: 'eddi';
      voltage?: number | null;
      frequency?: number | null;
      serialNo: number;
      deviceClass: string;
      updateDate: string;
      chargeEnergy?: number | null;
    } | null;
    zappi?: {
      __typename?: 'zappi';
      voltage?: number | null;
      frequency?: number | null;
      serialNo: number;
      deviceClass: string;
      updateDate: string;
      chargeEnergy?: number | null;
    } | null;
  }>;
};

export type NewDevicesBySerialNosQueryVariables = Exact<{
  serialNos?: InputMaybe<Array<Scalars['bigint']> | Scalars['bigint']>;
}>;

export type NewDevicesBySerialNosQuery = {
  __typename?: 'query_root';
  zappis: Array<{ __typename?: 'zappi'; serialNo: number }>;
  eddis: Array<{ __typename?: 'eddi'; serialNo: number }>;
};

export type DeviceControlGroupQueryVariables = Exact<{
  where?: InputMaybe<Control_Group_Bool_Exp>;
}>;

export type DeviceControlGroupQuery = {
  __typename?: 'query_root';
  controlGroups: Array<{ __typename?: 'control_group'; id: number; name: string; adminGroupId: number }>;
};

export type DeviceDataFragment = { __typename?: 'admin_group_device'; serialNo: number; deviceClass: Device_Type_Enum };

export type ZappiStatusFragment = {
  __typename?: 'zappi';
  voltage?: number | null;
  frequency?: number | null;
  serialNo: number;
  deviceClass: string;
  updateDate: string;
  chargeEnergy?: number | null;
};

export type EddiStatusFragment = {
  __typename?: 'eddi';
  voltage?: number | null;
  frequency?: number | null;
  serialNo: number;
  deviceClass: string;
  updateDate: string;
  chargeEnergy?: number | null;
};

export type DeviceHistoryByIdsQueryVariables = Exact<{
  serialNos: Array<Scalars['bigint']> | Scalars['bigint'];
  gte: Scalars['timestamp'];
  lt: Scalars['timestamp'];
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;

export type DeviceHistoryByIdsQuery = {
  __typename?: 'query_root';
  zappiMinutes: Array<{
    __typename?: 'zappi_minute';
    voltage1?: number | null;
    voltage2?: number | null;
    voltage3?: number | null;
    frequency?: number | null;
    timestamp: string;
    serialNo: number;
    importPower?: number | null;
    exportPower?: number | null;
    externalCtPositivePower1?: number | null;
    externalCtPositivePower2?: number | null;
    externalCtPositivePower3?: number | null;
    externalCtNegativePower1?: number | null;
    externalCtNegativePower2?: number | null;
    externalCtNegativePower3?: number | null;
    divertedLoadPower1?: number | null;
    divertedLoadPower2?: number | null;
    divertedLoadPower3?: number | null;
    boostLoadPower1?: number | null;
    boostLoadPower2?: number | null;
    boostLoadPower3?: number | null;
  }>;
  eddiMinutes: Array<{
    __typename?: 'eddi_minute';
    frequency?: number | null;
    timestamp: string;
    serialNo: number;
    importPower?: number | null;
    exportPower?: number | null;
    externalCtPositivePower1?: number | null;
    externalCtPositivePower2?: number | null;
    externalCtNegativePower1?: number | null;
    externalCtNegativePower2?: number | null;
    divertedLoadPower1?: number | null;
    divertedLoadPower2?: number | null;
    boostLoadPower1?: number | null;
    boostLoadPower2?: number | null;
    voltage1?: number | null;
  }>;
};

export type ZappiHistoryFragment = {
  __typename?: 'zappi_minute';
  voltage1?: number | null;
  voltage2?: number | null;
  voltage3?: number | null;
  frequency?: number | null;
  timestamp: string;
  serialNo: number;
  importPower?: number | null;
  exportPower?: number | null;
  externalCtPositivePower1?: number | null;
  externalCtPositivePower2?: number | null;
  externalCtPositivePower3?: number | null;
  externalCtNegativePower1?: number | null;
  externalCtNegativePower2?: number | null;
  externalCtNegativePower3?: number | null;
  divertedLoadPower1?: number | null;
  divertedLoadPower2?: number | null;
  divertedLoadPower3?: number | null;
  boostLoadPower1?: number | null;
  boostLoadPower2?: number | null;
  boostLoadPower3?: number | null;
};

export type EddiHistoryFragment = {
  __typename?: 'eddi_minute';
  frequency?: number | null;
  timestamp: string;
  serialNo: number;
  importPower?: number | null;
  exportPower?: number | null;
  externalCtPositivePower1?: number | null;
  externalCtPositivePower2?: number | null;
  externalCtNegativePower1?: number | null;
  externalCtNegativePower2?: number | null;
  divertedLoadPower1?: number | null;
  divertedLoadPower2?: number | null;
  boostLoadPower1?: number | null;
  boostLoadPower2?: number | null;
  voltage1?: number | null;
};

export const AdminGroupFieldsFragmentDoc = gql`
  fragment AdminGroupFields on admin_group {
    id
    name
  }
`;
export const ControlGroupFieldsFragmentDoc = gql`
  fragment ControlGroupFields on control_group {
    id
    name
    adminGroupId: admin_group_id
  }
`;
export const DeviceDataFragmentDoc = gql`
  fragment DeviceData on admin_group_device {
    serialNo: serialno
    deviceClass: device_type
  }
`;
export const ZappiStatusFragmentDoc = gql`
  fragment ZappiStatus on zappi {
    serialNo: serialno
    deviceClass: deviceclass
    updateDate: updatedat
    chargeEnergy: chargeenergy
    voltage
    frequency
  }
`;
export const EddiStatusFragmentDoc = gql`
  fragment EddiStatus on eddi {
    serialNo: serialno
    deviceClass: deviceclass
    updateDate: updatedat
    chargeEnergy: chargeenergy
    voltage
    frequency
  }
`;
export const ZappiHistoryFragmentDoc = gql`
  fragment ZappiHistory on zappi_minute {
    serialNo: serialno
    importPower: importpower
    exportPower: exportpower
    externalCtPositivePower1: externalctpospower1
    externalCtPositivePower2: externalctpospower2
    externalCtPositivePower3: externalctpospower3
    externalCtNegativePower1: externalctnegpower1
    externalCtNegativePower2: externalctnegpower2
    externalCtNegativePower3: externalctnegpower3
    divertedLoadPower1: divloadpower1
    divertedLoadPower2: divloadpower2
    divertedLoadPower3: divloadpower3
    boostLoadPower1: boostloadpower1
    boostLoadPower2: boostloadpower2
    boostLoadPower3: boostloadpower3
    voltage1
    voltage2
    voltage3
    frequency
    timestamp
  }
`;
export const EddiHistoryFragmentDoc = gql`
  fragment EddiHistory on eddi_minute {
    serialNo: serialno
    importPower: importpower
    exportPower: exportpower
    externalCtPositivePower1: externalctpospower1
    externalCtPositivePower2: externalctpospower2
    externalCtNegativePower1: externalctnegpower1
    externalCtNegativePower2: externalctnegpower2
    divertedLoadPower1: divloadpower1
    divertedLoadPower2: divloadpower2
    boostLoadPower1: boostloadpower1
    boostLoadPower2: boostloadpower2
    voltage1: voltage
    frequency
    timestamp
  }
`;
export const AdminGroupDevicesNotInControllGroupDocument = gql`
  query AdminGroupDevicesNotInControllGroup($id: Int!) {
    admin_group_by_pk(id: $id) {
      admin_group_devices(where: { control_group_devices: { control_group_id: { _is_null: true } } }) {
        serialno
      }
    }
  }
`;
export const AdminGroupsDocument = gql`
  query AdminGroups($limit: Int, $offset: Int, $where: admin_group_bool_exp) {
    adminGroups: admin_group(limit: $limit, offset: $offset, where: $where) {
      ...AdminGroupFields
    }
  }
  ${AdminGroupFieldsFragmentDoc}
`;
export const AdminGroupDevicesDocument = gql`
  query AdminGroupDevices($where: admin_group_device_bool_exp, $limit: Int, $offset: Int) {
    devices: admin_group_device(where: $where, limit: $limit, offset: $offset) {
      ...DeviceData
    }
  }
  ${DeviceDataFragmentDoc}
`;
export const AdminGroupStatusDocument = gql`
  query AdminGroupStatus($where: admin_group_bool_exp, $offset: Int, $limit: Int) {
    adminGroups: admin_group(where: $where) {
      devices: admin_group_devices(limit: $limit, offset: $offset) {
        zappi: admin_group_device_zappi {
          ...ZappiStatus
        }
        eddi: admin_group_device_eddi {
          ...EddiStatus
        }
      }
    }
  }
  ${ZappiStatusFragmentDoc}
  ${EddiStatusFragmentDoc}
`;
export const CreateAdminGroupDocument = gql`
  mutation CreateAdminGroup($name: String!, $aggregatorId: String!) {
    adminGroup: insert_admin_group_one(object: { name: $name, aggregator_id: $aggregatorId }) {
      ...AdminGroupFields
    }
  }
  ${AdminGroupFieldsFragmentDoc}
`;
export const RemoveAdminGroupByAggregatorIdDocument = gql`
  mutation RemoveAdminGroupByAggregatorId($aggregatorId: String!) {
    adminGroup: delete_admin_group(where: { aggregator_id: { _eq: $aggregatorId } }) {
      returning {
        ...AdminGroupFields
      }
    }
  }
  ${AdminGroupFieldsFragmentDoc}
`;
export const AddDeviceToAdminGroupDocument = gql`
  mutation AddDeviceToAdminGroup($objects: [admin_group_device_insert_input!]!) {
    response: insert_admin_group_device(objects: $objects) {
      affectedRows: affected_rows
    }
  }
`;
export const RemoveDeviceFromAdminGroupDocument = gql`
  mutation RemoveDeviceFromAdminGroup($adminGroupId: Int!, $serialNos: [Int!]!) {
    response: delete_admin_group_device(
      where: { admin_group_id: { _eq: $adminGroupId }, serialno: { _in: $serialNos } }
    ) {
      affectedRows: affected_rows
    }
  }
`;
export const CreateControlGroupDocument = gql`
  mutation CreateControlGroup($object: control_group_insert_input! = {}) {
    controlGroup: insert_control_group_one(object: $object) {
      ...ControlGroupFields
    }
  }
  ${ControlGroupFieldsFragmentDoc}
`;
export const AddDeviceDocument = gql`
  mutation AddDevice($objects: [control_group_device_insert_input!]!) {
    response: insert_control_group_device(objects: $objects) {
      affectedRows: affected_rows
    }
  }
`;
export const RemoveDeviceFromControlGroupDocument = gql`
  mutation RemoveDeviceFromControlGroup($where: control_group_device_bool_exp = {}) {
    response: delete_control_group_device(where: $where) {
      affectedRows: affected_rows
    }
  }
`;
export const ControlGroupDevicesDocument = gql`
  query ControlGroupDevices($limit: Int, $offset: Int, $where: control_group_device_bool_exp = {}) {
    devices: control_group_device(limit: $limit, offset: $offset, where: $where) {
      serialNo: serialno
      deviceClass: device_type
    }
  }
`;
export const ControlGroupStatusDocument = gql`
  query ControlGroupStatus($limit: Int, $offset: Int, $where: control_group_bool_exp = {}) {
    controlGroups: control_group(where: $where) {
      devices(limit: $limit, offset: $offset) {
        eddi: control_group_device_eddi {
          ...EddiStatus
        }
        zappi: control_group_device_zappi {
          ...ZappiStatus
        }
      }
    }
  }
  ${EddiStatusFragmentDoc}
  ${ZappiStatusFragmentDoc}
`;
export const ControlGroupsDocument = gql`
  query ControlGroups($limit: Int, $offset: Int, $where: control_group_bool_exp = {}) {
    controlGroups: control_group(limit: $limit, offset: $offset, where: $where) {
      ...ControlGroupFields
    }
  }
  ${ControlGroupFieldsFragmentDoc}
`;
export const DeviceStatusDocument = gql`
  query DeviceStatus($where: admin_group_device_bool_exp) {
    devices: admin_group_device(where: $where) {
      eddi: admin_group_device_eddi {
        ...EddiStatus
      }
      zappi: admin_group_device_zappi {
        ...ZappiStatus
      }
    }
  }
  ${EddiStatusFragmentDoc}
  ${ZappiStatusFragmentDoc}
`;
export const NewDevicesBySerialNosDocument = gql`
  query NewDevicesBySerialNos($serialNos: [bigint!]) {
    zappis: zappi(where: { serialno: { _in: $serialNos } }) {
      serialNo: serialno
    }
    eddis: eddi(where: { serialno: { _in: $serialNos } }) {
      serialNo: serialno
    }
  }
`;
export const DeviceControlGroupDocument = gql`
  query DeviceControlGroup($where: control_group_bool_exp = {}) {
    controlGroups: control_group(where: $where) {
      ...ControlGroupFields
    }
  }
  ${ControlGroupFieldsFragmentDoc}
`;
export const DeviceHistoryByIdsDocument = gql`
  query DeviceHistoryByIds($serialNos: [bigint!]!, $gte: timestamp!, $lt: timestamp!, $offset: Int, $limit: Int) {
    zappiMinutes: zappi_minute(
      offset: $offset
      limit: $limit
      where: { timestamp: { _gte: $gte, _lt: $lt }, serialno: { _in: $serialNos } }
    ) {
      ...ZappiHistory
    }
    eddiMinutes: eddi_minute(
      offset: $offset
      limit: $limit
      where: { timestamp: { _gte: $gte, _lt: $lt }, serialno: { _in: $serialNos } }
    ) {
      ...EddiHistory
    }
  }
  ${ZappiHistoryFragmentDoc}
  ${EddiHistoryFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AdminGroupDevicesNotInControllGroup(
      variables: AdminGroupDevicesNotInControllGroupQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<AdminGroupDevicesNotInControllGroupQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<AdminGroupDevicesNotInControllGroupQuery>(
            AdminGroupDevicesNotInControllGroupDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'AdminGroupDevicesNotInControllGroup'
      );
    },
    AdminGroups(
      variables?: AdminGroupsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<AdminGroupsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<AdminGroupsQuery>(AdminGroupsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'AdminGroups'
      );
    },
    AdminGroupDevices(
      variables?: AdminGroupDevicesQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<AdminGroupDevicesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<AdminGroupDevicesQuery>(AdminGroupDevicesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'AdminGroupDevices'
      );
    },
    AdminGroupStatus(
      variables?: AdminGroupStatusQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<AdminGroupStatusQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<AdminGroupStatusQuery>(AdminGroupStatusDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'AdminGroupStatus'
      );
    },
    CreateAdminGroup(
      variables: CreateAdminGroupMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<CreateAdminGroupMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateAdminGroupMutation>(CreateAdminGroupDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'CreateAdminGroup'
      );
    },
    RemoveAdminGroupByAggregatorId(
      variables: RemoveAdminGroupByAggregatorIdMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<RemoveAdminGroupByAggregatorIdMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<RemoveAdminGroupByAggregatorIdMutation>(RemoveAdminGroupByAggregatorIdDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'RemoveAdminGroupByAggregatorId'
      );
    },
    AddDeviceToAdminGroup(
      variables: AddDeviceToAdminGroupMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<AddDeviceToAdminGroupMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<AddDeviceToAdminGroupMutation>(AddDeviceToAdminGroupDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'AddDeviceToAdminGroup'
      );
    },
    RemoveDeviceFromAdminGroup(
      variables: RemoveDeviceFromAdminGroupMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<RemoveDeviceFromAdminGroupMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<RemoveDeviceFromAdminGroupMutation>(RemoveDeviceFromAdminGroupDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'RemoveDeviceFromAdminGroup'
      );
    },
    CreateControlGroup(
      variables?: CreateControlGroupMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<CreateControlGroupMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateControlGroupMutation>(CreateControlGroupDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'CreateControlGroup'
      );
    },
    AddDevice(
      variables: AddDeviceMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<AddDeviceMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<AddDeviceMutation>(AddDeviceDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'AddDevice'
      );
    },
    RemoveDeviceFromControlGroup(
      variables?: RemoveDeviceFromControlGroupMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<RemoveDeviceFromControlGroupMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<RemoveDeviceFromControlGroupMutation>(RemoveDeviceFromControlGroupDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'RemoveDeviceFromControlGroup'
      );
    },
    ControlGroupDevices(
      variables?: ControlGroupDevicesQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<ControlGroupDevicesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ControlGroupDevicesQuery>(ControlGroupDevicesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'ControlGroupDevices'
      );
    },
    ControlGroupStatus(
      variables?: ControlGroupStatusQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<ControlGroupStatusQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ControlGroupStatusQuery>(ControlGroupStatusDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'ControlGroupStatus'
      );
    },
    ControlGroups(
      variables?: ControlGroupsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<ControlGroupsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ControlGroupsQuery>(ControlGroupsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'ControlGroups'
      );
    },
    DeviceStatus(
      variables?: DeviceStatusQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<DeviceStatusQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeviceStatusQuery>(DeviceStatusDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'DeviceStatus'
      );
    },
    NewDevicesBySerialNos(
      variables?: NewDevicesBySerialNosQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<NewDevicesBySerialNosQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<NewDevicesBySerialNosQuery>(NewDevicesBySerialNosDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'NewDevicesBySerialNos'
      );
    },
    DeviceControlGroup(
      variables?: DeviceControlGroupQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<DeviceControlGroupQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeviceControlGroupQuery>(DeviceControlGroupDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'DeviceControlGroup'
      );
    },
    DeviceHistoryByIds(
      variables: DeviceHistoryByIdsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<DeviceHistoryByIdsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeviceHistoryByIdsQuery>(DeviceHistoryByIdsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'DeviceHistoryByIds'
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
