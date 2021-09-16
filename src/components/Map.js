import { makeStyles } from "@material-ui/styles";
import React, { useRef, useContext } from "react";
import { GlobalContext } from "../context/MapContext";
import SVG from "react-inlinesvg";
import KeyboardEventHandler from "react-keyboard-event-handler";
const svgPanZoom = require("svg-pan-zoom");

function Map() {
  // useRef References
  const svgEl = useRef(null);
  const { mapPanZoom, setMapPanZoom, focusRoot } = useContext(GlobalContext);
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
    const foo = svgPanZoom(svgEl.current, {
      zoomEnabled: true,
      dblClickZoomEnabled: false,
      // controlIconsEnabled: false,
    });
    foo.zoomAtPoint(1, { x: 447, y: 183 });
    setMapPanZoom(foo);
  };

  const classes = useStyles();

  return (
    <KeyboardEventHandler
      className={classes.map}
      handleKeys={["esc"]}
      onKeyEvent={focusRoot}
    >
      <SVG
        className={classes.svg}
        src={`${process.env.PUBLIC_URL}/svg/focus-test.svg`}
        onError={onError}
        onLoad={onLoad}
        innerRef={svgEl}
      />
    </KeyboardEventHandler>
  );
}

export default Map;
