import styled from 'styled-components';
import { brand_white } from '../../utils/palette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Imported Component
import Wrapper from '../atoms/Wrapper';
import Space from '../atoms/Space';
import Flex from '../atoms/Flex';
import Developers from '../molecules/Developers';
import Logo from '../molecules/Logo';
import Text from '../atoms/Text';

const MyFooter = () => {
  return (
    <footer>
      <Wrapper bgColor={'#000'}>
        <Space height="80px" />
        <Flex direction="row" gap="70px">
          <Developers type="FE" name="김민지" handle="slsl2" />
          <Developers type="FE" name="송경호" handle="Goonco" />
          <Developers type="BE" name="김규빈" handle="bin" />
          <Developers type="BE" name="임정연" handle="13155a1" />
          <Developers type="BE" name="정태현" handle="nexDavid2020" />
        </Flex>
        <Space height="80px" />
        <Flex width="auto" direction="row" gap="20px">
          <Logo height="60px" />
          <GithubContainer>
            <FontAwesomeIcon
              icon={faGithub}
              className="fa-2x"
              style={{ color: `${brand_white}` }}
            />

            <a href="https://github.com/SilverCampus">
              <Text color={brand_white}>https://github.com/SilverCampus</Text>
            </a>
          </GithubContainer>
        </Flex>
        <Space height="80px" />
      </Wrapper>
    </footer>
  );
};

const GithubContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  padding: 5px 20px;
  border-left: 3px solid white;
`;

export default MyFooter;
