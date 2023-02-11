import { BackgroundHome, HomeContainer, Seta, SetaContainer} from "./styled";
import Message from "../Message";

const Home = () => {

  const SetaScroll = () => {
    window.scrollTo({
      top: 900,
      behavior: 'smooth',
    });
  }


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
        <SetaContainer onClick={SetaScroll}>   
        <Seta></Seta>
        <Seta></Seta>
        <Seta></Seta>
        </SetaContainer>

      </HomeContainer>
    </BackgroundHome>
  );
};
export default Home;
