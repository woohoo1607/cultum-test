import styled from 'styled-components';

export const ModalWrapper = styled.div``;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray500};
`;

export const ModalHeaderLeft = styled.p``;

export const ModalHeaderTitle = styled.h3`
  text-align: center;
  font-weight: bold;
  line-height: 1.28;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.gray500};
  margin: 0;
`;

export const Button = styled.button`
  padding: 5px 10px;
  background-color: transparent;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.green200};
  color: ${({ theme }) => theme.colors.green200};
  outline: none;
  transition: background-color 0.2s linear;
  cursor: pointer;

  &:hover {
    background-color: rgba(135, 204, 67, 0.8);
    color: #fff;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.gray500};
  padding: 10px 15px;
`;

export const ModalFooterTitle = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.gray500};
  margin: 0;
`;
