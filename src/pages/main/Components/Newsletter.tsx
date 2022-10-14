import { WheithRightArrowIcon } from 'assets/Icons/MainIcons';
import { FunctionComponent } from 'react';

const Newsletter: FunctionComponent = () => {
  return (
    <section className='bg-[#F4F6FA] px-24 pt-40 pb-14 flex justify-between items-center'>
      <article>
        <h1 className='text-4xl font-bold uppercase'>newsletter</h1>
        <div className='bg-[#9F2241] w-24 h-1 rounded-xl mt-4' />
      </article>

      <article className='flex items-center'>
        <input
          type='email'
          placeholder='Your email adress'
          className='bg-[#E3E7ED] rounded-full w-[500px] py-3 px-5 outline-none transform translate-x-12'
        />
        <button className='text-white bg-gradient-to-b from-[#127682] to-[#20C7AB] py-3 px-10 rounded-full flex items-center gap-x-6 z-10'>
          Subscribe
          <WheithRightArrowIcon />
        </button>
      </article>
    </section>
  );
};

export default Newsletter;
