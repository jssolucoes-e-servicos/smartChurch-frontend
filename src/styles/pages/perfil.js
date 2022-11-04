import styled from "styled-components";
//AssideLeft
export const ContainerPerfil = styled.div`
  position: relative;
  top: 0;
  margin: 0;
  background: ${(props) => props.theme.bgdark};
  max-width: 100%;
  min-width: 100%;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 950px) {
    max-width: 100%;
    min-width: 100%;
  }
`;
export const SectorPerfil = styled.div`
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: 0;
  position: relative;
  width: 100%;
  max-width: 700px;
  margin-top: 30px;
  margin-bottom: 30px;
  box-shadow: 0 1px 20px 0px rgb(0 0 0 / 10%);
  overflow: hidden;
  border-radius: 0.2857rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  @media (max-width: 950px) {
  }
`;
export const SectorImgPerfeil = styled.img`
  width: 124px;
  height: 124px;
  border-radius: 50%;
  border-bottom-color: transparent;
  background-color: transparent;
  position: relative;
  @media (max-width: 950px) {
  }
`;
export const DataPerfil = styled.span`
  width: 100%;
  padding: 10px;
  font-size: 15px;
  color: #9a9a9a;

  text-align: center;

  @media (max-width: 950px) {
  }
`;

export const SectorParagraPerfeil = styled.div`
  width: 100%;
  padding: 20px;
  font-size: 15px;
  color: #9a9a9a;
  margin-top: 30px;
  margin-bottom: 30px;

  @media (max-width: 950px) {
  }
`;
