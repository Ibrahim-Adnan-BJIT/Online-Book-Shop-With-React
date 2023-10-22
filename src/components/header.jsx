import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './authContext'; // Import your AuthContext
import './Navbar.css'; // Import the custom CSS file


const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black custom-navbar"> {/* Added bg-black class */}
      <div className="container">
        <Link className="navbar-brand" onClick={logout} to="/">
          <h1>Online Book Shop</h1>
        </Link>
        <div className="d-flex">
          {isLoggedIn ? (
            <>
              <Link className="btn btn-primary me-2" to="/profile">
                Profile
              </Link>
              <Link className="btn btn-secondary" onClick={logout} to="/login">
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link className="btn btn-primary me-2" to="/register">
                Sign Up
              </Link>
              <Link className="btn btn-secondary" to="/login">
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
