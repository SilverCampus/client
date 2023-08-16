import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Text from '../../components/atoms/Text';

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
  width: 100px;
  height: 50px;
  cursor: pointer;
`;

export default Question;
