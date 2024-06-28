import pool from '../db';

interface Todo {
  id?: number;
  text: string;
  completed: boolean;
}

const getTodos = async (): Promise<Todo[]> => {
  const [rows] = await pool.query('SELECT * FROM todos');
  return rows as Todo[];
};

const addTodo = async (text: string): Promise<void> => {
  try {
    await pool.query('INSERT INTO todos (text, completed) VALUES (?, ?)', [text, false]);
    console.log('Todo added successfully');
  } catch (error) {
    console.error('Error adding todo:', error);
    throw error; 
  }
};

const updateTodo = async (id: number, completed: boolean): Promise<void> => {
  await pool.query('UPDATE todos SET completed = ? WHERE id = ?', [completed, id]);
};

const deleteTodo = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM todos WHERE id = ?', [id]);
};

const markTodoCompleted = async (id: number): Promise<void> => {
  await pool.query('UPDATE todos SET completed = true WHERE id = ?', [id]);
};

const markTodoIncomplete = async (id: number): Promise<void> => {
  await pool.query('UPDATE todos SET completed = false WHERE id = ?', [id]);
};

export { getTodos, addTodo, updateTodo, deleteTodo, markTodoCompleted, markTodoIncomplete };
