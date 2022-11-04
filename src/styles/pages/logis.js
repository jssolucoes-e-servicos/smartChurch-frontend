import styled from "styled-components";
//AssideLeft
export const ContainerLogin = styled.div`
  position: relative;
  top: 0;
  margin: 0;
  background: #121214;
  max-width: 100%;
  min-width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 950px) {
    max-width: 100%;
    min-width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

//AssideLeft
export const ContainerImgs = styled.div`
  position: relative;
  top: 0;
  /* background: #fdfdfd; */
  /* box-shadow: 0 11px 25px 36px rgb(0 0 0 / 10%); */
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  max-width: 400px;

  height: auto;
  //min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 300px;
    padding: 50px;
  }
`;
export const Bglogin = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  @media (max-width: 950px) {
    min-height: auto;
  }
`;
export const ContainerData = styled.div`
  position: relative;
  top: 0;
  background: #121214;
  /* box-shadow: 0 11px 25px 36px rgb(0 0 0 / 10%); */
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  max-width: 600px;
  margin-left: 50px;
  flex-direction: column;
  height: auto;
  //min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    background-color: blue;
    margin-left: 0;
    padding: 5px;
  }
  form {
    width: 100%;
    height: 100%;
    /* padding: 30px; */
  }
`;
// form color
export const DiColor = styled.div`
  padding: 1px;
  height: auto;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: solid 0.5px #e91e63; */
  background: linear-gradient(104.3deg, #ff008ecc 0.48%, #ffcd1e33);
  // background: linear-gradient(180deg, #202024, 0, #121214 100%);
  border-radius: 10px;
  @media (max-width: 950px) {
    max-width: 100%;
  }
`;
export const DicGe = styled.div`
  height: auto;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  /* border: solid 0.5px #e91e63; */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#202024),
    to(#161618)
  );
  // background: linear-gradient(180deg, #202024, 0, #121214 100%);
  @media (max-width: 950px) {
    max-width: 100%;
  }
`;

export const FormS = styled.div`
  height: auto;
  width: 100%;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color: var(--bgSesseons);
  color: ${(props) => props.theme.Colortxt};
  @media (max-width: 950px) {
    max-width: 100%;
  }
`;
export const Budiv = styled.div`
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 100%;
  max-width: 60px;
  background-color: #000;
  border-right: 1px solid #505059;
  -moz-text-decoration-style: none;
  text-decoration-style: none;
  font-size: 1em;
  outline-style: none;
  padding: 30px 0px;
  color: #505059;

  /* text-transform: lowercase; */
  @media (max-width: 950px) {
    max-width: 60px;
  }
`;
export const ButtonResgate = styled.button`
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
    margin-left: 8px;
  }
`;
export const Txtseparation = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 15px;
  display: flex;
  justify-content: flex-start;
`;
export const TxtL = styled.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0;
  text-align: left;
  color: var(--bgColorAmarelo);
  float: left;
`;
export const InputdIV = styled.div`
  margin-bottom: 2px;
  padding-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
  height: auto;
  width: 100%;
  max-width: 570px;
  align-items: center;
  display: flex;

  /* background-color: blue; */
  @media (max-width: 950px) {
    max-width: 100%;
    padding-left: 0;
    /* padding: 10px 0px; */
    /* background: red; */
  }
`;
export const InputTxt = styled.input`
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 100%;
  max-width: 95%;
  background-color: #000;
  //border-radius: 5px;
  -moz-text-decoration-style: none;
  text-decoration-style: none;
  font-size: 1em;
  outline-style: none;
  padding: 30px 20px;
  color: #535353;
  :focus {
    color: #fcfcfc;
  }
  /* text-transform: lowercase; */
  @media (max-width: 950px) {
    max-width: 100%;
  }
`;

export const DivTX = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const SpanTXT = styled.div`
  width: 100%;
  max-width: 90%;
  height: auto;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: row;

  /* padding-left: 20px;
  padding-right: 20px; */

  .ferh {
    content: "";
    margin-top: -2px;
    margin-right: 8px;
    display: inline-block;
    vertical-align: text-top;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 2px solid #52749a;
    background: var(--background);
  }
  p {
    font-size: 13px;
    line-height: 26px;
    color: #ccc;
    padding: 20px;
  }
`;
// final color
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
  font-weight: 700;
  border-radius: 5px;
  border-style: none;
  font-size: 1em;
  background-color: #000;
  padding: 10px 20px;
  color: #535353;
  :focus {
    border: 1px solid #7e0cf5;
    color: #fcfcfc;
  }
  @media (max-width: 950px) {
    max-width: 100%;
  }
`;
export const BtnData = styled.button`
  width: 100%;
  max-width: 100%;
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
