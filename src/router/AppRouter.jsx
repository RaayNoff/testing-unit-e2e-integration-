import { Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import HelloWorld from "../pages/HelloWorld";
import MainPage from "../pages/MainPage";
import UserDetailsPage from "../pages/UserDetailsPage";
import Users from "../users/Users";
import UsersForTest from "../users/UsersForTest";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/hello" element={<HelloWorld />}></Route>
      <Route path="/users-test" element={<UsersForTest />}></Route>
      <Route path="/*" element={<ErrorPage />}></Route>
      <Route path="/users" element={<Users />}></Route>
      <Route path="/users/:id" element={<UserDetailsPage />}></Route>
    </Routes>
  );
};

export default AppRouter;
