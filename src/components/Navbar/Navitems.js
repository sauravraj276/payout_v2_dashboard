// Navitems.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Navbar.module.css";


const Navitems = ({logo,title }) => {
  const images = require.context('./assets/icons', false, /\.(png|jpe?g|svg)$/);
  const imagePath = images(`./${logo}`);

  return (
    <div className={styles.navItem}>
      <img src={imagePath} alt={logo} />
      <p>{title}</p>
    </div>
  );
};

Navitems.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default Navitems;