import axios from 'axios';

const API_KEY = 'd9547a1bbacf4bd08dd173723230508';
const BASE_URL = 'https://api.weatherapi.com/v1';

const fetchWeather = (city) => {
  const apiUrl = `${BASE_URL}/current.json?key=${API_KEY}&q=${city}`;
  return axios.get(apiUrl);
};

export default fetchWeather;
