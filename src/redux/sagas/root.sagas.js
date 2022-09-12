import {all, fork} from "redux-saga/effects";
import * as covidDataSaga from "./covid_data.saga";

export default function* rootSaga () {
    yield all(
        [...Object.values(covidDataSaga)].map(fork)
    );
};