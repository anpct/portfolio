import React from "react";
import { EmailSVG, GithubSVG } from "../../resources/svgs/contact";
import {
  ContactCardContainer,
  ContactContainer,
  ContactHeader,
  Email,
  Github,
} from "./Contact.Styles";

const Contact = () => {
  return (
    <ContactContainer>
      <ContactHeader>How to get in touch with me</ContactHeader>
      <ContactCardContainer>
        <Email
          onClick={() => {
            window?.open("mailto:anthiparala@gmail.com", "_blank")?.focus();
          }}>
          <EmailSVG />
        </Email>
        <Github
          onClick={() => {
            window?.open("https://github.com/anpct", "_blank")?.focus();
          }}>
          <GithubSVG />
        </Github>
      </ContactCardContainer>
    </ContactContainer>
  );
};

export default Contact;
