import React, { useContext, useEffect } from "react";
import AsideLeft from "~/partials/AssideLeft";
import Footer from "~/partials/Footer";
import NavBar from "~/partials/Navbar";
import ChurchContext from "~/contexts/churchContext";
import ThemeContext from "~/contexts/ThemeContext";
import Loader from "~/components/Loader";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme, ThemerdApp } from "../core/theme";

import { ContaineAppFull, ContainerApp, StyledApp } from "./styles";
export default function AppLayout({ children, userData }) {
  const { load, setDevice } = useContext(ChurchContext);
  //const { theme } = useContext(ThemeContext);

  useEffect(() => {
    let windowWidth = window.innerWidth;
    if (windowWidth <= 1200) {
      setDevice('mobile');
    } else {
      setDevice('web');
    }
    window.addEventListener("resize", function () {
      sizeOfThings();
    });
  }, []);



  async function sizeOfThings() {
    var windowWidth = window.innerWidth;
    if (windowWidth <= 1200) {
      setDevice('mobile');
    } else {
      setDevice('web');
    }
  }

  return (
    <React.Fragment>
      <StyledThemeProvider theme={darkTheme}>{/* {theme === "light" ? lightTheme : darkTheme}> */}
        <GlobalStyles />
        <ThemerdApp>
          <NavBar userData={userData} />
          <StyledApp>
            <AsideLeft />
            <ContaineAppFull>
              <ContainerApp>
                {load === true && <Loader />}
                {children}
              </ContainerApp>
            </ContaineAppFull>
          </StyledApp>
          <Footer />
        </ThemerdApp>
      </StyledThemeProvider >
    </React.Fragment >
  );
}
