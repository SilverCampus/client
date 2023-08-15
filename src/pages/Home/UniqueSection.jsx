import { brand_black } from '../../utils/palette';

// Imported Components
import Space from '../../components/atoms/Space';
import Flex from '../../components/atoms/Flex';
import Heading from '../../components/molecules/Heading';
import Heading2 from '../../components/molecules/Heading2';
import MyUnderline from '../../components/atoms/MyUnderline';
import UniqueBlock from './UniqueBlock';

const UniqueSection = () => {
  return (
    <div>
      <Space height="270px" />
      <Heading
        color={brand_black}
        size="45px"
        children="실버 캠퍼스만의 차별점"
      />
      <MyUnderline color={brand_black} />
      <Space height="50px" />
      <Heading2 color={brand_black} children="우리는 이렇게 다릅니다 (❁´◡`❁)" />
      <Space height="270px" />
      <Flex width="auto" gap="80px">
        <UniqueBlock />
        <UniqueBlock />
        <UniqueBlock />
      </Flex>
      <Space height="270px" />
    </div>
  );
};

export default UniqueSection;
