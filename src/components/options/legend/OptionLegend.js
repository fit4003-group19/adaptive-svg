import React, { useContext } from "react";
import { DualColorLabel } from "../../color/DualColorLabel";
import "./OptionLegend.scss";
import { LayerContext } from "../../../context/LayerContext";

export const OptionLegend = () => {
  const { layerColors, getTranslation } = useContext(LayerContext);

  return (
    <div class="option-legend">
      {layerColors &&
        Object.keys(layerColors).map((key, i) => (
          <DualColorLabel
            className="option-legend-label-margin"
            left={layerColors[key].primary}
            right={layerColors[key].secondary}
          >
            {getTranslation(key).fullName}
          </DualColorLabel>
        ))}
    </div>
  );
};
