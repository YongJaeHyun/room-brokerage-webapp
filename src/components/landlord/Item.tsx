import Link from "next/link";
import { MdDelete, MdEditSquare } from "react-icons/md";

type Props = {
  id: string;
};

const Item = ({ id }: Props) => {
  return (
    <div className="items-start flex-col bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
      <Link href={`/landlord/${id}`}>
        <img className="w-full rounded-lg" src="/images/logo.png" alt="Bonnie Avatar" />
        <div className="p-5 pt-0">
          <div className="flex justify-between">
            <h3 className="flex items-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              월세/보증금
            </h3>
            <span className="flex justify-center items-center w-12 h-12 leading-12 rounded-full bg-white text-amber-600">8</span>
          </div>
          <span className="text-gray-500 dark:text-gray-400">평수</span>
          <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">제목</p>
          <ul className="flex space-x-5 justify-center sm:mt-0">
            <li>
              <button
                type="button"
                className="text-white inline-flex items-center bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xs px-2.5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <MdEditSquare fontSize={16} className="mr-1" />
                수정
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex items-center text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-2.5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                <MdDelete fontSize={16} className="mr-1" />
                삭제
              </button>
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default Item;
