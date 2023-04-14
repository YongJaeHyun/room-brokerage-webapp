import { useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const FavoriteBtnOnCard = () => {
  const [value, setValue] = useState(false);
  const handleChange = () => {
    setValue((prev) => !prev);
  };
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
