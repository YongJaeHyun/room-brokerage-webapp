type Props = {
  value: string;
};

const Title = ({ value }: Props) => {
  return (
    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
      {value}
    </h1>
  );
};

export default Title;
