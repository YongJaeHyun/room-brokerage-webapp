import Seo from "@/components/Seo";
import Title from "@/components/auth/Title";
import CheckBox from "@/components/auth/CheckBox";
import Input from "@/components/auth/Input";
import Link from "next/link";
import api from "@/api";

export default function login() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const memberId = data.get("id");
    const pw = data.get("pw");
    console.log(memberId, pw);
    api.member.login({memberId, pw})
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <Seo title="로그인" />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[80vh] lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <Title value="로그인" />
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <Input name="id" labelName="아이디" placeholder="아이디를 입력해주세요" />
              <Input
                name="pw"
                type="password"
                labelName="비밀번호"
                placeholder="비밀번호를 입력해주세요"
              />
              <div className="flex items-center justify-between">
                <CheckBox name="remember" labelName="로그인 정보 기억하기" />
                <Link
                  href="/auth/find/password"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  비밀번호 찾기
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                로그인
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                계정이 없으신가요?{" "}
                <Link
                  href="/auth/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  회원가입하기
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
