import { DataSource } from 'typeorm';
import {Adventure} from './adventure.entity'

export const AdventureProviders = [
	{
		provide:"ADVENTURE_REPOSITORY",
		useFactory:(datasource : DataSource) => datasource.getRepository(Adventure),
		inject:['DATA_SOURCE']
	}
]
