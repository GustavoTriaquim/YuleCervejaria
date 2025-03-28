import styled from "styled-components";

const ImageBackground = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

function SliderImage({ source, altText }) {
  return (
    <ImageBackground>
      <Img src={source} alt={altText} />
    </ImageBackground>
  );
}

export default SliderImage;