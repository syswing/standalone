import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { CatsService } from './cats.service';
import { ApiTags } from '@nestjs/swagger';

// @UseGuards(RolesGuard)
@Controller('cats')
export class CatsController {

	private readonly catsService:CatsService
	@Get('cats')
	findAll():string{
		return this.catsService.findAll()
	}
	@Post()
	create():string{
		return 'create cat'
	}
	
}
