import { StyledFooter } from "./styles/Footer.styled";
import { Logo } from "./styles/Header.styled";
import { MiniCard } from "./styles/Card.styled";
import { Button } from "./styles/Button.styled";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <StyledFooter>
      <MiniCard>
        <p>Ready To Build Your Community?</p>
        <Button bg="#ff52bf" color="#FFF">
          Get Started For Free
        </Button>
      </MiniCard>
      <Logo src="./images/logo_white.svg" alt="" />
      <div>
        <ul>
          <li>
            <span>
              <img src="./images/icon-location.svg" alt="a" />
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          <li>
            <span>
              <img src="./images/icon-phone.svg" alt="a" />
            </span>
            +1-543-123-4567
          </li>
          <li>
            <span>
              <img src="./images/icon-email.svg" alt="a" />
            </span>
            example@huddle.com
          </li>
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
