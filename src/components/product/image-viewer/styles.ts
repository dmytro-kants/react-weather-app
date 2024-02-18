import styled from "styled-components";

export const ProductComponentMainImage = styled.img`
  width: 400px;
  padding-left: 60px;
`;

export const ProductComponentImagesContainer = styled.div`
  display: flex;
  max-width: 525px;
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
`;
