import api from "@/api";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const router = useRouter();
  const [isLogined, setIsLogined] = useState(false);

  const handleLogout = () => {
    api.member.logout();
  };

  const handleIsNotLogined = () => {
    alert("로그인이 필요한 서비스입니다.");
  };

  useEffect(() => {
    // nextjs는 client-side를 렌더하기 전에 server-side를 렌더링 함.
    // 따라서 페이지가 로드되고 window 객체가 정의되기 전까지는 localStorage에 접근 불가능.
    if (typeof window !== "undefined") {
      const isToken = localStorage.getItem("ACCESS_TOKEN") ? true : false;
      setIsLogined(isToken);
    }
  }, [router.pathname]);
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl lg:relative">
          <Link href="/" className="flex items-center">
            <Image
              width={35}
              height={45}
              src="/images/logo.png"
              className="mr-3 h-9"
              alt="Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              원룸 중개 앱
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            {isLogined ? (
              <>
                <Link href="/wishlist/lessee" className="text-gray-600 text-sm mr-5 dark:text-gray-300">
                  찜 목록
                </Link>
                <Link href="/auth/user" className="text-gray-600 text-sm mr-5 dark:text-gray-300">
                  회원 정보
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-1.5 lg:py-2 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                >
                  로그아웃
                </button>
              </>
            ) : (
              <Link
                href="/auth/login"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                로그인
              </Link>
            )}

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <MdMenu fontSize={26} />
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 m-auto font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href="/board"
                  className="block text-lg py-2 pr-4 pl-3 text-gray-700 hover:text-white hover:bg-primary-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-300 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  원룸 찾기
                </Link>
              </li>
              <li>
                <Link
                  href={isLogined ? "/contract" : "/auth/login"}
                  onClick={isLogined ? () => {} : handleIsNotLogined}
                  className="block text-lg py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-white hover:bg-primary-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-300 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  계약 신청한 원룸
                </Link>
              </li>
              <li>
                <Link
                  href={isLogined ? "/board/write" : "/auth/login"}
                  onClick={isLogined ? () => {} : handleIsNotLogined}
                  className="block text-lg py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-white hover:bg-primary-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-300 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  원룸 내놓기
                </Link>
              </li>

              <li>
                <Link
                  href={isLogined ? "/landlord" : "/auth/login"}
                  onClick={isLogined ? () => {} : handleIsNotLogined}
                  className="block text-lg py-2 pl-3 text-gray-700 border-b border-gray-100 hover:text-white hover:bg-primary-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-300 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  내놓은 원룸
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
