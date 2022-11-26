import { UsersEntity } from '../entities/users.entity';

export const UsersRepository = [
  {
    provide: 'USERS_REPOSITORY',
    useValue: UsersEntity,
  },
];
