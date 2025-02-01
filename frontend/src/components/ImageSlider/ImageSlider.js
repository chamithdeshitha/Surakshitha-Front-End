import React from "react";
import ImageSliderElement from "../ImageSlider/ImageSliderElement.js";
const ImageSlider = () => {
  const slides = [
    {url: "http://localhost:3000/image-1.jpg", title: "Slide 1"},
    {url: "http://localhost:3000/image-2.jpg", title: "Slide 2"},
    {url: "http://localhost:3000/image-3.jpg", title: "Slide 3"},
  ];
  const containerStyles = {
    position: "relative",
    height: "80vh",
    width: "100%",
    margin: "0 auto",
    overflow: "hidden",
  };
  return (
    <div>
      <div style={containerStyles}>
        <ImageSliderElement slides={slides} />
      </div>
    </div>
  );
};
export default ImageSlider;
