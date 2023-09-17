import React from "react";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <div>
          <div>
            <Link to="/">Logo</Link>
          </div>
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
          <div>
            <Link to="/products">Products</Link>
          </div>
          <div>
            <Link to="/contacts">Contact</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
