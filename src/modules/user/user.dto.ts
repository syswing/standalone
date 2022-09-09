import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from'class-validator';

export class UserDto{
	@ApiProperty()
	account:string;

	@ApiProperty()
	username:string;

	@ApiProperty()
	avatar:string;

	@ApiProperty()
	email:string;
	
	@ApiProperty()
	password:string;
}
