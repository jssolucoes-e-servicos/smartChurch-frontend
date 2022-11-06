import { createContext, useState } from "react";
import { ThemeProvider } from "./ThemeContext";
const ChurchContext = createContext({});

export const ChurchProvider = ({ children }) => {
  const [load, setLoad] = useState(false);
  const [withMessage, setWithMessage] = useState("Aguarde");
  const [openModal, setOpenModal] = useState(false);
  const [openTimer, setOpenTimer] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  return (
    <ChurchContext.Provider
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
    </ChurchContext.Provider>
  );
};

export default ChurchContext;
