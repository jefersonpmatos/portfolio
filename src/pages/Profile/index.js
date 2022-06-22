import { BsDownload } from "react-icons/bs";

import { Container, ButtonWrapper, DivStyled, Text } from "./styles";

import { Box } from "../../components/Box";
import { Divider } from "../../components/Divider";
import { Button } from "../../components/Button";
import { StarsBackground } from "../../components/StarsBackground";

import Curriculum from "../../docs/cv-jefersonpmatos.pdf";

export function Profile() {
  return (
    <Container id="2">
      {/* <Stars1 />
      <Stars2 /> */}
      <StarsBackground />
      <Box h="100px" />
      <h1>Sobre mim</h1>
      <Divider />
      <Box h="80px" />
      <DivStyled>
        <Text>
          Desenvolvedor fullstack que após 27 anos de longa existência,
          encontrou na programação um jeito diferente de criar coisas.
          Apaixonado pela escrita, se aventurou na faculdade de Letras, mas foi
          realmente como desenvolvedor web que veio a se sentir realizado. Deu
          seus primeiros passos no mundo dev de forma autoditada, aprendendo
          html, css e javascript, até que, em busca de aprimorar seus
          conhecimentos técnicos, ingressou no curso de Web Developer FullStack
          da Digital House, e agora encontra-se devidamente certificado.
          Organizado, inquieto, teimoso e obstnado, está sempre procurando se
          aperfeiçoar e aprender novas tecnologias. Adora jogar videogames,
          ouvir os mais variados tipos de podcasts e está sempre escutando algum
          ruído sonoro afim de conseguir acalmar o turbilhão de ideias que surge
          constantemente em sua mente.
        </Text>
      </DivStyled>
      <Box h="80px" />
      <DivStyled>
        <Button>
          <ButtonWrapper>
            <BsDownload size={16} />
            <a href={Curriculum} target="_blank" rel="noreferrer noopener">
              Currículo
            </a>
          </ButtonWrapper>
        </Button>
      </DivStyled>
    </Container>
  );
}
