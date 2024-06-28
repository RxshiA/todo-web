import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
  filter: 'ALL' | 'COMPLETED' | 'INCOMPLETE';
  search: string;
}

const initialState: TodoState = {
  todos: [],
  filter: 'ALL',
  search: '',
};

export const fetchTodos = createAsyncThunk<Todo[]>('todos/fetchTodos', async () => {
  const response = await axios.get('http://localhost:5001/api/todos');
  return response.data;
});

export const addTodo = createAsyncThunk<Todo, string>('todos/addTodo', async (text, { dispatch }) => {
  const response = await axios.post('http://localhost:5001/api/todos', { text });
  dispatch(fetchTodos()); 
  return response.data;
});

export const toggleTodo = createAsyncThunk<Todo, number>('todos/toggleTodo', async (id) => {
  const response = await axios.put(`http://localhost:5001/api/todos/${id}/toggle`);
  return response.data;
});

export const removeTodo = createAsyncThunk<number, number>('todos/removeTodo', async (id) => {
  await axios.delete(`http://localhost:5001/api/todos/${id}`);
  return id;
});

export const markCompleted = createAsyncThunk<Todo, number>('todos/markCompleted', async (id) => {
  const response = await axios.put(`http://localhost:5001/api/todos/${id}/complete`);
  return response.data;
});

export const markIncomplete = createAsyncThunk<Todo, number>('todos/markIncomplete', async (id) => {
  const response = await axios.put(`http://localhost:5001/api/todos/${id}/incomplete`);
  return response.data;
});

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    filterTodos: (state, action: PayloadAction<{ filter: 'ALL' | 'COMPLETED' | 'INCOMPLETE' }>) => {
      state.filter = action.payload.filter;
    },
    updateSearch: (state, action: PayloadAction<{ search: string }>) => {
      state.search = action.payload.search;
    },
    markAllCompleted: (state) => {
      state.todos.forEach(todo => {
        todo.completed = true;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload; 
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const todo = state.todos.find(todo => todo.id === action.payload.id);
        if (todo) {
          todo.completed = action.payload.completed;
        }
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
      })
      .addCase(markCompleted.fulfilled, (state, action) => {
        const todo = state.todos.find(todo => todo.id === action.payload.id);
        if (todo) {
          todo.completed = true;
        }
      })
      .addCase(markIncomplete.fulfilled, (state, action) => {
        const todo = state.todos.find(todo => todo.id === action.payload.id);
        if (todo) {
          todo.completed = false;
        }
      });
  },
});

export const { filterTodos, updateSearch, markAllCompleted } = todoSlice.actions;

export default todoSlice.reducer;
