import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { brand_black, brand_blue } from '../../utils/palette';
import { BaseUrl } from '../../App';
import axios from 'axios';

// Imported Components
import { FixedLogo } from '../Search/SearchSection';
import Wrapper from '../../components/atoms/Wrapper';
import Flex from '../../components/atoms/Flex';
import Space from '../../components/atoms/Space';
import Text from '../../components/atoms/Text';
import MyUnderline from '../../components/atoms/MyUnderline';
import CourseCard from './CourseCard';
import LoadingPage from '../../components/templates/LoadingPage';
import Heading from '../../components/molecules/Heading';

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let searched = searchParams.get('search');

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getApiData = async () => {
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
    let url = BaseUrl + `/api/search-courses/?keyword=${searched}`;

    try {
      const res = await axios.get(url, config);

      let newData = [];
      let arr = [];

      res.data.forEach((it, idx) => {
        arr.push(it);
        if ((idx + 1) % 3 === 0) {
          newData.push([...arr]);
          arr = [];
        }
      });

      if (arr.length > 0) {
        newData.push([...arr]);
      }
      setData(newData);
      setLoading(false);
    } catch (err) {
      if (err.response && err.response.status === 400) alert('검색 한 자 이상');
      else if (err.response && err.response.status === 404) {
        searched = '결과 없음';
        setData([]);
        setLoading(false);
      } else console.log('getApiData Error', err);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  if (loading) return <LoadingPage />;
  else
    return (
      <Wrapper>
        <FixedLogo type="dark" height="55px" />
        <Space height="175px" />
        <Flex gap="10px" direction="row" width="auto" height="auto">
          <Text
            weight={700}
            color={brand_blue}
            size="50px"
            children={searched}
          />
          <Text
            weight={700}
            color={brand_black}
            size="50px"
            children="의 검색 결과"
          />
        </Flex>
        <MyUnderline />
        <Space height="100px" />
        {data.length === 0 ? (
          <>
            <Space height="50px" />
            <Heading
              color={brand_black}
              size="30px"
              children="검색 결과가 존재하지 않습니다."
            />
            <Space height="50px" />
          </>
        ) : (
          data.map((it, idx) => (
            <>
              <StyledFlex
                width="auto"
                justify="left"
                direction="row"
                gap="40px"
                key={idx}
              >
                {it.map((iter, idxx) => (
                  <CourseCard key={iter.id} data={iter} key={idxx} />
                ))}
              </StyledFlex>
              <Space height="50px" />
            </>
          ))
        )}
        <Space height="125px" />
      </Wrapper>
    );
};

const StyledFlex = styled(Flex)`
  width: 980px;
  margin: 0 auto;
`;

export default MainPage;
