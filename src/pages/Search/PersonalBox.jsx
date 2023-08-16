import styled from 'styled-components';
import { brand_black, brand_blue, brand_white } from '../../utils/palette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';
import Flex from '../../components/atoms/Flex';

// Default Image
import defaultImg from '../../assets/images/default_image.jpeg';

// Imported Components
import Text from '../../components/atoms/Text';
import Space from '../../components/atoms/Space';

const heading = {
  left: '구매하신 강의',
  right: '찜하신 강의',
};

const subHeading = {
  left: '가장 최근 시청하신 강의입니다.',
  right: '가장 최근에 찜하신 강의입니다.',
};

const PersonalBox = ({ type, data }) => {
  const nav = useNavigate(null);

  const handleClick = () => {
    if (!data.id) return;
    nav(`/course/${data.id}`);
  };

  if (!data.thumbnail) data.thumbnail = defaultImg;
  return (
    <Container align={type} onClick={handleClick}>
      <Flex direction="row" gap="10px" justify={type}>
        <FontAwesomeIcon
          icon={type === 'left' ? faEye : faHeart}
          className="fa-1x"
          style={{ color: `${brand_blue}` }}
        />
        <Text
          children={heading[type]}
          color={brand_blue}
          size="25px"
          weight={700}
        />
      </Flex>
      <Text children={subHeading[type]} size="20px" weight={500} />
      <Space height="10px" />
      <PersonalBoxContainer type={type}>
        <ImgBox img={data.thumbnail} />
        <DescriptionBox>
          <Text children={data.title} size="25px" weight="700" />
          <Text children={data.description} />
        </DescriptionBox>
      </PersonalBoxContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  color: ${brand_black};
  text-align: ${({ align }) => align};
  cursor: pointer;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 260px;
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
`;

const PersonalBoxContainer = styled.div`
  overflow: hidden;
  width: 350px;
  height: 500px;
  border-radius: ${({ type }) => {
    return type === 'left' ? '5px 150px 100px 100px' : '150px 5px 100px 100px';
  }};
  text-align: ${({ type }) => type};
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.25);
  background-color: ${brand_white};
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
`;

export default PersonalBox;
