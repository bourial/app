import Filters from './Components/Filters';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import UsersList from './Components/UsersList';

const Users = () => {
  return (
    <div className='bg-[#F4F7FA] relative'>
      <Sidebar />
      <div className='pl-44'>
        <Topbar />
        <Filters />
        <UsersList />
      </div>
    </div>
  );
};

export default Users;
