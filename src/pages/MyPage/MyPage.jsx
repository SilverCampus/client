import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BaseUrl } from '../../App';
import Speaker from '../../components/organisms/Speaker';
import Mypage from '../../assets/audios/Mypage.mp3';

import Wrapper from '../../components/atoms/Wrapper';
import Space from '../../components/atoms/Space';
import { FixedLogo } from '../Search/SearchSection';
import MyUnderline from '../../components/atoms/MyUnderline';
import Flex from '../../components/atoms/Flex';
import LoadingPage from '../../components/templates/LoadingPage';
import BuySection from './BuySection';
import LikeSection from './LikeSection';
import Text from '../../components/atoms/Text';
import { brand_blue, brand_white } from '../../utils/palette';
import Grade from '../../components/atoms/Grade';
import FlatButton from '../../components/molecules/FlatButton';
import Modal from '../Modal/Modal';
import useModal from '../Modal/useModal';
import AddForm from './AddForm';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const [userData, setUserData] = useState(null);
  const [loading1, setLoading1] = useState(true);

  const [boughtData, setBoughtData] = useState(null);
  const [loading2, setLoading2] = useState(true);

  const [likedData, setLikedData] = useState(null);
  const [loading3, setLoading3] = useState(true);

  const [isOpen, toggleModal] = useModal();

  const [leftCredit, setLeftCredit] = useState(0);
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
    window.scrollTo(0, 0);
    getUserData();
    getBoughtData();
    getLikedData();
  }, []);

  useEffect(() => {
    if (!userData) return;
    if (userData.total_credits < 9)
      setLeftCredit(['Freshman', 9 - userData.total_credits]);
    else if (userData.total_credits < 27)
      setLeftCredit(['Undergraduate', 27 - userData.total_credits]);
    else if (userData.total_credits < 60)
      setLeftCredit(['Bachelor', 60 - userData.total_credits]);
    else if (userData.total_credits < 120)
      setLeftCredit(['Master', 120 - userData.total_credits]);
    else if (userData.total_credits < 180)
      setLeftCredit(['Doctorate', 180 - userData.total_credits]);
  }, [userData]);

  const loading = loading1 || loading2 || loading3;

  const nav = useNavigate(null);
  const handleLogOut = () => {
    localStorage.removeItem('key');
    nav('/');
    window.location.reload();
  };

  if (loading) return <LoadingPage />;
  else {
    return (
      <Wrapper>
        <FixedLogo type="dark" height="55px" />
        <Space height="175px" />

        <Name>
          <Grade type={userData.grade} height="50px" />
          <Text
            color={brand_blue}
            size="50px"
            weight={700}
            children={userData.nickname}
          />
          <Text size="50px" weight={700} children={'님의 페이지'} />
        </Name>
        <MyUnderline />
        <Space height="30px" />
        <Flex justify="space-between" direction="row">
          <Flex width="auto" direction="row" gap="20px">
            <Text
              size="30px"
              weight={700}
              children={`${userData.total_credits} / 180 - `}
            />
            <Grade type={leftCredit[0]} height="30px" />
            <Text
              size="30px"
              weight={700}
              children={`까지 ${leftCredit[1]}학점 남음`}
            />
          </Flex>

          <FlatButton
            width="100px"
            height="60px"
            bgColor={brand_blue}
            onClick={handleLogOut}
            children={
              <Text
                color={brand_white}
                size="16px"
                weight={700}
                children="로그아웃"
              />
            }
          />
        </Flex>
        <Space height="100px" />
        <BuySection boughtData={boughtData} />
        <Space height="175px" />
        <LikeSection likedData={likedData} />
        <Space height="175px" />
        {userData.is_instructor ? (
          <Flex justify="center">
            <FlatButton
              width="500px"
              height="50px"
              bgColor={brand_blue}
              onClick={toggleModal}
            >
              <Text
                color={brand_white}
                size="20px"
                weight={700}
                children="강좌 추가하기"
              />
            </FlatButton>
            <Space height="175px" />
          </Flex>
        ) : null}
        <Modal
          state={isOpen}
          toggleModal={toggleModal}
          children={<AddForm toggleModal={toggleModal} />}
        />
        <Speaker src={Mypage} />
      </Wrapper>
    );
  }
};

const Name = styled.div`
  display: flex;
  height: fit-content;
  gap: 10px;
  justify-content: center;
`;

export default MyPage;
