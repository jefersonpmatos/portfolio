import {
  Box,
  Typography,
  CardContent,
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material/";

import Ejs from "../../images/ejs.svg";
import Scrum from "../../images/scrum.svg";

export function Technologies() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Card
        variant="outlined"
        sx={{
          minWidth: 400,
          minHeight: 700,
          backgroundColor: "transparent",
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h2"
            component="div"
            align="center"
            fontWeight="bold"
            color="secondary.two"
          >
            Frontend
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <img
                  height={38}
                  width={38}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="js"
                />
              </ListItemIcon>
              <Typography variant="body1" color="secondary.two">
                <mark style={{ background: "transparent", color: "#996DFF" }}>
                  JavaScript
                </mark>
                , juntamente com HTML e CSS, é uma das três principais
                tecnologias da World Wide Web.
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <img
                  height={38}
                  width={38}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                  alt="react"
                />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="body1" color="secondary.two">
                  <mark style={{ background: "transparent", color: "#996DFF" }}>
                    React
                  </mark>{" "}
                  é uma biblioteca JS com foco em criar interfaces de usuário em
                  páginas web.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <img
                  height={38}
                  width={38}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="css"
                />
              </ListItemIcon>
              <Typography variant="body1" color="secondary.two">
                <mark style={{ background: "transparent", color: "#996DFF" }}>
                  CSS
                </mark>{" "}
                é um mecanismo para adicionar estilo a um documento web.
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <img
                  height={38}
                  width={38}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="html"
                />
              </ListItemIcon>
              <Typography variant="body1" color="secondary.two">
                <mark style={{ background: "transparent", color: "#996DFF" }}>
                  HTML
                </mark>{" "}
                é uma linguagem de marcação utilizada na construção de páginas
                Web.
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <img
                  height={38}
                  width={38}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  alt="tailwind"
                />
              </ListItemIcon>
              <Typography variant="body1" color="secondary.two">
                <mark style={{ background: "transparent", color: "#996DFF" }}>
                  TailwindCSS
                </mark>{" "}
                é um framework CSS que oferece a possibilidade de você criar
                layouts usando uma estrutura de CSS pronta.
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <img height={38} width={38} src={Ejs} alt="ejs" />
              </ListItemIcon>
              <Typography variant="body1" color="secondary.two">
                <mark style={{ background: "transparent", color: "#996DFF" }}>
                  EJS
                </mark>
                é uma engine de visualização, com ele conseguimos de uma maneira
                fácil e simples transportar dados do back para o front
              </Typography>
            </ListItem>
          </List>
        </CardContent>
      </Card>
      <Card
        variant="outlined"
        sx={{ minWidth: 400, minHeight: 600, backgroundColor: "transparent" }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h2"
            component="div"
            align="center"
            fontWeight="bold"
            color="secondary.two"
          >
            Backend
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <img
                  height={38}
                  width={38}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="js"
                />
              </ListItemIcon>
              <Typography variant="body1" color="secondary.two">
                <mark style={{ background: "transparent", color: "#996DFF" }}>
                  JavaScript
                </mark>
                , juntamente com HTML e CSS, é uma das três principais
                tecnologias da World Wide Web.
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <img
                  height={38}
                  width={38}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="nodejs"
                />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="body1" color="secondary.two">
                  <mark style={{ background: "transparent", color: "#996DFF" }}>
                    Node.JS
                  </mark>{" "}
                  é baseado no interpretador V8 do Google e que permite a
                  execução de códigos JavaScript fora de um navegador web.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <img
                  height={38}
                  width={38}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                  alt="express"
                />
              </ListItemIcon>
              <Typography variant="body1" color="secondary.two">
                <mark style={{ background: "transparent", color: "#996DFF" }}>
                  Express.JS
                </mark>{" "}
                é um framework para Node.js que fornece recursos para construção
                de servidores web.
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <img
                  height={38}
                  width={38}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"
                  alt="sequelize"
                />
              </ListItemIcon>
              <Typography variant="body1" color="secondary.two">
                <mark style={{ background: "transparent", color: "#996DFF" }}>
                  Sequelize
                </mark>{" "}
                é um ORM para Node.js baseado em Promises, para os bancos
                PostgreSQL, MySQL, MariaDB, SQLite e MS SQL Server.
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <img
                  height={38}
                  width={38}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                  alt="postgres"
                />
              </ListItemIcon>
              <Typography variant="body1" color="secondary.two">
                <mark style={{ background: "transparent", color: "#996DFF" }}>
                  PostgreSQL
                </mark>{" "}
                é um sistema gerenciador de banco de dados objeto relacional.
              </Typography>
            </ListItem>
          </List>
        </CardContent>
      </Card>
      <Card
        variant="outlined"
        sx={{ minWidth: 400, minHeight: 500, backgroundColor: "transparent" }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h2"
            component="div"
            align="center"
            fontWeight="bold"
            color="secondary.two"
          >
            Outros
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <img
                  height={38}
                  width={38}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  alt="git"
                />
              </ListItemIcon>
              <Typography variant="body1" color="secondary.two">
                <mark style={{ background: "transparent", color: "#996DFF" }}>
                  Git
                </mark>{" "}
                é um sistema de controle de versão de arquivos.
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <img
                  height={38}
                  width={38}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="github"
                />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="body1" color="secondary.two">
                  <mark style={{ background: "transparent", color: "#996DFF" }}>
                    GitHub
                  </mark>
                  é uma plataforma de hospedagem de código-fonte, permitindo que
                  profissionais de desenvolvimento contribuam em projetos
                  privados ou abertos.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <img height={38} width={38} src={Scrum} alt="scrum" />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="body1" color="secondary.two">
                  <mark style={{ background: "transparent", color: "#996DFF" }}>
                    Scrum
                  </mark>
                  , é uma estrutura para desenvolver, entregar e sustentar
                  produtos em um ambiente complexo, com ênfase inicial no
                  desenvolvimento.
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}
