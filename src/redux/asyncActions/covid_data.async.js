import axios from "axios";

const url = "https://api.covid19api.com/summary";

export const requestCovidDataAsync = () => {
    return axios.get(url);
};