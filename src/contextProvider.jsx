import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [hrChecked, setHrChecked] = useState(false);
  const [osChecked, setOsChecked] = useState(false);
  const [btChecked, setBtChecked] = useState(false);
  const [bpChecked, setBpChecked] = useState(false);

  return (
    <AppContext.Provider
      value={{
        hrChecked,
        setHrChecked,
        osChecked,
        setOsChecked,
        btChecked,
        setBtChecked,
        bpChecked,
        setBpChecked,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

// cara pakai:

// import { AppContext } from "../contextProvider";

// const { namaVar, functions } = useContext(AppContext)
// const { namaFunction } = functions
