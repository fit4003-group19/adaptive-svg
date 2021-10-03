import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Questionnaire from "./Questionnaire";
import { MapContext } from "../context/MapContext";
import { QuestionnaireContext } from "../context/QuestionnaireContext";
import KeyboardShortcuts from "./KeyboardShortcuts";
import FileUploader from "./FileUploader";
import Switch from "./Switch";

const useStyles = makeStyles((theme) => ({
  attributes: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    display: "flex",
    flexDirection: "column",
  },
  roomInfo: {
    flex: 3,
    margin: 10,
    stroke: "black",
    border: "2px solid black",
    backgroundColor: "#E5E5E5",
  },
  buttons: {
    display: "flex",
    flex: 1,
    margin: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  options: {
    flex: 5,
    margin: 10,
    stroke: "black",
    border: "2px solid black",
    backgroundColor: "#E5E5E5",
  },
}));

function Controls() {
  const classes = useStyles();
  const { roomLabel, roomDescription, roomFlag } = useContext(MapContext);
  return (
    <div className={classes.attributes}>
      <div className={classes.roomInfo}>
        <h2>Selected Room</h2>
        <h3>Name: {roomLabel ? roomLabel : "No Room Selected"}</h3>
        <h3>Description: {roomDescription && roomDescription}</h3>
        <h3>Room Flag: {roomFlag && roomFlag}</h3>
      </div>
      <div className={classes.buttons}>
        <Questionnaire />
        <KeyboardShortcuts />
      </div>
      {/* <div className={classes.attribute}>
        <label ref={rootFocus}>
          <p>Questionnaire</p>
          <Questionnaire />
        </label>
        <label>
          <p>Change SVG</p>
          <FileUploader setSvgPath={setSvgPath} />
        </label>
        <label>
          <p>Short Cuts</p>
          <KeyboardShortcuts />
        </label>
        <label>
          <p>Turn On Patterns</p>

          <Switch onChange={setPatterns} isSelected={patterns} />
        </label>
      </div> */}
      <div className={classes.options}>
        <h2>Options</h2>
      </div>
    </div>
  );
}

export default Controls;
