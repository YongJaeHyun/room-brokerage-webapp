import api from "@/api";
import CompletedItem from "@/components/board/CompletedItem";
import Title from "@/components/board/Title";
import ContractNav from "@/components/ContractNav";
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

const completed = () => {
  const [boards, setBoards] = useState<Boards[]>([]);

  const getBoardContractedByContractedMemberId = async () => {
    const newBoards = await api.board.getBoardContractedByContractedMemberId();
    console.log(newBoards);
    setBoards(newBoards?.data);
  };

  useEffect(() => {
    getBoardContractedByContractedMemberId();
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <Title main="계약 신청한 원룸" sub="계약 신청한 원룸들을 살펴보세요!" />
        <ContractNav completed={true} isLandlord={false} />
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
};

export default completed;
