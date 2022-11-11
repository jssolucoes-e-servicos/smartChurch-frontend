import Link from "next/link";
import { useContext, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import ChurchContext from "~/contexts/churchContext";
/* import ThemeContext from "~/contexts/ThemeContext"; */
import {
  /* BtnSwit, */ ButtonMLeft, ContainerLogo, ContainerNav, ContainerPhotoUser, SectorLeft,
  SectorRight, SectorImg
} from "./styles";

export default function NavBar({ userData }) {
  const { openAsside, changeOpenAsside } = useContext(ChurchContext);
  /*   const { theme, changeTheme } = useContext(ThemeContext); */

  function changeVisibilit() {

    if (openAsside) {
      document.getElementById("navegMan").style =
        "width:0px ;transition: all 0.2s ease-in-out";
      document.querySelector("#SiderMan").style =
        "opacity:0;transition:all .2s ease";
    } else {
      document.getElementById("navegMan").style =
        "width:250px ;transition: all 0.2s ease-in-out";
      document.querySelector("#SiderMan").style =
        "opacity:1;transition:all .2s ease";
    }
  }

  useEffect(() => {
    changeVisibilit();
  }, [openAsside]);

  return (
    <ContainerNav>
      <SectorLeft>
        <ButtonMLeft onClick={changeOpenAsside}>
          <BiMenu id="IconMLeft" />
        </ButtonMLeft>
        <Link href="/">
          <SectorImg
            src="/assets/img/logo.png"
            width="100px"
            heigth="50px"
          />
        </Link>
      </SectorLeft>
      <SectorRight>
        {/* <BtnSwit>
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
        </BtnSwit> */}
        <ContainerLogo>
          {userData.image != null && userData.image.trim().length > 20 ? (
            <ContainerPhotoUser src={userData.image} />
          ) : (
            <ContainerPhotoUser src="/assets/img/user/padraouser.jpg" />
          )}
        </ContainerLogo>
      </SectorRight>
    </ContainerNav>
  );
}
