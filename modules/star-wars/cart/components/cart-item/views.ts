import styled from 'styled-components';

export const CartItemWrapper = styled.div`
  display: flex;
  padding: 10px;
`;

export const CartItemImgWrapper = styled.div`
  width: 100px;
  height: 100px;
`;

export const CartItemImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

export const CartItemInfo = styled.div`
  display: flex;
  flex-grow: 4;
  flex-direction: column;
  padding: 0 10px;
  justify-content: space-around;
`;

export const CartItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartItemTitle = styled.h3`
  text-align: center;
  line-height: 1.28;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray500};
  margin: 0;
`;

export const DeleteButton = styled.button`
  color: green;
  border: none;
  background: none;
  cursor: pointer;
`;

export const CartItemBody = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartItemPrice = styled.p`
  margin: 0;
  line-height: 30px;
  margin-left: 15px;
`;

export const CartItemTotalPrice = styled.p`
  margin: 0;
  line-height: 30px;
  flex-grow: 3;
  font-weight: bold;
  text-align: end;
`;
