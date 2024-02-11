import { Link } from "react-router-dom";
import styled from "styled-components";

export const AuthFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AuthInput = styled.input`
  width: 500px;
  height: 50px;
  margin-top: 20px;
  border-radius: 15px;
  border: 2px solid #868686;
  padding: 10px;
  font-size: 18px;
  box-sizing: border-box;
`;

export const AuthButton = styled.input`
  width: 500px;
  height: 50px;
  border-radius: 15px;
  border: 2px solid #868686;
  background-color: #868686;
  color: white;
  padding: 10px;
  margin-top: 20px;
  font-size: 22px;
  cursor: pointer;
  box-sizing: border-box;
`;

export const AuthTextTitle = styled.h2`
  margin: 0;
  font-size: 32px;
`;

export const AuthTextDescription = styled.p`
  margin-bottom: 30px;
`;

export const AuthRedirectLink = styled(Link)`
  margin-top: 30px;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  &:focus {
    color: black;
  }
  &:visited {
    color: black;
  }
`;

export const AuthErrorText = styled.p`
  color: red;
  padding-top: 5px;
  margin: 0;
  width: 100%;
`;
