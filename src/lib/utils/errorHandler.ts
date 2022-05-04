import type { ErrorHandler } from 'sofa-api/express';
import { logger } from './logger';

export enum ErrorCodes {
  NotFound = 'NOT_FOUND',
  Forbidden = 'FORBIDDEN',
  Unauthorized = 'UNAUTHORIZED',
}

type RouterError = {
  type: 'error';
  status: number;
  statusMessage?: string;
  error: any;
};

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
  return routerError;
};

// export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
//   console.log({ err });
//   next(err);

// logger.error(err.toString());
// if (err.toString().includes(ErrorMessages.NotFound)) {
//   res.status(404).send(err.message);
// } else {
//   next(err);
// }
// };

// export const ErrorInterceptor: MiddlewareFn<any> = async ({ context, info }, next) => {
//   try {
//     return await next();
//   } catch (err) {
//     // write error to file log
//     // fileLog.write(err, context, info);
//     console.log('ErrorInterceptor', { err });
//     // hide errors from db like printing sql query
//     // if (someCondition(err)) {
//     //   throw new Error('Unknown error occurred!');
//     // }

//     // rethrow the error
//     throw err;
//   }
// };
