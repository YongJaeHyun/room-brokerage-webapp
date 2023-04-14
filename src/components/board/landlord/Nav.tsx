import Link from "next/link";

type Props = {
  completed: boolean;
};

const Nav = ({ completed }: Props) => {
  return (
    <>
      {completed ? (
        <div className="flex justify-evenly items-center rounded-xl w-full h-16 bg-gray-100 m-auto mb-10">
          <div>
            <Link
              href="/board/landlord"
              className="font-bold text-lg p-1"
            >
              진행중인 계약
            </Link>
          </div>
          <div>
            <Link href="/board/landlord/completed" className="font-bold text-lg text-primary-500 border-b-2 p-1 border-primary-500">
              완료된 계약
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex justify-evenly items-center rounded-xl w-full h-16 bg-gray-100 m-auto mb-10">
          <div>
            <Link
              href="/board/landlord"
              className="font-bold text-lg text-primary-500 border-b-2 p-1 border-primary-500"
            >
              진행중인 계약
            </Link>
          </div>
          <div>
            <Link href="/board/landlord/completed" className="font-bold text-lg p-1">
              완료된 계약
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
