import { Fragment, createContext, useState, useEffect } from "react";
import { ThemeProvider } from "./ThemeContext";
import { parseCookies, setCookie } from 'nookies'
import { ToastContainer, toast } from "react-toastify";

const ChurchContext = createContext({});


export const ChurchProvider = ({ children }) => {
  const cookies = parseCookies()
  const [load, setLoad] = useState(false);
  const [device, setDevice] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openAsside, setOpenAsside] = useState(null);

  useEffect(() => {
    if (openAsside === null) {
      let opAsside = sessionStorage.getItem("openAsside");
      if (opAsside === null) {
        setOpenAsside(true);
        sessionStorage.setItem("openAsside", true);
      } else {
        setOpenAsside(opAsside);
        sessionStorage.setItem("openAsside", opAsside);
      }
    }
  }, []);

  const alert = (type, msg) => {
    switch (type) {
      case 'success':
        toast.success(msg);
        break;
      case 'error':
        toast.error(msg);
        break;
      case 'info':
        toast.info(msg);
        break;
      default:
        break;
    }
  }

  const changeOpenAsside = () => {
    if (openAsside === true) {
      setOpenAsside(false);
      sessionStorage.setItem("openAsside", false);
    } else {
      setOpenAsside(true);
      sessionStorage.setItem("openAsside", true);
    }
  }

  return (
    <ChurchContext.Provider
      value={{
        load,
        setLoad,
        openModal,
        setOpenModal,
        openAsside,
        changeOpenAsside,
        alert,
        device,
        setDevice,
      }}
    >
      <ThemeProvider>
        <ToastContainer />
        <Fragment>
          {children}
        </Fragment>
      </ThemeProvider>
    </ChurchContext.Provider>
  );
};

export default ChurchContext;
