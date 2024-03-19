import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfiguration } from './config/app.config';
import { JoiValidation } from './config/joi.validation';
@Module({
  imports: [
    //importamos el módulo de configuración
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidation,
    }),
    //indicamos que la carpeta public será la raíz de nuestra aplicación
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      //indicamos que la ruta de la aplicación será la raíz
      renderPath: '/',
    }),
    //establecemos la conexión con la base de datos
    MongooseModule.forRoot(process.env.MONGODB, { dbName: 'pokemondb' }),
    PokemonModule,
    CommonModule,
    SeedModule,
  ],
})
export class AppModule {
  constructor() {}
}
