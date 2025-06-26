// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landingpage";
import CreateAccount from "./components/create.jsx";
import SignIn from "./components/SignIn.jsx";
import { ThemeProvider } from "./context/Themecontext.jsx";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
