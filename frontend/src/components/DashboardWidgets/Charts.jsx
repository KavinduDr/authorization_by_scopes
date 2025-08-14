import React from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const barData = {
  labels: [
    "Oct 2019",
    "Nov 2019",
    "Dec 2019",
    "Jan 2020",
    "Feb 2020",
    "Mar 2020",
  ],
  datasets: [
    {
      label: "Inpatients",
      backgroundColor: "#6c47ff",
      data: [1200, 1900, 3000, 2500, 2200, 3200],
    },
    {
      label: "Outpatients",
      backgroundColor: "#00c9a7",
      data: [900, 1500, 2000, 1800, 1600, 2100],
    },
  ],
};

const doughnutData = {
  labels: ["Inpatients", "Outpatients"],
  datasets: [
    {
      data: [281, 719],
      backgroundColor: ["#6c47ff", "#00c9a7"],
      borderWidth: 0,
    },
  ],
};

const genderData = {
  labels: ["Female", "Male"],
  datasets: [
    {
      data: [60, 40],
      backgroundColor: ["#ff6bcb", "#6c47ff"],
      borderWidth: 0,
    },
  ],
};

const lineData = {
  labels: ["8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM"],
  datasets: [
    {
      label: "Time Admitted",
      data: [40, 60, 80, 100, 90, 70, 50],
      fill: false,
      borderColor: "#ff6bcb",
      tension: 0.4,
    },
  ],
};

const Charts = () => (
  <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginLeft: 240 }}>
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: 24,
        flex: 2,
        minWidth: 340,
      }}
    >
      <h4 style={{ marginBottom: 16 }}>Outpatients vs. Inpatients Trend</h4>
      <Bar
        data={barData}
        options={{ responsive: true, plugins: { legend: { display: true } } }}
        height={180}
      />
    </div>
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: 24,
        flex: 1,
        minWidth: 220,
      }}
    >
      <h4 style={{ marginBottom: 16 }}>Patients by Gender</h4>
      <Doughnut
        data={genderData}
        options={{ cutout: "70%", plugins: { legend: { display: true } } }}
        height={180}
      />
    </div>
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: 24,
        flex: 1,
        minWidth: 220,
      }}
    >
      <h4 style={{ marginBottom: 16 }}>Inpatients vs. Outpatients</h4>
      <Doughnut
        data={doughnutData}
        options={{ cutout: "70%", plugins: { legend: { display: true } } }}
        height={180}
      />
    </div>
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: 24,
        flex: 2,
        minWidth: 340,
      }}
    >
      <h4 style={{ marginBottom: 16 }}>Time Admitted</h4>
      <Line
        data={lineData}
        options={{ responsive: true, plugins: { legend: { display: false } } }}
        height={180}
      />
    </div>
  </div>
);

export default Charts;
