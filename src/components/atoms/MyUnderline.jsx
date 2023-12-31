import styled from 'styled-components';

const MyUnderline = ({ color, className }) => {
  return <UnderlineContainer color={color} className={className} />;
};
const UnderlineContainer = styled.div`
  width: 190px;
  height: 1px;

  margin: 15px auto 0;
  border: 2px solid ${({ color }) => color};
  border-radius: 999px;
`;

export default MyUnderline;
