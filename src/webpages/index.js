//file: src/webpages/index.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Layout from "../components/Layout";
// import MyBooks from './mybooks';
// import Favorites from './favorites';
const Webpages = () => {
  return (
    <div className="wrapper">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};
export default Webpages;
