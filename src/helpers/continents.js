import axios from 'axios';

const Africa = axios.get('https://restcountries.com/v3.1/region/africa');
const Americas = axios.get('https://restcountries.com/v3.1/region/americas');
const Asia = axios.get('https://restcountries.com/v3.1/region/asia');
const Europe = axios.get('https://restcountries.com/v3.1/region/europe');
const Oceania = axios.get('https://restcountries.com/v3.1/region/oceania');

export const continents = () => {
    return [Africa, Americas, Asia, Europe, Oceania];
};
