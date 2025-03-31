import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  width: 100vw;
  padding: 20px 0px;
  text-align: center;
  font-size: 25px;
  background-color: #0c0c0c;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  border: none;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    background-color: #f3c037;
    color: #0c0c0c;
  }
`;

function SellerDiv() {
  const navigate = useNavigate();

  return (
    <>
      <Button type="button" onClick={() => navigate('/vendedor')}>SOU VENDEDOR</Button>
    </>
  );
}

export default SellerDiv;