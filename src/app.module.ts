import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { CatsService } from './modules/cats/cats.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AdventureModule } from './modules/adventure/adventure.module';
import { AdventureController } from './modules/adventure/adventure.controller';
@Module({
  imports: [
    // TypeOrmModule.forRoot(),
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   typePaths: ['./**/*.graphql'],
    //   context: ({ req }) => ({ headers: req.headers }),
    //   driver:ApolloDriver
    // }),
    ApiModule,
  ],
  controllers: [AppController,],
  providers: [AppService, CatsService],
})
export class AppModule {}
