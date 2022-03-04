import { UserInputError } from 'apollo-server-express';
import { buildSchemaSync } from 'type-graphql';
import { ControlGroupResolver } from './control-group';
import { DeviceResolver } from './device';
import { DeviceHistoryResolver } from './device-history';
import { DeviceHistoryArgs } from './device-history/deviceHistory.args';
import { DeviceStatusResolver } from './device-status';
import { isValidDateOrder, isValidDateRange } from './utils/validateStartEndDate';

const schema = buildSchemaSync({
  resolvers: [DeviceResolver, DeviceStatusResolver, DeviceHistoryResolver, ControlGroupResolver],
  validate: (argValue, _argType) => {
    if (argValue instanceof DeviceHistoryArgs) {
      const { startDate, endDate } = argValue as DeviceHistoryArgs;
      if (!isValidDateOrder(startDate, endDate)) {
        throw new UserInputError('The endDate must be greater then the startDate!');
      }
      if (!isValidDateRange(startDate, endDate)) {
        throw new UserInputError('Maxium range limit (1day) between date exceeded!');
      }
    }
  },
});

export { schema };
