import { Max, Min } from 'class-validator';
import { GraphQLScalarType, Kind } from 'graphql';
import { ArgsType, Field, Int } from 'type-graphql';
import { BadUserInputError } from '../../data-sources/CustomError';

export type SetLoadValue = 'min' | 'max' | 'nodsr' | number;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isOfTypeSetLoadValue = (input: any): input is SetLoadValue =>
  typeof input === 'number' || ['min', 'max', 'nodsr'].includes(input);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getSetLoadValue = (input: any): SetLoadValue => {
  if (!isOfTypeSetLoadValue(input)) {
    throw new BadUserInputError(`${input} is not a valid SetLoadValue`);
  }
  return input;
};

const SetLoadValueScalar = new GraphQLScalarType({
  name: 'SetLoadValue',
  description: 'SetLoadValue scalar type',
  serialize(value: unknown): SetLoadValue {
    return getSetLoadValue(value);
  },
  parseValue(value: unknown): SetLoadValue {
    return getSetLoadValue(value);
  },
  parseLiteral(ast): SetLoadValue {
    // check the type of received value
    if (ast.kind === Kind.INT) {
      const numValue = parseInt(ast.value, 10);
      return getSetLoadValue(numValue);
    }
    if (ast.kind === Kind.FLOAT) {
      const numValue = parseFloat(ast.value);
      return getSetLoadValue(numValue);
    }
    if (ast.kind === Kind.STRING) {
      const strValue = ast.value.toLocaleLowerCase();
      return getSetLoadValue(strValue);
    }
    throw new BadUserInputError('The input is not valid SetLoadValue');
  },
});

// Set load Command Args
@ArgsType()
export class SetLoadCommandBaseArgs {
  @Field(() => Int)
  @Min(1)
  @Max(15)
  csn: number;

  @Field(() => SetLoadValueScalar)
  value: SetLoadValue;

  @Field(() => Int, { description: 'Time to live in minutes' })
  @Min(1)
  @Max(240)
  ttl: number;
}

@ArgsType()
export class DevicesSetLoadCommandArgs extends SetLoadCommandBaseArgs {
  @Field(() => Int)
  serialNo: number;
}

@ArgsType()
export class GroupSetLoadCommandArgs extends SetLoadCommandBaseArgs {
  @Field(() => Int)
  id: number;
}

// Set Frequency Command Args
@ArgsType()
export class SetFrequencyCommandBaseArgs {
  @Field(() => Int, { description: 'Turn DOWN Activate Frequency in hundredths of a Hertz.' })
  @Min(4900)
  @Max(5100)
  DAF: number;

  @Field(() => Int, { description: 'Turn UP Activate Frequency in hundredths of a Hertz.' })
  @Min(4900)
  @Max(5100)
  UAF: number;

  @Field(() => Int, { description: 'Turn DOWN Deactivate Frequency in hundredths of a Hertz.' })
  @Min(4900)
  @Max(5100)
  DDF: number;

  @Field(() => Int, { description: 'Turn UP Deactivate Frequency in hundredths of a Hertz.' })
  @Min(4900)
  @Max(5100)
  UDF: number;
}

@ArgsType()
export class DeviceSetFrequencyCommandArgs extends SetFrequencyCommandBaseArgs {
  @Field(() => Int)
  serialNo: number;
}

@ArgsType()
export class GroupSetFrequencyCommandArgs extends SetFrequencyCommandBaseArgs {
  @Field(() => Int)
  id: number;
}
