import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faDumbbell,
  faPiggyBank,
  faBrush,
  faScaleBalanced,
  faBookBookmark,
} from '@fortawesome/free-solid-svg-icons';

const categoryList = [
  {
    category: '건강',
    icon: <FontAwesomeIcon icon={faHeart} />,
  },
  {
    category: '운동',
    icon: <FontAwesomeIcon icon={faDumbbell} />,
  },
  {
    category: '재테크',
    icon: <FontAwesomeIcon icon={faPiggyBank} />,
  },
  {
    category: '예술',
    icon: <FontAwesomeIcon icon={faBrush} />,
  },
  {
    category: '법·정치',
    icon: <FontAwesomeIcon icon={faScaleBalanced} />,
  },
  {
    category: '문화',
    icon: <FontAwesomeIcon icon={faBookBookmark} />,
  },
];

export default categoryList;
