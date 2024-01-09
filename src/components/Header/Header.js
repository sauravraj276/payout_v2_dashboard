import React from "react";
import styles from "./Header.module.css";
import help_icon from "./assets/icons/help.svg";
import search_icon from "./assets/icons/search.svg";
import message_icon from "./assets/icons/message.svg";
import dropdown_icon from "./assets/icons/dropdown.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <p>Payments</p>
        <img src={help_icon}></img>
        <p>How it works</p>
      </div>
      <div className={styles.search}>
        <img src={search_icon}></img>
        <input placeholder="Search features, tutorials, etc."></input>
      </div>
      <div className={styles.actions}>
        <div>
          <img src={message_icon}></img>
        </div>
        <div>
          <img src={dropdown_icon}></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
