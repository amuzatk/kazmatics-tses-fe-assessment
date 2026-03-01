// // src/components/layout/Topbar.tsx
// 'use client';

// import { Search } from 'lucide-react';
// import Image from 'next/image';

// export default function Topbar() {
//   return (
//     <header
//       className="
//         bg-[#fcfcfc]
//         pt-4 pb-2
//         pl-16 lg:pl-5           
//         pr-4 lg:pr-8           
//         flex items-center justify-between
//         border-b border-[#F0F0F0]   /* kept as subtle separator */
//         sticky top-0 z-40           /* helpful when scrolling long pages */
//       "
//     >
//       {/* Left: Search */}
//       <div className="flex items-center gap-4 flex-1">
//         <div 
//           className="
//             relative h-11 
//             w-full max-w-60 sm:max-w-75 lg:max-w-none   
//           "
//         >
//           <input
//             type="text"
//             placeholder="Search soludesk"
//             className="
//               w-full h-full
//               pl-9 lg:pl-5 pr-4               
//               border border-gray-300
//               hover:border-blue-200 focus:outline-blue-200
//               rounded-full                    
//               text-sm lg:text-base
//             "
//           />
//           <Search
//             className="
//               absolute left-3 lg:left-4 top-1/2 -translate-y-1/2
//               h-5 w-5 text-gray-400
//             "
//           />
//         </div>
//       </div>

//       {/* Right: icons + user */}
//       <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
//         {/* Bell + counter */}
//         <Image
//           src="/icons/message-notif.png"
//           width={24}
//           height={24}
//           alt="Notification Icon"
//         />
//         <Image
//           src="/icons/notif-counter.png"
//           width={22}
//           height={28}
//           alt="Notification Counter"
//           className="relative -top-1 -right-2"
//         />

//         {/* Avatar + name/email */}
//         <div className="flex items-center gap-2 lg:gap-3">
//           <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-gray-200 overflow-hidden shrink-0">
//             <Image
//               src="/images/profile.jpg"
//               alt="User"
//               width={48}
//               height={48}
//               className="object-cover"
//             />
//           </div>

//           {/* Name + email only visible ≥ 1024px (lg) */}
//           <div className="hidden lg:block text-right font-inter">
//             <h4 className="font-medium text-base leading-6 text-[#202020]">
//               Madison Greg
//             </h4>
//             <p className="font-normal text-sm leading-6 text-[#636363]">
//               madison.reert...
//             </p>
//           </div>
//         </div>

//         {/* Arrow */}
//         <Image
//           src="/icons/arrow-down.png"
//           width={24}
//           height={24}
//           alt="Chevron down"
//           className="cursor-pointer"
//         />
//       </div>
//     </header>
//   );
// }





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
          <Image src={"/icons/search-normal.png"} width={20} height={20} alt={"Search Icon"}
          className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
          />
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