import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { Todo } from './entities/todo.entity';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Mutation(() => Todo)
  async createTodo(@Args('createTodoInput') createTodoInput: CreateTodoInput) {
    return await this.todoService.create(createTodoInput);
  }

  @Query(() => [Todo], { name: 'todos', nullable: false })
  async findAll() {
    return await this.todoService.findAll();
  }

  @Query(() => Todo, { name: 'todo', nullable: false })
  async findOne(@Args('id', { type: () => String }) id: string) {
    return await this.todoService.findOne(id);
  }

  @Mutation(() => Todo)
  async updateTodo(@Args('updateTodoInput') updateTodoInput: UpdateTodoInput) {
    return await this.todoService.update(updateTodoInput.id, updateTodoInput);
  }

  @Mutation(() => Todo)
  async removeTodo(@Args('id', { type: () => String }) id: string) {
    return await this.todoService.delete(id);
  }
}
