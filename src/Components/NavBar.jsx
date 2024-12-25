import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <NavLink to="/" className={styles.logo}>
        Логотип
      </NavLink>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
        >
          Главная
        </NavLink>
        <NavLink
          to="/game"
          className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
        >
          Карточки
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
