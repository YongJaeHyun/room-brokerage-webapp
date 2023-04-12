import Seo from "@/components/Seo";
import Title from "@/components/Title";
import CheckBox from "@/components/auth/CheckBox";
import Input from "@/components/auth/Input";
import SubmitBtn from "@/components/auth/SubmitBtn";
import Link from "next/link";

export default function SignUp() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const id = data.get("id");
    const password = data.get("password");
    const confirmPassword = data.get("confirm-password");
    if (password === confirmPassword) {
      console.log(id, password, confirmPassword);
    } else {
      alert("비밀번호가 다릅니다.");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <Seo title="회원가입" />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[80vh] lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <Title value="회원가입" />
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <Input name="id" labelName="아이디" placeholder="아이디를 입력해주세요" />
              <Input
                name="password"
                type="password"
                labelName="비밀번호"
                placeholder="비밀번호를 입력해주세요"
              />
              <Input
                name="confirm-password"
                type="password"
                labelName="비밀번호 재확인"
                placeholder="비밀번호를 다시 입력해주세요"
              />
              <CheckBox
                name="terms"
                labelName="개인정보 수집 및 이용에 동의합니다."
                required
              />
              <SubmitBtn value="계정 생성" />
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                이미 계정이 있으신가요?{" "}
                <Link
                  href="/auth/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  로그인 하기
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
