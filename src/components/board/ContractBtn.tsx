import api from "@/api";
import { useEffect, useState } from "react";

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
  const [value, setValue] = useState<string | undefined>("");

  const doContract = async () => {
    if (board) {
      const { boardUuid, price, deposit, title, space, location, text, memberId } = board;
      await api.board.updateByLessee({
        boardUuid,
        memberId,
        price,
        deposit,
        title,
        space,
        location,
        text,
        contracted: "진행중",
      });
      await setValue("진행중");
      await api.historyBoard.update({ boardUuid, contracted: "진행중" });
    }
  };

  const cancelContract = async () => {
    if (board) {
      const { boardUuid, price, deposit, title, space, location, text, memberId } = board;
      const localMemberId = localStorage.getItem("MEMBER_ID");
      if (localMemberId === memberId) {
        alert("같은 닉네임끼리 계약할 수 없습니다.");
      } else {
        await setValue("대기");
        await api.board.updateByLessee({
          boardUuid,
          memberId,
          price,
          deposit,
          title,
          space,
          location,
          text,
          contracted: "대기",
        });
        await api.historyBoard.update({ boardUuid, contracted: "대기" });
      }
    }
  };

  const initValue = async () => {
    await setValue(board?.contracted);
  };

  useEffect(() => {
    initValue();
  }, [board]);

  return (
    <>
      {value === "진행중" ? (
        <button
          type="button"
          onClick={cancelContract}
          className="text-white lg:mr-20 xl:mr-64 inline-flex items-center transition-all border border-gray-500 bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-bold px-8 py-2.5 text-center dark:text-white"
        >
          신청 취소
        </button>
      ) : (
        <button
          type="button"
          onClick={doContract}
          className="text-white lg:mr-20 xl:mr-64 inline-flex items-center transition-all border border-gray-500 bg-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-bold px-8 py-2.5 text-center dark:text-white"
        >
          계약 신청
        </button>
      )}
    </>
  );
};

export default ContractBtn;
