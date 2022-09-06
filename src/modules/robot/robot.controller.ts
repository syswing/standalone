import { Controller, Post, Query, Req } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import {RobotService} from './robot.service'

@ApiTags('Robot')
@Controller('Robot')
export class RobotController {
	constructor(private readonly RobotService: RobotService) { }

	@Post('verify')
	verify(@Req() request){
		return this.RobotService.verify()
	}

	@Post('bind')
	@ApiQuery({ name:'qq',type:'string',required:true})
	@ApiQuery({ name:'sessionKey',type:'string',required:true})
	bind(@Req() request){
		return this.RobotService.bind(request.sessionKey,request.qq)
	}
}

