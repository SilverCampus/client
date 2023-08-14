import styled from 'styled-components';
import Text from '../atoms/Text';

const Heading = ({ color, size, children, className }) => {
  return (
    <HeadingContainer className={className}>
      <Text children={children} color={color} size={size} weight={700} />
    </HeadingContainer>
  );
};

const HeadingContainer = styled.h2`
  margin: 0 auto;
  width: 100%;
  height: auto;

  text-align: center;
`;

export default Heading;
