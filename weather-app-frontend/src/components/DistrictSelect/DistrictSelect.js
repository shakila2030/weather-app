import Select from "react-select";
import "./DistrictSelect.css";

function DistrictSelect({ district, onChange, locations }) {
  const districtOptions = Object.keys(locations).map(d => ({
    value: d,
    label: d
  }));

  return (
    <div className="district-select-container">
      <label className="district-label"> District :</label>
      <Select
        className="district-dropdown"
        classNamePrefix="react-select"
        options={districtOptions}
        value={district}
        onChange={onChange}
        placeholder="Search or select district..."
      />
    </div>
  );
}

export default DistrictSelect;
