import Js from "../../images/js.svg";
import Css from "../../images/css.svg";
import Html from "../../images/html.svg";
import Node from "../../images/node.svg";
import React from "../../images/react.svg";
import Express from "../../images/express.svg";
import Mariadb from "../../images/mariadb.svg";
import Styled from "../../images/styled.svg";
import Ejs from "../../images/ejs.svg";
import Firebase from "../../images/firebase.svg";

import todo from "../../gifs/todo.gif";
import imc from "../../gifs/imc.gif";
import parallax from "../../gifs/parallax.gif";
import portfolio from "../../gifs/portfolio.gif";
import shoes from "../../gifs/shoes.gif";
import caseiro from "../../gifs/caseiro.gif";
import multistep from "../../gifs/multistep.gif";

export const projectsData = [
  {
    title: "Caseiro da Casa",
    img: caseiro,
    reverse: true,
    details:
      "Projeto integrador da Digital House. Site de receitas. Monolíto onde usuário cadastra e encontra receitas com base nos ingredientes",
    site: "",
    github: " https://github.com/vitoradms/Projeto-Integrador---G4",
    techs: [
      {
        name: "javascript",
        svg: Js,
      },
      {
        name: "HTML",
        svg: Html,
      },
      {
        name: "CSS",
        svg: Css,
      },
      {
        name: "NodeJs",
        svg: Node,
      },
      {
        name: "Express",
        svg: Express,
      },
      {
        name: "MariaDB",
        svg: Mariadb,
      },
      {
        name: "EJS",
        svg: Ejs,
      },
    ],
  },
  {
    title: "Loja de sapatos",
    img: shoes,
    reverse: false,
    details:
      "Loja de sapatos com base em projeto do meu professor, onde incrementei algumas funções, inclusive Backend.",
    site: "https://shoes-store-gesr8ur3i-jefersonpmatos.vercel.app/",
    github: "https://github.com/jefersonPMatos/shoes-store-web",
    techs: [
      {
        name: "javascript",
        svg: Js,
      },
      {
        name: "React",
        svg: React,
      },
      {
        name: "styledcomponents",
        svg: Styled,
      },
      {
        name: "NodeJs",
        svg: Node,
      },
      {
        name: "Express",
        svg: Express,
      },
    ],
  },
  {
    title: "Form multi-step",
    img: multistep,
    reverse: true,
    details: "Formulário multi-step. Frontend e Backend.",
    site: "https://form-multistep-frontend.herokuapp.com/",
    github: "https://github.com/jefersonPMatos/form-multistep-frontend",
    techs: [
      {
        name: "javascript",
        svg: Js,
      },
      {
        name: "react",
        svg: React,
      },
      {
        name: "styledcomponents",
        svg: Styled,
      },
      {
        name: "NodeJs",
        svg: Node,
      },
      {
        name: "Express",
        svg: Express,
      },
      {
        name: "Firebase",
        svg: Firebase,
      },
    ],
  },
  {
    title: "To do!",
    img: todo,
    reverse: false,
    details:
      "Aplicação de gerenciamento de tarefas com front e backend seperados.",
    site: "",
    github: "https://github.com/jefersonPMatos/to-do-web",
    techs: [
      {
        name: "javascript",
        svg: Js,
      },
      {
        name: "react",
        svg: React,
      },
      {
        name: "styledcomponents",
        svg: Styled,
      },
    ],
  },
  {
    title: "Calculadora IMC",
    img: imc,
    reverse: true,
    details: "Calculadora de IMC com mensagens personalizadas",
    site: "https://imc-calculator-phi.vercel.app/",
    github: "https://github.com/jefersonPMatos/IMC-calculator",
    techs: [
      {
        name: "Javascript",
        svg: Js,
      },
      {
        name: "HTML",
        svg: Html,
      },
      {
        name: "CSS",
        svg: Css,
      },
    ],
  },
  {
    title: "Portfólio",
    img: portfolio,
    reverse: false,
    details: "Portfólio feito para praticar uso de CSS",
    site: "",
    github: "https://github.com/jefersonPMatos/TQI-Fullstack-Developer",
    techs: [
      {
        name: "HTML",
        svg: Html,
      },
      {
        name: "CSS",
        svg: Css,
      },
    ],
  },
  {
    title: "Parallax",
    img: parallax,
    reverse: true,
    details: "Estudo de parallax e prática de CSS",
    site: "",
    github: "https://github.com/jefersonPMatos/TQI-Fullstack-Developer",
    techs: [
      {
        name: "HTML",
        svg: Html,
      },
      {
        name: "CSS",
        svg: Css,
      },
    ],
  },
];
