import {  Controller, Get, Post, Query, UseInterceptors } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ResultInterceptor } from "src/interceptors/resultInterceptor.interceptor";
import { UserDto } from "./user.dto";
import { UserService } from "./user.service";

@ApiTags('user')
@Controller('user')
@UseInterceptors(ResultInterceptor)
export class UserController {
	constructor(private readonly userService:UserService){}

	@Post('register')
	register(@Query() query){
		return this.userService.register(query)
	}

	@Get('login')
	login(@Query() query){
		return this.userService.login(query)
	}
}