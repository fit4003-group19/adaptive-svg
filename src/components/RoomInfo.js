import React, { useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import { MapContext } from "../context/MapContext";
import SVG from "react-inlinesvg";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    margin: 10,
    stroke: "black",
    border: "2px solid black",
    backgroundColor: "#E5E5E5",
  },
  roomInfo: {
    flex: 3,
  },
  icon: {
    flex: 2,
    justifyContent: "center",
    alignContent: "center",
  },
  svg: {
    height: "50%",
    width: "50%",
    alignSelf: "center",
  },
}));
const RoomInfo = () => {
  const svgPath = `${process.env.PUBLIC_URL}/icons/tactile--icon.svg`;
  const classes = useStyles();
  const { roomLabel, roomDescription, roomFlag } = useContext(MapContext);
  return (
    <div className={classes.root}>
      <div className={classes.icon}>
        <SVG className={classes.svg} src={svgPath} />
      </div>
      <div className={classes.roomInfo}>
        <h3>Name: </h3>
        <text>{roomLabel ? roomLabel : "Nothing Selected"}</text>
        <h3>Description: </h3>
        <text>{roomDescription ? roomDescription : "Nothing Selected"}</text>
      </div>
    </div>
  );
};

export default RoomInfo;
