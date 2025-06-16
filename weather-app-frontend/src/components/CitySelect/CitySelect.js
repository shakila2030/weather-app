import Select from "react-select";
import "./CitySelect.css";

function CitySelect({ district, city, cities, onChange }) {
  const cityOptions = cities.map(c => ({ value: c, label: c }));

  return (
    <div className="city-select-container">
      <label className="city-label"> City :</label>
      <Select
        className="city-dropdown"
        classNamePrefix="react-select"
        options={cityOptions}
        value={city}
        onChange={onChange}
        isDisabled={!district}
        placeholder="Search or select city..."
      />
    </div>
  );
}

export default CitySelect;
