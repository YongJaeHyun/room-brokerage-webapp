import { useState } from "react";

type Props = {
  type?: string;
  name: string;
  labelName: string;
  placeholder: string;
};

const Input = ({ type, name, labelName, placeholder }: Props) => {
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  return (
    <div>
      <label
        htmlFor="ID"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {labelName}
      </label>
      <input
        type={type || "text"}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;
