import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { BaseUrl } from '../../App';

import { brand_black, BlueButtonColors } from '../../utils/palette';
import { useSearchParams } from 'react-router-dom';

import Text from '../../components/atoms/Text';
import Wrapper from '../../components/atoms/Wrapper';
import Space from '../../components/atoms/Space';
import Flex from '../../components/atoms/Flex';
import { FixedLogo } from '../Search/SearchSection';
import PopButton from '../../components/molecules/PopButton';
import TitleVideosList from './TitleVideoList';
import OtherVideosList from './OtherVideoList';
import LoadingPage from '../../components/templates/LoadingPage';
import Tag from '../../components/molecules/Tag';

const LecturePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = Number(searchParams.get('courseId'));
  const order = Number(searchParams.get('order'));
  const title = searchParams.get('courseName');
  const category = searchParams.get('category');
  const credit = searchParams.get('credit');

  const [currentVideo, setCurrentVideo] = useState(null);
  const [restVideo, setRestVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  const [isComplete, setComplete] = useState(
    searchParams.get('complete') === 'true' ? true : false
  );

  const getData = async () => {
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
    let url =
      BaseUrl +
      `/api/get-course-videos/?course_id=${id}&order_in_course=${order}`;

    try {
      const res = await axios.get(url, config);
      setCurrentVideo(res.data.current_video);
      setRestVideo(res.data.else_videos);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const completeClick = async () => {
    if (isComplete) return;

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
    const body = {
      course_id: id,
      order_in_course: order,
    };
    let url = BaseUrl + '/api/video-completion/';

    try {
      const res = await axios.post(url, body, config);
      setComplete(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) return <LoadingPage />;
  else
    return (
      <Wrapper>
        <FixedLogo type="dark" height="55px" />
        <LectureSection>
          <Space height="175px" />
          <VideoSection src={currentVideo.video_file} controls />
          <Space height="50px" />
          <LectureHeader>
            <Flex width="auto" align="start" gap="10px">
              <Flex direction="row" width="auto" gap="13px">
                <Tag type={category} />
                <Tag type={`학점${credit}`} text={`${credit}학점`} />
              </Flex>
              <Text size="20px" children={title} />
            </Flex>
            <PopButton
              colors={BlueButtonColors}
              width="200px"
              height="50px"
              active={isComplete}
              onClick={completeClick}
              children={
                <Text
                  size="20px"
                  children={isComplete ? '학습 완료' : '학습 완료하기'}
                />
              }
            />
          </LectureHeader>
          <TitleVideosList
            num={currentVideo.order_in_course}
            title={currentVideo.title}
          />
          <Space height="50px" />

          <VideoList>
            {restVideo.map((it, idx) => (
              <OtherVideosList
                key={idx}
                data={it}
                courseName={title}
                category={category}
                credit={credit}
              />
            ))}
          </VideoList>
        </LectureSection>
        <Space height="175px" />
      </Wrapper>
    );
};

const LectureSection = styled.div`
  width: 1050px;
  color: ${brand_black};
  margin: 0 auto;
`;

const VideoSection = styled.video`
  width: 100%;
  height: 550px;
  background-color: #eee;
  border: 1px solid #dbdbdb;
`;

const LectureHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 20px 30px;
  border-left: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
  color: ${brand_black};
`;

const VideoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  padding: 20px 30px;
  border-left: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
`;

export default LecturePage;
