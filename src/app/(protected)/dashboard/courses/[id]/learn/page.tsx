// app/dashboard/courses/[id]/learn/page.tsx
'use client';

import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Collapse } from 'antd';
import type { CollapseProps } from 'antd';

import { mockCourses } from '@/src/utils/constants';

// Simple video placeholder (replace with real player later)
function VideoPlaceholder() {
  return (
    <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden flex items-center justify-center group">
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
      <button className="relative z-10 w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-lg hover:bg-blue-700 transition">
        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </div>
  );
}

// Simple quiz form (expand as needed)
function QuizForm({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
      <h2 className="text-xl md:text-2xl font-semibold mb-8">Quiz</h2>

      <div className="space-y-10">
        <div>
          <p className="font-medium text-lg mb-4">1. What is the purpose of React Hooks?</p>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="q1" className="w-5 h-5" />
              <span>To use state and other features in functional components</span>
            </label>
            {/* Add other options */}
          </div>
        </div>

        {/* More questions... */}

        <button
          onClick={onComplete}
          className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-blue-700 transition w-full sm:w-auto"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default function LessonViewerPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const course = mockCourses.find((c) => c.id === id);
  if (!course) return <div className="p-10 text-center text-xl">Course not found</div>;

  // Track completed lessons
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  const markComplete = (key: string) => {
    setCompleted((prev) => new Set([...prev, key]));
  };

  const isComplete = (key: string) => completed.has(key);

  // Collapsible items (matches screenshots)
  const collapseItems: CollapseProps['items'] = [
    {
      key: 'introduction',
      label: (
        <div className="flex justify-between items-center w-full pr-4">
          <span className="font-medium text-gray-800">Introduction</span>
          <span className="text-sm text-gray-500">({completed.size}/5)</span>
        </div>
      ),
      children: (
        <div className="space-y-1 py-2">
          {[
            { key: 'welcome', label: 'Welcome Message' },
            { key: 'note', label: 'A Note on Style' },
            { key: 'learn', label: "What You'll Learn" },
            { key: 'instructor', label: 'Meet Your Instructor' },
          ].map((item) => (
            <div
              key={item.key}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg cursor-default ${
                isComplete(item.key) ? 'bg-blue-50' : 'hover:bg-gray-50'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-base shrink-0 transition-all ${
                  isComplete(item.key)
                    ? 'bg-green-500 border-green-500 text-white shadow-sm'
                    : 'border-gray-300 text-transparent'
                }`}
              >
                {isComplete(item.key) ? '✓' : '○'}
              </div>
              <span
                className={`text-[15px] ${
                  isComplete(item.key) ? 'text-gray-500 line-through' : 'text-gray-800'
                }`}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      ),
    },
    {
      key: 'setup',
      label: 'Setting Up Your Workspace',
      extra: isComplete('setup') ? (
        <span className="text-green-500 text-xl font-bold">✓</span>
      ) : null,
    },
    {
      key: 'navigate',
      label: 'Navigating the Course',
      extra: isComplete('navigate') ? (
        <span className="text-green-500 text-xl font-bold">✓</span>
      ) : null,
    },
    {
      key: 'resources',
      label: 'Course Resources',
      extra: isComplete('resources') ? (
        <span className="text-green-500 text-xl font-bold">✓</span>
      ) : null,
    },
    {
      key: 'assessment',
      label: 'Assessment',
      children: <QuizForm onComplete={() => markComplete('assessment')} />,
      extra: isComplete('assessment') ? (
        <span className="text-green-500 text-xl font-bold">✓</span>
      ) : null,
    },
  ];

  // Active panel
  const [activePanel, setActivePanel] = useState<string | string[]>(['introduction']);
  const isQuizView = activePanel.includes('assessment');

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <ArrowLeft className="h-6 w-6 text-gray-600" />
            </button>
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
                {course.title}
              </h1>
              <p className="text-sm text-blue-600 font-medium">{course.category}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content area */}
          <div className="flex-1 space-y-8">
            {/* Tabs */}
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  className="
                    pb-4 px-1 font-medium text-blue-600 border-b-2 border-blue-600
                  "
                >
                  Course Content
                </button>
                <button
                  className="
                    pb-4 px-1 text-gray-500 hover:text-gray-700
                  "
                >
                  Review/Feedbacks
                </button>
              </nav>
            </div>

            {/* Video or Quiz content */}
            {!isQuizView ? (
              <div className="space-y-6">
                <VideoPlaceholder />
                <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-semibold mb-6">
                    Lesson 1 - Welcome Message
                  </h2>

                  <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
                    <p>
                      Welcome to <strong>Communicate with Confidence!</strong> In an era where the pace of work is ever-increasing and the demands on our time are relentless, the ability to communicate effectively has never been more crucial.
                    </p>

                    <h3 className="text-lg font-semibold mt-8">Why Communication Matters</h3>
                    <p>
                      Effective communication is the cornerstone of success in the workplace. It is the bridge that connects individuals, teams, and organizations, facilitating collaboration and understanding...
                    </p>

                    <h3 className="text-lg font-semibold mt-8">What You'll Learn</h3>
                    <p>Throughout this course, you will delve into various aspects of communication...</p>

                    <ol className="list-decimal pl-6 space-y-3">
                      <li><strong>Clear Articulation</strong>: You will learn techniques to express your ideas with clarity and precision...</li>
                      <li><strong>Active Listening</strong>: Developing the ability to listen actively is crucial...</li>
                      {/* Add the rest from your screenshot */}
                    </ol>

                    <h3 className="text-lg font-semibold mt-8">Course Outcomes</h3>
                    <p>By the end of this transformative course, you will be equipped to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Communicate effectively in any situation...</li>
                      <li>Navigate complex challenges with confidence...</li>
                      <li>Contribute significantly to your organization's success...</li>
                    </ul>
                  </div>

                  <div className="mt-10 flex justify-end">
                    <button
                      onClick={() => markComplete('welcome')}
                      disabled={isComplete('welcome')}
                      className={`
                        px-8 py-3.5 rounded-lg font-medium transition text-white
                        ${isComplete('welcome')
                          ? 'bg-green-600 cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-700'}
                      `}
                    >
                      {isComplete('welcome') ? 'Completed ✓' : 'Mark as complete'}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <QuizForm onComplete={() => markComplete('assessment')} />
            )}
          </div>

          {/* Right sidebar - Lessons */}
          <div className="lg:w-96 lg:shrink-0">
            <div className="bg-white rounded-xl shadow-sm sticky top-20 overflow-hidden">
              <Collapse
                items={collapseItems}
                defaultActiveKey={['intro']}
                onChange={setActivePanel}
                className="border-none"
                expandIconPlacement="end"  // fixed deprecation
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

// import VideoPlaceholder from '@/src/components/ui/VideoPlaceholder';
// import QuizForm from '@/src/components/ui/QuizForm';
// import { mockCourses } from '@/src/utils/constants';

// const { Panel } = Collapse;

// export default function LessonViewerPage() {
//   const { id } = useParams<{ id: string }>();
//   const router = useRouter();

//   const course = mockCourses.find((c) => c.id === id);
//   if (!course) {
//     return <div className="p-10 text-center text-xl">Course not found</div>;
//   }

//   // Track completed sub-lessons
//   const [completed, setCompleted] = useState<Set<string>>(new Set());

//   const markComplete = (key: string) => {
//     setCompleted((prev) => new Set([...prev, key]));
//   };

//   const isComplete = (key: string) => completed.has(key);

//   // Collapsible structure
//   const collapseItems: CollapseProps['items'] = [
//     {
//       key: 'intro',
//       label: (
//         <div className="flex justify-between items-center w-full pr-4">
//           <span>Introduction</span>
//           <span className="text-xs text-gray-500">(0/5)</span>
//         </div>
//       ),
//       children: (
//         <div className="pl-6 space-y-2 py-2">
//           {[
//             { key: 'welcome', label: 'Welcome Message' },
//             { key: 'note', label: 'A Note on Style' },
//             { key: 'learn', label: "What You'll Learn" },
//             { key: 'instructor', label: 'Meet Your Instructor' },
//           ].map((item) => (
//             <div
//               key={item.key}
//               className={`flex items-center gap-3 p-2.5 rounded cursor-pointer hover:bg-gray-50 ${
//                 isComplete(item.key) ? 'bg-blue-50' : ''
//               }`}
//             >
//               <div
//                 className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs shrink-0 ${
//                   isComplete(item.key)
//                     ? 'bg-green-500 border-green-500 text-white'
//                     : 'border-gray-400'
//                 }`}
//               >
//                 {isComplete(item.key) ? '✓' : '○'}
//               </div>
//               <span className={isComplete(item.key) ? 'text-gray-500 line-through' : 'text-gray-800'}>
//                 {item.label}
//               </span>
//             </div>
//           ))}
//         </div>
//       ),
//     },
//     // ... other sections (setup, navigate, resources, assessment) ...
//     {
//       key: 'assessment',
//       label: 'Assessment',
//       children: <QuizForm onComplete={() => markComplete('assessment')} />,
//       extra: isComplete('assessment') ? (
//         <span className="text-green-500 text-lg font-bold">✓</span>
//       ) : null,
//     },
//   ];

//   const [activePanel, setActivePanel] = useState<string | string[]>(['intro']);
//   const isQuizView = activePanel.includes('assessment');

//   return (
//     <div className="min-h-screen bg-gray-50 pb-12">
//       {/* Header - reused from Screen 2 style */}
//       <div className="bg-white border-b border-gray-200 sticky top-0 z-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
//           <div className="flex items-center gap-4">
//             <button
//               onClick={() => router.back()}
//               className="p-2 rounded-full hover:bg-gray-100 transition"
//             >
//               <ArrowLeft className="h-6 w-6 text-gray-600" />
//             </button>
//             <div>
//               <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
//                 {course.title}
//               </h1>
//               <p className="text-sm text-blue-600">{course.category}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Main lesson content */}
//           <div className="flex-1 space-y-8">
//             {/* Tabs */}
//             <div className="border-b border-gray-200">
//               <div className="flex space-x-8 -mb-px">
//                 <button className="pb-4 px-1 font-medium border-b-2 border-blue-600 text-blue-600">
//                   Course Content
//                 </button>
//                 <button className="pb-4 px-1 text-gray-500 hover:text-gray-700">
//                   Review/Feedbacks
//                 </button>
//               </div>
//             </div>

//             {/* Conditional: video or quiz */}
//             {!isQuizView ? (
//               <div className="space-y-6">
//                 <VideoPlaceholder />
//                 <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
//                   <h2 className="text-xl md:text-2xl font-semibold mb-6">
//                     Lesson 1 - Welcome Message
//                   </h2>
//                   <div className="prose max-w-none text-gray-700 space-y-6">
//                     {/* Your lesson content here */}
//                     <p>
//                       Welcome to <strong>Communicate with Confidence!</strong> ...
//                     </p>
//                     <h3>Why Communication Matters</h3>
//                     <p>Effective communication is the cornerstone...</p>
//                     {/* ... paste the rest of your lesson text ... */}
//                   </div>

//                   <div className="mt-8">
//                     <button
//                       onClick={() => markComplete('welcome')}
//                       disabled={isComplete('welcome')}
//                       className={`
//                         px-6 py-3 rounded-lg font-medium transition
//                         ${isComplete('welcome')
//                           ? 'bg-green-600 text-white cursor-not-allowed'
//                           : 'bg-blue-600 text-white hover:bg-blue-700'}
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

//           {/* Right sidebar: Lessons list */}
//           <div className="lg:w-96 lg:shrink-0">
//             <div className="bg-white rounded-xl shadow-sm sticky top-20">
//              <div className="bg-white rounded-xl shadow-sm sticky top-20">
//   <Collapse
//     items={collapseItems}
//     defaultActiveKey={['intro']}
//     onChange={setActivePanel}
//     className="border-none"
//     expandIconPlacement="end"   // fixed property name
//   />
// </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
