import React, { useEffect, useState } from "react";
import "./dashboard.scss";
import Charts from "../../components/chart/Chart";
import Card from "../../components/card/Card";
import { useSelector, useDispatch } from "react-redux";
import { requestCovidData } from "../../redux/actions/covid_data.actions";
import { getGlobalCovidData } from "../../redux/selectors/covid_data.selectors";

const Dashboard = () => {
  const dispatch = useDispatch();
  const globalCovidData = useSelector(getGlobalCovidData);
  const [chartLabels, setChartLabels] = useState([]);
  const [statsLine, setStatsLine] = useState([]);

  useEffect(() => {
    dispatch(requestCovidData());
  }, [dispatch]);

  const showCards = (globalCovidData) => {
    const data = Object.keys(globalCovidData);
    return data.map((key) => {
      return <Card label={key} count={globalCovidData[key]} />;
    });
  };

  useEffect(() => {
    const data = Object.keys(globalCovidData);
    const statsData = Object.values(globalCovidData);
    setStatsLine(statsData);
    setChartLabels(data);
  }, [globalCovidData]);

  return (
    <div className="main-container">
      <div className="header">
        <span className="title">COVID19</span>
        <span className="date">13/09/2022</span>
      </div>
      <div className="display-flex">
        <div className="card-block">
          <div className="card-container-title">World</div>
          <div className="card-container">{showCards(globalCovidData)} </div>
        </div>
      </div>
      <div className="details-container">
        <div className="right-panel">
          <div className="chart-container">
            <Charts chartLabels={chartLabels} statsLine={statsLine} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
