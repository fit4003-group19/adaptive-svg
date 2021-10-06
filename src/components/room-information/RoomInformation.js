import React, { useContext, useState, useMemo, useCallback } from "react";
import "./RoomInformation.scss";
import { makeStyles } from "@material-ui/styles";
import SVG from "react-inlinesvg";
import { LayerContext } from "../../context/LayerContext";

const RoomInformation = ({ className }) => {
  const svgPath = `${process.env.PUBLIC_URL}/icons/tactile--icon.svg`;
  const { layerInfo } = useContext(LayerContext);
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
          {layerInfo.label || "Nothing Selected"}
        </span>
        <h3 className={"room-information-header"}>Description </h3>
        <span className={"room-information-text"}>
          {layerInfo.description || "Nothing Selected"}
        </span>
      </div>
      <div className={`room-information-icon ${classes.icon}`}>
        <SVG src={svgPath} />
        <span className={"room-information-icon-text"}>
          {layerInfo.class || "Nothing Selected"}
        </span>
      </div>
    </div>
  );
};

export default RoomInformation;
