// import styled from "styled-components";
// //import {NavLink as Link} from "react-router-dom"; May be Useful if I need it set Url for the
// //.nav is the actual tag used in NavBar Index.js
// export const TopBar = styled.nav`
//   background: #d9d9d9;
//   height: 120px;
//   display: flex;
//   justify-content: space-between;
// `;
// export const Logo = styled.a`
//   display: flex;
//   align-items: center;
//   img {
//     height: 80px;
//   }
//`;
import styled from "styled-components";

export const Nav = styled.nav`
  background: #d9d9d9;
  height: 120px;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  margin-left: 60px;
  img {
    height: 150px;
    width: 150px;
  }
`;
