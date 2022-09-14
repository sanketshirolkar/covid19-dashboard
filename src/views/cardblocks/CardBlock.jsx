import React from "react";
import "./cardBlock.scss";
import Card from "../../components/card/Card";
import {
  getGlobalCovidData,
  getEachCountryData,
} from "../../redux/selectors/covid_data.selectors";
import { useSelector } from "react-redux";

const CardBlock = () => {
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

  const showCards = (globalCovidData) => {
    const data = Object.keys(globalCovidData);
    return data.map((key) => {
      return <Card label={key} count={globalCovidData[key]} />;
    });
  };

  return (
    <div className="display-flex">
      <div className="card-block">
        <div className="card-container-title">
          {countryData.Country ? countryData.Country : "WORLD"}
        </div>
        {countryData.Country ? (
          <div className="card-container">{showCards(newObject)} </div>
        ) : (
          <div className="card-container">{showCards(globalCovidData)} </div>
        )}
      </div>
    </div>
  );
};

export default CardBlock;
