import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  app.enableCors() // CORS ERROR เพราะ ตำแน่งที่ส่งreq และรับreq เป็น httpเดียวกัน(ต่างกันแค่ port ผิด policy cors)
  // https://www.stackhawk.com/blog/angular-cors-guide-examples-and-how-to-enable-it/
  
  await app.listen(3000);
}
bootstrap();
