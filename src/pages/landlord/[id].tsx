import api from "@/api";
import ContractBtn from "@/components/landlord/ContractBtn";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { MdHome, MdRoom } from "react-icons/md";

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

type ContractMember = {
  contractedMemberId: string;
  contracted: string;
};

type Props = {
  params: {
    id: string;
  };
};

export default function DetailPage({ params: { id } }: Props) {
  const [board, setBoard] = useState<Board | null>(null);
  const [contractMember, setContractMember] = useState<ContractMember[]>([]);

  const getBoardByBoardUuid = useCallback(async () => {
    const newBoards = await api.board.getBoardByBoardUuid(id);
    const members = await api.board.getBoardContractingByBoardUuid(newBoards.boardUuid);
    console.log(members);
    setBoard(newBoards);
    setContractMember(members.data);
  }, [id]);

  useEffect(() => {
    getBoardByBoardUuid();
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-6 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white">
          {board?.title}
        </h2>
        <div className="flex items-center justify-center rounded-xl bg-gray-100 mb-4">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            src="/images/logo.png"
            className="w-1/2 h-auto m-3"
            alt="product image"
          />
        </div>
        <p className="mb-8 text-xl font-extrabold leading-none text-gray-900 md:text-2xl dark:text-white">
          {`월세 ${board?.price}/${board?.deposit}`}
        </p>
        <dl className="flex items-center space-x-6 mb-6 bg-gray-200 px-5 py-5 rounded-lg">
          <div>
            <dt className="flex items-center mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              <MdHome fontSize={22} className="mr-1 text-red-400" />
              평(1평 당 3.3m<sup>2</sup>)
            </dt>
            <dd className="font-light text-black dark:text-gray-400">{board?.space}</dd>
          </div>
          <div>
            <dt className="flex items-center mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              <MdRoom fontSize={22} className="mr-1 text-yellow-500" />
              위치
            </dt>
            <dd className="font-light text-black dark:text-gray-400">{board?.location}</dd>
          </div>
        </dl>
        <dl>
          <dt className="mb-2 font-bold leading-none text-gray-900 dark:text-white">
            상세 설명
          </dt>
          <dd className="mb-4 font-normal text-gray-500 sm:mb-5 dark:text-gray-400 break-words">
            {board?.text}
          </dd>
        </dl>
        <dl className="mt-4">
          <dt className="mb-2 font-bold leading-none text-gray-900 dark:text-white">
            계약 신청한 아이디
          </dt>
          <dd className="mb-4 font-normal text-gray-500 sm:mb-5 dark:text-gray-400 break-words">
            {contractMember.length === 0 ? (
              <p>아직 신청한 사람이 없어요...</p>
            ) : (
              contractMember?.map((member) => (
                <div key={member.contractedMemberId} className="flex justify-between items-align bg-gray-100 p-3 rounded-lg">
                  <p className="flex items-center">{member.contractedMemberId}</p>
                  <ContractBtn board={board} />
                </div>
              ))
            )}
          </dd>
        </dl>
      </div>
    </section>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      params: context.params,
    },
  };
};
