import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "@/presentation/pages/HomePage";
import ErrorPage from "@/presentation/pages/ErrorPage";

import Navbar from "@/presentation/components/organisms/Navbar";
import Footer from "@/presentation/components/organisms/Footer";

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
