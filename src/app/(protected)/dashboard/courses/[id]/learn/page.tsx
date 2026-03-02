"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

import { mockCourses, modules } from "@/utils/constants";
import QuizForm from "@/components/ui/QuizForm";
import LessonSidebar from "@/components/ui/LessonSidebar";

export default function LessonViewerPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const course = mockCourses.find((c) => c.id === id);

  if (!course) {
    return <div className="p-10 text-center text-xl">Course not found</div>;
  }

  const [completedLessons, setCompletedLessons] = useState<Set<string>>(
    new Set(),
  );

  const [activeModule, setActiveModule] = useState<string>("introduction");

  const [activeLesson, setActiveLesson] = useState<string>("welcome");


  // ==============================
  // MARK COMPLETE + AUTO ADVANCE
  // ==============================

  const markComplete = (lessonKey: string) => {
    setCompletedLessons((prev) => new Set([...prev, lessonKey]));

    const currentModuleObj = modules.find((m) => m.key === activeModule);

    if (!currentModuleObj || currentModuleObj.isQuiz) return;

    const lessonIndex = currentModuleObj.lessons.findIndex(
      (l) => l.key === lessonKey,
    );

    if (lessonIndex < 0) return;

    // Next lesson
    if (lessonIndex < currentModuleObj.lessons.length - 1) {
      setActiveLesson(currentModuleObj.lessons[lessonIndex + 1].key);
    } else {
      // Move to next module
      const moduleIndex = modules.findIndex((m) => m.key === activeModule);

      if (moduleIndex < modules.length - 1) {
        const nextModule = modules[moduleIndex + 1];
        setActiveModule(nextModule.key);

        if (!nextModule.isQuiz && nextModule.lessons.length > 0) {
          setActiveLesson(nextModule.lessons[0].key);
        }
      }
    }
  };

  // ==============================
  // CURRENT LESSON
  // ==============================

  const currentLesson = modules
    .flatMap((m) => m.lessons)
    .find((l) => l.key === activeLesson) || { title: "", body: "" };

  const isQuizActive = activeModule === "assessment";

  return (
    <div className="min-h-screen bg-[#f7f7f7] pb-16">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <button
          onClick={() => router.back()}
          className="rounded-full hover:bg-gray-100 transition"
        >
          <Image
            src="/icons/circle-back.png"
            alt="back-arrow"
            width={44}
            height={44}
          />
        </button>

        <h1 className="font-medium text-xl sm:text-2xl md:text-2xl text-[#202020]">
          {course.title}
        </h1>

        <p className="bg-[#E1F5FE] flex items-center justify-center px-4 py-1.5 text-xs sm:text-[14px] md:text-[14px] rounded-full text-[#035177]">
          {course.category}
        </p>
      </div>

      {/* MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto pt-5.5 ">
        <div className="flex flex-col md:flex-row gap-5.5">
          {/* LEFT SIDE */}
          <div className="flex-1 space-y-5">
            {/* VIDEO (Hidden when Quiz active) */}
            {!isQuizActive && (
              <div className="rounded-xl overflow-hidden shadow-sm bg-black aspect-video relative">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1&autoplay=0"
                  title="Course video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            {/* TABS */}
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                <button className=" p-3 border-b-2 border-[#0A60E1] text-[#0A60E1] text-[16px] ">
                  Course Content
                </button>
                <button className=" text-[16px]  text-gray-500">
                  Review/Feedbacks
                </button>
              </nav>
            </div>

            {/* LESSON CONTENT */}
            {!isQuizActive && currentLesson.title && (
              <div className="bg-[#f7f7f7] rounded-xl border border-[#D9D9D9] ">
                <div className="bg-white rounded-tr-xl rounded-tl-xl ">
                  <div className="border-b h-15 flex justify-items-start items-center p-5 border-[#D9D9D9] ">
                    <h2 className="text-[14px] text-[#202020] font-bold ">
                      {currentLesson.title}
                    </h2>
                  </div>

                  <p className="text-[14px] h-auto p-5 pb-0 text-[#636363]">
                    {currentLesson.body}
                  </p>
                </div>

                <div className="flex justify-end mt-15 mr-5 mb-10 ">
                  <button
                    onClick={() => markComplete(activeLesson)}
                    className="w-57 h-12 
               rounded-lg 
               px-6 py-3
               border border-[#0063EF]
               text-[#0063EF]
               text-[16px]
               font-normal
               hover:bg-[#EAF3FF]
               transition"
                  >
                    Mark as complete
                  </button>
                </div>
              </div>
            )}

            {/* QUIZ */}
            {isQuizActive && (
              <QuizForm
                onComplete={() => {
                  markComplete("assessment");

                  // collapse assessment
                  setActiveModule("");
                }}
              />
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="w-full md:w-96 h-182 ">
            <LessonSidebar
              modules={modules}
              activeModule={activeModule}
              activeLesson={activeLesson}
              completedLessons={completedLessons}
              onModuleChange={(key) => setActiveModule(key)}
              onLessonClick={(moduleKey, lessonKey) => {
                setActiveModule(moduleKey);
                setActiveLesson(lessonKey);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
