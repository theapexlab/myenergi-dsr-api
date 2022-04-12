import { RequestHandler } from 'express';

export const testJwt: RequestHandler = (req, res, next) => {
  const authHeader = req.header('Authorization');
  // Basic adminName || Bearer aggregatorId
  const [tokenType, aggregatorId] = authHeader?.split(' ') ?? [];
  if (tokenType === 'Basic') {
    req['auth'] = {};
  }
  if (tokenType === 'Bearer') {
    req['user'] = {
      client_id: aggregatorId,
    };
  }
  return next();
};
