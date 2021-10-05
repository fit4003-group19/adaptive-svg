import React, { useContext } from "react";
import OptionColors from "./colors/OptionColors";
import "./Options.scss";
import OptionsPattern from "./patterns/OptionsPattern";
const Options = ({ className }) => {
  return (
    <div className={`${className} options`}>
      <h1 className="u-margin-top-0 u-text-align-center">Options</h1>
      <OptionsPattern />
      <h1 className="u-margin-top-0 u-text-align-center">Controls</h1>
      <OptionColors />
    </div>
  );
};

export default Options;
