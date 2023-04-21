import api from "@/api";
import { useEffect, useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

type Props = {
  id: string;
};

const FavoriteBtn = ({ id }: Props) => {
  const [value, setValue] = useState(false);

  const handleFavorite = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await setValue((prev) => !prev);
    await api.wishlist.update({ boardUuid: id, state: !value });
  };

  const getFavoriteByBoardUuid = async () => {
    const isExist: boolean = await api.wishlist.isExist(id);
    const wishlist = isExist
      ? await api.wishlist.getFavoriteByBoardUuid(id)
      : await api.wishlist.create({ boardUuid: id, state: value });
    setValue(wishlist?.state || false);
  };

  useEffect(() => {
    getFavoriteByBoardUuid();
  }, []);
  return (
    <button
      type="button"
      onClick={handleFavorite}
      className="text-black bg-white lg:ml-20 xl:ml-64 inline-flex items-center transition-all border border-gray-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white"
    >
      {value === true ? (
        <MdFavorite className="text-red-500 mr-2" fontSize={22} />
      ) : (
        <MdFavoriteBorder className="text-red-500 mr-2" fontSize={22} />
      )}
      {value === true ? "찜 취소" : "찜 하기"}
    </button>
  );
};

export default FavoriteBtn;
