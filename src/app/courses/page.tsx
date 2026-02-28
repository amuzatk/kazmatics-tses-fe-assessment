import React from 'react'

const Test = () => {
  return (
    <div>
      testtooo
    </div>
  )
}

export default Test




// // app/dashboard/page.tsx  ← Screen 1
// import CourseCard from "@/src/components/ui/CourseCard";
// import { BookOpen, Users, BarChart3 } from "lucide-react";
// import Image from "next/image";
// // import CourseCard from "@/components/ui/CourseCard";

//                 // src="/assets/images/Add-Square.png"

// const mockCourses = [
//   {
//     id: "1",
//     title: "Effective Workplace Communication",
//     description: "Upon completion of this module, participants will: Implement practical communication techniques, ...",
//     category: "Soft Skill",
//     image: "/images/communication.png", // placeholder – use real URLs or local
//   },
//     {
//     id: "2",
//     title: "Mastering Interpersonal Skills",
//     description: "Upon completion of this module, participants will: Implement practical communication techniques, ...",
//     category: "Compliance & Policy",
//     image: "/images/skills.jpg", // placeholder – use real URLs or local
//   }, 
//   {
//     id: "3",
//     title: "Strengthening Team Cohesion",
//     description: "Upon completion of this module, participants will: Implement practical communication techniques, ...",
//     category: "Soft Skill",
//     image: "/images/cohesion.jpg", // placeholder – use real URLs or local
//   },  {
//     id: "4",
//     title: "Enhancing Team Dialogue",
//     description: "Upon completion of this module, participants will: Implement practical communication techniques, ...",
//     category: "Digital Skills",
//     image: "/images/dialog.jpg", // placeholder – use real URLs or local
//   }, 
//   {
//     id: "5",
//     title: "Optimizing Group Dynamics",
//     description: "Upon completion of this module, participants will: Implement practical communication techniques, ...",
//     category: "Business & Strategy",
//     image: "/images/dynamics.jpg", // placeholder – use real URLs or local
//   },  {
//     id: "6",
//     title: "Cultivating Open Communication",
//     description: "Upon completion of this module, participants will: Implement practical communication techniques, ...",
//     category: "Onboarding",
//     image: "/images/cultivate.jpg", // placeholder – use real URLs or local
//   },
//   {
//     id: "7",
//     title: "Optimizing Group Dynamics",
//     description: "Upon completion of this module, participants will: Implement practical communication techniques, ...",
//     category: "Soft Skill",
//     image: "/images/dynamics.jpg", // placeholder – use real URLs or local
//   }, 
//   {
//     id: "8",
//     title: "Cultivating Open Communication",
//     description: "Upon completion of this module, participants will: Implement practical communication techniques, ...",
//     category: "Soft Skill",
//     image: "/images/cultivate.jpg", // placeholder – use real URLs or local
//   },
//   {
//     id: "9",
//     title: "Cultivating Open Communication",
//     description: "Upon completion of this module, participants will: Implement practical communication techniques, ...",
//     category: "Soft Skill",
//     image: "/images/cultivate.jpg", // placeholder – use real URLs or local
//   },
//   {
//     id: "10",
//     title: "Optimizing Group Dynamics",
//     description: "Upon completion of this module, participants will: Implement practical communication techniques, ...",
//     category: "Soft Skill",
//     image: "/images/dynamics.jpg", // placeholder – use real URLs or local
//   }, 
//   {
//     id: "11",
//     title: "Cultivating Open Communication",
//     description: "Upon completion of this module, participants will: Implement practical communication techniques, ...",
//     category: "Soft Skill",
//     image: "/images/cultivate.jpg", // placeholder – use real URLs or local
//   },
//   {
//     id: "12",
//     title: "Cultivating Open Communication",
//     description: "Upon completion of this module, participants will: Implement practical communication techniques, ...",
//     category: "Soft Skill",
//     image: "/images/cultivate.jpg", // placeholder – use real URLs or local
//   },
// ];

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
//           <button className="px-5 py-2.5 border border-[#E8E8E8] text-[#636363] text-[14px] rounded-4xl flex items-center justify-between gap-2">
//             Date 
//                     <Image src={"/icons/calendar.png"} width={20} height={20} alt={"Chevron down"} />
//           </button>
//           <button className="px-5 py-2.5 border border-[#E8E8E8] text-[#636363] text-[14px] rounded-4xl flex items-center justify-between gap-2">
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
//       <div className="flex items-center justify-between pt-6 ">
//         {/* <div className="text-sm text-gray-600">Show 10 / page</div> */}
//          {/* <button className="px-5 py-2.5 border border-[#E8E8E8] text-[#636363] text-[14px] rounded-4xl flex items-center justify-between gap-2">
//             Show 10/page 
//                     <Image src={"/icons/arrow-down.png"} width={20} height={20} alt={"Chevron down"} />
//           </button> */}
//         {/* <div className="flex gap-2">
//           <button className="px-4 py-2 border rounded">Prev</button>
//           <button className="px-4 py-2 bg-blue-600 text-white rounded">01</button>
//           <button className="px-4 py-2 border rounded">02</button>
//           <button className="px-4 py-2 border rounded">Next</button>
//         </div> */}
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