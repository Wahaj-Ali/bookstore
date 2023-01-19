import React, { Component } from 'react';
import SingleBook from '../SingleBook/SingleBook';
import BookForm from './BookForm';
import './BooksContainer.css';

class BooksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: 'Why Nations Fail',
      Author: 'D. Acemoglu & James A. Robinson',
    };
  }

  render() {
    const { Title, Author } = this.state;
    return (
      <div className="books-container">
        <ul className="books">
          <SingleBook Title={Title} Author={Author} />
        </ul>
        <div className="horizontal-divider" />
        <BookForm />
      </div>
    );
  }
}

export default BooksContainer;
