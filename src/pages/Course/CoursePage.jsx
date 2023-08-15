import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { brand_black } from '../../utils/palette';
import { BlueButtonColors } from '../Search/TopicSection';
import { BaseUrl } from '../../App';

import Wrapper from '../../components/atoms/Wrapper';
import Space from '../../components/atoms/Space';
import Heading from '../../components/molecules/Heading';
import { FixedLogo } from '../Search/SearchSection';
import MyUnderline from '../../components/atoms/MyUnderline';
import Flex from '../../components/atoms/Flex';
import Text from '../../components/atoms/Text';
import PopButton from '../../components/molecules/PopButton';
import Curriculum from './Curriculum';

const Course = () => {
  const { id } = useParams();

  const [courseData, setCourseData] = useState(null);
  const [loading1, setLoading1] = useState(true);

  const [videoData, setVideoData] = useState(null);
  const [loading2, setLoading2] = useState(true);

  const [learnRate, setLearnRate] = useState(null);
  const [loading3, setLoading3] = useState(true);

  const getCourseData = async () => {
    let url = BaseUrl + `/api/basic-cource-info/?course_id=${id}`;

    try {
      const res = await axios.get(url);
      setCourseData(res.data);
      setLoading1(false);
    } catch (err) {
      alert('API Error');
    }
  };

  const getVideoData = async () => {
    let url = BaseUrl + `/api/course/${id}/video/`;

    try {
      const res = await axios.get(url);
      setVideoData(res.data);
      setLoading2(false);
    } catch (err) {
      alert('API Error');
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
    let url = BaseUrl + `/api/get-course-list-completion-rate/?course_id=${id}`;

    try {
      const res = await axios.get(url, config);
      setLearnRate(res.data.completion_rate);
      setVideoData(res.data.videos);
      setLoading3(false);
    } catch (err) {
      setLoading3(false);
    }
  };

  useEffect(() => {
    getCourseData();
    getVideoData();
    getBoughtData();
  }, []);

  const loading = loading1 || loading2 || loading3;

  return (
    <Wrapper>
      <FixedLogo type="dark" height="55px" />
      {loading ? (
        '로딩중'
      ) : (
        <CourseSection>
          <Space height="175px" />
          <Heading children={courseData.title} />
          <MyUnderline />
          <Thumbnail src={courseData.thumbnail} />

          <Flex direction="row" align="center">
            <Text children="강의자 | 김경수" />
            <PopButton colors={BlueButtonColors} children={'하트'} />
            <PopButton
              colors={BlueButtonColors}
              children={learnRate ? `강의률 ${learnRate}` : '강의 구매하기'}
              active={learnRate}
            />
          </Flex>
          <Space height="175px" />

          <Heading children="강의 소개" />
          <MyUnderline />
          <Text children={courseData.description} />
          <Space height="175px" />

          <Heading children="커리큘럼" />
          <MyUnderline />
          {videoData.map((it) => (
            <Curriculum
              key={it.id}
              courseId={it.course}
              order={it.order_in_course}
              children={it.title}
              isComplete={it.completed}
              link={it.video_file}
            />
          ))}
          <Space height="175px" />

          <Heading children={'QnA'} />
          <MyUnderline />
          <QnADiv children={'4강 질문입니다'} />
          <Space height="175px" />
        </CourseSection>
      )}
    </Wrapper>
  );
};

const CourseSection = styled.div`
  width: 1050px;
  color: ${brand_black};
  margin: 0 auto;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 550px;
  background-color: #eee;
  border: 1px solid #dbdbdb;
`;

const QnADiv = styled.button`
  width: 100px;
  height: 50px;
`;

export default Course;
