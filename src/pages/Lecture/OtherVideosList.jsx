import React from 'react';
import styled from 'styled-components';

const OtherVideosList = ({ videosnumber, videostitle }) => {
  return (
    <OtherVideosLi>
      <VideosNumber>{videosnumber}강. </VideosNumber>
      <VideosTitle>{videostitle}</VideosTitle>
    </OtherVideosLi>
  );
};

const OtherVideosLi = styled.li`
  list-style: none;
  color: #a1a1a1;
  font-size: 22px;
  font-weight: 600;
  padding: 10px;
`;

const VideosNumber = styled.span``;

const VideosTitle = styled.span``;

export default OtherVideosList;
