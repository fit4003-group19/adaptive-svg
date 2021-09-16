import React, {useRef, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Map from './components/Map';
import Controls from './components/Controls'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "90vh",
    width: "100%",
    display: "flex",
    backgroundColor: "red",
    flexDirection: "row",
  },
}));

function App() {
  const classes = useStyles();
  const flexBoxClasses = useStyles()

  const [mapPanZoom, setMapPanZoom] = useState(null)


    


  return (
      <div className={flexBoxClasses.root}>
        <Map mapPanZoom={mapPanZoom} setMapPanZoom={setMapPanZoom} />
        <Controls mapPanZoom={mapPanZoom} setMapPanZoom={setMapPanZoom} />
      </div>
  );
}

export default App;
