import axios from "axios";

const API_BASE_URL = "http://localhost:8085/api/weather";

export const getWeatherForCity = async city => {
  const response = await axios.get(`${API_BASE_URL}/${city}`);
  return response.data;
};
