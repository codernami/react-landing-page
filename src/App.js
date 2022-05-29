import { GlobalStyles } from "./components/styles/Global";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { Container } from "./components/styles/Container.styled";
import content from "./content";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Container>
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Container>
      <Footer />
    </>
  );
}
