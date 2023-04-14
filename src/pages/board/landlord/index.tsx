import Title from "@/components/board/Title";
import Item from "@/components/board/landlord/Item";
import Nav from "@/components/board/landlord/Nav";
import Link from "next/link";

export default function LandlordBoard() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <Title main="내놓은 원룸" sub="올리신 원룸들을 살펴보세요!" />
        <Nav completed={false} />
        <div className="grid gap-8 mb-6 lg:mb-16 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, idx) => (
            <Item key={idx} id={String(idx)} />
          ))}
        </div>
      </div>
    </section>
  );
}
