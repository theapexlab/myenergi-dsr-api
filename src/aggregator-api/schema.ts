import { UserInputError } from 'apollo-server-express';
import { buildSchemaSync } from 'type-graphql';
import { authChecker } from '../lib/auth/auth-checker';
import { AdminGroupResolver } from '../lib/models/admin-group';
import { ControlGroupResolver } from '../lib/models/control-group';
import { DeviceResolver } from '../lib/models/device';
import { DeviceHistoryArgs } from '../lib/models/device-history/deviceHistory.args';
import { DeviceStatusResolver } from '../lib/models/device-status';
import { isValidDateOrder, isValidDateRange } from '../lib/utils/validateStartEndDate';

export const schema = buildSchemaSync({
  resolvers: [AdminGroupResolver, DeviceResolver, DeviceStatusResolver, ControlGroupResolver],
  validate: (argValue, _argType) => {
    if (argValue instanceof DeviceHistoryArgs) {
      const { startDate: startDateString, endDate: endDateString } = argValue as DeviceHistoryArgs;
      const startDate = Date.parse(startDateString);
      if (isNaN(startDate)) {
        throw new UserInputError('The startDate must be a valid date string!');
      }
      const endDate = Date.parse(endDateString);
      if (isNaN(endDate)) {
        throw new UserInputError('The endDate must be a valid date string!');
      }
      if (!isValidDateOrder(new Date(startDate), new Date(endDate))) {
        throw new UserInputError('The endDate must be greater then the startDate!');
      }
      if (!isValidDateRange(new Date(startDate), new Date(endDate))) {
        throw new UserInputError('Maxium range limit (1day) between date exceeded!');
      }
    }
  },
  authChecker,
});