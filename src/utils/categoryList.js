import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faDumbbell,
  faPiggyBank,
  faBrush,
  faScaleBalanced,
  faBookBookmark,
} from '@fortawesome/free-solid-svg-icons';
import Flex from '../components/atoms/Flex';
import Text from '../components/atoms/Text';
import { brand_white } from './palette';

const Icon = ({ children }) => {
  return (
    <Flex direction="row" align="center" gap="20px">
      <FontAwesomeIcon className="fa-2x" icon={children[0]} />
      <Text color={brand_white} size="30px" weight={700}>
        {children[1]}
      </Text>
    </Flex>
  );
};

export const categoryList1 = [
  <Icon>
    {faHeart}
    건강
  </Icon>,
  <Icon>
    {faDumbbell}
    운동
  </Icon>,
  <Icon>
    {faPiggyBank}
    재테크
  </Icon>,
  <Icon>
    {faBrush}
    예술
  </Icon>,
];

export const categoryList2 = [
  <Icon>
    {faScaleBalanced}
    법·정치
  </Icon>,
  <Icon>
    {faBookBookmark}
    문화
  </Icon>,
];
