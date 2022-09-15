import styled from "styled-components";

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
`