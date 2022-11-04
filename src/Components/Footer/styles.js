import styled, { css } from "styled-components";

// ContainerFooter,
// FooterNave,
// Allink,
// Socialfooter,
// AllinContacts,

export const ContainerFooter = styled.div`
  position: relative;
  bottom: 0;
  z-index: 3;
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 70px;
  max-height: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.CardRock};
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 0;
  }
`;
export const FooterNave = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    min-height: 100%;
    padding: 40px;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;

    @media (max-width: 950px) {
      font-size: 12px;
      width: 100%;
      max-width: 100%;
    }
    @media (max-width: 1100px) {
      font-size: 12px;
    }
    @media (min-width: 1400px) {
      font-size: 16px;
    }
  }
`;
export const AllinkA = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
  }
`;
export const Allink = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;

  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  list-style: none;
  height: 40px;
  color: var(--brancofull);
  padding: 0 10px;
  @media (max-width: 950px) {
    font-size: 12px;
    width: 100%;
    max-width: 100%;
  }
  @media (max-width: 1100px) {
    font-size: 12px;
  }
  @media (min-width: 1400px) {
    font-size: 16px;
  }
  :hover {
    color: var(--colorroxo);
    transition: 0.3s ease-out;
  }
`;
export const AllinContacts = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;

  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  list-style: none;
  height: 40px;
  color: var(--brancofull);
  padding: 0 10px;
  @media (max-width: 950px) {
    font-size: 12px;
    width: 100%;
    max-width: 100%;
  }
  @media (max-width: 1100px) {
    font-size: 12px;
  }
  @media (min-width: 1400px) {
    font-size: 16px;
  }
`;
export const Socialfooter = styled.div`
  width: 100%;
  max-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* background: #cc181e; */
  #socialy {
    width: 100%;
    max-width: 50%;
    height: 100%;
    /* background-color: blue; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #socialIcons {
    font-size: 40px;
    color: #fff;
    border-radius: 30px;
    :hover {
      color: var(--colorroxo);
    }
  }
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    #socialy {
      max-width: 60px;
    }
  }
  @media (max-width: 1100px) {
    width: 100%;
    /* max-width: 100%; */
  }
`;
