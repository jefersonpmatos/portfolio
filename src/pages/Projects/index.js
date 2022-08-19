import {
  Container,
  Details,
  Techs,
  Buttons,
  Link,
  CardContainer,
  Gif,
  CardText,
  Card,
} from "./styles";

import { TbBrandGithub, TbExternalLink } from "react-icons/tb";

import { Box } from "../../components/Box";
import { Divider } from "../../components/Divider";
import { StarsBackground } from "../../components/StarsBackground";

import { projectsData } from "./projectsData";

export function Projects() {
  return (
    <Container>
      <StarsBackground />
      <span>
        <h1 id="3">Portfólio</h1>
        <Divider />
      </span>
      <Box h="50px" />
      <CardContainer>
        {projectsData.map(
          ({ site, github, title, details, techs, img, reverse }, index) => (
            <Card reverse={reverse} key={index}>
              <Gif src={img} alt={title} />
              <CardText>
                <h3>{title}</h3>
                <Details>
                  <p>{details} </p>
                </Details>
                <Buttons>
                  {site !== "" && (
                    <>
                      <Link
                        href={site}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <TbExternalLink size={40} />
                      </Link>
                    </>
                  )}
                  <Link href={github} target="_blank" rel="noreferrer noopener">
                    <TbBrandGithub size={40} />
                  </Link>
                </Buttons>
                <Techs>
                  {techs.map((tech, index) => (
                    <img
                      width={30}
                      key={index}
                      src={tech.svg}
                      alt={tech.name}
                    />
                  ))}
                </Techs>
              </CardText>
            </Card>
          )
        )}
      </CardContainer>
      <Box h="20px" />
      <h3>
        Você pode encontrar esses e outros projetos no meu
        {"  "}
        <Link
          cl="#22c8e5"
          clh="#e53f22"
          href="https://github.com/jefersonPMatos"
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub.
        </Link>
      </h3>
    </Container>
  );
}
