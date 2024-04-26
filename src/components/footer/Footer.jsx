import React from "react";
import "../../sass/__footer.scss";
import location from "../../assets/images/footer_location.png";
import massage from "../../assets/images/footer_massage.png";
import call from "../../assets/images/footer_call.png";
import post from "../../assets/images/f_post.png";
import facebook from "../../assets/images/facebook.png";
import X from "../../assets/images/X.png";
import net from "../../assets/images/net.png";
import insta from "../../assets/images/instagram.png";
import fImg1 from "../../assets/images/f_img1/Group - 6/18 → Link → 1.jpg.png";
import fImg2 from "../../assets/images/f_img2/Group - 7/18 → Link → 2.jpg.png";
import fImg3 from "../../assets/images/f_img3/Group - 8/18 → Link → 3.jpg.png";
import fImg4 from "../../assets/images/f_img4/Group - 9/18 → Link → 4.jpg.png";
import fImg5 from "../../assets/images/f_img5/Group - 10/18 → Link → 5.jpg.png";
import f_logo from "../../assets/images/footer_logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__section">
          <div className="footer__logo">
           <img src={f_logo} alt="" />
            <p className="par">
              FoodTrove is the biggest market of grocery products. Get your
              daily needs from our store.
              <span></span>
            </p>
            <div>
              <img src={location} alt="" />
              <p>
                51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783,
                USA.
              </p>
            </div>
            <div>
              <img src={massage} alt="" />
              <p>example@email.com</p>
            </div>
            <div>
              <img src={call} alt="" />
              <p>+91 123 4567890</p>
            </div>
          </div>
          <div className="footer__company">
            <h3>Company</h3>
            <p>Delivery Information</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>contact Us</p>
            <p>Support Center</p>
          </div>
          <div className="footer__category">
            <h3>Category</h3>
            <p>Dairy & Bakery</p>
            <p>Fruits & Vegetable</p>
            <p>Snack & Spice</p>
            <p>Juice & Drinks</p>
            <p>Chicken & Meat</p>
            <p>Fast Food</p>
          </div>
          <div className="footer__subs">
            <h3>Subscribe Our Newsletter</h3>
            <form>
              <input type="text" placeholder="Search here..." />
              <img src={post} alt="" />
            </form>
            <div className="media">
              <button>
                <img src={facebook} alt="" />
              </button>
              <button>
                <img src={X} alt="" />
              </button>
              <button>
                <img src={net} alt="" />
              </button>
              <button>
                <img src={insta} alt="" />
              </button>
            </div>
            <div className="prodact">
              <img src={fImg1} alt="" />
              <img src={fImg2} alt="" />
              <img src={fImg3} alt="" />
              <img src={fImg4} alt="" />
              <img src={fImg5} alt="" />
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© 2024</p>
          <p>
            <span>FoodTrove</span>, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
