import { Route, Routes, useLocation } from 'react-router-dom';

// Imported Components
import HomePage from './pages/Home/HomePage';
import SearchPage from './pages/Search/SearchPage';
import MainPage from './pages/Main/MainPage';
import MyPage from './pages/MyPage/MyPage';
import CoursePage from './pages/Course/CoursePage';
import MyFooter from './components/organisms/MyFooter';
import QuestionPage from './pages/Question/QuestionPage';
import LecturePage from './pages/Lecture/LecturePage';

const Router = () => {
  const pathName = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/course/:id" element={<CoursePage />} />
        <Route path="/lecture" element={<LecturePage />} />
        <Route path="/question/:id" element={<QuestionPage />} />
      </Routes>
      <MyFooter />
    </>
  );
};

export default Router;
