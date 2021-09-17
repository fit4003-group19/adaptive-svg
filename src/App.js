import React, { useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Map from "./components/Map";
import Controls from "./components/Controls";
import GlobalProvider from "./context/GlobalContext";
import QuestionnaireProvider from "./context/QuestionnaireContext";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "90vh",
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
}));

function App() {
  const classes = useStyles();
  const flexBoxClasses = useStyles();

  return (
    <GlobalProvider>
      <QuestionnaireProvider>
        <div className={flexBoxClasses.root}>
          <Map />
          <Controls />
        </div>
      </QuestionnaireProvider>
    </GlobalProvider>
  );
}

export default App;
