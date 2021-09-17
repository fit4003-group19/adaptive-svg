import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Questionnaire from "./Questionnaire";
import { MapContext } from "../context/MapContext";
import { QuestionnaireContext } from "../context/QuestionnaireContext";

const useStyles = makeStyles((theme) => ({
  attributes: {
    flex: 1,
    margin: 10,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "whitesmoke",
  },
  attribute: { flex: 4, margin: 10, stroke: "black", strokeWidth: 5 },
  buttons: {
    flex: 1,
    margin: 10,
    display: "flex",
    justify: "space-between",
    flexDirection: "row",
  },
}));

function Controls() {
  const classes = useStyles();
  const { mapPanZoom, setMapPanZoom, rootFocus } = useContext(MapContext);
  const { commitedResponse, getBitFlag} = useContext(QuestionnaireContext)

  return (
    <div className={classes.attributes}>
      <div className={classes.attribute}>
        <label ref={rootFocus}>
          Questionnaire
          <Questionnaire />
        </label>
      </div>
      <div className={classes.attribute}>
        <h1>Bit Stuffing</h1>
        <h1>{getBitFlag(commitedResponse)}</h1>
      </div>
      <div className={classes.attribute}>
        <h1>Example Controls</h1>
      </div>
      <div className={classes.buttons}>
        {mapPanZoom && (
          <>
            <label>
              Zoom In
              <button onClick={() => mapPanZoom.zoomIn()}>+</button>
            </label>
            <label>
              Zoom Out
              <button onClick={() => mapPanZoom.zoomOut()}>-</button>
            </label>
            <label>
              Reset
              <button onClick={() => mapPanZoom.resetZoom()}>x</button>
            </label>
          </>
        )}
      </div>
    </div>
  );
}

export default Controls;
