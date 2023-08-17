import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faDumbbell,
  faMusic,
  faBrush,
  faPeopleGroup,
  faScaleBalanced,
  faBookBookmark,
  faEarthAmerica,
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
          {faMusic}
          음악
        </Icon>
      ),
      text: '음악',
    },
    {
      icon: (
        <Icon>
          {faBrush}
          미술
        </Icon>
      ),
      text: '미술',
    },
  ],
  [
    {
      icon: (
        <Icon>
          {faPeopleGroup}
          사회
        </Icon>
      ),
      text: '사회',
    },
    {
      icon: <Icon>{faScaleBalanced}법</Icon>,
      text: '법',
    },
    {
      icon: (
        <Icon>
          {faBookBookmark}
          인문
        </Icon>
      ),
      text: '인문',
    },
    {
      icon: (
        <Icon>
          {faEarthAmerica}
          외국어
        </Icon>
      ),
      text: '외국어',
    },
  ],
];

export default categoryList;
