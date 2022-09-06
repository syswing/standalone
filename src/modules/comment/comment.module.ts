import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { CommentController } from "./comment.controller";
import { CommentProviders } from "./comment.providers";
import { CommentService } from "./comment.service";

@Module({
	imports:[DatabaseModule],
	providers:[
		...CommentProviders,
		CommentService
	],
	controllers:[CommentController]
})
export class CommentModule {}