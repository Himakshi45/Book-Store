<<<<<<< HEAD
import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";

=======
import { HeroSection, Services, Trusted } from "../components";
>>>>>>> 3021ed56995299fb10fac7f04df85eed5e09b101

const Home = () => {
  const data = {
    name: "Book store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
