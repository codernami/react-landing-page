import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 0 1.5rem 2rem 1.5rem;
  background-color: #00252e;
  color: #fff;

  @media (min-width: 768px) {
    padding: 0 3rem 2rem;
  }

  img {
    width: min(200px, 40%);
    margin-bottom: 2rem;
  }

  div {
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-around;
      border: 1px solid yellow;
    }
  }
  div:nth-child(2) {
    @media (min-width: 768px) {
      display: flex;
      width: 35%;
    }
  }
  ul {
    list-style-type: none;
    margin-bottom: 2rem;
  }
  ul:nth-child(1) {
    @media (min-width: 768px) {
      width: 40%;
      padding-right: 1.5rem;
    }
  }

  li {
    margin-bottom: 1rem;
    cursor: pointer;

    @media (min-width: 768px) {
      margin-bottom: 1.5rem;
    }
  }
`;
