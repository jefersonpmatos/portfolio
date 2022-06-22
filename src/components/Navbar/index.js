import React, { useState } from "react";

import { Link } from "react-scroll";

import { Container, Nav, List } from "./styles";

import { Button } from "../Button";

const menu = [
  {
    id: "1",
    title: "home",
  },
  {
    id: "2",
    title: "Sobre mim",
  },
  {
    id: "3",
    title: "Portfólio",
  },
  {
    id: "4",
    title: "Contato",
  },
];

export function Navbar() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Container>
      <Nav
        style={{
          backgroundColor: visible ? "#000" : "transparent",
          border: visible ? "1px solid #fff" : "none",
        }}
      >
        <List>
          {menu.map((menu) => (
            <li key={menu.id}>
              <Link to={menu.id} smooth={true} duration={500}>
                <Button color="#22c8e5" link>
                  {menu.title}
                </Button>
              </Link>
            </li>
          ))}
        </List>
      </Nav>
    </Container>
  );
}
