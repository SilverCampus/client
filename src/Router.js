import { Route, Routes, useLocation } from 'react-router-dom';

// Imported Components
import Home from './pages/Home/index';
import SearchPage from './pages/Search/SearchPage';
import Main from './pages/Main/index';
import MyPage from './pages/MyPage/index';
import Course from './pages/Course/index';
import Lecture from './pages/Lecture/index';
import MyFooter from './components/organisms/MyFooter';

const Router = () => {
  const pathName = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/course" element={<Course />} />
        <Route path="/lecture" element={<Lecture />} />
      </Routes>
      <MyFooter />
    </>
  );
};

export default Router;
