import React, { useContext } from "react";
import "./Dashboard.scss";

import Map from "./components/map/Map";
import Controls from "./components/controls/Controls";
import RoomInformation from "./components/room-information/RoomInformation";
import Options from "./components/options/Options";
import Shortcuts from "./components/shortcuts/Shortcuts";
import Title from "./components/title/Title";
import { LayerContext } from "./context/LayerContext";

const Dashboard = () => {
  const { selectedFontFamily } = useContext(LayerContext);

  return (
    <div className="dashboard">
      <Title className="dashboard-title"></Title>
      <Map className="dashboard-map"></Map>
      <Controls className="dashboard-controls"></Controls>
      <RoomInformation className="dashboard-description"></RoomInformation>
      <Shortcuts className="dashboard-shortcuts"></Shortcuts>
      <Options className="dashboard-options"></Options>
    </div>
  );
};

export default Dashboard;
