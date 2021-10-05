import React, { useContext, useState, useMemo, useCallback } from "react";
import "./RoomInformation.scss";
import { makeStyles } from "@material-ui/styles";
import { MapContext } from "../../context/MapContext";
import SVG from "react-inlinesvg";

const RoomInformation = ({ className }) => {
  const svgPath = `${process.env.PUBLIC_URL}/icons/tactile--icon.svg`;
  const { roomLabel, roomDescription } = useContext(MapContext);
  const [iconColor, setIconColor] = useState("blue");

  const useStyles = makeStyles((theme) => ({
    icon: {
      color: iconColor,
    },
  }));

  const classes = useStyles();

  return (
    <div className={`${className} room-information`}>
      <div className={`room-information-meta-data`}>
        <h3 className={"room-information-header"}>Name </h3>
        <span className={"room-information-text"}>
          {roomLabel ? roomLabel : "Nothing Selected"}
        </span>
        <h3 className={"room-information-header"}>Description </h3>
        <span className={"room-information-text"}>
          {roomDescription ? roomDescription : "Nothing Selected"}
        </span>
      </div>
      <div className={`room-information-icon ${classes.icon}`}>
        <SVG src={svgPath} />
        <span className={"room-information-icon-text"}>Tacitle Flooring</span>
      </div>
    </div>
  );
};

export default RoomInformation;
