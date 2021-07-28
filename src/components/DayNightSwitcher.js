import React from "react";
import "../assets/scss/DayNightSwitcher.scss";

const DayNightSwitcher = ({
                            onChange
                          }) => {
  return (
    <div className="mode-switch">
      <input type="checkbox" id="toggle" className="toggle--checkbox" onChange={onChange}/>
      <label htmlFor="toggle" className="toggle--label">
        <span className="toggle--label-background"></span>
      </label>
      <div className="background"></div>
    </div>
  );
}
export default DayNightSwitcher;
