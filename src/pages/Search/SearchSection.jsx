import styled from 'styled-components';
import imgURL from '../../assets/images/background.png';
import { brand_white } from '../../style/palette';

// Imported Components
import Logo from '../../components/molecules/Logo';
import Heading from '../../components/molecules/Heading';
import Underline from '../../components/atoms/UnderLine';
import Space from '../../components/atoms/Space';
import SearchBox from './SearchBox';

const SearchSection = () => {
  return (
    <SearchSectionContainer>
      <Logo />
      <Space height="100px" />
      <Heading color={brand_white} children="원하는 강의를 검색해보세요!" />
      <Underline color={brand_white} />
      <Space height="140px" />
      <SearchBox />
      <Space height="140px" />
    </SearchSectionContainer>
  );
};

const SearchSectionContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;

  background-image: url(${imgURL});
  background-position: center;
  background-size: cover;
`;

export default SearchSection;
