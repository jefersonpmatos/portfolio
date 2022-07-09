import { Container, ContactButtons, Link, Icon } from "./styles";

import { Box } from "../../components/Box";
import { Divider } from "../../components/Divider";

import { contactData } from "./contactData";

export function Contact() {
  return (
    <Container id="4">
      <Box h="100px" />
      <h1>Contato</h1>
      <Divider />
      <Box h="100px" />
      <ContactButtons>
        {contactData.map((contact, index) => (
          <Link
            key={index}
            href={contact.link}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon src={contact.icon} width="50" alt={contact.name} />
          </Link>
        ))}
      </ContactButtons>
      <Box h="100px" />
    </Container>
  );
}
