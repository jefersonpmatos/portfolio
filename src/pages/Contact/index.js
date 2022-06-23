import { useRef } from "react";

import { Container } from "./styles";

import { Box } from "../../components/Box";
import { Divider } from "../../components/Divider";
import { Button } from "../../components/Button";

export function Contact() {
  return (
    <Container id="4">
      <Box h="100px" />
      {/* <StarsBackground /> */}
      <h1>Contato</h1>
      <Divider />
      <Box h="50px" />
    </Container>
  );
}
