import {call, takeLatest, put} from "redux-saga/effects";
import * as actions from "../actionConstants";
import {storeCovidData} from "../actions/covid_data.actions";
import { requestCovidDataAsync } from "../asyncActions/covid_data.async";


function* requestCovidData () {
    try{
        const response = yield call(requestCovidDataAsync); 
            if(response){
                yield put(storeCovidData(response?.data));
            }
        }catch(e){
            return e;
    }
}

export function* covidDataSaga() {
    yield takeLatest(actions.REQUEST_COVID_DATA, requestCovidData);
}