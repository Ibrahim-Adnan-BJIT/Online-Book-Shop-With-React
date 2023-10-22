import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios
      .get('http://localhost:8080/books/all', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setBooks(response.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const handleBorrow = (bookId, isAvailable) => {
    if (isAvailable === 'Available') {
      navigate(`/borrow-book/${bookId}`);
    }
  };

  const handleReturn = (bookId, isAvailable) => {
    if (isAvailable === 'OCCUPIED') {
      navigate(`/return-book/${bookId}`);
    }
  };

  const handleReview = (bookId) => {
    navigate(`/review/${bookId}`);
  };

  return (
    <div className="container">
      <div className="row">
        {books.map((book) => (
          <div className="col-md-4" key={book.bookId}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{book.name}</h5>
                <p className="card-text">Author: {book.author}</p>
                <p className="card-text">
                  Availability: {book.isAvailable === 'Available' ? 'Yes' : 'No'}
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleBorrow(book.bookId, book.isAvailable)}
                  disabled={book.isAvailable === 'OCCUPIED'}
                >
                  Borrow
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleReturn(book.bookId, book.isAvailable)}
                  disabled={book.isAvailable === 'Available'}
                >
                  Return
                </button>
                <button
                  className="btn btn-info"
                  onClick={() => handleReview(book.bookId)}
                >
                  Review
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksList;
