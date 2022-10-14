import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { BottomArrowIcon, ChatIcon, ProfileIcon } from 'assets/Icons/MainIcons';

const Navbar: FunctionComponent = () => {
  return (
    <div className='absolute left-0 top-0 w-full h-28 backdrop-blur-sm bg-[#252525] bg-opacity-20 flex items-center justify-between z-30'>
      <Link to='/'>
        <img
          src={require('../../../assets/images/logo.png')}
          alt='logo'
          className='h-14 ml-24'
        />
      </Link>

      <ul className='text-white h-full text-lg uppercase flex items-center gap-x-8'>
        <Link to='/users' className='h-2/3 flex items-center gap-x-6'>
          about
          <BottomArrowIcon />
        </Link>
        <Link to='/users' className='h-2/3 flex items-center gap-x-6'>
          membership
          <BottomArrowIcon />
        </Link>
        <Link to='/users' className='h-2/3 flex items-center gap-x-6'>
          News & Events
          <BottomArrowIcon />
        </Link>
        <Link to='/users' className='h-2/3 flex items-center gap-x-6'>
          Contact us
          <BottomArrowIcon />
        </Link>

        <div className='h-full w-72 bg-gradient-to-r from-[#F7AE28] to-[#F8D061] flex items-center cursor-pointer'>
          <div className='uppercase text-sm font-bold flex items-center gap-x-2 px-8'>
            <ChatIcon />
            let’s talk
          </div>
          <div className='bg-white h-4/5 w-0.5 bg-opacity-20' />
          <div className='flex items-center gap-x-2 px-8'>
            <ProfileIcon />
            <BottomArrowIcon />
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
