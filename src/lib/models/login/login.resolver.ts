import { GraphQLError } from 'graphql';
import { Args, Mutation, Resolver } from 'type-graphql';
import { customerApi, superAdmin } from '../../config';
import { jwtService } from '../../services/jwtService';
import { LoginArgs } from './login.args';
import { LoginType } from './login.type';

@Resolver()
export class LoginResolver {
  @Mutation(() => LoginType)
  login(@Args() args: LoginArgs): LoginType {
    const { username, password } = args;
    if (username !== superAdmin.username || password !== superAdmin.password) {
      throw new GraphQLError('Wrong credentials!');
    }
    const token = jwtService.getToken(customerApi.jwtSecret, customerApi.expiresIn);
    return {
      token,
    };
  }
}
