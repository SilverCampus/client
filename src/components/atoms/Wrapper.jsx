import styled from 'styled-components';
import { brand_white } from '../../utils/palette';

const Wrapper = ({ img, bgColor = brand_white, children }) => {
  return (
    <StyledWrapper img={img} bgColor={brand_white}>
      <StyledContainer>{children}</StyledContainer>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  height: auto;

  background-color: ${({ bgColor }) => bgColor};
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
`;

const StyledContainer = styled.div`
  overflow: hidden;
  max-width: 1280px;
  margin: 0 auto;
`;

export default Wrapper;
