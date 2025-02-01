// import React, {useState} from "react";
// const ImageSliderElement = ({slides}) => {
//   const [current, setCurrent] = useState(0);
//   const sliderStyles = {
//     position: "relative",
//     width: "100%",
//     height: "100%",
//   };
//   const slidesStyles = {
//     backgroundImage: `url(${slides[current].url})`,
//     backgroundPosition: "center",
//     backgroundSize: "cover",
//     height: "100vh",
//     width: "100%",
//   };
//   return (
//     <div style={sliderStyles}>
//       <div style={slidesStyles}></div>
//     </div>
//   );
// };
// export default ImageSliderElement;
import React, {useState, useEffect} from "react";
import LoginForm from "../LoginForm";

const ImageSliderElement = ({slides}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 1500); // Change every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  const sliderStyles = {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
  };

  const slideStyles = {
    backgroundImage: `url(${slides[current].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
    transition: "background-image 0.5s ease-in-out",
  };

  return (
    <div style={sliderStyles}>
      <div style={slideStyles}></div>
      {/* Import Login Form */}
      <LoginForm />
    </div>
  );
};

export default ImageSliderElement;
