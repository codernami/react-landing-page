import styled from "styled-components";

export const StyledSocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  ul {
    list-style-type: none;
    display: flex;
  }
  a {
    margin: 0.5rem;
    color: #fff;
  }
  small {
    text-align: center;

    @media (min-width: 768px) {
      text-align: right;
      width: 300px;
      margin-top: 5rem;
    }
  }
`;
