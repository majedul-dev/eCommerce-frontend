import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { gadgetCat, bannerData } from "../../constants/heroData";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__featuredLinks">
        <ul>
          <li>Featured Links</li>
          {gadgetCat.map((item) => (
            <Link key={item.id} to={item.url}>
              <li className="hero__featuredLinks__item">
                <img src={item.img} alt="" className="gadget" />
                <div>{item.title}</div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="hero__slider">
        <AliceCarousel
          autoPlay
          infinite={true}
          animationType="fadeout"
          autoPlayInterval={2000}
          disableButtonsControls
        >
          {bannerData.map((item) => (
            <div key={item.id} className="hero__slide">
              <img src={item.img} alt="" className="sliderimg" />
              <div
                className={`hero__slideContent ${item.impClass} ${
                  item.alignItemsCenter && item.alignItemsCenter
                }`}
              >
                <h1 className={item.blackColor && item.blackColor}>
                  {item.title}
                </h1>
                <h2 className={item.primaryColor && item.primaryColor}>
                  {item.offerTitle}
                </h2>
                <p className={item.blackColor && item.blackColor}>
                  {item.text}
                </p>
                <Link to={item.url}>
                  <button className="btn-slide">Shop now</button>
                </Link>
              </div>
            </div>
          ))}
        </AliceCarousel>
      </div>
    </div>
  );
};

export default Hero;
