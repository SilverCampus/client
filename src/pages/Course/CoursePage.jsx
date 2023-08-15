import styled from 'styled-components';
import { useState } from 'react';
import { brand_black } from '../../utils/palette';
import { BlueButtonColors } from '../Search/TopicSection';

import Wrapper from '../../components/atoms/Wrapper';
import Space from '../../components/atoms/Space';
import Heading from '../../components/molecules/Heading';
import { FixedLogo } from '../Search/SearchSection';
import MyUnderline from '../../components/atoms/MyUnderline';
import Flex from '../../components/atoms/Flex';
import Text from '../../components/atoms/Text';
import PopButton from '../../components/molecules/PopButton';

const Course = () => {
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <Wrapper>
      <FixedLogo type="dark" height="55px" />
      {
        <CourseSection>
          <Space height="175px" />
          <Heading
            children={'비전공자도 쉽게 배워 바로 써먹는 실무 활용 SQL'}
          />
          <MyUnderline />
          <VideoSection />
          <Flex direction="row" align="center">
            <Text children="강의자 | 김경수" />
            <PopButton colors={BlueButtonColors} children={'하트'} />
            <PopButton colors={BlueButtonColors} children={'바로 구매하기'} />
          </Flex>
          <Space height="175px" />

          <Heading children="강의 소개" />
          <MyUnderline />
          <Text>description</Text>
          <Space height="175px" />

          <Heading children="커리큘럼" />
          <MyUnderline />
          <LectureDiv children="첫번째 강의" />
          <Space height="175px" />

          <Heading children={'QnA'} />
          <MyUnderline />
          <QnADiv children={'4강 질문입니다'} />
          <Space height="175px" />
        </CourseSection>
      }
    </Wrapper>
  );
};

const CourseSection = styled.div`
  width: 1050px;
  color: ${brand_black};
  margin: 0 auto;
`;

const VideoSection = styled.div`
  width: 100%;
  height: 550px;
  background-color: #eee;
  border: 1px solid #dbdbdb;
`;

const LectureDiv = styled.button`
  width: 100px;
  height: 50px;
`;

const QnADiv = styled.button`
  width: 100px;
  height: 50px;
`;

export default Course;
