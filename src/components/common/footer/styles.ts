import styled from "styled-components";

export const Footer = styled.div`
  background-color: #373737;
  color: #f2f3f4;
`;
export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  height: 80px;
`;
export const FooterLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  &:focus {
    color: #f2f3f4;
  }
  &:visited {
    color: #f2f3f4;
  }
`;

export const FooterLeft = styled.div``;

export const FooterRight = styled.div``;
