import { Injectable } from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";
import * as Mirai from 'node-mirai-sdk';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class RobotService {
	constructor(private readonly httpService: HttpService) { }
	async verify(){
		const res = await this.httpService.post('/verify', {
			verifyKey:'INITKEYXX0Nl9dy'
		}).toPromise()
		return res.data
	}

	async bind(sessionKey,qq){
		const res = await this.httpService.post('/bind', {
			sessionKey:sessionKey,
			qq:qq
		}).toPromise()
		return res.data
	}
}