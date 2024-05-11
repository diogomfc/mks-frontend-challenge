import styled from 'styled-components';

// import { motion } from 'framer-motion';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

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

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BLUE_400};
  }
`;
