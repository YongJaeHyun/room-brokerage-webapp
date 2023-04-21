import api from "@/api";
import Title from "@/components/board/Title";
import ContractNav from "@/components/ContractNav";
import CompletedItem from "@/components/board/CompletedItem";
import { useEffect, useState } from "react";

type Boards = {
  memberId: string;
  boardUuid: string;
  price: string;
  deposit: string;
  title: string;
  space: string;
  done: boolean;
};

export default function CompletedLandlordWishList() {
  const [boards, setBoards] = useState<Boards[]>([]);

  const getBoardContractedByMemberId = async () => {
    const newBoards = await api.board.getBoardContractedByMemberId();
    setBoards(newBoards?.data);
  };

  useEffect(() => {
    getBoardContractedByMemberId();
  }, []);
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <Title main="내놓은 원룸" sub="올리신 원룸들을 살펴보세요!" />
        <ContractNav completed={true} isLandlord={true} />
        {boards?.length === 0 ? (
          <p>등록된 게시물이 없습니다...</p>
        ) : (
          <div className="grid gap-8 mb-6 lg:mb-16 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {boards?.map((board) => (
              <CompletedItem key={board.boardUuid} board={board} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
