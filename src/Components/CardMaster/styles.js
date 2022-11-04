import styled, { css } from "styled-components";

export const CardMax = styled.div`
  /* background: PURPLE; */
  box-shadow: 0 4px 20px rgb(0 0 0 / 10%), 0 0 2px rgb(0 0 0 / 10%);
  height: 100%;
  min-height: 80px;
  padding: 24px;
  border-radius: 4px;
  margin-bottom: 10px;
  margin-top: 10px;

  ${({ viewSize }) =>
    viewSize === "sizemd04"
      ? sizemd04
      : viewSize === "sizemd06"
      ? sizemd06
      : viewSize === "sizemd12"
      ? sizemd12
      : sizemd06};
  @media (max-width: 1050px) {
    margin-right: 0px;
  }
`;
const sizemd04 = css`
  width: 100%;
  width: 350px !important;
  margin-right: 20px;
  background: ${(props) => props.theme.CardRock};
  :hover {
    box-shadow: 0 0 0 2px #4863f7;
  }
`;

const sizemd06 = css`
  width: 100%;
  max-width: 500px !important;
  border: 1px solid #00291d;
  margin-right: 20px;
  background: ${(props) => props.theme.CardRock};
  :hover {
    //border: 1px solid #4863f7;
    box-shadow: 0 0 0 2px #4863f7;
  }
`;
const sizemd12 = css`
  width: 100%;
  max-width: 100% !important;
  margin-right: 0;
  background: ${(props) => props.theme.CardRock};
  :hover {
    box-shadow: 0 0 0 2px #4863f7;
  }
`;

export const CardMaxIcons = styled.div`
  height: auto;
  min-height: 80px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const CardImg = styled.img`
  background-size: cover;
  background-position: center;

  /* min-height: 80px; */
  width: 60px;
  height: 60px;
  /* margin-left: 50px;
  margin-right: 20px; */

  /* margin-top: 10px;
  padding-right: 20px; */
`;
export const CardTexts = styled.div`
  width: 100%;
  height: auto;
  padding: 0;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;
export const CardTtile = styled.span`
  font-family: Roboto, sans-serif;
  font-size: 35px;
  line-height: 12px;
  color: ${(props) => props.theme.fontgrenn};
  font-weight: 900;
  /* margin-bottom: 20px; */
  margin-left: 10px;
`;
export const Cardparagraph = styled.span`
  width: 100%;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  line-height: 20px;
  color: ${(props) => props.theme.fontColor};
  font-weight: 600;
  margin-bottom: 20px;
  display: flex;
`;
