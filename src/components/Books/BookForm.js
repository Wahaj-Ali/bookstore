import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import './BooksContainer.css';
import { addBook } from '../../redux/books/books';

const BookForm = () => {
  const [state, setState] = useState({
    Id: '',
    Title: '',
    Author: '',
  });

  const onChangeHandler = (event) => {
    setState({
      ...state,
      Id: nanoid(),
      [event.target.name]: event.target.value,
    });
  };

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addBook(state));
    setState({
      Id: '',
      Title: '',
      Author: '',
    });
  };

  return (
    <div>
      <h2 className="form-title">Add Your Book</h2>
      <section>
        <form className="Add-form" onSubmit={onSubmitHandler}>
          <input className="input title-input" type="text" name="Title" placeholder="Add Book Title" onChange={onChangeHandler} />
          <input className="input" type="text" name="Author" placeholder="Add Book Author" onChange={onChangeHandler} />
          <button className="primary-button-big" type="submit">ADD BOOK</button>
        </form>
      </section>
    </div>
  );
};

export default BookForm;
