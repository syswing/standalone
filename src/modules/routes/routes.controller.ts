import { Controller, Get, Post, Body, UseInterceptors, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';
import { RouteService } from './routes.service';
import { Route } from './routes.entity';
import { ResultInterceptor } from "src/interceptors/resultInterceptor.interceptor";

@ApiTags('routes')
@Controller('routes')
@UseInterceptors(ResultInterceptor)
export class RouteController {
  constructor(private readonly routeService: RouteService) {}

  @Post('create')
  @ApiOperation({ summary: '创建路由' })
  @ApiBody({ type: Route })
  async create(@Body() createRouteDto: Route) {
    return await this.routeService.addRoute(createRouteDto);
  }

  @Get('list')
  @ApiOperation({ summary: '获取所有路由' })
  async findAll(@Query() query) {
    return await this.routeService.list(query);
  }

  @Post('delete')
  @ApiOperation({ summary: '删除路由' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
      },
    },
  })
  async delete(@Body('id') id: number) {
    return await this.routeService.delRoute({ id });
  }

  @Post('remove')
  @ApiOperation({ summary: '移除路由' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
      },
    },
  })
  async remove(@Body('id') id: number) {
    return await this.routeService.removeRoute({ id });
  }

  @Post('update')
  @ApiOperation({ summary: '更新路由' })
  @ApiBody({ type: Route })
  async update(@Body() updateRouteDto: Route) {
    return await this.routeService.editRoute(updateRouteDto);
  }
}
