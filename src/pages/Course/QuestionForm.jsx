import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { BaseUrl } from '../../App';
import { brand_black, brand_white, brand_blue } from '../../utils/palette';

// Imported Components
import Heading from '../../components/molecules/Heading';
import FlatButton from '../../components/molecules/FlatButton';
import Space from '../../components/atoms/Space';
import MyUnderline from '../../components/atoms/MyUnderline';
import Text from '../../components/atoms/Text';

// Imported Functions

const QuestionForm = ({ toggleModal, courseId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addQuestion = async () => {
    const token = localStorage.getItem('key');
    if (!token) {
      alert('로그인 안 함');
      return;
    }
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const body = {
      title: title,
      content: description,
      course_id: courseId,
    };
    let url = BaseUrl + '/api/ask-question/';

    try {
      const res = await axios.post(url, body, config);
      toggleModal();
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addQuestion();
  };

  return (
    <FormWrapper>
      <FormContainer onSubmit={onSubmitHandler}>
        <Heading size="40px" children="질문 등록" />
        <MyUnderline />
        <Space height="50px" />
        <Title
          placeholder="제목을 입력하세요."
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Space height="50px" />
        <Area
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Space height="50px" />
        <FlatButton width="100%" height="50px" bgColor={brand_blue}>
          <Text
            color={brand_white}
            size="20px"
            weight={700}
            children="등록하기"
          />
        </FlatButton>
      </FormContainer>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  border-radius: 35px;
  padding: 60px 60px 45px 60px;

  background-color: ${brand_white};
  color: ${brand_black};
`;

const FormContainer = styled.form``;

const Area = styled.textarea`
  width: 500px;
  height: 300px;

  padding: 15px;
  border-radius: 12px;
  border: 1px solid #b0b0b0;
  resize: none;

  &:focus {
    outline: none;
  }
`;

const Title = styled.input`
  width: 500px;
  height: 50px;

  padding: 15px;
  border-radius: 12px;
  border: 1px solid #b0b0b0;
  background-color: #fbfbfb;

  &:focus {
    outline: none;
  }
`;

export default QuestionForm;
