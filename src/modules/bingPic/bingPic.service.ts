import { Inject, Injectable } from "@nestjs/common";
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from "axios";

@Injectable()
export class BingPicService{
	constructor(private readonly httpService: HttpService) {}
	async getPicture(){
		const { data } = await firstValueFrom(
      this.httpService.get('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=5&nc=1592366050854&pid=hp').pipe(
        catchError((error: AxiosError) => {
          // this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
	}
}
