import React from "react";
import { NavLink } from "react-router-dom";
import { MainHeader } from "./ComponentStyles/HeaderStyles";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      
      <NavLink to="/">
        <img src="./images/icon.jpg" width={50} height={50} alt="my logo img" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

export default Header;
