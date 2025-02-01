// import React from "react";
// import {Nav} from "./TopBarElement";
// export const TopBar = () => {
//   return (
//     <Nav>
//       <TopBar>
//         <img src="/public/surakshitha.png" alt="Surakshitha Logo" />
//         console.log(img);
//       </TopBar>
//     </Nav>
//   );
// };
//TopBar.js
import React from "react";
import {Nav, Logo} from "./TopBarElement";
const TopBar = () => {
  // Removed export here
  return (
    <Nav>
      <Logo href="/">
        <img src="/surakshitha.png" alt="Surakshitha Logo" />
      </Logo>
    </Nav>
  );
};

export default TopBar; // Export as default
