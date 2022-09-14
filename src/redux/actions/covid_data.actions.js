import * as actions from "../actionConstants";

export const requestCovidData = () => ({
     type: actions.REQUEST_COVID_DATA,
});

export const storeCovidData = (data) => ({
    type: actions.STORE_COVID_DATA,
    payload:data
});

export const storeCovidCountryData = (data) => ({
    type: actions.STORE_COVID_COUNTRY_DATA,
    payload:data
});

export const storeEachCountryData = (data) => ({
    type: actions.STORE_EACH_COUNTRY_DATA,
    payload:data
});