import {
  Container,
  DivStyled,
  Text,
  List,
  ListItem,
  ContainerSkills,
} from "./styles";

import { Box } from "../../components/Box";
import { Divider } from "../../components/Divider";
import { Button } from "../../components/Button";

import Curriculum from "../../docs/cv-jefersonpmatos.pdf";

import { SkillsData } from "./skillsData";

export function Profile() {
  return (
    <Container id="2">
      <span>
        <Box h="100px" />
        <h1>Sobre mim</h1>
        <Divider />
      </span>
      <Box h="50px" />
      <ContainerSkills>
        <List>
          {SkillsData.map((skill, index) => (
            <ListItem key={index}>
              <img width={80} src={skill.svg} alt={skill.name} />
              <h3>{skill.name}</h3>
            </ListItem>
          ))}
        </List>
      </ContainerSkills>
      <DivStyled>
        <Text>
          <a href={Curriculum} target="_blank" rel="noreferrer noopener">
            <Button>
              <span>Currículo</span>
            </Button>
          </a>
          <Box h="50px" />
          Olá! Você pode me chamar de Jeff!
          <br />
          Sou natural da Bahia, mas atualmente resido na Paraíba. Gosto de
          construir sites e códigos bonitos, descomplicados, e funcionais.
        </Text>
      </DivStyled>
    </Container>
  );
}
