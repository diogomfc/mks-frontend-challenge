import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.COLORS.GRAY_100};
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.COLORS.BLACK};
  font-size: 12px;
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;
