import React from "react";
import styles from "./Table.module.css";
import leftArrow_icon from "./assets/icons/arrow_left.svg";
import rigntArrow_icon from "./assets/icons/arrow_right.svg";

const generateDivs = () => {
  const divList = [];
  divList.push(
    <div key={1}>
      <p>1</p>
    </div>
  );
  divList.push(
    <div key={`ellipsis`}>
      <p>&hellip;</p>
    </div>
  );
  for (let i = 10; i <= 17; i++) {
    divList.push(
      <div key={i}>
        <p> {i}</p>
      </div>
    );
  }
  return divList;
};

export default function Pagenation() {
  return (
    <div className={styles.pagenation}>
      <div className={styles.pre_next}>
        <img src={leftArrow_icon}></img>
        <p>Previous</p>
      </div>
      <div className={styles.pagenumbers}>{generateDivs()}</div>
      <div className={styles.pre_next}>
        <p>Next</p>
      <img src={rigntArrow_icon}></img>
      </div>
    </div>
  );
}
