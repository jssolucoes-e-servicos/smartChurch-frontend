import styled from "styled-components";

export const StyledApp = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  margin-top: 93px;
  min-height: 500px;
  overflow: hidden;
  left: 0;
  display: flex;
  background: ${(props) => props.theme.BgRocket};
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
`;

export const ContaineAppFull = styled.div`
  /* padding: 0 2rem; */
  position: relative;
  right: 0;
  padding: 0px;
  width: 100%;
  max-width: 100%;
  background: ${(props) => props.theme.BgRocket};
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  height: auto;
  min-height: 800px;

  @media (max-width: 1050px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;
export const ContainerApp = styled.div`
  background: ${(props) => props.theme.bgCard};
  width: calc(100% - 32px);
  height: calc(100% - 32px);
  padding: 16px;
  overflow-y: auto;
  @media (max-width: 1050px) {
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #ffc107;
  }
`;
