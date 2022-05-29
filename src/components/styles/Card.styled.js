import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

  div {
    padding: 3rem 1rem;
  }
  h2 {
    margin: 2rem 0;
  }
  img {
    width: 80%;
  }
`;

export const MiniCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  text-align: center;
  background-color: #fff;
  color: #333;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 1rem 0;
  transform: translateY(-90px);

  p {
    margin: 1rem 0;
  }
`;
