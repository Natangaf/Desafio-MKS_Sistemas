import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--bg-color-01);
  padding: 0.5em 0.75em;
  border-radius: 8px;
  user-select: none;
  border: none;

  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75em;

  &:hover {
    cursor: pointer;
    background-color: var(--bg-color-02);
  }
`;
