import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ParagraphIcon = styled.div`
  display: flex;
  gap: 10px;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 30px;
  color: #f3c037;
`;

const Paragraph = styled.p`
  font-size: 27px;
  cursor: default;
  font-family: 'Inter', sans-serif;
  color: #585858;
`;

function ParagraphText({ iconSVG, text }) {
  return (
    <ParagraphIcon>
      <Icon icon={iconSVG} />
      <Paragraph>
        {text}
      </Paragraph>
    </ParagraphIcon>
  )
}

export default ParagraphText;