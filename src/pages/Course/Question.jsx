import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Text from '../../components/atoms/Text';

import { brand_black, brand_white } from '../../utils/palette';

const Question = ({ data }) => {
  const nav = useNavigate();

  return (
    <QuestionContainer onClick={() => nav(`/question/${data.id}`)}>
      <Text children={data.title} />
      <Text children={data.nickname} />
    </QuestionContainer>
  );
};

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  width: 500px;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid #aaa;
  border-bottom: 3px solid black;
  background-color: ${brand_white};
  color: ${brand_black};
  cursor: pointer;

  &:hover {
    filter: brightness(80%);
  }
`;

export default Question;
