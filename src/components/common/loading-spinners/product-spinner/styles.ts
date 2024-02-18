import styled from "styled-components";

export const ProductSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  height: 100vh;
`;

export const ProductSpinnerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    font-size: 48px;
    font-weight: bold;
    margin: 0 0 10px 0;
    text-align: center;
  }
`;
