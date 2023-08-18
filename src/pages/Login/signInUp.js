import axios from 'axios';
import { BaseUrl } from '../../App';
import { useNavigate } from 'react-router-dom';

export const onRegister = async (
  signState,
  id,
  pw,
  nickName,
  setButtonLoading
) => {
  let apiUrl = BaseUrl + '/campus/register/';

  let body = {
    username: id,
    password: pw,
    nickname: nickName,
    is_instructor: signState === 'instructorSignUp' ? true : false,
  };
  console.log(body);

  setButtonLoading(true);
  try {
    const res = await axios.post(apiUrl, body);

    alert('가입이 완료되었습니다.');
    window.location.reload();
  } catch (err) {
    if (err.response && err.response.status === 400)
      alert('이미 존재하는 아이디 혹은 닉네임입니다.');
    else console.log('onRegister - Api 실패', err);
  }
  setButtonLoading(false);
};
