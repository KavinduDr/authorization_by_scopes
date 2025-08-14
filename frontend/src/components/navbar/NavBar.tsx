import React from "react";
import SignIn from "../../pages/SignIn/SignIn";

const NavBar = () => {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100vw",
          padding: "1rem 0rem",
          background: "#181c24",
          color: "#c41717ff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          overflow: "hidden",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            letterSpacing: "1px",
            padding: "0rem 2rem",
          }}
        >
          AuthX
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            padding: "0rem 2rem",
          }}
        >
          <a
            href="#"
            style={{ color: "#fff", textDecoration: "none", fontSize: "1rem" }}
          >
            Docs
          </a>
          <a
            href="#"
            style={{ color: "#fff", textDecoration: "none", fontSize: "1rem" }}
          >
            Team
          </a>
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
