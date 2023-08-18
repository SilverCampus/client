import styled from 'styled-components';
import { brand_white } from '../../utils/palette';
import { useEffect } from 'react';

// Imported Components
import IntroSection from './IntroSection';
import UniqueSection from './UniqueSection';
import DescriptionSection from './DescriptionSection';
import Wrapper from '../../components/atoms/Wrapper';
import Text from '../../components/atoms/Text';
import FlatButton from '../../components/molecules/FlatButton';
import Modal from '../Modal/Modal';
import SignForm from '../Login/SignForm';
import useModal from '../Modal/useModal';
import Speaker from '../../components/organisms/Speaker';
import Home from '../../assets/audios/Home_signup_login.mp3';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isOpen, toggleModal] = useModal();

  return (
    <HomePageContainer>
      <F11Text
        children={
          <Text size="20px" weight={700} color={brand_white} spacing="2px">
            [ F11 ] 을 눌러 보다 쾌적하게 이용해보세요!
          </Text>
        }
      />

      <Modal state={isOpen} toggleModal={toggleModal} children={<SignForm />} />

      <IntroSection />
      <Wrapper linear="linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(170, 170, 170, 0.15) 100%)">
        <DescriptionSection />
        <UniqueSection />
      </Wrapper>
      <FixButton
        width="250px"
        height="65px"
        bgColor="#35a29f"
        onClick={toggleModal}
      >
        <Text
          size="23px"
          weight={700}
          color={brand_white}
          spacing="2px"
          children="지금 시작하기"
        />
      </FixButton>
      <Speaker src={Home} />
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
