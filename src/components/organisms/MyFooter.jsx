import styled from 'styled-components';
import { brand_black } from '../../utils/palette';

const MyFooter = () => {
  return <StyledFooter></StyledFooter>;
};

const StyledFooter = styled.footer`
  width: 100%;
  padding: 50px 0;

  background-color: ${brand_black};
`;

export default MyFooter;
