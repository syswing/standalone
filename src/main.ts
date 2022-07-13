import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('example')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('example')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.use(cookieParser())
  app.enableCors({
    origin: [
      'http://localhost:4200',
      'http://localhost:8081',
      'http://111.231.115.242:3000',
      'http://111.231.115.242:7777',
    ],
  });
  await app.listen(3000);
  Logger.log(`Server running on http://localhost:3000`, 'Bootstrap');
}

bootstrap();
