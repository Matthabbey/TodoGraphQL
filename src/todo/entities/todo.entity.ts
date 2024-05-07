import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
@ObjectType()
export class Todo {
  @Field({ description: 'Example field (placeholder)' })
  title: string;

  @Field({ description: 'Example field (placeholder)' })
  description: string;

  @Field({ description: 'Example field (false)' })
  completed: boolean;
}

// export const TodoSchema = SchemaFactory.createForClass(Todo);

export const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});
