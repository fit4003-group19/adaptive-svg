import React from "react";
import Switch from "../../Switch";
const OptionsPattern = ({ onChange, isSelected }) => {
  return (
    <label className="input-group">
      <span className="u-margin-right-auto">Turn On Patterns</span>
      <Switch onChange={onChange} isSelected={isSelected} />
    </label>
  );
};

export default OptionsPattern;
