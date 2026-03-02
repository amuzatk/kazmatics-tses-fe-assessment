"use client";

import { useState } from "react";
import Image from "next/image";
import CourseCard from "@/components/ui/CourseCard";
import { mockCourses } from "@/utils/constants";
import StatsCard from "@/components/ui/StatCard";
import Pagination from "@/components/ui/Pagination";

const ITEMS_PER_PAGE = 10;

const statsData = [
  { icon: "/icons/course-mgt.png", title: "Total courses", value: "123" },
  { icon: "/icons/enrollment.png", title: "Total Enrollments", value: "11" },
  {
    icon: "/icons/completion.png",
    title: "Avg Completion",
    value: "99%",
    trend: "12% up from last month",
    trendColor: "text-[#00B000]",
  },
];

export default function CoursesPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(mockCourses.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginated = mockCourses.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="space-y-8 ">
      {/* Header */}
      <div className="mb-5">
        <h2 className="font-inter font-medium text-[20px] leading-6 md:text-[24px] md:leading-8 text-[#202020]">
          Course Management
        </h2>

        <p className="font-inter font-normal text-[12px] leading-4 md:text-[14px] md:leading-5 text-[#636363]">
          Create, organize, and assign courses to teams and individuals
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statsData.map((stat, i) => (
          <StatsCard key={i} {...stat} />
        ))}
      </div>

      {/* Main content card */}
      <div className="p-0 md:p-5 pb-10 rounded-xl flex flex-col gap-8 bg-[#fcfcfc]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="relative h-11 w-h sm:w-[60%] ">
            <input
              type="text"
              placeholder="Search Course"
              className="w-full h-full px-4  border border-gray-300 hover:border-blue-200 focus:outline-blue-200 rounded-4xl"
            />
            <Image
              src={"/icons/search-normal.png"}
              width={20}
              height={20}
              alt={"Search Icon"}
              className="absolute right-7 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
            />
          </div>
          <div className="flex gap-4">
            <button className="px-5 py-2.5 border border-[#E8E8E8] text-[#636363] text-[14px] rounded-full flex items-center gap-2 hover:bg-gray-50">
              Date
              <Image
                src="/icons/calendar.png"
                width={20}
                height={20}
                alt="down"
              />
            </button>
            <button className="px-5 py-2.5 border border-[#E8E8E8] text-[#636363] text-[14px] rounded-full flex items-center gap-2 hover:bg-gray-50">
              Category
              <Image
                src="/icons/arrow-down.png"
                width={20}
                height={20}
                alt="down"
              />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
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
