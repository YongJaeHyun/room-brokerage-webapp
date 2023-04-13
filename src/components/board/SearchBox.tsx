import { useState } from "react";

const SearchBox = () => {
  const [inputVal, setInputVal] = useState("");
  const [priceVal, setPriceVal] = useState(200);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };
  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceVal(parseInt(e.target.value));
  };
  return (
    <form className="flex relative flex-col items-center justify-between p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800 dark:border-gray-700 md:flex-row mb-8">
      <div className="flex-shrink-0 w-full sm:w-auto sm:flex ">
        <div className="relative flex-shrink-0 w-full mb-4 sm:mb-0 sm:mr-4 sm:w-64 lg:w-96">
          <div className="absolute inset-y-0 left-0 z-50 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <label htmlFor="search" className="hidden">
            Search block sections
          </label>
          <input
            id="search"
            type="text"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="검색어를 입력해주세요."
            value={inputVal}
            onChange={handleChangeInput}
          />
        </div>

        <div className="flex flex-col h-full text-sm border border-gray-300 text-gray-500 dark:text-gray-400 bg-white rounded-lg p-2.5 py-2  dark:border-gray-600 dark:bg-gray-700">
          <label htmlFor="price" className="hidden"></label>
          <select
            id="price"
            name="price"
            className=" sm:w-40 text-sm block w-full cursor-pointer dark:placeholder-gray-400 border-gray-300 dark:bg-gray-700"
          >
            <option value="">월세 검색</option>
            {[
              10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180,
              190, 200,
            ].map((value, idx) => (
              <option key={idx} value={value}>{`${value}만원 이하`}</option>
            ))}
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="md:hidden block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-5"
      >
        검색
      </button>
      <div className="hidden text-sm text-gray-600 dark:text-gray-400 md:block">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-5"
        >
          검색
        </button>
        28개의 검색결과
      </div>
    </form>
  );
};

export default SearchBox;
