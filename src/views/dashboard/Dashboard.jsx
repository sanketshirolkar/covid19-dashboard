import React, { useEffect } from "react";
import "./dashboard.scss";
import { useDispatch } from "react-redux";
import { requestCovidData } from "../../redux/actions/covid_data.actions";
import CardBlock from "../cardblocks/CardBlock";
import ChartView from "../chartview/ChartView";
import CountryData from "../countrywise/CountryData";

const Dashboard = () => {
  const dispatch = useDispatch();
  const moment = require("moment");
  const selectedDate = new Date();

  useEffect(() => {
    dispatch(requestCovidData());
  }, [dispatch]);

  return (
    <div className="main-container">
      <div className="header">
        <span className="title">COVID19</span>
        <span className="date">
          {moment(selectedDate).format("DD/MM/YYYY")}
        </span>
      </div>
      <div>
        <CardBlock />
      </div>
      <div className="details-container">
        <div className="left-panel">
          <CountryData />
        </div>
        <div className="right-panel">
          <ChartView />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
