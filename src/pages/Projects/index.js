import { Container, Card, Title, Details, Techs, Buttons } from "./styles";

import { VscFolder, VscGithub, VscLinkExternal } from "react-icons/vsc";

import { Box } from "../../components/Box";
import { Divider } from "../../components/Divider";

import { projectsData } from "./projectsData";

export function Projects() {
  return (
    <Container>
      <h1>Projetos</h1>
      <Divider />
      <Box h="50px" />
      <span>
        {projectsData.map((project, index) => (
          <Card key={index}>
            <Buttons>
              <VscFolder size={40} style={{ color: "#23c483" }} />
              <Box w="190px" />
              <button>
                <a
                  href={project.site}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <VscLinkExternal size={24} />
                </a>
              </button>
              <button>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <VscGithub size={24} />
                </a>
              </button>
            </Buttons>
            <Box h="40px" />
            <Title>
              <h2>{project.title}</h2>
            </Title>
            <Box h="20px" />
            <Details>
              <p>{project.details} </p>
            </Details>
            <Box h="140px" />
            <Techs>
              <h3>{project.techs}</h3>
            </Techs>
          </Card>
        ))}
      </span>
      <Box h="100px" />
      <h2>
        Você pode encontrar esses e outros projetos no meu
        <Box w="8px" />
        <a
          href="https://github.com/jefersonPMatos"
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub.
        </a>
      </h2>
    </Container>
  );
}
