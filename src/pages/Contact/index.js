import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

import { Box } from "../../components/Box";
import { Divider } from "../../components/Divider";
import { Button } from "../../components/Button";
import { Wrapper, Container } from "./styles";

// const MySwal = withReactContent(Swal);

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
        (result) => {
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
    <Wrapper>
      <h1>Entre em contato</h1>
      <Divider />
      <Box h="50px" />
      <Container>
        <form ref={form} onSubmit={sendEmail}>
          <span>
            <label>
              <h3>Seu nome</h3>
              <input
                type="text"
                placeholder="Informe seu nome"
                name="user_name"
              />
            </label>
            <Box h="15px" />
            <label>
              <h3>Seu email</h3>
              <input
                type="email"
                placeholder="Informe seu email"
                name="user_email"
              />
            </label>
            <Box h="15px" />
            <label>
              <h3>Mensagem</h3>
              <input
                type="text"
                placeholder="Deixe sua mensagem"
                name="message"
              />
            </label>
            <Box h="25px" />
            <div>
              <Button>Enviar</Button>
            </div>
          </span>
        </form>
      </Container>
    </Wrapper>
  );
}

// box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
