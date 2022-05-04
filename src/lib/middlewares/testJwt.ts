import { RequestHandler } from 'express';
import { Permission } from '../services/jwtService';

export const testJwt: RequestHandler = (req, res, next) => {
  const authHeader = req.header('Authorization');
  // Basic adminName || Bearer aggregatorId
  const [tokenType, aggregatorId] = authHeader?.split(' ') ?? [];
  if (tokenType === 'Bearer' && ['/admin-api', '/admin-graphql'].includes(req.baseUrl)) {
    req['auth'] = {
      roles: [Permission.aggregatorManagement],
    };
    return next();
  }
  if (tokenType === 'Bearer') {
    req['auth'] = {
      client_id: aggregatorId,
    };
  }
  return next();
};
