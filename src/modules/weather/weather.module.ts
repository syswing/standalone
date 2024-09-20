import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule.registerAsync({
		useFactory: () => ({
			timeout: 5000,
			maxRedirects: 5,
			baseURL:'http://127.0.0.1:3300',
		}),
	})],
  providers: [WeatherService],
  controllers: [WeatherController],
})
export class WeatherModule {}