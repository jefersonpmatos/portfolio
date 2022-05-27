import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import CallMadeIcon from "@mui/icons-material/CallMade";
import GitHubIcon from "@mui/icons-material/GitHub";

import ShoesStore from "../../images/shoes-store.png";
import Todo from "../../images/to-do.png";
import TodoBackend from "../../images/todo-backend.png";
import caseiroCasa from "../../images/caseiro-da-casa.png";
import Portfolio from "../../images/portfolio.png";
import SugestionBox from "../../images/sugestion-box.png";

export function Projects() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
        gap: "2rem",
      }}
      justifyContent="center"
    >
      <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <Card
          sx={{
            maxWidth: 345,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "transparent",
            padding: "0.5rem",
            border: 1,
          }}
          raised
        >
          <CardMedia
            component="img"
            height="140"
            image={Todo}
            alt="loja de sapatos"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontWeight="bold"
              color="secondary.two"
            >
              To Do web
            </Typography>
            <Typography variant="body1" color="secondary.two">
              Frontend da aplicação que interage com o backend To do Api. Foi
              utilizado React, styled-components, react-hook-form, entre outros.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <CallMadeIcon />
            </Button>
            <Button size="small">
              <GitHubIcon />
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "transparent",
            padding: "0.5rem",
            border: 1,
          }}
          raised
        >
          <CardMedia
            component="img"
            height="140"
            image={TodoBackend}
            alt="loja de sapatos"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontWeight="bold"
              color="secondary.two"
            >
              To Do Api
            </Typography>
            <Typography variant="body1" color="secondary.two">
              Backend da aplicação To do Web. Recebe as requisições do front,
              interage com o banco de dados em PostGres e retorna as info no
              formato JSON.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <GitHubIcon />
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "transparent",
            padding: "0.5rem",
            border: 1,
          }}
          raised
        >
          <CardMedia
            component="img"
            height="140"
            image={caseiroCasa}
            alt="loja de sapatos"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontWeight="bold"
              color="secondary.two"
            >
              Caseiro da Casa
            </Typography>
            <Typography variant="body1" color="secondary.two">
              Projeto Integrador de conclusão do curso de Web FullStack da
              Digital House. Um site onde o usuário pode encontrar receitas
              caseiras com base nos ingredientes que ele tem disponível.
              Monolito feito com EJS, CSS, JS, Sequelize, NodeJs e ExpressJs.
            </Typography>
          </CardContent>
          <CardActions>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/vitoradms/Projeto-Integrador---G4"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button size="small">
                <GitHubIcon />
              </Button>
            </a>
          </CardActions>
        </Card>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <Card
          sx={{
            maxWidth: 345,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "transparent",
            padding: "0.5rem",
            border: 1,
          }}
          raised
        >
          <CardMedia
            component="img"
            height="140"
            image={ShoesStore}
            alt="loja de sapatos"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontWeight="bold"
              color="secondary.two"
            >
              Loja de sapatos
            </Typography>
            <Typography variant="body1" color="secondary.two">
              Uma loja de sapatos feita em React , onde foi utilizando a
              biblioteca styled-components para a estilização.
            </Typography>
          </CardContent>
          <CardActions>
            <a
              style={{ textDecoration: "none" }}
              href="https://shoes-store-gesr8ur3i-jefersonpmatos.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button size="small">
                <CallMadeIcon />
              </Button>
            </a>
            <Button size="small">
              <GitHubIcon />
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "transparent",
            padding: "0.5rem",
            border: 1,
          }}
          raised
        >
          <CardMedia
            component="img"
            height="140"
            image={ShoesStore}
            alt="loja de sapatos"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontWeight="bold"
              color="secondary.two"
            >
              Drum Kit
            </Typography>
            <Typography variant="body1" color="secondary.two">
              Uma bateria feita inteiramente em vanila JS com o intuito de por
              em prática conceitos sobre JS no frontend.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <CallMadeIcon />
            </Button>
            <Button size="small">
              <GitHubIcon />
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "transparent",
            padding: "0.5rem",
            border: 1,
          }}
          raised
        >
          <CardMedia
            component="img"
            height="140"
            image={ShoesStore}
            alt="loja de sapatos"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontWeight="bold"
              color="secondary.two"
            >
              Calculadora IMC
            </Typography>
            <Typography variant="body1" color="secondary.two">
              Mini projeto de calculadora de IMC feita com HTML, CSS e JS, que
              apresenta o indice de massa comporal do usuário além de informar
              se ele está abaixo ou acima do peso, ou se está em seu peso ideal.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <CallMadeIcon />
            </Button>
            <Button size="small">
              <GitHubIcon />
            </Button>
          </CardActions>
        </Card>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <Card
          sx={{
            maxWidth: 345,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "transparent",
            padding: "0.5rem",
            border: 1,
          }}
          raised
        >
          <CardMedia
            component="img"
            height="140"
            image={Portfolio}
            alt="loja de sapatos"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontWeight="bold"
              color="secondary.two"
            >
              Portfólio
            </Typography>
            <Typography variant="body1" color="secondary.two">
              Portfólio feito em React com uso da biblioteca MUI.
            </Typography>
          </CardContent>
          <CardActions>
            <a
              style={{ textDecoration: "none" }}
              href="https://shoes-store-gesr8ur3i-jefersonpmatos.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button size="small">
                <CallMadeIcon />
              </Button>
            </a>
            <Button size="small">
              <GitHubIcon />
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "transparent",
            padding: "0.5rem",
            border: 1,
          }}
          raised
        >
          <CardMedia
            component="img"
            height="140"
            image={SugestionBox}
            alt="loja de sapatos"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontWeight="bold"
              color="secondary.two"
            >
              Caixa de sugestão
            </Typography>
            <Typography variant="body1" color="secondary.two">
              Projeto criado em conjunto com o NLW Return da Rocketseat, onde
              foi utilizado React, Typescript e Tailwindcss. Possui Frontend e
              Backend.
            </Typography>
          </CardContent>
          <CardActions>
            <a
              style={{ textDecoration: "none" }}
              href="https://sugestion-box-git-master-jefersonpmatos.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button size="small">
                <CallMadeIcon />
              </Button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/jefersonPMatos/sugestion-box"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button size="small">
                <GitHubIcon />
              </Button>
            </a>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
}
