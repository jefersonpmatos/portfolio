import { useState, useEffect } from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Container, List, ActionButton, LinkStyled } from "./styles";

import Name from "../../components/typing/Name";
import Profession from "../../components/typing/Profession";

import { Divider } from "../../components/Divider";
import { Button } from "../../components/Button";
import { Box } from "../../components/Box";
import { StarsBackground } from "../../components/StarsBackground";

export function Home() {
  const [finishedTimeout, setFinishedTimeout] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setFinishedTimeout(true);
    }, 15000);

    return () => clearTimeout(id);
  }, []);

  return (
    <Container id="1">
      <StarsBackground />
      <div id="title"></div>
      <Box h="300px" />
      <h1>
        <Name />
      </h1>
      <h2>
        <Profession />
      </h2>
      {finishedTimeout && (
        <>
          <Divider />
          <Box h="80px" />
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
              >
                Entre em contato
              </LinkStyled>
            </Button>
          </ActionButton>
        </>
      )}
    </Container>
  );
}
