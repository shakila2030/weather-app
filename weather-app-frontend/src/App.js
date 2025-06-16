import { useState } from "react";
import { locations } from "./data/locations";
import DistrictSelect from "./components/DistrictSelect/DistrictSelect";
import CitySelect from "./components/CitySelect/CitySelect";
import CheckWeatherButton from "./components/CheckWeatherButton/CheckWeatherButton";
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay";
import { getWeatherForCity } from "./services/WeatherService";
import './App.css';


function App() {
  const [district, setDistrict] = useState(null);
  const [city, setCity] = useState(null);
  const [cities, setCities] = useState([]);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDistrictChange = selected => {
    setDistrict(selected);
    setCity(null);
    setWeather(null);
    setCities(locations[selected.value] || []);
  };

  const handleCityChange = selected => {
    setCity(selected);
    setWeather(null);
  };

  const handleCheckWeather = async () => {
    if (!city) {
      setError("Please select a city.");
      return;
    }

    try {
      setError("");
      const data = await getWeatherForCity(city.value);
      setWeather(data);
    } catch (e) {
      setError("Failed to fetch weather. Please try again.");
     } finally {
      setLoading(false);  
    }
  };

  return (
  <div className="app-container">
    <div className="card">
      <div style={{ padding: 20, fontFamily: "Arial", textAlign: "center" }}>
        <h1 style={{ color: "black" }}>Simple Weather Reporter</h1>

        <DistrictSelect
          district={district}
          onChange={handleDistrictChange}
          locations={locations}
        />

        <CitySelect
          district={district}
          city={city}
          cities={cities}
          onChange={handleCityChange}
        />

        <CheckWeatherButton city={city} onClick={handleCheckWeather} />

        {error && <p style={{ color: "red" }}>{error}</p>}

        {loading ? (
          <div className="loader"></div>
        ) : (
          weather && (
            <div style={{ marginTop: "20px" }}>
              <WeatherDisplay city={city.label} weather={weather} />
            </div>
          )
        )}
      </div>
    </div>
  </div>
);


}

export default App;
