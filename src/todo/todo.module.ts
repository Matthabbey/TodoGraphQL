import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoResolver } from './todo.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from './entities/todo.entity';
@Module({
  providers: [TodoService, TodoResolver],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Todo',
        schema: TodoSchema,
      },
    ]),
  ],
})
export class TodoModule {}
