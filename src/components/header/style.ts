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

export const ButtonCar = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.COLORS.WHITE};
  border: none;
  border-radius: 0.5rem;
  height: 45px;
  width: 90px;
  color: ${(props) => props.theme.COLORS.BLACK};
  display: flex;
  gap: 16px;
  align-items: center;
  cursor: pointer;
  > span {
    font-size: 18px;
    font-weight: bold;
  }
`;
