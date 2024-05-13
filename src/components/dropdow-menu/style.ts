import styled from 'styled-components';

import { motion } from 'framer-motion';

interface MenuListProps {
  isOpen: boolean;
}

export const MenuContainer = styled.nav`
  position: relative;
  cursor: pointer;
`;

export const MenuButton = styled(motion.button)`
  background: ${(props) => props.theme.COLORS.WHITE};
  border: 1px solid ${(props) => props.theme.COLORS.GRAY_300};
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  font-size: 12px;

  gap: 0.5rem;
  &:focus {
    outline: none;
  }
`;

export const MenuList = styled(motion.ul)<MenuListProps>`
  position: absolute;
  top: 110%;
  left: 0;
  background: ${(props) => props.theme.COLORS.WHITE};
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding: 0.5rem 0;
  width: 90px;
`;

export const MenuItem = styled(motion.li)`
  list-style: none;
  padding: 0.2rem 0.5rem 0;
  font-weight: 500;
  color: ${(props) => props.theme.COLORS.BLACK};
  > span {
    border-radius: 2px;
    display: block;
    font-size: 12px;

    &:hover {
      color: ${({ theme }) => theme.COLORS.BLUE_500};
    }
  }
`;
