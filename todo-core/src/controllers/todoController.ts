import { Request, Response } from 'express';
import { getTodos, addTodo, updateTodo, deleteTodo, markTodoCompleted, markTodoIncomplete } from '../models/todoModel';

const getAllTodos = async (req: Request, res: Response) => {
  try {
    const todos = await getTodos();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch todos' });
  }
};

const createTodo = async (req: Request, res: Response) => {
  const { text } = req.body;
  try {
    await addTodo(text);
    res.status(201).json({ message: 'Todo created successfully' });
  } catch (error) {
    console.error('Error creating todo:', error);
    res.status(500).json({ error: 'Failed to create todo' });
  }
};

const updateTodoStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { completed } = req.body;
  try {
    await updateTodo(parseInt(id, 10), completed);
    res.json({ message: 'Todo updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update todo' });
  }
};

const removeTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteTodo(parseInt(id, 10));
    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete todo' });
  }
};

const markTodoAsCompleted = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await markTodoCompleted(parseInt(id, 10));
    res.json({ message: 'Todo marked as completed' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to mark todo as completed' });
  }
};

const markTodoAsIncomplete = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await markTodoIncomplete(parseInt(id, 10));
    res.json({ message: 'Todo marked as incomplete' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to mark todo as incomplete' });
  }
};

export { getAllTodos, createTodo, updateTodoStatus, removeTodo, markTodoAsCompleted, markTodoAsIncomplete };
