import React from 'react';
import styled from 'styled-components';

const VideoTitleDiv = ({ videonumber, videotitle }) => {
  return (
    <VideoTitleContainer>
      <VideoNumber>{videonumber}강. </VideoNumber>
      <VideoTitle>{videotitle}</VideoTitle>
    </VideoTitleContainer>
  );
};

const VideoTitleContainer = styled.div`
  display: flex;
  font-size: 40px;
  font-weight: 700;
`;

const VideoNumber = styled.span``;

const VideoTitle = styled.span``;

export default VideoTitleDiv;
