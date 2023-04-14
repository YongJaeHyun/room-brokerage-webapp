import Link from "next/link";
import FavoriteBtnOnCard from "./FavoriteBtnOnCard";

type Props = {
  id: string;
};

const Item = ({ id }: Props) => {
  return (
    <div className="items-start flex-col bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/board/${id}`} className="hover:bg-gray-100">
        <img className="w-full rounded-lg" src="/images/logo.png" alt="Bonnie Avatar" />
      </Link>
      <div className="p-5 w-full">
        <div className="flex w-full justify-between">
          <Link href={`/board/${id}`}>
            <h3 className="flex items-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              월세/보증금
            </h3>
          </Link>
          <div className="flex justify-center items-center text-amber-600">
            <FavoriteBtnOnCard />
          </div>
        </div>
        <span className="text-gray-500 dark:text-gray-400">평수</span>
        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">제목</p>
        <ul className="flex space-x-4 sm:mt-0">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Item;
