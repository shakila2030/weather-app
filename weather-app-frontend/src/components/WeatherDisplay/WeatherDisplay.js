import "./WeatherDisplay.css";

function WeatherDisplay({ city, weather }) {
  return (
    <div className="weather-display-container">
      <h2 className="weather-heading">Weather in {city}</h2>
      <div className="weather-data">
        <p>🌡️ <span className="label">Temperature:</span> {weather.temperature}°C</p>
        <p>💧 <span className="label">Humidity:</span> {weather.humidity}%</p>
        <p>💨 <span className="label">Wind Speed:</span> {weather.windSpeed} km/h</p>
        <p>☀️ <span className="label">UV Index:</span> {weather.uvIndex}</p>
      </div>
    </div>
  );
}

export default WeatherDisplay;
