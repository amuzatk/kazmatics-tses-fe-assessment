// // src/components/ui/QuizForm.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

interface QuizFormProps {
  onComplete: () => void;
}

interface Question {
  id: number;
  question: string;
  type: "mcq" | "text";
  options?: string[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is the purpose of React Hooks?",
    type: "mcq",
    options: [
      "To use state and other React features in functional components",
      "To create class components",
      "To style React components",
      "To handle routing in React applications",
    ],
  },
  {
    id: 2,
    question: "Explain the Virtual DOM and its benefits",
    type: "text",
  },
];

export default function QuizForm({ onComplete }: QuizFormProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-8">
      <h2 className="text-xl font-semibold mb-8">Quiz</h2>

      <div className="space-y-10">
        {questions.map((q) => (
          <div key={q.id} className="space-y-5">
            <div className="flex items-start gap-4">
              {/* Blue Question Number */}
              <div className="w-8 h-8 rounded-full bg-[#0A60E1] text-white flex items-center justify-center text-sm font-semibold">
                {q.id}
              </div>

              <div className="flex-1">
                <p className="font-medium text-[15px] text-[#202020]">
                  {q.question}
                </p>

                {q.type === "mcq" && (
                  <div className="mt-5 space-y-3">
                    {q.options?.map((opt, index) => (
                      <label
                        key={index}
                        className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 cursor-pointer hover:border-[#0A60E1] transition"
                      >
                        <input
                          type="radio"
                          name={`q-${q.id}`}
                          className="accent-[#0A60E1]"
                          onChange={() =>
                            setAnswers((prev) => ({
                              ...prev,
                              [q.id]: opt,
                            }))
                          }
                        />
                        <span className="text-sm text-gray-700">
                          {opt}
                        </span>
                      </label>
                    ))}
                  </div>
                )}

                {q.type === "text" && (
                  <textarea
                    rows={4}
                    className="mt-4 w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A60E1]"
                    placeholder="Enter answer here"
                  />
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-end pt-6">
          <button
  onClick={onComplete}
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
  Submit
</button>
          {/* <button
            onClick={onComplete}
            className="px-8 py-3 rounded-lg bg-[#0A60E1] text-white font-medium hover:bg-blue-700 transition"
          >
            Submit
          </button> */}
        </div>
      </div>
    </div>
  );
}




// // src/components/ui/QuizForm.tsx
// interface QuizFormProps {
//   onComplete: () => void;
// }

// export default function QuizForm({ onComplete }: QuizFormProps) {
//   return (
//     <div className="bg-white rounded-xl shadow p-6">
//       <h2 className="text-xl font-semibold mb-6">Quiz</h2>

//       <div className="space-y-8">
//         <div>
//           <p className="font-medium mb-3">
//             1. What is the purpose of React Hooks?
//           </p>
//           <div className="space-y-2">
//             <label className="flex items-center gap-2">
//               <input type="radio" name="q1" />
//               <span>
//                 To use state and other features in functional components
//               </span>
//             </label>
//             {/* other options */}
//           </div>
//         </div>

//         {/* More questions... */}

//         <button
//           onClick={onComplete}
//           className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
//         >
//           Submit Quiz
//         </button>
//       </div>
//     </div>
//   );
// }
