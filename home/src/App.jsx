import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./pages/Nav";
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";
import About from "./pages/About";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Nav
          onLoginClick={() => setShowLogin(true)}
          onSignupClick={() => setShowSignup(true)}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {showLogin && (
          <Login
            onClose={() => setShowLogin(false)}
            openSignup={() => {
              setShowLogin(false);
              setShowSignup(true);
            }}
          />
          
        )}

        {showSignup && (
          <Signup
            onClose={() => setShowSignup(false)}
            openLogin={() => {
              setShowSignup(false);
              setShowLogin(true);
            }}
          />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;