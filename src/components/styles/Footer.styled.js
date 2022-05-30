import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 0 1.5rem 1.5rem 1.5rem;
  background-color: #00252e;
  color: #fff;

  @media(min-width: 768px) {
    padding: 0 5rem 3rem;
  }

  img {
    width: 35%;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
      width: 20%;
    }
  }

  div {
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-around;
      padding: 1rem;
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

  ul:nth-child(1){
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

`;
