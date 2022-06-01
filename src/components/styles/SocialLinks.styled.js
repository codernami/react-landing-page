import styled from "styled-components";

export const StyledSocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }
  a {
    color: #fff;
    font-size: clamp(1.5rem, 1.25vw, 2rem);

    &:hover {
      color: #ff52bf;
    }
  }
  small {
    text-align: center;

    @media (min-width: 1440px) {
      margin-top: 5rem;
      width: 300px;
    }
  }
`;
