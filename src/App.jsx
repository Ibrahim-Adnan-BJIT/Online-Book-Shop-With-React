import { Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/homePage";
import RegistrationPage from "./pages/registrationPage";
import LoginPage from "./pages/loginPage";
import Header from "./components/header";
import NotFoundPage from "./pages/notFoundPage";
import UserList from "./components/UserList";
import UserDetails from "./pages/userDetailsPage";
import Authenticate from "./components/authenticate";
import SearchPage from "./pages/searchPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<Authenticate />}>
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:userId" element={<UserDetails />} />
          <Route path="/user/search" element={<SearchPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
