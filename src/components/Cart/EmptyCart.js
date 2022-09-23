import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import empty from "../../images/emptycart.png";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="emptyCart">
      <img src={empty} alt="empty" />
      <button onClick={() => navigate("/")}>
        <i className="fas fa-long-arrow-alt-left"></i>
        Shop Now
      </button>
    </div>
  );
};

export default EmptyCart;
