import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MapContext } from "../context/MapContext";

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: "flex",
    flex: 1,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    marginLeft: 5,
    marginRight: 5,
  },
}));
const MapButtonControls = () => {
  const classes = useStyles();
  const { mapPanZoom } = useContext(MapContext);
  return (
    <div className={classes.buttons}>
      {mapPanZoom && (
        <>
          <button
            className={classes.button}
            onClick={() => mapPanZoom.panBy({ x: -20, y: 0 })}
          >
            {"<-"}
          </button>
          <button
            className={classes.button}
            onClick={() => mapPanZoom.panBy({ x: 0, y: 20 })}
          >
            Up
          </button>
          <button
            className={classes.button}
            onClick={() => mapPanZoom.panBy({ x: 0, y: -20 })}
          >
            Down
          </button>
          <button
            className={classes.button}
            onClick={() => mapPanZoom.panBy({ x: 20, y: 0 })}
          >
            {"->"}
          </button>
          <button
            className={classes.button}
            onClick={() => mapPanZoom.zoomIn()}
          >
            +
          </button>
          <button
            className={classes.button}
            onClick={() => mapPanZoom.zoomOut()}
          >
            -
          </button>
          <button
            className={classes.button}
            onClick={() => {
              mapPanZoom.fit();
              mapPanZoom.center();
            }}
          >
            x
          </button>
        </>
      )}
    </div>
  );
};

export default MapButtonControls;
