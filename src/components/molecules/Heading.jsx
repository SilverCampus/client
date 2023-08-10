import styled from 'styled-components';
import Text from '../atoms/Text';

const Heading = ({ color, children }) => {
  return (
    <HeadingContainer>
      <Text children={children} color={color} size={30} weight={700} />
    </HeadingContainer>
  );
};

const HeadingContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: auto;

  text-align: center;
`;

export default Heading;
