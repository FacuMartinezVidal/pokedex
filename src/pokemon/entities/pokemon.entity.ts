import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema() //decorador que indica que la clase es un esquema de mongoose
export class Pokemon extends Document {
  @Prop({
    unique: true, //indicamos que el atributo name debe ser único
    index: true, //indicamos que el atributo name debe ser indexado
  }) //decorador que indica que el atributo es una propiedad del esquema
  name: string;

  @Prop({
    unique: true,
  })
  no: number;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
