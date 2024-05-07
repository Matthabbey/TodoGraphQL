import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { Todo, TodoDocument } from './entities/todo.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TodoService {
  constructor(@InjectModel('Todo') private todoModel: Model<TodoDocument>) {}

  async findAll(): Promise<Todo[]> {
    try {
      const data = await this.todoModel.find().exec();
      return data;
    } catch (error) {
      throw new HttpException(error.response, error.status);
    }
  }

  async create(todo: CreateTodoInput): Promise<Todo> {
    const data = await this.todoModel.create({
      title: todo.title,
      description: todo.description,
      completed: todo.completed,
    });
    return data;
  }

  async findOne(id: string): Promise<Todo> {
    try {
      const todo = this.todoModel.findById(id).exec();
      if (!todo) {
        throw new NotFoundException('Not Found');
      }
      return todo;
    } catch (error) {
      throw new HttpException(error.response, error.status);
    }
  }

  async update(id: string, todo: UpdateTodoInput): Promise<Todo> {
    return this.todoModel.findByIdAndUpdate(id, todo, { new: true }).exec();
  }

  async delete(id: string) {
    try {
      const todo = await this.todoModel.findById(id).exec();
      if (!todo) {
        throw new NotFoundException('Not Found');
      }

      return this.todoModel.findByIdAndDelete(id).exec();
    } catch (error) {
      throw new HttpException(error.response, error.status);
    }
  }
}
