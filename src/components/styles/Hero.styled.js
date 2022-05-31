import styled from "styled-components";

export const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  background-color: #ebfbff;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  div {
    padding: 3rem 0.8rem;

    @media (min-width: 768px) {
      text-align: left;
      width: 45%;
    }
  }

  p {
    width: min(500px, 80%);
    margin: 0 auto;
    line-height: 1.5;

    @media (min-width: 768px) {
      margin: 0;
    }
  }

  button {
    margin: 2rem auto;
    padding: 0.7rem 3rem;

    @media (min-width: 768px) {
      margin-left: 0;
      padding: 0.8rem 3rem;
    }
  }
`;
