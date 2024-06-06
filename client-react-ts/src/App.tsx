import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Settings from "./pages/Settings";
import User from "./pages/User";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
