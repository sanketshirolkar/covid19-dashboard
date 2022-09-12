import {createSelector} from "reselect";

const globalData = (state) => state.globalCovidData;

export const getGlobalCovidData = createSelector(globalData, (data)=> data?.globalCovidData || []);

