import React from 'react';
import PropTypes from 'prop-types';
import './SingleBook.css';
import { useDispatch } from 'react-redux';
import { removeBookAPI } from '../../redux/fetch/bookstoreapi';

const SingleBook = (props) => {
  const {
    Title, Author, Id, Category,
  } = props;

  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(removeBookAPI(Id));
  };

  return (
    <li>
      <div className="book">
        <div className="book-content">
          <div className="book-info">
            <h4 className="book-category">{Category}</h4>
            <h2 className="book-title">{Title}</h2>
            <h2 className="book-author">{Author}</h2>
            <div className="action-buttons">
              <button type="button" className="btn-outline">Comments</button>
              <div className="vertical-divider" />
              <button type="button" className="btn-outline" onClick={onClickHandler}>Remove</button>
              <div className="vertical-divider" />
              <button type="button" className="btn-outline">Edit</button>
            </div>
          </div>
          <div className="progress-container">
            <div className="circular-progress-container">
              <div className="circular-progress" />
            </div>
            <div className="progress-stat">
              <p className="percent-complete">64%</p>
              <p className="completed">Completed</p>
            </div>
            <div className="progress-divider" />
            <div className="current-chapter-container">
              <div>
                <p className="current-chapter-label">CURRENT CHAPTER</p>
                <p className="current-chapter">Chapter 17</p>
              </div>
              <div>
                <button className="primary-button" type="button">UPDATE PROGRESS</button>
              </div>
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
  Id: PropTypes.string.isRequired,
  Category: PropTypes.string.isRequired,
};

export default SingleBook;
