import styled from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
`;
