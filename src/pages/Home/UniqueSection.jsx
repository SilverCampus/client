import styled from 'styled-components';
import { brand_black } from '../../utils/palette';
import {
  faBuildingColumns,
  faMicrophone,
  faShapes,
} from '@fortawesome/free-solid-svg-icons';

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
      <Space height="200px" />
      <Heading
        color={brand_black}
        size="45px"
        children="실버 캠퍼스만의 차별점"
      />
      <MyUnderline color={brand_black} />
      <Space height="50px" />
      <Heading2
        size="23px"
        color={brand_black}
        children="저희는 이렇게 다릅니다 (❁´◡`❁)"
      />
      <Space height="270px" />

      <BlockBox>
        <UniqueBlock
          icon={faShapes}
          title="직관적인 UI"
          text="보다 쉽고 직관적인 화면 구성을 통해 시니어분들에게 한걸음 가까이 다가갑니다."
        />
        <UniqueBlock
          icon={faMicrophone}
          title="음성 안내"
          text="ARS를 연상시키는 음성 안내 서비스를 제공하여 보다 더 간편한 웹 사용을 도와줍니다."
        />
        <UniqueBlock
          icon={faBuildingColumns}
          title="온라인으로 즐기는 캠퍼스 라이프"
          text="대학 생활의 활동 일부를 온라인에서 경험할 수 있도록 소통과 교류의 장이 마련되어 있습니다."
        />
      </BlockBox>
      <Space height="270px" />
    </div>
  );
};

const BlockBox = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  align-items: start;
  width: 80%;
  margin: 0 auto;
`;

export default UniqueSection;
