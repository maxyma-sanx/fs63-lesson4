import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, deleteTodo } from './operation';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addTodo(state, action) {
      state.items.push(action.payload);
    },
    deleteTodo(state, action) {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
  },
  extraReducers: {
    [fetchTodos.pending](state) {
      state.isLoading = true;
    },
    [fetchTodos.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTodos.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
     [deleteTodo.pending](state) {
      state.isLoading = true;
    },
    [deleteTodo.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter((todo)=> todo.id !== action.payload.id);
    },
    [deleteTodo.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export const { addTodo } = todosSlice.actions;
