import styled from 'styled-components';
import SearchSection from './SearchSection';

const SearchPage = () => {
  return (
    <SearchContainer>
      <SearchSection />
      Search Page
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  width: 100%;
  height: auto;
`;

export default SearchPage;
