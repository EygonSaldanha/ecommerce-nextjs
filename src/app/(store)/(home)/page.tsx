import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6 ">
      <Link
        href={"/"}
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end">
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          src="/camiseta-dowhile-2022.png"
          alt=""
          width={920}
          height={920}
          quality={100}
        />

        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-4">
          <span className="text-sm truncate">
            Camiqweqeqweqweqweqweqweqweqweqwseta
          </span>
          <span className="flex h-full min-w-28 items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$ 159,90
          </span>
        </div>
      </Link>
      <Link
        href={"/"}
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end">
        <Image
          className="group-hover:scale-105 transition-transform duration-500 items-end"
          src="/camiseta-dowhile-2022.png"
          alt=""
          width={920}
          height={920}
          quality={100}
        />
        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-4">
          <span className="text-sm truncate">
            Camiqweqeqweqweqweqweqweqweqweqwseta
          </span>
          <span className="flex h-full min-w-28 items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$ 159,90
          </span>
        </div>
      </Link>
      <Link
        href={"/"}
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end">
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          src="/camiseta-dowhile-2022.png"
          alt=""
          width={920}
          height={920}
          quality={100}
        />
        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-4">
          <span className="text-sm truncate">
            Camiqweqeqweqweqweqweqweqweqweqwseta
          </span>
          <span className="flex h-full min-w-28 items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$ 159,90
          </span>
        </div>
      </Link>
    </div>
  );
}
