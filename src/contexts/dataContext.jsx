import { createContext, useState } from "react";
import { ThemeProvider } from "./ThemeContext";
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [load, setLoad] = useState(false);
  const [withMessage, setWithMessage] = useState("Aguarde");
  const [openModal, setOpenModal] = useState(false);
  const [openTimer, setOpenTimer] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  return (
    <DataContext.Provider
      value={{
        load,
        setLoad,
        withMessage,
        setWithMessage,
        openModal,
        setOpenModal,
        openTimer,
        setOpenTimer,
        modalContent,
        setModalContent,
      }}
    >
      <ThemeProvider>{children}</ThemeProvider>
    </DataContext.Provider>
  );
};

export default DataContext;
