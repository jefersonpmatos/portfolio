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

import { SkillsData } from "./skillsData";

export function Profile() {
  return (
    <Container id="2">
      <span>
        <h1>Sobre mim</h1>
        <Divider />
      </span>
      <ContainerSkills>
        <List>
          {SkillsData.map((skill, index) => (
            <ListItem key={index}>
              <img src={skill.svg} alt={skill.name} />
              <h3>{skill.name}</h3>
            </ListItem>
          ))}
        </List>
      </ContainerSkills>
      <Text>
        Olá! Você pode me chamar de Jeff!
        <br />
        Sou natural da Bahia, mas atualmente resido na Paraíba. Gosto de
        construir sites e códigos bonitos, descomplicados, e funcionais.
      </Text>
    </Container>
  );
}
