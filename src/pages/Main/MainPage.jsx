import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { brand_black, brand_blue } from '../../utils/palette';

// Imported Components
import Logo from '../../components/molecules/Logo';
import Navigation from '../../components/organisms/Navigation';
import Flex from '../../components/atoms/Flex';
import Space from '../../components/atoms/Space';
import Text from '../../components/atoms/Text';
import Underline from '../../components/atoms/UnderLine';
import CourseCard from './CourseCard';

const MainPage = () => {
  const { topic } = useParams();

  return (
    <MainPageContainer>
      <Navigation />
      <Logo color={brand_black} />
      <Space height="60px" />
      <Flex gap="10px" direction="row" width="auto" height="auto">
        <Text weight={700} color={brand_blue} size="50px" children={topic} />
        <Text
          weight={700}
          color={brand_black}
          size="50px"
          children="의 검색 결과"
        />
      </Flex>
      <Underline />
      <Space height="60px" />
      <Flex direction="row" gap="20px">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </Flex>
      <Space height="60px" />
      <Flex direction="row" gap="20px">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </Flex>
      <Space height="60px" />
    </MainPageContainer>
  );
};

const MainPageContainer = styled.div``;

export default MainPage;
