import { useEffect, useState } from 'react';
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
import LoadingPage from '../../components/templates/LoadingPage';

// Imported Functions

const PostForm = ({ toggleModal }) => {
  const [hsList, setHsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hashtag, setHashtag] = useState('');
  const [content, setContent] = useState('');
  const [video, setVideo] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  const getHsList = async () => {
    const url = BaseUrl + '/social/hashtags/';
    try {
      const res = await axios.get(url);

      setHsList(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getHsList();
  }, []);

  useEffect(() => {
    if (hsList.length === 0) return;
    setHashtag(hsList[0].name);
  }, [hsList]);

  const addPost = async () => {
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
    formData.append('content', content);
    formData.append('hashtags', hashtag);
    formData.append('video_file', video);

    let url = BaseUrl + '/social/post-upload/';

    setButtonClicked(true);
    try {
      const res = await axios.post(url, formData, config);
      toggleModal();
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
    setButtonClicked(false);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addPost();
  };

  if (loading) return <LoadingPage />;
  else
    return (
      <FormWrapper>
        <FormContainer onSubmit={onSubmitHandler}>
          <Heading size="40px" children="글 등록" />
          <MyUnderline />
          <Space height="50px" />
          <Flex>
            <select
              value={hashtag}
              onChange={(e) => setHashtag(e.target.value)}
            >
              {hsList &&
                hsList.map((it, idx) => (
                  <option key={idx} value={it.name}>
                    {it.name}
                  </option>
                ))}
            </select>
          </Flex>
          <Space height="50px" />
          <Area value={content} onChange={(e) => setContent(e.target.value)} />
          <Space height="50px" />

          <Flex direction="row" gap="20px">
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideo(e.target.files[0])}
            />
          </Flex>
          <Space height="50px" />
          <FlatButton
            width="100%"
            height="50px"
            bgColor={brand_blue}
            disabled={buttonClicked}
          >
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

export default PostForm;
