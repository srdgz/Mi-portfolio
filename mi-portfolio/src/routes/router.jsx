import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "../views/HomePage.jsx";
import ErrorPage from "../views/ErrorPage.jsx";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Router = () => {
  return (
    <BrowserRouter basename="">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Navigate to="/#sobre-mi" replace />} />
        <Route
          path="/projects"
          element={<Navigate to="/#proyectos" replace />}
        />
        <Route path="/contact" element={<Navigate to="/#contacto" replace />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
