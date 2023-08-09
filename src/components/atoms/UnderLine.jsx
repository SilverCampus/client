import styled from 'styled-components';

const Underline = ({ color }) => {
  return <UnderlineContainer color={color} />;
};
const UnderlineContainer = styled.div`
  width: 190px;
  height: 1px;

  margin: 40px auto;
  border: 2px solid ${({ color }) => color};
  border-radius: 999px;
`;

export default Underline;
