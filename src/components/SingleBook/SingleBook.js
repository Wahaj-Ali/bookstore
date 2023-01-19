import React from 'react';
import PropTypes from 'prop-types';
import './SingleBook.css';

const SingleBook = (props) => {
  const { Title, Author } = props;
  return (
    <li>
      <div className="book">
        <div className="book-content">
          <div className="book-info">
            <h2 className="book-title">{Title}</h2>
            <h2 className="book-author">{Author}</h2>
            <div className="action-buttons">
              <button type="button" className="btn-outline">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

SingleBook.propTypes = {
  Title: PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired,
};

export default SingleBook;
