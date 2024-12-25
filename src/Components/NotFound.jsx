import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>404 - Страница не найдена</h1>
      <NavLink to="/" className={styles.link}>
        Вернуться на главную
      </NavLink>
    </div>
  );
};

export default NotFound;
