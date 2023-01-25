import { combineReducers, configureStore } from '@reduxjs/toolkit';
import catergoryReducer from './categories/categories';
import bookstoreapi from './fetch/bookstoreapi';
// combine reducers

const reducer = combineReducers({
  books: bookstoreapi,
  categories: catergoryReducer,
});

// create store

const store = configureStore({
  reducer,
});

export default store;
