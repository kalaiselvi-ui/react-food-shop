import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const CartCountButton = ({ cartCount }) => {
  const navigate = useNavigate();

  cartCount = 101;
  return (
    <div className="btnCartCount" onClick={() => navigate("/cart")}>
      <div className="count">{cartCount >= 100 ? "99+" : cartCount}</div>
      <i className="fas fa-shopping-cart"></i>
    </div>
  );
};

export default CartCountButton;
