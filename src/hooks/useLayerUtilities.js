import { useState, useRef, useEffect } from "react";

const layerClassTranslator = {
  obstacle: { fullName: "Obstacle", gradientKey: "gradient--obstacle" },
  tactile: { fullName: "Tactile Flooring", gradientKey: "gradient--tactile" },
  ramp: { fullName: "Accessibility Ramp", gradientKey: "gradient--ramp" },
  stairs: {
    fullName: "Stairs",
    gradientKey: "gradient--stairs",
  },
  lift: { fullName: "Lift", gradientKey: "gradient--lift" },
  "support-center": {
    fullName: "Support Center",
    gradientKey: "gradient--support-center",
  },
  toilet: { fullName: "Disabled Toilet", gradientKey: "gradient--toilet" },
  unlisted: { fullName: "Unlisted", gradientKey: "gradient--unlisted" },
  inactive: {
    fullName: "Point of Interest",
    gradientKey: "gradient--inactive",
  },
};

const useLayerUtilities = () => {
  const layerColorIndexMap = useRef(null);
  const [layerColors, setLayerColors] = useState(null);
  const [colorPalette, setColorPallete] = useState(null);

  useEffect(() => {
    if (colorPalette && layerColorIndexMap.current) {
      setLayerColors(generateLayerColorsFromPalette(colorPalette));
    }
  }, [colorPalette]);

  // This function will pull the gradient information from the SVG element and then
  // store it in a state JSON object that can be manipulated directly within React
  const pullLayerStylesFromSVG = (svgEl) => {
    const _layerColorIndexMap = {};
    const _colorIndex = [];
    Object.entries(layerClassTranslator).forEach(([key, value]) => {
      const gradientKey = value.gradientKey;
      const gradientEl = svgEl.getElementById(gradientKey);
      if (gradientEl) {
        const primaryColorStop = gradientEl.querySelector("[offset='0%']");
        const secondaryColorStop = gradientEl.querySelector("[offset='100%']");

        const primaryColor = primaryColorStop
          ? primaryColorStop.getAttribute("stop-color")
          : null;

        const secondaryColor = secondaryColorStop
          ? secondaryColorStop.getAttribute("stop-color")
          : null;

        _addColorToPaletteAndIndex(
          key,
          "primary",
          primaryColor,
          _layerColorIndexMap,
          _colorIndex
        );
        _addColorToPaletteAndIndex(
          key,
          "secondary",
          secondaryColor,
          _layerColorIndexMap,
          _colorIndex
        );
      }
    });
    layerColorIndexMap.current = _layerColorIndexMap;
    setColorPallete(_colorIndex);
  };

  // This function will pull the gradient information from the colorPalette object
  const generateLayerColorsFromPalette = (palette) => {
    const _layerColors = {};
    Object.entries(layerColorIndexMap.current).forEach(([key, value]) => {
      if (!(key in _layerColors)) {
        _layerColors[key] = {
          primary: null,
          secondary: null,
        };
      }

      _layerColors[key].primary = palette[value.primary];
      _layerColors[key].secondary = palette[value.secondary];
    });
    return _layerColors;
  };

  const pushLayerStylesToSVG = (svgEl, _layerColors) => {
    Object.entries(layerClassTranslator).forEach(([key, value]) => {
      const gradientKey = value.gradientKey;
      const gradientEl = svgEl.getElementById(gradientKey);
      if (gradientEl) {
        // const primaryColorStop = gradientEl.querySelector("[offset='0%']");
        // const primaryMidColorStop = gradientEl.querySelector("[offset='50%']");
        // const secondaryColorStop = gradientEl.querySelector("[offset='100%']");

        const primary = _layerColors[key].primary;
        const secondary = _layerColors[key].secondary;
        // if (primary) {
        //   primaryColorStop.setAttribute("stop-color", primary);
        // }
        // if (secondary) {
        //   secondaryColorStop.setAttribute("stop-color", secondary);
        // }

        const colorStops = gradientEl.querySelectorAll("stop");
        if (colorStops.length == 2) {
          colorStops[0].setAttribute("stop-color", primary);
          colorStops[1].setAttribute("stop-color", secondary);
        } else if (colorStops.length == 4) {
          colorStops[0].setAttribute("stop-color", primary);
          colorStops[1].setAttribute("stop-color", primary);
          colorStops[2].setAttribute("stop-color", secondary);
          colorStops[3].setAttribute("stop-color", secondary);
        } else {
          throw new Error(
            "Invalid Number of Color Stops (Should be 2 or 4); Number of Stops Provided " +
              colorStops.length
          );
        }
      }
    });
  };

  const _addColorToPaletteAndIndex = (
    key,
    colorType,
    color,
    _layerStyle,
    _colorPalette
  ) => {
    // Guard Clauses
    if (!(key in layerClassTranslator)) {
      throw new Error("Not a valid key; " + key);
    }
    if (colorType !== "primary" && colorType !== "secondary") {
      throw new Error("Not a valid colorType; " + colorType);
    }

    if (!(key in _layerStyle)) {
      _layerStyle[key] = {};
    }
    if (!(colorType in _layerStyle[key])) {
      _layerStyle[key][colorType] = null;
    }

    if (color) {
      const colorIndex = _colorPalette.findIndex((foo) => foo === color);
      if (colorIndex > -1) {
        _layerStyle[key][colorType] = colorIndex;
      } else {
        _colorPalette.push(color);
        _layerStyle[key][colorType] = _colorPalette.length - 1;
      }
    }
  };

  // Tabbing Order
  // Activated Layers -> Neutral Layers -> Inactive Layers
  const updateLayer = (bitFlag, layer) => {
    let { layerFlag, layerState } = layer.dataset;
    layerFlag = parseInt(layerFlag);
    layerState = parseInt(layerState);

    if (layerState > -1) {
      // We can dynamically set the tab index to prioritise the tabbing of activated layers
      // A tabbIndex of 1 will be higher on the tabbing priority compared to a tabIndex of 2
      let isActive = false;
      if (layerFlag) {
        isActive = (bitFlag & layerFlag) > 0;
      }
      layer.tabIndex = isActive ? "1" : "2";
      layer.dataset.layerState = isActive ? "1" : "0";
    } else {
      // A tabbIndex of 3 will be lower on the tabbing priority compared to a tabIndex of 2
      layer.tabIndex = "3";
      layer.dataset.layerState = "-1";
    }
  };

  const getTranslation = (key) => {
    return layerClassTranslator[key];
  };

  return {
    layerColors,
    setLayerColors,
    colorPalette,
    setColorPallete,
    getTranslation,
    pullLayerStylesFromSVG,
    pushLayerStylesToSVG,
    updateLayer,
  };
};

export default useLayerUtilities;
