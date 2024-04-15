import React, { createContext, useEffect, useState } from "react";
export const DataContext = createContext();

function DataContextProvider(props) {
  const [lightTheme, setLightTheme] = useState(true);
  useEffect(() => {}, []);

  return (
    <DataContext.Provider
      value={{
        lightTheme,
        setLightTheme,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
export default DataContextProvider;
