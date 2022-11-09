// import logo from "./logo.svg";
// import "./App.css";
// import { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState();
//   const [toggle, setToggle] = useState(false);
//   const [value, setValue] = useState("");

//   const onClick = () => setToggle((prev) => !prev);

//   useEffect(() => {
//     setTimeout(() => {
//       setData({});
//     }, 100);
//   }, []);

//   return (
//     <div className="App">
//       <h1 data-testid="value-elem">{value}</h1>
//       {toggle && <div data-testid="toggle-elem">toggle</div>}
//       {data && <div style={{ color: "red" }}>data</div>}
//       <h1>Hello World</h1>
//       <button data-testid="toggle-btn" onClick={onClick}>
//         click me
//       </button>
//       <input
//         onChange={(e) => setValue(e.target.value)}
//         type="text"
//         placeholder="input value"
//       />
//     </div>
//   );
// }

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Users from "./users/Users.jsx";
import UserDetailsPage from "./pages/UserDetailsPage.js";
import AppRouter from "./router/AppRouter.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

// export default App;
const App = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
};

export default App;
