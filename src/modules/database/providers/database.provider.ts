import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { UsersEntity } from '../../users/infra/entities/users.entity';
import { configDatabase } from './config';

export const DatabaseProvider = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: configDatabase.dialect,
        host: configDatabase.host,
        port: configDatabase.port,
        username: configDatabase.username,
        password: configDatabase.password,
        database: configDatabase.database,
      } as SequelizeOptions);
      sequelize.addModels([UsersEntity]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
