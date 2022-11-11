import styled, { css } from "styled-components";
export const ModalPosts = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0 !important ;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  background-color: #000000e6;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  z-index: 0;
  padding: 30px;
  /* background: rgba(0, 0, 0, 0.565); */
  color: rgb(255, 255, 255);
`;
export const ContainerData = styled.div`
  position: relative;
  top: 0;
  overflow-x: auto;
  background: ${(props) => props.theme.CardRock};
  padding: 0px;
  box-shadow: rgb(0 0 0 / 56%) 0px 5px 30px;
  flex-shrink: 0;
  width: 100%;
  max-width: 700px;
  flex-direction: column;
  height: auto;
  height: calc(100% -30px);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 950px) {
    min-height: auto;
  }
  form {
    width: 100%;
    height: 100%;
    padding: 10px;
  }
`;
export const SectorBtnTtitles = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  flex-wrap: wrap;
  background-color: rgb(40, 39, 46);
  padding-right: 40px;
  span {
    padding-left: 20px;
    font-size: 12px;
  }
  @media (max-width: 1050px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  h2 {
    padding-left: 40px;

    font-size: 18px;
  }
`;
export const DivisiondFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: auto;
  padding: 5px;
  /* background-color: red; */

  @media (max-width: 950px) {
    min-height: auto;
  }
  label {
    font-size: 1em;
    color: ${(props) => props.theme.fontColor};
    /* color: #111; */
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
export const Divisiond = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: auto;
  padding: 5px;
  /* background-color: blue; */
  overflow: hidden;
  @media (max-width: 950px) {
    min-height: auto;
  }
  label {
    font-size: 15px;
    color: ${(props) => props.theme.fontColor};
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
export const ContainerInt = styled.input`
  /* width: 100%;
  height: 40px;
  color: #d1006d;
  font-weight: 700;
  border-radius: 5px;
  border-style: none;
  font-size: 1em;
  */
  //background-color: #fdfdfd;
  background: ${(props) => props.theme.FormInp};
  color: ${(props) => props.theme.fontColor};
  width: 100%;
  height: 50px;
  font-size: 16px;
  // background: rgb(18, 18, 20);
  //border-color: rgb(18, 18, 20);
  //color: rgb(255, 255, 255);
  padding: 0px 1em;
  border-radius: 5px;
  outline: 0px !important;
  border: 1px solid ${(props) => props.theme.borders};
  //border-style: none;
  :focus {
    border: 1px solid #4863f7;
  }
  @media (max-width: 950px) {
    min-height: auto;
  }
`;
export const ContainerInpSelect = styled.select`
  width: 100%;
  height: 50px;
  font-size: 16px;
  background: rgb(18, 18, 20);
  border-color: rgb(18, 18, 20);
  color: rgb(255, 255, 255);
  padding: 0px 1em;
  border-radius: 5px;
  outline: 0px !important;
  border-style: none;
  :focus {
    border: 1px solid #4863f7;
  }
  @media (max-width: 950px) {
    min-height: auto;
  }
`;
export const ContainerInpTextArea = styled.textarea`
  width: 100%;
  max-width: 100%;
  height: 80px;
  max-height: 250px !important;
  font-size: 16px;
  background: rgb(18, 18, 20);
  border-color: rgb(18, 18, 20);
  color: rgb(255, 255, 255);
  /* padding: 0px 1em; */
  border-radius: 5px;
  outline: 0px !important;
  border-style: none;
  padding: 15px;
  :focus {
    border: 1px solid #4863f7;
  }
  @media (max-width: 950px) {
    min-height: auto;
  }
`;
export const SectorBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: auto;
  padding: 10px;

  @media (max-width: 950px) {
    min-height: auto;
  }
`;
export const BtnData = styled.button`
  width: 100%;
  max-width: 250px;
  height: 40px;
  color: #fff;
  border-style: none;
  font-size: 14px;
  background-color: #333;
  border-style: none;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 700;
  @media (max-width: 950px) {
    min-height: auto;
  }
  :hover {
    transition: all 0.3s ease-in-out;
    background-color: var(--colorroxo);
  }
`;
export const BtnDataCloseBtn = styled.button`
  width: 100%;
  max-width: 250px;
  height: 40px;
  color: #fff;
  border-style: none;
  font-size: 14px;
  background-color: #121214;
  border-style: none;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 700;
  @media (max-width: 950px) {
    min-height: auto;
  }
  :hover {
    transition: all 0.3s ease-in-out;
    background-color: var(--colorroxo);
  }
`;
export const BtnDataClose = styled.button`
  padding: 10px;
  color: #fff;
  border-style: none;
  font-size: 10px;
  background-color: #202024;
  border-style: none;
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: 700;
  @media (max-width: 950px) {
    min-height: auto;
  }
  :hover {
    transition: all 0.3s ease-in-out;
    background-color: var(--colorroxo);
  }
`;
