import React from "react";
import { HeroSection } from "../components";

const About = () => {
  const data = {
    name: "Maiden Bookstore",
  };

  return <HeroSection myData={data} />;
};

export default About;
