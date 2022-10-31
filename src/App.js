import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";

// importing router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// we want to control the state of our application from App.js

function App() {
  const [mode, setMode] = useState("light"); // tells whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);
  if (mode === "light") {
    document.body.style.backgroundColor = "#F4B4A6";
  } else {
    document.body.style.backgroundColor = "#162C39";
  }
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      showAlert("Dark mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Alerts alert={alert} />
      <div className="container my-3">
        <Router>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  mode={mode}
                  heading="Enter the text to analyze below"
                  showAlert={showAlert}
                ></TextForm>
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
