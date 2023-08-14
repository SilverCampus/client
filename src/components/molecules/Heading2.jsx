import styled from 'styled-components';
import Text from '../atoms/Text';

const Heading2 = ({ color, size, children, className }) => {
  return (
    <Heading2Container className={className}>
      <Text children={children} color={color} size={size} weight={500} />
    </Heading2Container>
  );
};

const Heading2Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: auto;

  font-size: ${({ size }) => size};
  text-align: center;
`;

export default Heading2;
