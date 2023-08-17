import styled from 'styled-components';
import { brand_black } from '../../utils/palette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { brand_blue, brand_white } from '../../utils/palette';
import Modal from '../Modal/Modal';
import useModal from '../Modal/useModal';

import Heading from '../../components/molecules/Heading';
import MyUnderline from '../../components/atoms/MyUnderline';
import Curriculum from './Curriculum';
import Space from '../../components/atoms/Space';
import { RightButton } from './DescriptionSection';
import CurriculumForm from './CurriculumForm';
import Flex from '../../components/atoms/Flex';

const CurriculumSection = ({ videoData, courseId, isInstructor }) => {
  const [isOpen, toggleModal] = useModal();

  return (
    <CurriculumSectionContainer>
      <Heading children="커리큘럼" size="40px" weight={700} />
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
      <Flex gap="20px">
        {videoData.map((it) => (
          <Curriculum key={it.id} data={it} />
        ))}
      </Flex>
      <Modal
        state={isOpen}
        toggleModal={toggleModal}
        children={
          <CurriculumForm toggleModal={toggleModal} courseId={courseId} />
        }
      />
    </CurriculumSectionContainer>
  );
};

const CurriculumSectionContainer = styled.div`
  color: ${brand_black};
`;

export default CurriculumSection;
