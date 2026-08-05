import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import { useAuth } from "./Context/Authprovider.jsx";
import { Toaster } from "react-hot-toast";
import TermsCondition from "./Pages/Term.jsx";
export default function App() {
  const [authUser] = useAuth();

  const handleCoursesClick = (e) => {
    if (!authUser) {
      e.preventDefault();
      document.getElementById("my_modal_3")?.showModal();
    }
  };
  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/term-condition" element={<TermsCondition />} />
      </Routes>
    </BrowserRouter>
  );
}
