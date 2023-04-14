import { useState } from "react";

const ContractBtn = () => {
  const [value, setValue] = useState(false);
  const handleChange = () => {
    setValue((prev) => !prev);
  };
  return (
    <>
      {value === true ? (
        <button
          type="button"
          onClick={handleChange}
          className="text-white lg:mr-20 xl:mr-64 inline-flex items-center transition-all border border-gray-500 bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-bold px-8 py-2.5 text-center dark:text-white"
        >
          신청 취소
        </button>
      ) : (
        <button
          type="button"
          onClick={handleChange}
          className="text-white lg:mr-20 xl:mr-64 inline-flex items-center transition-all border border-gray-500 bg-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-bold px-8 py-2.5 text-center dark:text-white"
        >
          계약 신청
        </button>
      )}
    </>
  );
};

export default ContractBtn;
