import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  brand_black,
  BlueButtonColors,
  PurpleButtonColors,
} from '../../utils/palette';
import { BaseUrl } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Element } from 'react-scroll';

import Wrapper from '../../components/atoms/Wrapper';
import Space from '../../components/atoms/Space';
import Heading from '../../components/molecules/Heading';
import { FixedLogo } from '../Search/SearchSection';
import MyUnderline from '../../components/atoms/MyUnderline';
import Flex from '../../components/atoms/Flex';
import Text from '../../components/atoms/Text';
import PopButton from '../../components/molecules/PopButton';
import LoadingPage from '../../components/templates/LoadingPage';
import Tag from '../../components/molecules/Tag';
import DescriptionSection from './DescriptionSection';
import CurriculumSection from './CurriculumSection';
import QuestionSection from './QuestionSection';

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
          <Heading size="62px" weight={700} children={courseData.title} />
          <MyUnderline />
          <Space height="50px" />
          <Thumbnail src={courseData.thumbnail} />
          <Space height="50px" />
          <Flex direction="row" align="center" justify="space-between">
            <Flex width="auto" align="start" gap="10px">
              <Flex direction="row" width="auto" gap="13px">
                <Tag type={courseData.category_name} />
                <Tag
                  type={`학점${courseData.credits}`}
                  text={`${courseData.credits}학점`}
                />
              </Flex>
              <Text
                size="40px"
                weight={700}
                children={`강의자 | ${courseData.instructor}`}
              />
            </Flex>
            <Flex direction="row" width="auto" align="center" gap="20px">
              <PopButton
                width="85px"
                height="85px"
                colors={PurpleButtonColors}
                children={<FontAwesomeIcon icon={faHeart} className="fa-2x" />}
                active={isLiked}
                onClick={handleLikeCourse}
              />
              <PopButton
                width="275px"
                height="85px"
                colors={BlueButtonColors}
                children={
                  <Text
                    size="35px"
                    weight={700}
                    children={
                      learnRate !== null
                        ? `강의진행률 ${learnRate}%`
                        : '강의 구매하기'
                    }
                  />
                }
                active={learnRate !== null}
                onClick={handleBuyCourse}
              />
            </Flex>
          </Flex>
          <Space height="175px" />
          <Element
            name="section1"
            className="element"
            children={
              <DescriptionSection
                courseData={courseData}
                isInstructor={isInstructor}
              />
            }
          />
          <Space height="175px" />

          <Element
            name="section2"
            className="element"
            children={
              <CurriculumSection
                videoData={videoData}
                isInstructor={isInstructor}
                courseId={courseData.id}
                courseName={courseData.title}
                category={courseData.category_name}
                credit={courseData.credits}
              />
            }
          />
          <Space height="175px" />
          <Element
            name="section3"
            className="element"
            children={
              <QuestionSection
                questionData={questionData}
                learnRate={learnRate}
                courseId={courseData.id}
              />
            }
          />
          <Space height="175px" />
        </CourseSection>
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
