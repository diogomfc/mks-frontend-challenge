import styled from 'styled-components';

export const Container = styled.div`
  width: 218px;
  height: 285px;
  top: 217px;
  left: 247px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 0px 10px;
  border-radius: 8px;

  box-shadow: 0px 2px 8px 0px #00000022;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  > div {
    display: flex;
    flex-direction: row;
    gap: 8px;
    > h1 {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
    }

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      padding: 4px 6px;
      background-color: ${({ theme }) => theme.COLORS.GRAY_600};
      height: 26px;
      > span {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 15px;
        line-height: 15px;
        font-weight: 700;
      }
    }
  }

  > span {
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    font-size: 10px;
    font-weight: 300;
    line-height: 12px;
  }
`;

export const ButtonCard = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 0;

  border: none;
  border-radius: 0px 0px 8px 8px;

  background-color: ${({ theme }) => theme.COLORS.BLUE_500};
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: 218px;
  height: 31.91px;
  top: 253px;
  gap: 0px;
  opacity: 0px;

  > span {
    padding-left: 5px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
  }
`;
