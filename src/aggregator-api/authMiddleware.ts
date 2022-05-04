import { expressjwt } from 'express-jwt';
import jwksClient from 'jwks-rsa';
import { auth } from '../lib/config';

const region = auth.region;
const UserPoolId = auth.userPoolId;
const jwksUri = `https://cognito-idp.${region}.amazonaws.com/${UserPoolId}/.well-known/jwks.json`;

export const authMiddleware = expressjwt({
  secret: jwksClient.expressJwtSecret({ jwksUri }),
  algorithms: ['RS256'],
});
