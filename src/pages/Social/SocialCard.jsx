import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as filledHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { brand_black, brand_blue, brand_white } from '../../utils/palette';

import DefaultImg from '../../assets/images/default_image.jpeg';
import Grade from '../../components/atoms/Grade';
import Text from '../../components/atoms/Text';
import Flex from '../../components/atoms/Flex';

const SocialCard = ({ img = DefaultImg, toggleModal }) => {
  //   if (!data.img) data.img = DefaultImg;

  return (
    <SocialCardContainer>
      <TextContainer>
        <Flex direction="row" gap="10px" width="auto">
          <Grade type={'Professor'} height="40px" />
          <Text children={'갓경호'} weight={700} size="20px" />
        </Flex>
        <FontAwesomeIcon
          icon={faHeart}
          style={{ color: brand_blue }}
          className="fa-2x"
        />
      </TextContainer>
      <ImageContainer img={img} onClick={() => toggleModal()} />
    </SocialCardContainer>
  );
};

const SocialCardContainer = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 20px;
  overflow: hidden;
  color: ${brand_black};

  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.25));
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
  background-color: ${brand_white};
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  cursor: pointer;

  filter: brightness(80%);
  &:hover {
    filter: brightness(100%);
  }
`;

export default SocialCard;
