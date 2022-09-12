import * as actions from "../actionConstants";

const initialState = {
    globalCovidData: [],
};

const storeCovidData = (state, action) =>{
    return {
        ...state, 
        globalCovidData: action.payload,
    }
};


const handlers = {
    [actions.STORE_COVID_DATA]: storeCovidData,
};


const globalCovidDataReducers = (state = initialState, action) => {
    const handler = handlers[action.type];
    if(typeof handler === "undefined"){
        return state;
    };

    return handler(state, action);

};

export default globalCovidDataReducers;