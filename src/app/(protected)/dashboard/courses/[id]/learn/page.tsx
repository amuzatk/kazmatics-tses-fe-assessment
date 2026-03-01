// app/dashboard/courses/[id]/learn/page.tsx
"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Collapse } from "antd";
import type { CollapseProps } from "antd";

import { mockCourses } from "@/src/utils/constants";
import QuizForm from "@/src/components/ui/QuizForm";

// Lesson content per module (expand as needed)
const modules = [
  {
    key: "introduction",
    title: "Introduction",
    lessons: [
      {
        key: "welcome",
        title: "Welcome Message",
        body: "..." /* paste full welcome text here */,
      },
      { key: "note-style", title: "A Note on Style", body: "..." },
      { key: "what-learn", title: "What You'll Learn", body: "..." },
      { key: "instructor", title: "Meet Your Instructor", body: "..." },
    ],
  },
  {
    key: "setup",
    title: "Setting Up Your Workspace",
    lessons: [
      {
        key: "setup-1",
        title: "Lesson 1 - Workspace Basics",
        body: "Step-by-step setup guide...",
      },
      {
        key: "setup-2",
        title: "Lesson 2 - Tools & Notifications",
        body: "Configuring alerts and preferences...",
      },
    ],
  },
  {
    key: "navigate",
    title: "Navigating the Course",
    lessons: [
      { key: "navigate-1", title: "Lesson 1 - Platform Overview", body: "..." },
      {
        key: "navigate-2",
        title: "Lesson 2 - Progress Tracking",
        body: "How to track your learning progress...",
      },
    ],
  },
  {
    key: "resources",
    title: "Course Resources",
    lessons: [
      {
        key: "resources-1",
        title: "Lesson 1 - Downloads & PDFs",
        body: "Accessing downloadable materials...",
      },
      {
        key: "resources-2",
        title: "Lesson 2 - External Links",
        body: "Recommended external resources...",
      },
    ],
  },
  {
    key: "assessment",
    title: "Assessment",
    isQuiz: true,
    lessons: [],
  },
];

