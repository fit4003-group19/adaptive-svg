import React, { useContext } from "react";
import { MapContext } from "../../context/MapContext";
import "./Options.scss";
import OptionsPattern from "./patterns/OptionsPattern";
const Options = ({ className }) => {
  const { roomLabel, roomDescription, roomFlag, patterns, setPatterns } =
    useContext(MapContext);
  return (
    <div className={`${className} options`}>
      <h1 className="options-header u-text-align-center">Options</h1>
      <OptionsPattern onChange={setPatterns} isSelected={patterns} />
      <h1 className="options-header u-text-align-center">Controls</h1>
    </div>
  );
};

export default Options;
