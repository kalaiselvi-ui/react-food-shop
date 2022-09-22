import React from "react";

const MenuItem = ({ item }) => {
  const { id, name, info, price, img } = item;
  return (
    <div className="item">
      <img src={img} alt="item" />
      <div className="item-head_desc">
        <p className="head_desc-name">{name}</p>
        <p className="head_desc_info">
          <small>{info}</small>
        </p>
      </div>
      <div className="item-foot_desc">
        <span className="foot_desc-price">${price}</span>
        <button>Add +</button>
      </div>
    </div>
  );
};

export default MenuItem;