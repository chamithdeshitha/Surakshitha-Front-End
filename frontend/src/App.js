import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard.js";
//import News from "./pages/News"; // Create News.js in pages directory
//import Events from "./pages/Events"; // Create Events.js in pages directory
//import About from "./pages/About"; // Create About.js in pages directory
//import Home from "./pages/Home"; // Create Home.js in pages directory

function App() {
  return (
    <Router>
      <Dashboard></Dashboard>
      <Routes>
        {/* <Route path="/" element={<Home />} /> {/* Route for Home */}
        {/* <Route path="/news" element={<News />} /> {/* Route for News */}
        {/*<Route path="/events" element={<Events />} /> Route for Events */}
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />{" "}
        {/* Route for Dashboard */}
      </Routes>
    </Router>
  );
}

export default App;
