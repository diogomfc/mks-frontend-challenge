'use client';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  padding: 20px;
`;
export const TitleHeader = styled.div`
  display: flex;
  flex-direction: column;

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
export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  > span {
    color: ${(props) => props.theme.COLORS.GRAY_600};
    font-size: 12px;
  }
`;
