"use client";

import Image from "next/image";
import {
  CircleOutlineIcon,
  CircleTickIcon,
  ModuleCompletedIcon,
} from "@/src/svg";

interface Lesson {
  key: string;
  title: string;
}

interface Module {
  key: string;
  title: string;
  lessons: Lesson[];
  isQuiz?: boolean;
}

interface Props {
  modules: Module[];
  activeModule: string;
  activeLesson: string;
  completedLessons: Set<string>;
  onModuleChange: (key: string) => void;
  onLessonClick: (moduleKey: string, lessonKey: string) => void;
}

export default function LessonSidebar({
  modules,
  activeModule,
  activeLesson,
  completedLessons,
  onModuleChange,
  onLessonClick,
}: Props) {
  const isLessonComplete = (key: string) => completedLessons.has(key);

  return (
    <div className="bg-white rounded-xl border border-[#D9D9D9] ">
      <div className="border-b h-10 flex justify-items-start items-center pl-5 border-[#D9D9D9] ">
        <p className="text-[14px]  text-[#636363] "> Lessons (0/32)</p>
      </div>
      <div className="space-y-0 p-0">
        {modules.map((module) => {
          const isOpen = activeModule === module.key;

          const completedCount = module.lessons.filter((l) =>
            isLessonComplete(l.key),
          ).length;

          const allComplete = module.isQuiz
            ? completedLessons.has("assessment")
            : module.lessons.length > 0 &&
              completedCount === module.lessons.length;

          return (
            <div key={module.key}>
              {/* MODULE HEADER */}
              <button
                onClick={() => onModuleChange(module.key)}
                className="w-full flex items-center justify-between py-5 px-5 text-left"
              >
                <span className="font-bold text-[#202020] text-[16px]">
                  {module.title}
                </span>

                <div className="flex items-center gap-2">
                  {allComplete && !isOpen && (
                    <ModuleCompletedIcon width={24} height={24} />
                  )}

                  <Image
                    src="/icons/arrow-down.png"
                    alt="chevron"
                    width={24}
                    height={24}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {/* LESSONS */}
              {isOpen && !module.isQuiz && (
                <div className="mt-0 ml-3 mr-3 space-y-2 px-0 ">
                  {module.lessons.map((lesson) => {
                    const completed = isLessonComplete(lesson.key);

                    const isActive = activeLesson === lesson.key;

                    // IMPORTANT: Determine if lesson has started
                    const hasStarted = completed || isActive;

                    return (
                      <div
                        key={lesson.key}
                        onClick={() => onLessonClick(module.key, lesson.key)}
                        className={`
                          flex items-center justify-between
                          px-2 py-2.5 rounded-xl
                          cursor-pointer transition
                          ${
                            hasStarted
                              ? "bg-[#EAF3FF]"
                              : "bg-white hover:bg-gray-50"
                          }
                        `}
                      >
                        {/* TITLE */}
                        <span
                          className={`
    text-[14px]
    ${hasStarted ? "text-[#0A60E1]" : "text-gray-600"}
  `}
                        >
                          {lesson.title}
                        </span>

                        {/* RIGHT ICON */}
                        {hasStarted &&
                          (completed ? (
                            <CircleTickIcon
                              width={24}
                              height={24}
                              stroke="#0A60E1"
                            />
                          ) : (
                            <CircleOutlineIcon
                              width={24}
                              height={24}
                              stroke="#0A60E1"
                            />
                          ))}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* QUIZ LABEL */}
              {isOpen && module.isQuiz && (
                <div className="mt-3 text-sm text-gray-600 px-4 py-3">
                  Final Assessment
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// // //src/components/ui/LessonSidebar.tsx
// "use client";

// import Image from "next/image";
// import {
//   CircleOutlineIcon,
//   CircleTickIcon,
//   ModuleCompletedIcon,
// } from "@/src/svg";

// interface Lesson {
//   key: string;
//   title: string;
// }

// interface Module {
//   key: string;
//   title: string;
//   lessons: Lesson[];
//   isQuiz?: boolean;
// }

// interface Props {
//   modules: Module[];
//   activeModule: string;
//   activeLesson: string;
//   completedLessons: Set<string>;
//   onModuleChange: (key: string) => void;
//   onLessonClick: (moduleKey: string, lessonKey: string) => void;
// }

// export default function LessonSidebar({
//   modules,
//   activeModule,
//   activeLesson,
//   completedLessons,
//   onModuleChange,
//   onLessonClick,
// }: Props) {
//   const isLessonComplete = (key: string) =>
//     completedLessons.has(key);

//   return (
//     <div className="bg-white rounded-xl border border-gray-200 p-5">
//       <div className="space-y-4">
//         {modules.map((module) => {
//           const isOpen = activeModule === module.key;

//           const completedCount = module.lessons.filter((l) =>
//             isLessonComplete(l.key),
//           ).length;

//           const allComplete =
//             module.isQuiz
//               ? completedLessons.has("assessment")
//               : module.lessons.length > 0 &&
//                 completedCount === module.lessons.length;

//           return (
//             <div key={module.key}>
//               {/* MODULE HEADER */}
//               <button
//                 onClick={() => onModuleChange(module.key)}
//                 className="w-full flex items-center justify-between py-2 text-left"
//               >
//                 <span className="font-medium text-[#202020] text-sm">
//                   {module.title}
//                 </span>

//                 <div className="flex items-center gap-2">
//                   {/* Module completed icon */}
//                   {allComplete && !isOpen && (
//                     <ModuleCompletedIcon width={18} height={18} />
//                   )}

//                   {/* Chevron */}
//                   <Image
//                     src="/icons/arrow-down.png"
//                     alt="chevron"
//                     width={18}
//                     height={18}
//                     className={`transition-transform duration-300 ${
//                       isOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </div>
//               </button>

//               {/* LESSONS */}
//               {isOpen && !module.isQuiz && (
//                 <div className="mt-3 space-y-3 pl-2">
//                   {module.lessons.map((lesson) => {
//                     const completed =
//                       isLessonComplete(lesson.key);

//                     const isActive =
//                       activeLesson === lesson.key;

//                     return (
//                       <div
//                         key={lesson.key}
//                         onClick={() =>
//                           onLessonClick(
//                             module.key,
//                             lesson.key,
//                           )
//                         }
//                         className="flex items-center gap-3 cursor-pointer"
//                       >
//                         {/* Icon */}
//                         {completed ? (
//                           <CircleTickIcon
//                             width={18}
//                             height={18}
//                             stroke="#0A60E1"
//                           />
//                         ) : (
//                           <CircleOutlineIcon
//                             width={18}
//                             height={18}
//                             stroke="#0A60E1"
//                           />
//                         )}

//                         {/* Title */}
//                         <span
//                           className={`text-sm ${
//                             isActive
//                               ? "text-[#0A60E1] font-medium"
//                               : "text-gray-600 hover:text-[#0A60E1]"
//                           }`}
//                         >
//                           {lesson.title}
//                         </span>
//                       </div>
//                     );
//                   })}
//                 </div>
//               )}

//               {/* QUIZ ITEM */}
//               {isOpen && module.isQuiz && (
//                 <div className="mt-3 pl-2 text-sm text-gray-600">
//                   Final Assessment
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
