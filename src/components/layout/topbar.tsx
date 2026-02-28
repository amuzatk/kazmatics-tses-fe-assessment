import { Bell, Search } from "lucide-react";
import Image from "next/image";

export default function Topbar() {
  return (
    <header className="bg-[#fcfcfc] pt-4 pl-5  pb-2  pr-8 flex items-center justify-between  ">
      <div className="flex items-center gap-4">
        <div className="relative h-11 w-93.25 ">
                 <input
          type="text"
          placeholder="Search soludesk"
        //   className="w-full px-4 py-2 border border-[#F0F0F0] hover:border-blue-200 focus:border-blue-200 rounded-4xl"
            className="w-full h-full pl-5 py-2.5 border border-gray-300 hover:border-blue-200 focus:outline-blue-200 rounded-4xl"
        />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          {/* <input
            type="text"
            placeholder="Search solodesk"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          /> */}
        </div>
      </div>

      <div className="flex items-center gap-5">
        <Image src={"/icons/message-notif.png"} width={24} height={24} alt={"Notification Icon"} />

        <Image src={"/icons/notif-counter.png"} width={22} height={28} alt={"Notification Counter"} />


        <div className="flex items-center gap-2">
             <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
            <Image src="/images/profile.jpg" alt="User" width={48} height={48} />
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

        <Image src={"/icons/arrow-down.png"} width={24} height={24} alt={"Chevron down"} />

      </div>
    </header>
  );
}