import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MapContext } from "../../context/MapContext";
import FileUploader from "../FileUploader";
import "./Controls.scss";
import Button from "../aria-components/Button";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import RestoreIcon from "@mui/icons-material/Restore";

const Controls = ({ className }) => {
  const { mapPanZoom, rootFocus } = useContext(MapContext);

  return (
    <div className={`${className} controls`}>
      <h1>Controls</h1>
      {mapPanZoom && (
        <div className="controls-buttons">
          <Button
            // Root Focus Defines What Element We Automatically Tab To When ESC is pressed
            ref={rootFocus}
            onPress={() => mapPanZoom.panBy({ x: 20, y: 0 })}
            aria-label="Pan Map Left"
          >
            <ArrowLeft />
          </Button>
          <Button
            onPress={() => mapPanZoom.panBy({ x: 0, y: 20 })}
            aria-label="Pan Map Up"
          >
            <ArrowDropUpIcon />
          </Button>
          <Button
            onPress={() => mapPanZoom.panBy({ x: 0, y: -20 })}
            aria-label="Pan Map Down"
          >
            <ArrowDropDownIcon />
          </Button>
          <Button
            onPress={() => mapPanZoom.panBy({ x: -20, y: 0 })}
            aria-label="Pan Map Right"
          >
            <ArrowRight />
          </Button>
          <Button
            onPress={() => mapPanZoom.zoomIn()}
            aria-label="Zoom In on Map"
          >
            <ZoomInIcon />
          </Button>
          <Button
            onPress={() => mapPanZoom.zoomOut()}
            aria-label="Zoom Out on Map"
          >
            <ZoomOutIcon />
          </Button>
          <Button
            onPress={() => {
              mapPanZoom.fit();
              mapPanZoom.center();
            }}
            aria-label="Restore Map Zoom"
          >
            <RestoreIcon />
          </Button>
        </div>
      )}
      <FileUploader className={"controls-file-uploader"} />
    </div>
  );
};

export default Controls;
