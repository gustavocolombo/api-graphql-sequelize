import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UsersRepository } from './infra/repositories/user.repository';
import { UserResolver } from './infra/resolvers/users.resolver';

@Module({
  imports: [DatabaseModule],
  providers: [UserResolver, ...UsersRepository],
})
export class UsersModule {}
