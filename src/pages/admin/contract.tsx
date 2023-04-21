import api from "@/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdMoreHoriz, MdSearch } from "react-icons/md";

type Boards = {
  hbUuid: string;
  boardUuid: string;
  title: string;
  updatedDatetime: string;
  contracted: string;
};

export default function contractHistory() {
  const [boards, setBoards] = useState<Boards[]>([]);

  const getAllBoards = async () => {
    const newBoards = await api.historyBoard.getAllHistoryBoard();
    setBoards(newBoards.data);
  };

  useEffect(() => {
    getAllBoards();
  }, []);
  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MdSearch fontSize={22} className="text-gray-500" />
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Search"
                    required
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    글 ID
                  </th>
                  <th scope="col" className="px-4 py-3">
                    글 제목
                  </th>
                  <th scope="col" className="px-4 py-3">
                    마지막으로 업데이트 된 날짜
                  </th>
                  <th scope="col" className="px-4 py-3">
                    계약 상태
                  </th>
                  <th scope="col" className="px-4 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {boards.length === 0 ? (
                  <tr>
                    <th colSpan={4} className="text-center p-3">
                      등록된 게시물이 없습니다...
                    </th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                ) : (
                  boards.map((board) => (
                    <tr key={board.hbUuid} className="border-b dark:border-gray-700">
                      <th scope="row" className="px-4 py-3 font-normal whitespace-nowrap">
                        {board.boardUuid}
                      </th>
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <Link href={`/board/${board.boardUuid}`}>{board.title}</Link>
                      </td>
                      <td className="px-4 py-3">
                        {new Date(board.updatedDatetime).toLocaleString()}
                      </td>
                      <td className="px-4 py-3">{board.contracted}</td>
                      <td className="px-4 py-3 flex items-center justify-end">
                        <button
                          id="benq-ex2710q-dropdown-button"
                          data-dropdown-toggle="benq-ex2710q-dropdown"
                          className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                          type="button"
                        >
                          <MdMoreHoriz fontSize={24} />
                        </button>
                        <div
                          id="benq-ex2710q-dropdown"
                          className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                        >
                          <ul
                            className="py-1 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="benq-ex2710q-dropdown-button"
                          >
                            <li>
                              <a
                                href="#"
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Show
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Edit
                              </a>
                            </li>
                          </ul>
                          <div className="py-1">
                            <a
                              href="#"
                              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
