import styled from 'styled-components';
import {
  brand_black,
  brand_blue,
  brand_darkblue,
  brand_white,
} from '../../utils/palette';

// Imported Components
import Heading from '../../components/molecules/Heading';
import Heading2 from '../../components/molecules/Heading2';
import MyUnderline from '../../components/atoms/MyUnderline';
import Space from '../../components/atoms/Space';
import GoDown from '../../components/molecules/GoDown';
import PopButton from '../../components/molecules/PopButton';
import Flex from '../../components/atoms/Flex';

import { categoryList1, categoryList2 } from '../../utils/categoryList';
const ButtonColors = {
  color: brand_white,
  bgColor: brand_blue,
  shadowColor: brand_darkblue,
};

const TopicSection = () => {
  return (
    <div>
      <Space height="145px" />
      <Heading
        color={brand_black}
        size="45px"
        children="원하는 주제를 선택해보세요!"
      />
      <MyUnderline color={brand_black} />
      <Space height="40px" />
      <Heading2
        color={brand_black}
        size="24px"
        children="여러 주제를 고르실 수 있습니다"
      />
      <Space height="85px" />

      <AlignCenter>
        <Flex width="auto" gap="40px" direction="row" justify="left">
          {categoryList1.map((it, idx) => (
            <PopButton
              key={idx}
              width="195px"
              height="60px"
              children={it}
              colors={ButtonColors}
            />
          ))}
        </Flex>
        <Space height="70px" />
        <Flex width="auto" gap="40px" direction="row" justify="left">
          {categoryList2.map((it, idx) => (
            <PopButton
              key={idx}
              width="195px"
              height="60px"
              children={it}
              colors={ButtonColors}
            />
          ))}
        </Flex>
      </AlignCenter>

      <Space height="210px" />
      <GoDown color={brand_black} children="이미 찜한 강의가 있으신가요?" />
      <Space height="30px" />
    </div>
  );
};

const AlignCenter = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

export default TopicSection;
