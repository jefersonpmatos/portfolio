import TypeIt from "typeit-react";
import { useState, useEffect } from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Container, List, ActionButton, LinkStyled, Name } from "./styles";

import { Divider } from "../../components/Divider";
import { Button } from "../../components/Button";
import { Box } from "../../components/Box";
import { StarsBackground } from "../../components/StarsBackground";

export function Home() {
  const [finishedTimeout, setFinishedTimeout] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setFinishedTimeout(true);
    }, 5000);

    return () => clearTimeout(id);
  }, []);

  return (
    <Container id="1">
      <StarsBackground />
      <Box h="200px" />
      <Name>Jeferson P. Matos</Name>
      <Box h="20px" />
      <h2>
        <TypeIt>Desenvolvedor Web FullStack</TypeIt>
      </h2>
      <Box h="10px" />
      {finishedTimeout && (
        <>
          <Divider />
          <Box h="20px" />
          <List>
            <li>
              <LinkStyled
                href="https://github.com/jefersonPMatos"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub size={48} />
              </LinkStyled>
            </li>
            <li>
              <LinkStyled
                href="https://www.linkedin.com/in/jefersonpmatos/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaLinkedin size={48} />
              </LinkStyled>
            </li>
          </List>
          <Box h="20px" />
          <ActionButton>
            <Button>
              <LinkStyled
                href="mailto:jefersonpmatos@outlook.com"
                target="_blank"
                rel="noreferrer noopener"
              />
              Entre em contato
            </Button>
          </ActionButton>
        </>
      )}
    </Container>
  );
}
