import styled, { createGlobalStyle } from "styled-components";

export const darkTheme = {
  BgRocket: "rgb(18, 18, 20)",
  CardRock: "rgb(32 32 36)",
  BoxRock: "#1a1a1e",
  FormInp: "rgb(18, 18, 20)",
  borders: "rgb(18, 18, 20)",
  BoxNav: "rgb(32 32 36)",
  BgBlog: `https://3sdigital.com.br/videovaltra/AstraImg/Bgblog.png`,
  bgdark: `linear-gradient(270deg,#09090a,#121214)`,
  bgCard: "#121214",
  overley: "#e91e63",
  fontgrenn: "#00b37e",
  carddark: "#000",
  //antigo e deletar se precisar

  BodyProject: "#121214",
  fontColor: "#fff",
  display: "flex",
  Bgdivs: "#202024",
  Colortxt: "#fff",
  border: "#ff6a00",
  BgMenu: "#121214",
  BgFilter: "rgba(18, 18, 18, 0.81)",
  colorParagraph: "#b4b4b4",
  coorh2: `linear-gradient(90deg, #ff008e, #ffcd1e)`,
  black_red: "#505059",
  hr_black_red: `linear-gradient(270deg, rgba(50, 50, 56, 0), #323238 96.44%)`,
  boxcor: `linear-gradient(270deg, #09090a, #121214)`,
  LoadTop: `linear-gradient(90deg,#ff008e,#ffcd1e)`,
};

export const lightTheme = {
  BgRocket: "#F5F5F5",
  CardRock: "#ffffff",
  BoxRock: "#fff",
  FormInp: "#fdfdfd",
  borders: "#cad1d7",
  BoxNav: "#9E9E9E",
  BgBlog: `https://d335luupugsy2.cloudfront.net/cms/files/406196/1644406420/$louw5ms60r`,
  bgdark: "#fff",
  bgCard: "#fdfdfd",
  overley: "#fff",
  fontgrenn: "var(--colorBordo)",
  carddark: "#fff",
  //antigo e deletar se precisar
  BodyProject: "#fff",
  fontColor: "#000",
  border: "#333",
  Bgdivs: "#202024",
  Colortxt: "#fff",
  BgMenu: "#ffffff",
  BgFilter: "#d40e4263",
  colorParagraph: "#333",
  coorh2: `linear-gradient(90deg, #333, #333)`,
  black_red: "#e20e17",
  hr_black_red: `linear-gradient(270deg,rgba(50,50,56,0),#f44336 96.44%);`,
  boxcor: `linear-gradient(270deg, #2e0b09, #e20e17)`,
  LoadTop: `#ffcd1e`,
};

export const painelTheme = {
  background: "#EBEBEB",
};

export const GlobalStyles = createGlobalStyle`
	body {
    width:100%;
    margin: 0;
    padding: 0;
		 background-color: ${(props) => props.theme.BgRocket};
    //background-color: #fdfdfd;
	}
`;

export const ThemerdApp = styled.div`
  width: 100%;
  max-width: 100%;
  color: ${(props) => props.theme.fontColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
