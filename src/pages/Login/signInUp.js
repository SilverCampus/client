import axios from 'axios';
import { BaseUrl } from '../../App';

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

    if (res.status === 200) {
      alert('회원 가입 성공!');
      window.location.reload();
    } else if (res.status === 400) {
      alert('이미 존재하는 id');
    }
  } catch (err) {
    alert('Api 실패');
  }
};
