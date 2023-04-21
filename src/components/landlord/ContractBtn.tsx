import api from "@/api";
import Link from "next/link";

type Board = {
  boardUuid: string;
  memberId: string;
  price: string;
  deposit: string;
  title: string;
  space: string;
  location: string;
  text: string;
  contracted: string;
};

type Props = {
  board: Board | null;
};

const ContractBtn = ({ board }: Props) => {
  const doContract = async () => {
    if (board) {
      const { boardUuid } = board;
      await api.board.updateByLandlord({
        boardUuid,
        contracted: "완료",
      });
      await api.historyBoard.update({ boardUuid, contracted: "완료" });
    }
  };

  return (
    <Link href="/landlord/completed">
      <button
        type="button"
        onClick={doContract}
        className="text-white inline-flex items-center transition-all border border-gray-500 bg-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg px-3 py-1 dark:text-white"
      >
        계약하기
      </button>
    </Link>
  );
};

export default ContractBtn;
