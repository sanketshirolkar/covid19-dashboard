import {createSelector} from "reselect";

const globalData = (state) => state.globalCovidData;

export const getGlobalCovidData = createSelector(globalData, (data)=> data?.globalCovidData || {});

export const getCovidCountryData = createSelector(globalData, (data)=> data?.covidCountryData || []);


