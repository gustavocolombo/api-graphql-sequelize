import { Inject } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { UsersEntity } from '../entities/users.entity';

@Resolver(() => UsersEntity)
export class UserResolver {
  constructor(
    @Inject('USERS_REPOSITORY') private usersRepository: typeof UsersEntity,
  ) {}

  @Query(() => String)
  public async firstQuery() {
    return 'Hello World';
  }
}
