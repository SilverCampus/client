import styled from 'styled-components';

import Heading from '../../components/molecules/Heading';
import MyUnderline from '../../components/atoms/MyUnderline';
import Question from './Question';
import Space from '../../components/atoms/Space';
import { brand_black, brand_blue } from '../../utils/palette';
import { RightButton } from './DescriptionSection';
import Modal from '../Modal/Modal';
import useModal from '../Modal/useModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import QuestionForm from './QuestionForm';
import Flex from '../../components/atoms/Flex';

const QuestionSection = ({ questionData, learnRate, courseId }) => {
  const [isOpen, toggleModal] = useModal();

  return (
    <QuestionSectionContainer>
      <Heading children="QnA" size="40px" weight={700} />
      <MyUnderline />
      {learnRate !== null ? (
        <RightButton
          width="50px"
          height="50px"
          bgColor={brand_blue}
          onClick={toggleModal}
          children={<FontAwesomeIcon icon={faPenToSquare} className="fa-2x" />}
        />
      ) : null}
      <Space height="50px" />
      {/* questionData && questionData.map((it) => <Question key={it.id} data={it} />) 이건 왜 안되지..*/}
      <Flex gap="10px">
        {Array.isArray(questionData) &&
          questionData.map((it) => <Question key={it.id} data={it} />)}
      </Flex>

      <Modal
        state={isOpen}
        toggleModal={toggleModal}
        children={
          <QuestionForm toggleModal={toggleModal} courseId={courseId} />
        }
      />
    </QuestionSectionContainer>
  );
};

const QuestionSectionContainer = styled.div`
  color: ${brand_black};
`;

export default QuestionSection;
