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
import Modal from '../Modal/Modal';
import useModal from '../Modal/useModal';
import Details from './Details';

const SocialCard = ({ data }) => {
  const [isOpen, toggleModal] = useModal();
  const icon = data.is_liked ? filledHeart : faHeart;

  return (
    <SocialCardContainer>
      <TextContainer>
        <Flex direction="row" gap="10px" width="auto">
          <Grade type={data.user_grade} height="35px" />
          <Text children={data.user_name} weight={700} size="20px" />
        </Flex>
        <FontAwesomeIcon
          icon={icon}
          style={{ color: brand_blue, cursor: 'pointer' }}
          className="fa-2x"
        />
      </TextContainer>
      <ImageContainer
        img={data.video_thumbnail}
        onClick={() => toggleModal()}
      />
      <Modal
        state={isOpen}
        toggleModal={toggleModal}
        children={<Details data={data} />}
      />
    </SocialCardContainer>
  );
};

const SocialCardContainer = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 20px;
  overflow: hidden;
  color: ${brand_black};

  border: 1px solid #ddd;
  border-bottom: 3px solid #555;

  // &:hover {
  //   animation: bounce 3s infinite ease-in-out;
  // }
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
`;

export default SocialCard;
