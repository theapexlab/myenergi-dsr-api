import { expressjwt } from 'express-jwt';

export const testJwt = expressjwt({
  secret: 'test',
  algorithms: ['HS256'],
  credentialsRequired: false,
});
