import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Bioreactor from "./pages/Bioreactor";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import WaterPurifier from "./pages/WaterPurifier";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // console.log("Environment Variables:", process.env);
    // console.log("Frontend Env:", process.env.VITE_PUBLIC_URL);
    // console.log("Server URL:", process.env.VITE_SERVER_URL);
    // console.log("Auth URL:", process.env.VITE_AUTH_URL);
    // console.log("User:", user);
  }, []);

  useEffect(() => {
    const getUser = () => {
      fetch(`${process.env.VITE_AUTH_URL}/auth/login/success`, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has failed!");
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
        try {
          const response = await fetch(
            `${process.env.VITE_AUTH_URL}/api/v1/user/postuser`,
            {
              method: "POST",
              credentials: "include",
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

          console.log("User saved or updated successfully");
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
        <div className="appContainer">
          <Navbar user={user} />
          <Routes>
            <Route
              path="/"
              element={user ? <Navigate to="/bioreactor" /> : <Login />}
            />
            <Route
              path="/bioreactor"
              element={user ? <Bioreactor user={user} /> : <Login />}
            />
            <Route
              path="/waterpurifier"
              element={user ? <WaterPurifier user={user} /> : <Login />}
            />
            <Route path="/settings" element={user ? <Settings /> : <Login />} />
            <Route path="/about" element={<About />} />
            <Route path="login/failed" element={<>Failed login</>} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
