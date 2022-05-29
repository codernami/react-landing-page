import styled from "styled-components";

export const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #ebfbff;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 3rem;
    text-align: left;
  }

  div {
    @media (min-width: 768px) {
      width: 50%;
    }
  }

  h2 {
    margin: 1rem 0;
  }

  p {
    @media (min-width: 768px) {
      width: 95%;
      line-height: 1.5;
    }
  }

  button {
    margin: 2rem;

    @media (min-width: 768px) {
      margin-left: 0;
      padding: 1rem 2rem;
    }
  }

  img {
    width: 100%;
  }
`;
