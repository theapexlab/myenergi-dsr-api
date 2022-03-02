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
  bigint: any;
  bytea: any;
  command_commandinitiatorservice_enum: any;
  command_commandstate_enum: any;
  command_commandtype_enum: any;
  command_destinationdevicename_enum: any;
  config_reply_boost_timer_heatertype_enum: any;
  jsonb: any;
  macaddr: any;
  smallint: any;
  timestamp: any;
  timestamptz: any;
  update_box_updateboxicontype_enum: any;
  uuid: any;
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

/** columns and relationships of "alternate_servers" */
export type Alternate_Servers = {
  __typename?: 'alternate_servers';
  id: Scalars['Int'];
  /** An object relationship */
  server?: Maybe<Server>;
  /** An object relationship */
  serverByServeraid?: Maybe<Server>;
  serveraid?: Maybe<Scalars['Int']>;
  serverbid?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "alternate_servers" */
export type Alternate_Servers_Aggregate = {
  __typename?: 'alternate_servers_aggregate';
  aggregate?: Maybe<Alternate_Servers_Aggregate_Fields>;
  nodes: Array<Alternate_Servers>;
};

/** aggregate fields of "alternate_servers" */
export type Alternate_Servers_Aggregate_Fields = {
  __typename?: 'alternate_servers_aggregate_fields';
  avg?: Maybe<Alternate_Servers_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Alternate_Servers_Max_Fields>;
  min?: Maybe<Alternate_Servers_Min_Fields>;
  stddev?: Maybe<Alternate_Servers_Stddev_Fields>;
  stddev_pop?: Maybe<Alternate_Servers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Alternate_Servers_Stddev_Samp_Fields>;
  sum?: Maybe<Alternate_Servers_Sum_Fields>;
  var_pop?: Maybe<Alternate_Servers_Var_Pop_Fields>;
  var_samp?: Maybe<Alternate_Servers_Var_Samp_Fields>;
  variance?: Maybe<Alternate_Servers_Variance_Fields>;
};

/** aggregate fields of "alternate_servers" */
export type Alternate_Servers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Alternate_Servers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Alternate_Servers_Avg_Fields = {
  __typename?: 'alternate_servers_avg_fields';
  id?: Maybe<Scalars['Float']>;
  serveraid?: Maybe<Scalars['Float']>;
  serverbid?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "alternate_servers". All fields are combined with a logical 'AND'. */
export type Alternate_Servers_Bool_Exp = {
  _and?: InputMaybe<Array<Alternate_Servers_Bool_Exp>>;
  _not?: InputMaybe<Alternate_Servers_Bool_Exp>;
  _or?: InputMaybe<Array<Alternate_Servers_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  server?: InputMaybe<Server_Bool_Exp>;
  serverByServeraid?: InputMaybe<Server_Bool_Exp>;
  serveraid?: InputMaybe<Int_Comparison_Exp>;
  serverbid?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "alternate_servers" */
export enum Alternate_Servers_Constraint {
  /** unique or primary key constraint */
  PkE61a680a6adf6a3372f5498a5da = 'PK_e61a680a6adf6a3372f5498a5da',
  /** unique or primary key constraint */
  RelD7ddafb47c4de740afe922c38d = 'REL_d7ddafb47c4de740afe922c38d',
  /** unique or primary key constraint */
  RelF3f54c7cf1d5dbad68a2b17e78 = 'REL_f3f54c7cf1d5dbad68a2b17e78',
}

/** input type for incrementing numeric columns in table "alternate_servers" */
export type Alternate_Servers_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  serveraid?: InputMaybe<Scalars['Int']>;
  serverbid?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "alternate_servers" */
export type Alternate_Servers_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  server?: InputMaybe<Server_Obj_Rel_Insert_Input>;
  serverByServeraid?: InputMaybe<Server_Obj_Rel_Insert_Input>;
  serveraid?: InputMaybe<Scalars['Int']>;
  serverbid?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Alternate_Servers_Max_Fields = {
  __typename?: 'alternate_servers_max_fields';
  id?: Maybe<Scalars['Int']>;
  serveraid?: Maybe<Scalars['Int']>;
  serverbid?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Alternate_Servers_Min_Fields = {
  __typename?: 'alternate_servers_min_fields';
  id?: Maybe<Scalars['Int']>;
  serveraid?: Maybe<Scalars['Int']>;
  serverbid?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "alternate_servers" */
export type Alternate_Servers_Mutation_Response = {
  __typename?: 'alternate_servers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Alternate_Servers>;
};

/** input type for inserting object relation for remote table "alternate_servers" */
export type Alternate_Servers_Obj_Rel_Insert_Input = {
  data: Alternate_Servers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Alternate_Servers_On_Conflict>;
};

/** on_conflict condition type for table "alternate_servers" */
export type Alternate_Servers_On_Conflict = {
  constraint: Alternate_Servers_Constraint;
  update_columns?: Array<Alternate_Servers_Update_Column>;
  where?: InputMaybe<Alternate_Servers_Bool_Exp>;
};

/** Ordering options when selecting data from "alternate_servers". */
export type Alternate_Servers_Order_By = {
  id?: InputMaybe<Order_By>;
  server?: InputMaybe<Server_Order_By>;
  serverByServeraid?: InputMaybe<Server_Order_By>;
  serveraid?: InputMaybe<Order_By>;
  serverbid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: alternate_servers */
export type Alternate_Servers_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "alternate_servers" */
export enum Alternate_Servers_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Serveraid = 'serveraid',
  /** column name */
  Serverbid = 'serverbid',
}

/** input type for updating data in table "alternate_servers" */
export type Alternate_Servers_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  serveraid?: InputMaybe<Scalars['Int']>;
  serverbid?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Alternate_Servers_Stddev_Fields = {
  __typename?: 'alternate_servers_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  serveraid?: Maybe<Scalars['Float']>;
  serverbid?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Alternate_Servers_Stddev_Pop_Fields = {
  __typename?: 'alternate_servers_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  serveraid?: Maybe<Scalars['Float']>;
  serverbid?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Alternate_Servers_Stddev_Samp_Fields = {
  __typename?: 'alternate_servers_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  serveraid?: Maybe<Scalars['Float']>;
  serverbid?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Alternate_Servers_Sum_Fields = {
  __typename?: 'alternate_servers_sum_fields';
  id?: Maybe<Scalars['Int']>;
  serveraid?: Maybe<Scalars['Int']>;
  serverbid?: Maybe<Scalars['Int']>;
};

/** update columns of table "alternate_servers" */
export enum Alternate_Servers_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Serveraid = 'serveraid',
  /** column name */
  Serverbid = 'serverbid',
}

/** aggregate var_pop on columns */
export type Alternate_Servers_Var_Pop_Fields = {
  __typename?: 'alternate_servers_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  serveraid?: Maybe<Scalars['Float']>;
  serverbid?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Alternate_Servers_Var_Samp_Fields = {
  __typename?: 'alternate_servers_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  serveraid?: Maybe<Scalars['Float']>;
  serverbid?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Alternate_Servers_Variance_Fields = {
  __typename?: 'alternate_servers_variance_fields';
  id?: Maybe<Scalars['Float']>;
  serveraid?: Maybe<Scalars['Float']>;
  serverbid?: Maybe<Scalars['Float']>;
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

/** columns and relationships of "command_backup" */
export type Command_Backup = {
  __typename?: 'command_backup';
  commandinitiated?: Maybe<Scalars['timestamptz']>;
  commandinitiatorservice?: Maybe<Scalars['command_commandinitiatorservice_enum']>;
  commandinitiatoruserid?: Maybe<Scalars['Int']>;
  commandlastsent?: Maybe<Scalars['timestamptz']>;
  commandparameters?: Maybe<Scalars['jsonb']>;
  commandstate?: Maybe<Scalars['command_commandstate_enum']>;
  commandtries?: Maybe<Scalars['smallint']>;
  commandtype?: Maybe<Scalars['command_commandtype_enum']>;
  destinationdeviceaddressraw?: Maybe<Scalars['Int']>;
  destinationdevicename?: Maybe<Scalars['command_destinationdevicename_enum']>;
  destinationdeviceserialno?: Maybe<Scalars['bigint']>;
  hubipaddress?: Maybe<Scalars['String']>;
  hubnetworkid?: Maybe<Scalars['Int']>;
  hubport?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
};

/** columns and relationships of "command_backup" */
export type Command_BackupCommandparametersArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "command_backup2" */
export type Command_Backup2 = {
  __typename?: 'command_backup2';
  commandinitiated?: Maybe<Scalars['timestamptz']>;
  commandinitiatorservice?: Maybe<Scalars['command_commandinitiatorservice_enum']>;
  commandinitiatoruserid?: Maybe<Scalars['Int']>;
  commandlastsent?: Maybe<Scalars['timestamptz']>;
  commandparameters?: Maybe<Scalars['jsonb']>;
  commandstate?: Maybe<Scalars['command_commandstate_enum']>;
  commandtries?: Maybe<Scalars['smallint']>;
  commandtype?: Maybe<Scalars['command_commandtype_enum']>;
  destinationdeviceaddressraw?: Maybe<Scalars['Int']>;
  destinationdevicename?: Maybe<Scalars['command_destinationdevicename_enum']>;
  destinationdeviceserialno?: Maybe<Scalars['bigint']>;
  hubipaddress?: Maybe<Scalars['String']>;
  hubnetworkid?: Maybe<Scalars['Int']>;
  hubport?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  rn?: Maybe<Scalars['bigint']>;
};

/** columns and relationships of "command_backup2" */
export type Command_Backup2CommandparametersArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "command_backup2" */
export type Command_Backup2_Aggregate = {
  __typename?: 'command_backup2_aggregate';
  aggregate?: Maybe<Command_Backup2_Aggregate_Fields>;
  nodes: Array<Command_Backup2>;
};

/** aggregate fields of "command_backup2" */
export type Command_Backup2_Aggregate_Fields = {
  __typename?: 'command_backup2_aggregate_fields';
  avg?: Maybe<Command_Backup2_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Command_Backup2_Max_Fields>;
  min?: Maybe<Command_Backup2_Min_Fields>;
  stddev?: Maybe<Command_Backup2_Stddev_Fields>;
  stddev_pop?: Maybe<Command_Backup2_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Command_Backup2_Stddev_Samp_Fields>;
  sum?: Maybe<Command_Backup2_Sum_Fields>;
  var_pop?: Maybe<Command_Backup2_Var_Pop_Fields>;
  var_samp?: Maybe<Command_Backup2_Var_Samp_Fields>;
  variance?: Maybe<Command_Backup2_Variance_Fields>;
};

/** aggregate fields of "command_backup2" */
export type Command_Backup2_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Command_Backup2_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Command_Backup2_Append_Input = {
  commandparameters?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Command_Backup2_Avg_Fields = {
  __typename?: 'command_backup2_avg_fields';
  commandinitiatoruserid?: Maybe<Scalars['Float']>;
  commandtries?: Maybe<Scalars['Float']>;
  destinationdeviceaddressraw?: Maybe<Scalars['Float']>;
  destinationdeviceserialno?: Maybe<Scalars['Float']>;
  hubnetworkid?: Maybe<Scalars['Float']>;
  hubport?: Maybe<Scalars['Float']>;
  rn?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "command_backup2". All fields are combined with a logical 'AND'. */
export type Command_Backup2_Bool_Exp = {
  _and?: InputMaybe<Array<Command_Backup2_Bool_Exp>>;
  _not?: InputMaybe<Command_Backup2_Bool_Exp>;
  _or?: InputMaybe<Array<Command_Backup2_Bool_Exp>>;
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
  rn?: InputMaybe<Bigint_Comparison_Exp>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Command_Backup2_Delete_At_Path_Input = {
  commandparameters?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Command_Backup2_Delete_Elem_Input = {
  commandparameters?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Command_Backup2_Delete_Key_Input = {
  commandparameters?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "command_backup2" */
export type Command_Backup2_Inc_Input = {
  commandinitiatoruserid?: InputMaybe<Scalars['Int']>;
  commandtries?: InputMaybe<Scalars['smallint']>;
  destinationdeviceaddressraw?: InputMaybe<Scalars['Int']>;
  destinationdeviceserialno?: InputMaybe<Scalars['bigint']>;
  hubnetworkid?: InputMaybe<Scalars['Int']>;
  hubport?: InputMaybe<Scalars['Int']>;
  rn?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "command_backup2" */
export type Command_Backup2_Insert_Input = {
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
  rn?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Command_Backup2_Max_Fields = {
  __typename?: 'command_backup2_max_fields';
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
  rn?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Command_Backup2_Min_Fields = {
  __typename?: 'command_backup2_min_fields';
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
  rn?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "command_backup2" */
export type Command_Backup2_Mutation_Response = {
  __typename?: 'command_backup2_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Command_Backup2>;
};

/** Ordering options when selecting data from "command_backup2". */
export type Command_Backup2_Order_By = {
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
  rn?: InputMaybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Command_Backup2_Prepend_Input = {
  commandparameters?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "command_backup2" */
export enum Command_Backup2_Select_Column {
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
  /** column name */
  Rn = 'rn',
}

/** input type for updating data in table "command_backup2" */
export type Command_Backup2_Set_Input = {
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
  rn?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Command_Backup2_Stddev_Fields = {
  __typename?: 'command_backup2_stddev_fields';
  commandinitiatoruserid?: Maybe<Scalars['Float']>;
  commandtries?: Maybe<Scalars['Float']>;
  destinationdeviceaddressraw?: Maybe<Scalars['Float']>;
  destinationdeviceserialno?: Maybe<Scalars['Float']>;
  hubnetworkid?: Maybe<Scalars['Float']>;
  hubport?: Maybe<Scalars['Float']>;
  rn?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Command_Backup2_Stddev_Pop_Fields = {
  __typename?: 'command_backup2_stddev_pop_fields';
  commandinitiatoruserid?: Maybe<Scalars['Float']>;
  commandtries?: Maybe<Scalars['Float']>;
  destinationdeviceaddressraw?: Maybe<Scalars['Float']>;
  destinationdeviceserialno?: Maybe<Scalars['Float']>;
  hubnetworkid?: Maybe<Scalars['Float']>;
  hubport?: Maybe<Scalars['Float']>;
  rn?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Command_Backup2_Stddev_Samp_Fields = {
  __typename?: 'command_backup2_stddev_samp_fields';
  commandinitiatoruserid?: Maybe<Scalars['Float']>;
  commandtries?: Maybe<Scalars['Float']>;
  destinationdeviceaddressraw?: Maybe<Scalars['Float']>;
  destinationdeviceserialno?: Maybe<Scalars['Float']>;
  hubnetworkid?: Maybe<Scalars['Float']>;
  hubport?: Maybe<Scalars['Float']>;
  rn?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Command_Backup2_Sum_Fields = {
  __typename?: 'command_backup2_sum_fields';
  commandinitiatoruserid?: Maybe<Scalars['Int']>;
  commandtries?: Maybe<Scalars['smallint']>;
  destinationdeviceaddressraw?: Maybe<Scalars['Int']>;
  destinationdeviceserialno?: Maybe<Scalars['bigint']>;
  hubnetworkid?: Maybe<Scalars['Int']>;
  hubport?: Maybe<Scalars['Int']>;
  rn?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Command_Backup2_Var_Pop_Fields = {
  __typename?: 'command_backup2_var_pop_fields';
  commandinitiatoruserid?: Maybe<Scalars['Float']>;
  commandtries?: Maybe<Scalars['Float']>;
  destinationdeviceaddressraw?: Maybe<Scalars['Float']>;
  destinationdeviceserialno?: Maybe<Scalars['Float']>;
  hubnetworkid?: Maybe<Scalars['Float']>;
  hubport?: Maybe<Scalars['Float']>;
  rn?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Command_Backup2_Var_Samp_Fields = {
  __typename?: 'command_backup2_var_samp_fields';
  commandinitiatoruserid?: Maybe<Scalars['Float']>;
  commandtries?: Maybe<Scalars['Float']>;
  destinationdeviceaddressraw?: Maybe<Scalars['Float']>;
  destinationdeviceserialno?: Maybe<Scalars['Float']>;
  hubnetworkid?: Maybe<Scalars['Float']>;
  hubport?: Maybe<Scalars['Float']>;
  rn?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Command_Backup2_Variance_Fields = {
  __typename?: 'command_backup2_variance_fields';
  commandinitiatoruserid?: Maybe<Scalars['Float']>;
  commandtries?: Maybe<Scalars['Float']>;
  destinationdeviceaddressraw?: Maybe<Scalars['Float']>;
  destinationdeviceserialno?: Maybe<Scalars['Float']>;
  hubnetworkid?: Maybe<Scalars['Float']>;
  hubport?: Maybe<Scalars['Float']>;
  rn?: Maybe<Scalars['Float']>;
};

/** aggregated selection of "command_backup" */
export type Command_Backup_Aggregate = {
  __typename?: 'command_backup_aggregate';
  aggregate?: Maybe<Command_Backup_Aggregate_Fields>;
  nodes: Array<Command_Backup>;
};

/** aggregate fields of "command_backup" */
export type Command_Backup_Aggregate_Fields = {
  __typename?: 'command_backup_aggregate_fields';
  avg?: Maybe<Command_Backup_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Command_Backup_Max_Fields>;
  min?: Maybe<Command_Backup_Min_Fields>;
  stddev?: Maybe<Command_Backup_Stddev_Fields>;
  stddev_pop?: Maybe<Command_Backup_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Command_Backup_Stddev_Samp_Fields>;
  sum?: Maybe<Command_Backup_Sum_Fields>;
  var_pop?: Maybe<Command_Backup_Var_Pop_Fields>;
  var_samp?: Maybe<Command_Backup_Var_Samp_Fields>;
  variance?: Maybe<Command_Backup_Variance_Fields>;
};

/** aggregate fields of "command_backup" */
export type Command_Backup_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Command_Backup_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Command_Backup_Append_Input = {
  commandparameters?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Command_Backup_Avg_Fields = {
  __typename?: 'command_backup_avg_fields';
  commandinitiatoruserid?: Maybe<Scalars['Float']>;
  commandtries?: Maybe<Scalars['Float']>;
  destinationdeviceaddressraw?: Maybe<Scalars['Float']>;
  destinationdeviceserialno?: Maybe<Scalars['Float']>;
  hubnetworkid?: Maybe<Scalars['Float']>;
  hubport?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "command_backup". All fields are combined with a logical 'AND'. */
export type Command_Backup_Bool_Exp = {
  _and?: InputMaybe<Array<Command_Backup_Bool_Exp>>;
  _not?: InputMaybe<Command_Backup_Bool_Exp>;
  _or?: InputMaybe<Array<Command_Backup_Bool_Exp>>;
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
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Command_Backup_Delete_At_Path_Input = {
  commandparameters?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Command_Backup_Delete_Elem_Input = {
  commandparameters?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Command_Backup_Delete_Key_Input = {
  commandparameters?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "command_backup" */
export type Command_Backup_Inc_Input = {
  commandinitiatoruserid?: InputMaybe<Scalars['Int']>;
  commandtries?: InputMaybe<Scalars['smallint']>;
  destinationdeviceaddressraw?: InputMaybe<Scalars['Int']>;
  destinationdeviceserialno?: InputMaybe<Scalars['bigint']>;
  hubnetworkid?: InputMaybe<Scalars['Int']>;
  hubport?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "command_backup" */
export type Command_Backup_Insert_Input = {
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

/** aggregate max on columns */
export type Command_Backup_Max_Fields = {
  __typename?: 'command_backup_max_fields';
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

/** aggregate min on columns */
export type Command_Backup_Min_Fields = {
  __typename?: 'command_backup_min_fields';
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

/** response of any mutation on the table "command_backup" */
export type Command_Backup_Mutation_Response = {
  __typename?: 'command_backup_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Command_Backup>;
};

/** Ordering options when selecting data from "command_backup". */
export type Command_Backup_Order_By = {
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
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Command_Backup_Prepend_Input = {
  commandparameters?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "command_backup" */
export enum Command_Backup_Select_Column {
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

/** input type for updating data in table "command_backup" */
export type Command_Backup_Set_Input = {
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
export type Command_Backup_Stddev_Fields = {
  __typename?: 'command_backup_stddev_fields';
  commandinitiatoruserid?: Maybe<Scalars['Float']>;
  commandtries?: Maybe<Scalars['Float']>;
  destinationdeviceaddressraw?: Maybe<Scalars['Float']>;
  destinationdeviceserialno?: Maybe<Scalars['Float']>;
  hubnetworkid?: Maybe<Scalars['Float']>;
  hubport?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Command_Backup_Stddev_Pop_Fields = {
  __typename?: 'command_backup_stddev_pop_fields';
  commandinitiatoruserid?: Maybe<Scalars['Float']>;
  commandtries?: Maybe<Scalars['Float']>;
  destinationdeviceaddressraw?: Maybe<Scalars['Float']>;
  destinationdeviceserialno?: Maybe<Scalars['Float']>;
  hubnetworkid?: Maybe<Scalars['Float']>;
  hubport?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Command_Backup_Stddev_Samp_Fields = {
  __typename?: 'command_backup_stddev_samp_fields';
  commandinitiatoruserid?: Maybe<Scalars['Float']>;
  commandtries?: Maybe<Scalars['Float']>;
  destinationdeviceaddressraw?: Maybe<Scalars['Float']>;
  destinationdeviceserialno?: Maybe<Scalars['Float']>;
  hubnetworkid?: Maybe<Scalars['Float']>;
  hubport?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Command_Backup_Sum_Fields = {
  __typename?: 'command_backup_sum_fields';
  commandinitiatoruserid?: Maybe<Scalars['Int']>;
  commandtries?: Maybe<Scalars['smallint']>;
  destinationdeviceaddressraw?: Maybe<Scalars['Int']>;
  destinationdeviceserialno?: Maybe<Scalars['bigint']>;
  hubnetworkid?: Maybe<Scalars['Int']>;
  hubport?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Command_Backup_Var_Pop_Fields = {
  __typename?: 'command_backup_var_pop_fields';
  commandinitiatoruserid?: Maybe<Scalars['Float']>;
  commandtries?: Maybe<Scalars['Float']>;
  destinationdeviceaddressraw?: Maybe<Scalars['Float']>;
  destinationdeviceserialno?: Maybe<Scalars['Float']>;
  hubnetworkid?: Maybe<Scalars['Float']>;
  hubport?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Command_Backup_Var_Samp_Fields = {
  __typename?: 'command_backup_var_samp_fields';
  commandinitiatoruserid?: Maybe<Scalars['Float']>;
  commandtries?: Maybe<Scalars['Float']>;
  destinationdeviceaddressraw?: Maybe<Scalars['Float']>;
  destinationdeviceserialno?: Maybe<Scalars['Float']>;
  hubnetworkid?: Maybe<Scalars['Float']>;
  hubport?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Command_Backup_Variance_Fields = {
  __typename?: 'command_backup_variance_fields';
  commandinitiatoruserid?: Maybe<Scalars['Float']>;
  commandtries?: Maybe<Scalars['Float']>;
  destinationdeviceaddressraw?: Maybe<Scalars['Float']>;
  destinationdeviceserialno?: Maybe<Scalars['Float']>;
  hubnetworkid?: Maybe<Scalars['Float']>;
  hubport?: Maybe<Scalars['Float']>;
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

/** columns and relationships of "config_reply" */
export type Config_Reply = {
  __typename?: 'config_reply';
  /** An object relationship */
  eddi?: Maybe<Eddi>;
  /** An object relationship */
  eddi_config_reply_datum?: Maybe<Eddi_Config_Reply_Data>;
  eddiconfigreplydataid?: Maybe<Scalars['Int']>;
  eddiserialno?: Maybe<Scalars['bigint']>;
  id: Scalars['Int'];
  serialno: Scalars['bigint'];
  structure: Scalars['smallint'];
  updatedat: Scalars['timestamptz'];
  /** An object relationship */
  zappi?: Maybe<Zappi>;
  /** An object relationship */
  zappi1_config_reply_datum?: Maybe<Zappi1_Config_Reply_Data>;
  zappi1configreplydataid?: Maybe<Scalars['Int']>;
  /** An object relationship */
  zappi2_config_reply_datum?: Maybe<Zappi2_Config_Reply_Data>;
  zappi2configreplydataid?: Maybe<Scalars['Int']>;
  zappiserialno?: Maybe<Scalars['bigint']>;
};

/** aggregated selection of "config_reply" */
export type Config_Reply_Aggregate = {
  __typename?: 'config_reply_aggregate';
  aggregate?: Maybe<Config_Reply_Aggregate_Fields>;
  nodes: Array<Config_Reply>;
};

/** aggregate fields of "config_reply" */
export type Config_Reply_Aggregate_Fields = {
  __typename?: 'config_reply_aggregate_fields';
  avg?: Maybe<Config_Reply_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Config_Reply_Max_Fields>;
  min?: Maybe<Config_Reply_Min_Fields>;
  stddev?: Maybe<Config_Reply_Stddev_Fields>;
  stddev_pop?: Maybe<Config_Reply_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Config_Reply_Stddev_Samp_Fields>;
  sum?: Maybe<Config_Reply_Sum_Fields>;
  var_pop?: Maybe<Config_Reply_Var_Pop_Fields>;
  var_samp?: Maybe<Config_Reply_Var_Samp_Fields>;
  variance?: Maybe<Config_Reply_Variance_Fields>;
};

/** aggregate fields of "config_reply" */
export type Config_Reply_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Config_Reply_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Config_Reply_Avg_Fields = {
  __typename?: 'config_reply_avg_fields';
  eddiconfigreplydataid?: Maybe<Scalars['Float']>;
  eddiserialno?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  structure?: Maybe<Scalars['Float']>;
  zappi1configreplydataid?: Maybe<Scalars['Float']>;
  zappi2configreplydataid?: Maybe<Scalars['Float']>;
  zappiserialno?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "config_reply". All fields are combined with a logical 'AND'. */
export type Config_Reply_Bool_Exp = {
  _and?: InputMaybe<Array<Config_Reply_Bool_Exp>>;
  _not?: InputMaybe<Config_Reply_Bool_Exp>;
  _or?: InputMaybe<Array<Config_Reply_Bool_Exp>>;
  eddi?: InputMaybe<Eddi_Bool_Exp>;
  eddi_config_reply_datum?: InputMaybe<Eddi_Config_Reply_Data_Bool_Exp>;
  eddiconfigreplydataid?: InputMaybe<Int_Comparison_Exp>;
  eddiserialno?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  serialno?: InputMaybe<Bigint_Comparison_Exp>;
  structure?: InputMaybe<Smallint_Comparison_Exp>;
  updatedat?: InputMaybe<Timestamptz_Comparison_Exp>;
  zappi?: InputMaybe<Zappi_Bool_Exp>;
  zappi1_config_reply_datum?: InputMaybe<Zappi1_Config_Reply_Data_Bool_Exp>;
  zappi1configreplydataid?: InputMaybe<Int_Comparison_Exp>;
  zappi2_config_reply_datum?: InputMaybe<Zappi2_Config_Reply_Data_Bool_Exp>;
  zappi2configreplydataid?: InputMaybe<Int_Comparison_Exp>;
  zappiserialno?: InputMaybe<Bigint_Comparison_Exp>;
};

/** columns and relationships of "config_reply_boost_timer" */
export type Config_Reply_Boost_Timer = {
  __typename?: 'config_reply_boost_timer';
  duration: Scalars['smallint'];
  economy: Scalars['Boolean'];
  /** An object relationship */
  eddi_config_reply_datum?: Maybe<Eddi_Config_Reply_Data>;
  eddiconfigreplydataid?: Maybe<Scalars['Int']>;
  fridayon: Scalars['Boolean'];
  heatertype?: Maybe<Scalars['config_reply_boost_timer_heatertype_enum']>;
  id: Scalars['Int'];
  mondayon: Scalars['Boolean'];
  saturdayon: Scalars['Boolean'];
  slot: Scalars['smallint'];
  starthour: Scalars['smallint'];
  startminute: Scalars['smallint'];
  sundayon: Scalars['Boolean'];
  temperature?: Maybe<Scalars['smallint']>;
  thursdayon: Scalars['Boolean'];
  tuesdayon: Scalars['Boolean'];
  wednesdayon: Scalars['Boolean'];
  /** An object relationship */
  zappi1_config_reply_datum?: Maybe<Zappi1_Config_Reply_Data>;
  zappi1configreplydataid?: Maybe<Scalars['Int']>;
  /** An object relationship */
  zappi2_config_reply_datum?: Maybe<Zappi2_Config_Reply_Data>;
  zappi2configreplydataid?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "config_reply_boost_timer" */
export type Config_Reply_Boost_Timer_Aggregate = {
  __typename?: 'config_reply_boost_timer_aggregate';
  aggregate?: Maybe<Config_Reply_Boost_Timer_Aggregate_Fields>;
  nodes: Array<Config_Reply_Boost_Timer>;
};

/** aggregate fields of "config_reply_boost_timer" */
export type Config_Reply_Boost_Timer_Aggregate_Fields = {
  __typename?: 'config_reply_boost_timer_aggregate_fields';
  avg?: Maybe<Config_Reply_Boost_Timer_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Config_Reply_Boost_Timer_Max_Fields>;
  min?: Maybe<Config_Reply_Boost_Timer_Min_Fields>;
  stddev?: Maybe<Config_Reply_Boost_Timer_Stddev_Fields>;
  stddev_pop?: Maybe<Config_Reply_Boost_Timer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Config_Reply_Boost_Timer_Stddev_Samp_Fields>;
  sum?: Maybe<Config_Reply_Boost_Timer_Sum_Fields>;
  var_pop?: Maybe<Config_Reply_Boost_Timer_Var_Pop_Fields>;
  var_samp?: Maybe<Config_Reply_Boost_Timer_Var_Samp_Fields>;
  variance?: Maybe<Config_Reply_Boost_Timer_Variance_Fields>;
};

/** aggregate fields of "config_reply_boost_timer" */
export type Config_Reply_Boost_Timer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Config_Reply_Boost_Timer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "config_reply_boost_timer" */
export type Config_Reply_Boost_Timer_Aggregate_Order_By = {
  avg?: InputMaybe<Config_Reply_Boost_Timer_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Config_Reply_Boost_Timer_Max_Order_By>;
  min?: InputMaybe<Config_Reply_Boost_Timer_Min_Order_By>;
  stddev?: InputMaybe<Config_Reply_Boost_Timer_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Config_Reply_Boost_Timer_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Config_Reply_Boost_Timer_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Config_Reply_Boost_Timer_Sum_Order_By>;
  var_pop?: InputMaybe<Config_Reply_Boost_Timer_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Config_Reply_Boost_Timer_Var_Samp_Order_By>;
  variance?: InputMaybe<Config_Reply_Boost_Timer_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "config_reply_boost_timer" */
export type Config_Reply_Boost_Timer_Arr_Rel_Insert_Input = {
  data: Array<Config_Reply_Boost_Timer_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Config_Reply_Boost_Timer_On_Conflict>;
};

/** aggregate avg on columns */
export type Config_Reply_Boost_Timer_Avg_Fields = {
  __typename?: 'config_reply_boost_timer_avg_fields';
  duration?: Maybe<Scalars['Float']>;
  eddiconfigreplydataid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
  starthour?: Maybe<Scalars['Float']>;
  startminute?: Maybe<Scalars['Float']>;
  temperature?: Maybe<Scalars['Float']>;
  zappi1configreplydataid?: Maybe<Scalars['Float']>;
  zappi2configreplydataid?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "config_reply_boost_timer" */
export type Config_Reply_Boost_Timer_Avg_Order_By = {
  duration?: InputMaybe<Order_By>;
  eddiconfigreplydataid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
  starthour?: InputMaybe<Order_By>;
  startminute?: InputMaybe<Order_By>;
  temperature?: InputMaybe<Order_By>;
  zappi1configreplydataid?: InputMaybe<Order_By>;
  zappi2configreplydataid?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "config_reply_boost_timer". All fields are combined with a logical 'AND'. */
export type Config_Reply_Boost_Timer_Bool_Exp = {
  _and?: InputMaybe<Array<Config_Reply_Boost_Timer_Bool_Exp>>;
  _not?: InputMaybe<Config_Reply_Boost_Timer_Bool_Exp>;
  _or?: InputMaybe<Array<Config_Reply_Boost_Timer_Bool_Exp>>;
  duration?: InputMaybe<Smallint_Comparison_Exp>;
  economy?: InputMaybe<Boolean_Comparison_Exp>;
  eddi_config_reply_datum?: InputMaybe<Eddi_Config_Reply_Data_Bool_Exp>;
  eddiconfigreplydataid?: InputMaybe<Int_Comparison_Exp>;
  fridayon?: InputMaybe<Boolean_Comparison_Exp>;
  heatertype?: InputMaybe<Config_Reply_Boost_Timer_Heatertype_Enum_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  mondayon?: InputMaybe<Boolean_Comparison_Exp>;
  saturdayon?: InputMaybe<Boolean_Comparison_Exp>;
  slot?: InputMaybe<Smallint_Comparison_Exp>;
  starthour?: InputMaybe<Smallint_Comparison_Exp>;
  startminute?: InputMaybe<Smallint_Comparison_Exp>;
  sundayon?: InputMaybe<Boolean_Comparison_Exp>;
  temperature?: InputMaybe<Smallint_Comparison_Exp>;
  thursdayon?: InputMaybe<Boolean_Comparison_Exp>;
  tuesdayon?: InputMaybe<Boolean_Comparison_Exp>;
  wednesdayon?: InputMaybe<Boolean_Comparison_Exp>;
  zappi1_config_reply_datum?: InputMaybe<Zappi1_Config_Reply_Data_Bool_Exp>;
  zappi1configreplydataid?: InputMaybe<Int_Comparison_Exp>;
  zappi2_config_reply_datum?: InputMaybe<Zappi2_Config_Reply_Data_Bool_Exp>;
  zappi2configreplydataid?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "config_reply_boost_timer" */
export enum Config_Reply_Boost_Timer_Constraint {
  /** unique or primary key constraint */
  Pk_5a81356ceabecdd7309e8cc2414 = 'PK_5a81356ceabecdd7309e8cc2414',
}

/** Boolean expression to compare columns of type "config_reply_boost_timer_heatertype_enum". All fields are combined with logical 'AND'. */
export type Config_Reply_Boost_Timer_Heatertype_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['config_reply_boost_timer_heatertype_enum']>;
  _gt?: InputMaybe<Scalars['config_reply_boost_timer_heatertype_enum']>;
  _gte?: InputMaybe<Scalars['config_reply_boost_timer_heatertype_enum']>;
  _in?: InputMaybe<Array<Scalars['config_reply_boost_timer_heatertype_enum']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['config_reply_boost_timer_heatertype_enum']>;
  _lte?: InputMaybe<Scalars['config_reply_boost_timer_heatertype_enum']>;
  _neq?: InputMaybe<Scalars['config_reply_boost_timer_heatertype_enum']>;
  _nin?: InputMaybe<Array<Scalars['config_reply_boost_timer_heatertype_enum']>>;
};

/** input type for incrementing numeric columns in table "config_reply_boost_timer" */
export type Config_Reply_Boost_Timer_Inc_Input = {
  duration?: InputMaybe<Scalars['smallint']>;
  eddiconfigreplydataid?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  slot?: InputMaybe<Scalars['smallint']>;
  starthour?: InputMaybe<Scalars['smallint']>;
  startminute?: InputMaybe<Scalars['smallint']>;
  temperature?: InputMaybe<Scalars['smallint']>;
  zappi1configreplydataid?: InputMaybe<Scalars['Int']>;
  zappi2configreplydataid?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "config_reply_boost_timer" */
export type Config_Reply_Boost_Timer_Insert_Input = {
  duration?: InputMaybe<Scalars['smallint']>;
  economy?: InputMaybe<Scalars['Boolean']>;
  eddi_config_reply_datum?: InputMaybe<Eddi_Config_Reply_Data_Obj_Rel_Insert_Input>;
  eddiconfigreplydataid?: InputMaybe<Scalars['Int']>;
  fridayon?: InputMaybe<Scalars['Boolean']>;
  heatertype?: InputMaybe<Scalars['config_reply_boost_timer_heatertype_enum']>;
  id?: InputMaybe<Scalars['Int']>;
  mondayon?: InputMaybe<Scalars['Boolean']>;
  saturdayon?: InputMaybe<Scalars['Boolean']>;
  slot?: InputMaybe<Scalars['smallint']>;
  starthour?: InputMaybe<Scalars['smallint']>;
  startminute?: InputMaybe<Scalars['smallint']>;
  sundayon?: InputMaybe<Scalars['Boolean']>;
  temperature?: InputMaybe<Scalars['smallint']>;
  thursdayon?: InputMaybe<Scalars['Boolean']>;
  tuesdayon?: InputMaybe<Scalars['Boolean']>;
  wednesdayon?: InputMaybe<Scalars['Boolean']>;
  zappi1_config_reply_datum?: InputMaybe<Zappi1_Config_Reply_Data_Obj_Rel_Insert_Input>;
  zappi1configreplydataid?: InputMaybe<Scalars['Int']>;
  zappi2_config_reply_datum?: InputMaybe<Zappi2_Config_Reply_Data_Obj_Rel_Insert_Input>;
  zappi2configreplydataid?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Config_Reply_Boost_Timer_Max_Fields = {
  __typename?: 'config_reply_boost_timer_max_fields';
  duration?: Maybe<Scalars['smallint']>;
  eddiconfigreplydataid?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  slot?: Maybe<Scalars['smallint']>;
  starthour?: Maybe<Scalars['smallint']>;
  startminute?: Maybe<Scalars['smallint']>;
  temperature?: Maybe<Scalars['smallint']>;
  zappi1configreplydataid?: Maybe<Scalars['Int']>;
  zappi2configreplydataid?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "config_reply_boost_timer" */
export type Config_Reply_Boost_Timer_Max_Order_By = {
  duration?: InputMaybe<Order_By>;
  eddiconfigreplydataid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
  starthour?: InputMaybe<Order_By>;
  startminute?: InputMaybe<Order_By>;
  temperature?: InputMaybe<Order_By>;
  zappi1configreplydataid?: InputMaybe<Order_By>;
  zappi2configreplydataid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Config_Reply_Boost_Timer_Min_Fields = {
  __typename?: 'config_reply_boost_timer_min_fields';
  duration?: Maybe<Scalars['smallint']>;
  eddiconfigreplydataid?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  slot?: Maybe<Scalars['smallint']>;
  starthour?: Maybe<Scalars['smallint']>;
  startminute?: Maybe<Scalars['smallint']>;
  temperature?: Maybe<Scalars['smallint']>;
  zappi1configreplydataid?: Maybe<Scalars['Int']>;
  zappi2configreplydataid?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "config_reply_boost_timer" */
export type Config_Reply_Boost_Timer_Min_Order_By = {
  duration?: InputMaybe<Order_By>;
  eddiconfigreplydataid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
  starthour?: InputMaybe<Order_By>;
  startminute?: InputMaybe<Order_By>;
  temperature?: InputMaybe<Order_By>;
  zappi1configreplydataid?: InputMaybe<Order_By>;
  zappi2configreplydataid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "config_reply_boost_timer" */
export type Config_Reply_Boost_Timer_Mutation_Response = {
  __typename?: 'config_reply_boost_timer_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Config_Reply_Boost_Timer>;
};

/** on_conflict condition type for table "config_reply_boost_timer" */
export type Config_Reply_Boost_Timer_On_Conflict = {
  constraint: Config_Reply_Boost_Timer_Constraint;
  update_columns?: Array<Config_Reply_Boost_Timer_Update_Column>;
  where?: InputMaybe<Config_Reply_Boost_Timer_Bool_Exp>;
};

/** Ordering options when selecting data from "config_reply_boost_timer". */
export type Config_Reply_Boost_Timer_Order_By = {
  duration?: InputMaybe<Order_By>;
  economy?: InputMaybe<Order_By>;
  eddi_config_reply_datum?: InputMaybe<Eddi_Config_Reply_Data_Order_By>;
  eddiconfigreplydataid?: InputMaybe<Order_By>;
  fridayon?: InputMaybe<Order_By>;
  heatertype?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mondayon?: InputMaybe<Order_By>;
  saturdayon?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
  starthour?: InputMaybe<Order_By>;
  startminute?: InputMaybe<Order_By>;
  sundayon?: InputMaybe<Order_By>;
  temperature?: InputMaybe<Order_By>;
  thursdayon?: InputMaybe<Order_By>;
  tuesdayon?: InputMaybe<Order_By>;
  wednesdayon?: InputMaybe<Order_By>;
  zappi1_config_reply_datum?: InputMaybe<Zappi1_Config_Reply_Data_Order_By>;
  zappi1configreplydataid?: InputMaybe<Order_By>;
  zappi2_config_reply_datum?: InputMaybe<Zappi2_Config_Reply_Data_Order_By>;
  zappi2configreplydataid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: config_reply_boost_timer */
export type Config_Reply_Boost_Timer_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "config_reply_boost_timer" */
export enum Config_Reply_Boost_Timer_Select_Column {
  /** column name */
  Duration = 'duration',
  /** column name */
  Economy = 'economy',
  /** column name */
  Eddiconfigreplydataid = 'eddiconfigreplydataid',
  /** column name */
  Fridayon = 'fridayon',
  /** column name */
  Heatertype = 'heatertype',
  /** column name */
  Id = 'id',
  /** column name */
  Mondayon = 'mondayon',
  /** column name */
  Saturdayon = 'saturdayon',
  /** column name */
  Slot = 'slot',
  /** column name */
  Starthour = 'starthour',
  /** column name */
  Startminute = 'startminute',
  /** column name */
  Sundayon = 'sundayon',
  /** column name */
  Temperature = 'temperature',
  /** column name */
  Thursdayon = 'thursdayon',
  /** column name */
  Tuesdayon = 'tuesdayon',
  /** column name */
  Wednesdayon = 'wednesdayon',
  /** column name */
  Zappi1configreplydataid = 'zappi1configreplydataid',
  /** column name */
  Zappi2configreplydataid = 'zappi2configreplydataid',
}

/** input type for updating data in table "config_reply_boost_timer" */
export type Config_Reply_Boost_Timer_Set_Input = {
  duration?: InputMaybe<Scalars['smallint']>;
  economy?: InputMaybe<Scalars['Boolean']>;
  eddiconfigreplydataid?: InputMaybe<Scalars['Int']>;
  fridayon?: InputMaybe<Scalars['Boolean']>;
  heatertype?: InputMaybe<Scalars['config_reply_boost_timer_heatertype_enum']>;
  id?: InputMaybe<Scalars['Int']>;
  mondayon?: InputMaybe<Scalars['Boolean']>;
  saturdayon?: InputMaybe<Scalars['Boolean']>;
  slot?: InputMaybe<Scalars['smallint']>;
  starthour?: InputMaybe<Scalars['smallint']>;
  startminute?: InputMaybe<Scalars['smallint']>;
  sundayon?: InputMaybe<Scalars['Boolean']>;
  temperature?: InputMaybe<Scalars['smallint']>;
  thursdayon?: InputMaybe<Scalars['Boolean']>;
  tuesdayon?: InputMaybe<Scalars['Boolean']>;
  wednesdayon?: InputMaybe<Scalars['Boolean']>;
  zappi1configreplydataid?: InputMaybe<Scalars['Int']>;
  zappi2configreplydataid?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Config_Reply_Boost_Timer_Stddev_Fields = {
  __typename?: 'config_reply_boost_timer_stddev_fields';
  duration?: Maybe<Scalars['Float']>;
  eddiconfigreplydataid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
  starthour?: Maybe<Scalars['Float']>;
  startminute?: Maybe<Scalars['Float']>;
  temperature?: Maybe<Scalars['Float']>;
  zappi1configreplydataid?: Maybe<Scalars['Float']>;
  zappi2configreplydataid?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "config_reply_boost_timer" */
export type Config_Reply_Boost_Timer_Stddev_Order_By = {
  duration?: InputMaybe<Order_By>;
  eddiconfigreplydataid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
  starthour?: InputMaybe<Order_By>;
  startminute?: InputMaybe<Order_By>;
  temperature?: InputMaybe<Order_By>;
  zappi1configreplydataid?: InputMaybe<Order_By>;
  zappi2configreplydataid?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Config_Reply_Boost_Timer_Stddev_Pop_Fields = {
  __typename?: 'config_reply_boost_timer_stddev_pop_fields';
  duration?: Maybe<Scalars['Float']>;
  eddiconfigreplydataid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
  starthour?: Maybe<Scalars['Float']>;
  startminute?: Maybe<Scalars['Float']>;
  temperature?: Maybe<Scalars['Float']>;
  zappi1configreplydataid?: Maybe<Scalars['Float']>;
  zappi2configreplydataid?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "config_reply_boost_timer" */
export type Config_Reply_Boost_Timer_Stddev_Pop_Order_By = {
  duration?: InputMaybe<Order_By>;
  eddiconfigreplydataid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
  starthour?: InputMaybe<Order_By>;
  startminute?: InputMaybe<Order_By>;
  temperature?: InputMaybe<Order_By>;
  zappi1configreplydataid?: InputMaybe<Order_By>;
  zappi2configreplydataid?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Config_Reply_Boost_Timer_Stddev_Samp_Fields = {
  __typename?: 'config_reply_boost_timer_stddev_samp_fields';
  duration?: Maybe<Scalars['Float']>;
  eddiconfigreplydataid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
  starthour?: Maybe<Scalars['Float']>;
  startminute?: Maybe<Scalars['Float']>;
  temperature?: Maybe<Scalars['Float']>;
  zappi1configreplydataid?: Maybe<Scalars['Float']>;
  zappi2configreplydataid?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "config_reply_boost_timer" */
export type Config_Reply_Boost_Timer_Stddev_Samp_Order_By = {
  duration?: InputMaybe<Order_By>;
  eddiconfigreplydataid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
  starthour?: InputMaybe<Order_By>;
  startminute?: InputMaybe<Order_By>;
  temperature?: InputMaybe<Order_By>;
  zappi1configreplydataid?: InputMaybe<Order_By>;
  zappi2configreplydataid?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Config_Reply_Boost_Timer_Sum_Fields = {
  __typename?: 'config_reply_boost_timer_sum_fields';
  duration?: Maybe<Scalars['smallint']>;
  eddiconfigreplydataid?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  slot?: Maybe<Scalars['smallint']>;
  starthour?: Maybe<Scalars['smallint']>;
  startminute?: Maybe<Scalars['smallint']>;
  temperature?: Maybe<Scalars['smallint']>;
  zappi1configreplydataid?: Maybe<Scalars['Int']>;
  zappi2configreplydataid?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "config_reply_boost_timer" */
export type Config_Reply_Boost_Timer_Sum_Order_By = {
  duration?: InputMaybe<Order_By>;
  eddiconfigreplydataid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
  starthour?: InputMaybe<Order_By>;
  startminute?: InputMaybe<Order_By>;
  temperature?: InputMaybe<Order_By>;
  zappi1configreplydataid?: InputMaybe<Order_By>;
  zappi2configreplydataid?: InputMaybe<Order_By>;
};

/** update columns of table "config_reply_boost_timer" */
export enum Config_Reply_Boost_Timer_Update_Column {
  /** column name */
  Duration = 'duration',
  /** column name */
  Economy = 'economy',
  /** column name */
  Eddiconfigreplydataid = 'eddiconfigreplydataid',
  /** column name */
  Fridayon = 'fridayon',
  /** column name */
  Heatertype = 'heatertype',
  /** column name */
  Id = 'id',
  /** column name */
  Mondayon = 'mondayon',
  /** column name */
  Saturdayon = 'saturdayon',
  /** column name */
  Slot = 'slot',
  /** column name */
  Starthour = 'starthour',
  /** column name */
  Startminute = 'startminute',
  /** column name */
  Sundayon = 'sundayon',
  /** column name */
  Temperature = 'temperature',
  /** column name */
  Thursdayon = 'thursdayon',
  /** column name */
  Tuesdayon = 'tuesdayon',
  /** column name */
  Wednesdayon = 'wednesdayon',
  /** column name */
  Zappi1configreplydataid = 'zappi1configreplydataid',
  /** column name */
  Zappi2configreplydataid = 'zappi2configreplydataid',
}

/** aggregate var_pop on columns */
export type Config_Reply_Boost_Timer_Var_Pop_Fields = {
  __typename?: 'config_reply_boost_timer_var_pop_fields';
  duration?: Maybe<Scalars['Float']>;
  eddiconfigreplydataid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
  starthour?: Maybe<Scalars['Float']>;
  startminute?: Maybe<Scalars['Float']>;
  temperature?: Maybe<Scalars['Float']>;
  zappi1configreplydataid?: Maybe<Scalars['Float']>;
  zappi2configreplydataid?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "config_reply_boost_timer" */
export type Config_Reply_Boost_Timer_Var_Pop_Order_By = {
  duration?: InputMaybe<Order_By>;
  eddiconfigreplydataid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
  starthour?: InputMaybe<Order_By>;
  startminute?: InputMaybe<Order_By>;
  temperature?: InputMaybe<Order_By>;
  zappi1configreplydataid?: InputMaybe<Order_By>;
  zappi2configreplydataid?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Config_Reply_Boost_Timer_Var_Samp_Fields = {
  __typename?: 'config_reply_boost_timer_var_samp_fields';
  duration?: Maybe<Scalars['Float']>;
  eddiconfigreplydataid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
  starthour?: Maybe<Scalars['Float']>;
  startminute?: Maybe<Scalars['Float']>;
  temperature?: Maybe<Scalars['Float']>;
  zappi1configreplydataid?: Maybe<Scalars['Float']>;
  zappi2configreplydataid?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "config_reply_boost_timer" */
export type Config_Reply_Boost_Timer_Var_Samp_Order_By = {
  duration?: InputMaybe<Order_By>;
  eddiconfigreplydataid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
  starthour?: InputMaybe<Order_By>;
  startminute?: InputMaybe<Order_By>;
  temperature?: InputMaybe<Order_By>;
  zappi1configreplydataid?: InputMaybe<Order_By>;
  zappi2configreplydataid?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Config_Reply_Boost_Timer_Variance_Fields = {
  __typename?: 'config_reply_boost_timer_variance_fields';
  duration?: Maybe<Scalars['Float']>;
  eddiconfigreplydataid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
  starthour?: Maybe<Scalars['Float']>;
  startminute?: Maybe<Scalars['Float']>;
  temperature?: Maybe<Scalars['Float']>;
  zappi1configreplydataid?: Maybe<Scalars['Float']>;
  zappi2configreplydataid?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "config_reply_boost_timer" */
export type Config_Reply_Boost_Timer_Variance_Order_By = {
  duration?: InputMaybe<Order_By>;
  eddiconfigreplydataid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
  starthour?: InputMaybe<Order_By>;
  startminute?: InputMaybe<Order_By>;
  temperature?: InputMaybe<Order_By>;
  zappi1configreplydataid?: InputMaybe<Order_By>;
  zappi2configreplydataid?: InputMaybe<Order_By>;
};

/** unique or primary key constraints on table "config_reply" */
export enum Config_Reply_Constraint {
  /** unique or primary key constraint */
  PkC3a4c701c6296e447ec4d22f3f6 = 'PK_c3a4c701c6296e447ec4d22f3f6',
  /** unique or primary key constraint */
  Rel_3baf65bb45ce2859ac32735a67 = 'REL_3baf65bb45ce2859ac32735a67',
  /** unique or primary key constraint */
  Rel_73a000c058e740c918ea5671d4 = 'REL_73a000c058e740c918ea5671d4',
  /** unique or primary key constraint */
  Rel_6044c3432d62fa5e6e4137a854 = 'REL_6044c3432d62fa5e6e4137a854',
  /** unique or primary key constraint */
  Uq_9d8a1f5e661cd00e338b9186741 = 'UQ_9d8a1f5e661cd00e338b9186741',
  /** unique or primary key constraint */
  UqA1d9b6c8b6ebcadb725553aa5f4 = 'UQ_a1d9b6c8b6ebcadb725553aa5f4',
}

/** input type for incrementing numeric columns in table "config_reply" */
export type Config_Reply_Inc_Input = {
  eddiconfigreplydataid?: InputMaybe<Scalars['Int']>;
  eddiserialno?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['Int']>;
  serialno?: InputMaybe<Scalars['bigint']>;
  structure?: InputMaybe<Scalars['smallint']>;
  zappi1configreplydataid?: InputMaybe<Scalars['Int']>;
  zappi2configreplydataid?: InputMaybe<Scalars['Int']>;
  zappiserialno?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "config_reply" */
export type Config_Reply_Insert_Input = {
  eddi?: InputMaybe<Eddi_Obj_Rel_Insert_Input>;
  eddi_config_reply_datum?: InputMaybe<Eddi_Config_Reply_Data_Obj_Rel_Insert_Input>;
  eddiconfigreplydataid?: InputMaybe<Scalars['Int']>;
  eddiserialno?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['Int']>;
  serialno?: InputMaybe<Scalars['bigint']>;
  structure?: InputMaybe<Scalars['smallint']>;
  updatedat?: InputMaybe<Scalars['timestamptz']>;
  zappi?: InputMaybe<Zappi_Obj_Rel_Insert_Input>;
  zappi1_config_reply_datum?: InputMaybe<Zappi1_Config_Reply_Data_Obj_Rel_Insert_Input>;
  zappi1configreplydataid?: InputMaybe<Scalars['Int']>;
  zappi2_config_reply_datum?: InputMaybe<Zappi2_Config_Reply_Data_Obj_Rel_Insert_Input>;
  zappi2configreplydataid?: InputMaybe<Scalars['Int']>;
  zappiserialno?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Config_Reply_Max_Fields = {
  __typename?: 'config_reply_max_fields';
  eddiconfigreplydataid?: Maybe<Scalars['Int']>;
  eddiserialno?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  serialno?: Maybe<Scalars['bigint']>;
  structure?: Maybe<Scalars['smallint']>;
  updatedat?: Maybe<Scalars['timestamptz']>;
  zappi1configreplydataid?: Maybe<Scalars['Int']>;
  zappi2configreplydataid?: Maybe<Scalars['Int']>;
  zappiserialno?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Config_Reply_Min_Fields = {
  __typename?: 'config_reply_min_fields';
  eddiconfigreplydataid?: Maybe<Scalars['Int']>;
  eddiserialno?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  serialno?: Maybe<Scalars['bigint']>;
  structure?: Maybe<Scalars['smallint']>;
  updatedat?: Maybe<Scalars['timestamptz']>;
  zappi1configreplydataid?: Maybe<Scalars['Int']>;
  zappi2configreplydataid?: Maybe<Scalars['Int']>;
  zappiserialno?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "config_reply" */
export type Config_Reply_Mutation_Response = {
  __typename?: 'config_reply_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Config_Reply>;
};

/** input type for inserting object relation for remote table "config_reply" */
export type Config_Reply_Obj_Rel_Insert_Input = {
  data: Config_Reply_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Config_Reply_On_Conflict>;
};

/** on_conflict condition type for table "config_reply" */
export type Config_Reply_On_Conflict = {
  constraint: Config_Reply_Constraint;
  update_columns?: Array<Config_Reply_Update_Column>;
  where?: InputMaybe<Config_Reply_Bool_Exp>;
};

/** Ordering options when selecting data from "config_reply". */
export type Config_Reply_Order_By = {
  eddi?: InputMaybe<Eddi_Order_By>;
  eddi_config_reply_datum?: InputMaybe<Eddi_Config_Reply_Data_Order_By>;
  eddiconfigreplydataid?: InputMaybe<Order_By>;
  eddiserialno?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  structure?: InputMaybe<Order_By>;
  updatedat?: InputMaybe<Order_By>;
  zappi?: InputMaybe<Zappi_Order_By>;
  zappi1_config_reply_datum?: InputMaybe<Zappi1_Config_Reply_Data_Order_By>;
  zappi1configreplydataid?: InputMaybe<Order_By>;
  zappi2_config_reply_datum?: InputMaybe<Zappi2_Config_Reply_Data_Order_By>;
  zappi2configreplydataid?: InputMaybe<Order_By>;
  zappiserialno?: InputMaybe<Order_By>;
};

/** primary key columns input for table: config_reply */
export type Config_Reply_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "config_reply" */
export enum Config_Reply_Select_Column {
  /** column name */
  Eddiconfigreplydataid = 'eddiconfigreplydataid',
  /** column name */
  Eddiserialno = 'eddiserialno',
  /** column name */
  Id = 'id',
  /** column name */
  Serialno = 'serialno',
  /** column name */
  Structure = 'structure',
  /** column name */
  Updatedat = 'updatedat',
  /** column name */
  Zappi1configreplydataid = 'zappi1configreplydataid',
  /** column name */
  Zappi2configreplydataid = 'zappi2configreplydataid',
  /** column name */
  Zappiserialno = 'zappiserialno',
}

/** input type for updating data in table "config_reply" */
export type Config_Reply_Set_Input = {
  eddiconfigreplydataid?: InputMaybe<Scalars['Int']>;
  eddiserialno?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['Int']>;
  serialno?: InputMaybe<Scalars['bigint']>;
  structure?: InputMaybe<Scalars['smallint']>;
  updatedat?: InputMaybe<Scalars['timestamptz']>;
  zappi1configreplydataid?: InputMaybe<Scalars['Int']>;
  zappi2configreplydataid?: InputMaybe<Scalars['Int']>;
  zappiserialno?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Config_Reply_Stddev_Fields = {
  __typename?: 'config_reply_stddev_fields';
  eddiconfigreplydataid?: Maybe<Scalars['Float']>;
  eddiserialno?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  structure?: Maybe<Scalars['Float']>;
  zappi1configreplydataid?: Maybe<Scalars['Float']>;
  zappi2configreplydataid?: Maybe<Scalars['Float']>;
  zappiserialno?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Config_Reply_Stddev_Pop_Fields = {
  __typename?: 'config_reply_stddev_pop_fields';
  eddiconfigreplydataid?: Maybe<Scalars['Float']>;
  eddiserialno?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  structure?: Maybe<Scalars['Float']>;
  zappi1configreplydataid?: Maybe<Scalars['Float']>;
  zappi2configreplydataid?: Maybe<Scalars['Float']>;
  zappiserialno?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Config_Reply_Stddev_Samp_Fields = {
  __typename?: 'config_reply_stddev_samp_fields';
  eddiconfigreplydataid?: Maybe<Scalars['Float']>;
  eddiserialno?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  structure?: Maybe<Scalars['Float']>;
  zappi1configreplydataid?: Maybe<Scalars['Float']>;
  zappi2configreplydataid?: Maybe<Scalars['Float']>;
  zappiserialno?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Config_Reply_Sum_Fields = {
  __typename?: 'config_reply_sum_fields';
  eddiconfigreplydataid?: Maybe<Scalars['Int']>;
  eddiserialno?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  serialno?: Maybe<Scalars['bigint']>;
  structure?: Maybe<Scalars['smallint']>;
  zappi1configreplydataid?: Maybe<Scalars['Int']>;
  zappi2configreplydataid?: Maybe<Scalars['Int']>;
  zappiserialno?: Maybe<Scalars['bigint']>;
};

/** update columns of table "config_reply" */
export enum Config_Reply_Update_Column {
  /** column name */
  Eddiconfigreplydataid = 'eddiconfigreplydataid',
  /** column name */
  Eddiserialno = 'eddiserialno',
  /** column name */
  Id = 'id',
  /** column name */
  Serialno = 'serialno',
  /** column name */
  Structure = 'structure',
  /** column name */
  Updatedat = 'updatedat',
  /** column name */
  Zappi1configreplydataid = 'zappi1configreplydataid',
  /** column name */
  Zappi2configreplydataid = 'zappi2configreplydataid',
  /** column name */
  Zappiserialno = 'zappiserialno',
}

/** aggregate var_pop on columns */
export type Config_Reply_Var_Pop_Fields = {
  __typename?: 'config_reply_var_pop_fields';
  eddiconfigreplydataid?: Maybe<Scalars['Float']>;
  eddiserialno?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  structure?: Maybe<Scalars['Float']>;
  zappi1configreplydataid?: Maybe<Scalars['Float']>;
  zappi2configreplydataid?: Maybe<Scalars['Float']>;
  zappiserialno?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Config_Reply_Var_Samp_Fields = {
  __typename?: 'config_reply_var_samp_fields';
  eddiconfigreplydataid?: Maybe<Scalars['Float']>;
  eddiserialno?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  structure?: Maybe<Scalars['Float']>;
  zappi1configreplydataid?: Maybe<Scalars['Float']>;
  zappi2configreplydataid?: Maybe<Scalars['Float']>;
  zappiserialno?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Config_Reply_Variance_Fields = {
  __typename?: 'config_reply_variance_fields';
  eddiconfigreplydataid?: Maybe<Scalars['Float']>;
  eddiserialno?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  serialno?: Maybe<Scalars['Float']>;
  structure?: Maybe<Scalars['Float']>;
  zappi1configreplydataid?: Maybe<Scalars['Float']>;
  zappi2configreplydataid?: Maybe<Scalars['Float']>;
  zappiserialno?: Maybe<Scalars['Float']>;
};

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
  /** An object relationship */
  config_reply?: Maybe<Config_Reply>;
  configappdata?: Maybe<Scalars['bytea']>;
  configappdone: Scalars['Boolean'];
  configbootdata?: Maybe<Scalars['bytea']>;
  configbootdone: Scalars['Boolean'];
  configlength?: Maybe<Scalars['smallint']>;
  configoffset?: Maybe<Scalars['smallint']>;
  configstate?: Maybe<Scalars['smallint']>;
  configstructure?: Maybe<Scalars['smallint']>;
  configversion?: Maybe<Scalars['smallint']>;
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
  ethernetfitted?: Maybe<Scalars['Boolean']>;
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
  melinkversion?: Maybe<Scalars['Int']>;
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
  voltage?: Maybe<Scalars['smallint']>;
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
  config_reply?: InputMaybe<Config_Reply_Bool_Exp>;
  configappdata?: InputMaybe<Bytea_Comparison_Exp>;
  configappdone?: InputMaybe<Boolean_Comparison_Exp>;
  configbootdata?: InputMaybe<Bytea_Comparison_Exp>;
  configbootdone?: InputMaybe<Boolean_Comparison_Exp>;
  configlength?: InputMaybe<Smallint_Comparison_Exp>;
  configoffset?: InputMaybe<Smallint_Comparison_Exp>;
  configstate?: InputMaybe<Smallint_Comparison_Exp>;
  configstructure?: InputMaybe<Smallint_Comparison_Exp>;
  configversion?: InputMaybe<Smallint_Comparison_Exp>;
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
  melinkversion?: InputMaybe<Int_Comparison_Exp>;
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
  voltage?: InputMaybe<Smallint_Comparison_Exp>;
};

/** columns and relationships of "eddi_config_reply_data" */
export type Eddi_Config_Reply_Data = {
  __typename?: 'eddi_config_reply_data';
  autosettimefromclouddone: Scalars['Boolean'];
  backlight: Scalars['smallint'];
  batterymode?: Maybe<Scalars['String']>;
  boosthotcanceldelay: Scalars['smallint'];
  calibration: Scalars['bytea'];
  /** An object relationship */
  config_reply?: Maybe<Config_Reply>;
  /** An array relationship */
  config_reply_boost_timers: Array<Config_Reply_Boost_Timer>;
  /** An aggregate relationship */
  config_reply_boost_timers_aggregate: Config_Reply_Boost_Timer_Aggregate;
  contrast: Scalars['smallint'];
  ct1group: Scalars['smallint'];
  ct1grouplimit: Scalars['smallint'];
  ct1subtype?: Maybe<Scalars['String']>;
  ct1type?: Maybe<Scalars['String']>;
  ct2group: Scalars['smallint'];
  ct2grouplimit: Scalars['smallint'];
  ct2subtype?: Maybe<Scalars['String']>;
  ct2type?: Maybe<Scalars['String']>;
  ct3group: Scalars['smallint'];
  ct3grouplimit: Scalars['smallint'];
  dateformat?: Maybe<Scalars['String']>;
  deviceconfigtime: Scalars['bigint'];
  devicelimit: Scalars['smallint'];
  dston: Scalars['Boolean'];
  esenseboostenablemode?: Maybe<Scalars['String']>;
  esenseboostmode?: Maybe<Scalars['String']>;
  esenseheaterenablemode?: Maybe<Scalars['String']>;
  esensehysteresis1: Scalars['smallint'];
  esensehysteresis2: Scalars['smallint'];
  esensemode?: Maybe<Scalars['String']>;
  esenserelaycontrolmode?: Maybe<Scalars['String']>;
  esensesetpoints1: Scalars['smallint'];
  esensesetpoints2: Scalars['smallint'];
  exportmargin: Scalars['Int'];
  exprelay1boosttype: Scalars['smallint'];
  exprelay1heating?: Maybe<Scalars['String']>;
  exprelay1includediverted: Scalars['Boolean'];
  exprelay1minimumofftime: Scalars['smallint'];
  exprelay1minimumontime: Scalars['smallint'];
  exprelay1mode?: Maybe<Scalars['String']>;
  exprelay1offthreshold: Scalars['Int'];
  exprelay1onthreshold: Scalars['Int'];
  exprelay2boosttype: Scalars['smallint'];
  exprelay2heating?: Maybe<Scalars['String']>;
  exprelay2includediverted: Scalars['Boolean'];
  exprelay2minimumofftime: Scalars['smallint'];
  exprelay2minimumontime: Scalars['smallint'];
  exprelay2mode?: Maybe<Scalars['String']>;
  exprelay2offthreshold: Scalars['Int'];
  exprelay2onthreshold: Scalars['Int'];
  gridlimit: Scalars['smallint'];
  heaterpriority: Scalars['smallint'];
  heatertype1?: Maybe<Scalars['String']>;
  heatertype2?: Maybe<Scalars['String']>;
  hottime: Scalars['smallint'];
  icons?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  language?: Maybe<Scalars['String']>;
  maxgridlimit: Scalars['smallint'];
  minimumexport: Scalars['Int'];
  minimumexporttime: Scalars['smallint'];
  passcode: Scalars['smallint'];
  prioritycheckperiod: Scalars['smallint'];
  savingskeepversion: Scalars['smallint'];
  serverconfigtime?: Maybe<Scalars['Int']>;
  signature: Scalars['bigint'];
  sparewasconfigversion: Scalars['smallint'];
  sparewasnetphasemetering: Scalars['smallint'];
  timezone?: Maybe<Scalars['String']>;
  updatefromcloud: Scalars['Boolean'];
};

/** columns and relationships of "eddi_config_reply_data" */
export type Eddi_Config_Reply_DataConfig_Reply_Boost_TimersArgs = {
  distinct_on?: InputMaybe<Array<Config_Reply_Boost_Timer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Config_Reply_Boost_Timer_Order_By>>;
  where?: InputMaybe<Config_Reply_Boost_Timer_Bool_Exp>;
};

/** columns and relationships of "eddi_config_reply_data" */
export type Eddi_Config_Reply_DataConfig_Reply_Boost_Timers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Config_Reply_Boost_Timer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Config_Reply_Boost_Timer_Order_By>>;
  where?: InputMaybe<Config_Reply_Boost_Timer_Bool_Exp>;
};

/** aggregated selection of "eddi_config_reply_data" */
export type Eddi_Config_Reply_Data_Aggregate = {
  __typename?: 'eddi_config_reply_data_aggregate';
  aggregate?: Maybe<Eddi_Config_Reply_Data_Aggregate_Fields>;
  nodes: Array<Eddi_Config_Reply_Data>;
};

/** aggregate fields of "eddi_config_reply_data" */
export type Eddi_Config_Reply_Data_Aggregate_Fields = {
  __typename?: 'eddi_config_reply_data_aggregate_fields';
  avg?: Maybe<Eddi_Config_Reply_Data_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Eddi_Config_Reply_Data_Max_Fields>;
  min?: Maybe<Eddi_Config_Reply_Data_Min_Fields>;
  stddev?: Maybe<Eddi_Config_Reply_Data_Stddev_Fields>;
  stddev_pop?: Maybe<Eddi_Config_Reply_Data_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Eddi_Config_Reply_Data_Stddev_Samp_Fields>;
  sum?: Maybe<Eddi_Config_Reply_Data_Sum_Fields>;
  var_pop?: Maybe<Eddi_Config_Reply_Data_Var_Pop_Fields>;
  var_samp?: Maybe<Eddi_Config_Reply_Data_Var_Samp_Fields>;
  variance?: Maybe<Eddi_Config_Reply_Data_Variance_Fields>;
};

/** aggregate fields of "eddi_config_reply_data" */
export type Eddi_Config_Reply_Data_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Eddi_Config_Reply_Data_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Eddi_Config_Reply_Data_Avg_Fields = {
  __typename?: 'eddi_config_reply_data_avg_fields';
  backlight?: Maybe<Scalars['Float']>;
  boosthotcanceldelay?: Maybe<Scalars['Float']>;
  contrast?: Maybe<Scalars['Float']>;
  ct1group?: Maybe<Scalars['Float']>;
  ct1grouplimit?: Maybe<Scalars['Float']>;
  ct2group?: Maybe<Scalars['Float']>;
  ct2grouplimit?: Maybe<Scalars['Float']>;
  ct3group?: Maybe<Scalars['Float']>;
  ct3grouplimit?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  devicelimit?: Maybe<Scalars['Float']>;
  esensehysteresis1?: Maybe<Scalars['Float']>;
  esensehysteresis2?: Maybe<Scalars['Float']>;
  esensesetpoints1?: Maybe<Scalars['Float']>;
  esensesetpoints2?: Maybe<Scalars['Float']>;
  exportmargin?: Maybe<Scalars['Float']>;
  exprelay1boosttype?: Maybe<Scalars['Float']>;
  exprelay1minimumofftime?: Maybe<Scalars['Float']>;
  exprelay1minimumontime?: Maybe<Scalars['Float']>;
  exprelay1offthreshold?: Maybe<Scalars['Float']>;
  exprelay1onthreshold?: Maybe<Scalars['Float']>;
  exprelay2boosttype?: Maybe<Scalars['Float']>;
  exprelay2minimumofftime?: Maybe<Scalars['Float']>;
  exprelay2minimumontime?: Maybe<Scalars['Float']>;
  exprelay2offthreshold?: Maybe<Scalars['Float']>;
  exprelay2onthreshold?: Maybe<Scalars['Float']>;
  gridlimit?: Maybe<Scalars['Float']>;
  heaterpriority?: Maybe<Scalars['Float']>;
  hottime?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  maxgridlimit?: Maybe<Scalars['Float']>;
  minimumexport?: Maybe<Scalars['Float']>;
  minimumexporttime?: Maybe<Scalars['Float']>;
  passcode?: Maybe<Scalars['Float']>;
  prioritycheckperiod?: Maybe<Scalars['Float']>;
  savingskeepversion?: Maybe<Scalars['Float']>;
  serverconfigtime?: Maybe<Scalars['Float']>;
  signature?: Maybe<Scalars['Float']>;
  sparewasconfigversion?: Maybe<Scalars['Float']>;
  sparewasnetphasemetering?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "eddi_config_reply_data". All fields are combined with a logical 'AND'. */
export type Eddi_Config_Reply_Data_Bool_Exp = {
  _and?: InputMaybe<Array<Eddi_Config_Reply_Data_Bool_Exp>>;
  _not?: InputMaybe<Eddi_Config_Reply_Data_Bool_Exp>;
  _or?: InputMaybe<Array<Eddi_Config_Reply_Data_Bool_Exp>>;
  autosettimefromclouddone?: InputMaybe<Boolean_Comparison_Exp>;
  backlight?: InputMaybe<Smallint_Comparison_Exp>;
  batterymode?: InputMaybe<String_Comparison_Exp>;
  boosthotcanceldelay?: InputMaybe<Smallint_Comparison_Exp>;
  calibration?: InputMaybe<Bytea_Comparison_Exp>;
  config_reply?: InputMaybe<Config_Reply_Bool_Exp>;
  config_reply_boost_timers?: InputMaybe<Config_Reply_Boost_Timer_Bool_Exp>;
  contrast?: InputMaybe<Smallint_Comparison_Exp>;
  ct1group?: InputMaybe<Smallint_Comparison_Exp>;
  ct1grouplimit?: InputMaybe<Smallint_Comparison_Exp>;
  ct1subtype?: InputMaybe<String_Comparison_Exp>;
  ct1type?: InputMaybe<String_Comparison_Exp>;
  ct2group?: InputMaybe<Smallint_Comparison_Exp>;
  ct2grouplimit?: InputMaybe<Smallint_Comparison_Exp>;
  ct2subtype?: InputMaybe<String_Comparison_Exp>;
  ct2type?: InputMaybe<String_Comparison_Exp>;
  ct3group?: InputMaybe<Smallint_Comparison_Exp>;
  ct3grouplimit?: InputMaybe<Smallint_Comparison_Exp>;
  dateformat?: InputMaybe<String_Comparison_Exp>;
  deviceconfigtime?: InputMaybe<Bigint_Comparison_Exp>;
  devicelimit?: InputMaybe<Smallint_Comparison_Exp>;
  dston?: InputMaybe<Boolean_Comparison_Exp>;
  esenseboostenablemode?: InputMaybe<String_Comparison_Exp>;
  esenseboostmode?: InputMaybe<String_Comparison_Exp>;
  esenseheaterenablemode?: InputMaybe<String_Comparison_Exp>;
  esensehysteresis1?: InputMaybe<Smallint_Comparison_Exp>;
  esensehysteresis2?: InputMaybe<Smallint_Comparison_Exp>;
  esensemode?: InputMaybe<String_Comparison_Exp>;
  esenserelaycontrolmode?: InputMaybe<String_Comparison_Exp>;
  esensesetpoints1?: InputMaybe<Smallint_Comparison_Exp>;
  esensesetpoints2?: InputMaybe<Smallint_Comparison_Exp>;
  exportmargin?: InputMaybe<Int_Comparison_Exp>;
  exprelay1boosttype?: InputMaybe<Smallint_Comparison_Exp>;
  exprelay1heating?: InputMaybe<String_Comparison_Exp>;
  exprelay1includediverted?: InputMaybe<Boolean_Comparison_Exp>;
  exprelay1minimumofftime?: InputMaybe<Smallint_Comparison_Exp>;
  exprelay1minimumontime?: InputMaybe<Smallint_Comparison_Exp>;
  exprelay1mode?: InputMaybe<String_Comparison_Exp>;
  exprelay1offthreshold?: InputMaybe<Int_Comparison_Exp>;
  exprelay1onthreshold?: InputMaybe<Int_Comparison_Exp>;
  exprelay2boosttype?: InputMaybe<Smallint_Comparison_Exp>;
  exprelay2heating?: InputMaybe<String_Comparison_Exp>;
  exprelay2includediverted?: InputMaybe<Boolean_Comparison_Exp>;
  exprelay2minimumofftime?: InputMaybe<Smallint_Comparison_Exp>;
  exprelay2minimumontime?: InputMaybe<Smallint_Comparison_Exp>;
  exprelay2mode?: InputMaybe<String_Comparison_Exp>;
  exprelay2offthreshold?: InputMaybe<Int_Comparison_Exp>;
  exprelay2onthreshold?: InputMaybe<Int_Comparison_Exp>;
  gridlimit?: InputMaybe<Smallint_Comparison_Exp>;
  heaterpriority?: InputMaybe<Smallint_Comparison_Exp>;
  heatertype1?: InputMaybe<String_Comparison_Exp>;
  heatertype2?: InputMaybe<String_Comparison_Exp>;
  hottime?: InputMaybe<Smallint_Comparison_Exp>;
  icons?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  language?: InputMaybe<String_Comparison_Exp>;
  maxgridlimit?: InputMaybe<Smallint_Comparison_Exp>;
  minimumexport?: InputMaybe<Int_Comparison_Exp>;
  minimumexporttime?: InputMaybe<Smallint_Comparison_Exp>;
  passcode?: InputMaybe<Smallint_Comparison_Exp>;
  prioritycheckperiod?: InputMaybe<Smallint_Comparison_Exp>;
  savingskeepversion?: InputMaybe<Smallint_Comparison_Exp>;
  serverconfigtime?: InputMaybe<Int_Comparison_Exp>;
  signature?: InputMaybe<Bigint_Comparison_Exp>;
  sparewasconfigversion?: InputMaybe<Smallint_Comparison_Exp>;
  sparewasnetphasemetering?: InputMaybe<Smallint_Comparison_Exp>;
  timezone?: InputMaybe<String_Comparison_Exp>;
  updatefromcloud?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "eddi_config_reply_data" */
export enum Eddi_Config_Reply_Data_Constraint {
  /** unique or primary key constraint */
  Pk_2635a0f6eeef3b81fd097be627f = 'PK_2635a0f6eeef3b81fd097be627f',
}

/** input type for incrementing numeric columns in table "eddi_config_reply_data" */
export type Eddi_Config_Reply_Data_Inc_Input = {
  backlight?: InputMaybe<Scalars['smallint']>;
  boosthotcanceldelay?: InputMaybe<Scalars['smallint']>;
  contrast?: InputMaybe<Scalars['smallint']>;
  ct1group?: InputMaybe<Scalars['smallint']>;
  ct1grouplimit?: InputMaybe<Scalars['smallint']>;
  ct2group?: InputMaybe<Scalars['smallint']>;
  ct2grouplimit?: InputMaybe<Scalars['smallint']>;
  ct3group?: InputMaybe<Scalars['smallint']>;
  ct3grouplimit?: InputMaybe<Scalars['smallint']>;
  deviceconfigtime?: InputMaybe<Scalars['bigint']>;
  devicelimit?: InputMaybe<Scalars['smallint']>;
  esensehysteresis1?: InputMaybe<Scalars['smallint']>;
  esensehysteresis2?: InputMaybe<Scalars['smallint']>;
  esensesetpoints1?: InputMaybe<Scalars['smallint']>;
  esensesetpoints2?: InputMaybe<Scalars['smallint']>;
  exportmargin?: InputMaybe<Scalars['Int']>;
  exprelay1boosttype?: InputMaybe<Scalars['smallint']>;
  exprelay1minimumofftime?: InputMaybe<Scalars['smallint']>;
  exprelay1minimumontime?: InputMaybe<Scalars['smallint']>;
  exprelay1offthreshold?: InputMaybe<Scalars['Int']>;
  exprelay1onthreshold?: InputMaybe<Scalars['Int']>;
  exprelay2boosttype?: InputMaybe<Scalars['smallint']>;
  exprelay2minimumofftime?: InputMaybe<Scalars['smallint']>;
  exprelay2minimumontime?: InputMaybe<Scalars['smallint']>;
  exprelay2offthreshold?: InputMaybe<Scalars['Int']>;
  exprelay2onthreshold?: InputMaybe<Scalars['Int']>;
  gridlimit?: InputMaybe<Scalars['smallint']>;
  heaterpriority?: InputMaybe<Scalars['smallint']>;
  hottime?: InputMaybe<Scalars['smallint']>;
  id?: InputMaybe<Scalars['Int']>;
  maxgridlimit?: InputMaybe<Scalars['smallint']>;
  minimumexport?: InputMaybe<Scalars['Int']>;
  minimumexporttime?: InputMaybe<Scalars['smallint']>;
  passcode?: InputMaybe<Scalars['smallint']>;
  prioritycheckperiod?: InputMaybe<Scalars['smallint']>;
  savingskeepversion?: InputMaybe<Scalars['smallint']>;
  serverconfigtime?: InputMaybe<Scalars['Int']>;
  signature?: InputMaybe<Scalars['bigint']>;
  sparewasconfigversion?: InputMaybe<Scalars['smallint']>;
  sparewasnetphasemetering?: InputMaybe<Scalars['smallint']>;
};

/** input type for inserting data into table "eddi_config_reply_data" */
export type Eddi_Config_Reply_Data_Insert_Input = {
  autosettimefromclouddone?: InputMaybe<Scalars['Boolean']>;
  backlight?: InputMaybe<Scalars['smallint']>;
  batterymode?: InputMaybe<Scalars['String']>;
  boosthotcanceldelay?: InputMaybe<Scalars['smallint']>;
  calibration?: InputMaybe<Scalars['bytea']>;
  config_reply?: InputMaybe<Config_Reply_Obj_Rel_Insert_Input>;
  config_reply_boost_timers?: InputMaybe<Config_Reply_Boost_Timer_Arr_Rel_Insert_Input>;
  contrast?: InputMaybe<Scalars['smallint']>;
  ct1group?: InputMaybe<Scalars['smallint']>;
  ct1grouplimit?: InputMaybe<Scalars['smallint']>;
  ct1subtype?: InputMaybe<Scalars['String']>;
  ct1type?: InputMaybe<Scalars['String']>;
  ct2group?: InputMaybe<Scalars['smallint']>;
  ct2grouplimit?: InputMaybe<Scalars['smallint']>;
  ct2subtype?: InputMaybe<Scalars['String']>;
  ct2type?: InputMaybe<Scalars['String']>;
  ct3group?: InputMaybe<Scalars['smallint']>;
  ct3grouplimit?: InputMaybe<Scalars['smallint']>;
  dateformat?: InputMaybe<Scalars['String']>;
  deviceconfigtime?: InputMaybe<Scalars['bigint']>;
  devicelimit?: InputMaybe<Scalars['smallint']>;
  dston?: InputMaybe<Scalars['Boolean']>;
  esenseboostenablemode?: InputMaybe<Scalars['String']>;
  esenseboostmode?: InputMaybe<Scalars['String']>;
  esenseheaterenablemode?: InputMaybe<Scalars['String']>;
  esensehysteresis1?: InputMaybe<Scalars['smallint']>;
  esensehysteresis2?: InputMaybe<Scalars['smallint']>;
  esensemode?: InputMaybe<Scalars['String']>;
  esenserelaycontrolmode?: InputMaybe<Scalars['String']>;
  esensesetpoints1?: InputMaybe<Scalars['smallint']>;
  esensesetpoints2?: InputMaybe<Scalars['smallint']>;
  exportmargin?: InputMaybe<Scalars['Int']>;
  exprelay1boosttype?: InputMaybe<Scalars['smallint']>;
  exprelay1heating?: InputMaybe<Scalars['String']>;
  exprelay1includediverted?: InputMaybe<Scalars['Boolean']>;
  exprelay1minimumofftime?: InputMaybe<Scalars['smallint']>;
  exprelay1minimumontime?: InputMaybe<Scalars['smallint']>;
  exprelay1mode?: InputMaybe<Scalars['String']>;
  exprelay1offthreshold?: InputMaybe<Scalars['Int']>;
  exprelay1onthreshold?: InputMaybe<Scalars['Int']>;
  exprelay2boosttype?: InputMaybe<Scalars['smallint']>;
  exprelay2heating?: InputMaybe<Scalars['String']>;
  exprelay2includediverted?: InputMaybe<Scalars['Boolean']>;
  exprelay2minimumofftime?: InputMaybe<Scalars['smallint']>;
  exprelay2minimumontime?: InputMaybe<Scalars['smallint']>;
  exprelay2mode?: InputMaybe<Scalars['String']>;
  exprelay2offthreshold?: InputMaybe<Scalars['Int']>;
  exprelay2onthreshold?: InputMaybe<Scalars['Int']>;
  gridlimit?: InputMaybe<Scalars['smallint']>;
  heaterpriority?: InputMaybe<Scalars['smallint']>;
  heatertype1?: InputMaybe<Scalars['String']>;
  heatertype2?: InputMaybe<Scalars['String']>;
  hottime?: InputMaybe<Scalars['smallint']>;
  icons?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  maxgridlimit?: InputMaybe<Scalars['smallint']>;
  minimumexport?: InputMaybe<Scalars['Int']>;
  minimumexporttime?: InputMaybe<Scalars['smallint']>;
  passcode?: InputMaybe<Scalars['smallint']>;
  prioritycheckperiod?: InputMaybe<Scalars['smallint']>;
  savingskeepversion?: InputMaybe<Scalars['smallint']>;
  serverconfigtime?: InputMaybe<Scalars['Int']>;
  signature?: InputMaybe<Scalars['bigint']>;
  sparewasconfigversion?: InputMaybe<Scalars['smallint']>;
  sparewasnetphasemetering?: InputMaybe<Scalars['smallint']>;
  timezone?: InputMaybe<Scalars['String']>;
  updatefromcloud?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Eddi_Config_Reply_Data_Max_Fields = {
  __typename?: 'eddi_config_reply_data_max_fields';
  backlight?: Maybe<Scalars['smallint']>;
  batterymode?: Maybe<Scalars['String']>;
  boosthotcanceldelay?: Maybe<Scalars['smallint']>;
  contrast?: Maybe<Scalars['smallint']>;
  ct1group?: Maybe<Scalars['smallint']>;
  ct1grouplimit?: Maybe<Scalars['smallint']>;
  ct1subtype?: Maybe<Scalars['String']>;
  ct1type?: Maybe<Scalars['String']>;
  ct2group?: Maybe<Scalars['smallint']>;
  ct2grouplimit?: Maybe<Scalars['smallint']>;
  ct2subtype?: Maybe<Scalars['String']>;
  ct2type?: Maybe<Scalars['String']>;
  ct3group?: Maybe<Scalars['smallint']>;
  ct3grouplimit?: Maybe<Scalars['smallint']>;
  dateformat?: Maybe<Scalars['String']>;
  deviceconfigtime?: Maybe<Scalars['bigint']>;
  devicelimit?: Maybe<Scalars['smallint']>;
  esenseboostenablemode?: Maybe<Scalars['String']>;
  esenseboostmode?: Maybe<Scalars['String']>;
  esenseheaterenablemode?: Maybe<Scalars['String']>;
  esensehysteresis1?: Maybe<Scalars['smallint']>;
  esensehysteresis2?: Maybe<Scalars['smallint']>;
  esensemode?: Maybe<Scalars['String']>;
  esenserelaycontrolmode?: Maybe<Scalars['String']>;
  esensesetpoints1?: Maybe<Scalars['smallint']>;
  esensesetpoints2?: Maybe<Scalars['smallint']>;
  exportmargin?: Maybe<Scalars['Int']>;
  exprelay1boosttype?: Maybe<Scalars['smallint']>;
  exprelay1heating?: Maybe<Scalars['String']>;
  exprelay1minimumofftime?: Maybe<Scalars['smallint']>;
  exprelay1minimumontime?: Maybe<Scalars['smallint']>;
  exprelay1mode?: Maybe<Scalars['String']>;
  exprelay1offthreshold?: Maybe<Scalars['Int']>;
  exprelay1onthreshold?: Maybe<Scalars['Int']>;
  exprelay2boosttype?: Maybe<Scalars['smallint']>;
  exprelay2heating?: Maybe<Scalars['String']>;
  exprelay2minimumofftime?: Maybe<Scalars['smallint']>;
  exprelay2minimumontime?: Maybe<Scalars['smallint']>;
  exprelay2mode?: Maybe<Scalars['String']>;
  exprelay2offthreshold?: Maybe<Scalars['Int']>;
  exprelay2onthreshold?: Maybe<Scalars['Int']>;
  gridlimit?: Maybe<Scalars['smallint']>;
  heaterpriority?: Maybe<Scalars['smallint']>;
  heatertype1?: Maybe<Scalars['String']>;
  heatertype2?: Maybe<Scalars['String']>;
  hottime?: Maybe<Scalars['smallint']>;
  icons?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  maxgridlimit?: Maybe<Scalars['smallint']>;
  minimumexport?: Maybe<Scalars['Int']>;
  minimumexporttime?: Maybe<Scalars['smallint']>;
  passcode?: Maybe<Scalars['smallint']>;
  prioritycheckperiod?: Maybe<Scalars['smallint']>;
  savingskeepversion?: Maybe<Scalars['smallint']>;
  serverconfigtime?: Maybe<Scalars['Int']>;
  signature?: Maybe<Scalars['bigint']>;
  sparewasconfigversion?: Maybe<Scalars['smallint']>;
  sparewasnetphasemetering?: Maybe<Scalars['smallint']>;
  timezone?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Eddi_Config_Reply_Data_Min_Fields = {
  __typename?: 'eddi_config_reply_data_min_fields';
  backlight?: Maybe<Scalars['smallint']>;
  batterymode?: Maybe<Scalars['String']>;
  boosthotcanceldelay?: Maybe<Scalars['smallint']>;
  contrast?: Maybe<Scalars['smallint']>;
  ct1group?: Maybe<Scalars['smallint']>;
  ct1grouplimit?: Maybe<Scalars['smallint']>;
  ct1subtype?: Maybe<Scalars['String']>;
  ct1type?: Maybe<Scalars['String']>;
  ct2group?: Maybe<Scalars['smallint']>;
  ct2grouplimit?: Maybe<Scalars['smallint']>;
  ct2subtype?: Maybe<Scalars['String']>;
  ct2type?: Maybe<Scalars['String']>;
  ct3group?: Maybe<Scalars['smallint']>;
  ct3grouplimit?: Maybe<Scalars['smallint']>;
  dateformat?: Maybe<Scalars['String']>;
  deviceconfigtime?: Maybe<Scalars['bigint']>;
  devicelimit?: Maybe<Scalars['smallint']>;
  esenseboostenablemode?: Maybe<Scalars['String']>;
  esenseboostmode?: Maybe<Scalars['String']>;
  esenseheaterenablemode?: Maybe<Scalars['String']>;
  esensehysteresis1?: Maybe<Scalars['smallint']>;
  esensehysteresis2?: Maybe<Scalars['smallint']>;
  esensemode?: Maybe<Scalars['String']>;
  esenserelaycontrolmode?: Maybe<Scalars['String']>;
  esensesetpoints1?: Maybe<Scalars['smallint']>;
  esensesetpoints2?: Maybe<Scalars['smallint']>;
  exportmargin?: Maybe<Scalars['Int']>;
  exprelay1boosttype?: Maybe<Scalars['smallint']>;
  exprelay1heating?: Maybe<Scalars['String']>;
  exprelay1minimumofftime?: Maybe<Scalars['smallint']>;
  exprelay1minimumontime?: Maybe<Scalars['smallint']>;
  exprelay1mode?: Maybe<Scalars['String']>;
  exprelay1offthreshold?: Maybe<Scalars['Int']>;
  exprelay1onthreshold?: Maybe<Scalars['Int']>;
  exprelay2boosttype?: Maybe<Scalars['smallint']>;
  exprelay2heating?: Maybe<Scalars['String']>;
  exprelay2minimumofftime?: Maybe<Scalars['smallint']>;
  exprelay2minimumontime?: Maybe<Scalars['smallint']>;
  exprelay2mode?: Maybe<Scalars['String']>;
  exprelay2offthreshold?: Maybe<Scalars['Int']>;
  exprelay2onthreshold?: Maybe<Scalars['Int']>;
  gridlimit?: Maybe<Scalars['smallint']>;
  heaterpriority?: Maybe<Scalars['smallint']>;
  heatertype1?: Maybe<Scalars['String']>;
  heatertype2?: Maybe<Scalars['String']>;
  hottime?: Maybe<Scalars['smallint']>;
  icons?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  maxgridlimit?: Maybe<Scalars['smallint']>;
  minimumexport?: Maybe<Scalars['Int']>;
  minimumexporttime?: Maybe<Scalars['smallint']>;
  passcode?: Maybe<Scalars['smallint']>;
  prioritycheckperiod?: Maybe<Scalars['smallint']>;
  savingskeepversion?: Maybe<Scalars['smallint']>;
  serverconfigtime?: Maybe<Scalars['Int']>;
  signature?: Maybe<Scalars['bigint']>;
  sparewasconfigversion?: Maybe<Scalars['smallint']>;
  sparewasnetphasemetering?: Maybe<Scalars['smallint']>;
  timezone?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "eddi_config_reply_data" */
export type Eddi_Config_Reply_Data_Mutation_Response = {
  __typename?: 'eddi_config_reply_data_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Eddi_Config_Reply_Data>;
};

/** input type for inserting object relation for remote table "eddi_config_reply_data" */
export type Eddi_Config_Reply_Data_Obj_Rel_Insert_Input = {
  data: Eddi_Config_Reply_Data_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Eddi_Config_Reply_Data_On_Conflict>;
};

/** on_conflict condition type for table "eddi_config_reply_data" */
export type Eddi_Config_Reply_Data_On_Conflict = {
  constraint: Eddi_Config_Reply_Data_Constraint;
  update_columns?: Array<Eddi_Config_Reply_Data_Update_Column>;
  where?: InputMaybe<Eddi_Config_Reply_Data_Bool_Exp>;
};

/** Ordering options when selecting data from "eddi_config_reply_data". */
export type Eddi_Config_Reply_Data_Order_By = {
  autosettimefromclouddone?: InputMaybe<Order_By>;
  backlight?: InputMaybe<Order_By>;
  batterymode?: InputMaybe<Order_By>;
  boosthotcanceldelay?: InputMaybe<Order_By>;
  calibration?: InputMaybe<Order_By>;
  config_reply?: InputMaybe<Config_Reply_Order_By>;
  config_reply_boost_timers_aggregate?: InputMaybe<Config_Reply_Boost_Timer_Aggregate_Order_By>;
  contrast?: InputMaybe<Order_By>;
  ct1group?: InputMaybe<Order_By>;
  ct1grouplimit?: InputMaybe<Order_By>;
  ct1subtype?: InputMaybe<Order_By>;
  ct1type?: InputMaybe<Order_By>;
  ct2group?: InputMaybe<Order_By>;
  ct2grouplimit?: InputMaybe<Order_By>;
  ct2subtype?: InputMaybe<Order_By>;
  ct2type?: InputMaybe<Order_By>;
  ct3group?: InputMaybe<Order_By>;
  ct3grouplimit?: InputMaybe<Order_By>;
  dateformat?: InputMaybe<Order_By>;
  deviceconfigtime?: InputMaybe<Order_By>;
  devicelimit?: InputMaybe<Order_By>;
  dston?: InputMaybe<Order_By>;
  esenseboostenablemode?: InputMaybe<Order_By>;
  esenseboostmode?: InputMaybe<Order_By>;
  esenseheaterenablemode?: InputMaybe<Order_By>;
  esensehysteresis1?: InputMaybe<Order_By>;
  esensehysteresis2?: InputMaybe<Order_By>;
  esensemode?: InputMaybe<Order_By>;
  esenserelaycontrolmode?: InputMaybe<Order_By>;
  esensesetpoints1?: InputMaybe<Order_By>;
  esensesetpoints2?: InputMaybe<Order_By>;
  exportmargin?: InputMaybe<Order_By>;
  exprelay1boosttype?: InputMaybe<Order_By>;
  exprelay1heating?: InputMaybe<Order_By>;
  exprelay1includediverted?: InputMaybe<Order_By>;
  exprelay1minimumofftime?: InputMaybe<Order_By>;
  exprelay1minimumontime?: InputMaybe<Order_By>;
  exprelay1mode?: InputMaybe<Order_By>;
  exprelay1offthreshold?: InputMaybe<Order_By>;
  exprelay1onthreshold?: InputMaybe<Order_By>;
  exprelay2boosttype?: InputMaybe<Order_By>;
  exprelay2heating?: InputMaybe<Order_By>;
  exprelay2includediverted?: InputMaybe<Order_By>;
  exprelay2minimumofftime?: InputMaybe<Order_By>;
  exprelay2minimumontime?: InputMaybe<Order_By>;
  exprelay2mode?: InputMaybe<Order_By>;
  exprelay2offthreshold?: InputMaybe<Order_By>;
  exprelay2onthreshold?: InputMaybe<Order_By>;
  gridlimit?: InputMaybe<Order_By>;
  heaterpriority?: InputMaybe<Order_By>;
  heatertype1?: InputMaybe<Order_By>;
  heatertype2?: InputMaybe<Order_By>;
  hottime?: InputMaybe<Order_By>;
  icons?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  language?: InputMaybe<Order_By>;
  maxgridlimit?: InputMaybe<Order_By>;
  minimumexport?: InputMaybe<Order_By>;
  minimumexporttime?: InputMaybe<Order_By>;
  passcode?: InputMaybe<Order_By>;
  prioritycheckperiod?: InputMaybe<Order_By>;
  savingskeepversion?: InputMaybe<Order_By>;
  serverconfigtime?: InputMaybe<Order_By>;
  signature?: InputMaybe<Order_By>;
  sparewasconfigversion?: InputMaybe<Order_By>;
  sparewasnetphasemetering?: InputMaybe<Order_By>;
  timezone?: InputMaybe<Order_By>;
  updatefromcloud?: InputMaybe<Order_By>;
};

/** primary key columns input for table: eddi_config_reply_data */
export type Eddi_Config_Reply_Data_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "eddi_config_reply_data" */
export enum Eddi_Config_Reply_Data_Select_Column {
  /** column name */
  Autosettimefromclouddone = 'autosettimefromclouddone',
  /** column name */
  Backlight = 'backlight',
  /** column name */
  Batterymode = 'batterymode',
  /** column name */
  Boosthotcanceldelay = 'boosthotcanceldelay',
  /** column name */
  Calibration = 'calibration',
  /** column name */
  Contrast = 'contrast',
  /** column name */
  Ct1group = 'ct1group',
  /** column name */
  Ct1grouplimit = 'ct1grouplimit',
  /** column name */
  Ct1subtype = 'ct1subtype',
  /** column name */
  Ct1type = 'ct1type',
  /** column name */
  Ct2group = 'ct2group',
  /** column name */
  Ct2grouplimit = 'ct2grouplimit',
  /** column name */
  Ct2subtype = 'ct2subtype',
  /** column name */
  Ct2type = 'ct2type',
  /** column name */
  Ct3group = 'ct3group',
  /** column name */
  Ct3grouplimit = 'ct3grouplimit',
  /** column name */
  Dateformat = 'dateformat',
  /** column name */
  Deviceconfigtime = 'deviceconfigtime',
  /** column name */
  Devicelimit = 'devicelimit',
  /** column name */
  Dston = 'dston',
  /** column name */
  Esenseboostenablemode = 'esenseboostenablemode',
  /** column name */
  Esenseboostmode = 'esenseboostmode',
  /** column name */
  Esenseheaterenablemode = 'esenseheaterenablemode',
  /** column name */
  Esensehysteresis1 = 'esensehysteresis1',
  /** column name */
  Esensehysteresis2 = 'esensehysteresis2',
  /** column name */
  Esensemode = 'esensemode',
  /** column name */
  Esenserelaycontrolmode = 'esenserelaycontrolmode',
  /** column name */
  Esensesetpoints1 = 'esensesetpoints1',
  /** column name */
  Esensesetpoints2 = 'esensesetpoints2',
  /** column name */
  Exportmargin = 'exportmargin',
  /** column name */
  Exprelay1boosttype = 'exprelay1boosttype',
  /** column name */
  Exprelay1heating = 'exprelay1heating',
  /** column name */
  Exprelay1includediverted = 'exprelay1includediverted',
  /** column name */
  Exprelay1minimumofftime = 'exprelay1minimumofftime',
  /** column name */
  Exprelay1minimumontime = 'exprelay1minimumontime',
  /** column name */
  Exprelay1mode = 'exprelay1mode',
  /** column name */
  Exprelay1offthreshold = 'exprelay1offthreshold',
  /** column name */
  Exprelay1onthreshold = 'exprelay1onthreshold',
  /** column name */
  Exprelay2boosttype = 'exprelay2boosttype',
  /** column name */
  Exprelay2heating = 'exprelay2heating',
  /** column name */
  Exprelay2includediverted = 'exprelay2includediverted',
  /** column name */
  Exprelay2minimumofftime = 'exprelay2minimumofftime',
  /** column name */
  Exprelay2minimumontime = 'exprelay2minimumontime',
  /** column name */
  Exprelay2mode = 'exprelay2mode',
  /** column name */
  Exprelay2offthreshold = 'exprelay2offthreshold',
  /** column name */
  Exprelay2onthreshold = 'exprelay2onthreshold',
  /** column name */
  Gridlimit = 'gridlimit',
  /** column name */
  Heaterpriority = 'heaterpriority',
  /** column name */
  Heatertype1 = 'heatertype1',
  /** column name */
  Heatertype2 = 'heatertype2',
  /** column name */
  Hottime = 'hottime',
  /** column name */
  Icons = 'icons',
  /** column name */
  Id = 'id',
  /** column name */
  Language = 'language',
  /** column name */
  Maxgridlimit = 'maxgridlimit',
  /** column name */
  Minimumexport = 'minimumexport',
  /** column name */
  Minimumexporttime = 'minimumexporttime',
  /** column name */
  Passcode = 'passcode',
  /** column name */
  Prioritycheckperiod = 'prioritycheckperiod',
  /** column name */
  Savingskeepversion = 'savingskeepversion',
  /** column name */
  Serverconfigtime = 'serverconfigtime',
  /** column name */
  Signature = 'signature',
  /** column name */
  Sparewasconfigversion = 'sparewasconfigversion',
  /** column name */
  Sparewasnetphasemetering = 'sparewasnetphasemetering',
  /** column name */
  Timezone = 'timezone',
  /** column name */
  Updatefromcloud = 'updatefromcloud',
}

/** input type for updating data in table "eddi_config_reply_data" */
export type Eddi_Config_Reply_Data_Set_Input = {
  autosettimefromclouddone?: InputMaybe<Scalars['Boolean']>;
  backlight?: InputMaybe<Scalars['smallint']>;
  batterymode?: InputMaybe<Scalars['String']>;
  boosthotcanceldelay?: InputMaybe<Scalars['smallint']>;
  calibration?: InputMaybe<Scalars['bytea']>;
  contrast?: InputMaybe<Scalars['smallint']>;
  ct1group?: InputMaybe<Scalars['smallint']>;
  ct1grouplimit?: InputMaybe<Scalars['smallint']>;
  ct1subtype?: InputMaybe<Scalars['String']>;
  ct1type?: InputMaybe<Scalars['String']>;
  ct2group?: InputMaybe<Scalars['smallint']>;
  ct2grouplimit?: InputMaybe<Scalars['smallint']>;
  ct2subtype?: InputMaybe<Scalars['String']>;
  ct2type?: InputMaybe<Scalars['String']>;
  ct3group?: InputMaybe<Scalars['smallint']>;
  ct3grouplimit?: InputMaybe<Scalars['smallint']>;
  dateformat?: InputMaybe<Scalars['String']>;
  deviceconfigtime?: InputMaybe<Scalars['bigint']>;
  devicelimit?: InputMaybe<Scalars['smallint']>;
  dston?: InputMaybe<Scalars['Boolean']>;
  esenseboostenablemode?: InputMaybe<Scalars['String']>;
  esenseboostmode?: InputMaybe<Scalars['String']>;
  esenseheaterenablemode?: InputMaybe<Scalars['String']>;
  esensehysteresis1?: InputMaybe<Scalars['smallint']>;
  esensehysteresis2?: InputMaybe<Scalars['smallint']>;
  esensemode?: InputMaybe<Scalars['String']>;
  esenserelaycontrolmode?: InputMaybe<Scalars['String']>;
  esensesetpoints1?: InputMaybe<Scalars['smallint']>;
  esensesetpoints2?: InputMaybe<Scalars['smallint']>;
  exportmargin?: InputMaybe<Scalars['Int']>;
  exprelay1boosttype?: InputMaybe<Scalars['smallint']>;
  exprelay1heating?: InputMaybe<Scalars['String']>;
  exprelay1includediverted?: InputMaybe<Scalars['Boolean']>;
  exprelay1minimumofftime?: InputMaybe<Scalars['smallint']>;
  exprelay1minimumontime?: InputMaybe<Scalars['smallint']>;
  exprelay1mode?: InputMaybe<Scalars['String']>;
  exprelay1offthreshold?: InputMaybe<Scalars['Int']>;
  exprelay1onthreshold?: InputMaybe<Scalars['Int']>;
  exprelay2boosttype?: InputMaybe<Scalars['smallint']>;
  exprelay2heating?: InputMaybe<Scalars['String']>;
  exprelay2includediverted?: InputMaybe<Scalars['Boolean']>;
  exprelay2minimumofftime?: InputMaybe<Scalars['smallint']>;
  exprelay2minimumontime?: InputMaybe<Scalars['smallint']>;
  exprelay2mode?: InputMaybe<Scalars['String']>;
  exprelay2offthreshold?: InputMaybe<Scalars['Int']>;
  exprelay2onthreshold?: InputMaybe<Scalars['Int']>;
  gridlimit?: InputMaybe<Scalars['smallint']>;
  heaterpriority?: InputMaybe<Scalars['smallint']>;
  heatertype1?: InputMaybe<Scalars['String']>;
  heatertype2?: InputMaybe<Scalars['String']>;
  hottime?: InputMaybe<Scalars['smallint']>;
  icons?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  maxgridlimit?: InputMaybe<Scalars['smallint']>;
  minimumexport?: InputMaybe<Scalars['Int']>;
  minimumexporttime?: InputMaybe<Scalars['smallint']>;
  passcode?: InputMaybe<Scalars['smallint']>;
  prioritycheckperiod?: InputMaybe<Scalars['smallint']>;
  savingskeepversion?: InputMaybe<Scalars['smallint']>;
  serverconfigtime?: InputMaybe<Scalars['Int']>;
  signature?: InputMaybe<Scalars['bigint']>;
  sparewasconfigversion?: InputMaybe<Scalars['smallint']>;
  sparewasnetphasemetering?: InputMaybe<Scalars['smallint']>;
  timezone?: InputMaybe<Scalars['String']>;
  updatefromcloud?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Eddi_Config_Reply_Data_Stddev_Fields = {
  __typename?: 'eddi_config_reply_data_stddev_fields';
  backlight?: Maybe<Scalars['Float']>;
  boosthotcanceldelay?: Maybe<Scalars['Float']>;
  contrast?: Maybe<Scalars['Float']>;
  ct1group?: Maybe<Scalars['Float']>;
  ct1grouplimit?: Maybe<Scalars['Float']>;
  ct2group?: Maybe<Scalars['Float']>;
  ct2grouplimit?: Maybe<Scalars['Float']>;
  ct3group?: Maybe<Scalars['Float']>;
  ct3grouplimit?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  devicelimit?: Maybe<Scalars['Float']>;
  esensehysteresis1?: Maybe<Scalars['Float']>;
  esensehysteresis2?: Maybe<Scalars['Float']>;
  esensesetpoints1?: Maybe<Scalars['Float']>;
  esensesetpoints2?: Maybe<Scalars['Float']>;
  exportmargin?: Maybe<Scalars['Float']>;
  exprelay1boosttype?: Maybe<Scalars['Float']>;
  exprelay1minimumofftime?: Maybe<Scalars['Float']>;
  exprelay1minimumontime?: Maybe<Scalars['Float']>;
  exprelay1offthreshold?: Maybe<Scalars['Float']>;
  exprelay1onthreshold?: Maybe<Scalars['Float']>;
  exprelay2boosttype?: Maybe<Scalars['Float']>;
  exprelay2minimumofftime?: Maybe<Scalars['Float']>;
  exprelay2minimumontime?: Maybe<Scalars['Float']>;
  exprelay2offthreshold?: Maybe<Scalars['Float']>;
  exprelay2onthreshold?: Maybe<Scalars['Float']>;
  gridlimit?: Maybe<Scalars['Float']>;
  heaterpriority?: Maybe<Scalars['Float']>;
  hottime?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  maxgridlimit?: Maybe<Scalars['Float']>;
  minimumexport?: Maybe<Scalars['Float']>;
  minimumexporttime?: Maybe<Scalars['Float']>;
  passcode?: Maybe<Scalars['Float']>;
  prioritycheckperiod?: Maybe<Scalars['Float']>;
  savingskeepversion?: Maybe<Scalars['Float']>;
  serverconfigtime?: Maybe<Scalars['Float']>;
  signature?: Maybe<Scalars['Float']>;
  sparewasconfigversion?: Maybe<Scalars['Float']>;
  sparewasnetphasemetering?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Eddi_Config_Reply_Data_Stddev_Pop_Fields = {
  __typename?: 'eddi_config_reply_data_stddev_pop_fields';
  backlight?: Maybe<Scalars['Float']>;
  boosthotcanceldelay?: Maybe<Scalars['Float']>;
  contrast?: Maybe<Scalars['Float']>;
  ct1group?: Maybe<Scalars['Float']>;
  ct1grouplimit?: Maybe<Scalars['Float']>;
  ct2group?: Maybe<Scalars['Float']>;
  ct2grouplimit?: Maybe<Scalars['Float']>;
  ct3group?: Maybe<Scalars['Float']>;
  ct3grouplimit?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  devicelimit?: Maybe<Scalars['Float']>;
  esensehysteresis1?: Maybe<Scalars['Float']>;
  esensehysteresis2?: Maybe<Scalars['Float']>;
  esensesetpoints1?: Maybe<Scalars['Float']>;
  esensesetpoints2?: Maybe<Scalars['Float']>;
  exportmargin?: Maybe<Scalars['Float']>;
  exprelay1boosttype?: Maybe<Scalars['Float']>;
  exprelay1minimumofftime?: Maybe<Scalars['Float']>;
  exprelay1minimumontime?: Maybe<Scalars['Float']>;
  exprelay1offthreshold?: Maybe<Scalars['Float']>;
  exprelay1onthreshold?: Maybe<Scalars['Float']>;
  exprelay2boosttype?: Maybe<Scalars['Float']>;
  exprelay2minimumofftime?: Maybe<Scalars['Float']>;
  exprelay2minimumontime?: Maybe<Scalars['Float']>;
  exprelay2offthreshold?: Maybe<Scalars['Float']>;
  exprelay2onthreshold?: Maybe<Scalars['Float']>;
  gridlimit?: Maybe<Scalars['Float']>;
  heaterpriority?: Maybe<Scalars['Float']>;
  hottime?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  maxgridlimit?: Maybe<Scalars['Float']>;
  minimumexport?: Maybe<Scalars['Float']>;
  minimumexporttime?: Maybe<Scalars['Float']>;
  passcode?: Maybe<Scalars['Float']>;
  prioritycheckperiod?: Maybe<Scalars['Float']>;
  savingskeepversion?: Maybe<Scalars['Float']>;
  serverconfigtime?: Maybe<Scalars['Float']>;
  signature?: Maybe<Scalars['Float']>;
  sparewasconfigversion?: Maybe<Scalars['Float']>;
  sparewasnetphasemetering?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Eddi_Config_Reply_Data_Stddev_Samp_Fields = {
  __typename?: 'eddi_config_reply_data_stddev_samp_fields';
  backlight?: Maybe<Scalars['Float']>;
  boosthotcanceldelay?: Maybe<Scalars['Float']>;
  contrast?: Maybe<Scalars['Float']>;
  ct1group?: Maybe<Scalars['Float']>;
  ct1grouplimit?: Maybe<Scalars['Float']>;
  ct2group?: Maybe<Scalars['Float']>;
  ct2grouplimit?: Maybe<Scalars['Float']>;
  ct3group?: Maybe<Scalars['Float']>;
  ct3grouplimit?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  devicelimit?: Maybe<Scalars['Float']>;
  esensehysteresis1?: Maybe<Scalars['Float']>;
  esensehysteresis2?: Maybe<Scalars['Float']>;
  esensesetpoints1?: Maybe<Scalars['Float']>;
  esensesetpoints2?: Maybe<Scalars['Float']>;
  exportmargin?: Maybe<Scalars['Float']>;
  exprelay1boosttype?: Maybe<Scalars['Float']>;
  exprelay1minimumofftime?: Maybe<Scalars['Float']>;
  exprelay1minimumontime?: Maybe<Scalars['Float']>;
  exprelay1offthreshold?: Maybe<Scalars['Float']>;
  exprelay1onthreshold?: Maybe<Scalars['Float']>;
  exprelay2boosttype?: Maybe<Scalars['Float']>;
  exprelay2minimumofftime?: Maybe<Scalars['Float']>;
  exprelay2minimumontime?: Maybe<Scalars['Float']>;
  exprelay2offthreshold?: Maybe<Scalars['Float']>;
  exprelay2onthreshold?: Maybe<Scalars['Float']>;
  gridlimit?: Maybe<Scalars['Float']>;
  heaterpriority?: Maybe<Scalars['Float']>;
  hottime?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  maxgridlimit?: Maybe<Scalars['Float']>;
  minimumexport?: Maybe<Scalars['Float']>;
  minimumexporttime?: Maybe<Scalars['Float']>;
  passcode?: Maybe<Scalars['Float']>;
  prioritycheckperiod?: Maybe<Scalars['Float']>;
  savingskeepversion?: Maybe<Scalars['Float']>;
  serverconfigtime?: Maybe<Scalars['Float']>;
  signature?: Maybe<Scalars['Float']>;
  sparewasconfigversion?: Maybe<Scalars['Float']>;
  sparewasnetphasemetering?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Eddi_Config_Reply_Data_Sum_Fields = {
  __typename?: 'eddi_config_reply_data_sum_fields';
  backlight?: Maybe<Scalars['smallint']>;
  boosthotcanceldelay?: Maybe<Scalars['smallint']>;
  contrast?: Maybe<Scalars['smallint']>;
  ct1group?: Maybe<Scalars['smallint']>;
  ct1grouplimit?: Maybe<Scalars['smallint']>;
  ct2group?: Maybe<Scalars['smallint']>;
  ct2grouplimit?: Maybe<Scalars['smallint']>;
  ct3group?: Maybe<Scalars['smallint']>;
  ct3grouplimit?: Maybe<Scalars['smallint']>;
  deviceconfigtime?: Maybe<Scalars['bigint']>;
  devicelimit?: Maybe<Scalars['smallint']>;
  esensehysteresis1?: Maybe<Scalars['smallint']>;
  esensehysteresis2?: Maybe<Scalars['smallint']>;
  esensesetpoints1?: Maybe<Scalars['smallint']>;
  esensesetpoints2?: Maybe<Scalars['smallint']>;
  exportmargin?: Maybe<Scalars['Int']>;
  exprelay1boosttype?: Maybe<Scalars['smallint']>;
  exprelay1minimumofftime?: Maybe<Scalars['smallint']>;
  exprelay1minimumontime?: Maybe<Scalars['smallint']>;
  exprelay1offthreshold?: Maybe<Scalars['Int']>;
  exprelay1onthreshold?: Maybe<Scalars['Int']>;
  exprelay2boosttype?: Maybe<Scalars['smallint']>;
  exprelay2minimumofftime?: Maybe<Scalars['smallint']>;
  exprelay2minimumontime?: Maybe<Scalars['smallint']>;
  exprelay2offthreshold?: Maybe<Scalars['Int']>;
  exprelay2onthreshold?: Maybe<Scalars['Int']>;
  gridlimit?: Maybe<Scalars['smallint']>;
  heaterpriority?: Maybe<Scalars['smallint']>;
  hottime?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['Int']>;
  maxgridlimit?: Maybe<Scalars['smallint']>;
  minimumexport?: Maybe<Scalars['Int']>;
  minimumexporttime?: Maybe<Scalars['smallint']>;
  passcode?: Maybe<Scalars['smallint']>;
  prioritycheckperiod?: Maybe<Scalars['smallint']>;
  savingskeepversion?: Maybe<Scalars['smallint']>;
  serverconfigtime?: Maybe<Scalars['Int']>;
  signature?: Maybe<Scalars['bigint']>;
  sparewasconfigversion?: Maybe<Scalars['smallint']>;
  sparewasnetphasemetering?: Maybe<Scalars['smallint']>;
};

/** update columns of table "eddi_config_reply_data" */
export enum Eddi_Config_Reply_Data_Update_Column {
  /** column name */
  Autosettimefromclouddone = 'autosettimefromclouddone',
  /** column name */
  Backlight = 'backlight',
  /** column name */
  Batterymode = 'batterymode',
  /** column name */
  Boosthotcanceldelay = 'boosthotcanceldelay',
  /** column name */
  Calibration = 'calibration',
  /** column name */
  Contrast = 'contrast',
  /** column name */
  Ct1group = 'ct1group',
  /** column name */
  Ct1grouplimit = 'ct1grouplimit',
  /** column name */
  Ct1subtype = 'ct1subtype',
  /** column name */
  Ct1type = 'ct1type',
  /** column name */
  Ct2group = 'ct2group',
  /** column name */
  Ct2grouplimit = 'ct2grouplimit',
  /** column name */
  Ct2subtype = 'ct2subtype',
  /** column name */
  Ct2type = 'ct2type',
  /** column name */
  Ct3group = 'ct3group',
  /** column name */
  Ct3grouplimit = 'ct3grouplimit',
  /** column name */
  Dateformat = 'dateformat',
  /** column name */
  Deviceconfigtime = 'deviceconfigtime',
  /** column name */
  Devicelimit = 'devicelimit',
  /** column name */
  Dston = 'dston',
  /** column name */
  Esenseboostenablemode = 'esenseboostenablemode',
  /** column name */
  Esenseboostmode = 'esenseboostmode',
  /** column name */
  Esenseheaterenablemode = 'esenseheaterenablemode',
  /** column name */
  Esensehysteresis1 = 'esensehysteresis1',
  /** column name */
  Esensehysteresis2 = 'esensehysteresis2',
  /** column name */
  Esensemode = 'esensemode',
  /** column name */
  Esenserelaycontrolmode = 'esenserelaycontrolmode',
  /** column name */
  Esensesetpoints1 = 'esensesetpoints1',
  /** column name */
  Esensesetpoints2 = 'esensesetpoints2',
  /** column name */
  Exportmargin = 'exportmargin',
  /** column name */
  Exprelay1boosttype = 'exprelay1boosttype',
  /** column name */
  Exprelay1heating = 'exprelay1heating',
  /** column name */
  Exprelay1includediverted = 'exprelay1includediverted',
  /** column name */
  Exprelay1minimumofftime = 'exprelay1minimumofftime',
  /** column name */
  Exprelay1minimumontime = 'exprelay1minimumontime',
  /** column name */
  Exprelay1mode = 'exprelay1mode',
  /** column name */
  Exprelay1offthreshold = 'exprelay1offthreshold',
  /** column name */
  Exprelay1onthreshold = 'exprelay1onthreshold',
  /** column name */
  Exprelay2boosttype = 'exprelay2boosttype',
  /** column name */
  Exprelay2heating = 'exprelay2heating',
  /** column name */
  Exprelay2includediverted = 'exprelay2includediverted',
  /** column name */
  Exprelay2minimumofftime = 'exprelay2minimumofftime',
  /** column name */
  Exprelay2minimumontime = 'exprelay2minimumontime',
  /** column name */
  Exprelay2mode = 'exprelay2mode',
  /** column name */
  Exprelay2offthreshold = 'exprelay2offthreshold',
  /** column name */
  Exprelay2onthreshold = 'exprelay2onthreshold',
  /** column name */
  Gridlimit = 'gridlimit',
  /** column name */
  Heaterpriority = 'heaterpriority',
  /** column name */
  Heatertype1 = 'heatertype1',
  /** column name */
  Heatertype2 = 'heatertype2',
  /** column name */
  Hottime = 'hottime',
  /** column name */
  Icons = 'icons',
  /** column name */
  Id = 'id',
  /** column name */
  Language = 'language',
  /** column name */
  Maxgridlimit = 'maxgridlimit',
  /** column name */
  Minimumexport = 'minimumexport',
  /** column name */
  Minimumexporttime = 'minimumexporttime',
  /** column name */
  Passcode = 'passcode',
  /** column name */
  Prioritycheckperiod = 'prioritycheckperiod',
  /** column name */
  Savingskeepversion = 'savingskeepversion',
  /** column name */
  Serverconfigtime = 'serverconfigtime',
  /** column name */
  Signature = 'signature',
  /** column name */
  Sparewasconfigversion = 'sparewasconfigversion',
  /** column name */
  Sparewasnetphasemetering = 'sparewasnetphasemetering',
  /** column name */
  Timezone = 'timezone',
  /** column name */
  Updatefromcloud = 'updatefromcloud',
}

/** aggregate var_pop on columns */
export type Eddi_Config_Reply_Data_Var_Pop_Fields = {
  __typename?: 'eddi_config_reply_data_var_pop_fields';
  backlight?: Maybe<Scalars['Float']>;
  boosthotcanceldelay?: Maybe<Scalars['Float']>;
  contrast?: Maybe<Scalars['Float']>;
  ct1group?: Maybe<Scalars['Float']>;
  ct1grouplimit?: Maybe<Scalars['Float']>;
  ct2group?: Maybe<Scalars['Float']>;
  ct2grouplimit?: Maybe<Scalars['Float']>;
  ct3group?: Maybe<Scalars['Float']>;
  ct3grouplimit?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  devicelimit?: Maybe<Scalars['Float']>;
  esensehysteresis1?: Maybe<Scalars['Float']>;
  esensehysteresis2?: Maybe<Scalars['Float']>;
  esensesetpoints1?: Maybe<Scalars['Float']>;
  esensesetpoints2?: Maybe<Scalars['Float']>;
  exportmargin?: Maybe<Scalars['Float']>;
  exprelay1boosttype?: Maybe<Scalars['Float']>;
  exprelay1minimumofftime?: Maybe<Scalars['Float']>;
  exprelay1minimumontime?: Maybe<Scalars['Float']>;
  exprelay1offthreshold?: Maybe<Scalars['Float']>;
  exprelay1onthreshold?: Maybe<Scalars['Float']>;
  exprelay2boosttype?: Maybe<Scalars['Float']>;
  exprelay2minimumofftime?: Maybe<Scalars['Float']>;
  exprelay2minimumontime?: Maybe<Scalars['Float']>;
  exprelay2offthreshold?: Maybe<Scalars['Float']>;
  exprelay2onthreshold?: Maybe<Scalars['Float']>;
  gridlimit?: Maybe<Scalars['Float']>;
  heaterpriority?: Maybe<Scalars['Float']>;
  hottime?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  maxgridlimit?: Maybe<Scalars['Float']>;
  minimumexport?: Maybe<Scalars['Float']>;
  minimumexporttime?: Maybe<Scalars['Float']>;
  passcode?: Maybe<Scalars['Float']>;
  prioritycheckperiod?: Maybe<Scalars['Float']>;
  savingskeepversion?: Maybe<Scalars['Float']>;
  serverconfigtime?: Maybe<Scalars['Float']>;
  signature?: Maybe<Scalars['Float']>;
  sparewasconfigversion?: Maybe<Scalars['Float']>;
  sparewasnetphasemetering?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Eddi_Config_Reply_Data_Var_Samp_Fields = {
  __typename?: 'eddi_config_reply_data_var_samp_fields';
  backlight?: Maybe<Scalars['Float']>;
  boosthotcanceldelay?: Maybe<Scalars['Float']>;
  contrast?: Maybe<Scalars['Float']>;
  ct1group?: Maybe<Scalars['Float']>;
  ct1grouplimit?: Maybe<Scalars['Float']>;
  ct2group?: Maybe<Scalars['Float']>;
  ct2grouplimit?: Maybe<Scalars['Float']>;
  ct3group?: Maybe<Scalars['Float']>;
  ct3grouplimit?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  devicelimit?: Maybe<Scalars['Float']>;
  esensehysteresis1?: Maybe<Scalars['Float']>;
  esensehysteresis2?: Maybe<Scalars['Float']>;
  esensesetpoints1?: Maybe<Scalars['Float']>;
  esensesetpoints2?: Maybe<Scalars['Float']>;
  exportmargin?: Maybe<Scalars['Float']>;
  exprelay1boosttype?: Maybe<Scalars['Float']>;
  exprelay1minimumofftime?: Maybe<Scalars['Float']>;
  exprelay1minimumontime?: Maybe<Scalars['Float']>;
  exprelay1offthreshold?: Maybe<Scalars['Float']>;
  exprelay1onthreshold?: Maybe<Scalars['Float']>;
  exprelay2boosttype?: Maybe<Scalars['Float']>;
  exprelay2minimumofftime?: Maybe<Scalars['Float']>;
  exprelay2minimumontime?: Maybe<Scalars['Float']>;
  exprelay2offthreshold?: Maybe<Scalars['Float']>;
  exprelay2onthreshold?: Maybe<Scalars['Float']>;
  gridlimit?: Maybe<Scalars['Float']>;
  heaterpriority?: Maybe<Scalars['Float']>;
  hottime?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  maxgridlimit?: Maybe<Scalars['Float']>;
  minimumexport?: Maybe<Scalars['Float']>;
  minimumexporttime?: Maybe<Scalars['Float']>;
  passcode?: Maybe<Scalars['Float']>;
  prioritycheckperiod?: Maybe<Scalars['Float']>;
  savingskeepversion?: Maybe<Scalars['Float']>;
  serverconfigtime?: Maybe<Scalars['Float']>;
  signature?: Maybe<Scalars['Float']>;
  sparewasconfigversion?: Maybe<Scalars['Float']>;
  sparewasnetphasemetering?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Eddi_Config_Reply_Data_Variance_Fields = {
  __typename?: 'eddi_config_reply_data_variance_fields';
  backlight?: Maybe<Scalars['Float']>;
  boosthotcanceldelay?: Maybe<Scalars['Float']>;
  contrast?: Maybe<Scalars['Float']>;
  ct1group?: Maybe<Scalars['Float']>;
  ct1grouplimit?: Maybe<Scalars['Float']>;
  ct2group?: Maybe<Scalars['Float']>;
  ct2grouplimit?: Maybe<Scalars['Float']>;
  ct3group?: Maybe<Scalars['Float']>;
  ct3grouplimit?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  devicelimit?: Maybe<Scalars['Float']>;
  esensehysteresis1?: Maybe<Scalars['Float']>;
  esensehysteresis2?: Maybe<Scalars['Float']>;
  esensesetpoints1?: Maybe<Scalars['Float']>;
  esensesetpoints2?: Maybe<Scalars['Float']>;
  exportmargin?: Maybe<Scalars['Float']>;
  exprelay1boosttype?: Maybe<Scalars['Float']>;
  exprelay1minimumofftime?: Maybe<Scalars['Float']>;
  exprelay1minimumontime?: Maybe<Scalars['Float']>;
  exprelay1offthreshold?: Maybe<Scalars['Float']>;
  exprelay1onthreshold?: Maybe<Scalars['Float']>;
  exprelay2boosttype?: Maybe<Scalars['Float']>;
  exprelay2minimumofftime?: Maybe<Scalars['Float']>;
  exprelay2minimumontime?: Maybe<Scalars['Float']>;
  exprelay2offthreshold?: Maybe<Scalars['Float']>;
  exprelay2onthreshold?: Maybe<Scalars['Float']>;
  gridlimit?: Maybe<Scalars['Float']>;
  heaterpriority?: Maybe<Scalars['Float']>;
  hottime?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  maxgridlimit?: Maybe<Scalars['Float']>;
  minimumexport?: Maybe<Scalars['Float']>;
  minimumexporttime?: Maybe<Scalars['Float']>;
  passcode?: Maybe<Scalars['Float']>;
  prioritycheckperiod?: Maybe<Scalars['Float']>;
  savingskeepversion?: Maybe<Scalars['Float']>;
  serverconfigtime?: Maybe<Scalars['Float']>;
  signature?: Maybe<Scalars['Float']>;
  sparewasconfigversion?: Maybe<Scalars['Float']>;
  sparewasnetphasemetering?: Maybe<Scalars['Float']>;
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
  config_reply?: InputMaybe<Config_Reply_Obj_Rel_Insert_Input>;
  configappdata?: InputMaybe<Scalars['bytea']>;
  configappdone?: InputMaybe<Scalars['Boolean']>;
  configbootdata?: InputMaybe<Scalars['bytea']>;
  configbootdone?: InputMaybe<Scalars['Boolean']>;
  configlength?: InputMaybe<Scalars['smallint']>;
  configoffset?: InputMaybe<Scalars['smallint']>;
  configstate?: InputMaybe<Scalars['smallint']>;
  configstructure?: InputMaybe<Scalars['smallint']>;
  configversion?: InputMaybe<Scalars['smallint']>;
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
  melinkversion?: InputMaybe<Scalars['Int']>;
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
  voltage?: InputMaybe<Scalars['smallint']>;
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
  Pk_4c94f05e4de575488f4a0c2905d = 'PK_4c94f05e4de575488f4a0c2905d',
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
  config_reply?: InputMaybe<Config_Reply_Order_By>;
  configappdata?: InputMaybe<Order_By>;
  configappdone?: InputMaybe<Order_By>;
  configbootdata?: InputMaybe<Order_By>;
  configbootdone?: InputMaybe<Order_By>;
  configlength?: InputMaybe<Order_By>;
  configoffset?: InputMaybe<Order_By>;
  configstate?: InputMaybe<Order_By>;
  configstructure?: InputMaybe<Order_By>;
  configversion?: InputMaybe<Order_By>;
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
  melinkversion?: InputMaybe<Order_By>;
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
  voltage?: InputMaybe<Order_By>;
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
  Melinkversion = 'melinkversion',
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
  Voltage = 'voltage',
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
  melinkversion?: InputMaybe<Scalars['Int']>;
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
  voltage?: InputMaybe<Scalars['smallint']>;
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
  Melinkversion = 'melinkversion',
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
  Voltage = 'voltage',
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

/** columns and relationships of "foal_session" */
export type Foal_Session = {
  __typename?: 'foal_session';
  created_at: Scalars['bigint'];
  session_content: Scalars['String'];
  session_id: Scalars['String'];
  updated_at: Scalars['bigint'];
};

/** aggregated selection of "foal_session" */
export type Foal_Session_Aggregate = {
  __typename?: 'foal_session_aggregate';
  aggregate?: Maybe<Foal_Session_Aggregate_Fields>;
  nodes: Array<Foal_Session>;
};

/** aggregate fields of "foal_session" */
export type Foal_Session_Aggregate_Fields = {
  __typename?: 'foal_session_aggregate_fields';
  avg?: Maybe<Foal_Session_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Foal_Session_Max_Fields>;
  min?: Maybe<Foal_Session_Min_Fields>;
  stddev?: Maybe<Foal_Session_Stddev_Fields>;
  stddev_pop?: Maybe<Foal_Session_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Foal_Session_Stddev_Samp_Fields>;
  sum?: Maybe<Foal_Session_Sum_Fields>;
  var_pop?: Maybe<Foal_Session_Var_Pop_Fields>;
  var_samp?: Maybe<Foal_Session_Var_Samp_Fields>;
  variance?: Maybe<Foal_Session_Variance_Fields>;
};

/** aggregate fields of "foal_session" */
export type Foal_Session_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Foal_Session_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Foal_Session_Avg_Fields = {
  __typename?: 'foal_session_avg_fields';
  created_at?: Maybe<Scalars['Float']>;
  updated_at?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "foal_session". All fields are combined with a logical 'AND'. */
export type Foal_Session_Bool_Exp = {
  _and?: InputMaybe<Array<Foal_Session_Bool_Exp>>;
  _not?: InputMaybe<Foal_Session_Bool_Exp>;
  _or?: InputMaybe<Array<Foal_Session_Bool_Exp>>;
  created_at?: InputMaybe<Bigint_Comparison_Exp>;
  session_content?: InputMaybe<String_Comparison_Exp>;
  session_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "foal_session" */
export enum Foal_Session_Constraint {
  /** unique or primary key constraint */
  Pk_9e23333fee454aa1884ba8e0af7 = 'PK_9e23333fee454aa1884ba8e0af7',
}

/** input type for incrementing numeric columns in table "foal_session" */
export type Foal_Session_Inc_Input = {
  created_at?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "foal_session" */
export type Foal_Session_Insert_Input = {
  created_at?: InputMaybe<Scalars['bigint']>;
  session_content?: InputMaybe<Scalars['String']>;
  session_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Foal_Session_Max_Fields = {
  __typename?: 'foal_session_max_fields';
  created_at?: Maybe<Scalars['bigint']>;
  session_content?: Maybe<Scalars['String']>;
  session_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Foal_Session_Min_Fields = {
  __typename?: 'foal_session_min_fields';
  created_at?: Maybe<Scalars['bigint']>;
  session_content?: Maybe<Scalars['String']>;
  session_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "foal_session" */
export type Foal_Session_Mutation_Response = {
  __typename?: 'foal_session_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Foal_Session>;
};

/** on_conflict condition type for table "foal_session" */
export type Foal_Session_On_Conflict = {
  constraint: Foal_Session_Constraint;
  update_columns?: Array<Foal_Session_Update_Column>;
  where?: InputMaybe<Foal_Session_Bool_Exp>;
};

/** Ordering options when selecting data from "foal_session". */
export type Foal_Session_Order_By = {
  created_at?: InputMaybe<Order_By>;
  session_content?: InputMaybe<Order_By>;
  session_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: foal_session */
export type Foal_Session_Pk_Columns_Input = {
  session_id: Scalars['String'];
};

/** select columns of table "foal_session" */
export enum Foal_Session_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  SessionContent = 'session_content',
  /** column name */
  SessionId = 'session_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "foal_session" */
export type Foal_Session_Set_Input = {
  created_at?: InputMaybe<Scalars['bigint']>;
  session_content?: InputMaybe<Scalars['String']>;
  session_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Foal_Session_Stddev_Fields = {
  __typename?: 'foal_session_stddev_fields';
  created_at?: Maybe<Scalars['Float']>;
  updated_at?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Foal_Session_Stddev_Pop_Fields = {
  __typename?: 'foal_session_stddev_pop_fields';
  created_at?: Maybe<Scalars['Float']>;
  updated_at?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Foal_Session_Stddev_Samp_Fields = {
  __typename?: 'foal_session_stddev_samp_fields';
  created_at?: Maybe<Scalars['Float']>;
  updated_at?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Foal_Session_Sum_Fields = {
  __typename?: 'foal_session_sum_fields';
  created_at?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['bigint']>;
};

/** update columns of table "foal_session" */
export enum Foal_Session_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  SessionContent = 'session_content',
  /** column name */
  SessionId = 'session_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Foal_Session_Var_Pop_Fields = {
  __typename?: 'foal_session_var_pop_fields';
  created_at?: Maybe<Scalars['Float']>;
  updated_at?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Foal_Session_Var_Samp_Fields = {
  __typename?: 'foal_session_var_samp_fields';
  created_at?: Maybe<Scalars['Float']>;
  updated_at?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Foal_Session_Variance_Fields = {
  __typename?: 'foal_session_variance_fields';
  created_at?: Maybe<Scalars['Float']>;
  updated_at?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "harvi" */
export type Harvi = {
  __typename?: 'harvi';
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
  currentversion?: Maybe<Scalars['Int']>;
  deviceclass?: Maybe<Scalars['String']>;
  hubserialno?: Maybe<Scalars['bigint']>;
  serialno?: Maybe<Scalars['bigint']>;
  updatedat?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "harvi" */
export type Harvi_Max_Order_By = {
  currentversion?: InputMaybe<Order_By>;
  deviceclass?: InputMaybe<Order_By>;
  hubserialno?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  updatedat?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Harvi_Min_Fields = {
  __typename?: 'harvi_min_fields';
  currentversion?: Maybe<Scalars['Int']>;
  deviceclass?: Maybe<Scalars['String']>;
  hubserialno?: Maybe<Scalars['bigint']>;
  serialno?: Maybe<Scalars['bigint']>;
  updatedat?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "harvi" */
export type Harvi_Min_Order_By = {
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
  cloudipoverrideserverid?: Maybe<Scalars['Int']>;
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
  networkid: Scalars['Int'];
  nodevices?: Maybe<Scalars['Int']>;
  port: Scalars['Int'];
  registrationdate?: Maybe<Scalars['timestamptz']>;
  regpassword: Scalars['String'];
  serialno: Scalars['bigint'];
  /** An object relationship */
  server?: Maybe<Server>;
  serverlastheard?: Maybe<Scalars['Int']>;
  updatedat: Scalars['timestamptz'];
  uptime?: Maybe<Scalars['Int']>;
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

/** order by aggregate values of table "hub" */
export type Hub_Aggregate_Order_By = {
  avg?: InputMaybe<Hub_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Hub_Max_Order_By>;
  min?: InputMaybe<Hub_Min_Order_By>;
  stddev?: InputMaybe<Hub_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Hub_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Hub_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Hub_Sum_Order_By>;
  var_pop?: InputMaybe<Hub_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Hub_Var_Samp_Order_By>;
  variance?: InputMaybe<Hub_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Hub_Append_Input = {
  keyvaluestore?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "hub" */
export type Hub_Arr_Rel_Insert_Input = {
  data: Array<Hub_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Hub_On_Conflict>;
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
  serialno?: Maybe<Scalars['Float']>;
  serverlastheard?: Maybe<Scalars['Float']>;
  uptime?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "hub" */
export type Hub_Avg_Order_By = {
  cloudipoverrideserverid?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
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
  loadcontrolgeneration?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase1?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase2?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase3?: InputMaybe<Order_By>;
  loadcontrolgridimportexport?: InputMaybe<Order_By>;
  masterdeviceinstance?: InputMaybe<Order_By>;
  masterdevicerawaddress?: InputMaybe<Order_By>;
  networkid?: InputMaybe<Order_By>;
  nodevices?: InputMaybe<Order_By>;
  port?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverlastheard?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "hub". All fields are combined with a logical 'AND'. */
export type Hub_Bool_Exp = {
  _and?: InputMaybe<Array<Hub_Bool_Exp>>;
  _not?: InputMaybe<Hub_Bool_Exp>;
  _or?: InputMaybe<Array<Hub_Bool_Exp>>;
  apppassword?: InputMaybe<String_Comparison_Exp>;
  cloudipoverrideserverid?: InputMaybe<Int_Comparison_Exp>;
  currentversion?: InputMaybe<Int_Comparison_Exp>;
  deviceclass?: InputMaybe<String_Comparison_Exp>;
  eddis?: InputMaybe<Eddi_Bool_Exp>;
  harvis?: InputMaybe<Harvi_Bool_Exp>;
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
  networkid?: InputMaybe<Int_Comparison_Exp>;
  nodevices?: InputMaybe<Int_Comparison_Exp>;
  port?: InputMaybe<Int_Comparison_Exp>;
  registrationdate?: InputMaybe<Timestamptz_Comparison_Exp>;
  regpassword?: InputMaybe<String_Comparison_Exp>;
  serialno?: InputMaybe<Bigint_Comparison_Exp>;
  server?: InputMaybe<Server_Bool_Exp>;
  serverlastheard?: InputMaybe<Int_Comparison_Exp>;
  updatedat?: InputMaybe<Timestamptz_Comparison_Exp>;
  uptime?: InputMaybe<Int_Comparison_Exp>;
  zappis?: InputMaybe<Zappi_Bool_Exp>;
};

/** unique or primary key constraints on table "hub" */
export enum Hub_Constraint {
  /** unique or primary key constraint */
  Pk_2debac79742deb56cc3e1ace3a1 = 'PK_2debac79742deb56cc3e1ace3a1',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Hub_Delete_At_Path_Input = {
  keyvaluestore?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Hub_Delete_Elem_Input = {
  keyvaluestore?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Hub_Delete_Key_Input = {
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
  serialno?: InputMaybe<Scalars['bigint']>;
  serverlastheard?: InputMaybe<Scalars['Int']>;
  uptime?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "hub" */
export type Hub_Insert_Input = {
  apppassword?: InputMaybe<Scalars['String']>;
  cloudipoverrideserverid?: InputMaybe<Scalars['Int']>;
  currentversion?: InputMaybe<Scalars['Int']>;
  deviceclass?: InputMaybe<Scalars['String']>;
  eddis?: InputMaybe<Eddi_Arr_Rel_Insert_Input>;
  harvis?: InputMaybe<Harvi_Arr_Rel_Insert_Input>;
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
  networkid?: InputMaybe<Scalars['Int']>;
  nodevices?: InputMaybe<Scalars['Int']>;
  port?: InputMaybe<Scalars['Int']>;
  registrationdate?: InputMaybe<Scalars['timestamptz']>;
  regpassword?: InputMaybe<Scalars['String']>;
  serialno?: InputMaybe<Scalars['bigint']>;
  server?: InputMaybe<Server_Obj_Rel_Insert_Input>;
  serverlastheard?: InputMaybe<Scalars['Int']>;
  updatedat?: InputMaybe<Scalars['timestamptz']>;
  uptime?: InputMaybe<Scalars['Int']>;
  zappis?: InputMaybe<Zappi_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Hub_Max_Fields = {
  __typename?: 'hub_max_fields';
  apppassword?: Maybe<Scalars['String']>;
  cloudipoverrideserverid?: Maybe<Scalars['Int']>;
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
  registrationdate?: Maybe<Scalars['timestamptz']>;
  regpassword?: Maybe<Scalars['String']>;
  serialno?: Maybe<Scalars['bigint']>;
  serverlastheard?: Maybe<Scalars['Int']>;
  updatedat?: Maybe<Scalars['timestamptz']>;
  uptime?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "hub" */
export type Hub_Max_Order_By = {
  apppassword?: InputMaybe<Order_By>;
  cloudipoverrideserverid?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
  deviceclass?: InputMaybe<Order_By>;
  ipaddress?: InputMaybe<Order_By>;
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
  loadcontrolgeneration?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase1?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase2?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase3?: InputMaybe<Order_By>;
  loadcontrolgridimportexport?: InputMaybe<Order_By>;
  masterdeviceclass?: InputMaybe<Order_By>;
  masterdeviceinstance?: InputMaybe<Order_By>;
  masterdevicerawaddress?: InputMaybe<Order_By>;
  networkid?: InputMaybe<Order_By>;
  nodevices?: InputMaybe<Order_By>;
  port?: InputMaybe<Order_By>;
  registrationdate?: InputMaybe<Order_By>;
  regpassword?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverlastheard?: InputMaybe<Order_By>;
  updatedat?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Hub_Min_Fields = {
  __typename?: 'hub_min_fields';
  apppassword?: Maybe<Scalars['String']>;
  cloudipoverrideserverid?: Maybe<Scalars['Int']>;
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
  registrationdate?: Maybe<Scalars['timestamptz']>;
  regpassword?: Maybe<Scalars['String']>;
  serialno?: Maybe<Scalars['bigint']>;
  serverlastheard?: Maybe<Scalars['Int']>;
  updatedat?: Maybe<Scalars['timestamptz']>;
  uptime?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "hub" */
export type Hub_Min_Order_By = {
  apppassword?: InputMaybe<Order_By>;
  cloudipoverrideserverid?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
  deviceclass?: InputMaybe<Order_By>;
  ipaddress?: InputMaybe<Order_By>;
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
  loadcontrolgeneration?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase1?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase2?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase3?: InputMaybe<Order_By>;
  loadcontrolgridimportexport?: InputMaybe<Order_By>;
  masterdeviceclass?: InputMaybe<Order_By>;
  masterdeviceinstance?: InputMaybe<Order_By>;
  masterdevicerawaddress?: InputMaybe<Order_By>;
  networkid?: InputMaybe<Order_By>;
  nodevices?: InputMaybe<Order_By>;
  port?: InputMaybe<Order_By>;
  registrationdate?: InputMaybe<Order_By>;
  regpassword?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverlastheard?: InputMaybe<Order_By>;
  updatedat?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
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
  cloudipoverrideserverid?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
  deviceclass?: InputMaybe<Order_By>;
  eddis_aggregate?: InputMaybe<Eddi_Aggregate_Order_By>;
  harvis_aggregate?: InputMaybe<Harvi_Aggregate_Order_By>;
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
  networkid?: InputMaybe<Order_By>;
  nodevices?: InputMaybe<Order_By>;
  port?: InputMaybe<Order_By>;
  registrationdate?: InputMaybe<Order_By>;
  regpassword?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  server?: InputMaybe<Server_Order_By>;
  serverlastheard?: InputMaybe<Order_By>;
  updatedat?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
  zappis_aggregate?: InputMaybe<Zappi_Aggregate_Order_By>;
};

/** primary key columns input for table: hub */
export type Hub_Pk_Columns_Input = {
  serialno: Scalars['bigint'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Hub_Prepend_Input = {
  keyvaluestore?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "hub" */
export enum Hub_Select_Column {
  /** column name */
  Apppassword = 'apppassword',
  /** column name */
  Cloudipoverrideserverid = 'cloudipoverrideserverid',
  /** column name */
  Currentversion = 'currentversion',
  /** column name */
  Deviceclass = 'deviceclass',
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
  Networkid = 'networkid',
  /** column name */
  Nodevices = 'nodevices',
  /** column name */
  Port = 'port',
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
}

/** input type for updating data in table "hub" */
export type Hub_Set_Input = {
  apppassword?: InputMaybe<Scalars['String']>;
  cloudipoverrideserverid?: InputMaybe<Scalars['Int']>;
  currentversion?: InputMaybe<Scalars['Int']>;
  deviceclass?: InputMaybe<Scalars['String']>;
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
  networkid?: InputMaybe<Scalars['Int']>;
  nodevices?: InputMaybe<Scalars['Int']>;
  port?: InputMaybe<Scalars['Int']>;
  registrationdate?: InputMaybe<Scalars['timestamptz']>;
  regpassword?: InputMaybe<Scalars['String']>;
  serialno?: InputMaybe<Scalars['bigint']>;
  serverlastheard?: InputMaybe<Scalars['Int']>;
  updatedat?: InputMaybe<Scalars['timestamptz']>;
  uptime?: InputMaybe<Scalars['Int']>;
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
  serialno?: Maybe<Scalars['Float']>;
  serverlastheard?: Maybe<Scalars['Float']>;
  uptime?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "hub" */
export type Hub_Stddev_Order_By = {
  cloudipoverrideserverid?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
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
  loadcontrolgeneration?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase1?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase2?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase3?: InputMaybe<Order_By>;
  loadcontrolgridimportexport?: InputMaybe<Order_By>;
  masterdeviceinstance?: InputMaybe<Order_By>;
  masterdevicerawaddress?: InputMaybe<Order_By>;
  networkid?: InputMaybe<Order_By>;
  nodevices?: InputMaybe<Order_By>;
  port?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverlastheard?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
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
  serialno?: Maybe<Scalars['Float']>;
  serverlastheard?: Maybe<Scalars['Float']>;
  uptime?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "hub" */
export type Hub_Stddev_Pop_Order_By = {
  cloudipoverrideserverid?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
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
  loadcontrolgeneration?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase1?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase2?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase3?: InputMaybe<Order_By>;
  loadcontrolgridimportexport?: InputMaybe<Order_By>;
  masterdeviceinstance?: InputMaybe<Order_By>;
  masterdevicerawaddress?: InputMaybe<Order_By>;
  networkid?: InputMaybe<Order_By>;
  nodevices?: InputMaybe<Order_By>;
  port?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverlastheard?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
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
  serialno?: Maybe<Scalars['Float']>;
  serverlastheard?: Maybe<Scalars['Float']>;
  uptime?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "hub" */
export type Hub_Stddev_Samp_Order_By = {
  cloudipoverrideserverid?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
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
  loadcontrolgeneration?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase1?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase2?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase3?: InputMaybe<Order_By>;
  loadcontrolgridimportexport?: InputMaybe<Order_By>;
  masterdeviceinstance?: InputMaybe<Order_By>;
  masterdevicerawaddress?: InputMaybe<Order_By>;
  networkid?: InputMaybe<Order_By>;
  nodevices?: InputMaybe<Order_By>;
  port?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverlastheard?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
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
  serialno?: Maybe<Scalars['bigint']>;
  serverlastheard?: Maybe<Scalars['Int']>;
  uptime?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "hub" */
export type Hub_Sum_Order_By = {
  cloudipoverrideserverid?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
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
  loadcontrolgeneration?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase1?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase2?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase3?: InputMaybe<Order_By>;
  loadcontrolgridimportexport?: InputMaybe<Order_By>;
  masterdeviceinstance?: InputMaybe<Order_By>;
  masterdevicerawaddress?: InputMaybe<Order_By>;
  networkid?: InputMaybe<Order_By>;
  nodevices?: InputMaybe<Order_By>;
  port?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverlastheard?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** update columns of table "hub" */
export enum Hub_Update_Column {
  /** column name */
  Apppassword = 'apppassword',
  /** column name */
  Cloudipoverrideserverid = 'cloudipoverrideserverid',
  /** column name */
  Currentversion = 'currentversion',
  /** column name */
  Deviceclass = 'deviceclass',
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
  Networkid = 'networkid',
  /** column name */
  Nodevices = 'nodevices',
  /** column name */
  Port = 'port',
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
  serialno?: Maybe<Scalars['Float']>;
  serverlastheard?: Maybe<Scalars['Float']>;
  uptime?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "hub" */
export type Hub_Var_Pop_Order_By = {
  cloudipoverrideserverid?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
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
  loadcontrolgeneration?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase1?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase2?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase3?: InputMaybe<Order_By>;
  loadcontrolgridimportexport?: InputMaybe<Order_By>;
  masterdeviceinstance?: InputMaybe<Order_By>;
  masterdevicerawaddress?: InputMaybe<Order_By>;
  networkid?: InputMaybe<Order_By>;
  nodevices?: InputMaybe<Order_By>;
  port?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverlastheard?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
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
  serialno?: Maybe<Scalars['Float']>;
  serverlastheard?: Maybe<Scalars['Float']>;
  uptime?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "hub" */
export type Hub_Var_Samp_Order_By = {
  cloudipoverrideserverid?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
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
  loadcontrolgeneration?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase1?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase2?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase3?: InputMaybe<Order_By>;
  loadcontrolgridimportexport?: InputMaybe<Order_By>;
  masterdeviceinstance?: InputMaybe<Order_By>;
  masterdevicerawaddress?: InputMaybe<Order_By>;
  networkid?: InputMaybe<Order_By>;
  nodevices?: InputMaybe<Order_By>;
  port?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverlastheard?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
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
  serialno?: Maybe<Scalars['Float']>;
  serverlastheard?: Maybe<Scalars['Float']>;
  uptime?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "hub" */
export type Hub_Variance_Order_By = {
  cloudipoverrideserverid?: InputMaybe<Order_By>;
  currentversion?: InputMaybe<Order_By>;
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
  loadcontrolgeneration?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase1?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase2?: InputMaybe<Order_By>;
  loadcontrolgridcurrentshundredthsphase3?: InputMaybe<Order_By>;
  loadcontrolgridimportexport?: InputMaybe<Order_By>;
  masterdeviceinstance?: InputMaybe<Order_By>;
  masterdevicerawaddress?: InputMaybe<Order_By>;
  networkid?: InputMaybe<Order_By>;
  nodevices?: InputMaybe<Order_By>;
  port?: InputMaybe<Order_By>;
  serialno?: InputMaybe<Order_By>;
  serverlastheard?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
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

/** columns and relationships of "migrations" */
export type Migrations = {
  __typename?: 'migrations';
  id: Scalars['Int'];
  name: Scalars['String'];
  timestamp: Scalars['bigint'];
};

/** aggregated selection of "migrations" */
export type Migrations_Aggregate = {
  __typename?: 'migrations_aggregate';
  aggregate?: Maybe<Migrations_Aggregate_Fields>;
  nodes: Array<Migrations>;
};

/** aggregate fields of "migrations" */
export type Migrations_Aggregate_Fields = {
  __typename?: 'migrations_aggregate_fields';
  avg?: Maybe<Migrations_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Migrations_Max_Fields>;
  min?: Maybe<Migrations_Min_Fields>;
  stddev?: Maybe<Migrations_Stddev_Fields>;
  stddev_pop?: Maybe<Migrations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Migrations_Stddev_Samp_Fields>;
  sum?: Maybe<Migrations_Sum_Fields>;
  var_pop?: Maybe<Migrations_Var_Pop_Fields>;
  var_samp?: Maybe<Migrations_Var_Samp_Fields>;
  variance?: Maybe<Migrations_Variance_Fields>;
};

/** aggregate fields of "migrations" */
export type Migrations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Migrations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Migrations_Avg_Fields = {
  __typename?: 'migrations_avg_fields';
  id?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "migrations". All fields are combined with a logical 'AND'. */
export type Migrations_Bool_Exp = {
  _and?: InputMaybe<Array<Migrations_Bool_Exp>>;
  _not?: InputMaybe<Migrations_Bool_Exp>;
  _or?: InputMaybe<Array<Migrations_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "migrations" */
export enum Migrations_Constraint {
  /** unique or primary key constraint */
  Pk_8c82d7f526340ab734260ea46be = 'PK_8c82d7f526340ab734260ea46be',
}

/** input type for incrementing numeric columns in table "migrations" */
export type Migrations_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  timestamp?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "migrations" */
export type Migrations_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Migrations_Max_Fields = {
  __typename?: 'migrations_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Migrations_Min_Fields = {
  __typename?: 'migrations_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "migrations" */
export type Migrations_Mutation_Response = {
  __typename?: 'migrations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Migrations>;
};

/** on_conflict condition type for table "migrations" */
export type Migrations_On_Conflict = {
  constraint: Migrations_Constraint;
  update_columns?: Array<Migrations_Update_Column>;
  where?: InputMaybe<Migrations_Bool_Exp>;
};

/** Ordering options when selecting data from "migrations". */
export type Migrations_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** primary key columns input for table: migrations */
export type Migrations_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "migrations" */
export enum Migrations_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Timestamp = 'timestamp',
}

/** input type for updating data in table "migrations" */
export type Migrations_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Migrations_Stddev_Fields = {
  __typename?: 'migrations_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Migrations_Stddev_Pop_Fields = {
  __typename?: 'migrations_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Migrations_Stddev_Samp_Fields = {
  __typename?: 'migrations_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Migrations_Sum_Fields = {
  __typename?: 'migrations_sum_fields';
  id?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['bigint']>;
};

/** update columns of table "migrations" */
export enum Migrations_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Timestamp = 'timestamp',
}

/** aggregate var_pop on columns */
export type Migrations_Var_Pop_Fields = {
  __typename?: 'migrations_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Migrations_Var_Samp_Fields = {
  __typename?: 'migrations_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Migrations_Variance_Fields = {
  __typename?: 'migrations_variance_fields';
  id?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "aggregation_data" */
  delete_aggregation_data?: Maybe<Aggregation_Data_Mutation_Response>;
  /** delete single row from the table: "aggregation_data" */
  delete_aggregation_data_by_pk?: Maybe<Aggregation_Data>;
  /** delete data from the table: "alternate_servers" */
  delete_alternate_servers?: Maybe<Alternate_Servers_Mutation_Response>;
  /** delete single row from the table: "alternate_servers" */
  delete_alternate_servers_by_pk?: Maybe<Alternate_Servers>;
  /** delete data from the table: "command" */
  delete_command?: Maybe<Command_Mutation_Response>;
  /** delete data from the table: "command_backup" */
  delete_command_backup?: Maybe<Command_Backup_Mutation_Response>;
  /** delete data from the table: "command_backup2" */
  delete_command_backup2?: Maybe<Command_Backup2_Mutation_Response>;
  /** delete single row from the table: "command" */
  delete_command_by_pk?: Maybe<Command>;
  /** delete data from the table: "config_reply" */
  delete_config_reply?: Maybe<Config_Reply_Mutation_Response>;
  /** delete data from the table: "config_reply_boost_timer" */
  delete_config_reply_boost_timer?: Maybe<Config_Reply_Boost_Timer_Mutation_Response>;
  /** delete single row from the table: "config_reply_boost_timer" */
  delete_config_reply_boost_timer_by_pk?: Maybe<Config_Reply_Boost_Timer>;
  /** delete single row from the table: "config_reply" */
  delete_config_reply_by_pk?: Maybe<Config_Reply>;
  /** delete data from the table: "eddi" */
  delete_eddi?: Maybe<Eddi_Mutation_Response>;
  /** delete single row from the table: "eddi" */
  delete_eddi_by_pk?: Maybe<Eddi>;
  /** delete data from the table: "eddi_config_reply_data" */
  delete_eddi_config_reply_data?: Maybe<Eddi_Config_Reply_Data_Mutation_Response>;
  /** delete single row from the table: "eddi_config_reply_data" */
  delete_eddi_config_reply_data_by_pk?: Maybe<Eddi_Config_Reply_Data>;
  /** delete data from the table: "eddi_minute" */
  delete_eddi_minute?: Maybe<Eddi_Minute_Mutation_Response>;
  /** delete single row from the table: "eddi_minute" */
  delete_eddi_minute_by_pk?: Maybe<Eddi_Minute>;
  /** delete data from the table: "event" */
  delete_event?: Maybe<Event_Mutation_Response>;
  /** delete single row from the table: "event" */
  delete_event_by_pk?: Maybe<Event>;
  /** delete data from the table: "foal_session" */
  delete_foal_session?: Maybe<Foal_Session_Mutation_Response>;
  /** delete single row from the table: "foal_session" */
  delete_foal_session_by_pk?: Maybe<Foal_Session>;
  /** delete data from the table: "harvi" */
  delete_harvi?: Maybe<Harvi_Mutation_Response>;
  /** delete single row from the table: "harvi" */
  delete_harvi_by_pk?: Maybe<Harvi>;
  /** delete data from the table: "hub" */
  delete_hub?: Maybe<Hub_Mutation_Response>;
  /** delete single row from the table: "hub" */
  delete_hub_by_pk?: Maybe<Hub>;
  /** delete data from the table: "migrations" */
  delete_migrations?: Maybe<Migrations_Mutation_Response>;
  /** delete single row from the table: "migrations" */
  delete_migrations_by_pk?: Maybe<Migrations>;
  /** delete data from the table: "server" */
  delete_server?: Maybe<Server_Mutation_Response>;
  /** delete single row from the table: "server" */
  delete_server_by_pk?: Maybe<Server>;
  /** delete data from the table: "update_box" */
  delete_update_box?: Maybe<Update_Box_Mutation_Response>;
  /** delete single row from the table: "update_box" */
  delete_update_box_by_pk?: Maybe<Update_Box>;
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
  /** delete data from the table: "zappi1_config_reply_data" */
  delete_zappi1_config_reply_data?: Maybe<Zappi1_Config_Reply_Data_Mutation_Response>;
  /** delete single row from the table: "zappi1_config_reply_data" */
  delete_zappi1_config_reply_data_by_pk?: Maybe<Zappi1_Config_Reply_Data>;
  /** delete data from the table: "zappi2_config_reply_data" */
  delete_zappi2_config_reply_data?: Maybe<Zappi2_Config_Reply_Data_Mutation_Response>;
  /** delete single row from the table: "zappi2_config_reply_data" */
  delete_zappi2_config_reply_data_by_pk?: Maybe<Zappi2_Config_Reply_Data>;
  /** delete single row from the table: "zappi" */
  delete_zappi_by_pk?: Maybe<Zappi>;
  /** delete data from the table: "zappi_minute" */
  delete_zappi_minute?: Maybe<Zappi_Minute_Mutation_Response>;
  /** delete single row from the table: "zappi_minute" */
  delete_zappi_minute_by_pk?: Maybe<Zappi_Minute>;
  /** insert data into the table: "aggregation_data" */
  insert_aggregation_data?: Maybe<Aggregation_Data_Mutation_Response>;
  /** insert a single row into the table: "aggregation_data" */
  insert_aggregation_data_one?: Maybe<Aggregation_Data>;
  /** insert data into the table: "alternate_servers" */
  insert_alternate_servers?: Maybe<Alternate_Servers_Mutation_Response>;
  /** insert a single row into the table: "alternate_servers" */
  insert_alternate_servers_one?: Maybe<Alternate_Servers>;
  /** insert data into the table: "command" */
  insert_command?: Maybe<Command_Mutation_Response>;
  /** insert data into the table: "command_backup" */
  insert_command_backup?: Maybe<Command_Backup_Mutation_Response>;
  /** insert data into the table: "command_backup2" */
  insert_command_backup2?: Maybe<Command_Backup2_Mutation_Response>;
  /** insert a single row into the table: "command_backup2" */
  insert_command_backup2_one?: Maybe<Command_Backup2>;
  /** insert a single row into the table: "command_backup" */
  insert_command_backup_one?: Maybe<Command_Backup>;
  /** insert a single row into the table: "command" */
  insert_command_one?: Maybe<Command>;
  /** insert data into the table: "config_reply" */
  insert_config_reply?: Maybe<Config_Reply_Mutation_Response>;
  /** insert data into the table: "config_reply_boost_timer" */
  insert_config_reply_boost_timer?: Maybe<Config_Reply_Boost_Timer_Mutation_Response>;
  /** insert a single row into the table: "config_reply_boost_timer" */
  insert_config_reply_boost_timer_one?: Maybe<Config_Reply_Boost_Timer>;
  /** insert a single row into the table: "config_reply" */
  insert_config_reply_one?: Maybe<Config_Reply>;
  /** insert data into the table: "eddi" */
  insert_eddi?: Maybe<Eddi_Mutation_Response>;
  /** insert data into the table: "eddi_config_reply_data" */
  insert_eddi_config_reply_data?: Maybe<Eddi_Config_Reply_Data_Mutation_Response>;
  /** insert a single row into the table: "eddi_config_reply_data" */
  insert_eddi_config_reply_data_one?: Maybe<Eddi_Config_Reply_Data>;
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
  /** insert data into the table: "foal_session" */
  insert_foal_session?: Maybe<Foal_Session_Mutation_Response>;
  /** insert a single row into the table: "foal_session" */
  insert_foal_session_one?: Maybe<Foal_Session>;
  /** insert data into the table: "harvi" */
  insert_harvi?: Maybe<Harvi_Mutation_Response>;
  /** insert a single row into the table: "harvi" */
  insert_harvi_one?: Maybe<Harvi>;
  /** insert data into the table: "hub" */
  insert_hub?: Maybe<Hub_Mutation_Response>;
  /** insert a single row into the table: "hub" */
  insert_hub_one?: Maybe<Hub>;
  /** insert data into the table: "migrations" */
  insert_migrations?: Maybe<Migrations_Mutation_Response>;
  /** insert a single row into the table: "migrations" */
  insert_migrations_one?: Maybe<Migrations>;
  /** insert data into the table: "server" */
  insert_server?: Maybe<Server_Mutation_Response>;
  /** insert a single row into the table: "server" */
  insert_server_one?: Maybe<Server>;
  /** insert data into the table: "update_box" */
  insert_update_box?: Maybe<Update_Box_Mutation_Response>;
  /** insert a single row into the table: "update_box" */
  insert_update_box_one?: Maybe<Update_Box>;
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
  /** insert data into the table: "zappi1_config_reply_data" */
  insert_zappi1_config_reply_data?: Maybe<Zappi1_Config_Reply_Data_Mutation_Response>;
  /** insert a single row into the table: "zappi1_config_reply_data" */
  insert_zappi1_config_reply_data_one?: Maybe<Zappi1_Config_Reply_Data>;
  /** insert data into the table: "zappi2_config_reply_data" */
  insert_zappi2_config_reply_data?: Maybe<Zappi2_Config_Reply_Data_Mutation_Response>;
  /** insert a single row into the table: "zappi2_config_reply_data" */
  insert_zappi2_config_reply_data_one?: Maybe<Zappi2_Config_Reply_Data>;
  /** insert data into the table: "zappi_minute" */
  insert_zappi_minute?: Maybe<Zappi_Minute_Mutation_Response>;
  /** insert a single row into the table: "zappi_minute" */
  insert_zappi_minute_one?: Maybe<Zappi_Minute>;
  /** insert a single row into the table: "zappi" */
  insert_zappi_one?: Maybe<Zappi>;
  /** update data of the table: "aggregation_data" */
  update_aggregation_data?: Maybe<Aggregation_Data_Mutation_Response>;
  /** update single row of the table: "aggregation_data" */
  update_aggregation_data_by_pk?: Maybe<Aggregation_Data>;
  /** update data of the table: "alternate_servers" */
  update_alternate_servers?: Maybe<Alternate_Servers_Mutation_Response>;
  /** update single row of the table: "alternate_servers" */
  update_alternate_servers_by_pk?: Maybe<Alternate_Servers>;
  /** update data of the table: "command" */
  update_command?: Maybe<Command_Mutation_Response>;
  /** update data of the table: "command_backup" */
  update_command_backup?: Maybe<Command_Backup_Mutation_Response>;
  /** update data of the table: "command_backup2" */
  update_command_backup2?: Maybe<Command_Backup2_Mutation_Response>;
  /** update single row of the table: "command" */
  update_command_by_pk?: Maybe<Command>;
  /** update data of the table: "config_reply" */
  update_config_reply?: Maybe<Config_Reply_Mutation_Response>;
  /** update data of the table: "config_reply_boost_timer" */
  update_config_reply_boost_timer?: Maybe<Config_Reply_Boost_Timer_Mutation_Response>;
  /** update single row of the table: "config_reply_boost_timer" */
  update_config_reply_boost_timer_by_pk?: Maybe<Config_Reply_Boost_Timer>;
  /** update single row of the table: "config_reply" */
  update_config_reply_by_pk?: Maybe<Config_Reply>;
  /** update data of the table: "eddi" */
  update_eddi?: Maybe<Eddi_Mutation_Response>;
  /** update single row of the table: "eddi" */
  update_eddi_by_pk?: Maybe<Eddi>;
  /** update data of the table: "eddi_config_reply_data" */
  update_eddi_config_reply_data?: Maybe<Eddi_Config_Reply_Data_Mutation_Response>;
  /** update single row of the table: "eddi_config_reply_data" */
  update_eddi_config_reply_data_by_pk?: Maybe<Eddi_Config_Reply_Data>;
  /** update data of the table: "eddi_minute" */
  update_eddi_minute?: Maybe<Eddi_Minute_Mutation_Response>;
  /** update single row of the table: "eddi_minute" */
  update_eddi_minute_by_pk?: Maybe<Eddi_Minute>;
  /** update data of the table: "event" */
  update_event?: Maybe<Event_Mutation_Response>;
  /** update single row of the table: "event" */
  update_event_by_pk?: Maybe<Event>;
  /** update data of the table: "foal_session" */
  update_foal_session?: Maybe<Foal_Session_Mutation_Response>;
  /** update single row of the table: "foal_session" */
  update_foal_session_by_pk?: Maybe<Foal_Session>;
  /** update data of the table: "harvi" */
  update_harvi?: Maybe<Harvi_Mutation_Response>;
  /** update single row of the table: "harvi" */
  update_harvi_by_pk?: Maybe<Harvi>;
  /** update data of the table: "hub" */
  update_hub?: Maybe<Hub_Mutation_Response>;
  /** update single row of the table: "hub" */
  update_hub_by_pk?: Maybe<Hub>;
  /** update data of the table: "migrations" */
  update_migrations?: Maybe<Migrations_Mutation_Response>;
  /** update single row of the table: "migrations" */
  update_migrations_by_pk?: Maybe<Migrations>;
  /** update data of the table: "server" */
  update_server?: Maybe<Server_Mutation_Response>;
  /** update single row of the table: "server" */
  update_server_by_pk?: Maybe<Server>;
  /** update data of the table: "update_box" */
  update_update_box?: Maybe<Update_Box_Mutation_Response>;
  /** update single row of the table: "update_box" */
  update_update_box_by_pk?: Maybe<Update_Box>;
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
  /** update data of the table: "zappi1_config_reply_data" */
  update_zappi1_config_reply_data?: Maybe<Zappi1_Config_Reply_Data_Mutation_Response>;
  /** update single row of the table: "zappi1_config_reply_data" */
  update_zappi1_config_reply_data_by_pk?: Maybe<Zappi1_Config_Reply_Data>;
  /** update data of the table: "zappi2_config_reply_data" */
  update_zappi2_config_reply_data?: Maybe<Zappi2_Config_Reply_Data_Mutation_Response>;
  /** update single row of the table: "zappi2_config_reply_data" */
  update_zappi2_config_reply_data_by_pk?: Maybe<Zappi2_Config_Reply_Data>;
  /** update single row of the table: "zappi" */
  update_zappi_by_pk?: Maybe<Zappi>;
  /** update data of the table: "zappi_minute" */
  update_zappi_minute?: Maybe<Zappi_Minute_Mutation_Response>;
  /** update single row of the table: "zappi_minute" */
  update_zappi_minute_by_pk?: Maybe<Zappi_Minute>;
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
export type Mutation_RootDelete_Alternate_ServersArgs = {
  where: Alternate_Servers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Alternate_Servers_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_CommandArgs = {
  where: Command_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Command_BackupArgs = {
  where: Command_Backup_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Command_Backup2Args = {
  where: Command_Backup2_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Command_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Config_ReplyArgs = {
  where: Config_Reply_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Config_Reply_Boost_TimerArgs = {
  where: Config_Reply_Boost_Timer_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Config_Reply_Boost_Timer_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Config_Reply_By_PkArgs = {
  id: Scalars['Int'];
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
export type Mutation_RootDelete_Eddi_Config_Reply_DataArgs = {
  where: Eddi_Config_Reply_Data_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Eddi_Config_Reply_Data_By_PkArgs = {
  id: Scalars['Int'];
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
export type Mutation_RootDelete_Foal_SessionArgs = {
  where: Foal_Session_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Foal_Session_By_PkArgs = {
  session_id: Scalars['String'];
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
export type Mutation_RootDelete_MigrationsArgs = {
  where: Migrations_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Migrations_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_ServerArgs = {
  where: Server_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Server_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Update_BoxArgs = {
  where: Update_Box_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Update_Box_By_PkArgs = {
  id: Scalars['uuid'];
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
export type Mutation_RootDelete_Zappi1_Config_Reply_DataArgs = {
  where: Zappi1_Config_Reply_Data_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Zappi1_Config_Reply_Data_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Zappi2_Config_Reply_DataArgs = {
  where: Zappi2_Config_Reply_Data_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Zappi2_Config_Reply_Data_By_PkArgs = {
  id: Scalars['Int'];
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
export type Mutation_RootInsert_Alternate_ServersArgs = {
  objects: Array<Alternate_Servers_Insert_Input>;
  on_conflict?: InputMaybe<Alternate_Servers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Alternate_Servers_OneArgs = {
  object: Alternate_Servers_Insert_Input;
  on_conflict?: InputMaybe<Alternate_Servers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_CommandArgs = {
  objects: Array<Command_Insert_Input>;
  on_conflict?: InputMaybe<Command_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Command_BackupArgs = {
  objects: Array<Command_Backup_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_Command_Backup2Args = {
  objects: Array<Command_Backup2_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_Command_Backup2_OneArgs = {
  object: Command_Backup2_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_Command_Backup_OneArgs = {
  object: Command_Backup_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_Command_OneArgs = {
  object: Command_Insert_Input;
  on_conflict?: InputMaybe<Command_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Config_ReplyArgs = {
  objects: Array<Config_Reply_Insert_Input>;
  on_conflict?: InputMaybe<Config_Reply_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Config_Reply_Boost_TimerArgs = {
  objects: Array<Config_Reply_Boost_Timer_Insert_Input>;
  on_conflict?: InputMaybe<Config_Reply_Boost_Timer_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Config_Reply_Boost_Timer_OneArgs = {
  object: Config_Reply_Boost_Timer_Insert_Input;
  on_conflict?: InputMaybe<Config_Reply_Boost_Timer_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Config_Reply_OneArgs = {
  object: Config_Reply_Insert_Input;
  on_conflict?: InputMaybe<Config_Reply_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_EddiArgs = {
  objects: Array<Eddi_Insert_Input>;
  on_conflict?: InputMaybe<Eddi_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Eddi_Config_Reply_DataArgs = {
  objects: Array<Eddi_Config_Reply_Data_Insert_Input>;
  on_conflict?: InputMaybe<Eddi_Config_Reply_Data_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Eddi_Config_Reply_Data_OneArgs = {
  object: Eddi_Config_Reply_Data_Insert_Input;
  on_conflict?: InputMaybe<Eddi_Config_Reply_Data_On_Conflict>;
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
export type Mutation_RootInsert_Foal_SessionArgs = {
  objects: Array<Foal_Session_Insert_Input>;
  on_conflict?: InputMaybe<Foal_Session_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Foal_Session_OneArgs = {
  object: Foal_Session_Insert_Input;
  on_conflict?: InputMaybe<Foal_Session_On_Conflict>;
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
export type Mutation_RootInsert_MigrationsArgs = {
  objects: Array<Migrations_Insert_Input>;
  on_conflict?: InputMaybe<Migrations_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Migrations_OneArgs = {
  object: Migrations_Insert_Input;
  on_conflict?: InputMaybe<Migrations_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ServerArgs = {
  objects: Array<Server_Insert_Input>;
  on_conflict?: InputMaybe<Server_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Server_OneArgs = {
  object: Server_Insert_Input;
  on_conflict?: InputMaybe<Server_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Update_BoxArgs = {
  objects: Array<Update_Box_Insert_Input>;
  on_conflict?: InputMaybe<Update_Box_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Update_Box_OneArgs = {
  object: Update_Box_Insert_Input;
  on_conflict?: InputMaybe<Update_Box_On_Conflict>;
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
export type Mutation_RootInsert_Zappi1_Config_Reply_DataArgs = {
  objects: Array<Zappi1_Config_Reply_Data_Insert_Input>;
  on_conflict?: InputMaybe<Zappi1_Config_Reply_Data_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Zappi1_Config_Reply_Data_OneArgs = {
  object: Zappi1_Config_Reply_Data_Insert_Input;
  on_conflict?: InputMaybe<Zappi1_Config_Reply_Data_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Zappi2_Config_Reply_DataArgs = {
  objects: Array<Zappi2_Config_Reply_Data_Insert_Input>;
  on_conflict?: InputMaybe<Zappi2_Config_Reply_Data_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Zappi2_Config_Reply_Data_OneArgs = {
  object: Zappi2_Config_Reply_Data_Insert_Input;
  on_conflict?: InputMaybe<Zappi2_Config_Reply_Data_On_Conflict>;
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
export type Mutation_RootUpdate_Alternate_ServersArgs = {
  _inc?: InputMaybe<Alternate_Servers_Inc_Input>;
  _set?: InputMaybe<Alternate_Servers_Set_Input>;
  where: Alternate_Servers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Alternate_Servers_By_PkArgs = {
  _inc?: InputMaybe<Alternate_Servers_Inc_Input>;
  _set?: InputMaybe<Alternate_Servers_Set_Input>;
  pk_columns: Alternate_Servers_Pk_Columns_Input;
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
export type Mutation_RootUpdate_Command_BackupArgs = {
  _append?: InputMaybe<Command_Backup_Append_Input>;
  _delete_at_path?: InputMaybe<Command_Backup_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Command_Backup_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Command_Backup_Delete_Key_Input>;
  _inc?: InputMaybe<Command_Backup_Inc_Input>;
  _prepend?: InputMaybe<Command_Backup_Prepend_Input>;
  _set?: InputMaybe<Command_Backup_Set_Input>;
  where: Command_Backup_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Command_Backup2Args = {
  _append?: InputMaybe<Command_Backup2_Append_Input>;
  _delete_at_path?: InputMaybe<Command_Backup2_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Command_Backup2_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Command_Backup2_Delete_Key_Input>;
  _inc?: InputMaybe<Command_Backup2_Inc_Input>;
  _prepend?: InputMaybe<Command_Backup2_Prepend_Input>;
  _set?: InputMaybe<Command_Backup2_Set_Input>;
  where: Command_Backup2_Bool_Exp;
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
export type Mutation_RootUpdate_Config_ReplyArgs = {
  _inc?: InputMaybe<Config_Reply_Inc_Input>;
  _set?: InputMaybe<Config_Reply_Set_Input>;
  where: Config_Reply_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Config_Reply_Boost_TimerArgs = {
  _inc?: InputMaybe<Config_Reply_Boost_Timer_Inc_Input>;
  _set?: InputMaybe<Config_Reply_Boost_Timer_Set_Input>;
  where: Config_Reply_Boost_Timer_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Config_Reply_Boost_Timer_By_PkArgs = {
  _inc?: InputMaybe<Config_Reply_Boost_Timer_Inc_Input>;
  _set?: InputMaybe<Config_Reply_Boost_Timer_Set_Input>;
  pk_columns: Config_Reply_Boost_Timer_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Config_Reply_By_PkArgs = {
  _inc?: InputMaybe<Config_Reply_Inc_Input>;
  _set?: InputMaybe<Config_Reply_Set_Input>;
  pk_columns: Config_Reply_Pk_Columns_Input;
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
export type Mutation_RootUpdate_Eddi_Config_Reply_DataArgs = {
  _inc?: InputMaybe<Eddi_Config_Reply_Data_Inc_Input>;
  _set?: InputMaybe<Eddi_Config_Reply_Data_Set_Input>;
  where: Eddi_Config_Reply_Data_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Eddi_Config_Reply_Data_By_PkArgs = {
  _inc?: InputMaybe<Eddi_Config_Reply_Data_Inc_Input>;
  _set?: InputMaybe<Eddi_Config_Reply_Data_Set_Input>;
  pk_columns: Eddi_Config_Reply_Data_Pk_Columns_Input;
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
export type Mutation_RootUpdate_Foal_SessionArgs = {
  _inc?: InputMaybe<Foal_Session_Inc_Input>;
  _set?: InputMaybe<Foal_Session_Set_Input>;
  where: Foal_Session_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Foal_Session_By_PkArgs = {
  _inc?: InputMaybe<Foal_Session_Inc_Input>;
  _set?: InputMaybe<Foal_Session_Set_Input>;
  pk_columns: Foal_Session_Pk_Columns_Input;
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
export type Mutation_RootUpdate_MigrationsArgs = {
  _inc?: InputMaybe<Migrations_Inc_Input>;
  _set?: InputMaybe<Migrations_Set_Input>;
  where: Migrations_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Migrations_By_PkArgs = {
  _inc?: InputMaybe<Migrations_Inc_Input>;
  _set?: InputMaybe<Migrations_Set_Input>;
  pk_columns: Migrations_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_ServerArgs = {
  _inc?: InputMaybe<Server_Inc_Input>;
  _set?: InputMaybe<Server_Set_Input>;
  where: Server_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Server_By_PkArgs = {
  _inc?: InputMaybe<Server_Inc_Input>;
  _set?: InputMaybe<Server_Set_Input>;
  pk_columns: Server_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Update_BoxArgs = {
  _set?: InputMaybe<Update_Box_Set_Input>;
  where: Update_Box_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Update_Box_By_PkArgs = {
  _set?: InputMaybe<Update_Box_Set_Input>;
  pk_columns: Update_Box_Pk_Columns_Input;
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
export type Mutation_RootUpdate_Zappi1_Config_Reply_DataArgs = {
  _inc?: InputMaybe<Zappi1_Config_Reply_Data_Inc_Input>;
  _set?: InputMaybe<Zappi1_Config_Reply_Data_Set_Input>;
  where: Zappi1_Config_Reply_Data_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Zappi1_Config_Reply_Data_By_PkArgs = {
  _inc?: InputMaybe<Zappi1_Config_Reply_Data_Inc_Input>;
  _set?: InputMaybe<Zappi1_Config_Reply_Data_Set_Input>;
  pk_columns: Zappi1_Config_Reply_Data_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Zappi2_Config_Reply_DataArgs = {
  _append?: InputMaybe<Zappi2_Config_Reply_Data_Append_Input>;
  _delete_at_path?: InputMaybe<Zappi2_Config_Reply_Data_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Zappi2_Config_Reply_Data_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Zappi2_Config_Reply_Data_Delete_Key_Input>;
  _inc?: InputMaybe<Zappi2_Config_Reply_Data_Inc_Input>;
  _prepend?: InputMaybe<Zappi2_Config_Reply_Data_Prepend_Input>;
  _set?: InputMaybe<Zappi2_Config_Reply_Data_Set_Input>;
  where: Zappi2_Config_Reply_Data_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Zappi2_Config_Reply_Data_By_PkArgs = {
  _append?: InputMaybe<Zappi2_Config_Reply_Data_Append_Input>;
  _delete_at_path?: InputMaybe<Zappi2_Config_Reply_Data_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Zappi2_Config_Reply_Data_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Zappi2_Config_Reply_Data_Delete_Key_Input>;
  _inc?: InputMaybe<Zappi2_Config_Reply_Data_Inc_Input>;
  _prepend?: InputMaybe<Zappi2_Config_Reply_Data_Prepend_Input>;
  _set?: InputMaybe<Zappi2_Config_Reply_Data_Set_Input>;
  pk_columns: Zappi2_Config_Reply_Data_Pk_Columns_Input;
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
  /** fetch data from the table: "aggregation_data" */
  aggregation_data: Array<Aggregation_Data>;
  /** fetch aggregated fields from the table: "aggregation_data" */
  aggregation_data_aggregate: Aggregation_Data_Aggregate;
  /** fetch data from the table: "aggregation_data" using primary key columns */
  aggregation_data_by_pk?: Maybe<Aggregation_Data>;
  /** fetch data from the table: "alternate_servers" */
  alternate_servers: Array<Alternate_Servers>;
  /** fetch aggregated fields from the table: "alternate_servers" */
  alternate_servers_aggregate: Alternate_Servers_Aggregate;
  /** fetch data from the table: "alternate_servers" using primary key columns */
  alternate_servers_by_pk?: Maybe<Alternate_Servers>;
  /** fetch data from the table: "command" */
  command: Array<Command>;
  /** fetch aggregated fields from the table: "command" */
  command_aggregate: Command_Aggregate;
  /** fetch data from the table: "command_backup" */
  command_backup: Array<Command_Backup>;
  /** fetch data from the table: "command_backup2" */
  command_backup2: Array<Command_Backup2>;
  /** fetch aggregated fields from the table: "command_backup2" */
  command_backup2_aggregate: Command_Backup2_Aggregate;
  /** fetch aggregated fields from the table: "command_backup" */
  command_backup_aggregate: Command_Backup_Aggregate;
  /** fetch data from the table: "command" using primary key columns */
  command_by_pk?: Maybe<Command>;
  /** fetch data from the table: "config_reply" */
  config_reply: Array<Config_Reply>;
  /** fetch aggregated fields from the table: "config_reply" */
  config_reply_aggregate: Config_Reply_Aggregate;
  /** fetch data from the table: "config_reply_boost_timer" */
  config_reply_boost_timer: Array<Config_Reply_Boost_Timer>;
  /** fetch aggregated fields from the table: "config_reply_boost_timer" */
  config_reply_boost_timer_aggregate: Config_Reply_Boost_Timer_Aggregate;
  /** fetch data from the table: "config_reply_boost_timer" using primary key columns */
  config_reply_boost_timer_by_pk?: Maybe<Config_Reply_Boost_Timer>;
  /** fetch data from the table: "config_reply" using primary key columns */
  config_reply_by_pk?: Maybe<Config_Reply>;
  /** fetch data from the table: "eddi" */
  eddi: Array<Eddi>;
  /** fetch aggregated fields from the table: "eddi" */
  eddi_aggregate: Eddi_Aggregate;
  /** fetch data from the table: "eddi" using primary key columns */
  eddi_by_pk?: Maybe<Eddi>;
  /** fetch data from the table: "eddi_config_reply_data" */
  eddi_config_reply_data: Array<Eddi_Config_Reply_Data>;
  /** fetch aggregated fields from the table: "eddi_config_reply_data" */
  eddi_config_reply_data_aggregate: Eddi_Config_Reply_Data_Aggregate;
  /** fetch data from the table: "eddi_config_reply_data" using primary key columns */
  eddi_config_reply_data_by_pk?: Maybe<Eddi_Config_Reply_Data>;
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
  /** fetch data from the table: "foal_session" */
  foal_session: Array<Foal_Session>;
  /** fetch aggregated fields from the table: "foal_session" */
  foal_session_aggregate: Foal_Session_Aggregate;
  /** fetch data from the table: "foal_session" using primary key columns */
  foal_session_by_pk?: Maybe<Foal_Session>;
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
  /** fetch data from the table: "migrations" */
  migrations: Array<Migrations>;
  /** fetch aggregated fields from the table: "migrations" */
  migrations_aggregate: Migrations_Aggregate;
  /** fetch data from the table: "migrations" using primary key columns */
  migrations_by_pk?: Maybe<Migrations>;
  /** fetch data from the table: "server" */
  server: Array<Server>;
  /** fetch aggregated fields from the table: "server" */
  server_aggregate: Server_Aggregate;
  /** fetch data from the table: "server" using primary key columns */
  server_by_pk?: Maybe<Server>;
  /** fetch data from the table: "update_box" */
  update_box: Array<Update_Box>;
  /** fetch aggregated fields from the table: "update_box" */
  update_box_aggregate: Update_Box_Aggregate;
  /** fetch data from the table: "update_box" using primary key columns */
  update_box_by_pk?: Maybe<Update_Box>;
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
  /** fetch data from the table: "zappi1_config_reply_data" */
  zappi1_config_reply_data: Array<Zappi1_Config_Reply_Data>;
  /** fetch aggregated fields from the table: "zappi1_config_reply_data" */
  zappi1_config_reply_data_aggregate: Zappi1_Config_Reply_Data_Aggregate;
  /** fetch data from the table: "zappi1_config_reply_data" using primary key columns */
  zappi1_config_reply_data_by_pk?: Maybe<Zappi1_Config_Reply_Data>;
  /** fetch data from the table: "zappi2_config_reply_data" */
  zappi2_config_reply_data: Array<Zappi2_Config_Reply_Data>;
  /** fetch aggregated fields from the table: "zappi2_config_reply_data" */
  zappi2_config_reply_data_aggregate: Zappi2_Config_Reply_Data_Aggregate;
  /** fetch data from the table: "zappi2_config_reply_data" using primary key columns */
  zappi2_config_reply_data_by_pk?: Maybe<Zappi2_Config_Reply_Data>;
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

export type Query_RootAlternate_ServersArgs = {
  distinct_on?: InputMaybe<Array<Alternate_Servers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Alternate_Servers_Order_By>>;
  where?: InputMaybe<Alternate_Servers_Bool_Exp>;
};

export type Query_RootAlternate_Servers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Alternate_Servers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Alternate_Servers_Order_By>>;
  where?: InputMaybe<Alternate_Servers_Bool_Exp>;
};

export type Query_RootAlternate_Servers_By_PkArgs = {
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

export type Query_RootCommand_BackupArgs = {
  distinct_on?: InputMaybe<Array<Command_Backup_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Command_Backup_Order_By>>;
  where?: InputMaybe<Command_Backup_Bool_Exp>;
};

export type Query_RootCommand_Backup2Args = {
  distinct_on?: InputMaybe<Array<Command_Backup2_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Command_Backup2_Order_By>>;
  where?: InputMaybe<Command_Backup2_Bool_Exp>;
};

export type Query_RootCommand_Backup2_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Command_Backup2_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Command_Backup2_Order_By>>;
  where?: InputMaybe<Command_Backup2_Bool_Exp>;
};

export type Query_RootCommand_Backup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Command_Backup_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Command_Backup_Order_By>>;
  where?: InputMaybe<Command_Backup_Bool_Exp>;
};

export type Query_RootCommand_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootConfig_ReplyArgs = {
  distinct_on?: InputMaybe<Array<Config_Reply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Config_Reply_Order_By>>;
  where?: InputMaybe<Config_Reply_Bool_Exp>;
};

export type Query_RootConfig_Reply_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Config_Reply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Config_Reply_Order_By>>;
  where?: InputMaybe<Config_Reply_Bool_Exp>;
};

export type Query_RootConfig_Reply_Boost_TimerArgs = {
  distinct_on?: InputMaybe<Array<Config_Reply_Boost_Timer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Config_Reply_Boost_Timer_Order_By>>;
  where?: InputMaybe<Config_Reply_Boost_Timer_Bool_Exp>;
};

export type Query_RootConfig_Reply_Boost_Timer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Config_Reply_Boost_Timer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Config_Reply_Boost_Timer_Order_By>>;
  where?: InputMaybe<Config_Reply_Boost_Timer_Bool_Exp>;
};

export type Query_RootConfig_Reply_Boost_Timer_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootConfig_Reply_By_PkArgs = {
  id: Scalars['Int'];
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

export type Query_RootEddi_Config_Reply_DataArgs = {
  distinct_on?: InputMaybe<Array<Eddi_Config_Reply_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Eddi_Config_Reply_Data_Order_By>>;
  where?: InputMaybe<Eddi_Config_Reply_Data_Bool_Exp>;
};

export type Query_RootEddi_Config_Reply_Data_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Eddi_Config_Reply_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Eddi_Config_Reply_Data_Order_By>>;
  where?: InputMaybe<Eddi_Config_Reply_Data_Bool_Exp>;
};

export type Query_RootEddi_Config_Reply_Data_By_PkArgs = {
  id: Scalars['Int'];
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

export type Query_RootFoal_SessionArgs = {
  distinct_on?: InputMaybe<Array<Foal_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Foal_Session_Order_By>>;
  where?: InputMaybe<Foal_Session_Bool_Exp>;
};

export type Query_RootFoal_Session_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Foal_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Foal_Session_Order_By>>;
  where?: InputMaybe<Foal_Session_Bool_Exp>;
};

export type Query_RootFoal_Session_By_PkArgs = {
  session_id: Scalars['String'];
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

export type Query_RootMigrationsArgs = {
  distinct_on?: InputMaybe<Array<Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Migrations_Order_By>>;
  where?: InputMaybe<Migrations_Bool_Exp>;
};

export type Query_RootMigrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Migrations_Order_By>>;
  where?: InputMaybe<Migrations_Bool_Exp>;
};

export type Query_RootMigrations_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootServerArgs = {
  distinct_on?: InputMaybe<Array<Server_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Server_Order_By>>;
  where?: InputMaybe<Server_Bool_Exp>;
};

export type Query_RootServer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Server_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Server_Order_By>>;
  where?: InputMaybe<Server_Bool_Exp>;
};

export type Query_RootServer_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootUpdate_BoxArgs = {
  distinct_on?: InputMaybe<Array<Update_Box_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Update_Box_Order_By>>;
  where?: InputMaybe<Update_Box_Bool_Exp>;
};

export type Query_RootUpdate_Box_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Update_Box_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Update_Box_Order_By>>;
  where?: InputMaybe<Update_Box_Bool_Exp>;
};

export type Query_RootUpdate_Box_By_PkArgs = {
  id: Scalars['uuid'];
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

export type Query_RootZappi1_Config_Reply_DataArgs = {
  distinct_on?: InputMaybe<Array<Zappi1_Config_Reply_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zappi1_Config_Reply_Data_Order_By>>;
  where?: InputMaybe<Zappi1_Config_Reply_Data_Bool_Exp>;
};

export type Query_RootZappi1_Config_Reply_Data_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Zappi1_Config_Reply_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zappi1_Config_Reply_Data_Order_By>>;
  where?: InputMaybe<Zappi1_Config_Reply_Data_Bool_Exp>;
};

export type Query_RootZappi1_Config_Reply_Data_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootZappi2_Config_Reply_DataArgs = {
  distinct_on?: InputMaybe<Array<Zappi2_Config_Reply_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zappi2_Config_Reply_Data_Order_By>>;
  where?: InputMaybe<Zappi2_Config_Reply_Data_Bool_Exp>;
};

export type Query_RootZappi2_Config_Reply_Data_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Zappi2_Config_Reply_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zappi2_Config_Reply_Data_Order_By>>;
  where?: InputMaybe<Zappi2_Config_Reply_Data_Bool_Exp>;
};

export type Query_RootZappi2_Config_Reply_Data_By_PkArgs = {
  id: Scalars['Int'];
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

/** columns and relationships of "server" */
export type Server = {
  __typename?: 'server';
  /** An object relationship */
  alternateServerById?: Maybe<Alternate_Servers>;
  /** An object relationship */
  alternate_server?: Maybe<Alternate_Servers>;
  /** An array relationship */
  hubs: Array<Hub>;
  /** An aggregate relationship */
  hubs_aggregate: Hub_Aggregate;
  id: Scalars['Int'];
  ip: Scalars['String'];
  isactive: Scalars['Boolean'];
  isdefault: Scalars['Boolean'];
  name: Scalars['String'];
  shard?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

/** columns and relationships of "server" */
export type ServerHubsArgs = {
  distinct_on?: InputMaybe<Array<Hub_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hub_Order_By>>;
  where?: InputMaybe<Hub_Bool_Exp>;
};

/** columns and relationships of "server" */
export type ServerHubs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hub_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hub_Order_By>>;
  where?: InputMaybe<Hub_Bool_Exp>;
};

/** aggregated selection of "server" */
export type Server_Aggregate = {
  __typename?: 'server_aggregate';
  aggregate?: Maybe<Server_Aggregate_Fields>;
  nodes: Array<Server>;
};

/** aggregate fields of "server" */
export type Server_Aggregate_Fields = {
  __typename?: 'server_aggregate_fields';
  avg?: Maybe<Server_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Server_Max_Fields>;
  min?: Maybe<Server_Min_Fields>;
  stddev?: Maybe<Server_Stddev_Fields>;
  stddev_pop?: Maybe<Server_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Server_Stddev_Samp_Fields>;
  sum?: Maybe<Server_Sum_Fields>;
  var_pop?: Maybe<Server_Var_Pop_Fields>;
  var_samp?: Maybe<Server_Var_Samp_Fields>;
  variance?: Maybe<Server_Variance_Fields>;
};

/** aggregate fields of "server" */
export type Server_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Server_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Server_Avg_Fields = {
  __typename?: 'server_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "server". All fields are combined with a logical 'AND'. */
export type Server_Bool_Exp = {
  _and?: InputMaybe<Array<Server_Bool_Exp>>;
  _not?: InputMaybe<Server_Bool_Exp>;
  _or?: InputMaybe<Array<Server_Bool_Exp>>;
  alternateServerById?: InputMaybe<Alternate_Servers_Bool_Exp>;
  alternate_server?: InputMaybe<Alternate_Servers_Bool_Exp>;
  hubs?: InputMaybe<Hub_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  ip?: InputMaybe<String_Comparison_Exp>;
  isactive?: InputMaybe<Boolean_Comparison_Exp>;
  isdefault?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  shard?: InputMaybe<String_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "server" */
export enum Server_Constraint {
  /** unique or primary key constraint */
  PkF8b8af38bdc23b447c0a57c7937 = 'PK_f8b8af38bdc23b447c0a57c7937',
  /** unique or primary key constraint */
  UqE16254733ff2264f94f856316ee = 'UQ_e16254733ff2264f94f856316ee',
}

/** input type for incrementing numeric columns in table "server" */
export type Server_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "server" */
export type Server_Insert_Input = {
  alternateServerById?: InputMaybe<Alternate_Servers_Obj_Rel_Insert_Input>;
  alternate_server?: InputMaybe<Alternate_Servers_Obj_Rel_Insert_Input>;
  hubs?: InputMaybe<Hub_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  ip?: InputMaybe<Scalars['String']>;
  isactive?: InputMaybe<Scalars['Boolean']>;
  isdefault?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  shard?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Server_Max_Fields = {
  __typename?: 'server_max_fields';
  id?: Maybe<Scalars['Int']>;
  ip?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  shard?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Server_Min_Fields = {
  __typename?: 'server_min_fields';
  id?: Maybe<Scalars['Int']>;
  ip?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  shard?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "server" */
export type Server_Mutation_Response = {
  __typename?: 'server_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Server>;
};

/** input type for inserting object relation for remote table "server" */
export type Server_Obj_Rel_Insert_Input = {
  data: Server_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Server_On_Conflict>;
};

/** on_conflict condition type for table "server" */
export type Server_On_Conflict = {
  constraint: Server_Constraint;
  update_columns?: Array<Server_Update_Column>;
  where?: InputMaybe<Server_Bool_Exp>;
};

/** Ordering options when selecting data from "server". */
export type Server_Order_By = {
  alternateServerById?: InputMaybe<Alternate_Servers_Order_By>;
  alternate_server?: InputMaybe<Alternate_Servers_Order_By>;
  hubs_aggregate?: InputMaybe<Hub_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  ip?: InputMaybe<Order_By>;
  isactive?: InputMaybe<Order_By>;
  isdefault?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  shard?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: server */
export type Server_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "server" */
export enum Server_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Ip = 'ip',
  /** column name */
  Isactive = 'isactive',
  /** column name */
  Isdefault = 'isdefault',
  /** column name */
  Name = 'name',
  /** column name */
  Shard = 'shard',
  /** column name */
  Url = 'url',
}

/** input type for updating data in table "server" */
export type Server_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  ip?: InputMaybe<Scalars['String']>;
  isactive?: InputMaybe<Scalars['Boolean']>;
  isdefault?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  shard?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Server_Stddev_Fields = {
  __typename?: 'server_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Server_Stddev_Pop_Fields = {
  __typename?: 'server_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Server_Stddev_Samp_Fields = {
  __typename?: 'server_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Server_Sum_Fields = {
  __typename?: 'server_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "server" */
export enum Server_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Ip = 'ip',
  /** column name */
  Isactive = 'isactive',
  /** column name */
  Isdefault = 'isdefault',
  /** column name */
  Name = 'name',
  /** column name */
  Shard = 'shard',
  /** column name */
  Url = 'url',
}

/** aggregate var_pop on columns */
export type Server_Var_Pop_Fields = {
  __typename?: 'server_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Server_Var_Samp_Fields = {
  __typename?: 'server_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Server_Variance_Fields = {
  __typename?: 'server_variance_fields';
  id?: Maybe<Scalars['Float']>;
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
  /** fetch data from the table: "aggregation_data" */
  aggregation_data: Array<Aggregation_Data>;
  /** fetch aggregated fields from the table: "aggregation_data" */
  aggregation_data_aggregate: Aggregation_Data_Aggregate;
  /** fetch data from the table: "aggregation_data" using primary key columns */
  aggregation_data_by_pk?: Maybe<Aggregation_Data>;
  /** fetch data from the table: "alternate_servers" */
  alternate_servers: Array<Alternate_Servers>;
  /** fetch aggregated fields from the table: "alternate_servers" */
  alternate_servers_aggregate: Alternate_Servers_Aggregate;
  /** fetch data from the table: "alternate_servers" using primary key columns */
  alternate_servers_by_pk?: Maybe<Alternate_Servers>;
  /** fetch data from the table: "command" */
  command: Array<Command>;
  /** fetch aggregated fields from the table: "command" */
  command_aggregate: Command_Aggregate;
  /** fetch data from the table: "command_backup" */
  command_backup: Array<Command_Backup>;
  /** fetch data from the table: "command_backup2" */
  command_backup2: Array<Command_Backup2>;
  /** fetch aggregated fields from the table: "command_backup2" */
  command_backup2_aggregate: Command_Backup2_Aggregate;
  /** fetch aggregated fields from the table: "command_backup" */
  command_backup_aggregate: Command_Backup_Aggregate;
  /** fetch data from the table: "command" using primary key columns */
  command_by_pk?: Maybe<Command>;
  /** fetch data from the table: "config_reply" */
  config_reply: Array<Config_Reply>;
  /** fetch aggregated fields from the table: "config_reply" */
  config_reply_aggregate: Config_Reply_Aggregate;
  /** fetch data from the table: "config_reply_boost_timer" */
  config_reply_boost_timer: Array<Config_Reply_Boost_Timer>;
  /** fetch aggregated fields from the table: "config_reply_boost_timer" */
  config_reply_boost_timer_aggregate: Config_Reply_Boost_Timer_Aggregate;
  /** fetch data from the table: "config_reply_boost_timer" using primary key columns */
  config_reply_boost_timer_by_pk?: Maybe<Config_Reply_Boost_Timer>;
  /** fetch data from the table: "config_reply" using primary key columns */
  config_reply_by_pk?: Maybe<Config_Reply>;
  /** fetch data from the table: "eddi" */
  eddi: Array<Eddi>;
  /** fetch aggregated fields from the table: "eddi" */
  eddi_aggregate: Eddi_Aggregate;
  /** fetch data from the table: "eddi" using primary key columns */
  eddi_by_pk?: Maybe<Eddi>;
  /** fetch data from the table: "eddi_config_reply_data" */
  eddi_config_reply_data: Array<Eddi_Config_Reply_Data>;
  /** fetch aggregated fields from the table: "eddi_config_reply_data" */
  eddi_config_reply_data_aggregate: Eddi_Config_Reply_Data_Aggregate;
  /** fetch data from the table: "eddi_config_reply_data" using primary key columns */
  eddi_config_reply_data_by_pk?: Maybe<Eddi_Config_Reply_Data>;
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
  /** fetch data from the table: "foal_session" */
  foal_session: Array<Foal_Session>;
  /** fetch aggregated fields from the table: "foal_session" */
  foal_session_aggregate: Foal_Session_Aggregate;
  /** fetch data from the table: "foal_session" using primary key columns */
  foal_session_by_pk?: Maybe<Foal_Session>;
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
  /** fetch data from the table: "migrations" */
  migrations: Array<Migrations>;
  /** fetch aggregated fields from the table: "migrations" */
  migrations_aggregate: Migrations_Aggregate;
  /** fetch data from the table: "migrations" using primary key columns */
  migrations_by_pk?: Maybe<Migrations>;
  /** fetch data from the table: "server" */
  server: Array<Server>;
  /** fetch aggregated fields from the table: "server" */
  server_aggregate: Server_Aggregate;
  /** fetch data from the table: "server" using primary key columns */
  server_by_pk?: Maybe<Server>;
  /** fetch data from the table: "update_box" */
  update_box: Array<Update_Box>;
  /** fetch aggregated fields from the table: "update_box" */
  update_box_aggregate: Update_Box_Aggregate;
  /** fetch data from the table: "update_box" using primary key columns */
  update_box_by_pk?: Maybe<Update_Box>;
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
  /** fetch data from the table: "zappi1_config_reply_data" */
  zappi1_config_reply_data: Array<Zappi1_Config_Reply_Data>;
  /** fetch aggregated fields from the table: "zappi1_config_reply_data" */
  zappi1_config_reply_data_aggregate: Zappi1_Config_Reply_Data_Aggregate;
  /** fetch data from the table: "zappi1_config_reply_data" using primary key columns */
  zappi1_config_reply_data_by_pk?: Maybe<Zappi1_Config_Reply_Data>;
  /** fetch data from the table: "zappi2_config_reply_data" */
  zappi2_config_reply_data: Array<Zappi2_Config_Reply_Data>;
  /** fetch aggregated fields from the table: "zappi2_config_reply_data" */
  zappi2_config_reply_data_aggregate: Zappi2_Config_Reply_Data_Aggregate;
  /** fetch data from the table: "zappi2_config_reply_data" using primary key columns */
  zappi2_config_reply_data_by_pk?: Maybe<Zappi2_Config_Reply_Data>;
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

export type Subscription_RootAlternate_ServersArgs = {
  distinct_on?: InputMaybe<Array<Alternate_Servers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Alternate_Servers_Order_By>>;
  where?: InputMaybe<Alternate_Servers_Bool_Exp>;
};

export type Subscription_RootAlternate_Servers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Alternate_Servers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Alternate_Servers_Order_By>>;
  where?: InputMaybe<Alternate_Servers_Bool_Exp>;
};

export type Subscription_RootAlternate_Servers_By_PkArgs = {
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

export type Subscription_RootCommand_BackupArgs = {
  distinct_on?: InputMaybe<Array<Command_Backup_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Command_Backup_Order_By>>;
  where?: InputMaybe<Command_Backup_Bool_Exp>;
};

export type Subscription_RootCommand_Backup2Args = {
  distinct_on?: InputMaybe<Array<Command_Backup2_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Command_Backup2_Order_By>>;
  where?: InputMaybe<Command_Backup2_Bool_Exp>;
};

export type Subscription_RootCommand_Backup2_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Command_Backup2_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Command_Backup2_Order_By>>;
  where?: InputMaybe<Command_Backup2_Bool_Exp>;
};

export type Subscription_RootCommand_Backup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Command_Backup_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Command_Backup_Order_By>>;
  where?: InputMaybe<Command_Backup_Bool_Exp>;
};

export type Subscription_RootCommand_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootConfig_ReplyArgs = {
  distinct_on?: InputMaybe<Array<Config_Reply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Config_Reply_Order_By>>;
  where?: InputMaybe<Config_Reply_Bool_Exp>;
};

export type Subscription_RootConfig_Reply_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Config_Reply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Config_Reply_Order_By>>;
  where?: InputMaybe<Config_Reply_Bool_Exp>;
};

export type Subscription_RootConfig_Reply_Boost_TimerArgs = {
  distinct_on?: InputMaybe<Array<Config_Reply_Boost_Timer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Config_Reply_Boost_Timer_Order_By>>;
  where?: InputMaybe<Config_Reply_Boost_Timer_Bool_Exp>;
};

export type Subscription_RootConfig_Reply_Boost_Timer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Config_Reply_Boost_Timer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Config_Reply_Boost_Timer_Order_By>>;
  where?: InputMaybe<Config_Reply_Boost_Timer_Bool_Exp>;
};

export type Subscription_RootConfig_Reply_Boost_Timer_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootConfig_Reply_By_PkArgs = {
  id: Scalars['Int'];
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

export type Subscription_RootEddi_Config_Reply_DataArgs = {
  distinct_on?: InputMaybe<Array<Eddi_Config_Reply_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Eddi_Config_Reply_Data_Order_By>>;
  where?: InputMaybe<Eddi_Config_Reply_Data_Bool_Exp>;
};

export type Subscription_RootEddi_Config_Reply_Data_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Eddi_Config_Reply_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Eddi_Config_Reply_Data_Order_By>>;
  where?: InputMaybe<Eddi_Config_Reply_Data_Bool_Exp>;
};

export type Subscription_RootEddi_Config_Reply_Data_By_PkArgs = {
  id: Scalars['Int'];
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

export type Subscription_RootFoal_SessionArgs = {
  distinct_on?: InputMaybe<Array<Foal_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Foal_Session_Order_By>>;
  where?: InputMaybe<Foal_Session_Bool_Exp>;
};

export type Subscription_RootFoal_Session_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Foal_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Foal_Session_Order_By>>;
  where?: InputMaybe<Foal_Session_Bool_Exp>;
};

export type Subscription_RootFoal_Session_By_PkArgs = {
  session_id: Scalars['String'];
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

export type Subscription_RootMigrationsArgs = {
  distinct_on?: InputMaybe<Array<Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Migrations_Order_By>>;
  where?: InputMaybe<Migrations_Bool_Exp>;
};

export type Subscription_RootMigrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Migrations_Order_By>>;
  where?: InputMaybe<Migrations_Bool_Exp>;
};

export type Subscription_RootMigrations_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootServerArgs = {
  distinct_on?: InputMaybe<Array<Server_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Server_Order_By>>;
  where?: InputMaybe<Server_Bool_Exp>;
};

export type Subscription_RootServer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Server_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Server_Order_By>>;
  where?: InputMaybe<Server_Bool_Exp>;
};

export type Subscription_RootServer_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootUpdate_BoxArgs = {
  distinct_on?: InputMaybe<Array<Update_Box_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Update_Box_Order_By>>;
  where?: InputMaybe<Update_Box_Bool_Exp>;
};

export type Subscription_RootUpdate_Box_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Update_Box_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Update_Box_Order_By>>;
  where?: InputMaybe<Update_Box_Bool_Exp>;
};

export type Subscription_RootUpdate_Box_By_PkArgs = {
  id: Scalars['uuid'];
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

export type Subscription_RootZappi1_Config_Reply_DataArgs = {
  distinct_on?: InputMaybe<Array<Zappi1_Config_Reply_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zappi1_Config_Reply_Data_Order_By>>;
  where?: InputMaybe<Zappi1_Config_Reply_Data_Bool_Exp>;
};

export type Subscription_RootZappi1_Config_Reply_Data_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Zappi1_Config_Reply_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zappi1_Config_Reply_Data_Order_By>>;
  where?: InputMaybe<Zappi1_Config_Reply_Data_Bool_Exp>;
};

export type Subscription_RootZappi1_Config_Reply_Data_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootZappi2_Config_Reply_DataArgs = {
  distinct_on?: InputMaybe<Array<Zappi2_Config_Reply_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zappi2_Config_Reply_Data_Order_By>>;
  where?: InputMaybe<Zappi2_Config_Reply_Data_Bool_Exp>;
};

export type Subscription_RootZappi2_Config_Reply_Data_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Zappi2_Config_Reply_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Zappi2_Config_Reply_Data_Order_By>>;
  where?: InputMaybe<Zappi2_Config_Reply_Data_Bool_Exp>;
};

export type Subscription_RootZappi2_Config_Reply_Data_By_PkArgs = {
  id: Scalars['Int'];
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

/** columns and relationships of "update_box" */
export type Update_Box = {
  __typename?: 'update_box';
  description?: Maybe<Scalars['String']>;
  displaydatetime: Scalars['timestamptz'];
  id: Scalars['uuid'];
  leftcolor: Scalars['String'];
  rightcolor: Scalars['String'];
  title: Scalars['String'];
  updateboxicontype?: Maybe<Scalars['update_box_updateboxicontype_enum']>;
};

/** aggregated selection of "update_box" */
export type Update_Box_Aggregate = {
  __typename?: 'update_box_aggregate';
  aggregate?: Maybe<Update_Box_Aggregate_Fields>;
  nodes: Array<Update_Box>;
};

/** aggregate fields of "update_box" */
export type Update_Box_Aggregate_Fields = {
  __typename?: 'update_box_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Update_Box_Max_Fields>;
  min?: Maybe<Update_Box_Min_Fields>;
};

/** aggregate fields of "update_box" */
export type Update_Box_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Update_Box_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "update_box". All fields are combined with a logical 'AND'. */
export type Update_Box_Bool_Exp = {
  _and?: InputMaybe<Array<Update_Box_Bool_Exp>>;
  _not?: InputMaybe<Update_Box_Bool_Exp>;
  _or?: InputMaybe<Array<Update_Box_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  displaydatetime?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  leftcolor?: InputMaybe<String_Comparison_Exp>;
  rightcolor?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updateboxicontype?: InputMaybe<Update_Box_Updateboxicontype_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "update_box" */
export enum Update_Box_Constraint {
  /** unique or primary key constraint */
  PkE310121e9dabb97a8dae3e9e285 = 'PK_e310121e9dabb97a8dae3e9e285',
}

/** input type for inserting data into table "update_box" */
export type Update_Box_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  displaydatetime?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  leftcolor?: InputMaybe<Scalars['String']>;
  rightcolor?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updateboxicontype?: InputMaybe<Scalars['update_box_updateboxicontype_enum']>;
};

/** aggregate max on columns */
export type Update_Box_Max_Fields = {
  __typename?: 'update_box_max_fields';
  description?: Maybe<Scalars['String']>;
  displaydatetime?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  leftcolor?: Maybe<Scalars['String']>;
  rightcolor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Update_Box_Min_Fields = {
  __typename?: 'update_box_min_fields';
  description?: Maybe<Scalars['String']>;
  displaydatetime?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  leftcolor?: Maybe<Scalars['String']>;
  rightcolor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "update_box" */
export type Update_Box_Mutation_Response = {
  __typename?: 'update_box_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Update_Box>;
};

/** on_conflict condition type for table "update_box" */
export type Update_Box_On_Conflict = {
  constraint: Update_Box_Constraint;
  update_columns?: Array<Update_Box_Update_Column>;
  where?: InputMaybe<Update_Box_Bool_Exp>;
};

/** Ordering options when selecting data from "update_box". */
export type Update_Box_Order_By = {
  description?: InputMaybe<Order_By>;
  displaydatetime?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  leftcolor?: InputMaybe<Order_By>;
  rightcolor?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updateboxicontype?: InputMaybe<Order_By>;
};

/** primary key columns input for table: update_box */
export type Update_Box_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "update_box" */
export enum Update_Box_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Displaydatetime = 'displaydatetime',
  /** column name */
  Id = 'id',
  /** column name */
  Leftcolor = 'leftcolor',
  /** column name */
  Rightcolor = 'rightcolor',
  /** column name */
  Title = 'title',
  /** column name */
  Updateboxicontype = 'updateboxicontype',
}

/** input type for updating data in table "update_box" */
export type Update_Box_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  displaydatetime?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  leftcolor?: InputMaybe<Scalars['String']>;
  rightcolor?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updateboxicontype?: InputMaybe<Scalars['update_box_updateboxicontype_enum']>;
};

/** update columns of table "update_box" */
export enum Update_Box_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Displaydatetime = 'displaydatetime',
  /** column name */
  Id = 'id',
  /** column name */
  Leftcolor = 'leftcolor',
  /** column name */
  Rightcolor = 'rightcolor',
  /** column name */
  Title = 'title',
  /** column name */
  Updateboxicontype = 'updateboxicontype',
}

/** Boolean expression to compare columns of type "update_box_updateboxicontype_enum". All fields are combined with logical 'AND'. */
export type Update_Box_Updateboxicontype_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['update_box_updateboxicontype_enum']>;
  _gt?: InputMaybe<Scalars['update_box_updateboxicontype_enum']>;
  _gte?: InputMaybe<Scalars['update_box_updateboxicontype_enum']>;
  _in?: InputMaybe<Array<Scalars['update_box_updateboxicontype_enum']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['update_box_updateboxicontype_enum']>;
  _lte?: InputMaybe<Scalars['update_box_updateboxicontype_enum']>;
  _neq?: InputMaybe<Scalars['update_box_updateboxicontype_enum']>;
  _nin?: InputMaybe<Array<Scalars['update_box_updateboxicontype_enum']>>;
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
  /** An object relationship */
  config_reply?: Maybe<Config_Reply>;
  configappdata?: Maybe<Scalars['bytea']>;
  configappdone: Scalars['Boolean'];
  configbootdata?: Maybe<Scalars['bytea']>;
  configbootdone: Scalars['Boolean'];
  configlength?: Maybe<Scalars['smallint']>;
  configoffset?: Maybe<Scalars['smallint']>;
  configstate?: Maybe<Scalars['smallint']>;
  configstructure?: Maybe<Scalars['smallint']>;
  configversion?: Maybe<Scalars['smallint']>;
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
  maxpower?: Maybe<Scalars['Int']>;
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
  voltage?: Maybe<Scalars['smallint']>;
  voltage2?: Maybe<Scalars['smallint']>;
  voltage3?: Maybe<Scalars['smallint']>;
  zappi2: Scalars['Boolean'];
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

/** columns and relationships of "zappi1_config_reply_data" */
export type Zappi1_Config_Reply_Data = {
  __typename?: 'zappi1_config_reply_data';
  autosettimefromclouddone: Scalars['Boolean'];
  backlightontime: Scalars['smallint'];
  batterymode?: Maybe<Scalars['String']>;
  boostingenergy: Scalars['smallint'];
  buzzeron: Scalars['Boolean'];
  chargecompletedelay: Scalars['Int'];
  compatibilitymodeactive: Scalars['Boolean'];
  compatibilitymodeinfinitepwm: Scalars['Boolean'];
  compatibilitymodeminpwm: Scalars['Float'];
  compatibilitymodepowerfactor: Scalars['Float'];
  /** An object relationship */
  config_reply?: Maybe<Config_Reply>;
  /** An array relationship */
  config_reply_boost_timers: Array<Config_Reply_Boost_Timer>;
  /** An aggregate relationship */
  config_reply_boost_timers_aggregate: Config_Reply_Boost_Timer_Aggregate;
  contrastlevel: Scalars['smallint'];
  ct1group: Scalars['smallint'];
  ct1grouplimit: Scalars['smallint'];
  ct1subtype?: Maybe<Scalars['String']>;
  ct1type?: Maybe<Scalars['String']>;
  ct2group: Scalars['smallint'];
  ct2grouplimit: Scalars['smallint'];
  ct2subtype?: Maybe<Scalars['String']>;
  ct2type?: Maybe<Scalars['String']>;
  ct3group: Scalars['smallint'];
  ct3grouplimit: Scalars['smallint'];
  dateformat?: Maybe<Scalars['String']>;
  defaultmode?: Maybe<Scalars['String']>;
  deviceconfigtime: Scalars['bigint'];
  devicelimit: Scalars['Float'];
  dston: Scalars['Boolean'];
  esenseinput?: Maybe<Scalars['String']>;
  exportmargin: Scalars['Int'];
  gentypeicon?: Maybe<Scalars['String']>;
  gridlimit: Scalars['Int'];
  id: Scalars['Int'];
  language?: Maybe<Scalars['String']>;
  lockcode: Scalars['Int'];
  lockevplugged: Scalars['Boolean'];
  lockevunplugged: Scalars['Boolean'];
  lockhidereadings: Scalars['Boolean'];
  locktimeout: Scalars['smallint'];
  maxgridlimit: Scalars['smallint'];
  mingreenlevel: Scalars['smallint'];
  monitoringstatus: Scalars['Boolean'];
  password: Scalars['Int'];
  phaseorphaserotation?: Maybe<Scalars['String']>;
  plugincharge: Scalars['smallint'];
  preconditioning?: Maybe<Scalars['String']>;
  signature: Scalars['bigint'];
  smartboostenergy: Scalars['smallint'];
  smartboosthour: Scalars['smallint'];
  smartboostminute: Scalars['smallint'];
  startstoptimer: Scalars['smallint'];
  timefromcloud: Scalars['Boolean'];
  timezone?: Maybe<Scalars['String']>;
  triphaseon: Scalars['Boolean'];
};

/** columns and relationships of "zappi1_config_reply_data" */
export type Zappi1_Config_Reply_DataConfig_Reply_Boost_TimersArgs = {
  distinct_on?: InputMaybe<Array<Config_Reply_Boost_Timer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Config_Reply_Boost_Timer_Order_By>>;
  where?: InputMaybe<Config_Reply_Boost_Timer_Bool_Exp>;
};

/** columns and relationships of "zappi1_config_reply_data" */
export type Zappi1_Config_Reply_DataConfig_Reply_Boost_Timers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Config_Reply_Boost_Timer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Config_Reply_Boost_Timer_Order_By>>;
  where?: InputMaybe<Config_Reply_Boost_Timer_Bool_Exp>;
};

/** aggregated selection of "zappi1_config_reply_data" */
export type Zappi1_Config_Reply_Data_Aggregate = {
  __typename?: 'zappi1_config_reply_data_aggregate';
  aggregate?: Maybe<Zappi1_Config_Reply_Data_Aggregate_Fields>;
  nodes: Array<Zappi1_Config_Reply_Data>;
};

/** aggregate fields of "zappi1_config_reply_data" */
export type Zappi1_Config_Reply_Data_Aggregate_Fields = {
  __typename?: 'zappi1_config_reply_data_aggregate_fields';
  avg?: Maybe<Zappi1_Config_Reply_Data_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Zappi1_Config_Reply_Data_Max_Fields>;
  min?: Maybe<Zappi1_Config_Reply_Data_Min_Fields>;
  stddev?: Maybe<Zappi1_Config_Reply_Data_Stddev_Fields>;
  stddev_pop?: Maybe<Zappi1_Config_Reply_Data_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Zappi1_Config_Reply_Data_Stddev_Samp_Fields>;
  sum?: Maybe<Zappi1_Config_Reply_Data_Sum_Fields>;
  var_pop?: Maybe<Zappi1_Config_Reply_Data_Var_Pop_Fields>;
  var_samp?: Maybe<Zappi1_Config_Reply_Data_Var_Samp_Fields>;
  variance?: Maybe<Zappi1_Config_Reply_Data_Variance_Fields>;
};

/** aggregate fields of "zappi1_config_reply_data" */
export type Zappi1_Config_Reply_Data_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Zappi1_Config_Reply_Data_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Zappi1_Config_Reply_Data_Avg_Fields = {
  __typename?: 'zappi1_config_reply_data_avg_fields';
  backlightontime?: Maybe<Scalars['Float']>;
  boostingenergy?: Maybe<Scalars['Float']>;
  chargecompletedelay?: Maybe<Scalars['Float']>;
  compatibilitymodeminpwm?: Maybe<Scalars['Float']>;
  compatibilitymodepowerfactor?: Maybe<Scalars['Float']>;
  contrastlevel?: Maybe<Scalars['Float']>;
  ct1group?: Maybe<Scalars['Float']>;
  ct1grouplimit?: Maybe<Scalars['Float']>;
  ct2group?: Maybe<Scalars['Float']>;
  ct2grouplimit?: Maybe<Scalars['Float']>;
  ct3group?: Maybe<Scalars['Float']>;
  ct3grouplimit?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  devicelimit?: Maybe<Scalars['Float']>;
  exportmargin?: Maybe<Scalars['Float']>;
  gridlimit?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lockcode?: Maybe<Scalars['Float']>;
  locktimeout?: Maybe<Scalars['Float']>;
  maxgridlimit?: Maybe<Scalars['Float']>;
  mingreenlevel?: Maybe<Scalars['Float']>;
  password?: Maybe<Scalars['Float']>;
  plugincharge?: Maybe<Scalars['Float']>;
  signature?: Maybe<Scalars['Float']>;
  smartboostenergy?: Maybe<Scalars['Float']>;
  smartboosthour?: Maybe<Scalars['Float']>;
  smartboostminute?: Maybe<Scalars['Float']>;
  startstoptimer?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "zappi1_config_reply_data". All fields are combined with a logical 'AND'. */
export type Zappi1_Config_Reply_Data_Bool_Exp = {
  _and?: InputMaybe<Array<Zappi1_Config_Reply_Data_Bool_Exp>>;
  _not?: InputMaybe<Zappi1_Config_Reply_Data_Bool_Exp>;
  _or?: InputMaybe<Array<Zappi1_Config_Reply_Data_Bool_Exp>>;
  autosettimefromclouddone?: InputMaybe<Boolean_Comparison_Exp>;
  backlightontime?: InputMaybe<Smallint_Comparison_Exp>;
  batterymode?: InputMaybe<String_Comparison_Exp>;
  boostingenergy?: InputMaybe<Smallint_Comparison_Exp>;
  buzzeron?: InputMaybe<Boolean_Comparison_Exp>;
  chargecompletedelay?: InputMaybe<Int_Comparison_Exp>;
  compatibilitymodeactive?: InputMaybe<Boolean_Comparison_Exp>;
  compatibilitymodeinfinitepwm?: InputMaybe<Boolean_Comparison_Exp>;
  compatibilitymodeminpwm?: InputMaybe<Float_Comparison_Exp>;
  compatibilitymodepowerfactor?: InputMaybe<Float_Comparison_Exp>;
  config_reply?: InputMaybe<Config_Reply_Bool_Exp>;
  config_reply_boost_timers?: InputMaybe<Config_Reply_Boost_Timer_Bool_Exp>;
  contrastlevel?: InputMaybe<Smallint_Comparison_Exp>;
  ct1group?: InputMaybe<Smallint_Comparison_Exp>;
  ct1grouplimit?: InputMaybe<Smallint_Comparison_Exp>;
  ct1subtype?: InputMaybe<String_Comparison_Exp>;
  ct1type?: InputMaybe<String_Comparison_Exp>;
  ct2group?: InputMaybe<Smallint_Comparison_Exp>;
  ct2grouplimit?: InputMaybe<Smallint_Comparison_Exp>;
  ct2subtype?: InputMaybe<String_Comparison_Exp>;
  ct2type?: InputMaybe<String_Comparison_Exp>;
  ct3group?: InputMaybe<Smallint_Comparison_Exp>;
  ct3grouplimit?: InputMaybe<Smallint_Comparison_Exp>;
  dateformat?: InputMaybe<String_Comparison_Exp>;
  defaultmode?: InputMaybe<String_Comparison_Exp>;
  deviceconfigtime?: InputMaybe<Bigint_Comparison_Exp>;
  devicelimit?: InputMaybe<Float_Comparison_Exp>;
  dston?: InputMaybe<Boolean_Comparison_Exp>;
  esenseinput?: InputMaybe<String_Comparison_Exp>;
  exportmargin?: InputMaybe<Int_Comparison_Exp>;
  gentypeicon?: InputMaybe<String_Comparison_Exp>;
  gridlimit?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  language?: InputMaybe<String_Comparison_Exp>;
  lockcode?: InputMaybe<Int_Comparison_Exp>;
  lockevplugged?: InputMaybe<Boolean_Comparison_Exp>;
  lockevunplugged?: InputMaybe<Boolean_Comparison_Exp>;
  lockhidereadings?: InputMaybe<Boolean_Comparison_Exp>;
  locktimeout?: InputMaybe<Smallint_Comparison_Exp>;
  maxgridlimit?: InputMaybe<Smallint_Comparison_Exp>;
  mingreenlevel?: InputMaybe<Smallint_Comparison_Exp>;
  monitoringstatus?: InputMaybe<Boolean_Comparison_Exp>;
  password?: InputMaybe<Int_Comparison_Exp>;
  phaseorphaserotation?: InputMaybe<String_Comparison_Exp>;
  plugincharge?: InputMaybe<Smallint_Comparison_Exp>;
  preconditioning?: InputMaybe<String_Comparison_Exp>;
  signature?: InputMaybe<Bigint_Comparison_Exp>;
  smartboostenergy?: InputMaybe<Smallint_Comparison_Exp>;
  smartboosthour?: InputMaybe<Smallint_Comparison_Exp>;
  smartboostminute?: InputMaybe<Smallint_Comparison_Exp>;
  startstoptimer?: InputMaybe<Smallint_Comparison_Exp>;
  timefromcloud?: InputMaybe<Boolean_Comparison_Exp>;
  timezone?: InputMaybe<String_Comparison_Exp>;
  triphaseon?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "zappi1_config_reply_data" */
export enum Zappi1_Config_Reply_Data_Constraint {
  /** unique or primary key constraint */
  Pk_085dc1f7ec451606b70e1765ff6 = 'PK_085dc1f7ec451606b70e1765ff6',
}

/** input type for incrementing numeric columns in table "zappi1_config_reply_data" */
export type Zappi1_Config_Reply_Data_Inc_Input = {
  backlightontime?: InputMaybe<Scalars['smallint']>;
  boostingenergy?: InputMaybe<Scalars['smallint']>;
  chargecompletedelay?: InputMaybe<Scalars['Int']>;
  compatibilitymodeminpwm?: InputMaybe<Scalars['Float']>;
  compatibilitymodepowerfactor?: InputMaybe<Scalars['Float']>;
  contrastlevel?: InputMaybe<Scalars['smallint']>;
  ct1group?: InputMaybe<Scalars['smallint']>;
  ct1grouplimit?: InputMaybe<Scalars['smallint']>;
  ct2group?: InputMaybe<Scalars['smallint']>;
  ct2grouplimit?: InputMaybe<Scalars['smallint']>;
  ct3group?: InputMaybe<Scalars['smallint']>;
  ct3grouplimit?: InputMaybe<Scalars['smallint']>;
  deviceconfigtime?: InputMaybe<Scalars['bigint']>;
  devicelimit?: InputMaybe<Scalars['Float']>;
  exportmargin?: InputMaybe<Scalars['Int']>;
  gridlimit?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  lockcode?: InputMaybe<Scalars['Int']>;
  locktimeout?: InputMaybe<Scalars['smallint']>;
  maxgridlimit?: InputMaybe<Scalars['smallint']>;
  mingreenlevel?: InputMaybe<Scalars['smallint']>;
  password?: InputMaybe<Scalars['Int']>;
  plugincharge?: InputMaybe<Scalars['smallint']>;
  signature?: InputMaybe<Scalars['bigint']>;
  smartboostenergy?: InputMaybe<Scalars['smallint']>;
  smartboosthour?: InputMaybe<Scalars['smallint']>;
  smartboostminute?: InputMaybe<Scalars['smallint']>;
  startstoptimer?: InputMaybe<Scalars['smallint']>;
};

/** input type for inserting data into table "zappi1_config_reply_data" */
export type Zappi1_Config_Reply_Data_Insert_Input = {
  autosettimefromclouddone?: InputMaybe<Scalars['Boolean']>;
  backlightontime?: InputMaybe<Scalars['smallint']>;
  batterymode?: InputMaybe<Scalars['String']>;
  boostingenergy?: InputMaybe<Scalars['smallint']>;
  buzzeron?: InputMaybe<Scalars['Boolean']>;
  chargecompletedelay?: InputMaybe<Scalars['Int']>;
  compatibilitymodeactive?: InputMaybe<Scalars['Boolean']>;
  compatibilitymodeinfinitepwm?: InputMaybe<Scalars['Boolean']>;
  compatibilitymodeminpwm?: InputMaybe<Scalars['Float']>;
  compatibilitymodepowerfactor?: InputMaybe<Scalars['Float']>;
  config_reply?: InputMaybe<Config_Reply_Obj_Rel_Insert_Input>;
  config_reply_boost_timers?: InputMaybe<Config_Reply_Boost_Timer_Arr_Rel_Insert_Input>;
  contrastlevel?: InputMaybe<Scalars['smallint']>;
  ct1group?: InputMaybe<Scalars['smallint']>;
  ct1grouplimit?: InputMaybe<Scalars['smallint']>;
  ct1subtype?: InputMaybe<Scalars['String']>;
  ct1type?: InputMaybe<Scalars['String']>;
  ct2group?: InputMaybe<Scalars['smallint']>;
  ct2grouplimit?: InputMaybe<Scalars['smallint']>;
  ct2subtype?: InputMaybe<Scalars['String']>;
  ct2type?: InputMaybe<Scalars['String']>;
  ct3group?: InputMaybe<Scalars['smallint']>;
  ct3grouplimit?: InputMaybe<Scalars['smallint']>;
  dateformat?: InputMaybe<Scalars['String']>;
  defaultmode?: InputMaybe<Scalars['String']>;
  deviceconfigtime?: InputMaybe<Scalars['bigint']>;
  devicelimit?: InputMaybe<Scalars['Float']>;
  dston?: InputMaybe<Scalars['Boolean']>;
  esenseinput?: InputMaybe<Scalars['String']>;
  exportmargin?: InputMaybe<Scalars['Int']>;
  gentypeicon?: InputMaybe<Scalars['String']>;
  gridlimit?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lockcode?: InputMaybe<Scalars['Int']>;
  lockevplugged?: InputMaybe<Scalars['Boolean']>;
  lockevunplugged?: InputMaybe<Scalars['Boolean']>;
  lockhidereadings?: InputMaybe<Scalars['Boolean']>;
  locktimeout?: InputMaybe<Scalars['smallint']>;
  maxgridlimit?: InputMaybe<Scalars['smallint']>;
  mingreenlevel?: InputMaybe<Scalars['smallint']>;
  monitoringstatus?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['Int']>;
  phaseorphaserotation?: InputMaybe<Scalars['String']>;
  plugincharge?: InputMaybe<Scalars['smallint']>;
  preconditioning?: InputMaybe<Scalars['String']>;
  signature?: InputMaybe<Scalars['bigint']>;
  smartboostenergy?: InputMaybe<Scalars['smallint']>;
  smartboosthour?: InputMaybe<Scalars['smallint']>;
  smartboostminute?: InputMaybe<Scalars['smallint']>;
  startstoptimer?: InputMaybe<Scalars['smallint']>;
  timefromcloud?: InputMaybe<Scalars['Boolean']>;
  timezone?: InputMaybe<Scalars['String']>;
  triphaseon?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Zappi1_Config_Reply_Data_Max_Fields = {
  __typename?: 'zappi1_config_reply_data_max_fields';
  backlightontime?: Maybe<Scalars['smallint']>;
  batterymode?: Maybe<Scalars['String']>;
  boostingenergy?: Maybe<Scalars['smallint']>;
  chargecompletedelay?: Maybe<Scalars['Int']>;
  compatibilitymodeminpwm?: Maybe<Scalars['Float']>;
  compatibilitymodepowerfactor?: Maybe<Scalars['Float']>;
  contrastlevel?: Maybe<Scalars['smallint']>;
  ct1group?: Maybe<Scalars['smallint']>;
  ct1grouplimit?: Maybe<Scalars['smallint']>;
  ct1subtype?: Maybe<Scalars['String']>;
  ct1type?: Maybe<Scalars['String']>;
  ct2group?: Maybe<Scalars['smallint']>;
  ct2grouplimit?: Maybe<Scalars['smallint']>;
  ct2subtype?: Maybe<Scalars['String']>;
  ct2type?: Maybe<Scalars['String']>;
  ct3group?: Maybe<Scalars['smallint']>;
  ct3grouplimit?: Maybe<Scalars['smallint']>;
  dateformat?: Maybe<Scalars['String']>;
  defaultmode?: Maybe<Scalars['String']>;
  deviceconfigtime?: Maybe<Scalars['bigint']>;
  devicelimit?: Maybe<Scalars['Float']>;
  esenseinput?: Maybe<Scalars['String']>;
  exportmargin?: Maybe<Scalars['Int']>;
  gentypeicon?: Maybe<Scalars['String']>;
  gridlimit?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  lockcode?: Maybe<Scalars['Int']>;
  locktimeout?: Maybe<Scalars['smallint']>;
  maxgridlimit?: Maybe<Scalars['smallint']>;
  mingreenlevel?: Maybe<Scalars['smallint']>;
  password?: Maybe<Scalars['Int']>;
  phaseorphaserotation?: Maybe<Scalars['String']>;
  plugincharge?: Maybe<Scalars['smallint']>;
  preconditioning?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['bigint']>;
  smartboostenergy?: Maybe<Scalars['smallint']>;
  smartboosthour?: Maybe<Scalars['smallint']>;
  smartboostminute?: Maybe<Scalars['smallint']>;
  startstoptimer?: Maybe<Scalars['smallint']>;
  timezone?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Zappi1_Config_Reply_Data_Min_Fields = {
  __typename?: 'zappi1_config_reply_data_min_fields';
  backlightontime?: Maybe<Scalars['smallint']>;
  batterymode?: Maybe<Scalars['String']>;
  boostingenergy?: Maybe<Scalars['smallint']>;
  chargecompletedelay?: Maybe<Scalars['Int']>;
  compatibilitymodeminpwm?: Maybe<Scalars['Float']>;
  compatibilitymodepowerfactor?: Maybe<Scalars['Float']>;
  contrastlevel?: Maybe<Scalars['smallint']>;
  ct1group?: Maybe<Scalars['smallint']>;
  ct1grouplimit?: Maybe<Scalars['smallint']>;
  ct1subtype?: Maybe<Scalars['String']>;
  ct1type?: Maybe<Scalars['String']>;
  ct2group?: Maybe<Scalars['smallint']>;
  ct2grouplimit?: Maybe<Scalars['smallint']>;
  ct2subtype?: Maybe<Scalars['String']>;
  ct2type?: Maybe<Scalars['String']>;
  ct3group?: Maybe<Scalars['smallint']>;
  ct3grouplimit?: Maybe<Scalars['smallint']>;
  dateformat?: Maybe<Scalars['String']>;
  defaultmode?: Maybe<Scalars['String']>;
  deviceconfigtime?: Maybe<Scalars['bigint']>;
  devicelimit?: Maybe<Scalars['Float']>;
  esenseinput?: Maybe<Scalars['String']>;
  exportmargin?: Maybe<Scalars['Int']>;
  gentypeicon?: Maybe<Scalars['String']>;
  gridlimit?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  lockcode?: Maybe<Scalars['Int']>;
  locktimeout?: Maybe<Scalars['smallint']>;
  maxgridlimit?: Maybe<Scalars['smallint']>;
  mingreenlevel?: Maybe<Scalars['smallint']>;
  password?: Maybe<Scalars['Int']>;
  phaseorphaserotation?: Maybe<Scalars['String']>;
  plugincharge?: Maybe<Scalars['smallint']>;
  preconditioning?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['bigint']>;
  smartboostenergy?: Maybe<Scalars['smallint']>;
  smartboosthour?: Maybe<Scalars['smallint']>;
  smartboostminute?: Maybe<Scalars['smallint']>;
  startstoptimer?: Maybe<Scalars['smallint']>;
  timezone?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "zappi1_config_reply_data" */
export type Zappi1_Config_Reply_Data_Mutation_Response = {
  __typename?: 'zappi1_config_reply_data_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Zappi1_Config_Reply_Data>;
};

/** input type for inserting object relation for remote table "zappi1_config_reply_data" */
export type Zappi1_Config_Reply_Data_Obj_Rel_Insert_Input = {
  data: Zappi1_Config_Reply_Data_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Zappi1_Config_Reply_Data_On_Conflict>;
};

/** on_conflict condition type for table "zappi1_config_reply_data" */
export type Zappi1_Config_Reply_Data_On_Conflict = {
  constraint: Zappi1_Config_Reply_Data_Constraint;
  update_columns?: Array<Zappi1_Config_Reply_Data_Update_Column>;
  where?: InputMaybe<Zappi1_Config_Reply_Data_Bool_Exp>;
};

/** Ordering options when selecting data from "zappi1_config_reply_data". */
export type Zappi1_Config_Reply_Data_Order_By = {
  autosettimefromclouddone?: InputMaybe<Order_By>;
  backlightontime?: InputMaybe<Order_By>;
  batterymode?: InputMaybe<Order_By>;
  boostingenergy?: InputMaybe<Order_By>;
  buzzeron?: InputMaybe<Order_By>;
  chargecompletedelay?: InputMaybe<Order_By>;
  compatibilitymodeactive?: InputMaybe<Order_By>;
  compatibilitymodeinfinitepwm?: InputMaybe<Order_By>;
  compatibilitymodeminpwm?: InputMaybe<Order_By>;
  compatibilitymodepowerfactor?: InputMaybe<Order_By>;
  config_reply?: InputMaybe<Config_Reply_Order_By>;
  config_reply_boost_timers_aggregate?: InputMaybe<Config_Reply_Boost_Timer_Aggregate_Order_By>;
  contrastlevel?: InputMaybe<Order_By>;
  ct1group?: InputMaybe<Order_By>;
  ct1grouplimit?: InputMaybe<Order_By>;
  ct1subtype?: InputMaybe<Order_By>;
  ct1type?: InputMaybe<Order_By>;
  ct2group?: InputMaybe<Order_By>;
  ct2grouplimit?: InputMaybe<Order_By>;
  ct2subtype?: InputMaybe<Order_By>;
  ct2type?: InputMaybe<Order_By>;
  ct3group?: InputMaybe<Order_By>;
  ct3grouplimit?: InputMaybe<Order_By>;
  dateformat?: InputMaybe<Order_By>;
  defaultmode?: InputMaybe<Order_By>;
  deviceconfigtime?: InputMaybe<Order_By>;
  devicelimit?: InputMaybe<Order_By>;
  dston?: InputMaybe<Order_By>;
  esenseinput?: InputMaybe<Order_By>;
  exportmargin?: InputMaybe<Order_By>;
  gentypeicon?: InputMaybe<Order_By>;
  gridlimit?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  language?: InputMaybe<Order_By>;
  lockcode?: InputMaybe<Order_By>;
  lockevplugged?: InputMaybe<Order_By>;
  lockevunplugged?: InputMaybe<Order_By>;
  lockhidereadings?: InputMaybe<Order_By>;
  locktimeout?: InputMaybe<Order_By>;
  maxgridlimit?: InputMaybe<Order_By>;
  mingreenlevel?: InputMaybe<Order_By>;
  monitoringstatus?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  phaseorphaserotation?: InputMaybe<Order_By>;
  plugincharge?: InputMaybe<Order_By>;
  preconditioning?: InputMaybe<Order_By>;
  signature?: InputMaybe<Order_By>;
  smartboostenergy?: InputMaybe<Order_By>;
  smartboosthour?: InputMaybe<Order_By>;
  smartboostminute?: InputMaybe<Order_By>;
  startstoptimer?: InputMaybe<Order_By>;
  timefromcloud?: InputMaybe<Order_By>;
  timezone?: InputMaybe<Order_By>;
  triphaseon?: InputMaybe<Order_By>;
};

/** primary key columns input for table: zappi1_config_reply_data */
export type Zappi1_Config_Reply_Data_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "zappi1_config_reply_data" */
export enum Zappi1_Config_Reply_Data_Select_Column {
  /** column name */
  Autosettimefromclouddone = 'autosettimefromclouddone',
  /** column name */
  Backlightontime = 'backlightontime',
  /** column name */
  Batterymode = 'batterymode',
  /** column name */
  Boostingenergy = 'boostingenergy',
  /** column name */
  Buzzeron = 'buzzeron',
  /** column name */
  Chargecompletedelay = 'chargecompletedelay',
  /** column name */
  Compatibilitymodeactive = 'compatibilitymodeactive',
  /** column name */
  Compatibilitymodeinfinitepwm = 'compatibilitymodeinfinitepwm',
  /** column name */
  Compatibilitymodeminpwm = 'compatibilitymodeminpwm',
  /** column name */
  Compatibilitymodepowerfactor = 'compatibilitymodepowerfactor',
  /** column name */
  Contrastlevel = 'contrastlevel',
  /** column name */
  Ct1group = 'ct1group',
  /** column name */
  Ct1grouplimit = 'ct1grouplimit',
  /** column name */
  Ct1subtype = 'ct1subtype',
  /** column name */
  Ct1type = 'ct1type',
  /** column name */
  Ct2group = 'ct2group',
  /** column name */
  Ct2grouplimit = 'ct2grouplimit',
  /** column name */
  Ct2subtype = 'ct2subtype',
  /** column name */
  Ct2type = 'ct2type',
  /** column name */
  Ct3group = 'ct3group',
  /** column name */
  Ct3grouplimit = 'ct3grouplimit',
  /** column name */
  Dateformat = 'dateformat',
  /** column name */
  Defaultmode = 'defaultmode',
  /** column name */
  Deviceconfigtime = 'deviceconfigtime',
  /** column name */
  Devicelimit = 'devicelimit',
  /** column name */
  Dston = 'dston',
  /** column name */
  Esenseinput = 'esenseinput',
  /** column name */
  Exportmargin = 'exportmargin',
  /** column name */
  Gentypeicon = 'gentypeicon',
  /** column name */
  Gridlimit = 'gridlimit',
  /** column name */
  Id = 'id',
  /** column name */
  Language = 'language',
  /** column name */
  Lockcode = 'lockcode',
  /** column name */
  Lockevplugged = 'lockevplugged',
  /** column name */
  Lockevunplugged = 'lockevunplugged',
  /** column name */
  Lockhidereadings = 'lockhidereadings',
  /** column name */
  Locktimeout = 'locktimeout',
  /** column name */
  Maxgridlimit = 'maxgridlimit',
  /** column name */
  Mingreenlevel = 'mingreenlevel',
  /** column name */
  Monitoringstatus = 'monitoringstatus',
  /** column name */
  Password = 'password',
  /** column name */
  Phaseorphaserotation = 'phaseorphaserotation',
  /** column name */
  Plugincharge = 'plugincharge',
  /** column name */
  Preconditioning = 'preconditioning',
  /** column name */
  Signature = 'signature',
  /** column name */
  Smartboostenergy = 'smartboostenergy',
  /** column name */
  Smartboosthour = 'smartboosthour',
  /** column name */
  Smartboostminute = 'smartboostminute',
  /** column name */
  Startstoptimer = 'startstoptimer',
  /** column name */
  Timefromcloud = 'timefromcloud',
  /** column name */
  Timezone = 'timezone',
  /** column name */
  Triphaseon = 'triphaseon',
}

/** input type for updating data in table "zappi1_config_reply_data" */
export type Zappi1_Config_Reply_Data_Set_Input = {
  autosettimefromclouddone?: InputMaybe<Scalars['Boolean']>;
  backlightontime?: InputMaybe<Scalars['smallint']>;
  batterymode?: InputMaybe<Scalars['String']>;
  boostingenergy?: InputMaybe<Scalars['smallint']>;
  buzzeron?: InputMaybe<Scalars['Boolean']>;
  chargecompletedelay?: InputMaybe<Scalars['Int']>;
  compatibilitymodeactive?: InputMaybe<Scalars['Boolean']>;
  compatibilitymodeinfinitepwm?: InputMaybe<Scalars['Boolean']>;
  compatibilitymodeminpwm?: InputMaybe<Scalars['Float']>;
  compatibilitymodepowerfactor?: InputMaybe<Scalars['Float']>;
  contrastlevel?: InputMaybe<Scalars['smallint']>;
  ct1group?: InputMaybe<Scalars['smallint']>;
  ct1grouplimit?: InputMaybe<Scalars['smallint']>;
  ct1subtype?: InputMaybe<Scalars['String']>;
  ct1type?: InputMaybe<Scalars['String']>;
  ct2group?: InputMaybe<Scalars['smallint']>;
  ct2grouplimit?: InputMaybe<Scalars['smallint']>;
  ct2subtype?: InputMaybe<Scalars['String']>;
  ct2type?: InputMaybe<Scalars['String']>;
  ct3group?: InputMaybe<Scalars['smallint']>;
  ct3grouplimit?: InputMaybe<Scalars['smallint']>;
  dateformat?: InputMaybe<Scalars['String']>;
  defaultmode?: InputMaybe<Scalars['String']>;
  deviceconfigtime?: InputMaybe<Scalars['bigint']>;
  devicelimit?: InputMaybe<Scalars['Float']>;
  dston?: InputMaybe<Scalars['Boolean']>;
  esenseinput?: InputMaybe<Scalars['String']>;
  exportmargin?: InputMaybe<Scalars['Int']>;
  gentypeicon?: InputMaybe<Scalars['String']>;
  gridlimit?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  lockcode?: InputMaybe<Scalars['Int']>;
  lockevplugged?: InputMaybe<Scalars['Boolean']>;
  lockevunplugged?: InputMaybe<Scalars['Boolean']>;
  lockhidereadings?: InputMaybe<Scalars['Boolean']>;
  locktimeout?: InputMaybe<Scalars['smallint']>;
  maxgridlimit?: InputMaybe<Scalars['smallint']>;
  mingreenlevel?: InputMaybe<Scalars['smallint']>;
  monitoringstatus?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['Int']>;
  phaseorphaserotation?: InputMaybe<Scalars['String']>;
  plugincharge?: InputMaybe<Scalars['smallint']>;
  preconditioning?: InputMaybe<Scalars['String']>;
  signature?: InputMaybe<Scalars['bigint']>;
  smartboostenergy?: InputMaybe<Scalars['smallint']>;
  smartboosthour?: InputMaybe<Scalars['smallint']>;
  smartboostminute?: InputMaybe<Scalars['smallint']>;
  startstoptimer?: InputMaybe<Scalars['smallint']>;
  timefromcloud?: InputMaybe<Scalars['Boolean']>;
  timezone?: InputMaybe<Scalars['String']>;
  triphaseon?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Zappi1_Config_Reply_Data_Stddev_Fields = {
  __typename?: 'zappi1_config_reply_data_stddev_fields';
  backlightontime?: Maybe<Scalars['Float']>;
  boostingenergy?: Maybe<Scalars['Float']>;
  chargecompletedelay?: Maybe<Scalars['Float']>;
  compatibilitymodeminpwm?: Maybe<Scalars['Float']>;
  compatibilitymodepowerfactor?: Maybe<Scalars['Float']>;
  contrastlevel?: Maybe<Scalars['Float']>;
  ct1group?: Maybe<Scalars['Float']>;
  ct1grouplimit?: Maybe<Scalars['Float']>;
  ct2group?: Maybe<Scalars['Float']>;
  ct2grouplimit?: Maybe<Scalars['Float']>;
  ct3group?: Maybe<Scalars['Float']>;
  ct3grouplimit?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  devicelimit?: Maybe<Scalars['Float']>;
  exportmargin?: Maybe<Scalars['Float']>;
  gridlimit?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lockcode?: Maybe<Scalars['Float']>;
  locktimeout?: Maybe<Scalars['Float']>;
  maxgridlimit?: Maybe<Scalars['Float']>;
  mingreenlevel?: Maybe<Scalars['Float']>;
  password?: Maybe<Scalars['Float']>;
  plugincharge?: Maybe<Scalars['Float']>;
  signature?: Maybe<Scalars['Float']>;
  smartboostenergy?: Maybe<Scalars['Float']>;
  smartboosthour?: Maybe<Scalars['Float']>;
  smartboostminute?: Maybe<Scalars['Float']>;
  startstoptimer?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Zappi1_Config_Reply_Data_Stddev_Pop_Fields = {
  __typename?: 'zappi1_config_reply_data_stddev_pop_fields';
  backlightontime?: Maybe<Scalars['Float']>;
  boostingenergy?: Maybe<Scalars['Float']>;
  chargecompletedelay?: Maybe<Scalars['Float']>;
  compatibilitymodeminpwm?: Maybe<Scalars['Float']>;
  compatibilitymodepowerfactor?: Maybe<Scalars['Float']>;
  contrastlevel?: Maybe<Scalars['Float']>;
  ct1group?: Maybe<Scalars['Float']>;
  ct1grouplimit?: Maybe<Scalars['Float']>;
  ct2group?: Maybe<Scalars['Float']>;
  ct2grouplimit?: Maybe<Scalars['Float']>;
  ct3group?: Maybe<Scalars['Float']>;
  ct3grouplimit?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  devicelimit?: Maybe<Scalars['Float']>;
  exportmargin?: Maybe<Scalars['Float']>;
  gridlimit?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lockcode?: Maybe<Scalars['Float']>;
  locktimeout?: Maybe<Scalars['Float']>;
  maxgridlimit?: Maybe<Scalars['Float']>;
  mingreenlevel?: Maybe<Scalars['Float']>;
  password?: Maybe<Scalars['Float']>;
  plugincharge?: Maybe<Scalars['Float']>;
  signature?: Maybe<Scalars['Float']>;
  smartboostenergy?: Maybe<Scalars['Float']>;
  smartboosthour?: Maybe<Scalars['Float']>;
  smartboostminute?: Maybe<Scalars['Float']>;
  startstoptimer?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Zappi1_Config_Reply_Data_Stddev_Samp_Fields = {
  __typename?: 'zappi1_config_reply_data_stddev_samp_fields';
  backlightontime?: Maybe<Scalars['Float']>;
  boostingenergy?: Maybe<Scalars['Float']>;
  chargecompletedelay?: Maybe<Scalars['Float']>;
  compatibilitymodeminpwm?: Maybe<Scalars['Float']>;
  compatibilitymodepowerfactor?: Maybe<Scalars['Float']>;
  contrastlevel?: Maybe<Scalars['Float']>;
  ct1group?: Maybe<Scalars['Float']>;
  ct1grouplimit?: Maybe<Scalars['Float']>;
  ct2group?: Maybe<Scalars['Float']>;
  ct2grouplimit?: Maybe<Scalars['Float']>;
  ct3group?: Maybe<Scalars['Float']>;
  ct3grouplimit?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  devicelimit?: Maybe<Scalars['Float']>;
  exportmargin?: Maybe<Scalars['Float']>;
  gridlimit?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lockcode?: Maybe<Scalars['Float']>;
  locktimeout?: Maybe<Scalars['Float']>;
  maxgridlimit?: Maybe<Scalars['Float']>;
  mingreenlevel?: Maybe<Scalars['Float']>;
  password?: Maybe<Scalars['Float']>;
  plugincharge?: Maybe<Scalars['Float']>;
  signature?: Maybe<Scalars['Float']>;
  smartboostenergy?: Maybe<Scalars['Float']>;
  smartboosthour?: Maybe<Scalars['Float']>;
  smartboostminute?: Maybe<Scalars['Float']>;
  startstoptimer?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Zappi1_Config_Reply_Data_Sum_Fields = {
  __typename?: 'zappi1_config_reply_data_sum_fields';
  backlightontime?: Maybe<Scalars['smallint']>;
  boostingenergy?: Maybe<Scalars['smallint']>;
  chargecompletedelay?: Maybe<Scalars['Int']>;
  compatibilitymodeminpwm?: Maybe<Scalars['Float']>;
  compatibilitymodepowerfactor?: Maybe<Scalars['Float']>;
  contrastlevel?: Maybe<Scalars['smallint']>;
  ct1group?: Maybe<Scalars['smallint']>;
  ct1grouplimit?: Maybe<Scalars['smallint']>;
  ct2group?: Maybe<Scalars['smallint']>;
  ct2grouplimit?: Maybe<Scalars['smallint']>;
  ct3group?: Maybe<Scalars['smallint']>;
  ct3grouplimit?: Maybe<Scalars['smallint']>;
  deviceconfigtime?: Maybe<Scalars['bigint']>;
  devicelimit?: Maybe<Scalars['Float']>;
  exportmargin?: Maybe<Scalars['Int']>;
  gridlimit?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  lockcode?: Maybe<Scalars['Int']>;
  locktimeout?: Maybe<Scalars['smallint']>;
  maxgridlimit?: Maybe<Scalars['smallint']>;
  mingreenlevel?: Maybe<Scalars['smallint']>;
  password?: Maybe<Scalars['Int']>;
  plugincharge?: Maybe<Scalars['smallint']>;
  signature?: Maybe<Scalars['bigint']>;
  smartboostenergy?: Maybe<Scalars['smallint']>;
  smartboosthour?: Maybe<Scalars['smallint']>;
  smartboostminute?: Maybe<Scalars['smallint']>;
  startstoptimer?: Maybe<Scalars['smallint']>;
};

/** update columns of table "zappi1_config_reply_data" */
export enum Zappi1_Config_Reply_Data_Update_Column {
  /** column name */
  Autosettimefromclouddone = 'autosettimefromclouddone',
  /** column name */
  Backlightontime = 'backlightontime',
  /** column name */
  Batterymode = 'batterymode',
  /** column name */
  Boostingenergy = 'boostingenergy',
  /** column name */
  Buzzeron = 'buzzeron',
  /** column name */
  Chargecompletedelay = 'chargecompletedelay',
  /** column name */
  Compatibilitymodeactive = 'compatibilitymodeactive',
  /** column name */
  Compatibilitymodeinfinitepwm = 'compatibilitymodeinfinitepwm',
  /** column name */
  Compatibilitymodeminpwm = 'compatibilitymodeminpwm',
  /** column name */
  Compatibilitymodepowerfactor = 'compatibilitymodepowerfactor',
  /** column name */
  Contrastlevel = 'contrastlevel',
  /** column name */
  Ct1group = 'ct1group',
  /** column name */
  Ct1grouplimit = 'ct1grouplimit',
  /** column name */
  Ct1subtype = 'ct1subtype',
  /** column name */
  Ct1type = 'ct1type',
  /** column name */
  Ct2group = 'ct2group',
  /** column name */
  Ct2grouplimit = 'ct2grouplimit',
  /** column name */
  Ct2subtype = 'ct2subtype',
  /** column name */
  Ct2type = 'ct2type',
  /** column name */
  Ct3group = 'ct3group',
  /** column name */
  Ct3grouplimit = 'ct3grouplimit',
  /** column name */
  Dateformat = 'dateformat',
  /** column name */
  Defaultmode = 'defaultmode',
  /** column name */
  Deviceconfigtime = 'deviceconfigtime',
  /** column name */
  Devicelimit = 'devicelimit',
  /** column name */
  Dston = 'dston',
  /** column name */
  Esenseinput = 'esenseinput',
  /** column name */
  Exportmargin = 'exportmargin',
  /** column name */
  Gentypeicon = 'gentypeicon',
  /** column name */
  Gridlimit = 'gridlimit',
  /** column name */
  Id = 'id',
  /** column name */
  Language = 'language',
  /** column name */
  Lockcode = 'lockcode',
  /** column name */
  Lockevplugged = 'lockevplugged',
  /** column name */
  Lockevunplugged = 'lockevunplugged',
  /** column name */
  Lockhidereadings = 'lockhidereadings',
  /** column name */
  Locktimeout = 'locktimeout',
  /** column name */
  Maxgridlimit = 'maxgridlimit',
  /** column name */
  Mingreenlevel = 'mingreenlevel',
  /** column name */
  Monitoringstatus = 'monitoringstatus',
  /** column name */
  Password = 'password',
  /** column name */
  Phaseorphaserotation = 'phaseorphaserotation',
  /** column name */
  Plugincharge = 'plugincharge',
  /** column name */
  Preconditioning = 'preconditioning',
  /** column name */
  Signature = 'signature',
  /** column name */
  Smartboostenergy = 'smartboostenergy',
  /** column name */
  Smartboosthour = 'smartboosthour',
  /** column name */
  Smartboostminute = 'smartboostminute',
  /** column name */
  Startstoptimer = 'startstoptimer',
  /** column name */
  Timefromcloud = 'timefromcloud',
  /** column name */
  Timezone = 'timezone',
  /** column name */
  Triphaseon = 'triphaseon',
}

/** aggregate var_pop on columns */
export type Zappi1_Config_Reply_Data_Var_Pop_Fields = {
  __typename?: 'zappi1_config_reply_data_var_pop_fields';
  backlightontime?: Maybe<Scalars['Float']>;
  boostingenergy?: Maybe<Scalars['Float']>;
  chargecompletedelay?: Maybe<Scalars['Float']>;
  compatibilitymodeminpwm?: Maybe<Scalars['Float']>;
  compatibilitymodepowerfactor?: Maybe<Scalars['Float']>;
  contrastlevel?: Maybe<Scalars['Float']>;
  ct1group?: Maybe<Scalars['Float']>;
  ct1grouplimit?: Maybe<Scalars['Float']>;
  ct2group?: Maybe<Scalars['Float']>;
  ct2grouplimit?: Maybe<Scalars['Float']>;
  ct3group?: Maybe<Scalars['Float']>;
  ct3grouplimit?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  devicelimit?: Maybe<Scalars['Float']>;
  exportmargin?: Maybe<Scalars['Float']>;
  gridlimit?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lockcode?: Maybe<Scalars['Float']>;
  locktimeout?: Maybe<Scalars['Float']>;
  maxgridlimit?: Maybe<Scalars['Float']>;
  mingreenlevel?: Maybe<Scalars['Float']>;
  password?: Maybe<Scalars['Float']>;
  plugincharge?: Maybe<Scalars['Float']>;
  signature?: Maybe<Scalars['Float']>;
  smartboostenergy?: Maybe<Scalars['Float']>;
  smartboosthour?: Maybe<Scalars['Float']>;
  smartboostminute?: Maybe<Scalars['Float']>;
  startstoptimer?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Zappi1_Config_Reply_Data_Var_Samp_Fields = {
  __typename?: 'zappi1_config_reply_data_var_samp_fields';
  backlightontime?: Maybe<Scalars['Float']>;
  boostingenergy?: Maybe<Scalars['Float']>;
  chargecompletedelay?: Maybe<Scalars['Float']>;
  compatibilitymodeminpwm?: Maybe<Scalars['Float']>;
  compatibilitymodepowerfactor?: Maybe<Scalars['Float']>;
  contrastlevel?: Maybe<Scalars['Float']>;
  ct1group?: Maybe<Scalars['Float']>;
  ct1grouplimit?: Maybe<Scalars['Float']>;
  ct2group?: Maybe<Scalars['Float']>;
  ct2grouplimit?: Maybe<Scalars['Float']>;
  ct3group?: Maybe<Scalars['Float']>;
  ct3grouplimit?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  devicelimit?: Maybe<Scalars['Float']>;
  exportmargin?: Maybe<Scalars['Float']>;
  gridlimit?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lockcode?: Maybe<Scalars['Float']>;
  locktimeout?: Maybe<Scalars['Float']>;
  maxgridlimit?: Maybe<Scalars['Float']>;
  mingreenlevel?: Maybe<Scalars['Float']>;
  password?: Maybe<Scalars['Float']>;
  plugincharge?: Maybe<Scalars['Float']>;
  signature?: Maybe<Scalars['Float']>;
  smartboostenergy?: Maybe<Scalars['Float']>;
  smartboosthour?: Maybe<Scalars['Float']>;
  smartboostminute?: Maybe<Scalars['Float']>;
  startstoptimer?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Zappi1_Config_Reply_Data_Variance_Fields = {
  __typename?: 'zappi1_config_reply_data_variance_fields';
  backlightontime?: Maybe<Scalars['Float']>;
  boostingenergy?: Maybe<Scalars['Float']>;
  chargecompletedelay?: Maybe<Scalars['Float']>;
  compatibilitymodeminpwm?: Maybe<Scalars['Float']>;
  compatibilitymodepowerfactor?: Maybe<Scalars['Float']>;
  contrastlevel?: Maybe<Scalars['Float']>;
  ct1group?: Maybe<Scalars['Float']>;
  ct1grouplimit?: Maybe<Scalars['Float']>;
  ct2group?: Maybe<Scalars['Float']>;
  ct2grouplimit?: Maybe<Scalars['Float']>;
  ct3group?: Maybe<Scalars['Float']>;
  ct3grouplimit?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  devicelimit?: Maybe<Scalars['Float']>;
  exportmargin?: Maybe<Scalars['Float']>;
  gridlimit?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lockcode?: Maybe<Scalars['Float']>;
  locktimeout?: Maybe<Scalars['Float']>;
  maxgridlimit?: Maybe<Scalars['Float']>;
  mingreenlevel?: Maybe<Scalars['Float']>;
  password?: Maybe<Scalars['Float']>;
  plugincharge?: Maybe<Scalars['Float']>;
  signature?: Maybe<Scalars['Float']>;
  smartboostenergy?: Maybe<Scalars['Float']>;
  smartboosthour?: Maybe<Scalars['Float']>;
  smartboostminute?: Maybe<Scalars['Float']>;
  startstoptimer?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "zappi2_config_reply_data" */
export type Zappi2_Config_Reply_Data = {
  __typename?: 'zappi2_config_reply_data';
  backlightontime: Scalars['smallint'];
  batterymode?: Maybe<Scalars['String']>;
  boostingenergy: Scalars['smallint'];
  buzzeron: Scalars['Boolean'];
  chargecompletedelay: Scalars['Int'];
  chargein3phase: Scalars['Boolean'];
  chargewhenpinlocked: Scalars['Boolean'];
  compatibilitymodeactive: Scalars['Boolean'];
  compatibilitymodeinfinitepwm: Scalars['Boolean'];
  compatibilitymodeminpwm: Scalars['Float'];
  compatibilitymodepowerfactor: Scalars['Float'];
  /** An object relationship */
  config_reply?: Maybe<Config_Reply>;
  /** An array relationship */
  config_reply_boost_timers: Array<Config_Reply_Boost_Timer>;
  /** An aggregate relationship */
  config_reply_boost_timers_aggregate: Config_Reply_Boost_Timer_Aggregate;
  contrastlevel: Scalars['smallint'];
  ct1g100: Scalars['Boolean'];
  ct1group: Scalars['smallint'];
  ct1grouplimit: Scalars['smallint'];
  ct1subtype?: Maybe<Scalars['String']>;
  ct1type?: Maybe<Scalars['String']>;
  ct2g100: Scalars['Boolean'];
  ct2group: Scalars['smallint'];
  ct2grouplimit: Scalars['smallint'];
  ct2subtype?: Maybe<Scalars['String']>;
  ct2type?: Maybe<Scalars['String']>;
  ct3g100: Scalars['Boolean'];
  ct3group: Scalars['smallint'];
  ct3grouplimit: Scalars['smallint'];
  ct3subtype?: Maybe<Scalars['String']>;
  ct3type?: Maybe<Scalars['String']>;
  ct4grouplimit: Scalars['smallint'];
  ctinternalgroup: Scalars['smallint'];
  ctprimary: Scalars['smallint'];
  dateformat?: Maybe<Scalars['String']>;
  defaultmode?: Maybe<Scalars['String']>;
  deviceconfigtime: Scalars['bigint'];
  devicelimit: Scalars['Float'];
  dston: Scalars['Boolean'];
  earthing?: Maybe<Scalars['String']>;
  ecopstopdelay: Scalars['smallint'];
  esenseinput?: Maybe<Scalars['String']>;
  esenselimitpwm: Scalars['smallint'];
  exportmargin: Scalars['Int'];
  gentypeicon?: Maybe<Scalars['String']>;
  gridlimit: Scalars['Int'];
  gridpowerlimit: Scalars['Int'];
  id: Scalars['Int'];
  language?: Maybe<Scalars['String']>;
  ledbrightness: Scalars['smallint'];
  ledchargecomplete: Scalars['jsonb'];
  leddirtycharging: Scalars['jsonb'];
  ledfault: Scalars['jsonb'];
  ledgreencharging: Scalars['jsonb'];
  ledmixcharging: Scalars['jsonb'];
  ledstateb: Scalars['jsonb'];
  lockcode: Scalars['Int'];
  lockevplugged: Scalars['Boolean'];
  lockevunplugged: Scalars['Boolean'];
  lockhidereadings: Scalars['Boolean'];
  locksolenoidpwm: Scalars['Int'];
  locktimeout: Scalars['smallint'];
  mainswitchpwm: Scalars['Int'];
  mingreenlevel: Scalars['smallint'];
  monitoringstatus: Scalars['Boolean'];
  neutrallimit: Scalars['Int'];
  password: Scalars['Int'];
  perelaypwm: Scalars['Int'];
  phasereturn?: Maybe<Scalars['String']>;
  plugincharge: Scalars['Boolean'];
  preconenergy: Scalars['smallint'];
  preconon: Scalars['Boolean'];
  randomdelaystart: Scalars['smallint'];
  relay1pwm: Scalars['Int'];
  relay2pwm: Scalars['Int'];
  serverconfigtime?: Maybe<Scalars['Int']>;
  signature: Scalars['bigint'];
  smartboostenergy: Scalars['smallint'];
  smartboosthour: Scalars['smallint'];
  smartboostminute: Scalars['smallint'];
  startstoptimer: Scalars['smallint'];
  timefromcloud: Scalars['Boolean'];
  timezone?: Maybe<Scalars['String']>;
  weldedrelaycheckdelay: Scalars['Int'];
};

/** columns and relationships of "zappi2_config_reply_data" */
export type Zappi2_Config_Reply_DataConfig_Reply_Boost_TimersArgs = {
  distinct_on?: InputMaybe<Array<Config_Reply_Boost_Timer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Config_Reply_Boost_Timer_Order_By>>;
  where?: InputMaybe<Config_Reply_Boost_Timer_Bool_Exp>;
};

/** columns and relationships of "zappi2_config_reply_data" */
export type Zappi2_Config_Reply_DataConfig_Reply_Boost_Timers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Config_Reply_Boost_Timer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Config_Reply_Boost_Timer_Order_By>>;
  where?: InputMaybe<Config_Reply_Boost_Timer_Bool_Exp>;
};

/** columns and relationships of "zappi2_config_reply_data" */
export type Zappi2_Config_Reply_DataLedchargecompleteArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "zappi2_config_reply_data" */
export type Zappi2_Config_Reply_DataLeddirtychargingArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "zappi2_config_reply_data" */
export type Zappi2_Config_Reply_DataLedfaultArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "zappi2_config_reply_data" */
export type Zappi2_Config_Reply_DataLedgreenchargingArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "zappi2_config_reply_data" */
export type Zappi2_Config_Reply_DataLedmixchargingArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "zappi2_config_reply_data" */
export type Zappi2_Config_Reply_DataLedstatebArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "zappi2_config_reply_data" */
export type Zappi2_Config_Reply_Data_Aggregate = {
  __typename?: 'zappi2_config_reply_data_aggregate';
  aggregate?: Maybe<Zappi2_Config_Reply_Data_Aggregate_Fields>;
  nodes: Array<Zappi2_Config_Reply_Data>;
};

/** aggregate fields of "zappi2_config_reply_data" */
export type Zappi2_Config_Reply_Data_Aggregate_Fields = {
  __typename?: 'zappi2_config_reply_data_aggregate_fields';
  avg?: Maybe<Zappi2_Config_Reply_Data_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Zappi2_Config_Reply_Data_Max_Fields>;
  min?: Maybe<Zappi2_Config_Reply_Data_Min_Fields>;
  stddev?: Maybe<Zappi2_Config_Reply_Data_Stddev_Fields>;
  stddev_pop?: Maybe<Zappi2_Config_Reply_Data_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Zappi2_Config_Reply_Data_Stddev_Samp_Fields>;
  sum?: Maybe<Zappi2_Config_Reply_Data_Sum_Fields>;
  var_pop?: Maybe<Zappi2_Config_Reply_Data_Var_Pop_Fields>;
  var_samp?: Maybe<Zappi2_Config_Reply_Data_Var_Samp_Fields>;
  variance?: Maybe<Zappi2_Config_Reply_Data_Variance_Fields>;
};

/** aggregate fields of "zappi2_config_reply_data" */
export type Zappi2_Config_Reply_Data_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Zappi2_Config_Reply_Data_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Zappi2_Config_Reply_Data_Append_Input = {
  ledchargecomplete?: InputMaybe<Scalars['jsonb']>;
  leddirtycharging?: InputMaybe<Scalars['jsonb']>;
  ledfault?: InputMaybe<Scalars['jsonb']>;
  ledgreencharging?: InputMaybe<Scalars['jsonb']>;
  ledmixcharging?: InputMaybe<Scalars['jsonb']>;
  ledstateb?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Zappi2_Config_Reply_Data_Avg_Fields = {
  __typename?: 'zappi2_config_reply_data_avg_fields';
  backlightontime?: Maybe<Scalars['Float']>;
  boostingenergy?: Maybe<Scalars['Float']>;
  chargecompletedelay?: Maybe<Scalars['Float']>;
  compatibilitymodeminpwm?: Maybe<Scalars['Float']>;
  compatibilitymodepowerfactor?: Maybe<Scalars['Float']>;
  contrastlevel?: Maybe<Scalars['Float']>;
  ct1group?: Maybe<Scalars['Float']>;
  ct1grouplimit?: Maybe<Scalars['Float']>;
  ct2group?: Maybe<Scalars['Float']>;
  ct2grouplimit?: Maybe<Scalars['Float']>;
  ct3group?: Maybe<Scalars['Float']>;
  ct3grouplimit?: Maybe<Scalars['Float']>;
  ct4grouplimit?: Maybe<Scalars['Float']>;
  ctinternalgroup?: Maybe<Scalars['Float']>;
  ctprimary?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  devicelimit?: Maybe<Scalars['Float']>;
  ecopstopdelay?: Maybe<Scalars['Float']>;
  esenselimitpwm?: Maybe<Scalars['Float']>;
  exportmargin?: Maybe<Scalars['Float']>;
  gridlimit?: Maybe<Scalars['Float']>;
  gridpowerlimit?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  ledbrightness?: Maybe<Scalars['Float']>;
  lockcode?: Maybe<Scalars['Float']>;
  locksolenoidpwm?: Maybe<Scalars['Float']>;
  locktimeout?: Maybe<Scalars['Float']>;
  mainswitchpwm?: Maybe<Scalars['Float']>;
  mingreenlevel?: Maybe<Scalars['Float']>;
  neutrallimit?: Maybe<Scalars['Float']>;
  password?: Maybe<Scalars['Float']>;
  perelaypwm?: Maybe<Scalars['Float']>;
  preconenergy?: Maybe<Scalars['Float']>;
  randomdelaystart?: Maybe<Scalars['Float']>;
  relay1pwm?: Maybe<Scalars['Float']>;
  relay2pwm?: Maybe<Scalars['Float']>;
  serverconfigtime?: Maybe<Scalars['Float']>;
  signature?: Maybe<Scalars['Float']>;
  smartboostenergy?: Maybe<Scalars['Float']>;
  smartboosthour?: Maybe<Scalars['Float']>;
  smartboostminute?: Maybe<Scalars['Float']>;
  startstoptimer?: Maybe<Scalars['Float']>;
  weldedrelaycheckdelay?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "zappi2_config_reply_data". All fields are combined with a logical 'AND'. */
export type Zappi2_Config_Reply_Data_Bool_Exp = {
  _and?: InputMaybe<Array<Zappi2_Config_Reply_Data_Bool_Exp>>;
  _not?: InputMaybe<Zappi2_Config_Reply_Data_Bool_Exp>;
  _or?: InputMaybe<Array<Zappi2_Config_Reply_Data_Bool_Exp>>;
  backlightontime?: InputMaybe<Smallint_Comparison_Exp>;
  batterymode?: InputMaybe<String_Comparison_Exp>;
  boostingenergy?: InputMaybe<Smallint_Comparison_Exp>;
  buzzeron?: InputMaybe<Boolean_Comparison_Exp>;
  chargecompletedelay?: InputMaybe<Int_Comparison_Exp>;
  chargein3phase?: InputMaybe<Boolean_Comparison_Exp>;
  chargewhenpinlocked?: InputMaybe<Boolean_Comparison_Exp>;
  compatibilitymodeactive?: InputMaybe<Boolean_Comparison_Exp>;
  compatibilitymodeinfinitepwm?: InputMaybe<Boolean_Comparison_Exp>;
  compatibilitymodeminpwm?: InputMaybe<Float_Comparison_Exp>;
  compatibilitymodepowerfactor?: InputMaybe<Float_Comparison_Exp>;
  config_reply?: InputMaybe<Config_Reply_Bool_Exp>;
  config_reply_boost_timers?: InputMaybe<Config_Reply_Boost_Timer_Bool_Exp>;
  contrastlevel?: InputMaybe<Smallint_Comparison_Exp>;
  ct1g100?: InputMaybe<Boolean_Comparison_Exp>;
  ct1group?: InputMaybe<Smallint_Comparison_Exp>;
  ct1grouplimit?: InputMaybe<Smallint_Comparison_Exp>;
  ct1subtype?: InputMaybe<String_Comparison_Exp>;
  ct1type?: InputMaybe<String_Comparison_Exp>;
  ct2g100?: InputMaybe<Boolean_Comparison_Exp>;
  ct2group?: InputMaybe<Smallint_Comparison_Exp>;
  ct2grouplimit?: InputMaybe<Smallint_Comparison_Exp>;
  ct2subtype?: InputMaybe<String_Comparison_Exp>;
  ct2type?: InputMaybe<String_Comparison_Exp>;
  ct3g100?: InputMaybe<Boolean_Comparison_Exp>;
  ct3group?: InputMaybe<Smallint_Comparison_Exp>;
  ct3grouplimit?: InputMaybe<Smallint_Comparison_Exp>;
  ct3subtype?: InputMaybe<String_Comparison_Exp>;
  ct3type?: InputMaybe<String_Comparison_Exp>;
  ct4grouplimit?: InputMaybe<Smallint_Comparison_Exp>;
  ctinternalgroup?: InputMaybe<Smallint_Comparison_Exp>;
  ctprimary?: InputMaybe<Smallint_Comparison_Exp>;
  dateformat?: InputMaybe<String_Comparison_Exp>;
  defaultmode?: InputMaybe<String_Comparison_Exp>;
  deviceconfigtime?: InputMaybe<Bigint_Comparison_Exp>;
  devicelimit?: InputMaybe<Float_Comparison_Exp>;
  dston?: InputMaybe<Boolean_Comparison_Exp>;
  earthing?: InputMaybe<String_Comparison_Exp>;
  ecopstopdelay?: InputMaybe<Smallint_Comparison_Exp>;
  esenseinput?: InputMaybe<String_Comparison_Exp>;
  esenselimitpwm?: InputMaybe<Smallint_Comparison_Exp>;
  exportmargin?: InputMaybe<Int_Comparison_Exp>;
  gentypeicon?: InputMaybe<String_Comparison_Exp>;
  gridlimit?: InputMaybe<Int_Comparison_Exp>;
  gridpowerlimit?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  language?: InputMaybe<String_Comparison_Exp>;
  ledbrightness?: InputMaybe<Smallint_Comparison_Exp>;
  ledchargecomplete?: InputMaybe<Jsonb_Comparison_Exp>;
  leddirtycharging?: InputMaybe<Jsonb_Comparison_Exp>;
  ledfault?: InputMaybe<Jsonb_Comparison_Exp>;
  ledgreencharging?: InputMaybe<Jsonb_Comparison_Exp>;
  ledmixcharging?: InputMaybe<Jsonb_Comparison_Exp>;
  ledstateb?: InputMaybe<Jsonb_Comparison_Exp>;
  lockcode?: InputMaybe<Int_Comparison_Exp>;
  lockevplugged?: InputMaybe<Boolean_Comparison_Exp>;
  lockevunplugged?: InputMaybe<Boolean_Comparison_Exp>;
  lockhidereadings?: InputMaybe<Boolean_Comparison_Exp>;
  locksolenoidpwm?: InputMaybe<Int_Comparison_Exp>;
  locktimeout?: InputMaybe<Smallint_Comparison_Exp>;
  mainswitchpwm?: InputMaybe<Int_Comparison_Exp>;
  mingreenlevel?: InputMaybe<Smallint_Comparison_Exp>;
  monitoringstatus?: InputMaybe<Boolean_Comparison_Exp>;
  neutrallimit?: InputMaybe<Int_Comparison_Exp>;
  password?: InputMaybe<Int_Comparison_Exp>;
  perelaypwm?: InputMaybe<Int_Comparison_Exp>;
  phasereturn?: InputMaybe<String_Comparison_Exp>;
  plugincharge?: InputMaybe<Boolean_Comparison_Exp>;
  preconenergy?: InputMaybe<Smallint_Comparison_Exp>;
  preconon?: InputMaybe<Boolean_Comparison_Exp>;
  randomdelaystart?: InputMaybe<Smallint_Comparison_Exp>;
  relay1pwm?: InputMaybe<Int_Comparison_Exp>;
  relay2pwm?: InputMaybe<Int_Comparison_Exp>;
  serverconfigtime?: InputMaybe<Int_Comparison_Exp>;
  signature?: InputMaybe<Bigint_Comparison_Exp>;
  smartboostenergy?: InputMaybe<Smallint_Comparison_Exp>;
  smartboosthour?: InputMaybe<Smallint_Comparison_Exp>;
  smartboostminute?: InputMaybe<Smallint_Comparison_Exp>;
  startstoptimer?: InputMaybe<Smallint_Comparison_Exp>;
  timefromcloud?: InputMaybe<Boolean_Comparison_Exp>;
  timezone?: InputMaybe<String_Comparison_Exp>;
  weldedrelaycheckdelay?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "zappi2_config_reply_data" */
export enum Zappi2_Config_Reply_Data_Constraint {
  /** unique or primary key constraint */
  PkF5da991768799f1efbc44fe7daf = 'PK_f5da991768799f1efbc44fe7daf',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Zappi2_Config_Reply_Data_Delete_At_Path_Input = {
  ledchargecomplete?: InputMaybe<Array<Scalars['String']>>;
  leddirtycharging?: InputMaybe<Array<Scalars['String']>>;
  ledfault?: InputMaybe<Array<Scalars['String']>>;
  ledgreencharging?: InputMaybe<Array<Scalars['String']>>;
  ledmixcharging?: InputMaybe<Array<Scalars['String']>>;
  ledstateb?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Zappi2_Config_Reply_Data_Delete_Elem_Input = {
  ledchargecomplete?: InputMaybe<Scalars['Int']>;
  leddirtycharging?: InputMaybe<Scalars['Int']>;
  ledfault?: InputMaybe<Scalars['Int']>;
  ledgreencharging?: InputMaybe<Scalars['Int']>;
  ledmixcharging?: InputMaybe<Scalars['Int']>;
  ledstateb?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Zappi2_Config_Reply_Data_Delete_Key_Input = {
  ledchargecomplete?: InputMaybe<Scalars['String']>;
  leddirtycharging?: InputMaybe<Scalars['String']>;
  ledfault?: InputMaybe<Scalars['String']>;
  ledgreencharging?: InputMaybe<Scalars['String']>;
  ledmixcharging?: InputMaybe<Scalars['String']>;
  ledstateb?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "zappi2_config_reply_data" */
export type Zappi2_Config_Reply_Data_Inc_Input = {
  backlightontime?: InputMaybe<Scalars['smallint']>;
  boostingenergy?: InputMaybe<Scalars['smallint']>;
  chargecompletedelay?: InputMaybe<Scalars['Int']>;
  compatibilitymodeminpwm?: InputMaybe<Scalars['Float']>;
  compatibilitymodepowerfactor?: InputMaybe<Scalars['Float']>;
  contrastlevel?: InputMaybe<Scalars['smallint']>;
  ct1group?: InputMaybe<Scalars['smallint']>;
  ct1grouplimit?: InputMaybe<Scalars['smallint']>;
  ct2group?: InputMaybe<Scalars['smallint']>;
  ct2grouplimit?: InputMaybe<Scalars['smallint']>;
  ct3group?: InputMaybe<Scalars['smallint']>;
  ct3grouplimit?: InputMaybe<Scalars['smallint']>;
  ct4grouplimit?: InputMaybe<Scalars['smallint']>;
  ctinternalgroup?: InputMaybe<Scalars['smallint']>;
  ctprimary?: InputMaybe<Scalars['smallint']>;
  deviceconfigtime?: InputMaybe<Scalars['bigint']>;
  devicelimit?: InputMaybe<Scalars['Float']>;
  ecopstopdelay?: InputMaybe<Scalars['smallint']>;
  esenselimitpwm?: InputMaybe<Scalars['smallint']>;
  exportmargin?: InputMaybe<Scalars['Int']>;
  gridlimit?: InputMaybe<Scalars['Int']>;
  gridpowerlimit?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  ledbrightness?: InputMaybe<Scalars['smallint']>;
  lockcode?: InputMaybe<Scalars['Int']>;
  locksolenoidpwm?: InputMaybe<Scalars['Int']>;
  locktimeout?: InputMaybe<Scalars['smallint']>;
  mainswitchpwm?: InputMaybe<Scalars['Int']>;
  mingreenlevel?: InputMaybe<Scalars['smallint']>;
  neutrallimit?: InputMaybe<Scalars['Int']>;
  password?: InputMaybe<Scalars['Int']>;
  perelaypwm?: InputMaybe<Scalars['Int']>;
  preconenergy?: InputMaybe<Scalars['smallint']>;
  randomdelaystart?: InputMaybe<Scalars['smallint']>;
  relay1pwm?: InputMaybe<Scalars['Int']>;
  relay2pwm?: InputMaybe<Scalars['Int']>;
  serverconfigtime?: InputMaybe<Scalars['Int']>;
  signature?: InputMaybe<Scalars['bigint']>;
  smartboostenergy?: InputMaybe<Scalars['smallint']>;
  smartboosthour?: InputMaybe<Scalars['smallint']>;
  smartboostminute?: InputMaybe<Scalars['smallint']>;
  startstoptimer?: InputMaybe<Scalars['smallint']>;
  weldedrelaycheckdelay?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "zappi2_config_reply_data" */
export type Zappi2_Config_Reply_Data_Insert_Input = {
  backlightontime?: InputMaybe<Scalars['smallint']>;
  batterymode?: InputMaybe<Scalars['String']>;
  boostingenergy?: InputMaybe<Scalars['smallint']>;
  buzzeron?: InputMaybe<Scalars['Boolean']>;
  chargecompletedelay?: InputMaybe<Scalars['Int']>;
  chargein3phase?: InputMaybe<Scalars['Boolean']>;
  chargewhenpinlocked?: InputMaybe<Scalars['Boolean']>;
  compatibilitymodeactive?: InputMaybe<Scalars['Boolean']>;
  compatibilitymodeinfinitepwm?: InputMaybe<Scalars['Boolean']>;
  compatibilitymodeminpwm?: InputMaybe<Scalars['Float']>;
  compatibilitymodepowerfactor?: InputMaybe<Scalars['Float']>;
  config_reply?: InputMaybe<Config_Reply_Obj_Rel_Insert_Input>;
  config_reply_boost_timers?: InputMaybe<Config_Reply_Boost_Timer_Arr_Rel_Insert_Input>;
  contrastlevel?: InputMaybe<Scalars['smallint']>;
  ct1g100?: InputMaybe<Scalars['Boolean']>;
  ct1group?: InputMaybe<Scalars['smallint']>;
  ct1grouplimit?: InputMaybe<Scalars['smallint']>;
  ct1subtype?: InputMaybe<Scalars['String']>;
  ct1type?: InputMaybe<Scalars['String']>;
  ct2g100?: InputMaybe<Scalars['Boolean']>;
  ct2group?: InputMaybe<Scalars['smallint']>;
  ct2grouplimit?: InputMaybe<Scalars['smallint']>;
  ct2subtype?: InputMaybe<Scalars['String']>;
  ct2type?: InputMaybe<Scalars['String']>;
  ct3g100?: InputMaybe<Scalars['Boolean']>;
  ct3group?: InputMaybe<Scalars['smallint']>;
  ct3grouplimit?: InputMaybe<Scalars['smallint']>;
  ct3subtype?: InputMaybe<Scalars['String']>;
  ct3type?: InputMaybe<Scalars['String']>;
  ct4grouplimit?: InputMaybe<Scalars['smallint']>;
  ctinternalgroup?: InputMaybe<Scalars['smallint']>;
  ctprimary?: InputMaybe<Scalars['smallint']>;
  dateformat?: InputMaybe<Scalars['String']>;
  defaultmode?: InputMaybe<Scalars['String']>;
  deviceconfigtime?: InputMaybe<Scalars['bigint']>;
  devicelimit?: InputMaybe<Scalars['Float']>;
  dston?: InputMaybe<Scalars['Boolean']>;
  earthing?: InputMaybe<Scalars['String']>;
  ecopstopdelay?: InputMaybe<Scalars['smallint']>;
  esenseinput?: InputMaybe<Scalars['String']>;
  esenselimitpwm?: InputMaybe<Scalars['smallint']>;
  exportmargin?: InputMaybe<Scalars['Int']>;
  gentypeicon?: InputMaybe<Scalars['String']>;
  gridlimit?: InputMaybe<Scalars['Int']>;
  gridpowerlimit?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  ledbrightness?: InputMaybe<Scalars['smallint']>;
  ledchargecomplete?: InputMaybe<Scalars['jsonb']>;
  leddirtycharging?: InputMaybe<Scalars['jsonb']>;
  ledfault?: InputMaybe<Scalars['jsonb']>;
  ledgreencharging?: InputMaybe<Scalars['jsonb']>;
  ledmixcharging?: InputMaybe<Scalars['jsonb']>;
  ledstateb?: InputMaybe<Scalars['jsonb']>;
  lockcode?: InputMaybe<Scalars['Int']>;
  lockevplugged?: InputMaybe<Scalars['Boolean']>;
  lockevunplugged?: InputMaybe<Scalars['Boolean']>;
  lockhidereadings?: InputMaybe<Scalars['Boolean']>;
  locksolenoidpwm?: InputMaybe<Scalars['Int']>;
  locktimeout?: InputMaybe<Scalars['smallint']>;
  mainswitchpwm?: InputMaybe<Scalars['Int']>;
  mingreenlevel?: InputMaybe<Scalars['smallint']>;
  monitoringstatus?: InputMaybe<Scalars['Boolean']>;
  neutrallimit?: InputMaybe<Scalars['Int']>;
  password?: InputMaybe<Scalars['Int']>;
  perelaypwm?: InputMaybe<Scalars['Int']>;
  phasereturn?: InputMaybe<Scalars['String']>;
  plugincharge?: InputMaybe<Scalars['Boolean']>;
  preconenergy?: InputMaybe<Scalars['smallint']>;
  preconon?: InputMaybe<Scalars['Boolean']>;
  randomdelaystart?: InputMaybe<Scalars['smallint']>;
  relay1pwm?: InputMaybe<Scalars['Int']>;
  relay2pwm?: InputMaybe<Scalars['Int']>;
  serverconfigtime?: InputMaybe<Scalars['Int']>;
  signature?: InputMaybe<Scalars['bigint']>;
  smartboostenergy?: InputMaybe<Scalars['smallint']>;
  smartboosthour?: InputMaybe<Scalars['smallint']>;
  smartboostminute?: InputMaybe<Scalars['smallint']>;
  startstoptimer?: InputMaybe<Scalars['smallint']>;
  timefromcloud?: InputMaybe<Scalars['Boolean']>;
  timezone?: InputMaybe<Scalars['String']>;
  weldedrelaycheckdelay?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Zappi2_Config_Reply_Data_Max_Fields = {
  __typename?: 'zappi2_config_reply_data_max_fields';
  backlightontime?: Maybe<Scalars['smallint']>;
  batterymode?: Maybe<Scalars['String']>;
  boostingenergy?: Maybe<Scalars['smallint']>;
  chargecompletedelay?: Maybe<Scalars['Int']>;
  compatibilitymodeminpwm?: Maybe<Scalars['Float']>;
  compatibilitymodepowerfactor?: Maybe<Scalars['Float']>;
  contrastlevel?: Maybe<Scalars['smallint']>;
  ct1group?: Maybe<Scalars['smallint']>;
  ct1grouplimit?: Maybe<Scalars['smallint']>;
  ct1subtype?: Maybe<Scalars['String']>;
  ct1type?: Maybe<Scalars['String']>;
  ct2group?: Maybe<Scalars['smallint']>;
  ct2grouplimit?: Maybe<Scalars['smallint']>;
  ct2subtype?: Maybe<Scalars['String']>;
  ct2type?: Maybe<Scalars['String']>;
  ct3group?: Maybe<Scalars['smallint']>;
  ct3grouplimit?: Maybe<Scalars['smallint']>;
  ct3subtype?: Maybe<Scalars['String']>;
  ct3type?: Maybe<Scalars['String']>;
  ct4grouplimit?: Maybe<Scalars['smallint']>;
  ctinternalgroup?: Maybe<Scalars['smallint']>;
  ctprimary?: Maybe<Scalars['smallint']>;
  dateformat?: Maybe<Scalars['String']>;
  defaultmode?: Maybe<Scalars['String']>;
  deviceconfigtime?: Maybe<Scalars['bigint']>;
  devicelimit?: Maybe<Scalars['Float']>;
  earthing?: Maybe<Scalars['String']>;
  ecopstopdelay?: Maybe<Scalars['smallint']>;
  esenseinput?: Maybe<Scalars['String']>;
  esenselimitpwm?: Maybe<Scalars['smallint']>;
  exportmargin?: Maybe<Scalars['Int']>;
  gentypeicon?: Maybe<Scalars['String']>;
  gridlimit?: Maybe<Scalars['Int']>;
  gridpowerlimit?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  ledbrightness?: Maybe<Scalars['smallint']>;
  lockcode?: Maybe<Scalars['Int']>;
  locksolenoidpwm?: Maybe<Scalars['Int']>;
  locktimeout?: Maybe<Scalars['smallint']>;
  mainswitchpwm?: Maybe<Scalars['Int']>;
  mingreenlevel?: Maybe<Scalars['smallint']>;
  neutrallimit?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['Int']>;
  perelaypwm?: Maybe<Scalars['Int']>;
  phasereturn?: Maybe<Scalars['String']>;
  preconenergy?: Maybe<Scalars['smallint']>;
  randomdelaystart?: Maybe<Scalars['smallint']>;
  relay1pwm?: Maybe<Scalars['Int']>;
  relay2pwm?: Maybe<Scalars['Int']>;
  serverconfigtime?: Maybe<Scalars['Int']>;
  signature?: Maybe<Scalars['bigint']>;
  smartboostenergy?: Maybe<Scalars['smallint']>;
  smartboosthour?: Maybe<Scalars['smallint']>;
  smartboostminute?: Maybe<Scalars['smallint']>;
  startstoptimer?: Maybe<Scalars['smallint']>;
  timezone?: Maybe<Scalars['String']>;
  weldedrelaycheckdelay?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Zappi2_Config_Reply_Data_Min_Fields = {
  __typename?: 'zappi2_config_reply_data_min_fields';
  backlightontime?: Maybe<Scalars['smallint']>;
  batterymode?: Maybe<Scalars['String']>;
  boostingenergy?: Maybe<Scalars['smallint']>;
  chargecompletedelay?: Maybe<Scalars['Int']>;
  compatibilitymodeminpwm?: Maybe<Scalars['Float']>;
  compatibilitymodepowerfactor?: Maybe<Scalars['Float']>;
  contrastlevel?: Maybe<Scalars['smallint']>;
  ct1group?: Maybe<Scalars['smallint']>;
  ct1grouplimit?: Maybe<Scalars['smallint']>;
  ct1subtype?: Maybe<Scalars['String']>;
  ct1type?: Maybe<Scalars['String']>;
  ct2group?: Maybe<Scalars['smallint']>;
  ct2grouplimit?: Maybe<Scalars['smallint']>;
  ct2subtype?: Maybe<Scalars['String']>;
  ct2type?: Maybe<Scalars['String']>;
  ct3group?: Maybe<Scalars['smallint']>;
  ct3grouplimit?: Maybe<Scalars['smallint']>;
  ct3subtype?: Maybe<Scalars['String']>;
  ct3type?: Maybe<Scalars['String']>;
  ct4grouplimit?: Maybe<Scalars['smallint']>;
  ctinternalgroup?: Maybe<Scalars['smallint']>;
  ctprimary?: Maybe<Scalars['smallint']>;
  dateformat?: Maybe<Scalars['String']>;
  defaultmode?: Maybe<Scalars['String']>;
  deviceconfigtime?: Maybe<Scalars['bigint']>;
  devicelimit?: Maybe<Scalars['Float']>;
  earthing?: Maybe<Scalars['String']>;
  ecopstopdelay?: Maybe<Scalars['smallint']>;
  esenseinput?: Maybe<Scalars['String']>;
  esenselimitpwm?: Maybe<Scalars['smallint']>;
  exportmargin?: Maybe<Scalars['Int']>;
  gentypeicon?: Maybe<Scalars['String']>;
  gridlimit?: Maybe<Scalars['Int']>;
  gridpowerlimit?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  ledbrightness?: Maybe<Scalars['smallint']>;
  lockcode?: Maybe<Scalars['Int']>;
  locksolenoidpwm?: Maybe<Scalars['Int']>;
  locktimeout?: Maybe<Scalars['smallint']>;
  mainswitchpwm?: Maybe<Scalars['Int']>;
  mingreenlevel?: Maybe<Scalars['smallint']>;
  neutrallimit?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['Int']>;
  perelaypwm?: Maybe<Scalars['Int']>;
  phasereturn?: Maybe<Scalars['String']>;
  preconenergy?: Maybe<Scalars['smallint']>;
  randomdelaystart?: Maybe<Scalars['smallint']>;
  relay1pwm?: Maybe<Scalars['Int']>;
  relay2pwm?: Maybe<Scalars['Int']>;
  serverconfigtime?: Maybe<Scalars['Int']>;
  signature?: Maybe<Scalars['bigint']>;
  smartboostenergy?: Maybe<Scalars['smallint']>;
  smartboosthour?: Maybe<Scalars['smallint']>;
  smartboostminute?: Maybe<Scalars['smallint']>;
  startstoptimer?: Maybe<Scalars['smallint']>;
  timezone?: Maybe<Scalars['String']>;
  weldedrelaycheckdelay?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "zappi2_config_reply_data" */
export type Zappi2_Config_Reply_Data_Mutation_Response = {
  __typename?: 'zappi2_config_reply_data_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Zappi2_Config_Reply_Data>;
};

/** input type for inserting object relation for remote table "zappi2_config_reply_data" */
export type Zappi2_Config_Reply_Data_Obj_Rel_Insert_Input = {
  data: Zappi2_Config_Reply_Data_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Zappi2_Config_Reply_Data_On_Conflict>;
};

/** on_conflict condition type for table "zappi2_config_reply_data" */
export type Zappi2_Config_Reply_Data_On_Conflict = {
  constraint: Zappi2_Config_Reply_Data_Constraint;
  update_columns?: Array<Zappi2_Config_Reply_Data_Update_Column>;
  where?: InputMaybe<Zappi2_Config_Reply_Data_Bool_Exp>;
};

/** Ordering options when selecting data from "zappi2_config_reply_data". */
export type Zappi2_Config_Reply_Data_Order_By = {
  backlightontime?: InputMaybe<Order_By>;
  batterymode?: InputMaybe<Order_By>;
  boostingenergy?: InputMaybe<Order_By>;
  buzzeron?: InputMaybe<Order_By>;
  chargecompletedelay?: InputMaybe<Order_By>;
  chargein3phase?: InputMaybe<Order_By>;
  chargewhenpinlocked?: InputMaybe<Order_By>;
  compatibilitymodeactive?: InputMaybe<Order_By>;
  compatibilitymodeinfinitepwm?: InputMaybe<Order_By>;
  compatibilitymodeminpwm?: InputMaybe<Order_By>;
  compatibilitymodepowerfactor?: InputMaybe<Order_By>;
  config_reply?: InputMaybe<Config_Reply_Order_By>;
  config_reply_boost_timers_aggregate?: InputMaybe<Config_Reply_Boost_Timer_Aggregate_Order_By>;
  contrastlevel?: InputMaybe<Order_By>;
  ct1g100?: InputMaybe<Order_By>;
  ct1group?: InputMaybe<Order_By>;
  ct1grouplimit?: InputMaybe<Order_By>;
  ct1subtype?: InputMaybe<Order_By>;
  ct1type?: InputMaybe<Order_By>;
  ct2g100?: InputMaybe<Order_By>;
  ct2group?: InputMaybe<Order_By>;
  ct2grouplimit?: InputMaybe<Order_By>;
  ct2subtype?: InputMaybe<Order_By>;
  ct2type?: InputMaybe<Order_By>;
  ct3g100?: InputMaybe<Order_By>;
  ct3group?: InputMaybe<Order_By>;
  ct3grouplimit?: InputMaybe<Order_By>;
  ct3subtype?: InputMaybe<Order_By>;
  ct3type?: InputMaybe<Order_By>;
  ct4grouplimit?: InputMaybe<Order_By>;
  ctinternalgroup?: InputMaybe<Order_By>;
  ctprimary?: InputMaybe<Order_By>;
  dateformat?: InputMaybe<Order_By>;
  defaultmode?: InputMaybe<Order_By>;
  deviceconfigtime?: InputMaybe<Order_By>;
  devicelimit?: InputMaybe<Order_By>;
  dston?: InputMaybe<Order_By>;
  earthing?: InputMaybe<Order_By>;
  ecopstopdelay?: InputMaybe<Order_By>;
  esenseinput?: InputMaybe<Order_By>;
  esenselimitpwm?: InputMaybe<Order_By>;
  exportmargin?: InputMaybe<Order_By>;
  gentypeicon?: InputMaybe<Order_By>;
  gridlimit?: InputMaybe<Order_By>;
  gridpowerlimit?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  language?: InputMaybe<Order_By>;
  ledbrightness?: InputMaybe<Order_By>;
  ledchargecomplete?: InputMaybe<Order_By>;
  leddirtycharging?: InputMaybe<Order_By>;
  ledfault?: InputMaybe<Order_By>;
  ledgreencharging?: InputMaybe<Order_By>;
  ledmixcharging?: InputMaybe<Order_By>;
  ledstateb?: InputMaybe<Order_By>;
  lockcode?: InputMaybe<Order_By>;
  lockevplugged?: InputMaybe<Order_By>;
  lockevunplugged?: InputMaybe<Order_By>;
  lockhidereadings?: InputMaybe<Order_By>;
  locksolenoidpwm?: InputMaybe<Order_By>;
  locktimeout?: InputMaybe<Order_By>;
  mainswitchpwm?: InputMaybe<Order_By>;
  mingreenlevel?: InputMaybe<Order_By>;
  monitoringstatus?: InputMaybe<Order_By>;
  neutrallimit?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  perelaypwm?: InputMaybe<Order_By>;
  phasereturn?: InputMaybe<Order_By>;
  plugincharge?: InputMaybe<Order_By>;
  preconenergy?: InputMaybe<Order_By>;
  preconon?: InputMaybe<Order_By>;
  randomdelaystart?: InputMaybe<Order_By>;
  relay1pwm?: InputMaybe<Order_By>;
  relay2pwm?: InputMaybe<Order_By>;
  serverconfigtime?: InputMaybe<Order_By>;
  signature?: InputMaybe<Order_By>;
  smartboostenergy?: InputMaybe<Order_By>;
  smartboosthour?: InputMaybe<Order_By>;
  smartboostminute?: InputMaybe<Order_By>;
  startstoptimer?: InputMaybe<Order_By>;
  timefromcloud?: InputMaybe<Order_By>;
  timezone?: InputMaybe<Order_By>;
  weldedrelaycheckdelay?: InputMaybe<Order_By>;
};

/** primary key columns input for table: zappi2_config_reply_data */
export type Zappi2_Config_Reply_Data_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Zappi2_Config_Reply_Data_Prepend_Input = {
  ledchargecomplete?: InputMaybe<Scalars['jsonb']>;
  leddirtycharging?: InputMaybe<Scalars['jsonb']>;
  ledfault?: InputMaybe<Scalars['jsonb']>;
  ledgreencharging?: InputMaybe<Scalars['jsonb']>;
  ledmixcharging?: InputMaybe<Scalars['jsonb']>;
  ledstateb?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "zappi2_config_reply_data" */
export enum Zappi2_Config_Reply_Data_Select_Column {
  /** column name */
  Backlightontime = 'backlightontime',
  /** column name */
  Batterymode = 'batterymode',
  /** column name */
  Boostingenergy = 'boostingenergy',
  /** column name */
  Buzzeron = 'buzzeron',
  /** column name */
  Chargecompletedelay = 'chargecompletedelay',
  /** column name */
  Chargein3phase = 'chargein3phase',
  /** column name */
  Chargewhenpinlocked = 'chargewhenpinlocked',
  /** column name */
  Compatibilitymodeactive = 'compatibilitymodeactive',
  /** column name */
  Compatibilitymodeinfinitepwm = 'compatibilitymodeinfinitepwm',
  /** column name */
  Compatibilitymodeminpwm = 'compatibilitymodeminpwm',
  /** column name */
  Compatibilitymodepowerfactor = 'compatibilitymodepowerfactor',
  /** column name */
  Contrastlevel = 'contrastlevel',
  /** column name */
  Ct1g100 = 'ct1g100',
  /** column name */
  Ct1group = 'ct1group',
  /** column name */
  Ct1grouplimit = 'ct1grouplimit',
  /** column name */
  Ct1subtype = 'ct1subtype',
  /** column name */
  Ct1type = 'ct1type',
  /** column name */
  Ct2g100 = 'ct2g100',
  /** column name */
  Ct2group = 'ct2group',
  /** column name */
  Ct2grouplimit = 'ct2grouplimit',
  /** column name */
  Ct2subtype = 'ct2subtype',
  /** column name */
  Ct2type = 'ct2type',
  /** column name */
  Ct3g100 = 'ct3g100',
  /** column name */
  Ct3group = 'ct3group',
  /** column name */
  Ct3grouplimit = 'ct3grouplimit',
  /** column name */
  Ct3subtype = 'ct3subtype',
  /** column name */
  Ct3type = 'ct3type',
  /** column name */
  Ct4grouplimit = 'ct4grouplimit',
  /** column name */
  Ctinternalgroup = 'ctinternalgroup',
  /** column name */
  Ctprimary = 'ctprimary',
  /** column name */
  Dateformat = 'dateformat',
  /** column name */
  Defaultmode = 'defaultmode',
  /** column name */
  Deviceconfigtime = 'deviceconfigtime',
  /** column name */
  Devicelimit = 'devicelimit',
  /** column name */
  Dston = 'dston',
  /** column name */
  Earthing = 'earthing',
  /** column name */
  Ecopstopdelay = 'ecopstopdelay',
  /** column name */
  Esenseinput = 'esenseinput',
  /** column name */
  Esenselimitpwm = 'esenselimitpwm',
  /** column name */
  Exportmargin = 'exportmargin',
  /** column name */
  Gentypeicon = 'gentypeicon',
  /** column name */
  Gridlimit = 'gridlimit',
  /** column name */
  Gridpowerlimit = 'gridpowerlimit',
  /** column name */
  Id = 'id',
  /** column name */
  Language = 'language',
  /** column name */
  Ledbrightness = 'ledbrightness',
  /** column name */
  Ledchargecomplete = 'ledchargecomplete',
  /** column name */
  Leddirtycharging = 'leddirtycharging',
  /** column name */
  Ledfault = 'ledfault',
  /** column name */
  Ledgreencharging = 'ledgreencharging',
  /** column name */
  Ledmixcharging = 'ledmixcharging',
  /** column name */
  Ledstateb = 'ledstateb',
  /** column name */
  Lockcode = 'lockcode',
  /** column name */
  Lockevplugged = 'lockevplugged',
  /** column name */
  Lockevunplugged = 'lockevunplugged',
  /** column name */
  Lockhidereadings = 'lockhidereadings',
  /** column name */
  Locksolenoidpwm = 'locksolenoidpwm',
  /** column name */
  Locktimeout = 'locktimeout',
  /** column name */
  Mainswitchpwm = 'mainswitchpwm',
  /** column name */
  Mingreenlevel = 'mingreenlevel',
  /** column name */
  Monitoringstatus = 'monitoringstatus',
  /** column name */
  Neutrallimit = 'neutrallimit',
  /** column name */
  Password = 'password',
  /** column name */
  Perelaypwm = 'perelaypwm',
  /** column name */
  Phasereturn = 'phasereturn',
  /** column name */
  Plugincharge = 'plugincharge',
  /** column name */
  Preconenergy = 'preconenergy',
  /** column name */
  Preconon = 'preconon',
  /** column name */
  Randomdelaystart = 'randomdelaystart',
  /** column name */
  Relay1pwm = 'relay1pwm',
  /** column name */
  Relay2pwm = 'relay2pwm',
  /** column name */
  Serverconfigtime = 'serverconfigtime',
  /** column name */
  Signature = 'signature',
  /** column name */
  Smartboostenergy = 'smartboostenergy',
  /** column name */
  Smartboosthour = 'smartboosthour',
  /** column name */
  Smartboostminute = 'smartboostminute',
  /** column name */
  Startstoptimer = 'startstoptimer',
  /** column name */
  Timefromcloud = 'timefromcloud',
  /** column name */
  Timezone = 'timezone',
  /** column name */
  Weldedrelaycheckdelay = 'weldedrelaycheckdelay',
}

/** input type for updating data in table "zappi2_config_reply_data" */
export type Zappi2_Config_Reply_Data_Set_Input = {
  backlightontime?: InputMaybe<Scalars['smallint']>;
  batterymode?: InputMaybe<Scalars['String']>;
  boostingenergy?: InputMaybe<Scalars['smallint']>;
  buzzeron?: InputMaybe<Scalars['Boolean']>;
  chargecompletedelay?: InputMaybe<Scalars['Int']>;
  chargein3phase?: InputMaybe<Scalars['Boolean']>;
  chargewhenpinlocked?: InputMaybe<Scalars['Boolean']>;
  compatibilitymodeactive?: InputMaybe<Scalars['Boolean']>;
  compatibilitymodeinfinitepwm?: InputMaybe<Scalars['Boolean']>;
  compatibilitymodeminpwm?: InputMaybe<Scalars['Float']>;
  compatibilitymodepowerfactor?: InputMaybe<Scalars['Float']>;
  contrastlevel?: InputMaybe<Scalars['smallint']>;
  ct1g100?: InputMaybe<Scalars['Boolean']>;
  ct1group?: InputMaybe<Scalars['smallint']>;
  ct1grouplimit?: InputMaybe<Scalars['smallint']>;
  ct1subtype?: InputMaybe<Scalars['String']>;
  ct1type?: InputMaybe<Scalars['String']>;
  ct2g100?: InputMaybe<Scalars['Boolean']>;
  ct2group?: InputMaybe<Scalars['smallint']>;
  ct2grouplimit?: InputMaybe<Scalars['smallint']>;
  ct2subtype?: InputMaybe<Scalars['String']>;
  ct2type?: InputMaybe<Scalars['String']>;
  ct3g100?: InputMaybe<Scalars['Boolean']>;
  ct3group?: InputMaybe<Scalars['smallint']>;
  ct3grouplimit?: InputMaybe<Scalars['smallint']>;
  ct3subtype?: InputMaybe<Scalars['String']>;
  ct3type?: InputMaybe<Scalars['String']>;
  ct4grouplimit?: InputMaybe<Scalars['smallint']>;
  ctinternalgroup?: InputMaybe<Scalars['smallint']>;
  ctprimary?: InputMaybe<Scalars['smallint']>;
  dateformat?: InputMaybe<Scalars['String']>;
  defaultmode?: InputMaybe<Scalars['String']>;
  deviceconfigtime?: InputMaybe<Scalars['bigint']>;
  devicelimit?: InputMaybe<Scalars['Float']>;
  dston?: InputMaybe<Scalars['Boolean']>;
  earthing?: InputMaybe<Scalars['String']>;
  ecopstopdelay?: InputMaybe<Scalars['smallint']>;
  esenseinput?: InputMaybe<Scalars['String']>;
  esenselimitpwm?: InputMaybe<Scalars['smallint']>;
  exportmargin?: InputMaybe<Scalars['Int']>;
  gentypeicon?: InputMaybe<Scalars['String']>;
  gridlimit?: InputMaybe<Scalars['Int']>;
  gridpowerlimit?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  ledbrightness?: InputMaybe<Scalars['smallint']>;
  ledchargecomplete?: InputMaybe<Scalars['jsonb']>;
  leddirtycharging?: InputMaybe<Scalars['jsonb']>;
  ledfault?: InputMaybe<Scalars['jsonb']>;
  ledgreencharging?: InputMaybe<Scalars['jsonb']>;
  ledmixcharging?: InputMaybe<Scalars['jsonb']>;
  ledstateb?: InputMaybe<Scalars['jsonb']>;
  lockcode?: InputMaybe<Scalars['Int']>;
  lockevplugged?: InputMaybe<Scalars['Boolean']>;
  lockevunplugged?: InputMaybe<Scalars['Boolean']>;
  lockhidereadings?: InputMaybe<Scalars['Boolean']>;
  locksolenoidpwm?: InputMaybe<Scalars['Int']>;
  locktimeout?: InputMaybe<Scalars['smallint']>;
  mainswitchpwm?: InputMaybe<Scalars['Int']>;
  mingreenlevel?: InputMaybe<Scalars['smallint']>;
  monitoringstatus?: InputMaybe<Scalars['Boolean']>;
  neutrallimit?: InputMaybe<Scalars['Int']>;
  password?: InputMaybe<Scalars['Int']>;
  perelaypwm?: InputMaybe<Scalars['Int']>;
  phasereturn?: InputMaybe<Scalars['String']>;
  plugincharge?: InputMaybe<Scalars['Boolean']>;
  preconenergy?: InputMaybe<Scalars['smallint']>;
  preconon?: InputMaybe<Scalars['Boolean']>;
  randomdelaystart?: InputMaybe<Scalars['smallint']>;
  relay1pwm?: InputMaybe<Scalars['Int']>;
  relay2pwm?: InputMaybe<Scalars['Int']>;
  serverconfigtime?: InputMaybe<Scalars['Int']>;
  signature?: InputMaybe<Scalars['bigint']>;
  smartboostenergy?: InputMaybe<Scalars['smallint']>;
  smartboosthour?: InputMaybe<Scalars['smallint']>;
  smartboostminute?: InputMaybe<Scalars['smallint']>;
  startstoptimer?: InputMaybe<Scalars['smallint']>;
  timefromcloud?: InputMaybe<Scalars['Boolean']>;
  timezone?: InputMaybe<Scalars['String']>;
  weldedrelaycheckdelay?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Zappi2_Config_Reply_Data_Stddev_Fields = {
  __typename?: 'zappi2_config_reply_data_stddev_fields';
  backlightontime?: Maybe<Scalars['Float']>;
  boostingenergy?: Maybe<Scalars['Float']>;
  chargecompletedelay?: Maybe<Scalars['Float']>;
  compatibilitymodeminpwm?: Maybe<Scalars['Float']>;
  compatibilitymodepowerfactor?: Maybe<Scalars['Float']>;
  contrastlevel?: Maybe<Scalars['Float']>;
  ct1group?: Maybe<Scalars['Float']>;
  ct1grouplimit?: Maybe<Scalars['Float']>;
  ct2group?: Maybe<Scalars['Float']>;
  ct2grouplimit?: Maybe<Scalars['Float']>;
  ct3group?: Maybe<Scalars['Float']>;
  ct3grouplimit?: Maybe<Scalars['Float']>;
  ct4grouplimit?: Maybe<Scalars['Float']>;
  ctinternalgroup?: Maybe<Scalars['Float']>;
  ctprimary?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  devicelimit?: Maybe<Scalars['Float']>;
  ecopstopdelay?: Maybe<Scalars['Float']>;
  esenselimitpwm?: Maybe<Scalars['Float']>;
  exportmargin?: Maybe<Scalars['Float']>;
  gridlimit?: Maybe<Scalars['Float']>;
  gridpowerlimit?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  ledbrightness?: Maybe<Scalars['Float']>;
  lockcode?: Maybe<Scalars['Float']>;
  locksolenoidpwm?: Maybe<Scalars['Float']>;
  locktimeout?: Maybe<Scalars['Float']>;
  mainswitchpwm?: Maybe<Scalars['Float']>;
  mingreenlevel?: Maybe<Scalars['Float']>;
  neutrallimit?: Maybe<Scalars['Float']>;
  password?: Maybe<Scalars['Float']>;
  perelaypwm?: Maybe<Scalars['Float']>;
  preconenergy?: Maybe<Scalars['Float']>;
  randomdelaystart?: Maybe<Scalars['Float']>;
  relay1pwm?: Maybe<Scalars['Float']>;
  relay2pwm?: Maybe<Scalars['Float']>;
  serverconfigtime?: Maybe<Scalars['Float']>;
  signature?: Maybe<Scalars['Float']>;
  smartboostenergy?: Maybe<Scalars['Float']>;
  smartboosthour?: Maybe<Scalars['Float']>;
  smartboostminute?: Maybe<Scalars['Float']>;
  startstoptimer?: Maybe<Scalars['Float']>;
  weldedrelaycheckdelay?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Zappi2_Config_Reply_Data_Stddev_Pop_Fields = {
  __typename?: 'zappi2_config_reply_data_stddev_pop_fields';
  backlightontime?: Maybe<Scalars['Float']>;
  boostingenergy?: Maybe<Scalars['Float']>;
  chargecompletedelay?: Maybe<Scalars['Float']>;
  compatibilitymodeminpwm?: Maybe<Scalars['Float']>;
  compatibilitymodepowerfactor?: Maybe<Scalars['Float']>;
  contrastlevel?: Maybe<Scalars['Float']>;
  ct1group?: Maybe<Scalars['Float']>;
  ct1grouplimit?: Maybe<Scalars['Float']>;
  ct2group?: Maybe<Scalars['Float']>;
  ct2grouplimit?: Maybe<Scalars['Float']>;
  ct3group?: Maybe<Scalars['Float']>;
  ct3grouplimit?: Maybe<Scalars['Float']>;
  ct4grouplimit?: Maybe<Scalars['Float']>;
  ctinternalgroup?: Maybe<Scalars['Float']>;
  ctprimary?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  devicelimit?: Maybe<Scalars['Float']>;
  ecopstopdelay?: Maybe<Scalars['Float']>;
  esenselimitpwm?: Maybe<Scalars['Float']>;
  exportmargin?: Maybe<Scalars['Float']>;
  gridlimit?: Maybe<Scalars['Float']>;
  gridpowerlimit?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  ledbrightness?: Maybe<Scalars['Float']>;
  lockcode?: Maybe<Scalars['Float']>;
  locksolenoidpwm?: Maybe<Scalars['Float']>;
  locktimeout?: Maybe<Scalars['Float']>;
  mainswitchpwm?: Maybe<Scalars['Float']>;
  mingreenlevel?: Maybe<Scalars['Float']>;
  neutrallimit?: Maybe<Scalars['Float']>;
  password?: Maybe<Scalars['Float']>;
  perelaypwm?: Maybe<Scalars['Float']>;
  preconenergy?: Maybe<Scalars['Float']>;
  randomdelaystart?: Maybe<Scalars['Float']>;
  relay1pwm?: Maybe<Scalars['Float']>;
  relay2pwm?: Maybe<Scalars['Float']>;
  serverconfigtime?: Maybe<Scalars['Float']>;
  signature?: Maybe<Scalars['Float']>;
  smartboostenergy?: Maybe<Scalars['Float']>;
  smartboosthour?: Maybe<Scalars['Float']>;
  smartboostminute?: Maybe<Scalars['Float']>;
  startstoptimer?: Maybe<Scalars['Float']>;
  weldedrelaycheckdelay?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Zappi2_Config_Reply_Data_Stddev_Samp_Fields = {
  __typename?: 'zappi2_config_reply_data_stddev_samp_fields';
  backlightontime?: Maybe<Scalars['Float']>;
  boostingenergy?: Maybe<Scalars['Float']>;
  chargecompletedelay?: Maybe<Scalars['Float']>;
  compatibilitymodeminpwm?: Maybe<Scalars['Float']>;
  compatibilitymodepowerfactor?: Maybe<Scalars['Float']>;
  contrastlevel?: Maybe<Scalars['Float']>;
  ct1group?: Maybe<Scalars['Float']>;
  ct1grouplimit?: Maybe<Scalars['Float']>;
  ct2group?: Maybe<Scalars['Float']>;
  ct2grouplimit?: Maybe<Scalars['Float']>;
  ct3group?: Maybe<Scalars['Float']>;
  ct3grouplimit?: Maybe<Scalars['Float']>;
  ct4grouplimit?: Maybe<Scalars['Float']>;
  ctinternalgroup?: Maybe<Scalars['Float']>;
  ctprimary?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  devicelimit?: Maybe<Scalars['Float']>;
  ecopstopdelay?: Maybe<Scalars['Float']>;
  esenselimitpwm?: Maybe<Scalars['Float']>;
  exportmargin?: Maybe<Scalars['Float']>;
  gridlimit?: Maybe<Scalars['Float']>;
  gridpowerlimit?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  ledbrightness?: Maybe<Scalars['Float']>;
  lockcode?: Maybe<Scalars['Float']>;
  locksolenoidpwm?: Maybe<Scalars['Float']>;
  locktimeout?: Maybe<Scalars['Float']>;
  mainswitchpwm?: Maybe<Scalars['Float']>;
  mingreenlevel?: Maybe<Scalars['Float']>;
  neutrallimit?: Maybe<Scalars['Float']>;
  password?: Maybe<Scalars['Float']>;
  perelaypwm?: Maybe<Scalars['Float']>;
  preconenergy?: Maybe<Scalars['Float']>;
  randomdelaystart?: Maybe<Scalars['Float']>;
  relay1pwm?: Maybe<Scalars['Float']>;
  relay2pwm?: Maybe<Scalars['Float']>;
  serverconfigtime?: Maybe<Scalars['Float']>;
  signature?: Maybe<Scalars['Float']>;
  smartboostenergy?: Maybe<Scalars['Float']>;
  smartboosthour?: Maybe<Scalars['Float']>;
  smartboostminute?: Maybe<Scalars['Float']>;
  startstoptimer?: Maybe<Scalars['Float']>;
  weldedrelaycheckdelay?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Zappi2_Config_Reply_Data_Sum_Fields = {
  __typename?: 'zappi2_config_reply_data_sum_fields';
  backlightontime?: Maybe<Scalars['smallint']>;
  boostingenergy?: Maybe<Scalars['smallint']>;
  chargecompletedelay?: Maybe<Scalars['Int']>;
  compatibilitymodeminpwm?: Maybe<Scalars['Float']>;
  compatibilitymodepowerfactor?: Maybe<Scalars['Float']>;
  contrastlevel?: Maybe<Scalars['smallint']>;
  ct1group?: Maybe<Scalars['smallint']>;
  ct1grouplimit?: Maybe<Scalars['smallint']>;
  ct2group?: Maybe<Scalars['smallint']>;
  ct2grouplimit?: Maybe<Scalars['smallint']>;
  ct3group?: Maybe<Scalars['smallint']>;
  ct3grouplimit?: Maybe<Scalars['smallint']>;
  ct4grouplimit?: Maybe<Scalars['smallint']>;
  ctinternalgroup?: Maybe<Scalars['smallint']>;
  ctprimary?: Maybe<Scalars['smallint']>;
  deviceconfigtime?: Maybe<Scalars['bigint']>;
  devicelimit?: Maybe<Scalars['Float']>;
  ecopstopdelay?: Maybe<Scalars['smallint']>;
  esenselimitpwm?: Maybe<Scalars['smallint']>;
  exportmargin?: Maybe<Scalars['Int']>;
  gridlimit?: Maybe<Scalars['Int']>;
  gridpowerlimit?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  ledbrightness?: Maybe<Scalars['smallint']>;
  lockcode?: Maybe<Scalars['Int']>;
  locksolenoidpwm?: Maybe<Scalars['Int']>;
  locktimeout?: Maybe<Scalars['smallint']>;
  mainswitchpwm?: Maybe<Scalars['Int']>;
  mingreenlevel?: Maybe<Scalars['smallint']>;
  neutrallimit?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['Int']>;
  perelaypwm?: Maybe<Scalars['Int']>;
  preconenergy?: Maybe<Scalars['smallint']>;
  randomdelaystart?: Maybe<Scalars['smallint']>;
  relay1pwm?: Maybe<Scalars['Int']>;
  relay2pwm?: Maybe<Scalars['Int']>;
  serverconfigtime?: Maybe<Scalars['Int']>;
  signature?: Maybe<Scalars['bigint']>;
  smartboostenergy?: Maybe<Scalars['smallint']>;
  smartboosthour?: Maybe<Scalars['smallint']>;
  smartboostminute?: Maybe<Scalars['smallint']>;
  startstoptimer?: Maybe<Scalars['smallint']>;
  weldedrelaycheckdelay?: Maybe<Scalars['Int']>;
};

/** update columns of table "zappi2_config_reply_data" */
export enum Zappi2_Config_Reply_Data_Update_Column {
  /** column name */
  Backlightontime = 'backlightontime',
  /** column name */
  Batterymode = 'batterymode',
  /** column name */
  Boostingenergy = 'boostingenergy',
  /** column name */
  Buzzeron = 'buzzeron',
  /** column name */
  Chargecompletedelay = 'chargecompletedelay',
  /** column name */
  Chargein3phase = 'chargein3phase',
  /** column name */
  Chargewhenpinlocked = 'chargewhenpinlocked',
  /** column name */
  Compatibilitymodeactive = 'compatibilitymodeactive',
  /** column name */
  Compatibilitymodeinfinitepwm = 'compatibilitymodeinfinitepwm',
  /** column name */
  Compatibilitymodeminpwm = 'compatibilitymodeminpwm',
  /** column name */
  Compatibilitymodepowerfactor = 'compatibilitymodepowerfactor',
  /** column name */
  Contrastlevel = 'contrastlevel',
  /** column name */
  Ct1g100 = 'ct1g100',
  /** column name */
  Ct1group = 'ct1group',
  /** column name */
  Ct1grouplimit = 'ct1grouplimit',
  /** column name */
  Ct1subtype = 'ct1subtype',
  /** column name */
  Ct1type = 'ct1type',
  /** column name */
  Ct2g100 = 'ct2g100',
  /** column name */
  Ct2group = 'ct2group',
  /** column name */
  Ct2grouplimit = 'ct2grouplimit',
  /** column name */
  Ct2subtype = 'ct2subtype',
  /** column name */
  Ct2type = 'ct2type',
  /** column name */
  Ct3g100 = 'ct3g100',
  /** column name */
  Ct3group = 'ct3group',
  /** column name */
  Ct3grouplimit = 'ct3grouplimit',
  /** column name */
  Ct3subtype = 'ct3subtype',
  /** column name */
  Ct3type = 'ct3type',
  /** column name */
  Ct4grouplimit = 'ct4grouplimit',
  /** column name */
  Ctinternalgroup = 'ctinternalgroup',
  /** column name */
  Ctprimary = 'ctprimary',
  /** column name */
  Dateformat = 'dateformat',
  /** column name */
  Defaultmode = 'defaultmode',
  /** column name */
  Deviceconfigtime = 'deviceconfigtime',
  /** column name */
  Devicelimit = 'devicelimit',
  /** column name */
  Dston = 'dston',
  /** column name */
  Earthing = 'earthing',
  /** column name */
  Ecopstopdelay = 'ecopstopdelay',
  /** column name */
  Esenseinput = 'esenseinput',
  /** column name */
  Esenselimitpwm = 'esenselimitpwm',
  /** column name */
  Exportmargin = 'exportmargin',
  /** column name */
  Gentypeicon = 'gentypeicon',
  /** column name */
  Gridlimit = 'gridlimit',
  /** column name */
  Gridpowerlimit = 'gridpowerlimit',
  /** column name */
  Id = 'id',
  /** column name */
  Language = 'language',
  /** column name */
  Ledbrightness = 'ledbrightness',
  /** column name */
  Ledchargecomplete = 'ledchargecomplete',
  /** column name */
  Leddirtycharging = 'leddirtycharging',
  /** column name */
  Ledfault = 'ledfault',
  /** column name */
  Ledgreencharging = 'ledgreencharging',
  /** column name */
  Ledmixcharging = 'ledmixcharging',
  /** column name */
  Ledstateb = 'ledstateb',
  /** column name */
  Lockcode = 'lockcode',
  /** column name */
  Lockevplugged = 'lockevplugged',
  /** column name */
  Lockevunplugged = 'lockevunplugged',
  /** column name */
  Lockhidereadings = 'lockhidereadings',
  /** column name */
  Locksolenoidpwm = 'locksolenoidpwm',
  /** column name */
  Locktimeout = 'locktimeout',
  /** column name */
  Mainswitchpwm = 'mainswitchpwm',
  /** column name */
  Mingreenlevel = 'mingreenlevel',
  /** column name */
  Monitoringstatus = 'monitoringstatus',
  /** column name */
  Neutrallimit = 'neutrallimit',
  /** column name */
  Password = 'password',
  /** column name */
  Perelaypwm = 'perelaypwm',
  /** column name */
  Phasereturn = 'phasereturn',
  /** column name */
  Plugincharge = 'plugincharge',
  /** column name */
  Preconenergy = 'preconenergy',
  /** column name */
  Preconon = 'preconon',
  /** column name */
  Randomdelaystart = 'randomdelaystart',
  /** column name */
  Relay1pwm = 'relay1pwm',
  /** column name */
  Relay2pwm = 'relay2pwm',
  /** column name */
  Serverconfigtime = 'serverconfigtime',
  /** column name */
  Signature = 'signature',
  /** column name */
  Smartboostenergy = 'smartboostenergy',
  /** column name */
  Smartboosthour = 'smartboosthour',
  /** column name */
  Smartboostminute = 'smartboostminute',
  /** column name */
  Startstoptimer = 'startstoptimer',
  /** column name */
  Timefromcloud = 'timefromcloud',
  /** column name */
  Timezone = 'timezone',
  /** column name */
  Weldedrelaycheckdelay = 'weldedrelaycheckdelay',
}

/** aggregate var_pop on columns */
export type Zappi2_Config_Reply_Data_Var_Pop_Fields = {
  __typename?: 'zappi2_config_reply_data_var_pop_fields';
  backlightontime?: Maybe<Scalars['Float']>;
  boostingenergy?: Maybe<Scalars['Float']>;
  chargecompletedelay?: Maybe<Scalars['Float']>;
  compatibilitymodeminpwm?: Maybe<Scalars['Float']>;
  compatibilitymodepowerfactor?: Maybe<Scalars['Float']>;
  contrastlevel?: Maybe<Scalars['Float']>;
  ct1group?: Maybe<Scalars['Float']>;
  ct1grouplimit?: Maybe<Scalars['Float']>;
  ct2group?: Maybe<Scalars['Float']>;
  ct2grouplimit?: Maybe<Scalars['Float']>;
  ct3group?: Maybe<Scalars['Float']>;
  ct3grouplimit?: Maybe<Scalars['Float']>;
  ct4grouplimit?: Maybe<Scalars['Float']>;
  ctinternalgroup?: Maybe<Scalars['Float']>;
  ctprimary?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  devicelimit?: Maybe<Scalars['Float']>;
  ecopstopdelay?: Maybe<Scalars['Float']>;
  esenselimitpwm?: Maybe<Scalars['Float']>;
  exportmargin?: Maybe<Scalars['Float']>;
  gridlimit?: Maybe<Scalars['Float']>;
  gridpowerlimit?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  ledbrightness?: Maybe<Scalars['Float']>;
  lockcode?: Maybe<Scalars['Float']>;
  locksolenoidpwm?: Maybe<Scalars['Float']>;
  locktimeout?: Maybe<Scalars['Float']>;
  mainswitchpwm?: Maybe<Scalars['Float']>;
  mingreenlevel?: Maybe<Scalars['Float']>;
  neutrallimit?: Maybe<Scalars['Float']>;
  password?: Maybe<Scalars['Float']>;
  perelaypwm?: Maybe<Scalars['Float']>;
  preconenergy?: Maybe<Scalars['Float']>;
  randomdelaystart?: Maybe<Scalars['Float']>;
  relay1pwm?: Maybe<Scalars['Float']>;
  relay2pwm?: Maybe<Scalars['Float']>;
  serverconfigtime?: Maybe<Scalars['Float']>;
  signature?: Maybe<Scalars['Float']>;
  smartboostenergy?: Maybe<Scalars['Float']>;
  smartboosthour?: Maybe<Scalars['Float']>;
  smartboostminute?: Maybe<Scalars['Float']>;
  startstoptimer?: Maybe<Scalars['Float']>;
  weldedrelaycheckdelay?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Zappi2_Config_Reply_Data_Var_Samp_Fields = {
  __typename?: 'zappi2_config_reply_data_var_samp_fields';
  backlightontime?: Maybe<Scalars['Float']>;
  boostingenergy?: Maybe<Scalars['Float']>;
  chargecompletedelay?: Maybe<Scalars['Float']>;
  compatibilitymodeminpwm?: Maybe<Scalars['Float']>;
  compatibilitymodepowerfactor?: Maybe<Scalars['Float']>;
  contrastlevel?: Maybe<Scalars['Float']>;
  ct1group?: Maybe<Scalars['Float']>;
  ct1grouplimit?: Maybe<Scalars['Float']>;
  ct2group?: Maybe<Scalars['Float']>;
  ct2grouplimit?: Maybe<Scalars['Float']>;
  ct3group?: Maybe<Scalars['Float']>;
  ct3grouplimit?: Maybe<Scalars['Float']>;
  ct4grouplimit?: Maybe<Scalars['Float']>;
  ctinternalgroup?: Maybe<Scalars['Float']>;
  ctprimary?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  devicelimit?: Maybe<Scalars['Float']>;
  ecopstopdelay?: Maybe<Scalars['Float']>;
  esenselimitpwm?: Maybe<Scalars['Float']>;
  exportmargin?: Maybe<Scalars['Float']>;
  gridlimit?: Maybe<Scalars['Float']>;
  gridpowerlimit?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  ledbrightness?: Maybe<Scalars['Float']>;
  lockcode?: Maybe<Scalars['Float']>;
  locksolenoidpwm?: Maybe<Scalars['Float']>;
  locktimeout?: Maybe<Scalars['Float']>;
  mainswitchpwm?: Maybe<Scalars['Float']>;
  mingreenlevel?: Maybe<Scalars['Float']>;
  neutrallimit?: Maybe<Scalars['Float']>;
  password?: Maybe<Scalars['Float']>;
  perelaypwm?: Maybe<Scalars['Float']>;
  preconenergy?: Maybe<Scalars['Float']>;
  randomdelaystart?: Maybe<Scalars['Float']>;
  relay1pwm?: Maybe<Scalars['Float']>;
  relay2pwm?: Maybe<Scalars['Float']>;
  serverconfigtime?: Maybe<Scalars['Float']>;
  signature?: Maybe<Scalars['Float']>;
  smartboostenergy?: Maybe<Scalars['Float']>;
  smartboosthour?: Maybe<Scalars['Float']>;
  smartboostminute?: Maybe<Scalars['Float']>;
  startstoptimer?: Maybe<Scalars['Float']>;
  weldedrelaycheckdelay?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Zappi2_Config_Reply_Data_Variance_Fields = {
  __typename?: 'zappi2_config_reply_data_variance_fields';
  backlightontime?: Maybe<Scalars['Float']>;
  boostingenergy?: Maybe<Scalars['Float']>;
  chargecompletedelay?: Maybe<Scalars['Float']>;
  compatibilitymodeminpwm?: Maybe<Scalars['Float']>;
  compatibilitymodepowerfactor?: Maybe<Scalars['Float']>;
  contrastlevel?: Maybe<Scalars['Float']>;
  ct1group?: Maybe<Scalars['Float']>;
  ct1grouplimit?: Maybe<Scalars['Float']>;
  ct2group?: Maybe<Scalars['Float']>;
  ct2grouplimit?: Maybe<Scalars['Float']>;
  ct3group?: Maybe<Scalars['Float']>;
  ct3grouplimit?: Maybe<Scalars['Float']>;
  ct4grouplimit?: Maybe<Scalars['Float']>;
  ctinternalgroup?: Maybe<Scalars['Float']>;
  ctprimary?: Maybe<Scalars['Float']>;
  deviceconfigtime?: Maybe<Scalars['Float']>;
  devicelimit?: Maybe<Scalars['Float']>;
  ecopstopdelay?: Maybe<Scalars['Float']>;
  esenselimitpwm?: Maybe<Scalars['Float']>;
  exportmargin?: Maybe<Scalars['Float']>;
  gridlimit?: Maybe<Scalars['Float']>;
  gridpowerlimit?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  ledbrightness?: Maybe<Scalars['Float']>;
  lockcode?: Maybe<Scalars['Float']>;
  locksolenoidpwm?: Maybe<Scalars['Float']>;
  locktimeout?: Maybe<Scalars['Float']>;
  mainswitchpwm?: Maybe<Scalars['Float']>;
  mingreenlevel?: Maybe<Scalars['Float']>;
  neutrallimit?: Maybe<Scalars['Float']>;
  password?: Maybe<Scalars['Float']>;
  perelaypwm?: Maybe<Scalars['Float']>;
  preconenergy?: Maybe<Scalars['Float']>;
  randomdelaystart?: Maybe<Scalars['Float']>;
  relay1pwm?: Maybe<Scalars['Float']>;
  relay2pwm?: Maybe<Scalars['Float']>;
  serverconfigtime?: Maybe<Scalars['Float']>;
  signature?: Maybe<Scalars['Float']>;
  smartboostenergy?: Maybe<Scalars['Float']>;
  smartboosthour?: Maybe<Scalars['Float']>;
  smartboostminute?: Maybe<Scalars['Float']>;
  startstoptimer?: Maybe<Scalars['Float']>;
  weldedrelaycheckdelay?: Maybe<Scalars['Float']>;
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
  config_reply?: InputMaybe<Config_Reply_Bool_Exp>;
  configappdata?: InputMaybe<Bytea_Comparison_Exp>;
  configappdone?: InputMaybe<Boolean_Comparison_Exp>;
  configbootdata?: InputMaybe<Bytea_Comparison_Exp>;
  configbootdone?: InputMaybe<Boolean_Comparison_Exp>;
  configlength?: InputMaybe<Smallint_Comparison_Exp>;
  configoffset?: InputMaybe<Smallint_Comparison_Exp>;
  configstate?: InputMaybe<Smallint_Comparison_Exp>;
  configstructure?: InputMaybe<Smallint_Comparison_Exp>;
  configversion?: InputMaybe<Smallint_Comparison_Exp>;
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
  maxpower?: InputMaybe<Int_Comparison_Exp>;
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
  voltage?: InputMaybe<Smallint_Comparison_Exp>;
  voltage2?: InputMaybe<Smallint_Comparison_Exp>;
  voltage3?: InputMaybe<Smallint_Comparison_Exp>;
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
  config_reply?: InputMaybe<Config_Reply_Obj_Rel_Insert_Input>;
  configappdata?: InputMaybe<Scalars['bytea']>;
  configappdone?: InputMaybe<Scalars['Boolean']>;
  configbootdata?: InputMaybe<Scalars['bytea']>;
  configbootdone?: InputMaybe<Scalars['Boolean']>;
  configlength?: InputMaybe<Scalars['smallint']>;
  configoffset?: InputMaybe<Scalars['smallint']>;
  configstate?: InputMaybe<Scalars['smallint']>;
  configstructure?: InputMaybe<Scalars['smallint']>;
  configversion?: InputMaybe<Scalars['smallint']>;
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
  maxpower?: InputMaybe<Scalars['Int']>;
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
  voltage?: InputMaybe<Scalars['smallint']>;
  voltage2?: InputMaybe<Scalars['smallint']>;
  voltage3?: InputMaybe<Scalars['smallint']>;
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
  Pk_5f4400bed8cbe77429781c5f9b3 = 'PK_5f4400bed8cbe77429781c5f9b3',
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
  config_reply?: InputMaybe<Config_Reply_Order_By>;
  configappdata?: InputMaybe<Order_By>;
  configappdone?: InputMaybe<Order_By>;
  configbootdata?: InputMaybe<Order_By>;
  configbootdone?: InputMaybe<Order_By>;
  configlength?: InputMaybe<Order_By>;
  configoffset?: InputMaybe<Order_By>;
  configstate?: InputMaybe<Order_By>;
  configstructure?: InputMaybe<Order_By>;
  configversion?: InputMaybe<Order_By>;
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
  maxpower?: InputMaybe<Order_By>;
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
  voltage?: InputMaybe<Order_By>;
  voltage2?: InputMaybe<Order_By>;
  voltage3?: InputMaybe<Order_By>;
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
  Maxpower = 'maxpower',
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
  Voltage = 'voltage',
  /** column name */
  Voltage2 = 'voltage2',
  /** column name */
  Voltage3 = 'voltage3',
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
  frequency?: InputMaybe<Scalars['smallint']>;
  highpower?: InputMaybe<Scalars['Boolean']>;
  hubserialno?: InputMaybe<Scalars['bigint']>;
  isaggregated?: InputMaybe<Scalars['Boolean']>;
  lockedstatuschargesessionallowed?: InputMaybe<Scalars['Boolean']>;
  lockedstatuschargewhenlocked?: InputMaybe<Scalars['Boolean']>;
  lockedstatuslockednow?: InputMaybe<Scalars['Boolean']>;
  lockedstatuslockwhenpluggedin?: InputMaybe<Scalars['Boolean']>;
  lockedstatuslockwhenunplugged?: InputMaybe<Scalars['Boolean']>;
  maxpower?: InputMaybe<Scalars['Int']>;
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
  voltage?: InputMaybe<Scalars['smallint']>;
  voltage2?: InputMaybe<Scalars['smallint']>;
  voltage3?: InputMaybe<Scalars['smallint']>;
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
  Maxpower = 'maxpower',
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
  Voltage = 'voltage',
  /** column name */
  Voltage2 = 'voltage2',
  /** column name */
  Voltage3 = 'voltage3',
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

export type DevicesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;

export type DevicesQuery = {
  __typename?: 'query_root';
  zappis: Array<{ __typename?: 'zappi'; serialNo: any; deviceClass: string; productCode?: any | null }>;
  eddis: Array<{ __typename?: 'eddi'; serialNo: any; deviceClass: string; productCode?: any | null }>;
};

export type DeviceQueryVariables = Exact<{
  id: Scalars['bigint'];
}>;

export type DeviceQuery = {
  __typename?: 'query_root';
  zappi?: { __typename?: 'zappi'; serialNo: any; deviceClass: string; productCode?: any | null } | null;
  eddi?: { __typename?: 'eddi'; serialNo: any; deviceClass: string; productCode?: any | null } | null;
};

export type DeviceStatusQueryVariables = Exact<{
  id: Scalars['bigint'];
}>;

export type DeviceStatusQuery = {
  __typename?: 'query_root';
  zappi?: { __typename?: 'zappi'; voltage?: any | null; frequency?: any | null; serialNo: any } | null;
  eddi?: { __typename?: 'eddi'; voltage?: any | null; frequency?: any | null; serialNo: any } | null;
};

export type ZappiDataFragment = { __typename?: 'zappi'; serialNo: any; deviceClass: string; productCode?: any | null };

export type EddiDataFragment = { __typename?: 'eddi'; serialNo: any; deviceClass: string; productCode?: any | null };

export type ZappiStatusFragment = { __typename?: 'zappi'; voltage?: any | null; frequency?: any | null; serialNo: any };

export type EddiStatusFragment = { __typename?: 'eddi'; voltage?: any | null; frequency?: any | null; serialNo: any };

export const ZappiDataFragmentDoc = gql`
  fragment ZappiData on zappi {
    serialNo: serialno
    deviceClass: deviceclass
    productCode: productcode
  }
`;
export const EddiDataFragmentDoc = gql`
  fragment EddiData on eddi {
    serialNo: serialno
    deviceClass: deviceclass
    productCode: productcode
  }
`;
export const ZappiStatusFragmentDoc = gql`
  fragment ZappiStatus on zappi {
    serialNo: serialno
    voltage
    frequency
  }
`;
export const EddiStatusFragmentDoc = gql`
  fragment EddiStatus on eddi {
    serialNo: serialno
    voltage
    frequency
  }
`;
export const DevicesDocument = gql`
  query Devices($limit: Int, $offset: Int) {
    zappis: zappi(limit: $limit, offset: $offset) {
      ...ZappiData
    }
    eddis: eddi(limit: $limit, offset: $offset) {
      ...EddiData
    }
  }
  ${ZappiDataFragmentDoc}
  ${EddiDataFragmentDoc}
`;
export const DeviceDocument = gql`
  query Device($id: bigint!) {
    zappi: zappi_by_pk(serialno: $id) {
      ...ZappiData
    }
    eddi: eddi_by_pk(serialno: $id) {
      ...EddiData
    }
  }
  ${ZappiDataFragmentDoc}
  ${EddiDataFragmentDoc}
`;
export const DeviceStatusDocument = gql`
  query DeviceStatus($id: bigint!) {
    zappi: zappi_by_pk(serialno: $id) {
      ...ZappiStatus
    }
    eddi: eddi_by_pk(serialno: $id) {
      ...EddiStatus
    }
  }
  ${ZappiStatusFragmentDoc}
  ${EddiStatusFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Devices(variables?: DevicesQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<DevicesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DevicesQuery>(DevicesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }),
        'Devices'
      );
    },
    Device(variables: DeviceQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<DeviceQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeviceQuery>(DeviceDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }),
        'Device'
      );
    },
    DeviceStatus(
      variables: DeviceStatusQueryVariables,
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
  };
}
export type Sdk = ReturnType<typeof getSdk>;
