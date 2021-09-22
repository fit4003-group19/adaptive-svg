import { createContext, useState, useRef } from "react";

//create a context, with createContext api
export const MapContext = createContext();

const MapProvider = (props) => {
  // this state will be shared with all components
  const [mapPanZoom, setMapPanZoom] = useState();
  const [roomLabel, setRoomLabel] = useState();
  const [roomDescription, setRoomDescription] = useState();
  const rootFocus = useRef(null);

  const focusRoot = () => {
    if (rootFocus.current) {
      rootFocus.current.focus();
    }
  };

  return (
    <MapContext.Provider
      value={{
        mapPanZoom,
        setMapPanZoom,
        rootFocus,
        focusRoot,
        roomLabel,
        setRoomLabel,
        roomDescription,
        setRoomDescription,
      }}
    >
      {props.children}
    </MapContext.Provider>
  );
};

export default MapProvider;
