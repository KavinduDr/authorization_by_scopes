import React from "react";

const LeftSidebar = () => (
  <div
    style={{
      width: 240,
      background: "#f7f8fa",
      minHeight: "100vh",
      padding: "2rem 1rem 1rem 1rem",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
      borderRight: "1px solid #e5e7eb",
      position: "fixed",
      top: 0,
      left: 0,
    }}
  >
    <div
      style={{ fontWeight: "bold", fontSize: "1.2rem", marginBottom: "2rem" }}
    >
      H-care
    </div>
    <button
      style={{
        background: "#6c47ff",
        color: "#fff",
        border: 0,
        borderRadius: 8,
        padding: "0.7rem 1rem",
        fontWeight: 600,
        marginBottom: 16,
        cursor: "pointer",
      }}
    >
      Register patient
    </button>
    <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <a
        href="#"
        style={{ color: "#222", textDecoration: "none", fontWeight: 500 }}
      >
        Patients
      </a>
      <a
        href="#"
        style={{ color: "#222", textDecoration: "none", fontWeight: 500 }}
      >
        Overview
      </a>
      <a
        href="#"
        style={{ color: "#222", textDecoration: "none", fontWeight: 500 }}
      >
        Map
      </a>
      <a
        href="#"
        style={{ color: "#222", textDecoration: "none", fontWeight: 500 }}
      >
        Departments
      </a>
      <a
        href="#"
        style={{ color: "#222", textDecoration: "none", fontWeight: 500 }}
      >
        Doctors
      </a>
      <a
        href="#"
        style={{ color: "#222", textDecoration: "none", fontWeight: 500 }}
      >
        History
      </a>
      <a
        href="#"
        style={{ color: "#222", textDecoration: "none", fontWeight: 500 }}
      >
        Settings
      </a>
    </nav>
    <div
      style={{
        marginTop: "auto",
        background: "#fff",
        borderRadius: 12,
        padding: 16,
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: 8 }}>Get mobile app</div>
      <div
        style={{
          display: "flex",
          gap: 8,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Apple_logo_black.svg"
          alt="Apple"
          width={24}
          height={24}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Google Play"
          width={60}
          height={60}
        />
      </div>
    </div>
  </div>
);

export default LeftSidebar;
