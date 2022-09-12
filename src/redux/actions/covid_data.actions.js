import * as actions from "../actionConstants";

export const requestCovidData = () => ({
     type: actions.REQUEST_COVID_DATA,
});

export const storeCovidData = (data) => ({
    type: actions.STORE_COVID_DATA,
    payload:data
});