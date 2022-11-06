import styled, { css } from "styled-components";
export const ModalPosts = styled.div`
  /* position: absolute;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  background-color: #ccc;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  /* background-color: #ccc; */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  padding: 30px;
  background: rgba(0, 0, 0, 0.565);
  color: rgb(255, 255, 255);
`;
export const ContainerData = styled.div`
  position: relative;
  top: 0;
  overflow-x: auto;
  background: ${(props) => props.theme.CardRock};
  /* background: #c3c3c3; */
  //box-shadow: 0 11px 25px 36px rgb(0 0 0 / 10%);
  padding: 33px;

  box-shadow: rgb(0 0 0 / 56%) 0px 5px 30px;
  flex-shrink: 0;
  width: 100%;
  max-width: 800px;
  flex-direction: column;
  height: auto;
  /* min-height: 80%; */
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
    padding: 30px;
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
    font-size: 1em;
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
    border: 1px solid #7e0cf5;
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
    border: 1px solid #7e0cf5;
  }
  @media (max-width: 950px) {
    min-height: auto;
  }
`;
export const ContainerInpTextArea = styled.textarea`
  width: 100%;
  max-width: 100%;
  height: 50px;
  max-height: 250px !important;
  font-size: 16px;
  background: rgb(18, 18, 20);
  border-color: rgb(18, 18, 20);
  color: rgb(255, 255, 255);
  padding: 0px 1em;
  border-radius: 5px;
  outline: 0px !important;
  border-style: none;
  :focus {
    border: 1px solid #7e0cf5;
  }
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
  font-size: 1em;
  background-color: #d1006d;
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
  padding: 15px;
  color: #fff;
  border-style: none;
  font-size: 1em;
  background-color: #111;
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
