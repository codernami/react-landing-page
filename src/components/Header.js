import { StyledHeader, Logo, StyledHero } from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";

export default function Header() {
  return (
    <StyledHeader>
      <nav>
        <Logo src="./images/logo.svg" alt="Huddle logo" />
        <Button bg="#FFF" color="#333">
          Try It Free
        </Button>
      </nav>

      <StyledHero>
        <div>
          <h2>
            Build The Community <br /> Your Fans Will Love
          </h2>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <Button bg="#ff52bf" color="#FFF">
            Get Started For Free
          </Button>
        </div>
        <div>
          <img
            src="./images/illustration-mockups.svg"
            alt="illustration mockups"
          />
        </div>
      </StyledHero>
    </StyledHeader>
  );
}
