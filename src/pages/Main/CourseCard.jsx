import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { BaseUrl } from '../../App';
import axios from 'axios';
import styled from 'styled-components';
import PopButton from '../../components/molecules/PopButton';
import defaultImg from '../../assets/images/default_image.jpeg';
import {
  brand_white,
  brand_darkpurple,
  brand_purple,
} from '../../utils/palette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

// Imported Components
import Text from '../../components/atoms/Text';
import Flex from '../../components/atoms/Flex';
import Tag from '../../components/molecules/Tag';

const PurpleButtonColors = {
  color: brand_white,
  bgColor: brand_purple,
  shadowColor: brand_darkpurple,
};

const CourseCard = ({ data }) => {
  const [isLiked, setIsLiked] = useState(data.is_liked);
  const nav = useNavigate(null);

  const handleLikeCourse = async (e) => {
    e.stopPropagation();
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
      course_id: data.id,
    };
    let url = BaseUrl + '/api/course-like/';

    try {
      const res = await axios.post(url, body, config);
      setIsLiked(!isLiked);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CourseCardContainer onClick={() => nav(`/course/${data.id}`)}>
      <div>
        <ThumbNail img={data.thumbnail} />
        <Details>
          <Flex direction="row" width="auto" gap="13px" justify="start">
            <Tag type={data.category} />
            <Tag type={`학점${data.credits}`} text={`${data.credits}학점`} />
          </Flex>
          <Text children={data.title} size="23px" weight={700} />
          <Text children={data.instructor} size="18px" align="right" />
        </Details>
      </div>
      {isLiked !== undefined ? (
        <FixButton
          width="50px"
          height="50px"
          colors={PurpleButtonColors}
          children={<FontAwesomeIcon icon={faHeart} />}
          active={isLiked}
          onClick={handleLikeCourse}
        />
      ) : null}
    </CourseCardContainer>
  );
};

const CourseCardContainer = styled.div`
  position: relative;
  width: 300px;
  height: 380px;
  border-radius: 5px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.4);
  background-color: white;
  cursor: pointer;
`;

const ThumbNail = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 13px 30px;
`;

const FixButton = styled(PopButton)`
  position: absolute;
  top: 20px;
  right: 20px;

  box-shadow: none;
  &.isActive {
    box-shadow: none;
    cursor: pointer;
  }
`;

export default CourseCard;
