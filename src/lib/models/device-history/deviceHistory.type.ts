import { Field, ObjectType } from 'type-graphql';
import { EddiHistoryFragment, ZappiHistoryFragment } from '../../generated/graphql';

type DeviceHistoryBase = Omit<ZappiHistoryFragment | EddiHistoryFragment, '__typename'>;

@ObjectType()
export class DeviceHistory implements DeviceHistoryBase {
  @Field({ description: 'Serial Number of unit' })
  serialNo: number;

  @Field({ nullable: true, description: 'Imported Power in Watts' })
  importPower?: number;

  @Field({ nullable: true, description: 'Exported Power in Watts' })
  exportPower?: number;

  @Field({ nullable: true, description: 'External Current transformator Positive Generation in Watts on Phase 1' })
  externalCtPositivePower1?: number;

  @Field({ nullable: true, description: 'External Current transformator Positive Generation in Watts on Phase 2' })
  externalCtPositivePower2?: number;

  @Field({
    nullable: true,
    description: 'External Current transformator Positive Generation in Watts on Phase 3 (set only for Zappis)',
  })
  externalCtPositivePower3?: number;

  @Field({ nullable: true, description: 'External Current transformator Negative Generation in Watts on Phase 1' })
  externalCtNegativePower1?: number;

  @Field({ nullable: true, description: 'External Current transformator Negative Generation in Watts on Phase 2' })
  externalCtNegativePower2?: number;

  @Field({ nullable: true, description: 'External Current transformator Negative Generation in Watts on Phase 2' })
  externalCtNegativePower3?: number;

  @Field({ nullable: true, description: 'Diverted Load in Watts on Phase 1' })
  divertedLoadPower1?: number;

  @Field({ nullable: true, description: 'Diverted Load in Watts on Phase 2' })
  divertedLoadPower2?: number;

  @Field({ nullable: true, description: 'Diverted Load in Watts on Phase 3 (set only for Zappis)' })
  divertedLoadPower3?: number;

  @Field({ nullable: true, description: 'Boost Load in Watts on Phase 1' })
  boostLoadPower1?: number;

  @Field({ nullable: true, description: 'Boost Load in Watts on Phase 2' })
  boostLoadPower2?: number;

  @Field({ nullable: true, description: 'Boost Load in Watts on Phase3' })
  boostLoadPower3?: number;

  @Field({ nullable: true, description: 'Voltage Load in Watts on Phase 1' })
  voltage1?: number;

  @Field({ nullable: true, description: 'Voltage Load in Watts on Phase 2 (set only for Zappis)' })
  voltage2?: number;

  @Field({ nullable: true, description: 'Voltage Load in Watts on Phase 3 (set only for Zappis)' })
  voltage3?: number;

  @Field({ nullable: true, description: 'Frequency in 0.01Hz' })
  frequency?: number;

  @Field()
  timestamp: string;
}
