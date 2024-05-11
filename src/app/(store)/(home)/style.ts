import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin: auto;
`;

export const Content = styled.div`
  color: ${(props) => props.theme.COLORS.BLUE_500};
  display: grid;
  font-size: 2rem;
  font-weight: bold;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  place-items: center;
  max-height: 600px;
  max-width: 938px;
  gap: 24px;
`;
