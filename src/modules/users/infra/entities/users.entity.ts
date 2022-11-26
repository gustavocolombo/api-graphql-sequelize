import { Field, ObjectType } from '@nestjs/graphql';
import { Model, Table, Column } from 'sequelize-typescript';

@Table
@ObjectType()
export class UsersEntity extends Model {
  @Column({ primaryKey: true })
  @Field()
  id: string;

  @Column
  @Field()
  firstname: string;

  @Column
  @Field()
  lastname: string;

  @Column
  @Field()
  email: string;

  @Column
  @Field()
  password: string;

  @Column
  @Field()
  age: string;

  @Column
  @Field()
  height: string;

  @Column
  @Field()
  width: string;
}
