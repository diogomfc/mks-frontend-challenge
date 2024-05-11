import styled from 'styled-components';

export const Main = styled.main`
  background-color: ${(props) => props.theme.COLORS.GRAY_100};
  margin: auto;
  width: 100%;
  max-width: 1600px;
  display: flex;
  height: 100%;
  flex: 1;
  overflow-y: auto;
  padding: 0 8rem;
`;
