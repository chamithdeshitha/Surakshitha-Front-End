import React from "react";
import SetBackground from "../components/SetBackground.js";
import ImageSlider from "../components/ImageSlider/ImageSlider.js";
import TopBar from "../components/TopBar/TopBar.js";
import NavBar from "../components/NavBar/Navbar"; // Import TopBar

function Dashboard() {
  return (
    <div>
      <TopBar /> {/* Use the TopBar component */}
      <NavBar />
      <ImageSlider />
      <SetBackground />
      {/* ... other Dashboard content */}
    </div>
  );
}

export default Dashboard;
