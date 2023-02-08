import { BackgroundHome, HomeContainer } from "./styled";
import Message from "../Message";

const Home = () => {
  return (
    <BackgroundHome>
      <HomeContainer>
        <Message
          textAlign="center"
          alignSelf="center"
          text="Olá, sou Alan, bem vindo ao meu portfolio.
"
          fontSize="60px"
        />
      </HomeContainer>
    </BackgroundHome>
  );
};
export default Home;
