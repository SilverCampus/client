import styled from 'styled-components';
import { brand_white } from '../../utils/palette';

// Imported Components
import IntroSection from './IntroSection';
import UniqueSection from './UniqueSection';
import DescriptionSection from './DescriptionSection';
import Wrapper from '../../components/atoms/Wrapper';
import Text from '../../components/atoms/Text';
import FlatButton from '../../components/molecules/FlatButton';

const HomePage = () => {
  return (
    <HomePageContainer>
      <F11Text
        children={
          <Text size="20px" weight={700} color={brand_white} spacing="2px">
            [ F11 ] 을 눌러 보다 쾌적하게 이용해보세요!
          </Text>
        }
      />
      <FixButton width="250px" height="65px" bgColor="#35a29f">
        <Text
          size="25px"
          weight={700}
          color={brand_white}
          spacing="2px"
          children="지금 시작하기"
        />
      </FixButton>
      <IntroSection />
      <Wrapper linear="linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(170, 170, 170, 0.15) 100%)">
        <DescriptionSection />
        <UniqueSection />
      </Wrapper>
    </HomePageContainer>
  );
};

const HomePageContainer = styled.div`
  position: relative;
`;

const FixButton = styled(FlatButton)`
  position: fixed;
  bottom: 50px;
  right: 50px;
`;

const F11Text = styled.div`
  position: absolute;
  top: 30px;
  left: 40px;
`;

export default HomePage;
