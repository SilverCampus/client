import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { brand_black, brand_blue } from '../../utils/palette';
import { BaseUrl } from '../../App';
import axios from 'axios';

// Imported Components
import { FixedLogo } from '../Search/SearchSection';
import Navigation from '../../components/organisms/Navigation';
import Wrapper from '../../components/atoms/Wrapper';
import Flex from '../../components/atoms/Flex';
import Space from '../../components/atoms/Space';
import Text from '../../components/atoms/Text';
import MyUnderline from '../../components/atoms/MyUnderline';
import CourseCard from './CourseCard';

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searched = searchParams.get('search');

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getApiData = async () => {
    let url = BaseUrl + `/api/search-courses/?keyword=${searched}`;

    try {
      const res = await axios.get(url);

      setData(res.data);
      setLoading(false);
    } catch (err) {
      if (err.response && err.response.status === 400) alert('검색 한 자 이상');
      else if (err.response && err.response.status === 404)
        alert('검색 결과 없음');
      else alert('api error');
    }

    return false;
  };

  // useEffect(() => {
  //   getApiData();
  // }, []);

  return (
    // Wrapper 감싸기...
    <Wrapper>
      {/* <Navigation /> */}
      <FixedLogo type="dark" height="55px" />
      <Space height="175px" />
      <Flex gap="10px" direction="row" width="auto" height="auto">
        <Text weight={700} color={brand_blue} size="50px" children={searched} />
        <Text
          weight={700}
          color={brand_black}
          size="50px"
          children="의 검색 결과"
        />
      </Flex>
      <MyUnderline />
      <Space height="100px" />
      {loading ? (
        '로딩중'
      ) : (
        <Flex direction="row" gap="40px">
          {data.map((it) => (
            <CourseCard
              key={it.id}
              title={it.title}
              description={it.description}
            />
          ))}
        </Flex>
      )}
      <Space height="100px" />
      <Flex direction="row" gap="40px">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </Flex>
      <Space height="175px" />
    </Wrapper>
  );
};

export default MainPage;
