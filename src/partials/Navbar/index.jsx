import Link from "next/link";
import { useContext, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import ChurchContext from "~/contexts/churchContext";
/* import ThemeContext from "~/contexts/ThemeContext"; */
import {
  ButtonMLeft, ContainerLogo, ContainerNav, ContainerPhotoUser, SectorLeft,
  SectorRight, SectorImg
} from "./styles";

export default function NavBar({ userData }) {
  const { openAsside, changeOpenAsside } = useContext(ChurchContext);
  /*   const { theme, changeTheme } = useContext(ThemeContext); */

  useEffect(() => {
    changeVisibilit();
  }, [openAsside]);

  function changeVisibilit() {

    if (openAsside === false) {
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
        <ContainerLogo>
          {userData !== null && (
            userData.image !== null ? (
              <ContainerPhotoUser src={userData.image} />
            ) : (
              <ContainerPhotoUser src="https://www.gravatar.com/avatar/dcf370cee719efa153ea40d72d755ed7" />
            )
          )
          }
        </ContainerLogo>
      </SectorRight>
    </ContainerNav>
  );
}
