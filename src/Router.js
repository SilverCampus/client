import { Route, Routes, useLocation } from 'react-router-dom';

// Imported Components
import HomePage from './pages/Home/HomePage';
import SearchPage from './pages/Search/SearchPage';
import MainPage from './pages/Main/MainPage';
import MyPage from './pages/MyPage/index';
import Course from './pages/Course/index';
import Lecture from './pages/Lecture/index';
import MyFooter from './components/organisms/MyFooter';
import QuestionPage from './pages/Question/QuestionPage';

const Router = () => {
  const pathName = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/main/:topic" element={<MainPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/course" element={<Course />} />
        <Route path="/lecture" element={<Lecture />} />
        <Route path="/question" element={<QuestionPage/>} />
      </Routes>
      <MyFooter />
    </>
  );
};

export default Router;
