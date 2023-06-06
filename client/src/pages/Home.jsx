import { HeroSection, Services, Trusted } from "../components";

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
