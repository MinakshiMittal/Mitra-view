import { createContext, useContext, useEffect, useState } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toastMessage, setToastMessage] = useState();
  const [toastDisplay, setToastDisplay] = useState("none");

  useEffect(() => {
    const timer = setTimeout(() => {
      setToastDisplay("none");
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <ToastContext.Provider
      value={{ setToastDisplay, toastDisplay, setToastMessage, toastMessage }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
