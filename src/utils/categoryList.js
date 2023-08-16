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

const categoryList = [
  [
    {
      icon: (
        <Icon>
          {faHeart}
          건강
        </Icon>
      ),
      text: '건강',
    },
    {
      icon: (
        <Icon>
          {faDumbbell}
          운동
        </Icon>
      ),
      text: '운동',
    },
    {
      icon: (
        <Icon>
          {faPiggyBank}
          재테크
        </Icon>
      ),
      text: '재테크',
    },
    {
      icon: (
        <Icon>
          {faBrush}
          예술
        </Icon>
      ),
      text: '예술',
    },
  ],
  [
    {
      icon: (
        <Icon>
          {faScaleBalanced}
          정치
        </Icon>
      ),
      text: '정치',
    },
    {
      icon: (
        <Icon>
          {faBookBookmark}
          문화
        </Icon>
      ),
      text: '문화',
    },
  ],
];

export default categoryList;
