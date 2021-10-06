import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import MapProvider from "./context/MapContext";
import QuestionnaireProvider from "./context/QuestionnaireContext";
import LayerProvider from "./context/LayerContext";

import Map from "./components/map/Map";
import Controls from "./components/controls/Controls";
import RoomInformation from "./components/room-information/RoomInformation";
import Options from "./components/options/Options";
import Shortcuts from "./components/shortcuts/Shortcuts";
import Title from "./components/title/Title";

function App() {
  return (
    <MapProvider>
      <QuestionnaireProvider>
        <LayerProvider>
          <div className="root">
            <Title className="root-title"></Title>
            <Map className="root-map"></Map>
            <Controls className="root-controls"></Controls>
            <RoomInformation className="root-description"></RoomInformation>
            <Shortcuts className="root-shortcuts"></Shortcuts>
            <Options className="root-options"></Options>
          </div>
        </LayerProvider>
      </QuestionnaireProvider>
    </MapProvider>
  );
}

export default App;
