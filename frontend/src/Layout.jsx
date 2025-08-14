import React from "react";
import NavBar from "./components/navbar/NavBar";

const Layout = ({ children }) => (
  <div className="app-layout">
    <NavBar />
    <main>{children}</main>
  </div>
);

export default Layout;
