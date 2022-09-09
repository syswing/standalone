import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserService{
	constructor(
		@Inject('USER_REPOSITORY')
		private userRepository:Repository<User>
	){}

	async register(query){
		const { account } = query
		const existUser = await this.userRepository.findOne({
      where: { account },
    });
		if(existUser){
			throw new HttpException("用户名已存在", HttpStatus.BAD_REQUEST)
		}
		const user = new User();
		user.account = query.account
		user.username = query.username
		user.password = query.password
		user.avatar = query.avatar
		user.email = query.email
		return this.userRepository.save(user);
	}

	async login(query){
		
	}
}
