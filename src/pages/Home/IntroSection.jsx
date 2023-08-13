import styled from 'styled-components';
import imgURL from '../../assets/images/background.png';
import { brand_white } from '../../utils/palette';

// Imported Components
import Wrapper from '../../components/atoms/Wrapper';
import Logo from '../../components/molecules/Logo';
import Flex from '../../components/atoms/Flex';
import Space from '../../components/atoms/Space';
import GoDown from '../../components/molecules/GoDown';

const IntroSection = () => {
  return (
    <Wrapper img={imgURL}>
      <Space height="285px" />
      <Flex>
        <Logo height="290px" />
      </Flex>
      <Space height="245px" />
      <GoDown color={brand_white} children="저희에 대해 궁금하신가요?" />
      <Space height="25px" />
    </Wrapper>
  );
};

export default IntroSection;
