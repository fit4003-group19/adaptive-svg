import React, { useState } from "react";

function FileUploader({ setSvgPath }) {
  const changeHandler = (event) => {
    let fileToUpload = event.target.files[0];
    let reader = new FileReader();
    reader.onload = (event) => {
      setSvgPath(event.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return <input type="file" name="file" onChange={changeHandler} />;
}

export default FileUploader;
