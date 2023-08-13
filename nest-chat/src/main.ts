import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
      origin: ['http://localhost:5173', 'http://localhost:4200', 'http://localhost:3000']
  }); // Add this line
  await app.listen(8000);
}
bootstrap();
