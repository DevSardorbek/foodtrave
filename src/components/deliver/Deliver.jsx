import React from "react";
import "../../sass/__deliver.scss";
import deliverimg1 from "../../assets/images/deliverimg1.png";
import deliverimg2 from "../../assets/images/deliverimg2.png";
import deliverimg3 from "../../assets/images/deliverimg3.png";
import deliverimg4 from "../../assets/images/deliverimg4.png";
import deliverimg5 from "../../assets/images/deliverimg5.png";

const data = [
  {
    id: 1,
    img: deliverimg1,
    title: "Best prices & offers",
    desc: "Orders $50 or more",
  },
  {
    id: 2,
    img: deliverimg2,
    title: "Free delivery",
    desc: "24/7 amazing services",
  },
  {
    id: 3,
    img: deliverimg3,
    title: "Great daily deal",
    desc: "When you sign up",
  },
  {
    id: 4,
    img: deliverimg4,
    title: "Wide assortment",
    desc: "Mega Discounts",
  },
  {
    id: 5,
    img: deliverimg5,
    title: "Easy returns",
    desc: "Within 30 days",
  },
];

const Deliver = () => {
  let cards = data?.map((el) => (
    <div key={el.id} className="deliver__card">
      <img src={el.img} alt="" />
      <div>
        <h3>{el.title}</h3>
        <p>{el.desc}</p>
      </div>
    </div>
  ));
  return (
    <div className="deliver__wrapper">
      <div className="container">
        <div className="deliver__section">{cards}</div>
      </div>
    </div>
  );
};

export default Deliver;
