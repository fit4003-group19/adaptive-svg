import React, { useContext } from "react";
import OptionColors from "./colors/OptionColors";
import { OptionLegend } from "./legend/OptionLegend";
import "./Options.scss";
import OptionsPattern from "./patterns/OptionsPattern";
import { Divider } from "@material-ui/core";

const Options = ({ className }) => {
  return (
    <div className={`${className} options`}>
      <div className="u-padding-bottom-xs">
        <h1 className="u-margin-top-0 u-text-align-center">Legend</h1>
        <OptionLegend />
      </div>
      <Divider />
      <div className="u-margin-top-sm">
        <h1 className="u-margin-top-0 u-text-align-center">Options</h1>
        <OptionsPattern />
      </div>
      <Divider />
      <div className="u-margin-top-sm">
        <h1 className="u-margin-top-0 u-text-align-center">Colors</h1>
        <OptionColors />
      </div>
    </div>
  );
};

export default Options;
