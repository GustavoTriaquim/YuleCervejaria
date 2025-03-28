import styled from "styled-components";
import Button from '../../../../Components/Button/Button';
import Texture from '../../../../Assets/Img/Texture/soft-plaster-texture.jpg';
import SliderComponent from '../../../../Components/SliderComponent/SliderComponent';
import SliderImage from '../../../../Components/SliderImage/SliderImage';

const Background = styled.div`
  width: 80%;
  background-image: linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${Texture});
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px 0;
`;

const Infos = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  align-items: center;
`;

const Name = styled.h2`
  font-family: 'Inter', sans-serif;
  cursor: default;
  font-size: 30px;
`;

const Price = styled.h1`
  font-family: 'Inter', sans-serif;
  cursor: default;
  font-size: 40px;
`;

const Seller = styled.p`
  font-family: 'Inter', sans-serif;
  cursor: default;
  font-size: 20px;
  font-weight: 500;
`;

function Container({ sliderSource1, sliderSource2, sliderSource3, sliderAlt, pName, pPrice, pSeller }) {
  return (
    <Background>
      <SliderComponent>
        <SliderImage
          source={sliderSource1}
          altText={sliderAlt}
        />
        <SliderImage
          source={sliderSource2}
          altText={sliderAlt}
        />
        <SliderImage
          source={sliderSource3}
          altText={sliderAlt}
        />
      </SliderComponent>
      <Infos>
        <Name>{pName}</Name>
        <Price>{pPrice}</Price>
        <Seller>Vendido por: {pSeller}</Seller>
        <Button bType={'button'}>PEGAR {pName}</Button>
      </Infos>
    </Background>
  );
}

export default Container;