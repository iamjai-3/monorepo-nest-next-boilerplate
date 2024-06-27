import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { add } from '@boilerplate/sample-lib';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('add', add(5, 2));
  await app.listen(3000);
}
bootstrap();
