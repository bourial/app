import { FunctionComponent } from 'react';

const Statis: FunctionComponent = () => {
  type StatisType = {
    num: string;
    txt: string;
  };

  const statisValue: StatisType[] = [
    {
      num: '+800',
      txt: 'Partners',
    },
    {
      num: '+55',
      txt: 'Countries',
    },
    {
      num: '+4 500',
      txt: 'Opportunities',
    },
    {
      num: '+1 529',
      txt: 'Companies',
    },
  ];

  return (
    <section className='w-full h-48 bg-[#E6EAF0] px-24'>
      <article className='w-full h-full max-w-7xl mx-auto flex items-center justify-between'>
        {statisValue.map((stat: StatisType, index: number) => (
          <div className='flex flex-col items-center gap-y-5'>
            <h1 className='text-[#127682] font-black text-6xl'>{stat.num}</h1>
            <p className='text-xl text-[#99A5B5]'>{stat.txt}</p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Statis;
