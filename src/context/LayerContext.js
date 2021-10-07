import { createContext, useState, useRef } from "react";
import useLayerColors from "../hooks/useLayerColors";
import useLayerStyles from "../hooks/useLayerStyles";

//create a context, with createContext api
export const LayerContext = createContext();

const LayerProvider = (props) => {
  const [layerInfo, setLayerInfo] = useState({
    label: null,
    description: null,
    class: null,
  });

  const {
    layerColors,
    setLayerColors,
    colorPalette,
    setColorPallete,
    pullLayerStylesFromSVG,
    pushLayerStylesToSVG,
  } = useLayerColors();

  const {
    layerFontFamilies,
    selectedFontFamily,
    setSelectedFontFamily,
    layerFontWeights,
    selectedFontWeight,
    setSelectedFontWeight,
    fontStyleSheet,
  } = useLayerStyles();
  //   const [colorPalette, setColorPalette] = useState([
  //     "#648FFF",
  //     "#785EF0",
  //     "#DC267F",
  //     "#FE6100",
  //     "#FFB000",
  //   ]);

  return (
    <LayerContext.Provider
      value={{
        layerInfo,
        setLayerInfo,
        layerColors,
        setLayerColors,
        layerFontWeights,
        selectedFontWeight,
        setSelectedFontWeight,
        colorPalette,
        setColorPallete,
        pullLayerStylesFromSVG,
        pushLayerStylesToSVG,
        layerFontFamilies,
        selectedFontFamily,
        setSelectedFontFamily,
        fontStyleSheet,
        // colorPalette,
        // setColorPalette,
      }}
    >
      {props.children}
    </LayerContext.Provider>
  );
};

export default LayerProvider;
