import styled from 'styled-components'

export const Footer = styled.div`
  height: 60px;
`
export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-size:24px;

`
export const FooterLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  &:focus {
    color: black;
  };
  &:visited {
    color: black;
  }
`

export const FooterLeft = styled.div`
`

export const FooterRight = styled.div`
`