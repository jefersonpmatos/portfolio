import { Link } from "react-scroll";

import { Reset } from "./styles/reset";
import { Theme } from "./styles/theme";

import { Button } from "./components/Button";

import {
  Wrapper,
  Main,
  HomeParallax,
  SkillsParallax,
  ContactParallax,
  PageProfile,
  PageProjects,
  Navbar,
  Header,
  Footer,
} from "./styles";

import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";

const menu = [
  {
    id: "1",
    title: "home",
  },
  {
    id: "2",
    title: "Sobre mim",
  },
  {
    id: "3",
    title: "Habilidades",
  },
  {
    id: "4",
    title: "Projetos",
  },
  {
    id: "5",
    title: "Contato",
  },
];

export default function App() {
  return (
    <Wrapper>
      <Header>
        <Navbar>
          <ul>
            {menu.map((menu) => (
              <li key={menu.id}>
                <Button link>
                  <Link to={menu.id} smooth={true} duration={500}>
                    {menu.title}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </Navbar>
      </Header>
      <Main>
        <>
          <HomeParallax id="1">
            <Home />
          </HomeParallax>
          <PageProfile id="2">
            <Profile />
          </PageProfile>
        </>
        <SkillsParallax id="3">
          <Skills />
        </SkillsParallax>
        <PageProjects id="4">
          <Projects />
        </PageProjects>
        <ContactParallax id="5">
          <Contact />
        </ContactParallax>
      </Main>
      <Footer>
        <h3>Feito com 💚 por Jeferson P. Matos 🦖🚀</h3>
      </Footer>
      <Reset />
      <Theme />
    </Wrapper>
  );
}
