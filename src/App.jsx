import React from "react";
import {Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import RegistrationForm from "./Components/Registration Form";
import "./App.css"


function App() {
  return (
      <>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Kalvium ❤️</Link>
              </li>
              <div className="last">
              <li>
                <Link to="/contact">Contacts</Link>
              </li>
              <li>
                <Link to='register'>Registration Form</Link>
              </li>
              </div>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </>
  );
}

export default App;