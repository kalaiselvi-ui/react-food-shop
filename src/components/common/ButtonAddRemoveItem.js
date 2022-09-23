import React from "react";
import "./style.css";

const ButtonAddRemoveItem = ({ quantity, handleAddItem, handleRemoveItem }) => {
  return (
    <div className="btnAddRemove">
      {quantity !== 0 ? (
        <div className="btnAddRemove-positive">
          <i className="fa fa-minus" onClick={handleRemoveItem} />
          <span>{quantity}</span>
          <i className="fa fa-plus" onClick={handleAddItem} />
        </div>
      ) : (
        <div className="btnAddRemove-negative" onClick={handleAddItem}>
          <span>ADD</span>
          <i className="fa fa-plus"></i>
        </div>
      )}
    </div>
  );
};

export default ButtonAddRemoveItem;
