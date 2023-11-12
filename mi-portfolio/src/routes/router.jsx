import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../views/HomePage.jsx";
import About from "../views/About.jsx";
import Projects from "../views/Projects.jsx";
import Contact from "../views/Contact.jsx";
import ErrorPage from "../views/ErrorPage.jsx";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Router = () => {
  return (
    <BrowserRouter basename="">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
