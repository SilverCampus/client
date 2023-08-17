import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHashtag,
  faHeart as filledHeart,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { brand_black, brand_blue, brand_white } from '../../utils/palette';

import DefaultImg from '../../assets/images/default_image.jpeg';
import Grade from '../../components/atoms/Grade';
import Text from '../../components/atoms/Text';
import Flex from '../../components/atoms/Flex';

const Details = ({ img = DefaultImg }) => {
  return (
    <SocialCardContainer>
      <MainBar>
        <TextContainer>
          <Flex direction="row" gap="10px" width="200px" justify="start">
            <Grade type={'Professor'} height="40px" />
            <Text children={'갓경호'} weight={700} size="20px" />
          </Flex>
          <Flex direction="row" gap="3px" width="400px">
            <FontAwesomeIcon icon={faHashtag} />
            <Text children={'오공완'} weight={700} size="20px" />
          </Flex>
          <Flex direction="row" gap="3px" width="200px" justify="end">
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: brand_blue }}
              className="fa-2x"
            />
          </Flex>
        </TextContainer>
        <ImageContainer img={img} />
      </MainBar>
      <Sidebar>
        <ContentBox />
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
  height: 200px;
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

const ImageContainer = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
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
