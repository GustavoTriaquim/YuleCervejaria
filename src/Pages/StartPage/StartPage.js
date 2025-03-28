import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../Components/Button/Button";
import Header from "../../Components/Header/Header";
import YellowHeader from "../../Components/YellowHeader/YellowHeader";
import styled from "styled-components";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const  Background = styled.div`
  width: 100%;
  background-color: #f8f5f3;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  jusitfy-content: center;
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

const ParagraphIcon = styled.div`
  display: flex;
  gap: 10px;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: #f3c037;
`;

const Paragraph = styled.p`
  font-size: 22px;
  cursor: default;
`;

const ImageBackground = styled.div`
  background-color: #d9d9d9;
`;

function StartPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
              <ParagraphIcon>
                <Icon icon={faLeaf}/>
                <Paragraph>
                  Na Cervejaria Yule, o bagaço de malte 
                  descartado é reaproveitado para 
                  produzir couro 100% vegano que é 
                  utilizado em nossos brindes, como 
                  porta-copos, carteiras, capinhas e 
                  etc..
                </Paragraph>
              </ParagraphIcon>
              <ParagraphIcon>
                <Icon icon={faLightbulb} />
                <Paragraph>
                  Aqui nós acreditamos que inovação 
                  e sustentabilidade podem andar juntas, 
                  oferecendo produtos que refletem 
                  nosso compromisso com o meio 
                  ambiente e com a valorização 
                  de materiais reaproveitados.
                </Paragraph>
              </ParagraphIcon>
              <Button bType={'button'}>COMPRAR BRINDE</Button>
            </Paragraphs>
            <Slider {...settings}>
              <ImageBackground>
                <h3>1</h3>
              </ImageBackground>
              <ImageBackground>
                <h3>2</h3>
              </ImageBackground>
              <ImageBackground>
                <h3>3</h3>
              </ImageBackground>
            </Slider>
          </Content>
        </Background>
      </Main>
    </>
  );
}

export default StartPage;