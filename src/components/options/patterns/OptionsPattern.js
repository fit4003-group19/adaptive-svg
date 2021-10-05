import React, { useContext } from "react";
import Switch from "../../Switch";
import { MapContext } from "../../../context/MapContext";
const OptionsPattern = () => {
  const { patterns, setPatterns } = useContext(MapContext);
  return (
    <div>
      <label className="input-group">
        <span className="u-margin-right-auto">Turn On Patterns</span>
        <Switch
          onChange={() => {
            setPatterns((foo) => !foo);
          }}
          isSelected={patterns}
        />
      </label>
    </div>
  );
};

export default OptionsPattern;
