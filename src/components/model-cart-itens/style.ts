import styled from 'styled-components';

import { motion } from 'framer-motion';

export const ModalContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 486px;
  background-color: white;
  overflow-y: auto;
  box-shadow: -2px 0px 8px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.COLORS.BLUE_500};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  position: relative;

  > h2 {
    color: ${(props) => props.theme.COLORS.WHITE};
    font-size: 27px;
    font-weight: bold;
    text-align: left;
  }

  > button {
    position: absolute;
    right: 20px;
    top: 20px;
    background-color: ${(props) => props.theme.COLORS.BLACK};
    border: none;
    cursor: pointer;
    color: ${(props) => props.theme.COLORS.WHITE};
    border-radius: 50%;
    width: 30px;
    height: 30px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: ${(props) => props.theme.COLORS.RED_300};
    }
  }
`;

export const Content = styled.div`
  margin-top: 20px;
  padding: 0 40px;
`;

export const ProductItem = styled.ul`
  list-style: none;
  padding: 0;
  > li {
    background-color: ${(props) => props.theme.COLORS.WHITE};
    box-shadow: -2px 0px 8px rgba(0, 0, 0, 0.2);
    border: 1px solid ${(props) => props.theme.COLORS.WHITE};
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid ${(props) => props.theme.COLORS.WHITE};

    > div {
      display: flex;
      align-items: center;
      > img {
        margin-right: 5px;
      }

      > h1 {
        color: ${(props) => props.theme.COLORS.GRAY_500};
        font-size: 13px;
        font-weight: 500;
      }
    }

    > span {
      color: ${(props) => props.theme.COLORS.BLACK};
      font-size: 13px;
      font-weight: bold;
    }

    > svg {
      cursor: pointer;
    }
    > button {
      position: absolute;
      right: -5px;
      top: -5px;
      background-color: ${(props) => props.theme.COLORS.BLACK};
      border: none;
      cursor: pointer;
      color: ${(props) => props.theme.COLORS.WHITE};
      border-radius: 50%;
      width: 18px;
      height: 18px;
      padding: 3px;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: ${(props) => props.theme.COLORS.RED_300};
      }
    }
  }
`;

export const ProductItemQuantity = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  gap: 2px;
  padding-bottom: 15px;

  > span {
    color: ${(props) => props.theme.COLORS.GRAY_500};
    font-size: 8px;
    font-weight: 500;
  }
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.COLORS.WHITE};
    color: ${(props) => props.theme.COLORS.BLACK};
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.COLORS.GRAY_100};
    padding: 10px;
    height: 25px;
    gap: 8px;

    > button:first-child {
      background-color: ${(props) => props.theme.COLORS.WHITE};
      border: none;
      cursor: pointer;
      color: ${(props) => props.theme.COLORS.BLACK};
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
    }

    > h1 {
      color: ${(props) => props.theme.COLORS.BLACK};
      font-size: 12px;
      font-weight: 500;
    }

    > span {
      color: ${(props) => props.theme.COLORS.GRAY_200};
      font-size: 12px;
    }

    > button:last-child {
      background-color: ${(props) => props.theme.COLORS.WHITE};
      border: none;
      cursor: pointer;
      color: ${(props) => props.theme.COLORS.BLACK};
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  width: 100%;
  color: white;
`;

export const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 60px;
  margin-bottom: 20px;
  > h1 {
    color: ${(props) => props.theme.COLORS.WHITE};
    font-size: 28px;
    font-weight: bold;
  }
  > span {
    color: ${(props) => props.theme.COLORS.WHITE};
    font-size: 28px;
    font-weight: bold;
  }
`;

export const CheckoutButton = styled.button`
  background-color: ${(props) => props.theme.COLORS.BLACK};
  color: ${(props) => props.theme.COLORS.WHITE};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  height: 97px;
  width: 100%;
  font-size: 28px;
  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }
`;

export const EmptyCartContainer = styled.div`
  text-align: center;
  padding: 20px;
  > h1 {
    color: ${(props) => props.theme.COLORS.GRAY_300};
    font-size: 28px;
    font-weight: bold;
  }
  > p {
    color: ${(props) => props.theme.COLORS.GRAY_300};
    font-size: 18px;
  }
  > svg {
    margin-top: 20px;
    color: ${(props) => props.theme.COLORS.GRAY_300};
  }
`;
