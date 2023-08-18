import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Flex from '../../components/atoms/Flex';
import styled from 'styled-components';
import { brand_black, brand_white } from '../../utils/palette';
import Text from '../../components/atoms/Text';

const UniqueBlock = ({ icon, title, text }) => {
  return (
    <Flex width="auto" direction="row" gap="50px">
      <IconBlock>
        <FontAwesomeIcon icon={icon} className="fa-4x" />
      </IconBlock>
      <Flex width="auto" gap="10px" align="left">
        <Text children={title} color={brand_black} size="30px" weight={700} />
        <Text
          children="직관적인 UI"
          color={brand_black}
          size="24px"
          weight={500}
        >
          {text}
        </Text>
      </Flex>
    </Flex>
  );
};

const IconBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 130px;
  height: 130px;
  border-radius: 35px;

  background-color: ${brand_white};
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.4);
`;

export default UniqueBlock;
