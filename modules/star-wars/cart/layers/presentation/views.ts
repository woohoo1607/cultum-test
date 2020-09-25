import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: calc(50% - 200px);
  left: calc(50% - 350px);
  right: 0;
  max-height: 400px;
  min-height: 400px;
  width: 700px;
  z-index: 5;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: auto;
  a {
    text-decoration: none;
  }
`;
