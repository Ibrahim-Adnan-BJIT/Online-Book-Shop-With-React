import { Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/homePage";
import RegistrationPage from "./pages/registrationPage";
import LoginPage from "./pages/loginPage";

import NotFoundPage from "./pages/notFoundPage";
import SearchPage from "./pages/searchPage";
import Navbar from "./components/header";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/dashBoard";
import Profile from "./components/profile";
import BorrowedBooks from "./components/boroowedBook";
import History from "./components/history";
import BooksList from "./components/bookList";
import BorrowBook from "./components/borrowBooks";
import ReturnBook from "./components/returnBook";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/borrowed-books" element={<BorrowedBooks />} />
          <Route path="/history" element={<History />} />
          <Route path="/books" element={<BooksList />} />
          <Route path="/borrow-book/:bookId" element={<BorrowBook />} />
          <Route path="/return-book/:bookId" element={<ReturnBook/>} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <Footer/>
    </div>
  );
}

export default App;
