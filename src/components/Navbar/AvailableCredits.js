import React from "react";
import styles from "./Navbar.module.css";
import wallet_logo from "./assets/icons/wallet.svg";

export default function AvailableCredits() {
  return (
    <div className={styles.availableCredits}>
      <img src={wallet_logo} alt="Company Logo" />
      <div>
        <p>Available credits</p>
        <p>222.10</p>
      </div>
    </div>
  );
}
