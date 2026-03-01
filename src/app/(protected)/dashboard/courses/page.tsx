// app/dashboard/courses/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import CourseCard from '@/src/components/ui/CourseCard';
import { mockCourses } from '@/src/utils/constants';
import StatsCard from '@/src/components/ui/StatCard';
import Pagination from '@/src/components/ui/Pagination';

const ITEMS_PER_PAGE = 10;

const statsData = [
  { icon: '/icons/course-mgt.png', title: 'Total courses', value: '123' },
  { icon: '/icons/enrollment.png', title: 'Total Enrollments', value: '11' },
  {
    icon: '/icons/completion.png',
    title: 'Avg Completion',
    value: '99%',
    trend: '12% up from last month',
    trendColor: 'text-[#00B000]',
  },
];

export default function CoursesPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(mockCourses.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginated = mockCourses.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div 
    className="space-y-8 "
    >
      {/* Header */}
      <div className="mb-5">
        <h2 className="font-inter font-medium text-[24px] leading-8 text-[#202020]">
          Course Management
        </h2>
        <p className="font-inter font-normal text-[14px] leading-5 text-[#636363]">
          Create, organize, and assign courses to teams and individuals
        </p>
      </div>

      {/* Stats – restored original container & style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statsData.map((stat, i) => (
          <StatsCard key={i} {...stat} />
        ))}
      </div>

      {/* Main content card – restored bg & padding */}
      <div className="p-5 rounded-xl flex flex-col gap-8 bg-[#fcfcfc]">
        {/* Search + filter – almost exact original */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div 
            className="relative h-11 w-full sm:w-[60%] px-4 py-2 border border-[#F0F0F0] hover:border-blue-200 focus:outline-blue-200 rounded-full"
            >
                           <input
                    type="text"
                    placeholder="Search Course"                     
                  />
                    <Image src={"/icons/search-normal.png"} width={20} height={20} alt={"Search Icon"}
                    className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                    />
                  </div>
          <div className="flex gap-4">
            <button className="px-5 py-2.5 border border-[#E8E8E8] text-[#636363] text-[14px] rounded-full flex items-center gap-2 hover:bg-gray-50">
              Date
              <Image src="/icons/calendar.png" width={20} height={20} alt="down" />
            </button>
            <button className="px-5 py-2.5 border border-[#E8E8E8] text-[#636363] text-[14px] rounded-full flex items-center gap-2 hover:bg-gray-50">
              Category
              <Image src="/icons/arrow-down.png" width={20} height={20} alt="down" />
            </button>
          </div>
        </div>

        {/* Course grid – columns: 1 → 2 → 3 → 4 only on very large screens */}
        <div 
        // className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5"
        >
          {paginated.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Reusable Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          showItemsPerPage={true}
        />
      </div>
    </div>
  );
}








// // app/dashboard/courses/page.tsx  ← Screen 1 PREVIOUS VERSION
// import CourseCard from "@/src/components/ui/CourseCard";
// import { mockCourses } from "@/src/utils/constants";
// import { BookOpen, Users, BarChart3 } from "lucide-react";
// import Image from "next/image";

// export default function Courses() {
//   return (
//     <div className="space-y-8">
//       {/* Header section */}
// <div className="mb-5">
//   <h2 className="font-inter font-medium text-[24px] leading-8 mb-2 text-[#202020]">
//     Course Management
//   </h2>
//   <p className="font-inter font-normal text-[14px] leading-5 text-[#636363]">
//     Create, organize, and assign courses to teams and individuals
//   </p>
// </div>

//       {/* Stats row */}
//       <div 
//       // className="grid grid-cols-1 md:grid-cols-3 gap-6"
//       className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//       >
//         <StatsCard icon={BookOpen} title="Total courses" value="123" />
//         <StatsCard icon={Users} title="Total Enrollments" value="11" />
//         <StatsCard
//           icon={BarChart3}
//           title="Avg Completion"
//           value="99%"
//           trend="12% up from last month"
//           trendColor="text-green-600"
//         />
//       </div>

//       <div className="p-5 rounded-xl flex flex-col gap-8 bg-[#fcfcfc] ">


//       {/* Search + filter */}
//       <div className="flex items-center justify-between">
//         <input
//           type="text"
//           placeholder="Search Course"
//           className=" lg:w-[60%] px-4 py-2 border border-[#F0F0F0] hover:border-blue-200  focus:outline-blue-200 rounded-4xl"
//         />
//         <div className="flex gap-4">
//           <button className="px-5 py-2.5 border border-[#E8E8E8] cursor-pointer text-[#636363] text-[14px] rounded-4xl flex items-center justify-between gap-2">
//             Date 
//                     <Image src={"/icons/calendar.png"} width={20} height={20} alt={"Chevron down"} />
//           </button>
//           <button className="px-5 py-2.5 border border-[#E8E8E8] cursor-pointer text-[#636363] text-[14px] rounded-4xl flex items-center justify-between gap-2">
//             Category 
//                     <Image src={"/icons/arrow-down.png"} width={20} height={20} alt={"Chevron down"} />
//           </button>
//         </div>
//       </div>

//       {/* Course grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//         {mockCourses.map((course) => (
//           <CourseCard key={course.id} course={course} />
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex items-center justify-between pt-4 ">
//          <button className="px-5 py-2.5 border border-[#E8E8E8] cursor-pointer text-[#636363] text-[14px] rounded-4xl flex items-center justify-between gap-2">
//             Show 10/page 
//                     <Image src={"/icons/arrow-down.png"} width={20} height={20} alt={"Chevron down"} />
//           </button>

//         <div className="flex gap-3.5">
//           <button className=" cursor-pointer text-[#8C8C8C] text-[16px] ">Prev</button>
          
//           <div className="flex gap-5">
//           <button className=" w-8 h-8 cursor-pointer bg-blue-600 text-[#FDFDFD] text-[14px] rounded-[100%] ">01</button>
//           <button className=" w-8 h-8 cursor-pointer bg-[#fdfdfd] border border-1-[#fdfdfd] text-[#0A60E1] text-[14px] rounded-[100%] ">02</button>
//           <button className=" w-8 h-8 cursor-pointer bg-[#fdfdfd] border border-1-[#fdfdfd] text-[#0A60E1] text-[14px] rounded-[100%] ">03</button>
//           <button className=" w-8 h-8 cursor-pointer bg-[#fdfdfd] border border-1-[#fdfdfd] text-[#0A60E1] text-[14px] rounded-[100%] ">04</button>
//           <button className=" w-8 h-8 cursor-pointer bg-[#fdfdfd] border border-1-[#fdfdfd] text-[#0A60E1] text-[14px] rounded-[100%] ">05</button>
//           <button className=" w-8 h-8 cursor-pointer bg-[#fdfdfd] border border-1-[#fdfdfd] text-[#0A60E1] text-[14px] rounded-[100%] ">...</button>
//           <button className=" w-8 h-8 cursor-pointer bg-[#fdfdfd] border border-1-[#fdfdfd] text-[#0A60E1] text-[14px] rounded-[100%] ">24</button>
         
//           </div>
         
//           <button className="cursor-pointer text-[16px] text-[#0A60E1] ">Next</button>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// }

// // Helper component
// function StatsCard({
//   icon: Icon,
//   title,
//   value,
//   trend,
//   trendColor = "text-gray-600",
// }: {
//   icon: any;
//   title: string;
//   value: string;
//   trend?: string;
//   trendColor?: string;
// }) {
//   return (
//     <div className="bg-[#F6F7F6] flex justify-between items-center border-4 border-[#FDFDFD]  p-3 rounded-lg ">
//       <div className="flex items-center  gap-3 justify-between">
//         <Icon className="h-11 w-11" />
//         <div>
//           <h4 className="text-[16px]  text-[#636363]">{title}</h4>
//           <p className="text-[24px] text-[#202020] font-bold mt-1">{value}</p>
//         </div>
//       </div>
//       {trend && 
//       <div className="flex justify-center items-center gap-1 self-end">
//       <Image src={"/icons/auto-conversions.png"} width={15} height={15} alt={"Auto-Conversion"} />
      
//       <p className={`text-[10px] text-[#00B000] ${trendColor}`}>{trend}</p>
//       </div>
//       }
//     </div>
//   );
// }