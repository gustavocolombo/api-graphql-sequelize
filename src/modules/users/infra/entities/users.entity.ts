import { Field, ObjectType } from '@nestjs/graphql';
import {
  Model,
  Table,
  Column,
  PrimaryKey,
  DataType,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: true,
})
@ObjectType()
export class UsersEntity extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
  })
  @Field()
  id: string;

  @Column({
    type: DataType.STRING,
  })
  @Field()
  firstname: string;

  @Column({
    type: DataType.STRING,
  })
  @Field()
  lastname: string;

  @Column({
    type: DataType.STRING,
  })
  @Field()
  email: string;

  @Column({
    type: DataType.STRING,
  })
  @Field()
  password: string;

  @Column({
    type: DataType.FLOAT,
  })
  @Field()
  age: number;

  @Column({
    type: DataType.FLOAT,
  })
  @Field()
  height: number;

  @Column({
    type: DataType.FLOAT,
  })
  @Field()
  width: number;

  @CreatedAt
  createdAt?: Date;

  @UpdatedAt
  updatedAt?: Date;
}
