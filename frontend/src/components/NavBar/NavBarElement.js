import styled from "styled-components";
import {NavLink as Link} from "react-router-dom";
//.nav is the actual tag used in NavBar Index.js
export const Nav = styled.nav`
  background: #3a8cff;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;
export const NavLink = styled(Link)`
  color: #faf5f3;
  display: flex;
  font-weight: 600;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #fff;
    font-weight: 800;
  }
`;
export const NavMenu = styled.div`
  margin-left: 80px;
  margin-right: 80px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    // this is the breakpoint for mobile
    display: none;
  }
`;
