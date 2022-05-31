import styled from "styled-components";

export const StyledSocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
  }
  a {
    color: #fff;
    font-size: clamp(1.5rem, 1.25vw, 2rem);
  }
  small {
    text-align: center;

    @media (min-width: 768px) {
      text-align: right;
      margin-top: 5rem;
      width: 300px;
    }
  }
`;
