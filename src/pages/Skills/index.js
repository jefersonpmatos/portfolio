import { Wrapper, Container } from "./styles";

import { Divider } from "../../components/Divider";
import { Box } from "../../components/Box";

import { SkillsData } from "./skillsData";

export function Skills() {
  return (
    <Wrapper>
      <h1>Habilidades</h1>
      <Container>
        <Divider />
        <Box h="50px" />
        <div>
          <ul>
            {SkillsData.map((skill, index) => (
              <li key={index}>
                <img height={40} width={40} src={skill.svg} alt={skill.name} />
                {"  "}
                <p>{skill.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Wrapper>
  );
}
