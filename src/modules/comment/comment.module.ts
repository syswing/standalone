import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { CommentController } from "./comment.controller";
import { CommentProviders } from "./comment.providers";
import { CommentService } from "./comment.service";
import { AdventureModule } from "../adventure/adventure.module";
import { AdventureProviders } from "../adventure/adventure.provider";

@Module({
	imports:[DatabaseModule],
	providers:[
		...CommentProviders,
		...AdventureProviders,
		CommentService
	],
	controllers:[CommentController],
	exports: [CommentService]
})
export class CommentModule {}