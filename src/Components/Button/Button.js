import styled from 'styled-components';

const ButtonStyle = styled.button`
  width: 300px;
  height: 50px;
  background-color: #f3c037;
  display: flex;
  justify-content: center;
  border: none;
  align-items: center;
  color: #000000;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  font-size: ${(props) => props.fontSize || '15px'};
  gap: 10px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

function Button({ bType, children, size, click }) {
  return (
    <ButtonStyle type={bType} fontSize={size} onClick={click}>
      {children}
    </ButtonStyle>
  );
}

export default Button;