import React, { useContext } from "react";
import AsideLeft from "~/partials/AssideLeft";
import Footer from "~/partials/Footer";
import NavBar from "~/partials/Navbar";
import ChurchContext from "~/contexts/churchContext";
import ThemeContext from "~/contexts/ThemeContext";

import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme, ThemerdApp } from "../core/theme";
import { ContaineAppFull, ContainerApp, StyledApp } from "./styles";
export default function AppLayout({ children, userData }) {
  const { load } = useContext(ChurchContext);
  const { theme } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <StyledThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <ThemerdApp>
          <NavBar userData={userData} />
          <StyledApp>
            <AsideLeft />
            <ContaineAppFull>
              <ContainerApp>{children}</ContainerApp>
            </ContaineAppFull>
          </StyledApp>
          <Footer />
        </ThemerdApp>
      </StyledThemeProvider>
    </React.Fragment>
  );
}
