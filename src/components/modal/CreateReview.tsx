import api from "@/api";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

type Props = {
  receiveId: string;
  done: boolean;
};

const CreateReview = ({ receiveId, done }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isDoneReview, setIsDoneReview] = useState<boolean>(false);

  const handleCreateReview = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = data.get("text");
    await api.review.create({ text, receiveId });
    setIsDoneReview(true);
    setShowModal(false);
  };

  useEffect(() => {
    setIsDoneReview(done || false);
  }, []);
  return (
    <>
      {!isDoneReview ? (
        <button
          className="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-3 py-1 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          type="button"
          onClick={() => setShowModal(true)}
        >
          후기 작성
        </button>
      ) : (
        <p className="block text-white bg-emerald-500 hover:bg-emerald-600 font-medium rounded-lg text-sm px-3 py-1 text-center">
          리뷰 완료
        </p>
      )}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto absolute inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-sm sm:max-w-xl md:max-w-2xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none z-30 focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">후기 작성</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-gray-500 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <MdClose fontSize={26} />
                    </span>
                  </button>
                </div>
                <form className="relative p-6 flex-auto w-full" onSubmit={handleCreateReview}>
                  <div className="sm:col-span-2">
                    <textarea
                      id="text"
                      name="text"
                      rows={4}
                      className="block resize-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="다른 분들께 도움이 될 수 있도록 후기를 남겨주세요!"
                      required
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      type="submit"
                    >
                      작성 완료
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default CreateReview;
