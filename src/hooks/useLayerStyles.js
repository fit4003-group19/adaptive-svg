import { useState, useMemo } from "react";
const layerFontFamilies = ["Arial", "Atkinson Hyperlegible"];
const layerFontWeights = ["bold", "normal"];

const useLayerStyles = () => {
  const [selectedFontFamily, setSelectedFontFamily] = useState(
    layerFontFamilies[0]
  );
  const [selectedFontWeight, setSelectedFontWeight] = useState(
    layerFontWeights[0]
  );

  const fontStyleSheet = useMemo(() => {
    return {
      "& [data-layer-type='txt']": {
        fontFamily: selectedFontFamily,
        fontWeight: selectedFontWeight,
      },
    };
  }, [selectedFontFamily, selectedFontWeight]);

  return {
    selectedFontFamily,
    setSelectedFontFamily,
    layerFontFamilies,
    selectedFontWeight,
    setSelectedFontWeight,
    layerFontWeights,
    fontStyleSheet,
  };
};

export default useLayerStyles;
