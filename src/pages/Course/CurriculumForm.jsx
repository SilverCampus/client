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

const CurriculumForm = ({ toggleModal, courseId }) => {
  const [title, setTitle] = useState('');
  const [video, setVideo] = useState(null);

  const addVideo = async () => {
    const token = localStorage.getItem('key');
    if (!token) {
      alert('로그인 안 함');
      return;
    }
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    };

    const formData = new FormData();
    formData.append('title', title);
    formData.append('video_file', video);
    formData.append('course_id', courseId);
    let url = BaseUrl + '/api/video-upload/';

    try {
      const res = await axios.post(url, formData, config);
      window.location.reload();
      toggleModal();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addVideo();
  };

  return (
    <FormWrapper>
      <FormContainer onSubmit={onSubmitHandler}>
        <Heading size="40px" children="강의 추가" />
        <MyUnderline />
        <Space height="50px" />
        <Title
          placeholder="제목을 입력하세요."
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Space height="50px" />
        <Video>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </Video>
        <Space height="50px" />
        <FlatButton width="100%" height="50px" bgColor={brand_blue}>
          <Text
            color={brand_white}
            size="20px"
            weight={700}
            children="추가하기"
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

const Video = styled.div`
  text-align: center;
`;

export default CurriculumForm;
