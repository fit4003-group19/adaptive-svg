import { createContext, useState, useRef } from "react";

//create a context, with createContext api
export const GlobalContext = createContext();

const GlobalProvider = (props) => {
  // this state will be shared with all components
  const [mapPanZoom, setMapPanZoom] = useState();
  const rootFocus = useRef(null);
  const [questionaireBinary, setQuestionnaireBinary] = useState(0);

  const focusRoot = () => {
    if (rootFocus.current) {
      rootFocus.current.focus();
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        mapPanZoom,
        setMapPanZoom,
        rootFocus,
        focusRoot,
        questionaireBinary,
        setQuestionnaireBinary,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
