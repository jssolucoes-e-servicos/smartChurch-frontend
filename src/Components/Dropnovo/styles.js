import styled, { css } from "styled-components";
export const ContainerTitle = styled.div`
  position: relative;

  width: 100%;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 15px;
  padding: 0 0 15px 0;
  color: ${(props) => props.theme.fontColor};
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 0;
  }
`;
export const ContainerList = styled.div`
  position: relative;

  width: 100%;
  max-width: 100%;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 15px;
  padding: 0 0 5px 0;
  cursor: pointer;
  color: ${(props) => props.theme.fontColor};
  :hover {
    color: #3d3c42;
  }
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 0;
  }
`;
export const ContainerSpan = styled.span`
  position: relative;
  font-size: 15px;

  @media (max-width: 950px) {
  }
`;
export const ContainerSpanActive = styled.div`
  position: relative;
  left: 0px;
  right: 10px;
  /* top: calc(50% - 8px); */
  width: 16px;
  height: 16px;
  border-radius: 0px;
  margin-right: 10px;
  background: url("https://app.rocketseat.com.br/static/media/check.f926b598.svg");

  @media (max-width: 950px) {
  }
`;
export const ContainerSpanInative = styled.div`
  position: relative;
  left: 0px;
  /* top: calc(50% - 8px); */
  width: 16px;
  height: 16px;
  background: rgb(50, 50, 56);
  border-radius: 50%;
  margin-right: 10px;
  @media (max-width: 950px) {
  }
`;
