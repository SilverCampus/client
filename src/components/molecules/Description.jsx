import styled from 'styled-components';
import Text from '../atoms/Text';

const Description = ({ color, children }) => {
  return (
    <DescriptionContainer>
      <Text children={children} color={color} size={16} weight={500} />
    </DescriptionContainer>
  );
};

const DescriptionContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: auto;

  text-align: center;
`;

export default Description;
