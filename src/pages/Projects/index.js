import {
  Container,
  ContainerSkills,
  Card,
  Details,
  Techs,
  Buttons,
  List,
  ListItem,
  Link,
  CardWrapper,
} from "./styles";

import { TbBrandGithub, TbExternalLink, TbFolder } from "react-icons/tb";

import { Box } from "../../components/Box";
import { Divider } from "../../components/Divider";
import { StarsBackground } from "../../components/StarsBackground";

import { SkillsData } from "./skillsData";
import { projectsData } from "./projectsData";

export function Projects() {
  return (
    <Container id="3">
      <StarsBackground />
      <h1>Portfólio</h1>
      <Divider />
      <Box h="50px" />
      <CardWrapper>
        {projectsData.map(({ site, github, title, details, techs }, index) => (
          <Card key={index}>
            <Buttons>
              <TbFolder size={30} style={{ color: "#e53f22" }} />
              <Box w="160px" />
              {site !== "" && (
                <>
                  <Link href={site} target="_blank" rel="noreferrer noopener">
                    <TbExternalLink size={24} />
                  </Link>
                </>
              )}
              <Link href={github} target="_blank" rel="noreferrer noopener">
                <TbBrandGithub size={24} />
              </Link>
            </Buttons>
            <Box h="10px" />
            <h3>{title}</h3>
            <Box h="40px" />
            <Details>
              <p>{details} </p>
            </Details>
            <Box h="20px" />
            <Techs>
              {techs.map((tech, index) => (
                <img width={24} key={index} src={tech.svg} alt={tech.name} />
              ))}
            </Techs>
            <Box h="20px" />
          </Card>
        ))}
      </CardWrapper>
      <Box h="50px" />
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
      <Box h="50px" />
      <ContainerSkills>
        <div>
          <List>
            {SkillsData.map((skill, index) => (
              <ListItem key={index}>
                <img height={40} width={40} src={skill.svg} alt={skill.name} />
                <p>{skill.name}</p>
              </ListItem>
            ))}
          </List>
        </div>
      </ContainerSkills>
    </Container>
  );
}
