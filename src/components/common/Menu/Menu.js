import React from "react";
import MenuItem from "./MenuItem";
import "./style.css";

const Menu = ({ list }) => {
  return (
    <main>
      {list.map((item) => (
        <MenuItem item={item} key={item.id} />
      ))}
    </main>
  );
};

export default Menu;
