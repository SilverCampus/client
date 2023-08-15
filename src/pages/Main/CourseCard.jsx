import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import defaultImg from '../../assets/images/default_image.jpeg';

// Imported Components
import Text from '../../components/atoms/Text';

const CourseCard = ({
  id,
  img = defaultImg,
  title = 'default',
  description = 'default',
}) => {
  const nav = useNavigate(null);

  return (
    <CourseCardContainer onClick={() => nav(`/course/${id}`)}>
      <ThumbNail img={img} />
      <Text>{title}</Text>
      <Text>{description}</Text>
    </CourseCardContainer>
  );
};

const CourseCardContainer = styled.div`
  width: 270px;
  height: 330px;
  border-radius: 5px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.4);
  cursor: pointer;
`;

const ThumbNail = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
`;

export default CourseCard;
