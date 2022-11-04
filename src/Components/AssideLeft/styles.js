import styled from "styled-components";
//AssideLeft
export const ContainerAssid = styled.div`
  position: relative;
  top: 0px;
  background-color: blue;
  left: 0;
  width: 250px;
  overflow: hidden;
  flex-shrink: 0;
  height: auto;
  min-height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 950px) {
    width: 0px;
  }
`;

export const SectorImg = styled.img`
  position: relative;
  top: 0px;
  left: 0;
  width: 100px;
  height: 50px;
  overflow: hidden;
  flex-shrink: 0;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  @media (max-width: 950px) {
  }
`;

export const Sidebarcontaner = styled.div`
  position: fixed;
  padding-top: 10px;
  width: 230px;
  flex-shrink: 0;
  background: ${(props) => props.theme.CardRock};
  height: auto;
  min-height: 95vh;
  overflow: auto;
  box-shadow: 0 4px 20px rgb(0 0 0 / 10%), 0 0 2px rgb(0 0 0 / 10%);
  border-radius: 5px;
  transition: all 3s ease-out;
  opacity: 1;

  @media (max-width: 950px) {
    /* display: none; */
  }
`;
