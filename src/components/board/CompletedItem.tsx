import CreateReview from "../modal/CreateReview";

type Board = {
  memberId: string;
  price: string;
  deposit: string;
  title: string;
  space: string;
  done: boolean;
};

type Props = {
  board: Board;
};

const CompletedItem = ({ board }: Props) => {
  const { price, deposit, title, space, memberId, done } = board;
  return (
    <div className="items-start flex-col bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-700 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800">
      <img className="w-full rounded-lg" src="/images/logo.png" alt="Bonnie Avatar" />
      <div className="p-5 pt-0 w-full">
        <h3 className="flex items-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {`월세 ${price}/${deposit}`}
        </h3>
        <span className="text-gray-500 dark:text-gray-400">{`${space}평`}</span>
        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{title}</p>
        <ul className="flex justify-center sm:mt-0">
          <li>
            <CreateReview receiveId={memberId} done={done}/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CompletedItem;
