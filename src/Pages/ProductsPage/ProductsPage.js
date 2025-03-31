import YellowHeader from '../../Components/YellowHeader/YellowHeader';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import styled from 'styled-components';
import carteira from '../../Assets/Img/carteira.jpg';
import portacopo from '../../Assets/Img/portacopo.jpg';
import capinha from '../../Assets/Img/capinha.jpg';
import Container from './Components/Container/Container';

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  align-items: center;
  padding: 50px 0;
`;

function ProductsPage() {
  return (
    <>
      <YellowHeader />
      <Header />
      <Main>
        <Container
          sliderSource1={portacopo}
          sliderSource2={portacopo}
          sliderSource3={portacopo}
          sliderAlt={'Carteira'}
          pName={'PRODUTO 1'}
          pPrice={'R$00,00'}
          pSeller={'Yule Brewery'}
        />

        <Container
          sliderSource1={carteira}
          sliderSource2={carteira}
          sliderSource3={carteira}
          sliderAlt={'Carteira'}
          pName={'PRODUTO 2'}
          pPrice={'R$00,00'}
          pSeller={'Yule Brewery'}
        />

        <Container
          sliderSource1={capinha}
          sliderSource2={capinha}
          sliderSource3={capinha}
          sliderAlt={'Capinha'}
          pName={'PRODUTO 2'}
          pPrice={'R$00,00'}
          pSeller={'Yule Brewery'}
        />
      </Main>
      <Footer />
    </>
  );
}

export default ProductsPage;