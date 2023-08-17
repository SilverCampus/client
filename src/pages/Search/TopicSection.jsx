import styled from 'styled-components';
import { brand_black, BlueButtonColors } from '../../utils/palette';
import { useNavigate } from 'react-router-dom';

// Imported Components
import Heading from '../../components/molecules/Heading';
import Heading2 from '../../components/molecules/Heading2';
import MyUnderline from '../../components/atoms/MyUnderline';
import Space from '../../components/atoms/Space';
import GoDown from '../../components/molecules/GoDown';
import PopButton from '../../components/molecules/PopButton';
import Flex from '../../components/atoms/Flex';

import categoryList from '../../utils/categoryList';

const TopicSection = () => {
  const nav = useNavigate(null);
  const handleClick = (topic) => {
    nav(`/main?search=${topic}`);
  };

  return (
    <div>
      <Space height="190px" />
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
        children="각 주제에 해당하는 강의들을 확인하세요"
      />
      <Space height="140px" />

      <AlignCenter>
        {categoryList.map((it, idx) => (
          <>
            <Flex
              key={idx}
              width="auto"
              gap="40px"
              direction="row"
              justify="left"
            >
              {it.map((iter, idxx) => (
                <PopButton
                  key={idxx}
                  width="195px"
                  height="60px"
                  children={iter.icon}
                  colors={BlueButtonColors}
                  onClick={() => handleClick(iter.text)}
                />
              ))}
            </Flex>
            <Space height="70px" />
          </>
        ))}
      </AlignCenter>

      <Space height="185px" />
      <GoDown color={brand_black} children="이미 찜한 강의가 있으신가요?" />
      <Space height="25px" />
    </div>
  );
};

const AlignCenter = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

export default TopicSection;
