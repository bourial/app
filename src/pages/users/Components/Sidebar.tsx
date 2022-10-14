import {
  AppsIcon,
  HomeIcon,
  LogoutIcon,
  SettingsIcon,
  UserIcon,
} from 'assets/Icons/UsersIcons';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const Sidebar: FunctionComponent = () => {
  return (
    <section className='w-44 h-screen fixed flex justify-end items-center'>
      <article className='bg-[#127682] w-32 h-[95%] rounded-[40px] flex flex-col justify-between items-center py-8'>
        <Link to='/'>
          <img
            src={require('../../../assets/images/logo_smaller.png')}
            alt=''
          />
        </Link>

        <div className='flex flex-col items-center gap-y-6'>
          <Link to='/'>
            <HomeIcon />
          </Link>
          <Link to='/'>
            <AppsIcon />
          </Link>
          <Link to='/'>
            <UserIcon />
          </Link>
          <Link to='/'>
            <SettingsIcon />
          </Link>
        </div>

        <div className='cursor-pointer'>
          <LogoutIcon />
        </div>
      </article>
    </section>
  );
};

export default Sidebar;
