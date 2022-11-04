import styled from "styled-components";

export const ContainerForm = styled.div`
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 500px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  background-color: #fff;
  /* background-color: #0080c0; */

  @media (max-width: 1350px) {
    width: 100%;
  }
`;

export const BlockBase = styled.div`
  width: 100%;
  height: auto;
  max-width: 1130px;
  min-height: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  background-color: transparent;
  /* background-color: #59acff;   */

  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const GroupForm = styled.form`
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: transparent;
  /* background-color: #ffffb7;   */

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const BlockForm = styled.div`
  width: 100%;
  height: auto;
  max-width: 48.5%;
  min-height: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  background-color: transparent;
  /* background-color: #ffaeae;   */

  @media (max-width: 700px) {
    max-width: 100%;
    justify-content: center;
  }
`;

export const SelectIpt = styled.select`
  width: 100%;
  max-width: 544px;
  height: 48px;
  position: relative;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url("/image/contact/chevroRight.svg") no-repeat 97% / 3%;
  border: solid 2px #f4f5f4;
  background-color: #ffffff;
  border-radius: 8px;
  padding-left: 15px;
  padding-right: 20px;
  line-height: 21px;
  color: #676767;
  font-family: "Plus Jakarta Sans";
  font-size: 14px;
  font-weight: 400;
  text-transform: inherit;
  outline: none;

  ::placeholder {
    color: #676767;
  }
  @media (max-width: 1050px) {
    width: 544px;
  }

  option {
    height: 50px;
    color: #676767;
    background: white;
    font-family: "Plus Jakarta Sans";
    font-size: 14px;
    font-weight: small;
    display: flex;
    white-space: pre;
    line-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const BoxInput = styled.div`
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 48px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  background-color: transparent;
  /* background-color: #8080c0;   */

  @media (max-width: 700px) {
    justify-content: center;
  }
`;

export const InputSubject = styled.input`
  position: relative;
  width: 100%;
  max-width: 544px;
  height: 48px;
  font-size: 14px;
  text-align: start;
  line-height: 21px;
  padding: 0 15px;
  gap: 2px;
  font-weight: 400;
  font-style: normal;
  outline: none;
  font-family: "Plus Jakarta Sans";
  color: #676767;
  border: solid 2px #f4f5f4;
  border-radius: 8px;
  background-color: #ffffff;
  /* background-color: #ca00ca; */

  ::placeholder {
    color: #676767;
  }
  @media (max-width: 1050px) {
    width: 544px;
  }
`;

export const BoxMessage = styled.div`
  width: 100%;
  height: auto;
  max-width: 544px;
  min-height: 128px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  background-color: transparent;
  /* background-color: #8080c0;   */

  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const TextMessage = styled.textarea`
  position: relative;
  width: 544px;
  height: 128px;
  font-size: 14px;
  text-align: start;
  line-height: 21px;
  padding-left: 15px;
  resize: none;
  font-weight: 400;
  font-style: normal;
  outline: none;
  font-family: "Plus Jakarta Sans";
  color: #676767;
  border: solid 2px #f4f5f4;
  border-radius: 8px;
  background-color: #ffffff;
  /* background-color: #ca00ca; */

  ::placeholder {
    color: #676767;
  }
  @media (max-width: 1050px) {
    width: 544px;
  }
`;

export const BlockAccept = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: 70px;
  top: -25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  background-color: transparent;
  /* background-color: #80ffff; */

  @media (max-width: 700px) {
    top: -15px;
    justify-content: center;
  }
`;

export const BoxCheck = styled.div`
  width: 100%;
  max-width: 35px;
  height: auto;
  min-height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  position: relative;
  background-color: transparent;
  /* background-color: #0080ff; */

  @media (max-width: 590px) {
    max-width: 25px;
  }
`;

export const InputCheck = styled.input`
  position: relative;
  width: 20px;
  height: 20px;
  outline: none;
  resize: none;
  cursor: pointer;
  border: solid 2px #f4f5f4;
  border-radius: 8px;
  background-color: #ffffff;
  transition: transform 0.5s;

  /* background-color: #ca00ca; */

  :checked {
    transform: rotateY(360deg);
  }
