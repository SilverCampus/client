import React from 'react';
import Wrapper from '../../components/atoms/Wrapper';
import { FixedLogo } from '../Search/SearchSection';
import Space from '../../components/atoms/Space';
import Heading from '../../components/molecules/Heading';
import SocialCard from './SocialCard';
import MyUnderline from '../../components/atoms/MyUnderline';
import Flex from '../../components/atoms/Flex';

import Modal from '../Modal/Modal';
import useModal from '../Modal/useModal';
import Details from './Details';

const SocialPage = () => {
  const [isOpen, toggleModal] = useModal();

  // const getApiData = async () => {

  //     let url = BaseUrl + `/social/posts`;

  //     try {
  //       const res = await axios.get(url, config);

  //       // let newData = [];
  //       // let arr = [];

  //       // res.data.forEach((it, idx) => {
  //       //   arr.push(it);
  //       //   if ((idx + 1) % 3 === 0) {
  //       //     newData.push([...arr]);
  //       //     arr = [];
  //       //   }
  //       // });

  //       // if (arr.length > 0) {
  //       //   newData.push([...arr]);
  //       // }
  //       setData(newData);
  //       setLoading(false);
  //     } catch (err) {
  //       if (err.response && err.response.status === 400) alert('검색 한 자 이상');
  //       else if (err.response && err.response.status === 404)
  //         alert('검색 결과 없음');
  //       else console.log('getApiData Error', err);
  //     }
  //   };

  return (
    <Wrapper>
      <FixedLogo type="dark" height="55px" />
      <Space height="175px" />
      <Heading size="50px" children="청년광장" />
      <MyUnderline />
      <Space height="175px" />

      <Flex width="1000px">
        <SocialCard toggleModal={toggleModal} />
      </Flex>
      <Space height="175px" />
      <Modal state={isOpen} toggleModal={toggleModal} children={<Details />} />
    </Wrapper>
  );
};

export default SocialPage;
