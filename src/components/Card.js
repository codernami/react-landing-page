import { StyledCard } from "./styles/Card.styled";

export default function Card({
  item: { id, title, body, image, description }
}) {
  return (
    <StyledCard layout={id % 2 === 0 && "row"}>
      <div>
        <img src={`./images/${image}`} alt={description} />
      </div>

      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </StyledCard>
  );
}
