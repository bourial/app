import { FunctionComponent } from 'react';

const About: FunctionComponent = () => {
  return (
    <section className='grid grid-cols-2 items-center justify-items-center bg-[#F4F7FA] py-20'>
      <article className='px-28'>
        <h6 className='text-[#99A5B5] text-xl uppercase'>About us</h6>
        <h1 className='text-4xl font-bold my-5 max-w-md leading-snug'>
          PEAQOCK is a member driven network
        </h1>
        <p className='text-[#585E66]'>
          The purpose of TRADAR Club is to be a network of international
          businesses and executives dedicated to transforming Africa through the
          vehicles of trade and investment. TRADAR Club Members are global
          industry leaders, African corporates, intergovernmental organisations,
          policy makers and other influential stakeholders committed to the
          shared objective of unlocking growth and development for the African
          continent
        </p>
        <button className='text-lg font-bold px-10 py-3 text-[#F4F6FA] bg-[#127682] rounded-full mt-16'>
          LEARN MORE
        </button>
      </article>

      <article>
        <img
          src={require('../../../assets/images/about.png')}
          alt=''
          className='h-[350px]'
        />
      </article>
    </section>
  );
};

export default About;
