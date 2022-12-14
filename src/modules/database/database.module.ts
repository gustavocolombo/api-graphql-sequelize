import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseProvider } from './providers/database.provider';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [...DatabaseProvider],
  exports: [...DatabaseProvider],
})
export class DatabaseModule {}
