import React, { useContext } from "react";
import { setCookie } from "nookies";
import ThemeContext from "src/contexts/ThemeContext";
import AsideLeft from "src/Components/AssideLeft";
import NavBar from "src/Components/Navbar";
import Footer from "src/Components/Footer";
import DataContext from "src/contexts/dataContext";

import { StyledApp, ContaineAppFull, ContainerApp } from "./styles";
import { ThemerdApp, GlobalStyles, darkTheme, lightTheme } from "../core/theme";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
export default function AppLayout({ children, userData }) {
  const { load } = useContext(DataContext);
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
