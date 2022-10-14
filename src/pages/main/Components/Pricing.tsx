import {
  GreenRightArrow,
  PrisingIcon1,
  PrisingIcon2,
  PrisingIcon3,
  PrisingIcon4,
} from 'assets/Icons/MainIcons';
import { FunctionComponent } from 'react';

const Pricing: FunctionComponent = () => {
  return (
    <section className='bg-[#F4F7FA] py-20'>
      <article className='flex flex-col items-center max-w-6xl mx-auto'>
        <h6 className='text-[#99A5B5] text-xl uppercase'>membership</h6>
        <h1 className='text-4xl font-bold my-5 text-[#414141]'>
          PEAQOCK Membership Packages
        </h1>
        <p className='text-[#585E66] text-center'>
          The purpose of TRADAR Club is to be a network of international
          businesses and executives dedicated to transforming Africa through the
          vehicles of trade and investment. TRADAR Club Members are global
          industry leaders, African corporates, intergovernmental organisations,
          policy makers and other influential stakeholders committed to the
          shared objective of unlocking growth and development for the African
          continent
        </p>
        <button className='text-xl font-bold px-10 py-3 text-[#127682] bg-[#127682] bg-opacity-10 rounded-full mt-16 flex items-center gap-x-3'>
          PACKAGES DETAILS
          <GreenRightArrow />
        </button>
      </article>

      <article className='px-24 mt-40 grid grid-cols-2 gap-x-24 gap-y-12'>
        <div className='flex items-center gap-x-5'>
          <div className='shrink-0'>
            <PrisingIcon1 />
          </div>
          <div>
            <h1 className='font-bold text-3xl text-[#127682] mb-3'>Basic</h1>
            <p className='text-[#585E66] text-sm pr-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              lectus pulvinar massa quam mollis at luctus nunc
            </p>
          </div>
          <button className='text-sm bg-gradient-to-br text-white from-[#127682] to-[#20C7AB] px-6 py-4 rounded-lg shrink-0'>
            <span className='font-medium mr-6'>View Details</span>
            <span className='font-light'>FREE</span>
          </button>
        </div>

        <div className='flex items-center gap-x-5'>
          <div className='shrink-0'>
            <PrisingIcon2 />
          </div>
          <div>
            <h1 className='font-bold text-3xl text-[#F7AE28] mb-3'>Gold</h1>
            <p className='text-[#585E66] text-sm pr-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              lectus pulvinar massa quam mollis at luctus nunc
            </p>
          </div>
          <button className='text-sm bg-gradient-to-br text-white from-[#F7AE28] to-[#FFDE82] px-6 py-4 rounded-lg shrink-0'>
            <span className='font-medium mr-6'>View Details</span>
            <span className='font-light'>FREE</span>
          </button>
        </div>

        <div className='flex items-center gap-x-5'>
          <div className='shrink-0'>
            <PrisingIcon3 />
          </div>
          <div>
            <h1 className='font-bold text-3xl text-[#388CBA] mb-3'>Standard</h1>
            <p className='text-[#585E66] text-sm pr-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              lectus pulvinar massa quam mollis at luctus nunc
            </p>
          </div>
          <button className='text-sm bg-gradient-to-br text-white from-[#388CBA] to-[#4BB1E9] px-6 py-4 rounded-lg shrink-0'>
            <span className='font-medium mr-6'>View Details</span>
            <span className='font-light'>FREE</span>
          </button>
        </div>

        <div className='flex items-center gap-x-5'>
          <div className='shrink-0'>
            <PrisingIcon4 />
          </div>
          <div>
            <h1 className='font-bold text-3xl text-[#7B61FF] mb-3'>Platinum</h1>
            <p className='text-[#585E66] text-sm pr-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              lectus pulvinar massa quam mollis at luctus nunc
            </p>
          </div>
          <button className='text-sm bg-gradient-to-br text-white from-[#5339DB] to-[#7B61FF] px-6 py-4 rounded-lg shrink-0'>
            <span className='font-medium mr-6'>View Details</span>
            <span className='font-light'>FREE</span>
          </button>
        </div>
      </article>
    </section>
  );
};

export default Pricing;
