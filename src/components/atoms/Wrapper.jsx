import styled, { keyframes } from 'styled-components';

const Wrapper = ({ img, bgColor, children, linear, className }) => {
  className += img ? ' move' : '';

  return (
    <StyledWrapper
      img={img}
      bgColor={bgColor}
      linear={linear}
      className={className}
    >
      <StyledContainer>{children}</StyledContainer>
    </StyledWrapper>
  );
};

const BackgroundAnimation = keyframes`
from {
  background-position: 0 center;
}
to {
  background-position: 3840px center;
}`;

const StyledWrapper = styled.div`
  width: 100%;
  height: auto;

  background-color: ${({ bgColor }) => bgColor};
  background-image: url(${({ img }) => img});
  background: ${({ linear }) => linear};
  background-position: center;
  background-size: cover;

  &.move {
    animation: ${BackgroundAnimation} 100s linear infinite;
  }
`;

const StyledContainer = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 1280px;
  margin: 0 auto;
`;

export default Wrapper;