export default function LessonViewerPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const course = mockCourses.find((c) => c.id === id);
  if (!course)
    return <div className="p-10 text-center text-xl">Course not found</div>;

  const [completedLessons, setCompletedLessons] = useState<Set<string>>(
    new Set(),
  );
  const [activeModule, setActiveModule] = useState<string>("introduction");
  const [activeLesson, setActiveLesson] = useState<string>("welcome");

  // Mark lesson complete + auto-advance
  const markComplete = (lessonKey: string) => {
    setCompletedLessons((prev) => new Set([...prev, lessonKey]));

    const currentModuleObj = modules.find((m) => m.key === activeModule);
    if (!currentModuleObj || currentModuleObj.isQuiz) return;

    const lessonIndex = currentModuleObj.lessons.findIndex(
      (l) => l.key === lessonKey,
    );
    if (lessonIndex < 0) return;

    // Next lesson in current module
    if (lessonIndex < currentModuleObj.lessons.length - 1) {
      setActiveLesson(currentModuleObj.lessons[lessonIndex + 1].key);
    } else {
      // All lessons done in current module → move to next module
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

  const isLessonComplete = (key: string) => completedLessons.has(key);

  // Current lesson content
  const currentLessonObj = modules
    .flatMap((m) => m.lessons)
    .find((l) => l.key === activeLesson);

  const currentLesson = currentLessonObj || { title: "", body: "" };

  // Collapse items
  const collapseItems: CollapseProps["items"] = modules.map((module) => ({
    key: module.key,
    label: (
      <div className="flex justify-between items-center w-full pr-4 font-medium text-gray-800">
        <span>{module.title}</span>
        {module.isQuiz ? null : (
          <span className="text-sm text-gray-500">
            ({module.lessons.filter((l) => isLessonComplete(l.key)).length}/
            {module.lessons.length})
          </span>
        )}
      </div>
    ),
    children: module.isQuiz ? (
      <QuizForm onComplete={() => markComplete("assessment")} />
    ) : (
      <div className="space-y-1 py-3">
        {module.lessons.map((lesson) => (
          <div
            key={lesson.key}
            onClick={() => {
              setActiveLesson(lesson.key);
              setActiveModule(module.key);
            }}
            className={`flex items-center gap-4 px-5 py-3.5 cursor-pointer transition-all rounded-lg ${
              activeLesson === lesson.key
                ? "bg-[#E1F5FE] text-[#035177]"
                : "hover:bg-gray-50"
            }`}
          >
            <div
              className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-lg shrink-0 transition-all ${
                isLessonComplete(lesson.key)
                  ? "bg-[#00B000] border-[#00B000] text-white shadow-sm"
                  : "border-gray-300 text-transparent"
              }`}
            >
              {isLessonComplete(lesson.key) ? "✓" : "○"}
            </div>
            <span
              className={`text-[15px] leading-5 ${
                isLessonComplete(lesson.key)
                  ? "text-gray-500 line-through"
                  : "text-gray-900"
              }`}
            >
              {lesson.title}
            </span>
          </div>
        ))}
      </div>
    ),
    extra: module.isQuiz ? (
      isLessonComplete("assessment") ? (
        <span className="text-[#00B000] text-xl font-bold">✓</span>
      ) : null
    ) : module.lessons.every((l) => isLessonComplete(l.key)) ? (
      <span className="text-[#00B000] text-xl font-bold">✓</span>
    ) : null,
  }));

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header – kept exactly as you have */}
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
          <p className="bg-[#E1F5FE] px-5 py-2 rounded-[100px] text-[#035177] border-none">
            {course.category}
          </p>
        </div>
      </div>

      {/* Main layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left – Video + Tabs + Content */}
          <div className="flex-1 space-y-8">
            {/* Video – immediately after header */}
            <div className="rounded-xl overflow-hidden shadow-sm bg-black aspect-video relative">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1&autoplay=0"
                title="Course video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Tabs – right below video */}
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button className="pb-4 px-1 font-medium border-b-2 border-blue-600 text-blue-600">
                  Course Content
                </button>
                <button className="pb-4 px-1 text-gray-500 hover:text-gray-700">
                  Review/Feedbacks
                </button>
              </nav>
            </div>

            {/* Lesson content – only show when not in quiz */}
            {!activeModule.includes("assessment") && currentLesson.title && (
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-6">
                  {currentLesson.title}
                </h2>

                <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: currentLesson.body.replace(/\n/g, "<br/>"),
                    }}
                  />
                </div>

                <div className="mt-10 flex justify-end">
                  <button
                    onClick={() => markComplete(activeLesson)}
                    disabled={isLessonComplete(activeLesson)}
                    className={`
                      px-8 py-3.5 rounded-full font-medium text-white transition
                      ${
                        isLessonComplete(activeLesson)
                          ? "bg-[#00B000] cursor-not-allowed"
                          : "bg-[#0A60E1] hover:bg-blue-700"
                      }
                    `}
                  >
                    {isLessonComplete(activeLesson)
                      ? "Completed ✓"
                      : "Mark as complete"}
                  </button>
                </div>
              </div>
            )}

            {/* Quiz – shown when Assessment module is active */}
            {activeModule.includes("assessment") && (
              <QuizForm onComplete={() => markComplete("assessment")} />
            )}
          </div>

          {/* Right sidebar */}
          <div className="lg:w-96 lg:shrink-0">
            <div className="bg-white rounded-xl shadow-sm sticky top-20 overflow-hidden">
              <Collapse
                items={collapseItems}
                activeKey={activeModule}
                onChange={(key) => {
                  if (Array.isArray(key)) {
                    const newKey = key[0] || "introduction";
                    setActiveModule(newKey);
                    const mod = modules.find((m) => m.key === newKey);
                    if (mod && !mod.isQuiz && mod.lessons.length > 0) {
                      const firstIncomplete = mod.lessons.find(
                        (l) => !isLessonComplete(l.key),
                      );
                      setActiveLesson(
                        firstIncomplete?.key || mod.lessons[0].key,
                      );
                    }
                  }
                }}
                className="border-none [&_.ant-collapse-header]:px-5! [&_.ant-collapse-header]:py-4! [&_.ant-collapse-content-box]:px-0!"
                expandIconPlacement="end"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// // app/dashboard/courses/[id]/learn/page.tsx
// 'use client';

// import { useParams, useRouter } from 'next/navigation';
// import { ArrowLeft } from 'lucide-react';
// import Image from 'next/image';
// import { useState } from 'react';
// import { Collapse } from 'antd';
// import type { CollapseProps } from 'antd';

// import { mockCourses } from '@/src/utils/constants';
// import QuizForm from '@/src/components/ui/QuizForm';

// // Lesson content (move to constants later if needed)
// const lessonContent: Record<string, { title: string; body: string }> = {
//   welcome: {
//     title: "Welcome Message",
//     body: `
// Welcome to 'Communicate with Confidence!' In an era where the pace of work is ever-increasing and the demands on our time are relentless, the ability to communicate effectively has never been more crucial.

// This comprehensive course is meticulously crafted to equip you with the essential skills that will not only enhance your communication abilities but also empower you to thrive in any professional environment you find yourself in.

// Why Communication Matters
// Effective communication is the cornerstone of success in the workplace. It is the bridge that connects individuals, teams, and organizations, facilitating collaboration and understanding. In today's diverse and dynamic work settings, the ability to convey your thoughts clearly and listen actively is paramount.

// This course aims to illuminate the significance of communication and provide you with the tools necessary to master it.

// What You'll Learn
// Throughout this course, you will delve into various aspects of communication, each designed to build upon the last, creating a robust foundation for your skills:

// 1. Clear Articulation: You will learn techniques to express your ideas with clarity and precision, ensuring that your message is understood as intended. This includes understanding your audience and tailoring your message accordingly.

// 2. Active Listening: Developing the ability to listen actively is crucial. You will practice techniques that enhance your listening skills, enabling you to fully engage with others and respond thoughtfully.

// 3. Confident Conversations: Navigating challenging discussions can be daunting. This course will provide you with strategies to approach these conversations with poise and assurance, transforming potential conflicts into constructive dialogues.

// 4. Non-Verbal Communication: Communication is not just about words. You will explore the nuances of non-verbal cues, such as body language and facial expressions, and learn how to utilize them to reinforce your message.

// 5. Persuasive Language: Crafting compelling arguments is an art. You will learn how to influence others positively through the use of persuasive language, enabling you to advocate for your ideas effectively.

// Building a Collaborative Environment
// Mastering these skills will not only enhance your personal communication but will also contribute vitally to building stronger interpersonal relationships within your team. A collaborative work environment is vital for team success, and effective communication is the key to fostering this atmosphere.

// Course Outcomes
// By the end of this transformative course, you will be equipped to:
// - Communicate effectively in any situation, whether in meetings, presentations, or casual conversations.
// - Navigate complex challenges with confidence, turning potential obstacles into opportunities for growth.
// - Contribute significantly to your organization's success through improved communication practices, fostering a culture of openness and collaboration.

// Join us on this journey to transform your communication skills and unlock new heights in your career! Together, we will explore the depths of effective communication, ensuring that you emerge not just as a better communicator, but as a leader in your field.
//     `,
//   },
//   note: {
//     title: "A Note on Style",
//     body: "This section covers the preferred communication style guidelines, tone, and formatting used throughout the course to ensure consistency and professionalism...",
//   },
//   whatlearn: {
//     title: "What You'll Learn",
//     body: "Detailed learning objectives and outcomes for the entire course, broken down by module...",
//   },
//   instructor: {
//     title: "Meet Your Instructor",
//     body: "Introduction to the instructor, their background, expertise, and approach to teaching this course...",
//   },
//   setup: {
//     title: "Setting Up Your Workspace",
//     body: "Step-by-step instructions to prepare your environment for optimal learning: tools, browser settings, notifications, etc...",
//   },
//   navigate: {
//     title: "Navigating the Course",
//     body: "How to use the platform: progress tracking, bookmarks, notes, discussion forums, and more...",
//   },
//   resources: {
//     title: "Course Resources",
//     body: "Downloadable PDFs, cheat sheets, templates, external links, and additional reading materials...",
//   },
// };

// export default function LessonViewerPage() {
//   const { id } = useParams<{ id: string }>();
//   const router = useRouter();

//   const course = mockCourses.find((c) => c.id === id);
//   if (!course) return <div className="p-10 text-center text-xl">Course not found</div>;

//   const [completed, setCompleted] = useState<Set<string>>(new Set());
//   const [activeLesson, setActiveLesson] = useState<string>('welcome');

//   const markComplete = (key: string) => {
//     setCompleted((prev) => {
//       const next = new Set(prev);
//       next.add(key);
//       return next;
//     });

//     // Optional: auto-advance to next lesson
//     const lessonKeys = Object.keys(lessonContent);
//     const currentIndex = lessonKeys.indexOf(key);
//     if (currentIndex < lessonKeys.length - 1) {
//       setActiveLesson(lessonKeys[currentIndex + 1]);
//     }
//   };

//   const isComplete = (key: string) => completed.has(key);

//   const totalLessons = Object.keys(lessonContent).length;
//   const completedCount = completed.size;

//   const collapseItems: CollapseProps['items'] = [
//     {
//       key: 'introduction',
//       label: (
//         <div className="flex justify-between items-center w-full pr-4 font-medium text-gray-800">
//           <span>Introduction</span>
//           <span className="text-sm text-gray-500">({completedCount}/{totalLessons})</span>
//         </div>
//       ),
//       children: (
//         <div className="space-y-1 py-3">
//           {Object.entries(lessonContent).map(([key, { title }]) => (
//             <div
//               key={key}
//               onClick={() => setActiveLesson(key)}
//               className={`flex items-center gap-4 px-5 py-3.5 cursor-pointer transition-all rounded-lg ${
//                 activeLesson === key ? 'bg-[#E1F5FE] text-[#035177]' : 'hover:bg-gray-50'
//               }`}
//             >
//               <div
//                 className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-lg flex-shrink-0 transition-all ${
//                   isComplete(key)
//                     ? 'bg-[#00B000] border-[#00B000] text-white shadow-sm'
//                     : 'border-gray-300 text-transparent'
//                 }`}
//               >
//                 {isComplete(key) ? '✓' : '○'}
//               </div>
//               <span
//                 className={`text-[15px] leading-5 ${
//                   isComplete(key) ? 'text-gray-500 line-through' : 'text-gray-900'
//                 }`}
//               >
//                 {title}
//               </span>
//             </div>
//           ))}
//         </div>
//       ),
//     },
//     {
//       key: 'setup',
//       label: 'Setting Up Your Workspace',
//       extra: isComplete('setup') ? <span className="text-[#00B000] text-xl font-bold">✓</span> : null,
//     },
//     {
//       key: 'navigate',
//       label: 'Navigating the Course',
//       extra: isComplete('navigate') ? <span className="text-[#00B000] text-xl font-bold">✓</span> : null,
//     },
//     {
//       key: 'resources',
//       label: 'Course Resources',
//       extra: isComplete('resources') ? <span className="text-[#00B000] text-xl font-bold">✓</span> : null,
//     },
//     {
//       key: 'assessment',
//       label: 'Assessment',
//       children: <QuizForm onComplete={() => markComplete('assessment')} />,
//       extra: isComplete('assessment') ? <span className="text-[#00B000] text-xl font-bold">✓</span> : null,
//     },
//   ];

//   const currentLesson = lessonContent[activeLesson] || lessonContent.welcome;

//   return (
//     <div className="min-h-screen bg-gray-50 pb-16">
//       {/* Header – exact as you have */}
//                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
//                 <button
//                   onClick={() => router.back()}
//                   className=" rounded-full cursor-pointer hover:bg-gray-100 transition"
//                 >
//                   <Image src={"/icons/circle-back.png"} alt={"back-arrow"} width={44} height={44} className="object-cover" />
//                 </button>

//                   <h1 className="font-medium text-2xl text-[#202020]">
//                     {course.title}
//                   </h1>
//                      <p className="bg-[#E1F5FE] px-5 py-2 rounded-[100px] text-[#035177] border-none">
//                     {course.category}
//                   </p>
//               </div>
//             </div>

//       {/* Main layout */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Left – Video + Tabs + Content */}
//           <div className="flex-1 space-y-8">
//             {/* Video – immediately after header */}
//             <div className="rounded-xl overflow-hidden shadow-sm bg-black aspect-video relative">
//               <iframe
//                 width="100%"
//                 height="100%"
//                 src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1" // dummy – replace
//                 title="Course video"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//             </div>

//             {/* Tabs – right below video */}
//             <div className="border-b border-gray-200">
//               <nav className="-mb-px flex space-x-8">
//                 <button className="pb-4 px-1 font-medium border-b-2 border-blue-600 text-blue-600">
//                   Course Content
//                 </button>
//                 <button className="pb-4 px-1 text-gray-500 hover:text-gray-700">
//                   Review/Feedbacks
//                 </button>
//               </nav>
//             </div>

//             {/* Lesson content */}
//             <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
//               <h2 className="text-2xl font-semibold mb-6">{currentLesson.title}</h2>

//               <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
//                 <div dangerouslySetInnerHTML={{ __html: currentLesson.body.replace(/\n/g, '<br/>') }} />
//               </div>

//               <div className="mt-10 flex justify-end">
//                 <button
//                   onClick={() => markComplete(activeLesson)}
//                   disabled={isComplete(activeLesson)}
//                   className={`
//                     px-8 py-3.5 rounded-full font-medium text-white transition
//                     ${isComplete(activeLesson)
//                       ? 'bg-[#00B000] cursor-not-allowed'
//                       : 'bg-[#0A60E1] hover:bg-blue-700'}
//                   `}
//                 >
//                   {isComplete(activeLesson) ? 'Completed ✓' : 'Mark as complete'}
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Right sidebar – Lessons list */}
//           <div className="lg:w-96 lg:shrink-0">
//             <div className="bg-white rounded-xl shadow-sm sticky top-20 overflow-hidden">
//               <Collapse
//                 items={collapseItems}
//                 defaultActiveKey={['introduction']}
//                 onChange={(key) => {
//                   if (typeof key === 'string' && key !== 'assessment') {
//                     // Optional: auto-switch to first lesson in section
//                   }
//                 }}
//                 className="border-none [&_.ant-collapse-header]:!px-5 [&_.ant-collapse-header]:!py-4 [&_.ant-collapse-content-box]:!px-0"
//                 expandIconPlacement="end"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // app/dashboard/courses/[id]/learn/page.tsx
// 'use client';

// import { useParams, useRouter } from 'next/navigation';
// import { ArrowLeft } from 'lucide-react';
// import Image from 'next/image';
// import { useState } from 'react';
// import { Collapse } from 'antd';
// import type { CollapseProps } from 'antd';

// import { mockCourses } from '@/src/utils/constants';

// // Simple video placeholder (replace with real player later)
// function VideoPlaceholder() {
//   return (
//     <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden flex items-center justify-center group">
//       <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
//       <button className="relative z-10 w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-lg hover:bg-blue-700 transition">
//         <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M8 5v14l11-7z" />
//         </svg>
//       </button>
//     </div>
//   );
// }

// // Simple quiz form (expand as needed)
// function QuizForm({ onComplete }: { onComplete: () => void }) {
//   return (
//     <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
//       <h2 className="text-xl md:text-2xl font-semibold mb-8">Quiz</h2>

//       <div className="space-y-10">
//         <div>
//           <p className="font-medium text-lg mb-4">1. What is the purpose of React Hooks?</p>
//           <div className="space-y-3">
//             <label className="flex items-center gap-3 cursor-pointer">
//               <input type="radio" name="q1" className="w-5 h-5" />
//               <span>To use state and other features in functional components</span>
//             </label>
//             {/* Add other options */}
//           </div>
//         </div>

//         {/* More questions... */}

//         <button
//           onClick={onComplete}
//           className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-blue-700 transition w-full sm:w-auto"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// }

// export default function LessonViewerPage() {
//   const { id } = useParams<{ id: string }>();
//   const router = useRouter();

//   const course = mockCourses.find((c) => c.id === id);
//   if (!course) return <div className="p-10 text-center text-xl">Course not found</div>;

//   // Track completed lessons
//   const [completed, setCompleted] = useState<Set<string>>(new Set());

//   const markComplete = (key: string) => {
//     setCompleted((prev) => new Set([...prev, key]));
//   };

//   const isComplete = (key: string) => completed.has(key);

//   // Collapsible items (matches screenshots)
//   const collapseItems: CollapseProps['items'] = [
//     {
//       key: 'introduction',
//       label: (
//         <div className="flex justify-between items-center w-full pr-4">
//           <span className="font-medium text-gray-800">Introduction</span>
//           <span className="text-sm text-gray-500">({completed.size}/5)</span>
//         </div>
//       ),
//       children: (
//         <div className="space-y-1 py-2">
//           {[
//             { key: 'welcome', label: 'Welcome Message' },
//             { key: 'note', label: 'A Note on Style' },
//             { key: 'learn', label: "What You'll Learn" },
//             { key: 'instructor', label: 'Meet Your Instructor' },
//           ].map((item) => (
//             <div
//               key={item.key}
//               className={`flex items-center gap-3 px-4 py-2.5 rounded-lg cursor-default ${
//                 isComplete(item.key) ? 'bg-blue-50' : 'hover:bg-gray-50'
//               }`}
//             >
//               <div
//                 className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-base shrink-0 transition-all ${
//                   isComplete(item.key)
//                     ? 'bg-green-500 border-green-500 text-white shadow-sm'
//                     : 'border-gray-300 text-transparent'
//                 }`}
//               >
//                 {isComplete(item.key) ? '✓' : '○'}
//               </div>
//               <span
//                 className={`text-[15px] ${
//                   isComplete(item.key) ? 'text-gray-500 line-through' : 'text-gray-800'
//                 }`}
//               >
//                 {item.label}
//               </span>
//             </div>
//           ))}
//         </div>
//       ),
//     },
//     {
//       key: 'setup',
//       label: 'Setting Up Your Workspace',
//       extra: isComplete('setup') ? (
//         <span className="text-green-500 text-xl font-bold">✓</span>
//       ) : null,
//     },
//     {
//       key: 'navigate',
//       label: 'Navigating the Course',
//       extra: isComplete('navigate') ? (
//         <span className="text-green-500 text-xl font-bold">✓</span>
//       ) : null,
//     },
//     {
//       key: 'resources',
//       label: 'Course Resources',
//       extra: isComplete('resources') ? (
//         <span className="text-green-500 text-xl font-bold">✓</span>
//       ) : null,
//     },
//     {
//       key: 'assessment',
//       label: 'Assessment',
//       children: <QuizForm onComplete={() => markComplete('assessment')} />,
//       extra: isComplete('assessment') ? (
//         <span className="text-green-500 text-xl font-bold">✓</span>
//       ) : null,
//     },
//   ];

//   // Active panel
//   const [activePanel, setActivePanel] = useState<string | string[]>(['introduction']);
//   const isQuizView = activePanel.includes('assessment');

//   return (
//     <div className="min-h-screen bg-gray-50 pb-16">
//       {/* Header */}
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
//                 <button
//                   onClick={() => router.back()}
//                   className=" rounded-full cursor-pointer hover:bg-gray-100 transition"
//                 >
//                   <Image src={"/icons/circle-back.png"} alt={"back-arrow"} width={44} height={44} className="object-cover" />
//                 </button>

//                   <h1 className="font-medium text-2xl text-[#202020]">
//                     {course.title}
//                   </h1>
//                      <p className="bg-[#E1F5FE] px-5 py-2 rounded-[100px] text-[#035177] border-none">
//                     {course.category}
//                   </p>
//               </div>
//             </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Main content area */}
//           <div className="flex-1 space-y-8">
//             {/* Tabs */}
//             <div className="border-b border-gray-200">
//               <nav className="-mb-px flex space-x-8">
//                 <button
//                   className="
//                     pb-4 px-1 font-medium text-blue-600 border-b-2 border-blue-600
//                   "
//                 >
//                   Course Content
//                 </button>
//                 <button
//                   className="
//                     pb-4 px-1 text-gray-500 hover:text-gray-700
//                   "
//                 >
//                   Review/Feedbacks
//                 </button>
//               </nav>
//             </div>

//             {/* Video or Quiz content */}
//             {!isQuizView ? (
//               <div className="space-y-6">
//                 <VideoPlaceholder />
//                 <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
//                   <h2 className="text-xl md:text-2xl font-semibold mb-6">
//                     Lesson 1 - Welcome Message
//                   </h2>

//                   <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
//                     <p>
//                       Welcome to <strong>Communicate with Confidence!</strong> In an era where the pace of work is ever-increasing and the demands on our time are relentless, the ability to communicate effectively has never been more crucial.
//                     </p>

//                     <h3 className="text-lg font-semibold mt-8">Why Communication Matters</h3>
//                     <p>
//                       Effective communication is the cornerstone of success in the workplace. It is the bridge that connects individuals, teams, and organizations, facilitating collaboration and understanding...
//                     </p>

//                     <h3 className="text-lg font-semibold mt-8">What You'll Learn</h3>
//                     <p>Throughout this course, you will delve into various aspects of communication...</p>

//                     <ol className="list-decimal pl-6 space-y-3">
//                       <li><strong>Clear Articulation</strong>: You will learn techniques to express your ideas with clarity and precision...</li>
//                       <li><strong>Active Listening</strong>: Developing the ability to listen actively is crucial...</li>
//                       {/* Add the rest from your screenshot */}
//                     </ol>

//                     <h3 className="text-lg font-semibold mt-8">Course Outcomes</h3>
//                     <p>By the end of this transformative course, you will be equipped to:</p>
//                     <ul className="list-disc pl-6 space-y-2">
//                       <li>Communicate effectively in any situation...</li>
//                       <li>Navigate complex challenges with confidence...</li>
//                       <li>Contribute significantly to your organization's success...</li>
//                     </ul>
//                   </div>

//                   <div className="mt-10 flex justify-end">
//                     <button
//                       onClick={() => markComplete('welcome')}
//                       disabled={isComplete('welcome')}
//                       className={`
//                         px-8 py-3.5 rounded-lg font-medium transition text-white
//                         ${isComplete('welcome')
//                           ? 'bg-green-600 cursor-not-allowed'
//                           : 'bg-blue-600 hover:bg-blue-700'}
//                       `}
//                     >
//                       {isComplete('welcome') ? 'Completed ✓' : 'Mark as complete'}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <QuizForm onComplete={() => markComplete('assessment')} />
//             )}
//           </div>

//           {/* Right sidebar - Lessons */}
//           <div className="lg:w-96 lg:shrink-0">
//             <div className="bg-white rounded-xl shadow-sm sticky top-20 overflow-hidden">
//               <Collapse
//                 items={collapseItems}
//                 defaultActiveKey={['intro']}
//                 onChange={setActivePanel}
//                 className="border-none"
//                 expandIconPlacement="end"  // fixed deprecation
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
