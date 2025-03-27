import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from '../../Assets/Img/image 1 (1).png';
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderYellow = styled.div`
  width: 100%;
  padding: 10px 0;
  background-color: #f3c037;
  border-bottom: 10px solid #3d3c3c;
`;

const WarningText = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Inria', serif;
`;

const HeaderBlack = styled.div`
  background-color: #0c0c0c;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px 0;
`;

const Img = styled.img`
  width: 115px;
`;

const Text = styled.p`
  font-size: 22px;
  color: #ffffff;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  text-align: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderYellow>
        <WarningText>SITE APENAS PARA MAIORES DE 18 ANOS</WarningText>
      </HeaderYellow>
      <HeaderBlack>
        <Img src={logo} alt="Yule Brewery" />
        <Text>PRODUTOS - COURO VEGETAL 100% VEGANO</Text>
        <Button
          bType={'button'}
        >
          <FontAwesomeIcon icon={faPhone} />
          ENTRAR EM CONTATO
        </Button>
      </HeaderBlack>
    </HeaderContainer>
  );
}

export default Header;