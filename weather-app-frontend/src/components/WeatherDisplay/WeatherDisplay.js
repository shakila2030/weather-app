import {
  WiHumidity,
  WiStrongWind,
  WiBarometer,
  WiDaySunny,
  WiCloudy,
  WiFog,
  WiDayHaze,
  WiRain,
  WiThunderstorm,
  WiSnow
} from "react-icons/wi";
import { WiThermometer, WiCloud } from "react-icons/wi";
import "./WeatherDisplay.css";

function getConditionIcon(condition) {
  const lower = condition.toLowerCase();
  if (lower.includes("rain")) return <WiRain size={80} />;
  if (lower.includes("thunder")) return <WiThunderstorm size={80} />;
  if (lower.includes("cloud")) return <WiCloudy size={80} />;
  if (lower.includes("sun") || lower.includes("clear")) return <WiDaySunny size={80} />;
  if (lower.includes("fog")) return <WiFog size={80} />;
  if (lower.includes("haze")) return <WiDayHaze size={80} />;
  if (lower.includes("snow")) return <WiSnow size={80} />;
  return <WiDaySunny size={80} />; // default
}

function WeatherDisplay({ city, weather }) {
  return (
    <div className="weather-display-container">
      <h2 className="weather-heading">Weather in {city}</h2>
      <div className="weather-layout">
        {/* Left Side: Condition */}
        <div className="weather-left">
          <p className="label">Condition:</p>
          <div className="condition-icon">{getConditionIcon(weather.condition)}</div>
          <p className="condition-text">{weather.condition}</p>
        </div>

        {/* Right Side: Other details */}
        <div className="weather-right">
          <div className="weather-grid">
            <div className="weather-card full-width">
              <p><WiThermometer size={24} /> <span className="label">Temperature:</span> {weather.temperature}°C</p>
            </div>
            <div className="weather-card">
              <p><WiCloud size={24} /> <span className="label">Cloud:</span> {weather.cloud}%</p>
            </div>
            <div className="weather-card">
              <p><WiHumidity size={24} /> <span className="label">Humidity:</span> {weather.humidity}%</p>
            </div>
            <div className="weather-card">
              <p><WiDayHaze size={24} /> <span className="label">Visibility:</span> {weather.visibility} km</p>
            </div>
           <div className="weather-card ">
              <p><WiDaySunny size={24} /> <span className="label">UV Index:</span> {weather.uvIndex}</p>
            </div>
            <div className="weather-card">
              <p><WiBarometer size={24} /> <span className="label">Pressure:</span> {weather.pressure} hPa</p>
            </div>
             <div className="weather-card ">
              <p><WiStrongWind size={24} /> <span className="label">Wind Speed:</span> {weather.windSpeed} km/h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;
