import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [loader, setLoader] = useState("not loading");
  const [idForLoader, setIdForLoader] = useState();
  return (
    <LoaderContext.Provider
      value={{ loader, setLoader, idForLoader, setIdForLoader }}
    >
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  return useContext(LoaderContext);
};
