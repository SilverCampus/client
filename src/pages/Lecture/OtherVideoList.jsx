import Flex from '../../components/atoms/Flex';
import Text from '../../components/atoms/Text';

const OtherVideosList = ({ num, title }) => {
  return (
    <li>
      <Flex direction="row" justify="left" width="auto" gap="10px">
        <Text size="22px" weight={500} color="#a1a1a1" children={`${num}강.`} />
        <Text size="22px" weight={500} color="#a1a1a1" children={title} />
      </Flex>
    </li>
  );
};

export default OtherVideosList;
