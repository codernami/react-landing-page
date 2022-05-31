import { Button } from "./styles/Button.styled";
import { StyledHero } from "./styles/Hero.styled";

export default function Hero() {
  return (
    <StyledHero>
      <div>
        <h2>
          Build The Community <br /> Your Fans Will Love
        </h2>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <Button bg="#ff52bf" color="#FFF">
          Get Started For Free
        </Button>
      </div>
      <div>
        <img src="./images/illustration-mockups.svg" alt="" />
      </div>
    </StyledHero>
  );
}
