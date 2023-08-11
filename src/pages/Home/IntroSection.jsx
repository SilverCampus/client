import styled from 'styled-components';
import imgURL from '../../assets/images/background.png';
import {
  brand_darkpurple,
  brand_purple,
  brand_white,
} from '../../utils/palette';

// Imported Components
import Wrapper from '../../components/atoms/Wrapper';
import Logo from '../../components/molecules/Logo';
import Text from '../../components/atoms/Text';
import CustomButton from '../../components/molecules/CustomButton';
import Space from '../../components/atoms/Space';
import GoDown from '../../components/molecules/GoDown';

const IntroSection = () => {
  const colors = {
    color: brand_white,
    bgColor: brand_purple,
    shadowColor: brand_darkpurple,
  };

  return (
    <Wrapper img={imgURL}>
      <Space height="25px" />
      <Header>
        <Text
          weight={700}
          size="25px"
          color={brand_white}
          children="F11을 눌러 사이트를 보다 쾌적하게 즐기세요!"
        />
        <CustomButton width="125px" height="45px" colors={colors}>
          <Text weight={700} size="16px" children="시작하기" />
        </CustomButton>
      </Header>

      <Space height="230px" />
      <Logo height="220px" />
      <Space height="190px" />
      <GoDown color={brand_white} children="저희에 대해 궁금하신가요?" />
      <Space height="25px" />
    </Wrapper>
  );
};

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export default IntroSection;
