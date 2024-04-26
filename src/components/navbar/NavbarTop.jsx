import React from "react";
import "../../sass/__navbarTop.scss";
import {NavLink, Navigate} from "react-router-dom"
import { RiMenu3Line } from "react-icons/ri";
import bottomimg from "../../assets/images/bottmimg.png";
import call from "../../assets/images/call.png";
const isLogin= localStorage.getItem("token" )
const Navbar = () => {
 const checkLogin = ()=>{
  if(isLogin) {
    localStorage.removeItem("token")
  }
  Navigate("/login")

 }
  return (
    <div className="headertop__section">
      <div className="container">
        <div className="header__top-wrapper">
          <div className="navbar__top-menu">
            <RiMenu3Line />
          </div>
          <div className="navbar__top-links">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"catrgory"}>
              <p>Category</p>
              <img src={bottomimg} alt="" />
            </NavLink>
            <NavLink to={"products"}>
              <p>Products</p>
              <img src={bottomimg} alt="" />
            </NavLink>
            <NavLink to={"/pages"}>
              <p>Pages</p>
              <img src={bottomimg} alt="" />
            </NavLink>
            <NavLink to={"/blog"}>
              <p>Blog</p>
              <img src={bottomimg} alt="" />
            </NavLink>
            <NavLink to={"/elements"}>
              <p>Elements</p>
              <img src={bottomimg} alt="" />
            </NavLink>
            <NavLink to={"/login"} onClick={checkLogin}>
              <p>{isLogin ? "Log Out" : "Login"}</p>
            </NavLink>
          </div>
          <div className="navbar__top-call">
            <img src={call} alt="" />
            <p>+123 ( 456 ) ( 7890 )</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
