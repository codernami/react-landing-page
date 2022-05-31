import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

  @media (min-width: 768px) {
    flex-direction: ${({ layout }) => layout || "row"};
    align-items: center;
  }
  div {
    padding: 3rem 1rem;
  }

  p {
    color: #808d99;
    padding: 2rem 0.5rem;
  }
  img {
    width: 80%;
  }
`;

export const MiniCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
  padding: 1.7rem 0.5rem;
  background-color: #fff;
  color: #333;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  transform: translateY(-90px);

  @media (min-width: 768px) {
    margin: 0 auto;
    width: min(750px, 70%);
  }

  p {
    margin: 1.4rem 0;
    font-weight: bold;

    @media (min-width: 768px) {
      margin: 1rem;
    }
  }
  button {
    width: 80%;
    padding: 1.2rem 2rem;
    border-radius: 24px;

    @media (min-width: 768px) {
      width: 70%;
      margin: 1rem;
      padding: 1.5rem 3rem;
    }
    &:hover {
      filter: blur(0.7px);
    }
  }
`;
