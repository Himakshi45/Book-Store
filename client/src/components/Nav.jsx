import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./ComponentStyles/NavStyles";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { VscAccount } from "react-icons/vsc";
import {BsFillArrowDownSquareFill} from "react-icons/bs";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();

  return (
    <Navbar>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
         
       
          <li>
            <Link
              to="/books"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              Books
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item"> 10 </span>
            </Link>
          </li>
          <li>
            <Link to="/login" className="navbar-link account ">
              <VscAccount />
              <Link to="/login"className="navbar-link account ">
              <BsFillArrowDownSquareFill/>
              </Link>
            </Link>
          </li>
         
        </ul>

        {/* two button for open and close of menu */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Navbar>
  );
};

export default Nav;
