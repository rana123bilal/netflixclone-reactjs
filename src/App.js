import React from "react";
import { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/search");
    }
  }, [window.location.pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path="/search" exact element={<Home />} />
        <Route path="/search/:searchQuery" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
