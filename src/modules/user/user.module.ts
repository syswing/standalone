import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { UserController } from "./user.controller";
import { UserProviders } from "./user.providers";
import { UserService } from "./user.service";

@Module({
	imports:[DatabaseModule],
	providers:[
		...UserProviders,
		UserService
	],
	controllers:[UserController]
})
export class UserModule {}