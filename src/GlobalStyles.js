import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Segoe UI', sans-serif;
    }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

export const Button = styled.button`
  background-color: ${({ primary }) => (primary ? "#4b59f7" : "#0467fb")};
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  color: #fff;
  border-radius: 4px;
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background-color: ${({ primary }) => (primary ? "#0467fb" : "#4b59f7")};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
