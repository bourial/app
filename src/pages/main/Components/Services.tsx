import { FunctionComponent } from 'react';
import Img from '../../../assets/images/services.svg';

const Services: FunctionComponent = () => {
  return (
    <section className="h-screen bg-[#F4F7FA] bg-[url('assets/images/services.png')] bg-no-repeat bg-cover grid grid-cols-2 items-center justify-items-center">
      <article className='px-32'>
        <h6 className='text-[#99A5B5] text-xl uppercase'>our services</h6>
        <h1 className='text-6xl font-black my-5'>
          <span className='text-[#F4C748]'>Trade</span> Simple,
        </h1>
        <p className='text-lg font-light text-[#474747]'>
          Discover a world of trade opportunities in one place with detailed
          information about imports, market dynamics, tariffs, regulatory
          requirements, potential buyers and more.
        </p>
        <button className='text-lg font-bold px-10 py-3 text-[#F4F6FA] bg-gradient-to-r from-[#25937E] to-[#20C7AB] rounded-full mt-16'>
          Discover Now
        </button>
      </article>

      <article>
        <img src={Img} alt='' />
      </article>
    </section>
  );
};

export default Services;
