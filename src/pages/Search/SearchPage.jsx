import styled from 'styled-components';
import SearchSection from './SearchSection';
import TopicSection from './TopicSection';
import PersonalSection from './PersonalSection';
import Navigation from '../../components/organisms/Navigation';

const SearchPage = () => {
  return (
    <SearchContainer>
      <Navigation />
      <SearchSection />
      <TopicSection />
      <PersonalSection />
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  width: 100%;
  height: auto;
`;

export default SearchPage;
