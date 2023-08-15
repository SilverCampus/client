import { useEffect, useState } from 'react';
import styled from 'styled-components';
import BaseUrl from '../../App';
import axios from 'axios';

import Wrapper from '../../components/atoms/Wrapper';
import SearchSection from './SearchSection';
import TopicSection from './TopicSection';
import PersonalSection from './PersonalSection';
import Navigation from '../../components/organisms/Navigation';

const SearchPage = () => {
  const [recentlyWatched, setRecentlyWatched] = useState(null);
  const [loading1, setLoading1] = useState(true);
  const [recentlyLiked, setRecentlyLiked] = useState(null);
  const [loading2, setLoading2] = useState(true);

  const getRecentlyWatched = async () => {
    const token = localStorage.getItem('key');

    if (!token) {
      alert('로그인 안 함');
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      let url = BaseUrl + '/api/get-recently-watched-courses/';
      const res = await axios.get(url, config);

      setRecentlyWatched(res.data);
      setLoading1(false);
    } catch (err) {
      alert('API Error : ');
    }
  };

  // useEffect(() => {
  //   getRecentlyWatched();
  // }, []);

  return (
    <SearchContainer>
      {/* <Navigation /> */}
      <SearchSection />
      <Wrapper linear="linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(170, 170, 170, 0.15) 100%)">
        <TopicSection />
        <PersonalSection
          recentlyWatched={recentlyWatched}
          loading1={loading1}
        />
      </Wrapper>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  position: relative;
`;

export default SearchPage;
