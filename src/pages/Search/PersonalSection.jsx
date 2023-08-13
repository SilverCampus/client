import styled from 'styled-components';
import { brand_black } from '../../utils/palette';

// Imported Components
import Heading from '../../components/molecules/Heading';
import Heading2 from '../../components/molecules/Heading2';
import MyUnderline from '../../components/atoms/MyUnderline';
import Space from '../../components/atoms/Space';
import PresonalBox from './PresonalBox';
import Flex from '../../components/atoms/Flex';

const PersonalSection = () => {
  return (
    <SearchSectionContainer>
      <Space height="145px" />
      <Heading color={brand_black} children="개인 기록을 확인하세요!" />
      <MyUnderline color={brand_black} />
      <Space height="40px" />
      <Heading2
        color={brand_black}
        children="더 자세한 기록은 개인 페이지를 확인하세요."
      />
      <Space height="85px" />
      <Flex direction="row">
        <PresonalBox
          type="left"
          heading="구매하신 강의"
          subHeading="가장 최근에 시청하신 강의입니다."
        />
        <PresonalBox
          type="right"
          heading="구매하신 강의"
          subHeading="가장 최근에 시청하신 강의입니다."
        />
      </Flex>
      <Space height="210px" />
    </SearchSectionContainer>
  );
};

const SearchSectionContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export default PersonalSection;
