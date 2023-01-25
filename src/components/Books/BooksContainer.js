import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBooks } from '../../redux/fetch/bookstoreapi';
import SingleBook from '../SingleBook/SingleBook';
import BookForm from './BookForm';
import './BooksContainer.css';

const BooksContainer = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (
    <div className="books-container">
      <ul className="books">
        {books.map((book) => (
          <SingleBook
            Id={book.Id}
            key={book.Id}
            Title={book.title}
            Author={book.author}
          />
        ))}
      </ul>
      <div className="horizontal-divider" />
      <BookForm />
    </div>
  );
};

export default BooksContainer;
