import Image from "next/image";

export default function Topbar() {
  return (
    <header className="bg-[#fcfcfc] pt-4 pb-2 pl-15 lg:pl-5 pr-4 md:pr-8 flex items-center justify-between  ">
      <div className="relative h-11  lg:w-93.25 ">
        <input
          type="text"
          placeholder="Search soludesk"
          className="w-full h-full pl-5 py-2.5 border  border-gray-300 hover:border-blue-200 focus:outline-blue-200 rounded-4xl"
        />
        <Image
          src={"/icons/search-normal.png"}
          width={20}
          height={20}
          alt={"Search Icon"}
          className="absolute right-7 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
        />
      </div>

      <div className="flex items-center gap-5">
        <Image
          src={"/icons/message-notif.png"}
          width={24}
          height={24}
          alt={"Notification Icon"}
          className="hidden sm:flex"
        />

        <Image
          src={"/icons/notif-counter.png"}
          width={22}
          height={28}
          alt={"Notification Counter"}
          className="hidden sm:flex"
        />

        <div className="md:flex items-center hidden gap-2">
          <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
            <Image
              src="/images/profile.jpg"
              alt="User"
              width={48}
              height={48}
            />
          </div>
          <div className="text-right font-inter">
            <h4 className="font-medium text-base leading-6 text-[#202020]">
              Madison Greg
            </h4>
            <p className="font-normal text-sm leading-6 text-[#636363]">
              madison.reert...
            </p>
          </div>
        </div>

        <Image
          src={"/icons/arrow-down.png"}
          width={24}
          height={24}
          alt={"Chevron down"}
        />
      </div>
    </header>
  );
}