`;
export const InputCheckCuston = styled.input`
  position: relative;
  width: 20px;
  height: 20px;
  outline: none;
  resize: none;
  cursor: pointer;
  transition: transform 0.5s;

  :checked {
    transform: rotateY(360deg);
  }
  :before {
    transform: rotateY(360deg);
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    top: -1;
    left: -1;
    background-color: #fff;
    border: solid 1px #ccc;
    border-radius: 2px;
  }
  :checked:before {
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    top: -1;
    left: -1;
    background-color: var(--azulEscuro);
    border: solid 1px var(--azulEscuro);
  }
  :checked:after {
    content: "";
    display: block;
    width: 6px;
    height: 9px;
    border: solid white;
    border-width: 0 2px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 3px;
    left: 7px;
  }
`;

export const BoxTextAccept = styled.div`
  width: 100%;
  max-width: 440px;
  height: auto;
  min-height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  position: relative;
  background-color: transparent;
  /* background-color: #9bcdff; */

  @media (max-width: 1200px) {
    max-width: 90%;
  }

  @media (max-width: 960px) {
    max-width: 85%;
  }

  @media (max-width: 590px) {
    padding-left: 10px;
  }
`;

export const TextAccept = styled.label`
  width: 100%;
  max-width: 100%;
  height: auto;
  text-align: start;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #676767;
  /* background-color: #ffc6e2; */
  flex-wrap: wrap;

  a {
    font-family: "Plus Jakarta Sans";
    color: var(--colorroxo);
    text-decoration-line: underline;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    cursor: pointer;

    @media (max-width: 1200px) {
      font-size: 13px;
    }

    @media (max-width: 500px) {
      font-size: 12px;
    }

    @media (max-width: 460px) {
      font-size: 11px;
    }

    @media (max-width: 390px) {
      font-size: 10px;
    }
  }

  @media (max-width: 1200px) {
    font-size: 13px;
  }

  @media (max-width: 500px) {
    font-size: 12px;
  }

  @media (max-width: 460px) {
    font-size: 11px;
  }

  @media (max-width: 390px) {
    font-size: 10px;
  }
`;

export const GroupButton = styled.div`
  width: 100%;
  max-width: 224px;
  height: auto;
  min-height: 64px;
  top: -60px;
  display: flex;
  justify-content: end;
  align-items: flex-end;
  flex-wrap: wrap;
  position: relative;
  background-color: transparent;

  @media (max-width: 780px) {
    top: -50px;
  }

  @media (max-width: 595px) {
    top: -30px;
  }
`;

export const BlockButton = styled.button`
  position: relative;
  width: 100%;
  max-width: 40%;
  min-width: 224px;
  height: auto;
  max-height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--azulEscuro);
  flex-wrap: wrap;
  border-style: none;
  border-radius: 15px;
  cursor: pointer;

  :hover #Iconbtn {
    margin-right: 70px;
    transition: all 0.6s ease-in-out;
  }

  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const BlockTextBtn = styled.div`
  width: 100%;
  max-width: 55%;
  min-height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  background-color: transparent;
  /* background-color: #ff80c0; */

  @media (max-width: 1300px) {
    width: 100%;
  }
`;

export const TextButton = styled.span`
  position: relative;
  width: 100%;
  max-width: 80%;
  height: auto;
  font-size: 16px;
  text-align: right;
  line-height: 20px;
  font-weight: 700;
  font-style: normal;
  font-family: "Plus Jakarta Sans";
  color: #ffffff;
  background-color: transparent;
  /* background-color: #ff0000; */
  flex-wrap: wrap;

  @media (max-width: 850px) {
    font-size: 14px;
  }
`;

export const BlockIconBtn = styled.div`
  width: 100%;
  max-width: 40%;
  min-height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  background-color: transparent;
  /* background-color: #0080ff; */

  @media (max-width: 1300px) {
    align-items: center;
  }

  @media (max-width: 900px) {
    align-items: center;
  }
`;

export const ImgArrowBlue = styled.img`
  position: relative;
  width: 100%;
  max-width: 45px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  flex-wrap: wrap;

  @media (max-width: 950px) {
    width: 100%;
    flex-wrap: wrap;
  }

  @media (max-width: 600px) {
    max-width: 45px;
  }
`;
