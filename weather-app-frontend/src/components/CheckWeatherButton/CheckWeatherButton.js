import "./CheckWeatherButton.css";

function CheckWeatherButton({ city, onClick }) {
  return (
    <button
      className="check-weather-button"
      onClick={onClick}
      disabled={!city}
    >
      Check Weather
    </button>
  );
}

export default CheckWeatherButton;
