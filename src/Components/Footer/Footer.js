import { faCcApplePay, faCcMastercard, faCcPaypal, faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import logo from '../../Assets/Img/image 1 (1).png';

const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  padding: 60px;
  justify-content: space-evenly;
  align-items: center;
  background-color: #0c0c0c;
`;

const Slogan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 27%;
`;

const Img = styled.img`
  width: 300px;
`;

const Text = styled.p`
  font-size: 25px;
  color: #8d8d8d;
  font-family: 'Inter', sans-serif;
`;

const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 40px;
`;

const Title = styled.h2`
  font-size: 30px;
  color: #fff;
  font-family: 'Judson', serif;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: #f3c037;
`;

const Payment = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

function Footer() {
  return (
    <FooterContainer>
      <Slogan>
        <Img src={logo} alt="Yule Brewery" />
        <Text>Tradição em Cada Gole, Paixão em Cada Lote.</Text>
      </Slogan>
      <ContactDiv>
        <Title>Contato</Title>
        <Info>
          <Icon icon={faLocationDot} />
          <Text>R. Francisco Nunes, 1944 - Prado Velho, Curitiba - PR,</Text>
        </Info>
        <Info>
          <Icon icon={faEnvelope} />
          <Text>contato@cervejariayule.com.br</Text>
        </Info>
        <Payment>
          <Text>Pagamentos: </Text>
          <Info>
            <Icon icon={faCcVisa} />
            <Icon icon={faCcPaypal} />
            <Icon icon={faCcMastercard} />
            <Icon icon={faCcApplePay} />
          </Info>
        </Payment>
      </ContactDiv>
    </FooterContainer>
  );
}

export default Footer;