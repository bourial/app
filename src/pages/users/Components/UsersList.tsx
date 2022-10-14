import { EyeIcon } from 'assets/Icons/UsersIcons';
import { FunctionComponent, useContext, useEffect } from 'react';
import { IUser } from 'setup/app-context-manager/modal';
import { UsersContext } from 'setup/app-context-manager/UsersContext';
import UsersData from '../../../data/UsersData.json';

const UsersList: FunctionComponent = () => {
  const { users, setUsers } = useContext(UsersContext);

  useEffect(() => {
    setUsers(UsersData);
  }, []);

  return (
    <section className='min-h-screen'>
      <article className='pl-24 grid grid-cols-6 py-4 text-sm sticky top-[252px] bg-[#F4F7FA]'>
        <p className='text-[#A7ABAD] font-bold'>User</p>
        <p className='text-[#A7ABAD] font-bold'>Email</p>
        <p className='text-[#A7ABAD] font-bold'>Country of residency</p>
        <p className='text-[#A7ABAD] font-bold'>Company</p>
        <p className='text-[#A7ABAD] font-bold'>Registration Date</p>
        <p className='text-[#A7ABAD] font-bold'>Actions</p>
      </article>

      <article className='text-sm'>
        {users?.map((user: IUser, index: number) => (
          <div
            key={index}
            className={`grid grid-cols-6 pl-24 py-6 ${
              index % 2 == 0 && 'bg-[#E6EAF0]'
            }`}
          >
            <p className='text-[#636F75] font-bold'>{user.user}</p>
            <p className='text-[#636F75] font-bold'>{user.email}</p>
            <p className='text-[#636F75] font-bold'>{user.country}</p>
            <p className='text-[#636F75] font-bold'>{user.company}</p>
            <p className='text-[#636F75] font-bold'>{user.registration}</p>
            <p className='text-[#636F75] font-bold cursor-pointer'>
              <EyeIcon />
            </p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default UsersList;
