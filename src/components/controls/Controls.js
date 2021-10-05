import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MapContext } from "../../context/MapContext";
import FileUploader from "../FileUploader";
import "./Controls.scss";

const Controls = ({ className }) => {
  const { mapPanZoom, rootFocus } = useContext(MapContext);

  return (
    <div className={`${className} controls`}>
      <h1>Controls</h1>
      {mapPanZoom && (
        <div className="controls-buttons">
          <button
            // Root Focus Defines What Element We Automatically Tab To When ESC is pressed
            ref={rootFocus}
            onClick={() => mapPanZoom.panBy({ x: -20, y: 0 })}
          >
            {"<-"}
          </button>
          <button onClick={() => mapPanZoom.panBy({ x: 0, y: 20 })}>Up</button>
          <button onClick={() => mapPanZoom.panBy({ x: 0, y: -20 })}>
            Down
          </button>
          <button onClick={() => mapPanZoom.panBy({ x: 20, y: 0 })}>
            {"->"}
          </button>
          <button onClick={() => mapPanZoom.zoomIn()}>+</button>
          <button onClick={() => mapPanZoom.zoomOut()}>-</button>
          <button
            onClick={() => {
              mapPanZoom.fit();
              mapPanZoom.center();
            }}
          >
            x
          </button>
        </div>
      )}
      <FileUploader className={"controls-file-uploader"} />
    </div>
  );
};

export default Controls;
