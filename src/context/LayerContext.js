import { createContext, useState, useRef } from "react";
import useLayerUtilities from "../hooks/useLayerUtilities";

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
    updateLayer,
    getTranslation,
  } = useLayerUtilities();
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
        colorPalette,
        setColorPallete,
        pullLayerStylesFromSVG,
        pushLayerStylesToSVG,
        updateLayer,
        getTranslation,
        // colorPalette,
        // setColorPalette,
      }}
    >
      {props.children}
    </LayerContext.Provider>
  );
};

export default LayerProvider;
