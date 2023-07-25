import { DataSource } from 'typeorm';
import { Picture } from './picture.entity'

export const PictureProviders = [
	{
		provide:"PICTURE_REPOSITORY",
		useFactory:(datasource : DataSource) => datasource.getRepository(Picture),
		inject:['DATA_SOURCE']
	}
]
