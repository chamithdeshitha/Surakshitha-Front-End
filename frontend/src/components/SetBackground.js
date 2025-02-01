import React from "react";

function SetBackground() {
  const imageUrls = [
    {url: "/bg-1.jpg"}, // Or use process.env.PUBLIC_URL + '/bg-1.jpg'
  ];

  // Choose how to display the image:

  // Option 1: Display the first image in the array (if you only want one)
  const firstImage = imageUrls[0];

  // Option 2: Map through the array to display all images (if you have multiple)
  // (This requires adjusting the return statement a bit)

  return (
    <div style={{position: "relative", height: "100vh"}}>
      <div style={{width: "100%", height: "100%", overflow: "hidden"}}>
        {/* Option 1: Display the first image */}
        <img
          src={firstImage.url}
          alt="Background"
          style={{width: "100%", height: "100%", objectFit: "cover"}}
        />
      </div>
      <div style={{width: "100%", height: "100%", overflow: "hidden"}}>
        {/* Option 1: Display the first image */}
        <img
          src={firstImage.url}
          alt="Background"
          style={{width: "100%", height: "100%", objectFit: "cover"}}
        />
      </div>
    </div>
  );
}

export default SetBackground;
