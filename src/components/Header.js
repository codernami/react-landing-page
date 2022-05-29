import { StyledHeader, Logo } from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Logo src="./images/logo.svg" alt="" />
      <Button bg="#FFF" color="#333" padding=".5rem 1.5rem">
        Try It Free
      </Button>
    </StyledHeader>
  );
}
