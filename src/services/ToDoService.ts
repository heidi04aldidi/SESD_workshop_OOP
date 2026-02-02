import TodoModel, { ITodo } from "../models/ToDoModel";

class TodoService {
  async createTodo(data: Partial<ITodo>) {
    return await TodoModel.create(data);
  }

  async getAllTodos() {
    return await TodoModel.find();
  }

  async getTodoById(id: string) {
    return await TodoModel.findById(id);
  }

  async updateTodo(id: string, data: Partial<ITodo>) {
    return await TodoModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteTodo(id: string) {
    return await TodoModel.findByIdAndDelete(id);
  }
}

export default new TodoService();
