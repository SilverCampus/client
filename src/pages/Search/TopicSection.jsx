import styled from 'styled-components';
import {
  brand_black,
  brand_blue,
  brand_darkblue,
  brand_white,
} from '../../utils/palette';

// Imported Components
import Heading from '../../components/molecules/Heading';
import Underline from '../../components/atoms/UnderLine';
import Space from '../../components/atoms/Space';
import GoDown from '../../components/molecules/GoDown';
import Description from '../../components/molecules/Description';
import CustomButton from '../../components/molecules/CustomButton';
import categoryList from '../../utils/categoryList';

const TopicSection = () => {
  return (
    <SearchSectionContainer>
      <Space height="145px" />
      <Heading color={brand_black} children="원하는 주제를 선택해보세요!" />
      <Underline color={brand_black} />
      <Space height="40px" />
      <Description
        color={brand_black}
        children="여러 주제를 고르실 수 있습니다"
      />
      <Space height="85px" />

      {categoryList.map((it, idx) => (
        <CustomButton
          key={idx}
          children={it.category}
          icon={it.icon}
          color={brand_white}
          bgColor={brand_blue}
          darkColor={brand_darkblue}
        />
      ))}

      <Space height="210px" />
      <GoDown color={brand_black} children="이미 찜한 강의가 있으신가요?" />
      <Space height="30px" />
    </SearchSectionContainer>
  );
};

const SearchSectionContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export default TopicSection;
