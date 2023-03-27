import React from "react";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import Contact from "./Components/Contact/Contact";
import Customer from "./Components/Customer/Customer";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import Products from "./Components/Products/Products";
import './index.css'

function App() {
  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Menu/>
    <Products/>
    <Customer/>
    <Contact/>
    <Blogs/>
    <Footer/>
    </>
  );
}

export default App;
