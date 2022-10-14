import {
  FiltersIcon,
  GreenSearchIcon,
  SearchIcon,
} from 'assets/Icons/UsersIcons';
import { FunctionComponent, useContext, useState } from 'react';
import { UsersContext } from 'setup/app-context-manager/UsersContext';
import UsersData from '../../../data/UsersData.json';

const Filters: FunctionComponent = () => {
  const { users, setUsers } = useContext(UsersContext);

  const [isSearch, setIIsSearch] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const searchByName = () => {
    if (inputValue) {
      setUsers(users?.filter((u, i) => u.email.match(inputValue)) || null);
    } else {
      setUsers(UsersData);
    }
  };

  return (
    <section className='px-24 pt-14 pb-11 flex items-center justify-between gap-x-6 sticky top-24 bg-[#F4F7FA]'>
      {isSearch ? (
        <>
          <button
            className='p-[13px] bg-[#127682] bg-opacity-10 rounded-full shrink-0'
            onClick={() => setIIsSearch(false)}
          >
            <GreenSearchIcon />
          </button>
        </>
      ) : (
        <>
          <button
            className='p-4 bg-[#127682] bg-opacity-10 rounded-full shrink-0'
            onClick={() => setIIsSearch(true)}
          >
            <FiltersIcon />
          </button>
          <input
            type='text'
            placeholder='Search by email'
            className='bg-[#E6EAF0] w-full py-4 rounded-lg px-5 font-medium outline-none text-gray-500 focus:bg-[#f7f9fb] focus:shadow-xl focus:border-b-2 border-[#127682]'
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
        </>
      )}

      <button
        className='text-white uppercase bg-gradient-to-r from-[#127682] to-[#20C7AB] py-3 px-12 font-semibold rounded-full flex items-center gap-x-5'
        onClick={searchByName}
      >
        <SearchIcon />
        Search
      </button>
    </section>
  );
};

export default Filters;
