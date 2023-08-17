import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { brand_black } from '../../utils/palette';
import { BlueButtonColors } from '../Search/TopicSection';
import { BaseUrl } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import Wrapper from '../../components/atoms/Wrapper';
import Space from '../../components/atoms/Space';
import Heading from '../../components/molecules/Heading';
import { FixedLogo } from '../Search/SearchSection';
import MyUnderline from '../../components/atoms/MyUnderline';
import Flex from '../../components/atoms/Flex';
import Text from '../../components/atoms/Text';
import PopButton from '../../components/molecules/PopButton';
import Curriculum from './Curriculum';
import Question from './Question';
import LoadingPage from '../../components/templates/LoadingPage';
import Navigation from '../../components/organisms/Navigation';
import Speaker from '../../components/organisms/Speaker';

const CoursePage = () => {
  const { id } = useParams();

  const [courseData, setCourseData] = useState(null);
  const [isInstructor, setIsIntructor] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [loading1, setLoading1] = useState(true);

  const [videoData, setVideoData] = useState(null);
  const [loading2, setLoading2] = useState(true);

  const [questionData, setQuestionData] = useState(null);
  const [loading4, setLoading4] = useState(true);

  const [learnRate, setLearnRate] = useState(null); // LearnRate - null이면 수강안함
  const [loading3, setLoading3] = useState(true);

  const getCourseData = async () => {
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
    let url = BaseUrl + `/api/basic-cource-info/?course_id=${id}`;

    try {
      const res = await axios.get(url, config);
      setCourseData(res.data);
      setIsIntructor(res.data.is_this_instructor);
      setIsLiked(res.data.is_liked);
      setLoading1(false);
    } catch (err) {
      console.log('getCourseDataError : ', err);
    }
  };

  const getVideoData = async () => {
    let url = BaseUrl + `/api/course/${id}/video/`;

    try {
      const res = await axios.get(url);
      setVideoData(res.data);
      setLoading2(false);
    } catch (err) {
      console.log('getVideDataError : ', err);
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
      console.log('getVideoData', err);
      setLoading3(false); // Did Not Buy
    }
  };

  const getQuestionData = async () => {
    let url = BaseUrl + `/api/get-question-list/?course_id=${id}`;

    try {
      const res = await axios.get(url);
      setQuestionData(res.data);
      setLoading4(false);
    } catch (err) {
      console.log('getQuestionDataError : ', err);
    }
  };

  useEffect(() => {
    getCourseData();
    getVideoData();
    getBoughtData();
    getQuestionData();
  }, []);

  const loading = loading1 || loading2 || loading3 || loading4;

  const handleBuyCourse = async () => {
    if (learnRate !== null) return;
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
    };
    let url = BaseUrl + '/api/course-enroll/';

    try {
      const res = await axios.post(url, body, config);
      setLearnRate(0);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLikeCourse = async () => {
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
    };
    let url = BaseUrl + '/api/course-like/';

    try {
      const res = await axios.post(url, body, config);
      setIsLiked(!isLiked);
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) return <LoadingPage />;
  else
    return (
      <Wrapper>
        <FixedLogo type="dark" height="55px" />

        <CourseSection>
          <Space height="175px" />
          <Heading children={courseData.title} />
          <MyUnderline />
          <Thumbnail src={courseData.thumbnail} />

          <Flex direction="row" align="center">
            <Text children="강의자 | 김경수" />
            <PopButton
              width="50px"
              height="50px"
              colors={BlueButtonColors}
              children={<FontAwesomeIcon icon={faHeart} />}
              active={isLiked}
              onClick={handleLikeCourse}
            />
            <PopButton
              width="200px"
              height="100px"
              colors={BlueButtonColors}
              children={
                learnRate !== null ? `강의률 ${learnRate}` : '강의 구매하기'
              }
              active={learnRate !== null}
              onClick={handleBuyCourse}
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
            <Curriculum key={it.id} data={it} />
          ))}
          <Space height="175px" />

          <Heading children={'QnA'} />
          <MyUnderline />
          {/* questionData && questionData.map((it) => <Question key={it.id} data={it} />) 이건 왜 안되지..*/}
          {Array.isArray(questionData) &&
            questionData.map((it) => <Question key={it.id} data={it} />)}
          <Space height="175px" />
        </CourseSection>
        <Navigation />
        <Speaker />
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

export default CoursePage;
