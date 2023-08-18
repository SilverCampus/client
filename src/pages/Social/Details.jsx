import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHashtag,
  faHeart as filledHeart,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  brand_black,
  brand_blue,
  brand_darkblue,
  brand_white,
} from '../../utils/palette';
import { useState } from 'react';

import DefaultImg from '../../assets/images/default_image.jpeg';
import Grade from '../../components/atoms/Grade';
import Text from '../../components/atoms/Text';
import Flex from '../../components/atoms/Flex';

const Details = ({ data }) => {
  const [liked, setLiked] = useState(data.is_liked);

  return (
    <SocialCardContainer>
      <MainBar>
        <TextContainer>
          <Flex direction="row" gap="10px" width="200px" justify="start">
            <Grade type={data.user_grade} height="40px" />
            <Text children={data.user_name} weight={700} size="20px" />
          </Flex>
          <Flex direction="row" gap="3px" width="400px">
            <FontAwesomeIcon icon={faHashtag} />
            <Text children={data.hashtag_name} weight={700} size="20px" />
          </Flex>
          <Flex direction="row" gap="3px" width="200px" justify="end">
            <FontAwesomeIcon
              icon={liked ? filledHeart : faHeart}
              style={{ color: brand_blue }}
              className="fa-2x"
            />
          </Flex>
        </TextContainer>
        <ImageContainer src={data.video} controls />
      </MainBar>
      <Sidebar>
        <ContentBox>{data.content}</ContentBox>
        <CommentBox>
          <Write placeholder="댓글 쓰기" />
        </CommentBox>
      </Sidebar>
    </SocialCardContainer>
  );
};

const MainBar = styled.div`
overflow: hidden;
border-radius: 20px;
    width 600px;
`;
const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  width: 400px;
`;

const ContentBox = styled.div`
  word-wrap: break-word;
  font-size: 16px;
  font-family: GmarketSansMedium;
  font-weight: 500;
  overflow: scroll;
  height: 200px;
  padding: 20px;
  border-radius: 20px;
  background-color: white;
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 430px;
  padding: 20px;
  border-radius: 20px;
  background-color: white;
`;

const SocialCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  width: fit-content;
  height: fit-content;
  color: ${brand_black};
  overflow: hidden;

  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.25));
`;

const TextContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
  background-color: ${brand_white};
`;

const ImageContainer = styled.video`
  width: 100%;
  height: 600px;
  background-color: ${brand_black};
`;

const Write = styled.textarea`
  width: 90%;
  heigth: 30%;

  border: 1px solid #b0b0b0;
  border-radius: 5px;
  padding: 10px;
  resize: none;

  &:focus {
    outline: none;
  }
`;

export default Details;
