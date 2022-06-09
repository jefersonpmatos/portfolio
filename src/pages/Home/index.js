import { useState, useEffect } from "react";

import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { Container, ActionButton } from "./styles";

import Name from "../../components/typing/Name";
import Profession from "../../components/typing/Profession";

import { Divider } from "../../components/Divider";
import { Button } from "../../components/Button";
import { Box } from "../../components/Box";

export function Home() {
  const [finishedTimeout, setFinishedTimeout] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setFinishedTimeout(true);
    }, 15000);

    return () => clearTimeout(id);
  }, []);

  return (
    <Container>
      <Box h="100px" />
      <h1>
        <Name />
      </h1>

      <h2>
        <Profession />
        {finishedTimeout && (
          <>
            <Divider />
            <Box h="60px" />
            <span>
              <ul>
                <li>
                  <a
                    href="mailto:jefersonpmatos@outlook.com"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FaEnvelope />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/55083981668392"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FaWhatsapp />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/jefersonPMatos"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/jefersonpmatos/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </span>
            <Box h="30px" />
            <ActionButton>
              <Button>
                <a
                  href="mailto:jefersonpmatos@outlook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Entre em contato
                </a>
              </Button>
            </ActionButton>
          </>
        )}
      </h2>
    </Container>
  );
}
