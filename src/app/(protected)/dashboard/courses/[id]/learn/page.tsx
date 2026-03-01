// app/dashboard/courses/[id]/learn/page.tsx
"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

import { mockCourses } from "@/src/utils/constants";
import QuizForm from "@/src/components/ui/QuizForm";
import LessonSidebar from "@/src/components/ui/LessonSidebar";
import { courseModules } from "@/src/utils/courseModules";

// ==============================
// MODULE DATA
// ==============================

// const modules = [
//   {
//     key: "introduction",
//     title: "Introduction",
//     lessons: [
//       {
//         key: "welcome",
//         title: "Welcome Message",
//         body: "Welcome to the course...",
//       },
//       { key: "note-style", title: "A Note on Style", body: "..." },
//       { key: "what-learn", title: "What You'll Learn", body: "..." },
//       { key: "instructor", title: "Meet Your Instructor", body: "..." },
//     ],
//   },
//   {
//     key: "setup",
//     title: "Setting Up Your Workspace",
//     lessons: [
//       {
//         key: "setup-1",
//         title: "Lesson 1 - Workspace Basics",
//         body: "Step-by-step setup guide...",
//       },
//       {
//         key: "setup-2",
//         title: "Lesson 2 - Tools & Notifications",
//         body: "Configuring alerts and preferences...",
//       },
//     ],
//   },
//   {
//     key: "navigate",
//     title: "Navigating the Course",
//     lessons: [
//       {
//         key: "navigate-1",
//         title: "Lesson 1 - Platform Overview",
//         body: "...",
//       },
//       {
//         key: "navigate-2",
//         title: "Lesson 2 - Progress Tracking",
//         body: "How to track your learning progress...",
//       },
//     ],
//   },
//   {
//     key: "resources",
//     title: "Course Resources",
//     lessons: [
//       {
//         key: "resources-1",
//         title: "Lesson 1 - Downloads & PDFs",
//         body: "Accessing downloadable materials...",
//       },
//       {
//         key: "resources-2",
//         title: "Lesson 2 - External Links",
//         body: "Recommended external resources...",
//       },
//     ],
//   },
//   {
//     key: "assessment",
//     title: "Assessment",
//     isQuiz: true,
//     lessons: [],
//   },
// ];

const modules = courseModules;

// ==============================
// COMPONENT
// ==============================

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

  // const isLessonComplete = (key: string) => completedLessons.has(key);

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

  // ==============================
  // UI
  // ==============================

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 sm:px-6 lg:px-8 pt-6">
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

          <h1 className="font-medium text-2xl text-[#202020]">
            {course.title}
          </h1>

          <p className="bg-[#E1F5FE] px-5 py-2 rounded-full text-[#035177]">
            {course.category}
          </p>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex gap-8">
          {/* LEFT SIDE */}
          <div className="flex-1 space-y-8">
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
                <button className="pb-4 border-b-2 border-[#0A60E1] text-[#0A60E1] font-medium">
                  Course Content
                </button>
                <button className="pb-4 text-gray-500">Review/Feedbacks</button>
              </nav>
            </div>

            {/* LESSON CONTENT */}
            {!isQuizActive && currentLesson.title && (
              <div className="bg-white rounded-xl border border-gray-200 p-8">
                <h2 className="text-xl font-semibold mb-6">
                  {currentLesson.title}
                </h2>

                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {currentLesson.body}
                </p>

                <div className="flex justify-end mt-8">
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
          <div className="w-96">
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
