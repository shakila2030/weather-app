import axios from "axios";

const API_BASE_URL = "https://weather-app-production-4860.up.railway.app/api/weather";

export const getWeatherForCity = async city => {
  const response = await axios.get(`${API_BASE_URL}/${city}`);
  return response.data;
};
