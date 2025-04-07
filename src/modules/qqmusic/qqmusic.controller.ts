import { Controller, Get, Post, Req, Body, Query, Res } from '@nestjs/common';
import { ApiCookieAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { QQMusicService } from './qqmusic.service';

@ApiTags('QQMusic')
@ApiCookieAuth()
@Controller('QQMusic')
export class QQMusicController {
  constructor(private readonly QQMusicService: QQMusicService) {}

  @Get('setUserCookie')
  @ApiQuery({ name: 'cookies', type: 'string', required: true })
  setUserCookie(@Query() query, @Res({ passthrough: true }) response) {
    return this.QQMusicService.setUserCookie(query.cookies, response);
  }

  @Get('getUserCookie')
  @ApiQuery({ name: 'qqNo', type: 'string', required: true })
  getUserCookie(@Req() request, @Query() query, @Res({ passthrough: true }) response) {
    return this.QQMusicService.getUserCookie(query.qqNo, request.cookies, response);
  }

  @Get('userCookie')
  userCookie(@Req() request) {
    return this.QQMusicService.userCookie(request.cookies);
  }

  @Get('refreshLogin')
  refreshLogin(@Req() request) {
    return this.QQMusicService.refreshLogin(request.cookies);
  }

  @Get('userDetail')
  @ApiQuery({ name: 'qqNo', type: 'string', required: true })
  userDetail(@Query() query, @Req() request) {
    return this.QQMusicService.userDetail(query.qqNo, request.cookies);
  }

  @Get('songlist')
  @ApiQuery({ name: 'id', type: 'string', required: true })
  songlist(@Query() query, @Req() request) {
    return this.QQMusicService.songlist(query.id, request.cookies);
  }

  @Get('songurl')
  @ApiQuery({ name: 'songmid', type: 'string', required: true })
  songurl(@Query() query, @Req() request) {
    return this.QQMusicService.songurl(query.songmid, request.cookies);
  }
}
