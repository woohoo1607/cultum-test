import styled from 'styled-components';

export const CartItemQuantityWrapper = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.green200};
`;

export const CartItemQuantityButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.green200};
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(135, 204, 67, 0.8);
    color: #fff;
  }
`;

export const CartItemQuantityP = styled.p`
  display: block;
  width: 30px;
  height: 30px;
  margin: 0;
  text-align: center;
  line-height: 30px;
  border-right: 1px solid ${({ theme }) => theme.colors.green200};
  border-left: 1px solid ${({ theme }) => theme.colors.green200};
  color: ${({ theme }) => theme.colors.gray500};
`;
