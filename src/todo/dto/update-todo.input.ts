import { CreateTodoInput } from './create-todo.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTodoInput extends PartialType(CreateTodoInput) {
  @Field()
  id: string;

  @Field({ description: 'Example field (placeholder)' })
  title: string;

  @Field({ description: 'Example field (placeholder)' })
  description: string;

  @Field({ description: 'Example field (false)' })
  completed: boolean;
}
