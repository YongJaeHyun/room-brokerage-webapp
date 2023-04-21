import api from "@/api";
import Item from "@/components/board/Item";
import Title from "@/components/board/Title";
import { useEffect, useState } from "react";

type Boards = {
  boardUuid: string;
  price: string;
  deposit: string;
  title: string;
  space: string;
};

export default function LesseeWishList() {
  const [boards, setBoards] = useState<Boards[]>([]);

  const getBoardByMemberId = async () => {
    const newBoards = await api.board.getAllFavorite();
    console.log(newBoards);
    setBoards(newBoards?.data);
  };

  useEffect(() => {
    getBoardByMemberId();
  }, []);
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <Title main="찜한 원룸" sub="마음에 드셨던 원룸들을 살펴보세요!" />
        {boards?.length === 0 ? (
          <p>등록된 게시물이 없습니다...</p>
        ) : (
          <div className="grid gap-8 mb-6 lg:mb-16 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {boards?.map((board) => (
              <Item key={board.boardUuid} id={board.boardUuid} board={board} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
