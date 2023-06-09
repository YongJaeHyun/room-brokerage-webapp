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
type Reviews = {
  receiveId: string;
  writeId: string;
  text: string;
};

export default function userProfile() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [receivedReviews, setReceivedReviews] = useState<Reviews[] | null>(null);
  const [wroteReviews, setWroteReviews] = useState<Reviews[] | null>(null);

  const getUserInfo = async () => {
    const info = await api.member.getUserInfo();
    setUserInfo(info);
  };

  const getReviewByReceiveId = async () => {
    const reviews = await api.review.getReviewByReceiveId();
    console.log(reviews);
    setReceivedReviews(reviews?.data);
  }

  const handleSignOut = async () => {
    api.member.signOut();
  };

  useEffect(() => {
    getUserInfo();
    getReviewByReceiveId();
  }, []);
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <Title value="회원 정보" />
        <div className="bg-white p-10 rounded-2xl dark:bg-gray-800 mt-3">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="nickname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                닉네임
              </label>
              <p
                id="nickname"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                {userInfo?.nickname}
              </p>
            </div>
            <div className="w-full">
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                거주지
              </label>
              {userInfo?.address ? (
                <p
                  id="address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  {userInfo.address}
                </p>
              ) : (
                <p className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  거주지를
                  <Link href="/auth/user/update" className="text-primary-500">
                    &nbsp;등록
                  </Link>
                  해주세요!
                </p>
              )}
            </div>
            <div className="w-full">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                연락처
              </label>
              {userInfo?.phone ? (
                <p
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  {userInfo?.phone}
                </p>
              ) : (
                <p className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  연락처를
                  <Link href="/auth/user/update" className="text-primary-500">
                    &nbsp;등록
                  </Link>
                  해주세요!
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="review-r"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                내가 받은 후기
              </label>
              <div className="grid grid-cols-2 p-2.5 w-full bg-gray-50 rounded-lg border border-gray-300">
                {receivedReviews ? (
                  receivedReviews?.map(({ writeId, text }, idx) => (
                    <div key={idx} className="w-full m-auto gap-5 p-3">
                      <div className="flex flex-col bg-white w-full h-auto rounded-2xl">
                        <p className="p-2 pb-5 text-sm">{text}</p>
                        <p className=" p-1 text-right text-sm w-full border-t-2 border-gray-300">
                          {writeId}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 p-2">아직 받은 리뷰가 없어요...</p>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="review-w"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                내가 쓴 후기
              </label>
              <div className="block p-2.5 w-full bg-gray-50 rounded-lg border border-gray-300">
                {wroteReviews ? (
                  wroteReviews?.map(({ writeId, text }) => (
                    <div className="grid grid-cols-3 w-full m-auto gap-5">
                      <div className="flex flex-col bg-white w-full h-auto rounded-2xl">
                        <p className="p-2 pb-5 text-sm">{text}</p>
                        <p className=" p-1 text-right text-sm w-full border-t-2 border-gray-300">
                          {writeId}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 p-2">아직 쓴 리뷰가 없어요...</p>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:justify-start">
            <Link href="/auth/user/update">
              <button
                type="button"
                className="inline-flex items-center px-8 py-2.5 mt-4 mr-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                수정
              </button>
            </Link>
            <button
              type="button"
              onClick={handleSignOut}
              className="inline-flex items-center px-8 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
            >
              회원 탈퇴
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
