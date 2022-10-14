import {
  EmailIcon,
  FooterMenuIcon,
  LocationIcon,
  PhoneIcon,
  SocialMediaIcon,
  WheithTopArrowIcon,
} from 'assets/Icons/MainIcons';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const Footer: FunctionComponent = () => {
  return (
    <section className='bg-[#E8EDF5] p-24'>
      <article className='flex items-center space-x-5 justify-end'>
        <button className='text-xs font-bold text-white bg-gradient-to-br from-[#F7AE28] to-[#FFDE82] px-5 py-3 rounded-full flex items-center gap-x-4'>
          <FooterMenuIcon />
          Support
        </button>
        <button
          className='bg-gradient-to-br from-[#F7AE28] to-[#FFDE82] p-1 rounded-full'
          onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}
        >
          <WheithTopArrowIcon />
        </button>
      </article>

      <article className='grid grid-cols-4 gap-x-14'>
        <div className='col-span-2 text-[#585E66]'>
          <h1 className='text-2xl font-black text-[#127682]'>Contact Us</h1>
          <p className='max-w-xs my-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
            lectus nunc, sagittis, eros.
          </p>
          <p className='flex items-center gap-x-5 my-3'>
            <LocationIcon />
            Imm le Zenith II, Lotissement Attaoufik, Route de Nouacer, Sidi
            Maarouf, Casablanca, 20640, Maroc
          </p>
          <p className='flex items-center gap-x-5 my-3'>
            <EmailIcon />
            <a href='mailto: nfo@peaqock.com'>nfo@peaqock.com</a>
          </p>
          <p className='flex items-center gap-x-5 my-3'>
            <PhoneIcon />
            <a href='tel:+20-2-24564100/1/2/3'>+20-2-24564100/1/2/3</a>
          </p>
          <p className='flex items-center gap-x-5 my-3'>
            <PhoneIcon />
            <a href='tel:+20-2-24515201/2'>+20-2-24515201/2</a>
          </p>
        </div>

        <div className='text-[#585E66]'>
          <h1 className='text-2xl font-black text-[#127682]'>About Peaqock</h1>
          <div className='flex flex-col space-y-6 my-6'>
            <Link to='/users'>Privacy Statement</Link>
            <Link to='/users'>Term and condition</Link>
            <Link to='/users'>Accessibility </Link>
            <Link to='/users'>F.A.Q. </Link>
          </div>
          <Link to='/users'>
            <SocialMediaIcon />
          </Link>
        </div>

        <div>
          <h1 className='text-2xl font-black text-[#127682]'>Locations</h1>
          <img
            src={require('../../../assets/images/footer.png')}
            alt=''
            className='h-[218px] mt-6'
          />
        </div>
      </article>

      <article className='text-lg font-bold text-center mt-8'>
        Copyright © 2022 . All Rights Reserved.
      </article>
    </section>
  );
};

export default Footer;
