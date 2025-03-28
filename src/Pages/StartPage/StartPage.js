import Button from "../../Components/Button/Button";
import Header from "../../Components/Header/Header";
import YellowHeader from "../../Components/YellowHeader/YellowHeader";
import styled from "styled-components";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import carteira from '../../Assets/Img/carteira.jpg';
import portacopo from '../../Assets/Img/portacopo.jpg';
import capinha from '../../Assets/Img/capinha.jpg';
import Footer from "../../Components/Footer/Footer";
import Texture from '../../Assets/Img/Texture/soft-plaster-texture.jpg';
import SliderComponent from "./Components/SliderComponent/SliderComponent";
import SliderImage from "./Components/SliderImage/SliderImage";
import ParagraphText from "./Components/ParagraphText/ParagraphText";
import { useNavigate } from "react-router-dom";

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  width: 100%;
  background-image: linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${Texture});
  background-size: cover;
  background-position: center;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Title = styled.p`
  font-family: 'Judson', serif;
  font-size: 20px;
  color: #f3c037;
  font-weight: bold;
  cursor: default;
`;

const Subtitle = styled.h1`
  font-family: 'Judson', serif;
  text-align: center;
  font-size: 30px;
  line-height: 30px;
  cursor: default;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const Paragraphs = styled.div`
  width: 28%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

function StartPage() {
  const navigate = useNavigate();

  return (
    <>
      <YellowHeader />
      <Header />
      <Main>
        <Background>
          <Texts>
            <Title>Nossos Produtos</Title>
            <Subtitle>
              Brindes e Utensílios Reaproveitados <br />
              Especialmente Para Você
            </Subtitle>
          </Texts>
          <Content>
            <Paragraphs>
              <ParagraphText
                iconSVG={faLeaf}
                text={'Na Cervejaria Yule, o bagaço de malte descartado é reaproveitado para produzir couro 100% vegano que é utilizado em nossos brindes, como porta-copos, carteiras, capinhas e etc..'}
              />
              <ParagraphText
                iconSVG={faLightbulb}
                text={'Aqui nós acreditamos que inovação e sustentabilidade podem andar juntas, oferecendo produtos que refletem nosso compromisso com o meio ambiente e com a valorização de materiais reaproveitados.'}
              />
              <Button bType={'button'} size={'18px'} click={() => navigate('/brindes')}>PEGAR BRINDE</Button>
            </Paragraphs>
            <SliderComponent>
              <SliderImage
                source={carteira}
                altText={'carteira'}
              />
              <SliderImage
                source={capinha}
                altText={'capinha'}
              />
              <SliderImage
                source={portacopo}
                altText={'Porta Copo'}
              />
            </SliderComponent>
          </Content>
        </Background>
      </Main>
      <Footer />
    </>
  );
}

export default StartPage;