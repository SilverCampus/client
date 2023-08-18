import { brand_black } from '../../utils/palette';

// Imported Components
import Space from '../../components/atoms/Space';
import Heading from '../../components/molecules/Heading';
import Heading2 from '../../components/molecules/Heading2';
import MyUnderline from '../../components/atoms/MyUnderline';
import Text from '../../components/atoms/Text';
import Flex from '../../components/atoms/Flex';
import styled from 'styled-components';

const DescriptionSection = () => {
  return (
    <div>
      <Space height="270px" />
      <Heading color={brand_black} size="45px" children="실버 캠퍼스는?" />
      <MyUnderline color={brand_black} />
      <Space height="50px" />
      <Heading2
        size="23px"
        color={brand_black}
        children="저희는 이러한 서비스를 개발했습니다 (❁´◡`❁)"
      />
      <Space height="200px" />
      <DescriptionBox>
        <Text size="23px">
          실버캠퍼스는 시니어 대상 온라인 강의 & 캠퍼스 플랫폼입니다. 원하시는
          강의를 검색하여 수강할 수 있고, 수강한 총 학점에 따라 새내기, 학부생,
          학사, 석사, 박사, 교수, 여섯 단계의 등급을 부여받는 성취감을 느끼실 수
          있습니다.
        </Text>{' '}
        <Text size="23px">
          아울러 다른 학생들과 함께 공부하고, 자신을 표현하고, 소통하는 공간도
          마련되어 있습니다. 지금, 실버캠퍼스에서 대학 생활의 '청춘'을
          온라인으로 경험해 보세요!
        </Text>
      </DescriptionBox>
      <Space height="150px" />
    </div>
  );
};

const DescriptionBox = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  width: 40%;
  margin: 0 auto;
`;

export default DescriptionSection;
