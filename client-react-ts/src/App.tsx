import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Settings from "./pages/Settings";

const App = () => {
  const user = false;

  return (
    <>
      <BrowserRouter>
        <Navbar user={user}></Navbar>
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/dashboard" /> : <Login />}
          />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Login />} />
          <Route path="/settings" element={user ? <Settings /> : <Login />} />
          <Route path="/about" element={user ? <About /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
