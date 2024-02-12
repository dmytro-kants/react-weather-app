import styled from "styled-components";

export const Footer = styled.div`
  background-color: #373737;
  color: #f2f3f4;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

export const FooterLink = styled.a`
  height: 50px;
`;

export const FooterLeft = styled.div`
  display: flex;
  > * {
    padding-right: 20px;
  }
`;

export const FooterRight = styled.div`
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
`;
