import { Router } from 'express';
import { getAllTodos, createTodo, updateTodoStatus, removeTodo, markTodoAsCompleted, markTodoAsIncomplete } from '../controllers/todoController';

const router = Router();

router.get('/todos', getAllTodos);
router.post('/todos', createTodo);
router.put('/todos/:id', updateTodoStatus);
router.delete('/todos/:id', removeTodo);
router.put('/todos/:id/complete', markTodoAsCompleted);
router.put('/todos/:id/incomplete', markTodoAsIncomplete);

export default router;