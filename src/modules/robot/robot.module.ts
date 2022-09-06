import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import {RobotService} from './robot.service'
import { RobotController } from './robot.controller';
@Module({
	imports:[HttpModule.registerAsync({
		useFactory: () => ({
			timeout: 5000,
			maxRedirects: 5,
			baseURL:'http://127.0.0.1:8080',
			withCredentials:true
		}),
	})],
	providers:[RobotService],
	controllers:[RobotController]
})

export class RobotModule {}
