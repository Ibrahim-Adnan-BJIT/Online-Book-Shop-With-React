import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const isAdmin = localStorage.getItem('role') === 'ADMIN';

  return (
    <div style={{ backgroundImage: `url('https://img.freepik.com/free-photo/abstract-digital-grid-black-background_53876-97647.jpg?w=1060&t=st=1697967594~exp=1697968194~hmac=3e9e5479b8c5a9ae923ab6ca6d826869e3e67eb834dbabc244853d98517e846f')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://img.freepik.com/premium-photo/opened-book-with-flying-pages-butterflies-dark-backgroundgenerative-ai_391052-12859.jpg" className="card-img-top" alt="Book Image" />
              <div className="card-body">
                <h5 className="card-title">All Books</h5>
                <p className="card-text">View all available books in the library.</p>
                <Link to="/books" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCcnVWcfcvNeAyzpp7GlhZESFOCSzRO2cfvA&usqp=CAU" className="card-img-top" alt="Book Image" />
              <div className="card-body">
                <h5 className="card-title">Borrowed Books</h5>
                <p className="card-text">View books that are currently borrowed by You.</p>
                <Link to="/borrowed-books" className="btn btn-primary">Open List</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://static01.nyt.com/images/2023/07/03/multimedia/01JPbooktok1-print-hwqp/01booktok-hwqp-videoSixteenByNine3000.jpg" className="card-img-top" alt="Book Image" />
              <div className="card-body">
                <h5 className="card-title">History</h5>
                <p className="card-text">View the history of books and user activities.</p>
                <Link to="/history" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
          {isAdmin && (
            <div className="col-md-4">
              <div className="card">
                <img src="https://static01.nyt.com/images/2023/07/03/multimedia/01JPbooktok1-print-hwqp/01booktok-hwqp-videoSixteenByNine3000.jpg" className="card-img-top" alt="Book Image" />
                <div className="card-body">
                  <h5 className="card-title">Add Books</h5>
                  <p className="card-text">Add any Books</p>
                  <Link to="/create" className="btn btn-primary">Go somewhere</Link>
                </div>
              </div>
            </div>
          )}
          {isAdmin && (
            <div className="col-md-4">
              <div className="card">
                <img src="https://static01.nyt.com/images/2023/07/03/multimedia/01JPbooktok1-print-hwqp/01booktok-hwqp-videoSixteenByNine3000.jpg" className="card-img-top" alt="Book Image" />
                <div className="card-body">
                  <h5 className="card-title">Search User</h5>
                  <p className="card-text">Search specific user by Id</p>
                  <Link to="/search" className="btn btn-primary">Go somewhere</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
