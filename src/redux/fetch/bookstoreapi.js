import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

/* eslint-disable no-param-reassign */

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const uniqueId = 'GEbaFIVA9xpOl6dFwIfF';
const URL = `${baseURL}/apps/${uniqueId}/books`;

const initialState = {
  books: [],
  loading: false,
};

const GET_ALL_BOOKS = 'books/getAllBooks';
const ADD_BOOK_API = 'book/addBookAPI';
const REMOVE_BOOK_API = 'book/removeBookAPI';

export const getAllBooks = createAsyncThunk(GET_ALL_BOOKS, async () => {
  const respo = await axios.get(URL);
  const { data } = respo;
  const books = Object.entries(data).map(([key, value]) => {
    const { title, category, author } = value[0];
    return {
      Id: key,
      title,
      author,
      category,
    };
  });
  return books;
});

export const addBookAPI = createAsyncThunk(ADD_BOOK_API, async (payload, thunkAPI) => {
  await axios.post(URL, payload);
  return thunkAPI.dispatch(getAllBooks());
});

export const removeBookAPI = createAsyncThunk(REMOVE_BOOK_API, async (id, thunkAPI) => {
  await axios.delete(`${URL}/${id}`);
  return thunkAPI.dispatch(getAllBooks());
});

const bookstoreapi = createSlice({
  name: 'booksRedcuer',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllBooks.pending]: (state) => {
      state.loading = true;
    },
    [getAllBooks.fulfilled]: (state, action) => {
      state.loading = false;
      state.books = action.payload;
    },
    [fetch.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default bookstoreapi.reducer;
