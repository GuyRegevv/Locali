import React, { useState } from "react";
import Header from "../components/Header/Header";
import MainContent from "../components/Lander/LanderMainContent";
import AuthPage from "../pages/authPage";

function App() {
  // For step 1, we'll use a simple state to toggle between auth and main page
  // Later this will be replaced with proper authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {isLoggedIn ? (
        // Main app when logged in
        <>
          <Header onLogout={() => setIsLoggedIn(false)} />
          <MainContent />
        </>
      ) : (
        // Auth page when not logged in
        <AuthPage onLoginSuccess={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
