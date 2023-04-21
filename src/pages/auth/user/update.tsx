import api from "@/api";
import Seo from "@/components/Seo";
import Title from "@/components/auth/Title";
import Link from "next/link";
import { useEffect, useState } from "react";

type UserInfo = {
  nickname: string;
  address: string;
  phone: string;
};

export default function userProfileUpdate() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const handleUpdateUserInfo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nickname = data.get("nickname");
    const address = data.get("address");
    const phone = data.get("phone");
    console.log(nickname, address, phone);
    await api.member.updateUserInfo({ nickname, address, phone });
  };

  const getUserInfo = async () => {
    const info = await api.member.getUserInfo();
    setUserInfo(info);
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <Title value="회원 정보 수정" />
        <Seo title="회원 정보 수정" />
        <form
          className="bg-white p-10 rounded-2xl dark:bg-gray-800 mt-3"
          onSubmit={handleUpdateUserInfo}
        >
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="nickname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                닉네임
              </label>
              <input
                id="nickname"
                name="nickname"
                defaultValue={userInfo?.nickname}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                거주지
              </label>
              <input
                id="address"
                name="address"
                defaultValue={userInfo?.address}
                placeholder="경북 구미시 해마루공원로 80"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                연락처
              </label>
              <input
                id="phone"
                name="phone"
                defaultValue={userInfo?.phone}
                placeholder="010-****-****"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
            </div>
          </div>
          <div className="flex justify-center sm:justify-start">
            <button
              type="submit"
              className="inline-flex items-center px-8 py-2.5 mt-4 mr-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              수정
            </button>
            <Link href="/auth/user">
              <button
                type="button"
                className="inline-flex items-center px-8 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                취소
              </button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
