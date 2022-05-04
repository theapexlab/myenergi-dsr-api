import { ApolloError } from 'apollo-server-errors';
import { ErrorCodes } from '../utils/errorHandler';

export class NotFoundError extends ApolloError {
  constructor(message: string) {
    super(message, ErrorCodes.NotFound);

    Object.defineProperty(this, 'name', { value: 'NotFoundError' });
  }
}
export class UnAuthorizedError extends ApolloError {
  constructor(message: string) {
    super(message, ErrorCodes.Forbidden);

    Object.defineProperty(this, 'name', { value: 'UnAuthorizedError' });
  }
}
