import styled from "styled-components";

export const Card = styled.div`
  background-color: var(--bg-color-01);
  border-radius: 8px;
  margin: 0 0.5em;
  padding: 1em;
  color: #000;

  display: flex;
  align-items: center;
  position: relative;
  gap: 0.25em 1em;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 1em;
  }
`;

export const CardImage = styled.img`
  border-radius: 8px;
  height: 48px;
  width: 48px;

  @media screen and (max-width: 480px) {
    height: 98px;
    width: 98px;
  }
`;

export const CardTitle = styled.p`
  width: 150px;
  font-size: 14px;
  font-weight: 500;
  cursor: help;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const CartDrawerCloseButton = styled.button`
  border-radius: 0 6px 0 8px;
  background-color: #000;
  font-size: 16px;
  padding: 0.5em;
  border: none;
  color: #fff;

  position: absolute;
  right: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  height: 24px;
  width: 24px;

  &:hover {
    background-color: #262626;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    height: 32px;
    width: 32px;
  }
`;

export const PriceQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1em;

  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

export const CardPrice = styled.p`
  min-width: 100px;
  font-weight: 700;
  font-size: 14px;
  color: #000;

  @media screen and (max-width: 480px) {
    background-color: var(--gray-color-01);
    padding: 0.5em 0.75em;
    border-radius: 5px;
    color: #fff;
  }
`;

export const CardQuantity = styled.div`
  display: flex;
  align-items: center;

  border: 0.3px solid #bfbfbf;
  background-color: #fff;
  border-radius: 4px;
  user-select: none;

  p {
    border-inline: 0.3px solid #bfbfbf;
    padding: 0 0.75em;
    font-size: 16px;
  }

  button {
    background-color: transparent;
    padding: 0.5em 0.75em;
    font-weight: 600;
    cursor: pointer;
    font-size: 14px;
    border: none;
  }

  @media screen and (max-width: 480px) {
    p {
      font-size: 20px;
    }

    button {
      font-size: 18px;
    }
  }
`;
