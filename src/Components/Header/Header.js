import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from '../../Assets/Img/image 1 (1).png';
import styled from "styled-components";

const HeaderBlack = styled.div`
  margin-top: 53px;
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
  cursor: default;
`;

function Header() {
  return (
    <>
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
    </>
  );
}

export default Header;