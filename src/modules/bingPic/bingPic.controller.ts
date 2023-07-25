import { Controller, Get, UseInterceptors } from "@nestjs/common";
import { BingPicService } from "./bingPic.service";
import { ApiTags } from "@nestjs/swagger";
import { ResultInterceptor } from "src/interceptors/resultInterceptor.interceptor";

@ApiTags('BingPic')
@Controller('BingPic')
@UseInterceptors(ResultInterceptor)
export class BingPicController {
	constructor(private readonly bingPicService: BingPicService) {}

	@Get('bingPic')
	bingPic(){
		return this.bingPicService.getPicture()
	}
}
