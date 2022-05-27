import * as React from "react";
import { Button, Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { Send } from "@mui/icons-material";

import Image from "../../images/code-amico.svg";

export function Profile() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "2rem",
          gap: "2rem",
          marginTop: "8rem",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <a
            href="https://wa.me/55083981668392"
            target="_blank"
            rel="noreferrer noopener"
          >
            <WhatsAppIcon
              sx={{
                "& > :hover": {
                  color: "secondary.two",
                },
              }}
              fontSize="large"
              color="primary"
            />
          </a>
          <a
            href="jefersonpmatos@outlook.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <EmailIcon
              sx={{
                "& > :hover": {
                  color: "secondary.two",
                },
              }}
              fontSize="large"
              color="primary"
            />
          </a>
          <a
            a
            href="https://www.linkedin.com/in/jefersonpmatos/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LinkedInIcon
              sx={{
                "& > :hover": {
                  color: "secondary.two",
                },
              }}
              fontSize="large"
              color="primary"
            />
          </a>
          <a
            href="https://github.com/jefersonPMatos"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GitHubIcon
              sx={{
                "& > :hover": {
                  color: "secondary.two",
                },
              }}
              fontSize="large"
              color="primary"
            />
          </a>
        </Box>
        <Box>
          <Typography variant="body1" fontSize={16} color="secondary.two">
            <Typography variant="h3" fontWeight="bold" color="secondary.two">
              JEFERSON MATOS
            </Typography>
            <Typography variant="h4" fontWeight="bold" color="secondary">
              WEB DEVELOPER JR.
            </Typography>
            Recém formado pela{" "}
            <a
              color="primary"
              href="https://www.digitalhouse.com/br/produtos/programacao/desenvolvimento-web-full-stack"
              target="_blank"
              rel="noreferrer noopener"
            >
              Digital House
            </a>
            , tenho me aventurado no mundo do desenvolvimento web, indo desde o
            backend até o frontend, área pela qual me apaixonei. Adoro criar
            coisas novas, videogames e tecnologia.
          </Typography>
          <Box sx={{ marginTop: "1rem" }}>
            <a
              href="https://wa.me/55083981668392"
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "none" }}
            >
              <Button variant="contained" sx={{ gap: "0.5rem" }}>
                Entre em contato <Send />
              </Button>
            </a>
          </Box>
        </Box>
      </Box>
      <Box sx={{ minWidth: 300 }} />
      <Box sx={{ minWidth: 400, marginTop: "7rem" }}>
        <img src={Image} alt="destaque" width={300} />
      </Box>
    </Box>
  );
}
