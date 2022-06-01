import styled from "styled-components";

export const StyledHeader = styled.header`
  background-image: url("../images/bg-hero-mobile.svg");
  background-repeat: no-repeat;
  background-position: top center;
  background-color: #ebfbff;

  @media (min-width: 768px) {
    background-image: url("../images/bg-hero-desktop.svg");
    background-position: top center;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;

    @media (min-width: 768px) {
      padding: 2rem 3.5rem;
    }

    button {
      padding: 0.5rem 1.5rem;
    }
  }
`;

export const Logo = styled.img`
  display: block;
  width: min(200px, 40%);
`;

export const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  div {
    padding: 1.5rem 0.8rem;

    @media (min-width: 768px) {
      text-align: left;
      width: 45%;
    }
  }
  h2 {
    padding-top: 1.5rem;
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
    padding: 0.9rem 3rem;

    @media (min-width: 768px) {
      margin-left: 0;
      padding: 1.2rem 2.5rem;
    }
  }
`;
