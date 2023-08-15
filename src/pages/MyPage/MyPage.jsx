import { useEffect, useState } from 'react';
import axios from 'axios';
import { BaseUrl } from '../../App';

import Wrapper from '../../components/atoms/Wrapper';
import Space from '../../components/atoms/Space';
import Heading from '../../components/molecules/Heading';
import { FixedLogo } from '../Search/SearchSection';
import MyUnderline from '../../components/atoms/MyUnderline';
import Flex from '../../components/atoms/Flex';
import CourseCard from '../Main/CourseCard';

const MyPage = () => {
  const [userData, setUserData] = useState(null);
  const [loading1, setLoading1] = useState(true);

  const [boughtData, setBoughtData] = useState(null);
  const [loading2, setLoading2] = useState(true);

  const [likedData, setLikedData] = useState(null);
  const [loading3, setLoading3] = useState(true);

  const getUserData = async () => {
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
    let url = BaseUrl + '/api/get-user-info/';

    try {
      const res = await axios.get(url, config);
      setUserData(res.data);
      setLoading1(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getBoughtData = async () => {
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
    let url = BaseUrl + '/api/purchased-courses/';

    try {
      const res = await axios.get(url, config);
      setBoughtData(res.data);
      setLoading2(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getLikedData = async () => {
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
    let url = BaseUrl + '/api/liked-courses/';

    try {
      const res = await axios.get(url, config);
      setLikedData(res.data);
      setLoading3(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserData();
    getBoughtData();
    getLikedData();
  }, []);

  const loading = loading1 || loading2;

  if (loading) return '로딩중';
  else {
    return (
      <Wrapper>
        <FixedLogo type="dark" height="55px" />
        <Space height="175px" />
        <Heading children={`${userData.nickname}님의 페이지`} />
        <MyUnderline />
        <Space height="100px" />
        <Heading children="구매한 강의" />
        <MyUnderline />
        <Space height="100px" />
        <Flex direction="row" gap="40px">
          {boughtData.map((it) => (
            <CourseCard key={it.id} data={it} />
          ))}
        </Flex>
        <Heading children="찜한 강의" />
        <MyUnderline />
        <Space height="100px" /> */}
        <Flex direction="row" gap="40px">
          {likedData.map((it) => (
            <CourseCard key={it.id} data={it} />
          ))}
        </Flex>
      </Wrapper>
    );
  }
};

export default MyPage;
