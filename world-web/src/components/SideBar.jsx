import React from "react";
import style from "./SideBar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";

function SideBar() {
  return (
    <div className={style.sidebar}>
      <Logo />
      <AppNav/>
      <Outlet/>
      <p>list of cites</p>
      <footer className={style.footer}>
        <p className={style.copyright}>&copy; Copyright</p>
      </footer>
    </div>
  );
}

export default SideBar;
