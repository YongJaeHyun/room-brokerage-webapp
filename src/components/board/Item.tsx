import Link from "next/link";

type Props = {
  id: string;
};

const Item = ({ id }: Props) => {
  return (
    <div className="items-start flex-col bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
      <Link href={`/board/${id}`}>
        <img className="w-full rounded-lg" src="/images/logo.png" alt="Bonnie Avatar" />
        <div className="p-5 pt-0">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            월세/보증금
          </h3>
          <span className="text-gray-500 dark:text-gray-400">평수</span>
          <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">제목</p>
          <ul className="flex space-x-4 sm:mt-0">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default Item;
