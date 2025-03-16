import { DataSource } from "typeorm";
import { Route } from "./routes.entity";

export const RouteProviders = [
	{
		provide: 'ROUTE_REPOSITORY',
		useFactory: (dataSource: DataSource) => dataSource.getRepository(Route),
		inject: ['DATA_SOURCE'],
	},
];
