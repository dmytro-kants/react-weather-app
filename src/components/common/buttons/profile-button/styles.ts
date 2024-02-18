import styled from "styled-components";

export const ProfileButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 50px;
  border-radius: 20px;
  background-color: #3c87d6;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  margin-left: 20px;
  &:hover {
    background-color: #8fb3ff;
  }
  > p {
    color: white;
    font-size: 16px;
  }
`;
