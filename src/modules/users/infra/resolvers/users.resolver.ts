import { BadRequestException, Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { hash } from 'bcryptjs';
import { UsersEntity } from '../entities/users.entity';
import { CreateUserInput } from '../inputs/create-user.input';
import { uuid } from 'uuidv4';

@Resolver(() => UsersEntity)
export class UserResolver {
  constructor(
    @Inject('USERS_REPOSITORY') private usersRepository: typeof UsersEntity,
  ) {}

  @Query(() => UsersEntity)
  public async queryUser(@Args('email') email: string) {
    return await this.usersRepository.findOne({
      where: { email },
    });
  }

  @Mutation(() => UsersEntity)
  public async createUser(
    @Args('data')
    {
      firstname,
      lastname,
      email,
      password,
      age,
      height,
      width,
    }: CreateUserInput,
  ) {
    const verifyUser = await this.usersRepository.findOne({
      where: { email },
    });

    if (verifyUser)
      throw new BadRequestException('Email already in use by another user');

    const user = await this.usersRepository.create({
      id: uuid(),
      firstname,
      lastname,
      email,
      password: await hash(password, 8),
      age,
      height,
      width,
    });

    return user;
  }
}
