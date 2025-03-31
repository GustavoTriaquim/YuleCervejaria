import styled from "styled-components";
import texture from '../../Assets/Img/Texture/soft-plaster-texture.jpg';
import Button from '../../Components/Button/Button';
import { useNavigate } from "react-router-dom";

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0c0c0c;
  gap: 30px;
`;

const Container = styled.div`
  width: 70%;
  height: 80%;
  background-image: url(${texture});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 30px 5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  border: 3px solid #f3c037;
`;

const Title = styled.h1`
  background-color: #0c0c0c;
  padding: 5px 20px;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: space-evenly;
  align-items: center;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  width: 100%;
`;

const Label = styled.h2`
  font-size: 30px;
  color: #0c0c0c;
  font-family: 'Inter', sans-serif;
  font-weight: normal;
`;

const Input = styled.input`
  text-align: center;
  padding: 10px;
  width: 100%;
  font-size: 20px;
  font-family: 'Inter', sans-serif;
  border: 1px solid #f3c037;
  color: #0c0c0c;

  &::placeholder {
    color: #f3c037;
  }
`;

function SellerPage() {
  const navigate = useNavigate();

  return (
    <>
      <Main>
        <Container>
          <Title>LOGIN DO VENDEDOR</Title>
          <Form>
            <TextArea>
              <Label>USUÁRIO</Label>
              <Input type="text" placeholder="usuário" />
            </TextArea>
            <TextArea>
              <Label>SENHA</Label>
              <Input type="password" placeholder="senha" />
            </TextArea>
            <Button bType={'submit'} size={'27px'}>LOGAR</Button>
          </Form>
        </Container>
        <div>
          <Button bType={"button"} size={'25px'} click={() => navigate('/')}>VOLTAR</Button>
        </div>
      </Main>
    </>
  );
}

export default SellerPage;