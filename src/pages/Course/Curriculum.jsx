import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Text from '../../components/atoms/Text';

const Curriculum = ({ data }) => {
  const nav = useNavigate();

  return (
    <CurriculumContainer
      onClick={() =>
        nav(
          `/lecture?video=${data.video_file}&complete=${data.completed}&courseId=${data.course}&order=${data.order_in_course}`
        )
      }
    >
      <Text children={`${data.order_in_course} 강`} />
      <Text children={data.title} />
    </CurriculumContainer>
  );
};

const CurriculumContainer = styled.div`
  width: 100px;
  height: 50px;
  cursor: pointer;
`;

export default Curriculum;
