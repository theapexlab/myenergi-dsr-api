import type { ErrorHandler } from 'sofa-api/express';
import { logger } from './logger';

export enum ErrorCodes {
  NotFound = 'NOT_FOUND',
  Forbidden = 'FORBIDDEN',
  Unauthorized = 'UNAUTHORIZED',
  UserInputError = 'BAD_USER_INPUT',
}

type RouterError = {
  type: 'error';
  status: number;
  statusMessage?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
};

// todo: APEX-88  this function currently does not intercept schema graphql validation errors, so those will have a different shape (html)
export const errorHandlerSofa: ErrorHandler = (errors) => {
  const error = errors[0];
  logger.error(error);

  const routerError: RouterError = {
    type: 'error',
    status: 500,
    statusMessage: 'Internal Server Error',
    error: {
      message: error.message,
    },
  };
  if (error.message.includes('Access denied')) {
    routerError.status = 401;
    routerError.statusMessage = ErrorCodes.Unauthorized;
  }
  if (error?.extensions.code === ErrorCodes.NotFound) {
    routerError.status = 404;
    routerError.statusMessage = ErrorCodes.NotFound;
  }
  if (error?.extensions.code === ErrorCodes.Forbidden) {
    routerError.status = 403;
    routerError.statusMessage = ErrorCodes.Forbidden;
  }
  if (error?.extensions.code === ErrorCodes.UserInputError) {
    routerError.status = 400;
    routerError.statusMessage = ErrorCodes.UserInputError;
  }
  return routerError;
};
