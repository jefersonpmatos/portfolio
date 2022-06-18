import { Container, Span } from "./styles";

import { Box } from "../../components/Box";
import { Divider } from "../../components/Divider";
import { Button } from "../../components/Button";

import Code from "../../images/code.png";

export function Profile() {
  return (
    <Container>
      <Box h="80px" />
      <h1>Sobre mim</h1>
      <Divider />
      <Box h="80px" />
      <Span>
        <img src={Code} alt="code" />
      </Span>
      <Box h="20px" />
      <h3>
        Olá! Me chamo Jeferson Pereira Matos, mas muitos me chamam apenas de
        Jeff. Estudo programação a pelo menos 1 ano, e agora sou certificado
        pela Digital House como web developer fullstack. Sou apaixonado por
        criar coisas, e estou constantemente procurando aprimorar minhas
        habilidades. Esta por exemplo, é a terceira versão do meu portfólio. Amo
        gatos, videogames, e criar coisas por meio das palavras, pois também sou
        escritor.
      </h3>
      <Box h="50px" />
      <Span>
        <Button>
          <a
            href="mailto:jefersonpmatos@outlook.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Entre em contato
          </a>
        </Button>
      </Span>
    </Container>
  );
}
