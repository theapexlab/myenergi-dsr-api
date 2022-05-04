import { expressjwt } from 'express-jwt';
import { customerApi } from '../lib/config';

export const authMiddleware = expressjwt({
  secret: customerApi.jwtSecret,
  algorithms: ['HS256'],
  credentialsRequired: false,
});
