import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv'
dotenv.config()
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: process.env.DATABASE_TYPE as any,
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT as any,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_TYPE,
        synchronize: true,
				entities: [
					__dirname + '/../**/*.entity{.ts,.js}',
				]
      });

      return dataSource.initialize();
    },
  },
];