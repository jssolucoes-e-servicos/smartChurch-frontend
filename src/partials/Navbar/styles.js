import styled from "styled-components";
//AssideLeft
export const ContainerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //background-color: #f5f5f5;
  background: ${(props) => props.theme.BoxNav};
  box-shadow: 0 1px 20px 0px rgb(0 0 0 / 20%);
  //box-shadow: rgb(18 18 20) 0px 0.2rem 2rem;
  width: 100%;
  max-width: 100%;
  height: 70px;
  padding: 20px;
  color: #fff;
  z-index: 1;
  @media (max-width: 950px) {
    max-width: 100%;
    min-width: 100%;
  }
`;

export const ContainerLogo = styled.div`
  position: relative;
  background: #fff;
  max-width: 50px;
  height: 50px;
  border-radius: 25px;
  overflow: hidden;
  @media (max-width: 950px) {
    max-width: 100px;
  }
`;
export const SectorLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 15px;
  @media (max-width: 950px) {
    max-width: 50px;
  }
`;

export const TxtHome = styled.div`
  font-size: 22px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #03a9f4;
  //color: ${(props) => props.theme.fontColor};
  cursor: pointer;
  :hover {
    color: #00b37e;
  }
  @media (max-width: 950px) {
    max-width: 50px;
  }
`;
export const ButtonMLeft = styled.div`
  width: 90px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.fontColor};
  font-size: 30px;
  /* background-color: red; */
  padding-left: 0px;
  padding-right: 20px;
  cursor: pointer;

  @media (max-width: 950px) {
    display: flex;
    max-width: 50px;
  }
  :hover #IconMLeft {
    color: #00b37e;
  }
`;

export const SectorRight = styled.div`
  width: 100%;
  max-width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 15px;

  @media (max-width: 950px) {
    max-width: 50px;
  }
`;
export const ContainerPhotoUser = styled.img`
  position: relative;
  background: #fff;
  max-width: 50px;
  display: block;
  transition: 0.3s;

  /* -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: gray; 

  :hover {
    -webkit-filter: none;
    filter: none;
  } */

  @media (max-width: 950px) {
    max-width: 50px;
  }
`;

export const BtnSwit = styled.div`
  width: 90px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  @media (max-width: 950px) {
    max-width: 50px;
  }
`;
