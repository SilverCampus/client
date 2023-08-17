import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

import Text from '../../components/atoms/Text';
import Tag from '../../components/molecules/Tag';
import { brand_black, brand_white } from '../../utils/palette';
import Flex from '../../components/atoms/Flex';

const Curriculum = ({ data }) => {
  const nav = useNavigate();

  return (
    <CurriculumContainer
      onClick={() =>
        nav(
          `/lecture?complete=${data.completed}&courseId=${data.course}&order=${data.order_in_course}`
        )
      }
    >
      <Flex direction="row" width="auto" gap="10px">
        <FontAwesomeIcon icon={faCirclePlay} className="fa-2x" />
        <Text size="25px" children={`${data.order_in_course} 강`} />
        <Text size="25px" children={data.title} />
      </Flex>
      {data.completed ? <Tag type="완료" /> : null}
    </CurriculumContainer>
  );
};

const CurriculumContainer = styled.div`
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

export default Curriculum;
