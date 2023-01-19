import React from 'react';
import './BooksContainer.css';

const BookForm = () => (
  <div>
    <h2 className="form-title">Add Your Book</h2>
    <section>
      <form className="Add-form">
        <input className="input title-input" type="text" name="title" placeholder="Add Book Title" />
        <input className="input" type="text" name="author" placeholder="Add Book Author" />
        <button className="primary-button-big" type="submit">ADD BOOK</button>
      </form>
    </section>
  </div>
);

export default BookForm;
