import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Settings from "./pages/Settings";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // console.log("Environment Variables:", process.env);
    // console.log("Frontend Env:", process.env.VITE_PUBLIC_URL);
    // console.log("Server URL:", process.env.VITE_SERVER_URL);
    // console.log("Auth URL:", process.env.VITE_AUTH_URL);
  }, []);

  useEffect(() => {
    const getUser = () => {
      fetch(`${process.env.VITE_AUTH_URL}/auth/login/success`, {
        method: "GET",
        // credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  useEffect(() => {
    const saveUser = async () => {
      if (user) {
        console.log(user);
        try {
          const response = await fetch(
            `${process.env.VITE_AUTH_URL}/api/v1/user/postuser`,
            {
              method: "POST",
              // credentials: "include",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(user),
            }
          );

          if (response.status !== 200) {
            throw new Error("Failed to save or update user");
          }

          const data = await response.json();
          console.log("User saved or updated successfully:", data);
        } catch (err) {
          console.error(err);
        }
      }
    };

    saveUser();
  }, [user]);

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
          <Route path="login/failed" element={<>failed login</>} />
          {/* <Route path="login/success" element={<>success login</>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
