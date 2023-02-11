import { BackgroundHome, HomeContainer } from "./styled";
import Message from "../Message";

const Home = () => {
  return (
    <BackgroundHome>
      <HomeContainer>
        <Message
          textAlign="center"
          alignSelf="center"
          text="Prazer, me chamo Alan Moraes. Desenvolvedor Full Stack.
"
          fontSize="60px"
        />
      </HomeContainer>
    </BackgroundHome>
  );
};
export default Home;
