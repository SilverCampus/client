import { Route, Routes, useLocation } from 'react-router-dom';

// Imported Components
import Home from './pages/Home/index';
import Search from './pages/Search/index';
import Main from './pages/Main/index';
import MyPage from './pages/MyPage/index';
import Course from './pages/Course/index';
import Lecture from './pages/Lecture/index';
import Header from './components/organisms/header';

const Router = () => {
  const pathName = useLocation();

  return (
    <>
      {pathName.pathname === '/' ? null : <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/main" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/course" element={<Course />} />
        <Route path="/lecture" element={<Lecture />} />
      </Routes>
    </>
  );
};

export default Router;
