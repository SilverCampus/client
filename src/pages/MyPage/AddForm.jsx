import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { BaseUrl } from '../../App';
import { brand_black, brand_white, brand_blue } from '../../utils/palette';
import defaultImg from '../../assets/images/default_image.jpeg';

// Imported Components
import Heading from '../../components/molecules/Heading';
import FlatButton from '../../components/molecules/FlatButton';
import Space from '../../components/atoms/Space';
import MyUnderline from '../../components/atoms/MyUnderline';
import Text from '../../components/atoms/Text';
import Flex from '../../components/atoms/Flex';

// Imported Functions

const AddForm = ({ toggleModal }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCateogory] = useState('운동');
  const [credit, setCredit] = useState(2);
  const [image, setImage] = useState(defaultImg);

  const addCourse = async () => {
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
    formData.append('description', description);
    formData.append('price', 1818);
    formData.append('category_name', category);
    formData.append('thumbnail', image);
    formData.append('is_live', 'False');
    formData.append('credits', credit);
    let url = BaseUrl + '/api/launch-course/';

    // "title": "콘크리트-미적분",
    // 		"price": 130000,
    // 		"description": "현우진의 마지막 커리! 콘크리트!!!",
    // 		"category_name": "수능",
    // 		"thumbnail": (사진 file),
    // 		"is_live": False,
    // 		"credits": 3

    try {
      const res = await axios.post(url, formData, config);
      toggleModal();
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addCourse();
  };

  return (
    <FormWrapper>
      <FormContainer onSubmit={onSubmitHandler}>
        <Heading size="40px" children="강좌 등록" />
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

        <Flex direction="row" gap="20px">
          <select
            value={category}
            onChange={(e) => setCateogory(e.target.value)}
          >
            <option value="운동">운동</option>
            <option value="건강">건강</option>
            <option value="음악">음악</option>
            <option value="미술">미술</option>
            <option value="사회">사회</option>
            <option value="법">법</option>
            <option value="인문">인문</option>
            <option value="외국어">외국어</option>
          </select>

          <select value={credit} onChange={(e) => setCredit(e.target.value)}>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={5}>5</option>
          </select>

          <input
            type="file"
            accept=".jpg, .jpeg, .png, .gif"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </Flex>
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
  height: 200px;

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

export default AddForm;
