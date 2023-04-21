import api from "@/api";
import Title from "@/components/board/Title";
import { useRouter } from "next/router";

type Board = {
  boardUuid: string;
};

export default function WriteBoard() {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const title = data.get("title");
    const price = data.get("price");
    const deposit = data.get("deposit");
    const space = data.get("space");
    const location = data.get("location");
    const text = data.get("text");
    const board: Board = await api.board.create({
      title,
      price,
      deposit,
      space,
      location,
      text,
    });
    console.log(board);
    await api.historyBoard.create({ boardUuid: board.boardUuid, title, contracted: "대기" });
    router.push("/landlord");
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <Title main="원룸 내놓기" sub="원룸 정보를 사이트에 등록해보세요!" />
        <form className="bg-white p-10 rounded-2xl dark:bg-gray-800" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                제목 *
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="글 제목을 입력해주세요."
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                월세 (만원) *
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="원룸의 월세를 입력해주세요."
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="deposit"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                보증금 (만원) *
              </label>
              <input
                type="number"
                name="deposit"
                id="deposit"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="원룸의 보증금을 입력해주세요."
                required
              />
            </div>
            <div>
              <label
                htmlFor="space"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                평 수 *
              </label>
              <input
                type="number"
                name="space"
                id="space"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="원룸의 평 수를 입력해주세요."
                required
              />
            </div>
            <div>
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                원룸 위치 (도로명 주소) *
              </label>
              <input
                type="text"
                name="location"
                id="location"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="원룸의 도로명 주소를 입력해주세요."
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                상세 설명
              </label>
              <textarea
                id="text"
                name="text"
                rows={8}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="원룸에 대한 상세 설명을 적어주세요"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center sm:justify-start">
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              원룸 등록
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
