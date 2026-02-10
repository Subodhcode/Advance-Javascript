import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Component/Pages/Home";
import About from "./Component/Pages/About";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./Component/Pages/login";
import Register from "./Component/Pages/Register";
import Error404 from "./Component/Pages/Error404";
import Product from "./Component/Pages/Product";
import Layout from "./Component/Common/Layout";
import Product_details from "./Component/Pages/Product_details";

createRoot(document.getElementById("root")).render(
  <>
    {/* <Home/>
  <About/> */}

    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Home page path  /https:localhos.123*/}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/product_details/:id" element={<Product_details />} />
          <Route path="*" element={<Error404 />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </>,
);
