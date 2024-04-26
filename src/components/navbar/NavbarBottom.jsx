// import React from "react";
import "../../sass/__navbarBottom.scss";
import {NavLink} from "react-router-dom"
import bottomimg from "../../assets/images/bottmimg.png";
import search from "../../assets/images/search.png";
import avatar from "../../assets/images/navAvatar.png";
import heart from "../../assets/images/navHeart.png";
import shop from "../../assets/images/navShop.png";
import logo from "../../assets/images/logo.png";

const NavbarBotttom = () => {
  return (
    <div className="navbarbottom__section">
      <div className="container">
        <div className="navbarbottom__wrapper">
          <div className="navbarbottom__logo">
            <NavLink to={"/"}>
               <img src={logo} alt="" />
            </NavLink>
          </div>
          <div className="navbarbottom-search">
            <form>
              <input type="text" placeholder="Search For items..." />
              <div>
                <button className="btn1">
                  <p>All Categories</p>
                  <img src={bottomimg} alt="" />
                </button>
                <button className="btn2">
                  <img src={search} alt="" />
                </button>
              </div>
            </form>
          </div>
          <div className="navbar__bottom-shop">
            <div>
              <img src={avatar} alt="" />
              <p>Account</p>
            </div>
            <div>
              <img src={heart} alt="" />
              <p>Wishlist</p>
            </div>
            <div>
              <img src={shop} alt="" />
              <p>Cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarBotttom;
