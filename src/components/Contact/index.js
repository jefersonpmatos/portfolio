import { Box, Typography, Paper } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export function Contact() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: "2rem",
          backgroundColor: "transparent",
          border: 1,
        }}
        variant="outlined"
      >
        <a
          href="https://wa.me/55083981668392"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Box
            sx={{
              gap: "1rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <WhatsAppIcon fontSize="large" color="primary" />
            <Typography
              variant="h5"
              component="div"
              fontWeight="bold"
              color="secondary.two"
            >
              83 981668392
            </Typography>
          </Box>
        </a>
        <Box
          sx={{
            gap: "1rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <EmailIcon fontSize="large" color="primary" />{" "}
          <Typography
            variant="h5"
            component="div"
            fontWeight="bold"
            color="secondary.two"
          >
            jefersonpmatos@outlook.com
          </Typography>
        </Box>
        <a
          a
          href="https://www.linkedin.com/in/jefersonpmatos/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Box
            sx={{
              gap: "1rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <LinkedInIcon fontSize="large" color="primary" />{" "}
            <Typography
              variant="h5"
              component="div"
              fontWeight="bold"
              color="secondary.two"
            >
              https://www.linkedin.com/in/jefersonpmatos/
            </Typography>
          </Box>
        </a>
      </Paper>
    </Box>
  );
}
