import { parseCookies, setCookie } from "nookies";
import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext({});
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("");

  function themers() {
    const cookies = parseCookies();
    let actualTheme = cookies.theme;
    if (actualTheme !== null) {
      theme === "light" ? setLigth() : setDark();
    }
  }

  useEffect(() => {
    themers();
  }, []);

  function changeTheme() {
    theme === "light" ? setLigth() : setDark();
  }
  const setDark = () => {
    setTheme("dark");
    setCookie(undefined, "theme", "dark");
  };
  const setLigth = () => {
    setTheme("light");
    setCookie(undefined, "theme", "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

