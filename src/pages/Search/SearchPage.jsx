import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BaseUrl } from '../../App';
import axios from 'axios';

import Wrapper from '../../components/atoms/Wrapper';
import SearchSection from './SearchSection';
import TopicSection from './TopicSection';
import PersonalSection from './PersonalSection';
import Navigation from '../../components/organisms/Navigation';

const SearchPage = () => {
  const [recentData, setRecentData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getRecentData = async () => {
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

    let url = BaseUrl + '/api/get-user-courses/';
    try {
      const res = await axios.get(url, config);

      setRecentData(res.data);
      setLoading(false);
    } catch (err) {
      alert('API Error : ');
    }
  };

  useEffect(() => {
    getRecentData();
  }, []);

  if (loading) return '로딩중';
  else
    return (
      <SearchContainer>
        {/* <Navigation /> */}
        <SearchSection />
        <Wrapper linear="linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(170, 170, 170, 0.15) 100%)">
          <TopicSection />
          <PersonalSection recentData={recentData} />
        </Wrapper>
      </SearchContainer>
    );
};

const SearchContainer = styled.div`
  position: relative;
`;

export default SearchPage;
