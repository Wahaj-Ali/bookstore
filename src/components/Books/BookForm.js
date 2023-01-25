import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import './BooksContainer.css';
import { addBookAPI } from '../../redux/fetch/bookstoreapi';

const BookForm = () => {
  const [state, setState] = useState({
    item_id: '',
    title: '',
    author: '',
    category: '',
  });

  const onChangeHandler = (event) => {
    setState({
      ...state,
      item_id: nanoid(),
      [event.target.name]: event.target.value,
      category: 'Category Action',
    });
  };

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addBookAPI(state));
    setState({
      item_id: '',
      title: '',
      author: '',
      category: 'Category Action',
    });
  };

  return (
    <div>
      <h2 className="form-title">Add Your Book</h2>
      <section>
        <form className="Add-form" onSubmit={onSubmitHandler}>
          <input className="input title-input" type="text" name="title" placeholder="Add Book Title" required value={state.title} onChange={onChangeHandler} />
          <input className="input" type="text" name="author" placeholder="Add Book Author" required value={state.author} onChange={onChangeHandler} />
          <button className="primary-button-big" type="submit">ADD BOOK</button>
        </form>
      </section>
    </div>
  );
};

export default BookForm;
