import React, { useState, useEffect } from "react";
import "./chartview.scss";
import Charts from "../../components/chart/Chart";
import { getGlobalCovidData } from "../../redux/selectors/covid_data.selectors";
import { useSelector } from "react-redux";

const ChartView = () => {
  const [chartLabels, setChartLabels] = useState([]);
  const [statsLine, setStatsLine] = useState([]);
  const globalCovidData = useSelector(getGlobalCovidData);

  useEffect(() => {
    const data = Object.keys(globalCovidData);
    const statsData = Object.values(globalCovidData);
    setStatsLine(statsData);
    setChartLabels(data);
  }, [globalCovidData]);

  return (
    <div className="chart-container">
      <Charts chartLabels={chartLabels} statsLine={statsLine} />
    </div>
  );
};

export default ChartView;
