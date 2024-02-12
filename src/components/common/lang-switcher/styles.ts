import styled from "styled-components";

interface LangSwitcherStyleProps {
  $isActive: boolean;
}

export const LangSwitcher = styled.div`
  display: flex;
`;

export const LangSwitcherOption = styled.p<LangSwitcherStyleProps>`
  cursor: pointer;
  font-size: 20px;
  margin: 2px;
  color: ${(props) => {
    if (props.$isActive) {
      return "#54ba61";
    }
    return "black";
  }};
  &:hover {
    color: #54ba61;
  }
`;
