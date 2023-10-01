import React from "react";
import "../styles/dashboard.scss";
import SingleCard from "../components/reuseable/SingleCard";
import MileCharts from "../charts/MileCharts";
import CarStatsChar from "../charts/CarStatsChar";
import Recommend from "../components/UI/Recommend";

import recommendCardData from "../assets/fetch-data/recomendedCars";

const Dashboard = () => {
  const CarObj = {
    title: "Total  Cars",
    totalNumber: 750,
    icon: "ri-police-car-line",
  };
  const tripObj = {
    title: "Daily  Way",
    totalNumber: 1301,
    icon: "ri-steering-2-fill",
  };
  const ClientOb = {
    title: "Client Annually",
    totalNumber: "85k",
    icon: "  ri-map-pin-user-fill",
  };
  const DistanceDaily = {
    title: "Klometre daily",
    totalNumber: "2645",
    icon: "  ri-timer-flash-line",
  };
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={CarObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={ClientOb} />
          <SingleCard item={DistanceDaily} />
        </div>
        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Miles Statics</h3>
            <MileCharts />
          </div>
          <div className="stats">
            <h3 className="stats__title">Car Statics</h3>
            <CarStatsChar />
          </div>
        </div>

        <div className="recommed__cars__wrapper">
          {recommendCardData.map((item, index) => (
            <Recommend key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
