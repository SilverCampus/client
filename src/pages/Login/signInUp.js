import axios from 'axios';
import { BaseUrl } from '../../App';
import { useNavigate } from 'react-router-dom';

export const onRegister = async (signState, id, pw) => {
  let apiUrl = BaseUrl + '/campus/register/';

  let body = {
    username: id,
    password: pw,
    nickname: '갓경호',
    is_instructor: signState === 'instructorSignUp' ? true : false,
  };

  try {
    const res = await axios.post(apiUrl, body);

    alert('회원 가입 성공!');
    window.location.reload();
  } catch (err) {
    if (err.response.status === 400) alert('이미 존재하는 id');
    else console.log('onRegister - Api 실패', err);
  }
};
