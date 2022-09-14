import * as actions from "../actionConstants";

const initialState = {
    globalCovidData: {},
    covidCountryData: [],
    eachCountryData:{},

};

const storeCovidData = (state, action) =>{
    return {
        ...state, 
        globalCovidData: action.payload,
    }
};

const storeCovidCountryData = (state, action) =>{
    return {
        ...state, 
        covidCountryData: action.payload,
    }
};

const storeEachCountryData = (state, action) =>{
    return {
        ...state, 
        eachCountryData: action.payload,
    }
};


const handlers = {
    [actions.STORE_COVID_DATA]: storeCovidData,
    [actions.STORE_COVID_COUNTRY_DATA]: storeCovidCountryData,
    [actions.STORE_EACH_COUNTRY_DATA]: storeEachCountryData,
};


const globalCovidDataReducers = (state = initialState, action) => {
    const handler = handlers[action.type];
    if(typeof handler === "undefined"){
        return state;
    };

    return handler(state, action);

};

export default globalCovidDataReducers;