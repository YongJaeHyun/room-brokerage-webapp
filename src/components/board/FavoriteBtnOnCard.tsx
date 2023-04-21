import api from "@/api";
import { useEffect, useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

type Props = {
  id: string;
};

const FavoriteBtnOnCard = ({ id }: Props) => {
  const [value, setValue] = useState(false);

  const handleChange = async (e: React.MouseEvent<HTMLButtonElement>) => {
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
      onClick={handleChange}
      className="inline-flex items-center transition-all focus:outline-none font-medium rounded-lg text-sm text-center dark:text-white"
    >
      {value === true ? (
        <MdFavorite className="text-red-500" fontSize={26} />
      ) : (
        <MdFavoriteBorder className="text-red-500" fontSize={26} />
      )}
    </button>
  );
};

export default FavoriteBtnOnCard;
