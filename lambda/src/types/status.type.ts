import { Field, ID, ObjectType } from 'type-graphql';

/*
GROUPABLE: YES
*/
@ObjectType()
export class GroupStatus {
  @Field(() => ID)
  serialNo: string | number;

  @Field({ description: 'Aggregator Name' })
  administrativeGroup: string;

  /*@Field({description: "A negative value indicates an error occurred. Otherwise the value is the command acknowledged y the unit."})
  errorCode: string;*/

  @Field({ description: 'Yes or No' })
  frequencyResponseAvailable: string;

  @Field({ description: 'I=Inactive, P=Proportional, S=Switched' })
  frequencyResponseMode: string;

  @Field({ description: 'Frequency in 0.01 Hz. 5000 typical (Averaged across group)' })
  frequency: string;
}

/*
GROUPABLE: NO
*/
@ObjectType()
export class DeviceStatus extends GroupStatus {
  @Field({ description: '3200 : Eddi (Heater controller) OR 3300 : Zappi (Carcharger)' })
  productCode: number;

  @Field({ description: '“” or “checked This value is always for list reports unless the server is in a test mode.' })
  anonymisedDataOnly: string;

  @Field({ description: 'Voltage in tenths of a volt' })
  volt: number;
}

/* {
  "sno": 10113185,
  "pco": 3300,
  "err": 2,
  "grd": 15,
  "vol": 228.8,
  "frq": 50.03,
  "fra": "",
  "frm": "I",
  "frs": "I",
  "daf": 4975,
  "ddf": 4980,
  "uaf": 5025,
  "udf": 5020,
  "dss": "A",
  "dat": "24-05-2019",
  "tim": "16:06:11",
  "agp": "evergreen",
  "cgp": "A"
}
*/
