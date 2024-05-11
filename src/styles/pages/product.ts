'use client';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //height: calc(100vh - 200px);
  //height: 100vh;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  padding: 20px;

  > h1 {
    color: ${(props) => props.theme.COLORS.BLUE_500};
    font-size: 20px;
  }

  > span {
    color: ${(props) => props.theme.COLORS.BLUE_500};
    font-size: 12px;
  }
`;

export const Content = styled.div`
  color: ${(props) => props.theme.COLORS.BLUE_500};
  display: grid;
  font-size: 2rem;
  font-weight: bold;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 24px;
`;
