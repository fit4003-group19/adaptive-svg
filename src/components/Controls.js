import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Questionnaire from "./Questionnaire";
import { MapContext } from "../context/MapContext";
import { QuestionnaireContext } from "../context/QuestionnaireContext";
import KeyboardShortcuts from "./KeyboardShortcuts";
import RoomInfo from "./RoomInfo";
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
    marginLeft: 10,
    marginRight: 10,
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
    flexDirection: "column",
    display: "flex",
  },
  option: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  },
}));

function Controls() {
  const classes = useStyles();
  const { roomLabel, roomDescription, roomFlag, patterns, setPatterns } =
    useContext(MapContext);
  return (
    <div className={classes.attributes}>
      <RoomInfo />
      <div className={classes.buttons}>
        <Questionnaire />
        <KeyboardShortcuts />
      </div>
      <div className={classes.options}>
        <h3>Options</h3>
        <div className={classes.option}>
          <p>Turn On Patterns</p>
          <Switch onChange={setPatterns} isSelected={patterns} />
        </div>
      </div>
    </div>
  );
}

export default Controls;
