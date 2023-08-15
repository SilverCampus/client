import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { BaseUrl } from '../../App';

import { brand_black, brand_white } from '../../utils/palette';
import { BlueButtonColors } from '../Search/TopicSection';
import { useSearchParams } from 'react-router-dom';

import Text from '../../components/atoms/Text';
import Wrapper from '../../components/atoms/Wrapper';
import Space from '../../components/atoms/Space';
import Flex from '../../components/atoms/Flex';
import { FixedLogo } from '../Search/SearchSection';
import PopButton from '../../components/molecules/PopButton';

const OtherVideosList = ({ num, title }) => {
  return (
    <li>
      <Flex direction="row" justify="left" width="auto" gap="10px">
        <Text size="22px" weight={500} color="#a1a1a1" children={`${num}강.`} />
        <Text size="22px" weight={500} color="#a1a1a1" children={title} />
      </Flex>
    </li>
  );
};

const TitleVideosList = ({ num, title }) => {
  return (
    <TitleVideoDiv>
      <Flex direction="row" justify="left" width="auto" gap="10px">
        <Text
          size="40px"
          weight={700}
          color={brand_black}
          children={`${num}강.`}
        />
        <Text size="40px" weight={700} color={brand_black} children={title} />
      </Flex>
    </TitleVideoDiv>
  );
};

const LecturePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isComplete, setComplete] = useState(searchParams.get('complete'));
  const videoSrc = searchParams.get('video');
  const id = searchParams.get('courseId');
  const order = searchParams.get('order');

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
      alert('API Error : ');
    }
  };

  return (
    <Wrapper>
      <FixedLogo type="dark" height="55px" />
      <LectureSection>
        <Space height="175px" />
        <VideoSection
          src={videoSrc}
          controls
          onClick={() => console.log('a')}
        />
        <Space height="50px" />
        <LectureHeader>
          <Flex width="auto" align="start" gap="10px">
            <CategoryTag children="운동" />
            <Text
              size="20px"
              children="비전공자도 쉽게 배워 바로 써먹는 실무 활용 SQL"
            />
          </Flex>
          <PopButton colors={BlueButtonColors} width="200px" height="50px">
            <Text
              size="20px"
              color={brand_white}
              children="학습 완료하기"
              active={isComplete}
              onClick={completeClick}
            />
          </PopButton>
        </LectureHeader>
        <TitleVideosList num={1} title="첫 번째 강의" />
        <Space height="50px" />

        <VideoList>
          <OtherVideosList num={2} title="두 번째 강의" />
          <OtherVideosList num={2} title="두 번째 강의" />
          <OtherVideosList num={2} title="두 번째 강의" />
          <OtherVideosList num={2} title="두 번째 강의" />
          <OtherVideosList num={2} title="두 번째 강의" />
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

const TitleVideoDiv = styled.div`
  width: 100%;
  padding: 20px 30px;
  border-left: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
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

const CategoryTag = styled.div`
  display: flex;
  width: 72px;
  height: 28px;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  background: #1fc589;
  color: white;
  font-size: 14px;
  font-weight: 500;
`;

export default LecturePage;
