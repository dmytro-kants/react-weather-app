import styled from "styled-components";

export const Footer = styled.div`
  background-color: #373737;
  color: #f2f3f4;
`;
export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
`;
export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  height: 215px;
`;

export const FooterLogo = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin: 0;
`;

export const FooterLink = styled.a`
  height: 50px;
`;

export const FooterIcons = styled.div`
  display: flex;
  > * {
    padding-right: 20px;
  }
`;

export const FooterContacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  > a {
    color: white;
    margin: 5px 0 5px 0;
    text-decoration: none;
    font-size: 18px;
    &:visited {
      color: black;
    }
  }
  > p {
    margin: 5px 0 5px 0;
    font-size: 18px;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  > p {
    font-size: 16px;
    color: white;
    cursor: pointer;
    padding: 5px;
    &:first-child {
      margin-top: 20px;
    }
    &:last-child {
      margin-bottom: 20px;
    }
  }
`;
