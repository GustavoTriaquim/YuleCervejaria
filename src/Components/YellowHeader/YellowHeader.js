import styled from "styled-components";

const HeaderYellow = styled.div`
  width: 100%;
  padding: 10px 0;
  background-color: #f3c037;
  border-bottom: 10px solid #3d3c3c;
  position: fixed;
  top: 0;
`;

const WarningText = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Inria', serif;
  cursor: default;
`;

function YellowHeader() {
  return (
    <HeaderYellow>
      <WarningText>SITE APENAS PARA MAIORES DE 18 ANOS</WarningText>
    </HeaderYellow>
  );
}

export default YellowHeader;