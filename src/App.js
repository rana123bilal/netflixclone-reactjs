import React from "react";
import { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import { useNavigate } from "react-router-dom";
import NotFound from "./components/not-found/not-found";

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
        <Route path="*" element={<NotFound />} />
        <Route path="/search" exact element={<Home />} />
        <Route path="/search/:searchQuery" element={<Home />} />
        <Route path="/search/movie/:id" element={<Home />} />
        <Route path="/search/movie/:searchQuery" element={<Home />} />
        <Route path="/sortBy/:searchQuery" element={<Home />} />
        <Route path="/genre/:searchQuery" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
