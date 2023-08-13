import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShapes } from '@fortawesome/free-solid-svg-icons';

import Flex from '../../components/atoms/Flex';
import styled from 'styled-components';
import { brand_black, brand_darkblue, brand_white } from '../../utils/palette';
import Text from '../../components/atoms/Text';

const UniqueBlock = () => {
  return (
    <Flex width="auto" direction="row" gap="50px">
      <IconBlock>
        <FontAwesomeIcon icon={faShapes} className="fa-4x" />
      </IconBlock>
      <Flex width="auto" gap="10px" align="left">
        <Text
          children="직관적인 UI"
          color={brand_black}
          size="30px"
          weight={700}
        />
        <Text
          children="직관적인 UI"
          color={brand_black}
          size="24px"
          weight={500}
        >
          보다 쉽고 직관적인 화면 구성을 통해 시니어분들에게 한걸음 가까이
          다가갑니다.
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
