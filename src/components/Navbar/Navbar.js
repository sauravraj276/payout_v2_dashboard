// Navbar.js
import React from "react";
import styles from "./Navbar.module.css";
import CompanyDetails from "./CompanyDetails";
import Navitems from "./Navitems";
import AvailableCredit from "./AvailableCredits";

const Navbar = () => {
  const navItemsData = [
    { logo: "Vector.svg", title: "Home" },
    { logo: "Navbar Icon.svg", title: "Orders" },
    { logo: "Navbar Icon-1.svg", title: "Products" },
    { logo: "Navbar Icon-2.svg", title: "Delivery" },
    { logo: "Navbar Icon-3.svg", title: "Marketing" },
    { logo: "Navbar Icon-4.svg", title: "Analytics" },
    { logo: "Navbar Icon-5.svg", title: "Payments" },
    { logo: "Navbar Icon-6.svg", title: "Tools" },
    { logo: "Navbar Icon-7.svg", title: "Discount" },
    { logo: "Navbar Icon-8.svg", title: "Audience" },
    { logo: "Navbar Icon-9.svg", title: "Appearance" },
    { logo: "Navbar Icon-10.svg", title: "Plugins" },
  ];


  return (
    <div className={styles.myNavbar}>
      
      <CompanyDetails />
      <div className={styles.navItems}>
        {navItemsData.map((item, index) => (
          <Navitems key={index} logo={item.logo} title={item.title} />
        ))}
        </div>
     
      <AvailableCredit/>
    </div>
  );
};

export default Navbar;
