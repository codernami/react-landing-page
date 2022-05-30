import { StyledFooter } from "./styles/Footer.styled";
import { Logo } from "./styles/Header.styled";
import { MiniCard } from "./styles/Card.styled";
import { Button } from "./styles/Button.styled";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <StyledFooter>
      <MiniCard>
        <div>
          <p>Ready To Build Your Community?</p>
          <Button bg="#ff52bf" color="#FFF" padding=".5rem 2rem">
            Get Started For Free
          </Button>
        </div>
      </MiniCard>
      <Logo src="./images/logo_white.svg" alt="" />
      <div>
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          <li>+1-543-123-4567</li>
          <li>example@huddle.com</li>
        </ul>

        <div>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <SocialLinks />
      </div>
    </StyledFooter>
  );
}
