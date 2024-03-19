import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //indicamos que la carpeta public será la raíz de nuestra aplicación
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      //whiteList: true, //solo acepta los campos que esten en el dto
      whitelist: true,
      //forbidNonWhitelisted: true, //no acepta campos que no esten en el dto
      forbidNonWhitelisted: true,
      transform: true, //transforma los datos a su tipo correspondiente
      transformOptions: {
        enableImplicitConversion: true, //permite la conversion implicita
      },
    }),
  );
  await app.listen(process.env.PORT);
  console.log(`Application is running on: ${process.env.PORT}`);
}
bootstrap();
