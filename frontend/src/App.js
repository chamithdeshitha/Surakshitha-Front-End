import React from "react";
import "./App.css";
import {Navbar} from "./components/NavBar/Navbar";
//import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";
import {TopBar} from "./components/TopBar/TopBarElement";
import ImageSlider from "./components/ImageSlider/ImageSlider";
// const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
console.log(Navbar);
function App() {
  return (
    <>
      {/* This is a Frament Check if it will raise any error later */}
      <TopBar></TopBar>
      <Router>
        <Navbar />
      </Router>
      <ImageSlider />
    </>

    // {/* <header>
    //   <NavigationBar></NavigationBar>
    // </header> */}
  );
}

export default App;
