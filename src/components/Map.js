import { makeStyles } from "@material-ui/styles";
import React, { useRef, useContext, useEffect } from "react";
import { MapContext } from "../context/MapContext";
import { QuestionnaireContext } from "../context/QuestionnaireContext";
import SVG from "react-inlinesvg";
import KeyboardEventHandler from "react-keyboard-event-handler";
const svgPanZoom = require("svg-pan-zoom");

const MapKeyboardControls = ({ mapPanZoom }) => (
  /**
   * Could potentially implement key combinations to move diagnolally
   */
  <>
    <KeyboardEventHandler
      handleFocusableElements={true}
      //className={classes.map}
      handleKeys={["shift+="]}
      onKeyEvent={() => mapPanZoom.zoomIn()}
    />
    <KeyboardEventHandler
      handleFocusableElements={true}
      //className={classes.map}
      handleKeys={["shift+-"]}
      onKeyEvent={() => mapPanZoom.zoomOut()}
    />
    <KeyboardEventHandler
      handleFocusableElements={true}
      //className={classes.map}
      handleKeys={["r"]}
      onKeyEvent={() => {
        mapPanZoom.fit();
        mapPanZoom.center();
      }}
    />
    <KeyboardEventHandler
      handleFocusableElements={true}
      //className={classes.map}
      handleKeys={["shift+right"]}
      onKeyEvent={() => mapPanZoom.panBy({ x: -20, y: 0 })}
    />
    <KeyboardEventHandler
      handleFocusableElements={true}
      //className={classes.map}
      handleKeys={["shift+left"]}
      onKeyEvent={() => mapPanZoom.panBy({ x: 20, y: 0 })}
    />
    <KeyboardEventHandler
      handleFocusableElements={true}
      //className={classes.map}
      handleKeys={["shift+up"]}
      onKeyEvent={() => mapPanZoom.panBy({ x: 0, y: 20 })}
    />
    <KeyboardEventHandler
      handleFocusableElements={true}
      //className={classes.map}
      handleKeys={["shift+down"]}
      onKeyEvent={() => mapPanZoom.panBy({ x: 0, y: -20 })}
    />
  </>
);

function Map() {
  // useRef References
  const svgEl = useRef(null);
  const {
    mapPanZoom,
    setMapPanZoom,
    focusRoot,
    setRoomLabel,
    setRoomDescription,
    setRoomFlag,
    svgPath,
  } = useContext(MapContext);
  const { bitFlag } = useContext(QuestionnaireContext);

  useEffect(() => {
    iterateLayers(updateLayer);
  }, [bitFlag]);

  // Tabbing Order
  // Activated Layers -> Neutral Layers -> Inactive Layers
  const updateLayer = (layer) => {
    const { layerFlag, layerState } = layer.dataset;
    if (layerState > -1) {
      // We can dynamically set the tab index to prioritise the tabbing of activated layers
      // A tabbIndex of 1 will be higher on the tabbing priority compared to a tabIndex of 2
      const isActive = (bitFlag & parseInt(layerFlag)) > 0;
      layer.tabIndex = isActive ? "1" : "2";
      layer.dataset.layerState = isActive ? "1" : "0";
    } else {
      // A tabbIndex of 3 will be lower on the tabbing priority compared to a tabIndex of 2
      layer.tabIndex = "3";
      layer.dataset.layerState = "-1";
    }
  };

  // CSS
  const useStyles = makeStyles((theme) => ({
    map: {
      flex: 3,
      margin: 10,
      border: "8px black",
    },
    svg: {
      height: "100%",
      width: "100%",
    },
  }));

  // Placeholder
  const onError = (e) => {};

  // Placeholder
  const onLoad = (e) => {
    // Initialize SVG Pan Zoom
    const foo = svgPanZoom(svgEl.current, {
      zoomEnabled: true,
      dblClickZoomEnabled: false,
      preventMouseEventsDefault: false,
      // controlIconsEnabled: false,
    });
    foo.zoomAtPoint(1, { x: 447, y: 183 });
    setMapPanZoom(foo);

    iterateLayers((layer) => {
      layer.addEventListener("focus", onLayerFocus);
      layer.addEventListener("blur", onLayerBlur);
      updateLayer(layer);
    });
  };

  const iterateLayers = (callback) => {
    if (!svgEl.current) {
      return;
    }
    svgEl.current.querySelectorAll("[data-layer='root']").forEach((layer) => {
      callback(layer);
    });
  };

  // According to W3C draft, the focus event is fired AFTER the previous element has fired the blur event
  // ****** Focus + Blur Fuctions (START) ******
  const onLayerFocus = (e) => {
    const layer = e.target;
    const { layerFlag } = layer.dataset;
    const roomLabelledBy = layer.getAttribute("aria-labelledby");
    const roomDescribedBy = layer.getAttribute("aria-describedby");
    const roomLabel = svgEl.current.getElementById(roomLabelledBy).textContent;
    const roomDescription =
      svgEl.current.getElementById(roomDescribedBy).textContent;
    setRoomLabel(roomLabel);
    setRoomDescription(roomDescription);
    setRoomFlag(layerFlag);
  };

  const onLayerBlur = (e) => {
    setRoomLabel(null);
    setRoomDescription(null);
    setRoomFlag(null);
  };
  // ****** Focus + Blur Fuctions (END) ******

  const classes = useStyles();

  return (
    <>
      <MapKeyboardControls mapPanZoom={mapPanZoom} />
      <KeyboardEventHandler
        className={classes.map}
        handleKeys={["esc"]}
        onKeyEvent={focusRoot}
      >
        <SVG
          className={classes.svg}
          src={svgPath}
          onError={onError}
          onLoad={onLoad}
          innerRef={svgEl}
        />
      </KeyboardEventHandler>
    </>
  );
}

export default Map;
