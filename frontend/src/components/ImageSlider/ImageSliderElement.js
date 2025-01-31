import React, {useState} from "react";
const ImageSliderElement = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const sliderStyles = {
    position: "relative",
    width: "100%",
    height: "100%",
  };
  const slidesStyles = {
    backgroundImage: `url(${slides[current].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
  };
  return (
    <div style={sliderStyles}>
      <div style={slidesStyles}></div>
    </div>
  );
};
export default ImageSliderElement;
