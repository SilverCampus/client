import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

import Flex from '../../components/atoms/Flex';
import Text from '../../components/atoms/Text';

const OtherVideosList = ({ data, courseName, category, credit }) => {
  const nav = useNavigate(null);

  return (
    <MyLi
      onClick={() => {
        nav(
          `/lecture?courseName=${courseName}&category=${category}&credit=${credit}&complete=${data.completed}&courseId=${data.course}&order=${data.order_in_course}`
        );
        window.location.reload();
      }}
    >
      <Flex direction="row" justify="left" width="auto" gap="10px">
        <Text
          size="22px"
          weight={500}
          color="#a1a1a1"
          children={`${data.order_in_course}강.`}
        />
        <Text size="22px" weight={500} color="#a1a1a1" children={data.title} />
      </Flex>
    </MyLi>
  );
};

const MyLi = styled.li`
  &:hover {
    filter: brightness(80%);
  }
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  background-color: white;
`;

export default OtherVideosList;
