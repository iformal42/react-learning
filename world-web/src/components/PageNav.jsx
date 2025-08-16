import React from "react";
import { NavLink } from "react-router-dom";
import style from "./PageNav.module.css";
import Logo from "./Logo";
function PageNav() {
  const navItems = ["pricing", "product", "login"];
  return (
    <nav className={style.nav}>
      <Logo />
      <ul>
        {navItems.map((item) => (
          <li key={item} >
            <NavLink to={`/${item === "home" ? "" : item}`} className={item === "login" && style.ctaLink}>{item}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default PageNav;
