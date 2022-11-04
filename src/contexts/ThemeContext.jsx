import { parseCookies, setCookie } from "nookies";
import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext({});
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("");

  function themers() {
    const cookies = parseCookies();
    let actualTheme = cookies.theme;
    console.log("actual theme on cookies", actualTheme);
    if (actualTheme !== null) {
      theme === "light" ? setDark() : setLigth();
    }
  }
  useEffect(() => {
    themers();
  }, []);

  function changeTheme() {
    theme === "light" ? setDark() : setLigth();
  }
  const setDark = () => {
    setTheme("dark");
    setCookie(undefined, "theme", "dark");
    //sessionStorage.setItem("app@theme", "dark");
    console.info("theme changed to dark");
  };
  const setLigth = () => {
    setTheme("light");
    setCookie(undefined, "theme", "light");
    //sessionStorage.setItem("app@theme", "light");
    console.info("theme changed to light");
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

