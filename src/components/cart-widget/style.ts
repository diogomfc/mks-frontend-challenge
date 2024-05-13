import styled from 'styled-components';

import { motion } from 'framer-motion';

export const CartContainer = styled.button`
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

export const ModalContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background-color: white;
  padding: 20px;
  overflow-y: auto;
  box-shadow: -2px 0px 8px rgba(0, 0, 0, 0.2);
`;
