import React from "react";
import style from "./Mainsection.module.css";
import dropdown from "./assets/icons/drowdown.svg"

export default function Overview1() {
  return (
    <div>
      <div className={style.first_section}>
        <p>Overview</p>
        <div>
          <p>Last Month</p>
          <img src={dropdown}></img>
        </div>
      </div>
      <div className={style.second_section}>
        <div className={style.overview_card}>
          <p>Online orders</p>
          <p>231</p>
        </div>
        <div className={style.overview_card}>
          <p>Amount received</p>
          <p>₹23,92,312.19</p>
        </div>
      </div>
    </div>
  );
}
