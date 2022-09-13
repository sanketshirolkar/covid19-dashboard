import React from "react";
import "./cardBlock.scss";
import Card from "../../components/card/Card";
import { getGlobalCovidData } from "../../redux/selectors/covid_data.selectors";
import { useSelector } from "react-redux";

const CardBlock = () => {
  const globalCovidData = useSelector(getGlobalCovidData);

  const showCards = (globalCovidData) => {
    const data = Object.keys(globalCovidData);
    return data.map((key) => {
      return <Card label={key} count={globalCovidData[key]} />;
    });
  };

  return (
    <div className="display-flex">
      <div className="card-block">
        <div className="card-container-title">World</div>
        <div className="card-container">{showCards(globalCovidData)} </div>
      </div>
    </div>
  );
};

export default CardBlock;
