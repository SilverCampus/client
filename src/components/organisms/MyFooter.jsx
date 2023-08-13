import styled from 'styled-components';
import { brand_black } from '../../utils/palette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-regular-svg-icons';

// Imported Component
import Wrapper from '../atoms/Wrapper';
import Space from '../atoms/Space';
import Flex from '../atoms/Flex';
import Developers from '../molecules/Developers';

const MyFooter = () => {
  return (
    <footer>
      <Wrapper bgColor={'#000'}>
        <Space height="80px" />
        <Flex direction="row" gap="70px">
          <Developers type="FE" name="김민지" handle="slsl2" />
          <Developers type="FE" name="송경호" handle="Goonco" />
          <Developers type="BE" name="김규빈" handle="bin" />
          <Developers type="BE" name="임정연" handle="13155a1" />
          <Developers type="BE" name="정태현" handle="nexDavid2020" />
        </Flex>
        <Space height="80px" />
      </Wrapper>
    </footer>
  );
};

export default MyFooter;
