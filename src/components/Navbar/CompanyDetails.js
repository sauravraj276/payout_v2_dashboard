import React from "react";
import company_logo from "./assets/images/company_logo.png";
import chevron_down_icon from "./assets/icons/Chevron Down.svg";
import styles from "./Navbar.module.css";

const MyComponent = () => {
  return (
    <div className={styles.companyDetails}>
     
      <img src={company_logo} alt="Company Logo" />
      
      <div>
        <p>Nishyan</p>
        <a href="#">Visit store</a>
      </div>
      <img src={chevron_down_icon} alt="drowdown" />
    </div>
  );
};

export default MyComponent;
