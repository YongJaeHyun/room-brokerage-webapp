import ContractBtn from "@/components/board/ContractBtn";
import FavoriteBtn from "@/components/board/FavoriteBtn";
import Image from "next/image";
import { MdRoom, MdHome, MdFavorite } from "react-icons/md";

export default function DetailPage() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white">
          임대글 제목
        </h2>
        <div className="flex items-center justify-center rounded-xl bg-gray-100 mb-4">
          <Image
            width={300}
            height={300}
            src="/images/logo.png"
            className="object-contain"
            alt="product image"
          />
        </div>
        <p className="mb-8 text-xl font-extrabold leading-none text-gray-900 md:text-2xl dark:text-white">
          원룸 월세/보증금 (원)
        </p>
        <dl className="flex items-center space-x-6 mb-4">
          <div>
            <dt className="flex items-center mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              <MdHome fontSize={22} className="mr-1 text-red-400" />
              평(1평당 3.3m<sup>2</sup>)
            </dt>
            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">8평</dd>
          </div>
          <div>
            <dt className="flex items-center mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              <MdRoom fontSize={22} className="mr-1 text-yellow-500" />
              위치
            </dt>
            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
              경상북도 구미시 옥계동 123-12
            </dd>
          </div>
        </dl>
        <dl>
          <dt className="mb-2 font-bold leading-none text-gray-900 dark:text-white">
            상세 설명
          </dt>
          <dd className="mb-4 font-normal text-gray-500 sm:mb-5 dark:text-gray-400 break-words">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt accusantium
            exercitationem quisquam neque reiciendis debitis praesentium repudiandae
            dignissimos assumenda fuga! Consequuntur exercitationem perspiciatis delectus a
            molestias rerum facilis earum dolores.
          </dd>
        </dl>
        <div className="flex w-screen h-20 items-center border-t-2 justify-around fixed left-0 bottom-0 bg-white dark:bg-gray-900">
          <FavoriteBtn />
          <ContractBtn />
        </div>
      </div>
    </section>
  );
}
