import { useNavigate } from 'react-router-dom';

import Flex from '../../components/atoms/Flex';
import Text from '../../components/atoms/Text';

const OtherVideosList = ({ data }) => {
  const nav = useNavigate(null);

  return (
    <li
      onClick={() =>
        nav(
          `/lecture?complete=${data.completed}&courseId=${data.course}&order=${data.order_in_course}`
        )
      }
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
    </li>
  );
};

export default OtherVideosList;
