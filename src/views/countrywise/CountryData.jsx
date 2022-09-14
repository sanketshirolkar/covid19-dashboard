import React, { useState, useEffect } from "react";
import "./countryData.scss";
import { getCovidCountryData } from "../../redux/selectors/covid_data.selectors";
import { useSelector, useDispatch } from "react-redux";
import { storeEachCountryData } from "../../redux/actions/covid_data.actions";

const CountryData = () => {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState("");
  const countryList = useSelector(getCovidCountryData);

  const countryListData = () => {
    if (searchKey) {
      let result = countryList.filter((searchList) =>
        searchList?.Country?.toLowerCase().includes(searchKey.toLowerCase())
      );
      return result.map((country) => countryData(country));
    } else {
      return countryList.map((country) => countryData(country));
    }
  };

  const countryData = (data) => {
    return (
      <div
        key={data?.CountryCode}
        className="country-row"
        onClick={changeSelectedCountry.bind(null, data)}
      >
        {data.Country}
      </div>
    );
  };

  const changeSelectedCountry = (country) => {
    dispatch(storeEachCountryData(country));
  };

  const searchHandler = (event) => {
    const val = event.target.value;
    setSearchKey(val);
  };

  return (
    <div>
      <input
        className="search-field"
        onChange={searchHandler}
        value={searchKey}
        placeholder="Search by Country"
      ></input>
      <div className="country-list">
        {countryList && countryList.length ? (
          countryListData()
        ) : (
          <span>No list</span>
        )}
      </div>
    </div>
  );
};

export default CountryData;
