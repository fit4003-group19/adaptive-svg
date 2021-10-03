import React, { useContext } from "react";
import { MapContext } from "../context/MapContext";

function FileUploader() {
  const { setSvgPath } = useContext(MapContext);
  const changeHandler = (event) => {
    let fileToUpload = event.target.files[0];
    let reader = new FileReader();
    reader.onload = (event) => {
      setSvgPath(event.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return <input type="file" name="Floor Plan" onChange={changeHandler} />;
}

export default FileUploader;
