// default state
const defaultState = {
  books: [
    { Id: '01', Title: 'Why Nations fail', Author: 'James' },
    { Id: '02', Title: 'Book2', Author: 'Author 2' },
  ],
};

const ADD_BOOKS = 'bookstore/books/ADD_BOOKS';
const REMOVE_BOOKS = 'bookstore/books/REMOVE_BOOKS';

// actions
export const addBook = (newBook) => ({
  type: ADD_BOOKS,
  newBook,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOKS,
  id,
});

// reducer

const bookReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_BOOKS:
      return {
        books: [...state.books, action.newBook],
      };
    case REMOVE_BOOKS:
      return {
        books: [...state.books.filter((book) => book.Id !== action.id)],
      };
    default:
      return state;
  }
};

export default bookReducer;
