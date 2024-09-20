import { Controller, Get, UseInterceptors,Query } from "@nestjs/common";
import { WeatherService } from "./weather.service";
import { ApiTags,ApiQuery } from "@nestjs/swagger";
import { ResultInterceptor } from "src/interceptors/resultInterceptor.interceptor";

@ApiTags('Weather')
@Controller('Weather')
@UseInterceptors(ResultInterceptor)
export class WeatherController {
	constructor(private readonly WeatherService: WeatherService) {}

 	@Get('getLocation')
  @ApiQuery({ name:'location',type:'string',required:true})
	getLocation(@Query() query){
		return this.WeatherService.getLocation(query.location)
	}
}

