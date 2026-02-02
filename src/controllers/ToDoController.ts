import { Request, Response } from "express";
import todoService from "../services/ToDoService";

class TodoController {
  async create(req: Request, res: Response) {
    try {
      const todo = await todoService.createTodo(req.body);
      res.status(201).json(todo);
    } catch (error) {
      res.status(500).json({ message: "Failed to create todo", error });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const todos = await todoService.getAllTodos();
      res.json(todos);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch todos", error });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const todo = await todoService.getTodoById(req.params.id as string);
      if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
      }
      res.json(todo);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch todo", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const todo = await todoService.updateTodo(req.params.id as string, req.body);
      if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
      }
      res.json(todo);
    } catch (error) {
      res.status(500).json({ message: "Failed to update todo", error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const todo = await todoService.deleteTodo(req.params.id as string);
      if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
      }
      res.json({ message: "Todo deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete todo", error });
    }
  }
}

export default new TodoController();
