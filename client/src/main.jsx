import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register";
import Home from "./pages/Home.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Toaster position="top-center" reverseOrder={false} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);
