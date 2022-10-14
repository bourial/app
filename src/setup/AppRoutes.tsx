import { Routes, Route, Outlet } from 'react-router-dom';
import Main from '../pages/main';
import Users from '../pages/users';

const AppRoutes = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route path='/' element={<Main />} />
      <Route path='/users' element={<Users />} />
    </Routes>
  );
};

export default AppRoutes;
