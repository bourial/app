import {
  GreenBottomArrowIcon,
  GreenProfileIcon,
} from 'assets/Icons/UsersIcons';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const Topbar: FunctionComponent = () => {
  return (
    <section className='h-24 px-24 sticky top-0 bg-[#F4F7FA]'>
      <div className='h-full text-[#127682] text-lg uppercase flex items-center gap-x-8 justify-end border-b border-[#E3E3E3]'>
        <Link to='/' className='h-2/3 flex items-center gap-x-6'>
          about
          <GreenBottomArrowIcon />
        </Link>
        <Link to='/' className='h-2/3 flex items-center gap-x-6'>
          membership
          <GreenBottomArrowIcon />
        </Link>
        <Link to='/' className='h-2/3 flex items-center gap-x-6'>
          News & Events
          <GreenBottomArrowIcon />
        </Link>
        <Link to='/' className='h-2/3 flex items-center gap-x-6'>
          Contact us
          <GreenBottomArrowIcon />
        </Link>

        <div className='flex items-center gap-x-4'>
          <div className='w-[1px] h-[30px] bg-[#868686]' />
          <Link to='/' className='h-2/3 flex items-center gap-x-6'>
            User Name
            <GreenBottomArrowIcon />
          </Link>
          <Link to='/'>
            <GreenProfileIcon />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
