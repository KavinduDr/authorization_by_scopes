import React from "react";
import NavBar from "../../components/navbar/NavBar";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import StatsCards from "../../components/DashboardWidgets/StatsCards";
import Charts from "../../components/DashboardWidgets/Charts";
import DivisionPatients from "../../components/DashboardWidgets/DivisionPatients";
import MonthStats from "../../components/DashboardWidgets/MonthStats";

const Dashboard = () => (
  <div className="dashboard-page">
    <LeftSidebar />
    <StatsCards />
    <Charts />
    <div
      style={{
        marginLeft: 240,
        display: "flex",
        gap: 24,
        justifyContent: "space-between",
      }}
    >
      <DivisionPatients />
      <MonthStats />
    </div>
  </div>
);

export default Dashboard;
