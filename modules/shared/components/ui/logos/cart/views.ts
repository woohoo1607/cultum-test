import styled from 'styled-components';

export const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  position: relative;
  span {
    background-color: ${({ theme }) => theme.colors.green200};
    position: absolute;
    color: ${({ theme }) => theme.colors.gray500};
    display: block;
    right: -7px;
    top: -5px;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    border-radius: 50%;
    font-size: 15px;
  }
`;

export const IWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  margin: 0 auto;

  max-width: ${({ theme }) => theme.dimensions.pageMaxWidth}px;
`;

export const ImgWrapper = styled.div`
  cursor: pointer;
`;

export const RWrapper = styled.div`
  flex: 2;
  justify-content: flex-end;

  ${({ theme }) => theme.templates.centerItems};
`;
