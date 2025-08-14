import React from "react";

const MonthStats = () => (
  <div
    style={{
      background: "#6c47ff",
      color: "#fff",
      borderRadius: 12,
      padding: 24,
      minWidth: 220,
      marginTop: 24,
      textAlign: "center",
      width: "full",
    }}
  >
    <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 8 }}>3,240</div>
    <div style={{ fontWeight: 500, marginBottom: 8 }}>Patients this month</div>
    <svg width="100%" height="40" viewBox="0 0 120 40">
      <polyline
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        points="0,30 10,20 20,25 30,10 40,15 50,5 60,15 70,10 80,20 90,15 100,25 110,20 120,30"
      />
    </svg>
    <div style={{ fontWeight: 600, marginTop: 8 }}>232</div>
  </div>
);

export default MonthStats;
