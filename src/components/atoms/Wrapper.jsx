import styled from 'styled-components';

const Wrapper = ({ img, bgColor, children, linear }) => {
  return (
    <StyledWrapper img={img} bgColor={bgColor} linear={linear}>
      <StyledContainer>{children}</StyledContainer>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  height: auto;

  background-color: ${({ bgColor }) => bgColor};
  background-image: url(${({ img }) => img});
  background: ${({ linear }) => linear};
  background-position: center;
  background-size: cover;
`;

const StyledContainer = styled.div`
  overflow: hidden;
  max-width: 1280px;
  margin: 0 auto;
`;

export default Wrapper;
