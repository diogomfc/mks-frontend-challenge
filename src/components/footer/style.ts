import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.COLORS.GRAY_100};
  color: ${(props) => props.theme.COLORS.BLACK};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  height: 40px;
  font-size: 12px;
  text-align: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
`;
