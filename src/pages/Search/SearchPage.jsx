import styled from 'styled-components';
import SearchSection from './SearchSection';
import TopicSection from './TopicSection';

const SearchPage = () => {
  return (
    <SearchContainer>
      <SearchSection />
      <TopicSection />
      Search Page
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  width: 100%;
  height: auto;
`;

export default SearchPage;
