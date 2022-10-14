import {
  PlayIcon,
  SwapLeftArrowIcon,
  SwapRightArrowIcon,
} from 'assets/Icons/MainIcons';
import { FunctionComponent } from 'react';

const Hero: FunctionComponent = () => {
  return (
    <section className="bg-[url('assets/images/hero.png')] bg-no-repeat bg-cover h-screen text-white relative">
      <article className='absolute left-0 top-0 w-full h-screen bg-gradient-to-br from-[#259393] to-[#3A72B8] opacity-70' />

      <article className='px-24 absolute bottom-0 left-0 w-full h-80 backdrop-blur-sm bg-[#252525] bg-opacity-20 grid grid-cols-2 items-center'>
        <div className='h-full flex flex-col justify-around py-8'>
          <h1 className='text-5xl leading-snug font-bold max-w-xs uppercase'>
            Manage operations
          </h1>
          <div className='flex items-center gap-x-12'>
            <button className='text-xl font-bold text-[#127682] bg-white px-12 py-3 rounded-3xl'>
              LEARN MORE
            </button>
            <button>
              <PlayIcon />
            </button>
          </div>
        </div>

        <div>
          <div className='w-full flex items-center justify-between pb-2 mb-5 border-b border-white'>
            <h1 className='text-3xl'>01.</h1>
            <div className='flex items-center gap-x-3'>
              <button>
                <SwapLeftArrowIcon />
              </button>
              <button>
                <SwapRightArrowIcon />
              </button>
            </div>
          </div>
          <p className='font-light max-w-2xl'>
            Discover market access rules, check regulatory compliance, latest
            customs duties, shipping requirements and other documentation.
            Africa-wide, harmonized, and aggregated trade and investment
            regulatory information i.e., Foreign Trade Regulations (e.g.,
            Customs procedures, certification, licensing, etc.) and Market
            Access (trade agreements, tariffs, and non-tariff measures etc.)
          </p>
        </div>
      </article>
    </section>
  );
};

export default Hero;
