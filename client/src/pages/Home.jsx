import { HeroSection, Services, Trusted } from "../components/general";

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
