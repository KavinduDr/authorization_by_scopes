import React from "react";

const divisions = [
  { name: "Cardiology", count: 247 },
  { name: "Neurology", count: 164 },
  { name: "Surgery", count: 86 },
];

const DivisionPatients = () => (
  <div
    style={{
      background: "#fff",
      borderRadius: 12,
      padding: 24,
      minWidth: 220,
      marginTop: 24,
    }}
  >
    <h4 style={{ marginBottom: 16 }}>Patients by Division</h4>
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {divisions.map((d, i) => (
        <li
          key={i}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 8,
          }}
        >
          <span>{d.name}</span>
          <span style={{ fontWeight: 600 }}>{d.count}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default DivisionPatients;
