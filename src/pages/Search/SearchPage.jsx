import styled from 'styled-components';

import Wrapper from '../../components/atoms/Wrapper';
import SearchSection from './SearchSection';
import TopicSection from './TopicSection';
import PersonalSection from './PersonalSection';
import Navigation from '../../components/organisms/Navigation';

const SearchPage = () => {
  return (
    <SearchContainer>
      {/* <Navigation /> */}
      <SearchSection />
      <Wrapper linear="linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(170, 170, 170, 0.15) 100%)">
        <TopicSection />
        {/* <PersonalSection /> */}
      </Wrapper>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  position: relative;
`;

export default SearchPage;
