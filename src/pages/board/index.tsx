import api from "@/api";
import Item from "@/components/board/Item";
import SearchBox from "@/components/board/SearchBox";
import Title from "@/components/board/Title";
import { useEffect, useState } from "react";

type Boards = {
  boardUuid: string;
  price: string;
  deposit: string;
  title: string;
  space: string;
};

export default function Board() {
  const [boards, setBoards] = useState<Boards[]>([]);

  const getAllBoards = async () => {
    const newBoards = await api.board.getAllBoards();
    setBoards(newBoards.data);
  };

  useEffect(() => {
    getAllBoards();
  }, []);
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <Title main="원룸 찾기" sub="원하는 조건으로 검색해서 찾아보세요!" />
        <SearchBox />
       {boards.length === 0 ? (
          <p>등록된 게시물이 없습니다...</p>
        ) : (
          <div className="grid gap-8 mb-6 lg:mb-16 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {boards?.map((board) => (
              <Item key={board.boardUuid} id={board.boardUuid} board={board}/>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
