import React from "react";

const stats = [
  { label: "Total Patients", value: 3256 },
  { label: "Available Staff", value: 394 },
  { label: "Avg. Treat. Costs", value: "$2,536" },
  { label: "Available Cars", value: 38 },
];

const StatsCards = () => (
  <div
    style={{
      display: "flex",
      gap: 24,
      marginBottom: 24,
      marginLeft: 240,
      marginTop: 60,
    }}
  >
    {stats.map((stat, i) => (
      <div
        key={i}
        style={{
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          padding: 24,
          minWidth: 160,
          textAlign: "center",
        }}
      >
        <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 8 }}>
          {stat.value}
        </div>
        <div style={{ color: "#888", fontWeight: 500 }}>{stat.label}</div>
      </div>
    ))}
  </div>
);

export default StatsCards;
