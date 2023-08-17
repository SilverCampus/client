import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { brand_blue, brand_white } from '../../utils/palette';

import Heading from '../../components/molecules/Heading';
import MyUnderline from '../../components/atoms/MyUnderline';
import Text from '../../components/atoms/Text';
import Space from '../../components/atoms/Space';
import { brand_black } from '../../utils/palette';
import FlatButton from '../../components/molecules/FlatButton';
import Modal from '../Modal/Modal';
import useModal from '../Modal/useModal';
import DescriptionForm from './DescriptionForm';

const DescriptionSection = ({ courseData, isInstructor }) => {
  const [isOpen, toggleModal] = useModal();

  return (
    <DescriptionSectionContainer>
      <Heading children="강의 소개" size="40px" weight={700} />
      <MyUnderline />
      {isInstructor ? (
        <RightButton
          width="50px"
          height="50px"
          bgColor={brand_blue}
          onClick={toggleModal}
          children={<FontAwesomeIcon icon={faPenToSquare} className="fa-2x" />}
        />
      ) : null}

      <Space height="50px" />
      <Text children={courseData.description} size="20px" weight={700} />
      <Modal
        state={isOpen}
        children={
          <DescriptionForm
            description={courseData.description}
            toggleModal={toggleModal}
            courseId={courseData.id}
          />
        }
      />
    </DescriptionSectionContainer>
  );
};

const DescriptionSectionContainer = styled.div`
  color: ${brand_black};
`;

export const RightButton = styled(FlatButton)`
  display: block;
  margin-left: auto;
  color: ${brand_white};
`;

export default DescriptionSection;
