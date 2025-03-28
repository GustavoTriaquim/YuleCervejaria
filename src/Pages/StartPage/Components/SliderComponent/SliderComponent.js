import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderStyle = styled(Slider)`
  width: 30%;
  height: 100%;
`;

function SliderComponent({ children }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SliderStyle>
      {children}
    </SliderStyle>
  );
}

export default SliderComponent;