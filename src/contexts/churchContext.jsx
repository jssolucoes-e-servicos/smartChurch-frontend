import { Fragment, createContext, useState, useEffect } from "react";
import { ThemeProvider } from "./ThemeContext";
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { ToastContainer, toast } from "react-toastify";

const ChurchContext = createContext({});


export const ChurchProvider = ({ children }) => {
  const cookies = parseCookies()
  const [load, setLoad] = useState(false);
  const [device, setDevice] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openAsside, setOpenAsside] = useState(false);

  useEffect(() => {
    let opAsside = cookies.smc_openAsside;
    if (opAsside === undefined) {

      changeOpenAsside()
    }
    setOpenAsside(Boolean(opAsside));
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
      setCookie(null, 'smc_openAsside', false, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    } else {
      setOpenAsside(true);
      setCookie(null, 'smc_openAsside', true, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
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
