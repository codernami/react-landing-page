import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 0 1.5rem 2rem 1.5rem;
  background-color: #00252e;
  color: #fff;

  @media (min-width: 768px) {
    padding: 0 3rem 2rem;
  }

  p {
    font-size: clamp(1.1rem, 4vw, 1.5rem);
  }

  img:nth-child(2) {
    width: min(200px, 40%);
    margin-bottom: 2rem;

    @media (min-width: 768px) {
      margin-left: 2rem;
    }
    @media (min-width: 1180px) {
      margin-left: 0;
    }
  }

  div {
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
  }
  div:nth-child(2) {
    @media (min-width: 768px) {
      display: flex;
      width: 35%;
    }
  }
  div:nth-child(2) ul {
    li:hover {
      text-decoration: underline;
    }
  }

  ul {
    list-style-type: none;
    margin-bottom: 2rem;
  }
  ul:nth-child(1) {
    @media (min-width: 768px) {
      width: 40%;
    }
  }

  li {
    margin-bottom: 1rem;
    cursor: pointer;
    display: flex;
    gap: 0.5rem;

    @media (min-width: 768px) {
      margin-bottom: 1rem;
    }
  }
  span > img {
    width: 15px;
    margin-bottom: 1rem;
  }
`;
