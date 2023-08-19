import React from "react";
import "./Base.css";
import NavBar from "../Navbar/NavBar";
import Home from "../Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingleProduct from "../SingleProduct/SingleProduct";
const Base = () => {
  return (
    <>
      <NavBar />
      <div>
        <Home />
        <Router>
          <Routes>
            <Route path="/title" element={<SingleProduct />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default Base;
