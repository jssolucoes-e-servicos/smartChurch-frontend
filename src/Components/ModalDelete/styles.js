import styled, { css } from "styled-components";
export const ModalPostDelete = styled.div`
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
  background-color: #ccc;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
`;
export const ContainerDataM = styled.div`
  position: relative;
  top: 0;
  overflow-x: auto;
  background: #3172bd;
  box-shadow: 0 11px 25px 36px rgb(0 0 0 / 10%);

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
export const Divisiond = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: auto;
  padding: 5px;

  @media (max-width: 950px) {
    min-height: auto;
  }
  label {
    font-size: 1em;
    color: #111;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
export const ContainerInt = styled.input`
  width: 100%;
  height: 40px;
  color: #d1006d;
  font-weight: 700;
  border-radius: 5px;
  border-style: none;
  font-size: 1em;
  background-color: #fdfdfd;
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
