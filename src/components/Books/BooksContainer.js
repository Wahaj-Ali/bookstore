import React from 'react';
import { useSelector } from 'react-redux';
import SingleBook from '../SingleBook/SingleBook';
import BookForm from './BookForm';
import './BooksContainer.css';

const BooksContainer = () => {
  const { books } = useSelector((state) => state.books);
  return (
    <div className="books-container">
      <ul className="books">
        {books.map((book) => (
          <SingleBook
            Id={book.Id}
            key={book.Id}
            Title={book.Title}
            Author={book.Author}
          />
        ))}
      </ul>
      <div className="horizontal-divider" />
      <BookForm />
    </div>
  );
};

export default BooksContainer;
