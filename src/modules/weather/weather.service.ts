import { Inject, Injectable } from "@nestjs/common";
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from "axios";

@Injectable()
export class WeatherService{
	constructor(private readonly httpService: HttpService) {}
	async getLocation(location){
		const { data } = await firstValueFrom(
      this.httpService.get(`https://jf67c699q4.re.qweatherapi.com/v7/weather/now?location=${location}&key=${process.env.HEFENG_KEY}`).pipe(
        catchError((error: AxiosError) => {
          // this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );

    return data;
	}
}
