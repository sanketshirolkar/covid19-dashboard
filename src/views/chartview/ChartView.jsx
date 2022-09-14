import React, { useState, useEffect } from "react";
import "./chartview.scss";
import Charts from "../../components/chart/Chart";
import {
  getGlobalCovidData,
  getEachCountryData,
} from "../../redux/selectors/covid_data.selectors";
import { useSelector } from "react-redux";

const ChartView = () => {
  const [chartLabels, setChartLabels] = useState([]);
  const [statsLine, setStatsLine] = useState([]);
  const globalCovidData = useSelector(getGlobalCovidData);
  const countryData = useSelector(getEachCountryData);

  let newObject = {
    Cases: countryData.TotalConfirmed,
    Active: countryData.TotalConfirmed - countryData.TotalRecovered,
    "Today's Cases": countryData.NewConfirmed,
    Deaths: countryData.TotalDeaths,
    "Today's Deaths": countryData.NewDeaths,
    Recovered: countryData.TotalRecovered,
  };

  useEffect(() => {
    if (countryData?.Country) {
      const data = Object.keys(newObject);
      const statsData = Object.values(newObject);
      setStatsLine(statsData);
      setChartLabels(data);
    } else {
      const data = Object.keys(globalCovidData);
      const statsData = Object.values(globalCovidData);
      setStatsLine(statsData);
      setChartLabels(data);
    }
  }, [globalCovidData, countryData]);

  return (
    <div className="chart-container">
      <Charts chartLabels={chartLabels} statsLine={statsLine} />
    </div>
  );
};

export default ChartView;
