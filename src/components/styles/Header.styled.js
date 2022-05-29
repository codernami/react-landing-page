import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #ebfbff;

  @media (min-width: 768px) {
    padding: 2.5rem;
  }

  @media (min-width: 992px) {
    button:hover {
      background-color: #ff52bf;
      color: #fff;
    }
  }
`;

export const Logo = styled.img`
  display: block;
  width: 20%;
`;
