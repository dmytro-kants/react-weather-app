import styled from "styled-components";

export const Header = styled.div`
  position: fixed;
  background-color: white;
  z-index: 10;
  width: 100%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  > a {
    text-decoration: none;
    &:visited {
      color: black;
    }
  }
`;
export const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 0;
`;

export const Buttons = styled.div`
  display: flex;
`;
