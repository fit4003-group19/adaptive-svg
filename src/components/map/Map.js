import React, { useRef, useContext, useEffect } from "react";
import { MapContext } from "../../context/MapContext";
import { QuestionnaireContext } from "../../context/QuestionnaireContext";
import { LayerContext } from "../../context/LayerContext";
import SVG from "react-inlinesvg";
import MapKeyboardEventHandler from "../MapKeyboardEventHandler";
import KeyboardEventHandler from "react-keyboard-event-handler";
const svgPanZoom = require("svg-pan-zoom");

const Map = ({ className }) => {
  // useRef References
  const svgEl = useRef(null);
  const rootGroupEl = useRef(null);
  const {
    mapPanZoom,
    setMapPanZoom,
    focusRoot,
    svgPath,
    patterns,
    setMapTitle,
  } = useContext(MapContext);
  const { bitFlag } = useContext(QuestionnaireContext);
  const {
    setLayerInfo,
    layerColors,
    pullLayerStylesFromSVG,
    pushLayerStylesToSVG,
    updateLayer,
  } = useContext(LayerContext);

  useEffect(() => {
    iterateLayers((layer) => {
      updateLayer(bitFlag, layer);
    });
  }, [bitFlag]);

  useEffect(() => {
    updatePatterns();
  }, [patterns]);

  useEffect(() => {
    if (svgEl.current && layerColors) {
      pushLayerStylesToSVG(svgEl.current, layerColors);
    }
  }, [layerColors]);

  // CSS
  const classes = {
    svg: {
      height: "100%",
      width: "100%",
    },
  };

  // Layer Iterator
  // Includes a guard clause to prevent iterating through layers if they are not set
  const iterateLayers = (callback) => {
    if (!svgEl.current) {
      return;
    }
    svgEl.current
      .querySelectorAll("[data-layer-type='layer']")
      .forEach((layer) => {
        callback(layer);
      });
  };

  // Update Patterns
  const updatePatterns = () => {
    if (rootGroupEl.current) {
      rootGroupEl.current.dataset.layerPattern = patterns ? "1" : "0";
    }
  };

  // According to W3C draft, the focus event is fired AFTER the previous element has fired the blur event
  // ****** Focus + Blur Fuctions (START) ******
  const onLayerFocus = (e) => {
    const layer = e.target;
    const { layerFlag } = layer.dataset;
    const roomLabelledBy = layer.getAttribute("aria-labelledby");
    const roomDescribedBy = layer.getAttribute("aria-describedby");
    const roomTitle = svgEl.current.getElementById(roomLabelledBy);
    const roomDesc = svgEl.current.getElementById(roomDescribedBy);

    setLayerInfo({
      label: roomTitle ? roomTitle.textContent : null,
      description: roomDesc ? roomDesc.textContent : null,
      class: layer.classList.length === 1 ? layer.classList[0] : null,
    });
  };

  const onLayerBlur = (e) => {
    setLayerInfo({
      label: null,
      description: null,
      class: null,
    });
  };
  // ****** Focus + Blur Fuctions (END) ******
  // Placeholder
  const onError = (e) => {};

  // Placeholder
  const onLoad = (e) => {
    setMapTitle(
      svgEl.current.getElementById("svg--title")
        ? svgEl.current.getElementById("svg--title").textContent
        : "Untitled"
    );
    // Initialize SVG Pan Zoom
    // Set a reference to the root group so that we can interact with it to affect global properties
    rootGroupEl.current = svgEl.current.querySelector(
      "[data-layer-type='root']"
    );
    const foo = svgPanZoom(svgEl.current, {
      zoomEnabled: true,
      dblClickZoomEnabled: false,
      preventMouseEventsDefault: false,
      // controlIconsEnabled: false,
    });
    foo.zoomAtPoint(1, { x: 447, y: 183 });
    setMapPanZoom(foo);

    // Pull SVG Color Information
    pullLayerStylesFromSVG(svgEl.current);
    // pushLayerStyles(svgEl.current);
    // Set Layer Event Listeners
    iterateLayers((layer) => {
      layer.addEventListener("focus", onLayerFocus);
      layer.addEventListener("blur", onLayerBlur);
      updateLayer(bitFlag, layer);
    });

    // Update Global
    updatePatterns();
  };

  // const classes = useStyles();

  return (
    <div className={`${className} map`}>
      <MapKeyboardEventHandler mapPanZoom={mapPanZoom} />
      <KeyboardEventHandler handleKeys={["esc"]} onKeyEvent={focusRoot}>
        <SVG
          style={classes.svg}
          src={svgPath}
          onError={onError}
          onLoad={onLoad}
          innerRef={svgEl}
        />
      </KeyboardEventHandler>
    </div>
  );
};

export default Map;
