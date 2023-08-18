import React, { useEffect } from 'react';
import Wrapper from '../../components/atoms/Wrapper';
import { FixedLogo } from '../Search/SearchSection';
import Space from '../../components/atoms/Space';
import Heading from '../../components/molecules/Heading';
import SocialCard from './SocialCard';
import MyUnderline from '../../components/atoms/MyUnderline';
import Flex from '../../components/atoms/Flex';
import { RightButton } from '../Course/DescriptionSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brand_blue } from '../../utils/palette';
import { useState } from 'react';
import { BaseUrl } from '../../App';
import axios from 'axios';

import Modal from '../Modal/Modal';
import useModal from '../Modal/useModal';
import Details from './Details';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PostForm from './PostForm';
import LoadingPage from '../../components/templates/LoadingPage';

const SocialPage = () => {
  const [data, setData] = useState(null);
  console.log(data);
  const [loading, setLoading] = useState(true);
  const [isOpen, toggleModal] = useModal();
  const [isOpen2, setIsOpen2] = useState(false);
  const toggleModal2 = () => {
    setIsOpen2(!isOpen2);
  };

  const getSocialData = async () => {
    let url = BaseUrl + `/social/posts`;

    try {
      const res = await axios.get(url);

      // let newData = [];
      // let arr = [];

      // res.data.forEach((it, idx) => {
      //   arr.push(it);
      //   if ((idx + 1) % 3 === 0) {
      //     newData.push([...arr]);
      //     arr = [];
      //   }
      // });

      // if (arr.length > 0) {
      //   newData.push([...arr]);
      // }

      // setData(newData);
      setData(res.data);
      setLoading(false);
    } catch (err) {
      if (err.response && err.response.status === 400) alert('검색 한 자 이상');
      else if (err.response && err.response.status === 404)
        alert('검색 결과 없음');
      else console.log('getApiData Error', err);
    }
  };

  useEffect(() => {
    getSocialData();
  }, []);

  if (loading) return <LoadingPage />;
  else
    return (
      <Wrapper>
        <FixedLogo type="dark" height="55px" />
        <Space height="175px" />
        <Heading size="50px" children="청년광장" />
        <MyUnderline />
        <RightButton
          width="50px"
          height="50px"
          bgColor={brand_blue}
          onClick={toggleModal2}
          children={<FontAwesomeIcon icon={faPlus} className="fa-2x" />}
        />
        <Space height="175px" />

        <Flex width="1000px">
          <SocialCard toggleModal={toggleModal} />
        </Flex>
        <Space height="175px" />
        <Modal
          state={isOpen}
          toggleModal={toggleModal}
          children={<Details />}
        />
        <Modal
          state={isOpen2}
          toggleModal={toggleModal2}
          children={<PostForm />}
        />
      </Wrapper>
    );
};

export default SocialPage;
