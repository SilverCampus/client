import React from 'react';
import styled from 'styled-components';
import OtherVideosList from './OtherVideosList';
import VideoTitleContainer from './VideoTitleDiv';

const PlayPage = () => {
  return (
    <PlayPageContainer>
      <PlayPageDiv>
        <PlayVideo></PlayVideo>
        <PlayLectureContainer>
          <CategoryTag>운동</CategoryTag>
          <PlayLectureTitle>
            비전공자도 쉽게 배워 바로 써먹는 실무 활용 SQL
          </PlayLectureTitle>
          <VideoTitleContainer
            videonumber={'1'}
            videotitle={'데이터베이스'}
          ></VideoTitleContainer>
        </PlayLectureContainer>
        <OtherVideosContainer>
          <OtherVideosList
            videosnumber={'2'}
            videostitle={'두 번째 강의'}
          ></OtherVideosList>
          <OtherVideosList
            videosnumber={'3'}
            videostitle={'세 번째 강의'}
          ></OtherVideosList>
          <OtherVideosList
            videosnumber={'4'}
            videostitle={'네 번째 강의'}
          ></OtherVideosList>
          <OtherVideosList
            videosnumber={'5'}
            videostitle={'다섯 번째 강의'}
          ></OtherVideosList>
          <OtherVideosList
            videosnumber={'6'}
            videostitle={'여섯 번째 강의'}
          ></OtherVideosList>
          <OtherVideosList
            videosnumber={'7'}
            videostitle={'마지막 강의'}
          ></OtherVideosList>
        </OtherVideosContainer>
      </PlayPageDiv>
    </PlayPageContainer>
  );
};

const PlayPageContainer = styled.div`
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
`;

const PlayPageDiv = styled.div`
  width: 1050px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 10px 150px;
  font-family: SUITE-Regular;
  font-size: 20px;
  font-weight: 500;
  color: #322653;
  font-style: normal;
  line-height: normal;
  background-color: white;
`;

const PlayVideo = styled.div`
  width: 1000px;
  height: 562.5px;
  background-color: #eee;
  border: 1px solid #dbdbdb;
  margin: 10px;
`;

const PlayLectureContainer = styled.div`
  width: 1000px;
  padding: 10px 44px;
  border-left: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
  margin-top: 30px;
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

const PlayLectureTitle = styled.div`
  margin: 10px 0 20px 0;
`;

const OtherVideosContainer = styled.ul`
  width: 1000px;
  padding: 0px 44px;
  border-left: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
  margin-top: 30px;
`;

export default PlayPage;
