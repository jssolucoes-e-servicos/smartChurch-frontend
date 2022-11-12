import styled from "styled-components";

export const CadBox = styled.div`
  /* background: red; */
  //background: #1a1a1e;
  background: ${(props) => props.theme.BoxRock};
  box-shadow: 0 4px 20px rgb(0 0 0 / 10%), 0 0 2px rgb(0 0 0 / 10%);
  border-radius: 8px;
  width: calc(100% - 32px);
  height: calc(100% - 32px);
  padding: 16px;
  overflow-y: auto;
  @media (max-width: 1050px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const CadBoxBtn = styled.button`
  background: #04aa6d;
  box-shadow: 0 4px 20px rgb(0 0 0 / 10%), 0 0 2px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding: 10px;
  border-style: none;
  font-size: 15px;
  margin-right: 5px;
  margin-right: 5px;
  color: #fff;
  @media (max-width: 1050px) {
    background-color: #ffc107;
  }
`;
export const CadBoxBtnDelete = styled.button`
  background: red;
  margin-right: 5px;
  margin-right: 5px;
  box-shadow: 0 4px 20px rgb(0 0 0 / 10%), 0 0 2px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding: 10px;
  border-style: none;
  font-size: 15px;
  @media (max-width: 1050px) {
    background-color: #ffc107;
  }
`;
export const Cadbtnlong = styled.button`
  background: #d1006d;
  margin-right: 5px;
  margin-right: 5px;
  box-shadow: 0 4px 20px rgb(0 0 0 / 10%), 0 0 2px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding: 10px;
  border-style: none;
  font-size: 15px;
  :hover {
    background: #ccc;
  }
  @media (max-width: 1050px) {
    background-color: #ffc107;
  }
`;
export const CadbtnlongV2 = styled.button`
  /* background-color: #4863f7; */
  min-heigth: 70;
  background-color: #333;
  margin-right: 5px;
  margin-right: 5px;
  box-shadow: 0 4px 20px rgb(0 0 0 / 10%), 0 0 2px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding: 10px;
  border-style: none;
  font-size: 12px;

  transition: all 0.2s ease-in-out;
  :hover {
    background: #4863f7;
  }
  @media (max-width: 1050px) {
    background-color: #ffc107;
  }
`;
export const CardSector = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: auto;
  flex-wrap: wrap;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 10px 0 10px 0;
  /* box-shadow: 0 4px 20px rgb(0 0 0 / 10%), 0 0 2px rgb(0 0 0 / 10%); */
  /* background: ${(props) => props.theme.CardRock}; */
  /* padding: 24px; */
  @media (max-width: 1050px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;
export const CadBoxBtnTransparent = styled.button`
  background: transparent;
  margin-right: 5px;
  margin-right: 5px;
  transition: all 0.2s ease 0s;
  border-radius: 2px;
  padding: 10px;
  border-style: none;
  font-size: 15px;
  color: rgb(135, 134, 139);
  :hover {
    background-color: #3d3c42;
  }
  @media (max-width: 1050px) {
    background-color: #ffc107;
  }
`;
export const SectorBtnTable = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  flex-wrap: wrap;
  /* background-color: blue; */

  @media (max-width: 1050px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const Cardtata12 = styled.div`
  /* background: blue; */
  box-shadow: 0 4px 20px rgb(0 0 0 / 10%), 0 0 2px rgb(0 0 0 / 10%);
  width: calc(100% - 0px);
  height: calc(100% - 32px);
  min-height: 40px;
  margin-right: 0px;
  padding: 24px;
  /* border: 1px solid #00291d; */
  border-radius: 4px;
  @media (max-width: 1050px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;
export const Cardtata4 = styled.div`
  background: ${(props) => props.theme.CardRock};
  box-shadow: 0 4px 20px rgb(0 0 0 / 10%), 0 0 2px rgb(0 0 0 / 10%);
  /* width: 100%;
  max-width: 330px; */
  flex-direction: column;
  width: calc(25% - 22px);
  height: 100%;
  min-height: 340px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  padding: 24px;
  border-radius: 4px;

  @media (max-width: 1050px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;
export const Cardtata6 = styled.div`
  background: ${(props) => props.theme.CardRock};
  box-shadow: 0 4px 20px rgb(0 0 0 / 10%), 0 0 2px rgb(0 0 0 / 10%);
  width: 100%;
  max-width: 330px;
  height: 100%;
  min-height: 340px;
  margin-right: 20px;
  padding: 24px;
  border: 1px solid #00291d;
  border-radius: 4px;

  @media (max-width: 1050px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;
export const Drop3sdMaster = styled.div`
  //display: block;
  z-index: 1;
  padding: 20px;
  min-width: 120px;
  margin-top: 15px;
  background: ${(props) => props.theme.BoxRock};
  border: 1px solid ${(props) => props.theme.borders};
  border-radius: 3px;
  position: absolute;
  margin-left: 0%;
  transition: 0.3s ease-out;
  :before {
    display: inline-block;
    position: absolute;
    width: 0;
    height: 0;
    vertical-align: middle;
    content: "";
    top: -11px;
    left: 43%;
    right: auto;

    border-bottom: 0.9em solid;
    border-right: 0.9em solid transparent;
    border-left: 0.9em solid transparent;
    color: ${(props) => props.theme.BoxRock};
  }
  @media (max-width: 1050px) {
    width: 80%;
  }
`;

export const SectorBtngeral = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 100%;
  max-width: 300px;
  background-color: red;
  border-right: 1px solid #505059;
  padding: 10px;
  margin-top: 20px;

  /* text-transform: lowercase; */
  @media (max-width: 950px) {
    max-width: 100%;
  }
`;
export const ButtonGeral = styled.button`
  width: 100%;
  max-width: 100%;
  height: 50px;
  line-height: 48px;
  background: var(--bgColorAmarelo);
  border: none;
  text-transform: uppercase;
  color: #121214;
  text-decoration: none;
  border: 0;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  text-align: center;
  text-transform: uppercase;
  transition: all 0.3s ease;
  :hover {
    background-color: #e7b400;
  }
  @media (max-width: 950px) {
    width: 100%;
    font-size: 10px;
  }
`;

export const FilterName = styled.div`
  width: 100%;
  max-width: 85%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--bgSesseons);
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 20px;
`;
export const FilterIpt = styled.input`
  width: 100%;
  max-width: 50%;
  height: 57px;
  padding: 20px;
  display: flex;
  justify-content: center;
  background-color: var(--bgSesseons);
  box-shadow: rgb(132 25 81 / 20%) 0px 30px 50px;
  border-radius: 5px;
  border: 1px solid rgb(255, 9, 137);
  color: rgb(255, 255, 255);
  outline: 0px;
  opacity: 1;
  font-size: 15px;
  :focus {
    border: solid 1px #4863f7;
    box-shadow: rgb(63 81 181 / 21%) 0px 30px 50px;
  }
`;
export const SelectedFilter = styled.select`
  width: 100%;
  max-width: 30%;
  height: 57px;

  padding: 20px;
  display: flex;
  justify-content: center;
  background-color: var(--bgSesseons);
  box-shadow: rgb(132 25 81 / 20%) 0px 30px 50px;
  border-radius: 5px;
  border: 1px solid rgb(255, 9, 137);
  color: rgb(255, 255, 255);
  outline: 0px;
  opacity: 1;
  font-size: 15px;
  margin-left: 30px;
  option {
    background-color: #202024;
    color: #ccc;
  }
  :focus {
    border: solid 1px #4863f7;
    box-shadow: rgb(63 81 181 / 21%) 0px 30px 50px;
  }
`;
