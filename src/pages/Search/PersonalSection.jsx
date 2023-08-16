import styled from 'styled-components';
import { brand_black } from '../../utils/palette';

// Imported Components
import Heading from '../../components/molecules/Heading';
import Heading2 from '../../components/molecules/Heading2';
import MyUnderline from '../../components/atoms/MyUnderline';
import Space from '../../components/atoms/Space';
import PersonalBox from './PersonalBox';
import Flex from '../../components/atoms/Flex';

const dummy = {
  title: '기록이 없습니다',
  description: '최초 등록해보세요!',
};

const PersonalSection = ({ recentData }) => {
  return (
    <PersonalSectionContainer>
      <Space height="190px" />
      <Heading
        color={brand_black}
        size="45px"
        children="개인 기록을 확인하세요!"
      />
      <MyUnderline color={brand_black} />
      <Space height="40px" />
      <Heading2
        color={brand_black}
        size="24px"
        children="자세한 사항은 개인 페이지를 확인하세요 ...(*￣０￣)ノ"
      />
      <Space height="140px" />
      <Flex direction="row" justify="space-evenly">
        <PersonalBox type="left" data={recentData.recently_watched || dummy} />
        <PersonalBox type="right" data={recentData.recently_liked || dummy} />
      </Flex>
      <Space height="260px" />
    </PersonalSectionContainer>
  );
};

const PersonalSectionContainer = styled.div`
  width: 100%;
`;

export default PersonalSection;
