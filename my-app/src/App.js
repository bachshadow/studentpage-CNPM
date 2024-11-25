import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/landing"; 
import Home from "./components/home"; 
import Print from "./components/print";
import Buy from "./components/buy";
import Profile from "./components/profile";
import History from "./components/history";
import Login from "./components/login";
// import Settings from "./Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/print" element={<Print />} /> 
        <Route path="/buy" element={<Buy />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/login" element={<Login />} />
        {/* 
        <Route path="/settings" component={Settings} /> */}
      </Routes>
    </Router>
  );
}

export default App;
