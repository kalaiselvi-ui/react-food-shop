import React from "react";
import bannerImg from "../../images/banner.png";
import Logo from "../common/Logo";
import "./banner.css";

const Banner = () => {
  return (
    <>
      <header>
        <div className="header-content">
          <Logo />
          <div className="content-main">
            <h2>Delicious food for your cravings</h2>
            <p>We made fresh and healthy meals with different recipes</p>
            <button>
              View Menu <i className="fa fa-long-arrow-right"></i>
            </button>
          </div>
        </div>
        <img className="header-img" src={bannerImg} alt="bannerimg" />
      </header>
    </>
  );
};

export default Banner;
