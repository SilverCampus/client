import styled from 'styled-components';

const QuestionUnderline = ({ width }) => {
  return <QuestionUnderlineContainer width={width} />;
};
const QuestionUnderlineContainer = styled.div`
width: ${({ width }) => width};
  color: #322653;
  margin: 0;
  border: 1px solid #322653;
  border-radius: 999px;
`;

export default QuestionUnderline;
