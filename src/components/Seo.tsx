import Head from "next/head";

type Props = {
  title: string;
};

const Seo = ({ title }: Props) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default Seo;
