// default state
const defaultState = {
  books: [],
};

const ADD_BOOKS = 'ADD_BOOKS';
const REMOVE_BOOKS = 'REMOVE_BOOKS';

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
        books: [...state, action.payload],
      };
    case REMOVE_BOOKS:
      return {
        books: [...state.filter((book) => book.id !== action.payload.id)],
      };
    default:
      return state;
  }
};

export default bookReducer;
