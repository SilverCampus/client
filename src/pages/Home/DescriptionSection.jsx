import { brand_black, brand_white } from '../../utils/palette';

// Imported Components
import Space from '../../components/atoms/Space';
import Wrapper from '../../components/atoms/Wrapper';
import Heading from '../../components/molecules/Heading';
import Heading2 from '../../components/molecules/Heading2';
import MyUnderline from '../../components/atoms/MyUnderline';

const DescriptionSection = () => {
  return (
    <div>
      <Space height="270px" />
      <Heading
        color={brand_black}
        size="45px"
        children="실버 캠퍼스만의 차별점"
      />
      <MyUnderline color={brand_black} />
      <Space height="30px" />
      <Heading2 color={brand_black} children="우리는 이렇게 다릅니다 (❁´◡`❁)" />
      <Space height="270px" />
    </div>
  );
};

export default DescriptionSection;
