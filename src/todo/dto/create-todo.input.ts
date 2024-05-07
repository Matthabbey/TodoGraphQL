import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTodoInput {
  @Field({ description: 'Example field (placeholder)' })
  title: string;

  @Field({ description: 'Example field (placeholder)' })
  description: string;

  @Field({ description: 'Example field (false)' })
  completed: boolean;
}
