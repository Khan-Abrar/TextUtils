import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import About from "./Components/About";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";
import Footer from "./Components/Footer";

export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const handleAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const handleDarkMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#052452";
      document.body.style.color = "white";
      // 062f6c
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} handleDarkMode={handleDarkMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} handleAlert={handleAlert} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer mode={mode} handleDarkMode={handleDarkMode} />
    </>
  );
}
