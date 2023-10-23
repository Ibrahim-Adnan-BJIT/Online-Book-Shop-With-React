import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddBook.css'; // Import your custom CSS file for styling

const AddBook = () => {
  const [bookData, setBookData] = useState({
    name: '',
    author: '',
    isAvailable: 'Available', // Default value
  });
  const authToken = localStorage.getItem('token'); // Get the authentication token from localStorage

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create an API endpoint for the POST request
    const apiEndpoint = 'http://localhost:8080/books/create'; // Replace with your actual API endpoint

    // Use axios to make a POST request with the authentication token in the header
    axios
      .post(apiEndpoint, bookData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        toast.success('Book added successfully');
        setBookData({ name: '', author: '', isAvailable: 'Available' });
      })
      .catch((error) => {
        toast.error('Failed to add book');
      });
  };

  return (
    <div className="add-book-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Book Name:</label>
          <input
            type="text"
            name="name"
            value={bookData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            name="author"
            value={bookData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="isAvailable">Availability:</label>
          <select
            name="isAvailable"
            value={bookData.isAvailable}
            onChange={handleChange}
            required
          >
            <option value="Available">Available</option>
            <option value="Occupied">Occupied</option>
          </select>
        </div>
        <button type="submit">Add Book</button>
      </form>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default AddBook;
