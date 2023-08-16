import styled from 'styled-components';
import { brand_black } from '../../utils/palette';

import Flex from '../../components/atoms/Flex';
import Text from '../../components/atoms/Text';

const TitleVideosList = ({ num, title }) => {
  return (
    <TitleVideoDiv>
      <Flex direction="row" justify="left" width="auto" gap="10px">
        <Text
          size="40px"
          weight={700}
          color={brand_black}
          children={`${num}강.`}
        />
        <Text size="40px" weight={700} color={brand_black} children={title} />
      </Flex>
    </TitleVideoDiv>
  );
};

const TitleVideoDiv = styled.div`
  width: 100%;
  padding: 20px 30px;
  border-left: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
`;

export default TitleVideosList;
