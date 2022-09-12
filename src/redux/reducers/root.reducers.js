import { combineReducers } from "redux";
import globalCovidData from "./covid_data.reducers";


const reducers = combineReducers({
    globalCovidData 
});
export default reducers;