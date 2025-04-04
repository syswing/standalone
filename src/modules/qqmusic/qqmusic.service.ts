import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class QQMusicService {
  constructor(private readonly httpService: HttpService) {}
  async setUserCookie(cookies, response) {
    const res = await this.httpService
      .post('/user/setCookie', {
        data: cookies,
      })
      .toPromise();
    cookies.split(';').forEach((cookieFields) => {
      const key = cookieFields.split('=')[0];
      const v = cookieFields.split('=')[1];
      response.cookie(key, v);
    });
    return res.data;
  }

  async getUserCookie(qqNo, cookies, response) {
    const res = await this.httpService
      .get(`/user/getCookie?id=${qqNo}`, {
        headers: {
          cookie: Object.keys(cookies)
            .map((key) => `${key}=${cookies[key]}`)
            .join(';'),
        },
      })
      .toPromise();
    return res.data;
  }

  async userCookie(cookies) {
    const res = await this.httpService
      .get(`/user/cookie`, {
        headers: {
          cookie: Object.keys(cookies)
            .map((key) => `${key}=${cookies[key]}`)
            .join(';'),
        },
      })
      .toPromise();
    return res.data;
  }

  async refreshLogin(cookies) {
    const res = await this.httpService
      .get('/user/refresh', {
        headers: {
          cookie: Object.keys(cookies)
            .map((key) => `${key}=${cookies[key]}`)
            .join(';'),
        },
      })
      .toPromise();
    return res.data;
  }

  async userDetail(userNo, cookies) {
    const res = await this.httpService
      .get(`/user/detail?id=${userNo}`, {
        headers: {
          cookie: Object.keys(cookies)
            .map((key) => `${key}=${cookies[key]}`)
            .join(';'),
        },
      })
      .toPromise();
    return res.data;
  }
  async songlist(id, cookies) {
    const res = await this.httpService
      .get(`/songlist?id=${id}`, {
        headers: {
          cookie: Object.keys(cookies)
            .map((key) => `${key}=${cookies[key]}`)
            .join(';'),
        },
      })
      .toPromise();
    return res.data;
  }
  async songurl(songmid, cookies) {
    const res = await this.httpService
      .get(`/song/urls?id=${songmid}`, {
        headers: {
          cookie: Object.keys(cookies)
            .map((key) => `${key}=${cookies[key]}`)
            .join(';'),
        },
      })
      .toPromise();
    return res.data;
  }
}
