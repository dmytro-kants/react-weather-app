import styled from "styled-components";

export const ProductImagesWrapper = styled.div`
  width: 490px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 510px;
`;

export const ProductComponentMainImage = styled.img`
  width: 400px;
  cursor: pointer;
`;

export const ProductComponentImagesContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  &::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #868686;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const ProductComponentSecondaryImage = styled.img`
  width: 100px;
  padding-right: 5px;
  cursor: pointer;
`;
