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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, toggleModal] = useModal();

  const getSocialData = async () => {
    let url = BaseUrl + `/social/board-posts/`;
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
      else if (err.response && err.response.status === 404)
        alert('검색 결과 없음');
      else console.log('getApiData Error', err);
    }
  };

  console.log(data);
  useEffect(() => {
    getSocialData();
  }, []);

  if (loading) return <LoadingPage />;
  else
    return (
      <Wrapper>
        <div style={{ position: 'relative' }}>
          <FixedLogo type="dark" height="55px" />
          <Space height="175px" />
          <Heading size="50px" children="청년광장" />
          <MyUnderline />
          <RightButton
            width="50px"
            height="50px"
            bgColor={brand_blue}
            onClick={toggleModal}
            children={<FontAwesomeIcon icon={faPlus} className="fa-2x" />}
          />
          <Space height="175px" />

          {data.map((it, idx) => (
            <>
              <Flex key={idx} direction="row" gap="30px">
                {it.map((itt, idxx) => {
                  return <SocialCard key={idxx} data={itt} />;
                })}
              </Flex>
              <Space height="100px" />
            </>
          ))}
          <Flex width="1000px"></Flex>
          <Space height="175px" />
          <Modal
            state={isOpen}
            toggleModal={toggleModal}
            children={<PostForm toggleModal={toggleModal} />}
          />
        </div>
      </Wrapper>
    );
};

export default SocialPage;
