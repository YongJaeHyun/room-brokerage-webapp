import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center flex-col">
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 p-2 border-b-[1px]">
          <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
        <Link
          className="text-xs p-2 text-gray-500 dark:text-gray-400"
          href="https://www.flaticon.com/kr"
          title="집 아이콘"
        >
          로고 제작자: Freepik - Flaticon
        </Link>
        <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400 pb-2">
          Copyright © YongjaeHyun 2023 All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
