// app/dashboard/courses/[id]/page.tsx
"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import StatsCard from "@/src/components/ui/StatCard";
import Pagination from "@/src/components/ui/Pagination";
import { mockCourses, mockLearners } from "@/src/utils/constants";
import { useState } from "react";

const ITEMS_PER_PAGE = 10;

export default function CourseDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const course = mockCourses.find((c) => c.id === id);

  if (!course) {
    return <div className="p-8 text-center">Course not found</div>;
  }

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(mockLearners.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedLearners = mockLearners.slice(start, start + ITEMS_PER_PAGE);

  // Stats data for this page
  const statsData = [
    {
      icon: "/icons/applicants.png",
      title: "Total Applicants",
      value: "1223",
      trendColor: "text-[#00B000]",
    },
    {
      icon: "/icons/Learners.png",
      title: "Active Learners",
      value: "13",
    },
  ];

  // Ant Design Table columns
  const columns: ColumnsType<(typeof mockLearners)[0]> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full overflow-hidden">
            <Image
              src={record.avatar || "/avatars/Nithya.png"}
              alt={text}
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <span className="font-medium text-[#202020]">{text}</span>
        </div>
      ),
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      render: (text) => <span className="text-[#636363]">{text}</span>,
    },
    {
      title: "Email Address",
      dataIndex: "email",
      key: "email",
      render: (text) => <span className="text-[#636363]">{text}</span>,
    },
    {
      title: "Actions",
      key: "actions",
      width: 80,
      render: () => (
        <button
          onClick={() => router.push(`/dashboard/courses/${id}/learn`)}
          className="text-[#0A60E1] hover:text-blue-700 transition-colors p-1 rounded hover:bg-blue-50"
        >
          <Image
            src="/icons/message-text.png"
            alt="View lessons"
            width={24}
            height={24}
            className="object-cover"
          />
        </button>
      ),
    },
  ];

  return (
    <div className="space-y-6 pb-10">
      {/* Header with back arrow, title, category, button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <button
            onClick={() => router.back()}
            className=" rounded-full cursor-pointer hover:bg-gray-100 transition"
          >
            <Image
              src={"/icons/circle-back.png"}
              alt={"back-arrow"}
              width={44}
              height={44}
              className="object-cover"
            />
          </button>

          <h1 className="font-medium text-2xl text-[#202020]">
            {course.title}
          </h1>
          {/* <Tag color="#EAF3FF" className="mt-1 px-3 py-1 text-[#0A60E1] border-none">
              {course.category}
            </Tag> */}
          <p className="bg-[#E1F5FE] px-5 py-2 rounded-[100px] text-[#035177] border-none">
            {course.category}
          </p>
        </div>

        <button className="bg-[#0A60E1] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
          Start Learning
        </button>
      </div>

      {/* Hero banner */}
      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
        <Image
          src={course.image || "/images/communication.png"}
          alt="Course banner"
          fill
          className="object-cover"
        />
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {statsData.map((stat, i) => (
          <StatsCard key={i} {...stat} />
        ))}
      </div>

      {/* Learners Table */}
      <div className="bg-white rounded-xl border border-[#F0F0F0] overflow-hidden">
        <Table
          columns={columns}
          dataSource={paginatedLearners}
          rowKey="id"
          pagination={false}
          className="border-none"
          scroll={{ x: "max-content" }}
        />

        {/* Pagination */}
        <div className="p-5 border-t border-[#F0F0F0]">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
            showItemsPerPage={true}
          />
        </div>
      </div>
    </div>
  );
}
