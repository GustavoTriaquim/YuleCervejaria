import styled from 'styled-components';

const ButtonStyle = styled.button`
  width: 200px;
  height: 50px;
  background-color: #f3c037;
  display: flex;
  justify-content: center;
  border: none;
  align-items: center;
  color: #000000;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  gap: 20px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

function Button({ bType, children }) {
  return (
    <ButtonStyle type={bType}>
      {children}
    </ButtonStyle>
  );
}

export default Button;