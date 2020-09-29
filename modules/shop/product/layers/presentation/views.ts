import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Back = styled.div`
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.dimensions.pageMaxWidth}px;
  margin: 0 auto;
`;

export const ProductImgContainer = styled.div`
  flex: 2;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const ProductDetailsContainer = styled.div`
  flex: 1;
  padding-left: 75px;
`;

export const ProductName = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const ProductPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ProductPrice = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
`;

export const BuyButton = styled.button`
  text-transform: uppercase;
  padding: 5px 15px;
  background-color: transparent;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.green200};
  color: #fff;
  outline: none;
  transition: background-color 0.2s linear;
  cursor: pointer;

  &:hover {
    background-color: rgba(135, 204, 67, 0.8);
  }
`;

export const ProductInfoContainer = styled.div``;
