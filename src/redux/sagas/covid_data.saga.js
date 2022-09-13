import {call, takeLatest, put} from "redux-saga/effects";
import * as actions from "../actionConstants";
import {storeCovidCountryData, storeCovidData} from "../actions/covid_data.actions";
import { requestCovidDataAsync } from "../asyncActions/covid_data.async";


function* requestCovidData () {
    try{
        const response = yield call(requestCovidDataAsync); 
            if(response){
                let newObject = {
                    Cases: response?.data?.Global.TotalConfirmed,
                    Active: response?.data?.Global.TotalConfirmed - response?.data?.Global.TotalRecovered,
                     "Today's Cases": response?.data?.Global.NewConfirmed,
                    Deaths: response?.data?.Global.TotalDeaths,
                    "Today's Deaths": response?.data?.Global.NewDeaths,
                    Recovered: response?.data?.Global.TotalRecovered,
                };
                yield put(storeCovidData(newObject));
                yield put(storeCovidCountryData(response?.data?.Countries));
            }
        }catch(e){
            return e;
    }
}

export function* covidDataSaga() {
    yield takeLatest(actions.REQUEST_COVID_DATA, requestCovidData);
}