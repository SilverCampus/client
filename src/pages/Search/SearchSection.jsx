import styled from 'styled-components';
import imgURL from '../../assets/images/background.png';
import { brand_white } from '../../utils/palette';

// Imported Components
import Wrapper from '../../components/atoms/Wrapper';
import Heading from '../../components/molecules/Heading';
import MyUnderline from '../../components/atoms/MyUnderline';
import Space from '../../components/atoms/Space';
import SearchBox from './SearchBox';
import GoDown from '../../components/molecules/GoDown';
import Logo from '../../components/molecules/Logo';

const SearchSection = () => {
  return (
    <Wrapper img={imgURL}>
      <FixedLogo height="55px" />
      <Space height="190px" />
      <Heading
        color={brand_white}
        size="45px"
        children="원하는 강의를 검색해보세요!"
      />
      <MyUnderline color={brand_white} />
      <Space height="140px" />
      <SearchBox width="850px" />
      <Space height="240px" />
      <GoDown color={brand_white} children="아직 결정 못하셨나요?" />
      <Space height="25px" />
    </Wrapper>
  );
};

export const FixedLogo = styled(Logo)`
  position: absolute;
  top: 30px;
  left: 40px;
`;

export default SearchSection;
