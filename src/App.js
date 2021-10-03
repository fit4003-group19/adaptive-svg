import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Map from "./components/Map";
import Controls from "./components/Controls";
import MapProvider from "./context/MapContext";
import QuestionnaireProvider from "./context/QuestionnaireContext";
import MapButtonControls from "./components/MapButtonControls";
import FileUploader from "./components/FileUploader";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "90vh",
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  panel1: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flex: 3,
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flex: 1,
    margin: 10,
    border: "2px solid black",
    backgroundColor: "#E5E5E5",
  },
  footer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flex: 1,
    margin: 10,
    border: "2px solid black",
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    margin: 1,
  },
}));

function App() {
  const flexBoxClasses = useStyles();

  return (
    <MapProvider>
      <QuestionnaireProvider>
        <div className={flexBoxClasses.root}>
          <div className={flexBoxClasses.panel1}>
            <div className={flexBoxClasses.header}>
              <h2 className={flexBoxClasses.title}>Monash Campus Centre</h2>
            </div>
            <Map />
            <div className={flexBoxClasses.footer}>
              <h2 className={flexBoxClasses.title}>Controls</h2>
              <MapButtonControls />

              <FileUploader />
            </div>
          </div>
          <Controls />
        </div>
      </QuestionnaireProvider>
    </MapProvider>
  );
}

export default App;
