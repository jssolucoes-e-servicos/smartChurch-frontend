import Link from "next/link";
import { useContext, useEffect } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import ThemeContext from "src/contexts/ThemeContext";
import {
  BtnSwit, ButtonMLeft, ContainerLogo, ContainerNav, ContainerPhotoUser, SectorLeft,
  SectorRight, TxtHome
} from "./styles";
export default function NavBar({ userData }) {
  const { theme, changeTheme } = useContext(ThemeContext);
  console.log(theme);
  var visibilidade = true;
  function OcultarExibir() {
    // Quando clicar no botão.
    if (visibilidade) {
      visibilidade = false; //alteramos o valor da variável para falso.
      //Se a variável visibilidade for igual a true, então...
      document.getElementById("navegMan").style =
        "width:0px ;transition: all 0.2s ease-in-out";
      document.querySelector("#SiderMan").style =
        "opacity:0;transition:all .2s ease";
      //Ocultamos a div
    } else {
      visibilidade = true; //Alteramos o valor da variável para true.
      //ou se a variável estiver com o valor false..

      //Exibimos a div..
      document.getElementById("navegMan").style =
        "width:250px ;transition: all 0.2s ease-in-out";
      document.querySelector("#SiderMan").style =
        "opacity:1;transition:all .2s ease";
    }
    console.log(visibilidade);
  }

  useEffect(() => {
    OcultarExibir();
  }, []);
  return (
    <ContainerNav>
      <SectorLeft>
        <Link href="/">
          <TxtHome>Dashboard </TxtHome>
        </Link>
        <ButtonMLeft onClick={OcultarExibir}>
          <BiMenuAltLeft id="IconMLeft" />
        </ButtonMLeft>
      </SectorLeft>

      <SectorRight>
        <BtnSwit>
          <input
            className="Ipt"
            id="switch"
            type="checkbox"
            name="theme"
            checked={theme === "light" ? true : false}
            onClick={() => changeTheme()}
          />
          <label className="labeDark" htmlFor="switch">
            Dark
          </label>
        </BtnSwit>
        <ContainerLogo>
          {userData.image != null && userData.image.trim().length > 20 ? (
            <ContainerPhotoUser src={userData.image} />
          ) : (
            <ContainerPhotoUser src="/assets/img/user/padraouser.jpg" />
          )}
          {/* <ContainerPhotoUser src={userData.image} alt="Profile Photo" /> */}
        </ContainerLogo>
      </SectorRight>
    </ContainerNav>
  );
}
