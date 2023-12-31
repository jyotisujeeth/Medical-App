import React from "react";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Medical Care The Medicine Shop</h1>
        <button className={classes.btn} onClick={props.onClick}>
          Cart
        </button>
      </header>
    </>
  );
};

export default Header;
