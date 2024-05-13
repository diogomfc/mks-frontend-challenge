import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${(props) => props.theme.COLORS.BLUE_500};
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;

  z-index: 1000;
`;

export const Logo = styled.div`
  display: flex;
  gap: 9px;
  align-items: center;
  color: ${(props) => props.theme.COLORS.WHITE};
  > h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }
  > span {
    font-size: 1rem;
  }
`;
