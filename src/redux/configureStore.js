import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import catergoryReducer from './categories/categories';

// combine reducers

const reducer = combineReducers({
  books: bookReducer,
  categories: catergoryReducer,
});

// create store

const store = configureStore({
  reducer,
});

export default store;
