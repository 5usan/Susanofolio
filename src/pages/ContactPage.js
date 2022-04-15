import React from "react";
import Contact from "../components/Contact/Contact";
import OuterCard from "../components/OuterCard/OuterCard";

const ContactPage = () => {
  return (
    <OuterCard first="Get" second="In Touch">
      <Contact />
    </OuterCard>
  );
};

export default ContactPage;
