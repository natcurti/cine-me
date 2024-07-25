import { useEffect } from "react";
import MainContainer from "src/components/MainContainer";
import NavBar from "src/components/NavBar";
import { http } from "src/http/instance";

const Home = () => {
  useEffect(() => {
    http
      .get("/movie/popular?language=pt-BR")
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <NavBar />
      <MainContainer />
    </div>
  );
};

export default Home;
