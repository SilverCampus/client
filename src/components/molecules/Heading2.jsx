import styled from 'styled-components';
import Text from '../atoms/Text';

const Heading2 = ({ color, children }) => {
  return (
    <Heading2Container>
      <Text children={children} color={color} size="24px" weight={500} />
    </Heading2Container>
  );
};

const Heading2Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: auto;

  text-align: center;
`;

export default Heading2;
