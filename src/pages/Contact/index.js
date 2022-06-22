import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import {
  Container,
  ContactForm,
  InputLabel,
  InputStyled,
  TextAreaStyled,
} from "./styles";

import { Box } from "../../components/Box";
import { Divider } from "../../components/Divider";
import { Button } from "../../components/Button";
import { StarsBackground } from "../../components/StarsBackground";

export function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_35c3g18",
        "template_ldzal1m",
        form.current,
        "TzdwkSpAs9yA6zfbd"
      )
      .then(
        (res) => {
          Swal.fire({
            title: "Email enviado com sucesso!",
            icon: "success",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container id="4">
      <Box h="100px" />
      <StarsBackground />
      <h1>Entre em contato</h1>
      <Divider />
      <Box h="50px" />
      <ContactForm ref={form} onSubmit={sendEmail}>
        <InputLabel>
          <h3>Seu nome</h3>
          <Box h="10px" />
          <InputStyled
            type="text"
            placeholder="Informe seu nome"
            name="user_name"
          />
        </InputLabel>
        <Box h="15px" />

        <InputLabel>
          <h3>Seu email</h3>
          <Box h="10px" />
          <InputStyled
            type="email"
            placeholder="Informe seu email"
            name="user_email"
          />
        </InputLabel>
        <Box h="15px" />

        <InputLabel>
          <h3>Mensagem</h3>
          <Box h="10px" />
          <TextAreaStyled
            type="text"
            placeholder="Deixe sua mensagem"
            name="message"
          />
        </InputLabel>
        <Box h="25px" />

        <Button>Enviar</Button>
      </ContactForm>
    </Container>
  );
}
