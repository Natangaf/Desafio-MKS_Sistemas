import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100svh;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 270px);
  justify-content: center;
  display: grid;
  gap: 2em;

  justify-items: center;
  align-items: center;
  border-radius: 8px;
  max-width: 1440px;
  margin: 2em auto;
  padding: 2em 0;
`;

export const Main = styled.div`
  flex: 1;
`;
