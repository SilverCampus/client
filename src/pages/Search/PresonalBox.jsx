import styled from 'styled-components';
import { brand_black } from '../../utils/palette';

// Default Image
import defaultImg from '../../assets/images/default_image.jpeg';

// Imported Components
import Text from '../../components/atoms/Text';

const PresonalBox = ({ type, img = defaultImg, heading, subHeading }) => {
  console.log(img === defaultImg);
  return (
    <Container>
      <Text children={heading} color={brand_black} size={20} weight={700} />
      <Text children={subHeading} color={brand_black} size={16} weight={500} />
      <PersonalBoxContainer type={type}>
        <ImgBox img={img} />
      </PersonalBoxContainer>
    </Container>
  );
};

const Container = styled.div``;

const ImgBox = styled.div`
  width: 100%;
  height: 100px;
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
`;

export default PresonalBox;
