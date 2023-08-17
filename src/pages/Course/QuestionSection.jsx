import styled from 'styled-components';

import Heading from '../../components/molecules/Heading';
import MyUnderline from '../../components/atoms/MyUnderline';
import Question from './Question';
import Space from '../../components/atoms/Space';
import { brand_black } from '../../utils/palette';

const QuestionSection = ({ questionData }) => {
  return (
    <QuestionSectionContainer>
      <Heading children="QnA" size="40px" weight={700} />
      <MyUnderline />
      <Space height="50px" />
      {/* questionData && questionData.map((it) => <Question key={it.id} data={it} />) 이건 왜 안되지..*/}
      {Array.isArray(questionData) &&
        questionData.map((it) => <Question key={it.id} data={it} />)}
    </QuestionSectionContainer>
  );
};

const QuestionSectionContainer = styled.div`
  color: ${brand_black};
`;

export default QuestionSection;
