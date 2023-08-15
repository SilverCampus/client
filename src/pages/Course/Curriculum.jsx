import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Text from '../../components/atoms/Text';

const Curriculum = ({ courseId, order, title, link, isComplete }) => {
  const nav = useNavigate();

  return (
    <CurriculumContainer
      onClick={() =>
        nav(
          `/lecture?video=${link}&complete=${isComplete}&courseId=${courseId}&order=${order}`
        )
      }
    >
      <Text children={`${order} 강`} />
      <Text children={title} />
    </CurriculumContainer>
  );
};

const CurriculumContainer = styled.div`
  width: 100px;
  height: 50px;
  cursor: pointer;
`;

export default Curriculum;
