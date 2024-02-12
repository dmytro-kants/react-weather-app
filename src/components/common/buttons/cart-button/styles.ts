import styled from "styled-components";

export const CartButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 50px;
  border-radius: 20px;
  background-color: #54ba61;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  margin-left: 20px;
  &:hover {
    background-color: #62e372;
  }
  > p {
    color: white;
    font-size: 16px;
  }
`;
