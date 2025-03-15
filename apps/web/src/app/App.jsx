import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/Header/Header";
import LanderContent from "../components/Lander/LanderContent";
import AuthPage from "../pages/authPage";

function App() {
  // Simple state to track login status (will be replaced with Firebase later...)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/" />
              ) : (
                <AuthPage onLoginSuccess={() => setIsLoggedIn(true)} />
              )
            }
          />

          <Route
            path="/"
            element={
              isLoggedIn ? (
                <>
                  <Header onLogout={() => setIsLoggedIn(false)} />
                  <LanderContent />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
