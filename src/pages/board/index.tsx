import Item from "@/components/board/Item";
import SearchBox from "@/components/board/SearchBox";
import Title from "@/components/board/Title";

export default function Board() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <Title main="원룸 찾기" sub="원하는 조건으로 검색해서 찾아보세요!" />
        <SearchBox />
        <div className="grid gap-8 mb-6 lg:mb-16 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, idx) => (
            <Item key={idx}/>
          ))}
        </div>
      </div>
    </section>
  );
}
